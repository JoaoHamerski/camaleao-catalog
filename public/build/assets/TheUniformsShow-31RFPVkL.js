import{d as _,T as w,c as y,l as C,a as k,w as n,f,o as x,b as u,t as s,i as e,g as a,h as m,j as S,m as p,a5 as T}from"./app-aSIIy-Ct.js";import{_ as B}from"./ContentLayout.vue_vue_type_script_setup_true_lang-kBP7hF1B.js";import"./BreadcrumbsContent.vue_vue_type_script_setup_true_lang-b4t4D8A0.js";const A={class:"md:w-1/3 bg-base-300 rounded-xl overflow-hidden shadow-lg"},N={class:"p-4 flex flex-col gap-4"},E={class:"flex flex-col gap-2"},U={class:"font-bold text-3xl"},V={class:"flex gap-4"},O=_({__name:"TheUniformsShow",props:{uniform:{}},setup(d){const r=d,i=w({}),g=y(()=>r.uniform.images.map(o=>o.url)),t=C(),h=()=>{i.post(route("uniforms.toggle-favorite",{uniform:r.uniform.slug}),{preserveScroll:!0,onError(){t.info("Entre para favoritar")},onSuccess(){if(r.uniform.is_favorited){t.success("Uniforme adicionado as favoritos!");return}t.success("Uniforme removido dos favoritos!")}})},v=()=>{const l=`https://wa.me/5589981171458?text=${`Olá, tenho interesse neste uniforme: ${location.href}`}`;T(l)};return(o,l)=>{const b=f("AppCarousel"),c=f("AppButton");return x(),k(B,{"breadcrumb-paths":[{text:"Categorias",url:o.route("categories.index")},{text:o.uniform.category.name,url:o.route("categories.show",{category:o.uniform.category.slug})},{text:o.uniform.name}]},{title:n(()=>[u(" Categorias > "+s(o.uniform.category.name)+" > "+s(o.uniform.name),1)]),default:n(()=>[e("div",A,[a(b,{"src-slides":g.value,pagination:"",navigation:"",autoplay:"","autoplay-interval":3e3,"img-class":"rounded-t-xl"},null,8,["src-slides"]),e("div",N,[e("div",E,[e("div",U,s(o.uniform.name),1),a(m(S),{href:o.route("categories.show",{category:o.uniform.category.slug}),as:"span",class:"link-primary w-fit font-bold cursor-pointer"},{default:n(()=>[u(s(o.uniform.category.name),1)]),_:1},8,["href"])]),e("div",V,[a(c,{icon:"fab fa-whatsapp",class:"btn-success",label:"Encomendar",onClick:p(v,["prevent"])}),a(c,{loading:m(i).processing,icon:"fas fa-star",class:"btn-warning btn-outline",label:o.uniform.is_favorited?"Desfavoritar":"Favoritar",onClick:p(h,["prevent"])},null,8,["loading","label"])])])])]),_:1},8,["breadcrumb-paths"])}}});export{O as default};
