import{p as A,q as B,d as S,T as x,c as I,a as q,w as d,h as a,f as m,o as k,g as t,i as c,b as f,t as y}from"./app-BRcYgmMQ.js";import{u as h}from"./useQuery-kfFPuBu9.js";var N=B;function E(u,e,l){var i=u==null?void 0:N(u,e);return i===void 0?l:i}var G=E;const p=A(G),T={class:"mb-10"},j=c("div",{class:"divider font-bold"},"Credenciais",-1),K=c("div",{class:"divider font-bold"},"Informações pessoais",-1),Q=S({__name:"RegisterForm",setup(u){const e=x({name:"",email:"",password:"",password_confirmation:"",phone:"",birth_date:"",city:null,state:null}),l=I(()=>e.state?e.state["UF-id"]:""),{data:i,isFetching:V}=h({queryKey:["states"],queryFn:()=>w(),initialData:[]}),{data:v,isFetching:_}=h({queryKey:["cities",l],queryFn:()=>F(l.value),initialData:[],enabled:()=>!!l.value}),w=async()=>await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome&view=nivelado").then(r=>r.json()),F=async r=>await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${r}/municipios?orderBy=nome&view=nivelado`).then(s=>s.json()),U=()=>{e.city=null},C=()=>({state:{api_id:p(e.state,"UF-id"),abbreviation:p(e.state,"UF-sigla")},city:{api_id:p(e.city,"municipio-id"),name:p(e.city,"municipio-nome")}});return(r,s)=>{const g=m("AppButton"),n=m("AppInput"),b=m("AppCombobox"),D=m("AppForm");return k(),q(D,{form:a(e),endpoint:r.route("auth.register"),"transformed-data":C},{footer:d(()=>[t(g,{loading:a(e).processing,type:"submit",class:"btn-success w-full",label:"Criar conta"},null,8,["loading"])]),default:d(()=>[c("div",T,[t(g,{class:"btn btn-error w-full btn-outline",icon:"fab fa-google",label:"Continue com Google"})]),j,t(n,{modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=o=>a(e).email=o),label:"E-mail",placeholder:"Digite seu e-mail...",name:"email","error-message":a(e).errors.email},null,8,["modelValue","error-message"]),t(n,{modelValue:a(e).password,"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).password=o),label:"Senha",placeholder:"Digite sua senha...",type:"password",name:"password","error-message":a(e).errors.password},null,8,["modelValue","error-message"]),t(n,{modelValue:a(e).password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=o=>a(e).password_confirmation=o),placeholder:"Repita a senha...",label:"Confirme a senha",name:"password",type:"password"},null,8,["modelValue"]),K,t(n,{modelValue:a(e).name,"onUpdate:modelValue":s[3]||(s[3]=o=>a(e).name=o),placeholder:"Digite seu nome...",label:"Nome",name:"name","error-message":a(e).errors.name},null,8,["modelValue","error-message"]),t(n,{modelValue:a(e).birth_date,"onUpdate:modelValue":s[4]||(s[4]=o=>a(e).birth_date=o),placeholder:"Digite sua data de nascimento...",label:"Data de nascimento",name:"birth_date",mask:"##/##/####","error-message":a(e).errors.birth_date},null,8,["modelValue","error-message"]),t(b,{modelValue:a(e).state,"onUpdate:modelValue":[s[5]||(s[5]=o=>a(e).state=o),U],by:"UF-id","search-prop":"UF-nome",items:a(i),placeholder:"Selecione um estado...",label:"Estado",name:"state",loading:a(V),"display-value":o=>o?o["UF-nome"]:"","error-message":a(e).errors.state},{option:d(o=>[f(y(o["UF-nome"]),1)]),_:1},8,["modelValue","items","loading","display-value","error-message"]),t(b,{modelValue:a(e).city,"onUpdate:modelValue":s[6]||(s[6]=o=>a(e).city=o),by:"municipio-id","search-prop":"municipio-nome",items:a(v),placeholder:"Selecione uma cidade...",label:"Cidade",name:"city",loading:a(_),"display-value":o=>o?o["municipio-nome"]:"","error-message":a(e).errors.city},{option:d(o=>[f(y(o["municipio-nome"]),1)]),_:1},8,["modelValue","items","loading","display-value","error-message"]),t(n,{modelValue:a(e).phone,"onUpdate:modelValue":s[7]||(s[7]=o=>a(e).phone=o),label:"Telefone",placeholder:"Digite seu telefone...",name:"phone","error-message":a(e).errors.phone,mask:"['(##) # ####-####', '(##) ####-####']"},null,8,["modelValue","error-message"])]),_:1},8,["form","endpoint"])}}});export{Q as _};
