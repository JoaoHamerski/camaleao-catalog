import{_ as d}from"./UniformForm.vue_vue_type_script_setup_true_lang-hoqRw_AV.js";import{_ as f}from"./DashboardFormModal.vue_vue_type_script_setup_true_lang--2wt3-6W.js";import{d as p,G as c,c as l,w as _,o as w,h}from"./app-dG7eutBm.js";const v=p({__name:"UniformModal",props:{uniform:{}},emits:["update:show"],setup(t,{emit:i}){const a=i,n={create:"Cadastre um uniforme",edit:"Altere o uniforme"},r=t,e=c(()=>!!r.uniform),m=()=>{a("update:show",!1)};return(o,s)=>(w(),l(f,{"is-edit":e.value,labels:n,"onUpdate:show":s[0]||(s[0]=u=>o.$emit("update:show",u))},{default:_(()=>[h(d,{"is-edit":e.value,uniform:o.uniform,onSuccess:m},null,8,["is-edit","uniform"])]),_:1},8,["is-edit"]))}});export{v as _};
