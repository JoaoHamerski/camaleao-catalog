import{_}from"./UniformModal.vue_vue_type_script_setup_true_lang-hmZExfPm.js";import{_ as v}from"./UniformsBodyItem.vue_vue_type_script_setup_true_lang--m8x6JaI.js";import{_ as c}from"./UniformModalDelete.vue_vue_type_script_setup_true_lang-2udnmk63.js";import{d as w,A as t,a as i,w as h,f as U,I as B,o as a,g as m,B as C,e as u,F as k,r as D}from"./app-NS2l-4AQ.js";const y=w({__name:"UniformsBody",props:{uniforms:{}},setup(A){const e=t({uniform:void 0,show:!1}),n=t({uniform:void 0,show:!1}),l=s=>{n.value.uniform=s,n.value.show=!0},f=s=>{e.value.uniform=s,e.value.show=!0};return(s,r)=>{const d=U("AppCard"),p=B("auto-animate");return a(),i(d,{icon:"fas fa-tshirt",label:"Uniformes"},{content:h(()=>[m(_,{show:e.value.show,"onUpdate:show":r[0]||(r[0]=o=>e.value.show=o),uniform:e.value.uniform},null,8,["show","uniform"]),m(c,{show:n.value.show,"onUpdate:show":r[1]||(r[1]=o=>n.value.show=o),uniform:n.value.uniform},null,8,["show","uniform"]),C((a(),u("div",null,[(a(!0),u(k,null,D(s.uniforms,o=>(a(),i(v,{key:o.id,uniform:o,onDelete:l,onEdit:f},null,8,["uniform"]))),128))])),[[p]])]),_:1})}}});export{y as _};
