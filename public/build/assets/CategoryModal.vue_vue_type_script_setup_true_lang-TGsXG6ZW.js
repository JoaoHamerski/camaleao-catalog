import{_ as m}from"./CategoryForm.vue_vue_type_script_setup_true_lang-P7tPUuQk.js";import{_ as p}from"./DashboardFormModal.vue_vue_type_script_setup_true_lang--2wt3-6W.js";import{d as u,G as l,c as _,w as f,o as g,h as w}from"./app-dG7eutBm.js";const $=u({__name:"CategoryModal",props:{category:{}},emits:["update:show"],setup(o,{emit:s}){const r=s,i={create:"Cadastre uma categoria",edit:"Altere a categoria"},c=o,e=l(()=>!!c.category),n=()=>{r("update:show",!1)};return(t,a)=>(g(),_(p,{"is-edit":e.value,labels:i,"onUpdate:show":a[0]||(a[0]=d=>t.$emit("update:show",d))},{default:f(()=>[w(m,{"is-edit":e.value,category:t.category,onSuccess:n},null,8,["is-edit","category"])]),_:1},8,["is-edit"]))}});export{$ as _};
