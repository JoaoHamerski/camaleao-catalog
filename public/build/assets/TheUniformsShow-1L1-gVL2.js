import{d as b,T as w,A as C,j as k,c as y,w as r,r as f,o as x,a as u,t as s,e,h as a,u as m,i as S,k as p,a5 as T}from"./app-RJfPAFaN.js";import{_ as A}from"./ContentLayout.vue_vue_type_script_setup_true_lang-C_WcXWaB.js";const B={class:"md:w-1/3 bg-base-300 rounded-xl shadow-lg"},N={class:"p-4 flex flex-col gap-4"},E={class:"flex flex-col gap-2"},U={class:"font-bold text-3xl"},V={class:"flex gap-4"},F=b({__name:"TheUniformsShow",props:{uniform:{}},setup(d){const n=d,i=w({}),g=C(()=>n.uniform.images.map(o=>o.url)),t=k(),v=()=>{i.post(route("uniforms.toggle-favorite",{uniform:n.uniform.slug}),{preserveScroll:!0,onError(){t.info("Entre para favoritar")},onSuccess(){if(n.uniform.is_favorited){t.success("Uniforme adicionado as favoritos!");return}t.success("Uniforme removido dos favoritos!")}})},h=()=>{const l=`https://wa.me/89981171458?text="${`Olá, tenho interesse neste uniforme: ${location.href}`}"`;T(l)};return(o,l)=>{const _=f("AppCarousel"),c=f("AppButton");return x(),y(A,{title:o.uniform.name},{title:r(()=>[u(" Categorias > "+s(o.uniform.category.name)+" > "+s(o.uniform.name),1)]),default:r(()=>[e("div",B,[a(_,{"src-slides":g.value,pagination:"",navigation:"",autoplay:"","autoplay-interval":3e3,"img-class":"rounded-t-xl"},null,8,["src-slides"]),e("div",N,[e("div",E,[e("div",U,s(o.uniform.name),1),a(m(S),{href:o.route("categories.show",{category:o.uniform.category.slug}),as:"span",class:"link-primary w-fit font-bold cursor-pointer"},{default:r(()=>[u(s(o.uniform.category.name),1)]),_:1},8,["href"])]),e("div",V,[a(c,{icon:"fab fa-whatsapp",class:"btn-success",label:"Encomendar",onClick:p(h,["prevent"])}),a(c,{loading:m(i).processing,icon:"fas fa-star",class:"btn-warning btn-outline",label:o.uniform.is_favorited?"Desfavoritar":"Favoritar",onClick:p(v,["prevent"])},null,8,["loading","label"])])])])]),_:1},8,["title"])}}});export{F as default};
