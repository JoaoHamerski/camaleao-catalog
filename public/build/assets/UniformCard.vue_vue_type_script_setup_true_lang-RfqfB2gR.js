import{d as n,G as t,c as i,w as l,u,r as c,o as p,h as m,e as d,t as f,i as g}from"./app-dG7eutBm.js";const h={class:"m-5 font-bold group-hover:link-primary transition-colors"},w=n({__name:"UniformCard",props:{uniform:{},category:{}},setup(e){const r=e,s=t(()=>r.uniform.images.map(o=>o.url));return(o,_)=>{const a=c("AppCarousel");return p(),i(u(g),{as:"div",href:o.route("uniforms.show",{category:o.category.slug,uniform:o.uniform.slug}),class:"rounded-xl w-60 bg-white shadow-lg group cursor-pointer"},{default:l(()=>[m(a,{"src-slides":s.value,"img-class":"object-cover h-40 w-full rounded-t-xl",autoplay:"","autoplay-interval":3e3,pagination:""},null,8,["src-slides"]),d("div",h,f(o.uniform.name),1)]),_:1},8,["href"])}}});export{w as _};
