import{d as u,A as l,a as f,w as s,f as e,o as c,g as o,m as d,i as _}from"./app-B_59p0mc.js";import h from"./DashboardContentLayout-EdouXbkV.js";import{_ as v}from"./UniformsBody.vue_vue_type_script_setup_true_lang-dJG-_1aZ.js";import{_ as w}from"./UniformModal.vue_vue_type_script_setup_true_lang-ciotm4ZT.js";import"./UniformsBodyItem.vue_vue_type_script_setup_true_lang-kYKBB2n_.js";import"./DashboardListItem.vue_vue_type_script_setup_true_lang-Bv6JQ2bE.js";import"./UniformModalDelete.vue_vue_type_script_setup_true_lang-ZrspkysX.js";import"./NoItemsFound-SGe19kzU.js";import"./UniformForm.vue_vue_type_script_setup_true_lang-YBy2Zai0.js";import"./useQuery-6rNxgwLP.js";import"./UniformFormCategoryOption.vue_vue_type_script_setup_true_lang-2gKg341o.js";import"./DashboardFormModal.vue_vue_type_script_setup_true_lang-jP0Ypj1Q.js";const C={class:"mt-10 text-center"},y=u({__name:"TheDashboardUniforms",props:{uniforms:{}},setup(g){const n=l(!1),r=()=>{n.value=!0};return(t,a)=>{const i=e("AppButton"),m=e("AppPagination");return c(),f(h,null,{header:s(()=>[o(i,{icon:"fas fa-plus",class:"btn-success rounded-md",label:"Novo uniforme",onClick:d(r,["prevent"])})]),default:s(()=>[o(w,{show:n.value,"onUpdate:show":a[0]||(a[0]=p=>n.value=p)},null,8,["show"]),o(v,{uniforms:t.uniforms.data},null,8,["uniforms"]),_("div",C,[o(m,{pagination:{...t.uniforms.meta,...t.uniforms.links}},null,8,["pagination"])])]),_:1})}}});export{y as default};