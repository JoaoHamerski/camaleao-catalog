import{d as h,A as w,c as x,a as A,w as n,f as o,o as c,g as l,i as e,e as u,r as B,t as i,F as C,m as g}from"./app-h0iDZpXW.js";import{_ as k}from"./ContentLayout.vue_vue_type_script_setup_true_lang-O4FDCMaY.js";import{_ as y}from"./DeleteAccountModal.vue_vue_type_script_setup_true_lang-dQZo63cP.js";import"./BreadcrumbsContent.vue_vue_type_script_setup_true_lang-TVRQYxKd.js";const D={class:"flex gap-2 items-center"},F=e("span",null,"Sua conta",-1),N={class:"mx-3 flex flex-col gap-10 mb-4"},I={class:"w-40"},V=h({__name:"TheMyAccount",props:{user:{}},setup(p){const{user:a}=p,s=w(!1),m=x(()=>[{label:"Nome",value:a.name},{label:"Email",value:a.email},{label:"Telefone",value:a.phone},{label:"Data de nascimento",value:a.birth_date}]),_=()=>{s.value=!0};return(d,r)=>{const f=o("FWIcon"),v=o("AppButton"),b=o("AppCard");return c(),A(k,null,{default:n(()=>[l(b,{class:"w-full md:w-1/2 lg:w-1/3"},{title:n(()=>[e("div",D,[l(f,{icon:"fas fa-user-circle"}),F])]),content:n(()=>[l(y,{show:s.value,"onUpdate:show":r[0]||(r[0]=t=>s.value=t),user:d.user},null,8,["show","user"]),e("div",N,[e("ul",null,[(c(!0),u(C,null,B(m.value,t=>(c(),u("li",{key:t.label,class:"my-3 flex"},[e("b",I,i(t.label)+":",1),e("span",null,i(t.value||"N/A"),1)]))),128))]),e("div",null,[l(v,{class:"btn btn-error btn-outline",label:"Deletar conta",onClick:g(_,["prevent"])})])])]),_:1})]),_:1})}}});export{V as default};
