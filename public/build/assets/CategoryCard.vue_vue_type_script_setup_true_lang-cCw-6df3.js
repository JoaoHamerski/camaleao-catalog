import{d as c,a as l,w as d,h as i,f as a,o as p,g as t,i as o,t as s,j as m}from"./app-X93zNpGS.js";const u={class:"px-5 py-2 font-bold text-lg absolute bottom-0 backdrop-blur-md bg-black/10 rounded-b-xl text-white w-full uppercase"},g={class:"absolute flex items-baseline gap-1 top-3 right-3 text-white font-bold bg-black/50 px-2 py-1 rounded-full"},h={class:"text-sm"},x=c({__name:"CategoryCard",props:{category:{}},setup(f){return(e,_)=>{const r=a("AppImage"),n=a("FWIcon");return p(),l(i(m),{href:e.route("categories.show",{category:e.category.slug}),as:"div",class:"card mx-auto w-40 h-40 md:w-60 md:h-52 bg-base-100 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"},{default:d(()=>[t(r,{src:e.category.image.url,alt:"Imagem da categoria",class:"rounded-xl overflow-hidden"},null,8,["src"]),o("div",u,s(e.category.name),1),o("div",g,[t(n,{class:"text-xs",icon:"fas fa-tshirt","fixed-width":""}),o("span",h,s(e.category.uniforms_count),1)])]),_:1},8,["href"])}}});export{x as _};