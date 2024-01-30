import{d as A,B as x,J as I,T as w,G as B,c as D,w as u,u as a,r as m,o as U,h as i}from"./app-dG7eutBm.js";import{_ as k}from"./UniformFormCategoryOption.vue_vue_type_script_setup_true_lang-DOkETlFB.js";import{u as E}from"./helpers-1KMYf68a.js";const S=A({__name:"UniformForm",props:{uniform:{default:void 0},isEdit:{type:Boolean,default:!1}},setup(p){const n=p,l=x(""),{data:c,isFetching:g,refetch:f}=I({queryKey:["categories"],queryFn:()=>y(),initialData:[]}),r=w({name:"",category:null,images:FileList}),d=B(()=>({post:()=>route("dashboard.uniforms.store"),patch:()=>n.uniform?route("dashboard.uniforms.patch",{uniform:n.uniform.slug}):void 0})),y=async()=>{const o=route("api.categories.get",{name:l.value});return await fetch(o).then(e=>e.json())},h=o=>{const e=o.target;l.value=e.value,f()},_=o=>o?o.name:"",F=o=>{var e;return{category:((e=o==null?void 0:o.category)==null?void 0:e.id)||null}},V=async()=>{if(!n.uniform)return;const o=await Promise.all(n.uniform.images.map(async s=>await E(s.url,s.name))),e={name:n.uniform.name,category:n.uniform.category,images:o};Object.assign(r,e)};return(o,e)=>{const s=m("AppInput"),b=m("AppCombobox"),C=m("AppInputFile"),v=m("AppForm");return U(),D(v,{class:"flex flex-col gap-8",form:a(r),routes:d.value,"is-edit":o.isEdit,"transformed-data":F,"populate-form":V},{default:u(()=>[i(s,{modelValue:a(r).name,"onUpdate:modelValue":e[0]||(e[0]=t=>a(r).name=t),name:"name",label:"Nome",placeholder:"Digite o nome...","error-message":a(r).errors.name,autofocus:""},null,8,["modelValue","error-message"]),i(b,{modelValue:a(r).category,"onUpdate:modelValue":e[1]||(e[1]=t=>a(r).category=t),label:"Categoria",name:"category",placeholder:"Escolha uma categoria...",items:a(c),"display-value":_,loading:a(g),"error-message":a(r).errors.category,onInput:h},{option:u(t=>[i(k,{item:t},null,8,["item"])]),_:1},8,["modelValue","items","loading","error-message"]),i(C,{modelValue:a(r).images,"onUpdate:modelValue":e[2]||(e[2]=t=>a(r).images=t),name:"images",label:"Imagens do uniforme",multiple:"",accept:"image/*",hint:"Máx. 300kB por imagem","error-message":a(r).errors.images},null,8,["modelValue","error-message"])]),_:1},8,["form","routes","is-edit"])}}});export{S as _};
