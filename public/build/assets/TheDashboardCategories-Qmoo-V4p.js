import{d as l,B as m,a as d,w as s,f as n,o as u,g as o,m as f,i as _}from"./app-BRcYgmMQ.js";import{_ as g}from"./CategoriesBody.vue_vue_type_script_setup_true_lang-vH4AREM6.js";import{_ as h}from"./CategoryModal.vue_vue_type_script_setup_true_lang-lBQOHrf_.js";import v from"./DashboardContentLayout-tyAEkGv1.js";import"./CategoriesBodyItem.vue_vue_type_script_setup_true_lang-knFRtsQc.js";import"./DashboardListItem.vue_vue_type_script_setup_true_lang-kHwc0aYi.js";import"./NoItemsFound-zjiMZAW0.js";import"./CategoryModalDelete.vue_vue_type_script_setup_true_lang-1dKiHbBj.js";import"./CategoryForm.vue_vue_type_script_setup_true_lang-t9uVRX7y.js";import"./DashboardFormModal.vue_vue_type_script_setup_true_lang-M8_ZJ5ty.js";const C={class:"mt-10 text-center"},$=l({__name:"TheDashboardCategories",props:{categories:{}},setup(w){const e=m(!1),r=()=>{e.value=!0};return(a,t)=>{const i=n("AppButton"),p=n("AppPagination");return u(),d(v,null,{header:s(()=>[o(i,{icon:"fas fa-plus",class:"btn-success rounded-md",label:"Nova categoria",onClick:f(r,["prevent"])})]),default:s(()=>[o(h,{show:e.value,"onUpdate:show":t[0]||(t[0]=c=>e.value=c)},null,8,["show"]),o(g,{categories:a.categories.data},null,8,["categories"]),_("div",C,[o(p,{pagination:{...a.categories.links,...a.categories.meta}},null,8,["pagination"])])]),_:1})}}});export{$ as default};