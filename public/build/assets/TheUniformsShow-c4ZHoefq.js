import{d as v,T as _,G as h,L as b,c as w,w as t,r as c,o as C,a as f,t as e,e as s,h as a,u,i as y,C as A}from"./app-dG7eutBm.js";import S from"./ContentLayout-R_y5KxtJ.js";const T={class:"w-1/3 bg-base-300 rounded-xl shadow-lg"},k={class:"p-4 flex flex-col gap-4"},x={class:"flex flex-col gap-2"},B={class:"font-bold text-3xl"},E={class:"flex gap-4"},D=v({__name:"TheUniformsShow",props:{uniform:{}},setup(p){const n=p,i=_({}),m=h(()=>n.uniform.images.map(o=>o.url)),r=b(),d=()=>{i.post(route("uniforms.toggle-favorite",{uniform:n.uniform.slug}),{preserveScroll:!0,onError(){r.info("Entre para favoritar")},onSuccess(){if(n.uniform.is_favorited){r.success("Uniforme adicionado as favoritos!");return}r.success("Uniforme removido dos favoritos!")}})};return(o,N)=>{const g=c("AppCarousel"),l=c("AppButton");return C(),w(S,null,{title:t(()=>[f(" CATEGORIA > "+e(o.uniform.category.name)+" > "+e(o.uniform.name),1)]),default:t(()=>[s("div",T,[a(g,{"src-slides":m.value,pagination:"",navigation:"",autoplay:"","autoplay-interval":3e3},null,8,["src-slides"]),s("div",k,[s("div",x,[s("div",B,e(o.uniform.name),1),a(u(y),{href:o.route("categories.show",{category:o.uniform.category.slug}),as:"span",class:"link-primary w-fit font-bold cursor-pointer"},{default:t(()=>[f(e(o.uniform.category.name),1)]),_:1},8,["href"])]),s("div",E,[a(l,{icon:"fab fa-whatsapp",class:"btn-success",label:"Encomendar"}),a(l,{loading:u(i).processing,icon:"fas fa-star",class:"btn-warning btn-outline",label:o.uniform.is_favorited?"Desfavoritar":"Favoritar",onClick:A(d,["prevent"])},null,8,["loading","label"])])])])]),_:1})}}});export{D as default};
