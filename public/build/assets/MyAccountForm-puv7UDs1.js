import{d as v,T as w,A as U,H as _,a as F,w as d,h as a,f as m,o as A,g as t,b as c,t as b,i as D}from"./app-NS2l-4AQ.js";import{u as C}from"./useQuery-J0QlJWWm.js";const S=D("div",{class:"divider font-bold"},"Informações pessoais",-1),N=v({__name:"MyAccountForm",props:{user:{}},setup(V){const{user:n}=V,e=w({name:"",email:"",password:"",password_confirmation:"",phone:"",birth_date:"",city:null,state:null}),{data:g}=C({queryKey:["states"],queryFn:()=>p(),initialData:[]}),i=U([]),p=async()=>await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome&view=nivelado").then(l=>l.json()),f=()=>{e.state&&fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.state["UF-id"]}/municipios?orderBy=nome&view=nivelado`).then(l=>l.json()).then(l=>{i.value=l})},y=()=>{e.name=n.name,e.email=n.email,e.birth_date=n.birth_date,e.phone=n.phone};return _(async()=>{await p(),y()}),(l,s)=>{const r=m("AppInput"),u=m("AppCombobox"),h=m("AppForm");return A(),F(h,{"is-edit":"",form:a(e),endpoint:l.route("uaht.my-account-update")},{default:d(()=>[t(r,{modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=o=>a(e).email=o),label:"E-mail",placeholder:"Digite seu e-mail...",name:"email","error-message":a(e).errors.email},null,8,["modelValue","error-message"]),t(r,{modelValue:a(e).password,"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).password=o),label:"Nova senha",placeholder:"Digite a nova senha...",type:"password",name:"password","error-message":a(e).errors.password},null,8,["modelValue","error-message"]),t(r,{modelValue:a(e).password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=o=>a(e).password_confirmation=o),placeholder:"Repita a senha...",label:"Confirme a senha",name:"password",type:"password"},null,8,["modelValue"]),S,t(r,{modelValue:a(e).name,"onUpdate:modelValue":s[3]||(s[3]=o=>a(e).name=o),placeholder:"Digite seu nome...",label:"Nome",name:"name","error-message":a(e).errors.name},null,8,["modelValue","error-message"]),t(r,{modelValue:a(e).birth_date,"onUpdate:modelValue":s[4]||(s[4]=o=>a(e).birth_date=o),placeholder:"Digite sua data de nascimento...",label:"Data de nascimento",name:"birth_date","error-message":a(e).errors.birth_date},null,8,["modelValue","error-message"]),t(u,{modelValue:a(e).state,"onUpdate:modelValue":[s[5]||(s[5]=o=>a(e).state=o),f],by:"UF-id",items:a(g),placeholder:"Selecione um estado...",label:"Estado",name:"state","display-value":o=>o?o["UF-nome"]:"","error-message":a(e).errors.state},{option:d(o=>[c(b(o["UF-nome"]),1)]),_:1},8,["modelValue","items","display-value","error-message"]),t(u,{modelValue:a(e).city,"onUpdate:modelValue":s[6]||(s[6]=o=>a(e).city=o),by:"municipio-id",items:i.value,placeholder:"Selecione uma cidade...",label:"Cidade",name:"city","display-value":o=>o?o["municipio-nome"]:"","error-message":a(e).errors.city},{option:d(o=>[c(b(o["municipio-nome"]),1)]),_:1},8,["modelValue","items","display-value","error-message"]),t(r,{modelValue:a(e).phone,"onUpdate:modelValue":s[7]||(s[7]=o=>a(e).phone=o),label:"Telefone",placeholder:"Digite seu telefone...",name:"phone","error-message":a(e).errors.phone},null,8,["modelValue","error-message"])]),_:1},8,["form","endpoint"])}}});export{N as default};
