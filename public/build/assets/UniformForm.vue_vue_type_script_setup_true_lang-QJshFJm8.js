import{d as B,B as E,T as I,c as w,I as x,a as D,w as l,h as a,K as U,f as s,o as k,g as i,y as j}from"./app-BRcYgmMQ.js";import{u as q}from"./useQuery-kfFPuBu9.js";import{_ as z}from"./UniformFormCategoryOption.vue_vue_type_script_setup_true_lang-98XoLVns.js";const S=B({__name:"UniformForm",props:{uniform:{default:void 0},isEdit:{type:Boolean,default:!1}},setup(p){const n=p,u=E(""),{data:c,isFetching:d,refetch:g}=q({queryKey:["categories"],queryFn:()=>y(),initialData:[]}),o=I({name:"",category:null,images:[]}),f=w(()=>n.isEdit?route("dashboard.uniforms.patch",{uniform:n.uniform.slug}):route("dashboard.uniforms.store")),y=async()=>{const e=route("api.categories.get",{name:u.value});return await fetch(e).then(t=>t.json())},b=e=>{const t=e.target;u.value=t.value,g()},h=e=>e?e.name:"",_=()=>{var e;return{category:((e=o.category)==null?void 0:e.id)||null}},C=async()=>{if(!n.uniform)return;const e=await Promise.all(n.uniform.images.map(async m=>await U(m.url,m.name))),t={name:n.uniform.name,category:n.uniform.category,images:e};Object.assign(o,t)};return x(()=>{n.isEdit&&C()}),(e,t)=>{const m=s("AppInput"),A=s("AppCombobox"),V=s("AppInputFile"),F=s("AppButton"),v=s("AppForm");return k(),D(v,{class:"flex flex-col gap-8",form:a(o),endpoint:f.value,"transformed-data":_,method:e.isEdit?"patch":"post"},{footer:l(()=>[i(F,{loading:a(o).processing,label:e.isEdit?"Atualizar":"Cadastrar",class:j(["btn btn-outline",e.isEdit?"btn-primary":"btn-success"])},null,8,["loading","label","class"])]),default:l(()=>[i(m,{modelValue:a(o).name,"onUpdate:modelValue":t[0]||(t[0]=r=>a(o).name=r),name:"name",label:"Nome",placeholder:"Digite o nome...","error-message":a(o).errors.name,autofocus:""},null,8,["modelValue","error-message"]),i(A,{modelValue:a(o).category,"onUpdate:modelValue":t[1]||(t[1]=r=>a(o).category=r),label:"Categoria",name:"category",placeholder:"Escolha uma categoria...",items:a(c),"display-value":h,loading:a(d),"error-message":a(o).errors.category,onInput:b},{option:l(r=>[i(z,{item:r},null,8,["item"])]),_:1},8,["modelValue","items","loading","error-message"]),i(V,{modelValue:a(o).images,"onUpdate:modelValue":t[2]||(t[2]=r=>a(o).images=r),name:"images",label:"Imagens do uniforme",multiple:"",accept:"image/*",hint:"Máx. 300kB por imagem","error-message":a(o).errors.images},null,8,["modelValue","error-message"])]),_:1},8,["form","endpoint","method"])}}});export{S as _};