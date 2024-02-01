import{d as b,T as y,c as A,H as h,a as _,w as l,h as o,J as E,f as s,o as F,g as m,x as V}from"./app-NS2l-4AQ.js";const C=b({__name:"CategoryForm",props:{category:{default:void 0},isEdit:{type:Boolean,default:!1}},setup(i){const a=i,e=y({name:"",image:null}),p=A(()=>a.isEdit?route("dashboard.categories.patch",{category:a.category.slug}):route("dashboard.categories.store")),d=async()=>{if(!a.category)return;const t={name:a.category.name,image:await E(a.category.image.url,a.category.image.name)};Object.assign(e,t)};return h(()=>{a.isEdit&&d()}),(t,n)=>{const u=s("AppInput"),c=s("AppInputFile"),g=s("AppButton"),f=s("AppForm");return F(),_(f,{class:"flex flex-col gap-8",form:o(e),endpoint:p.value,"is-edit":t.isEdit,method:t.isEdit?"patch":"post"},{footer:l(()=>[m(g,{label:t.isEdit?"Atualizar":"Cadastrar",class:V(["btn btn-outline",t.isEdit?"btn-primary":"btn-success"])},null,8,["label","class"])]),default:l(()=>[m(u,{modelValue:o(e).name,"onUpdate:modelValue":n[0]||(n[0]=r=>o(e).name=r),name:"name",label:"Nome",placeholder:"Digite o nome...","error-message":o(e).errors.name,autofocus:""},null,8,["modelValue","error-message"]),m(c,{modelValue:o(e).image,"onUpdate:modelValue":n[1]||(n[1]=r=>o(e).image=r),label:"Imagem da categoria",accept:"image/*",hint:"Tamanho máximo: 1MB",name:"image","error-message":o(e).errors.image},null,8,["modelValue","error-message"])]),_:1},8,["form","endpoint","is-edit","method"])}}});export{C as _};
