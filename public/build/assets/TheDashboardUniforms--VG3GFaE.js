import{d as u,B as l,a as f,w as s,f as e,o as c,g as o,m as d,i as _}from"./app-BRcYgmMQ.js";import h from"./DashboardContentLayout-tyAEkGv1.js";import{_ as v}from"./UniformsBody.vue_vue_type_script_setup_true_lang-vN4QFyvh.js";import{_ as w}from"./UniformModal.vue_vue_type_script_setup_true_lang-umThfuZ7.js";import"./UniformsBodyItem.vue_vue_type_script_setup_true_lang-546arrkf.js";import"./DashboardListItem.vue_vue_type_script_setup_true_lang-kHwc0aYi.js";import"./UniformModalDelete.vue_vue_type_script_setup_true_lang-BqhhWDaR.js";import"./UniformForm.vue_vue_type_script_setup_true_lang-QJshFJm8.js";import"./useQuery-kfFPuBu9.js";import"./UniformFormCategoryOption.vue_vue_type_script_setup_true_lang-98XoLVns.js";import"./DashboardFormModal.vue_vue_type_script_setup_true_lang-M8_ZJ5ty.js";const B={class:"mt-10 text-center"},x=u({__name:"TheDashboardUniforms",props:{uniforms:{}},setup(C){const n=l(!1),r=()=>{n.value=!0};return(t,a)=>{const i=e("AppButton"),m=e("AppPagination");return c(),f(h,null,{header:s(()=>[o(i,{icon:"fas fa-plus",class:"btn-success rounded-md",label:"Novo uniforme",onClick:d(r,["prevent"])})]),default:s(()=>[o(w,{show:n.value,"onUpdate:show":a[0]||(a[0]=p=>n.value=p)},null,8,["show"]),o(v,{uniforms:t.uniforms.data},null,8,["uniforms"]),_("div",B,[o(m,{pagination:{...t.uniforms.meta,...t.uniforms.links}},null,8,["pagination"])])]),_:1})}}});export{x as default};