import{_}from"./CategoriesBodyItem.vue_vue_type_script_setup_true_lang-7rZGqRzF.js";import{_ as v}from"./CategoryModal.vue_vue_type_script_setup_true_lang-TGsXG6ZW.js";import{N as f}from"./NoItemsFound-bk5kDUuF.js";import{_ as h}from"./CategoryModalDelete.vue_vue_type_script_setup_true_lang-ffDbILVI.js";import{d as w,B as l,c as n,w as i,r as y,D as C,o as s,h as c,a as N,b as k,E as B,f as u,F as D,g as E}from"./app-dG7eutBm.js";const M=w({__name:"CategoriesBody",props:{categories:{}},setup(F){const a=l({category:void 0,show:!1}),t=l({category:void 0,show:!1}),m=e=>{t.value.category=e,t.value.show=!0},d=e=>{a.value.category=e,a.value.show=!0};return(e,r)=>{const g=y("AppCard"),p=C("auto-animate");return s(),n(g,{icon:"fas fa-shapes",label:"Categorias"},{content:i(()=>[c(v,{show:a.value.show,"onUpdate:show":r[0]||(r[0]=o=>a.value.show=o),category:a.value.category},null,8,["show","category"]),c(h,{show:t.value.show,"onUpdate:show":r[1]||(r[1]=o=>t.value.show=o),category:t.value.category},null,8,["show","category"]),e.categories.length?k("",!0):(s(),n(f,{key:0},{default:i(()=>[N(" Nenhum item encontrado ")]),_:1})),B((s(),u("div",null,[(s(!0),u(D,null,E(e.categories,o=>(s(),n(_,{key:o.id,category:o,onEdit:d,onDelete:m},null,8,["category"]))),128))])),[[p]])]),_:1})}}});export{M as _};
