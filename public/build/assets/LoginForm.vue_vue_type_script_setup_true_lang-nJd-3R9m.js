import{d as i,T as c,c as f,w as n,u as o,r as a,o as g,h as l}from"./app-0UYzROca.js";const V=i({__name:"LoginForm",setup(_){const e=c({email:"",password:"",remember:!1}),p=()=>{e.password=""},m={post:()=>route("auth.login")};return(w,r)=>{const t=a("AppInput"),u=a("AppButton"),d=a("AppForm");return g(),f(d,{form:o(e),routes:m,onError:p},{footer:n(()=>[l(u,{type:"submit",disabled:o(e).processing,loading:o(e).processing,label:"Entrar",class:"btn-primary w-full"},null,8,["disabled","loading"])]),default:n(()=>[l(t,{modelValue:o(e).email,"onUpdate:modelValue":r[0]||(r[0]=s=>o(e).email=s),autofocus:"",label:"E-mail",name:"email",class:"mb-3",placeholder:"Digite seu e-mail...",autocomplete:"email","error-message":o(e).errors.email},null,8,["modelValue","error-message"]),l(t,{modelValue:o(e).password,"onUpdate:modelValue":r[1]||(r[1]=s=>o(e).password=s),class:"mb-3",label:"Senha",type:"password",name:"password",autocomplete:"password",placeholder:"Digite sua senha...","error-message":o(e).errors.password},null,8,["modelValue","error-message"])]),_:1},8,["form"])}}});export{V as _};