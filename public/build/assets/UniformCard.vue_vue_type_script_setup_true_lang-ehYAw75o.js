import{d as n,c as i,a as t,w as l,h as u,f as c,o as m,g as p,i as d,t as f,j as g}from"./app-BRcYgmMQ.js";const h={class:"m-3 md:m-5 font-bold group-hover:link-primary transition-colors"},w=n({__name:"UniformCard",props:{uniform:{},category:{}},setup(e){const r=e,s=i(()=>r.uniform.images.map(o=>o.url));return(o,v)=>{const a=c("AppCarousel");return m(),t(u(g),{as:"div",href:o.route("uniforms.show",{category:o.category.slug,uniform:o.uniform.slug}),class:"uniform rounded-xl overflow-hidden bg-white shadow-lg group cursor-pointer"},{default:l(()=>[p(a,{"src-slides":s.value,"img-class":"object-cover overflow-hidden h-32",autoplay:"","autoplay-interval":3e3,pagination:""},null,8,["src-slides"]),d("div",h,f(o.uniform.name),1)]),_:1},8,["href"])}}});export{w as _};