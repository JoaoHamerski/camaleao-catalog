import{d as n,G as t,c as i,w as l,u,r as c,o as m,h as p,e as d,t as f,i as g}from"./app-HYdZhUgc.js";const h={class:"m-3 md:m-5 font-bold group-hover:link-primary transition-colors"},v=n({__name:"UniformCard",props:{uniform:{},category:{}},setup(e){const r=e,s=t(()=>r.uniform.images.map(o=>o.url));return(o,w)=>{const a=c("AppCarousel");return m(),i(u(g),{as:"div",href:o.route("uniforms.show",{category:o.category.slug,uniform:o.uniform.slug}),class:"rounded-xl w-40 md:w-60 bg-white shadow-lg group cursor-pointer"},{default:l(()=>[p(a,{"src-slides":s.value,"img-class":"object-cover h-30 md:h-40 w-full rounded-t-xl",autoplay:"","autoplay-interval":3e3,pagination:""},null,8,["src-slides"]),d("div",h,f(o.uniform.name),1)]),_:1},8,["href"])}}});export{v as _};
