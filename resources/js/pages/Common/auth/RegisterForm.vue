<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  phone: '',
  birth_date: '',
  city: null,
  state: null,
})

const { data: states } = useQuery({
  queryKey: ['states'],
  queryFn: () => fetchStates(),
  initialData: [],
})

const cities = ref([])

const fetchStates = async () =>
  await fetch(
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome&view=nivelado',
  ).then((response) => response.json())

const onStateSelected = () => {
  if (!form.state) {
    return
  }

  fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${form.state['UF-id']}/municipios?orderBy=nome&view=nivelado`,
  )
    .then((response) => response.json())
    .then((data) => {
      cities.value = data
    })
}
</script>

<template>
  <AppForm
    :form="form"
    :routes="{
      post: () => route('auth.register'),
    }"
  >
    <div class="divider font-bold">Credenciais</div>
    <AppInput
      v-model="form.email"
      label="E-mail"
      placeholder="Digite seu e-mail..."
      name="email"
      :error-message="form.errors.email"
    />
    <AppInput
      v-model="form.password"
      label="Senha"
      placeholder="Digite sua senha..."
      type="password"
      name="password"
      :error-message="form.errors.password"
    />
    <AppInput
      v-model="form.password_confirmation"
      placeholder="Repita a senha..."
      label="Confirme a senha"
      name="password"
      type="password"
    />

    <div class="divider font-bold">Informações pessoais</div>
    <AppInput
      v-model="form.name"
      placeholder="Digite seu nome..."
      label="Nome"
      name="name"
      :error-message="form.errors.name"
    />
    <AppInput
      v-model="form.birth_date"
      placeholder="Digite sua data de nascimento..."
      label="Data de nascimento"
      name="birth_date"
      mask="##/##/####"
      :error-message="form.errors.birth_date"
    />
    <AppCombobox
      v-model="form.state"
      by="UF-id"
      :items="states"
      placeholder="Selecione um estado..."
      label="Estado"
      name="state"
      :display-value="(item) => (item ? item['UF-nome'] : '')"
      :error-message="form.errors.state"
      @update:model-value="onStateSelected"
    >
      <template #option="item">
        {{ item['UF-nome'] }}
      </template>
    </AppCombobox>

    <AppCombobox
      v-model="form.city"
      by="municipio-id"
      :items="cities"
      placeholder="Selecione uma cidade..."
      label="Cidade"
      name="city"
      :display-value="(item) => (item ? item['municipio-nome'] : '')"
      :error-message="form.errors.city"
    >
      <template #option="item"> {{ item['municipio-nome'] }}</template>
    </AppCombobox>

    <AppInput
      v-model="form.phone"
      label="Telefone"
      placeholder="Digite seu telefone..."
      name="phone"
      :error-message="form.errors.phone"
      mask="['(##) # ####-####', '(##) ####-####']"
    />

    <template #footer>
      <AppButton
        type="submit"
        class="btn-success w-full"
        label="Criar conta"
      />
    </template>
  </AppForm>
</template>
