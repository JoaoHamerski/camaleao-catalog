import{p as A,d as B,T as S,c as I,a as x,w as d,h as a,f as m,o as k,g as t,b as g,t as b,i as y}from"./app-fNLvbNHI.js";import{u as f}from"./useQuery-YiPiJ3DV.js";function p(u,e,i){var r=u==null?void 0:A(u,e);return r===void 0?i:r}const q=y("div",{class:"divider font-bold"},"Credenciais",-1),N=y("div",{class:"divider font-bold"},"Informações pessoais",-1),K=B({__name:"RegisterForm",setup(u){const e=S({name:"",email:"",password:"",password_confirmation:"",phone:"",birth_date:"",city:null,state:null}),i=I(()=>e.state?e.state["UF-id"]:""),{data:r,isFetching:h}=f({queryKey:["states"],queryFn:()=>w(),initialData:[]}),{data:V,isFetching:v}=f({queryKey:["cities",i],queryFn:()=>_(i.value),initialData:[],enabled:()=>!!i.value}),w=async()=>await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome&view=nivelado").then(l=>l.json()),_=async l=>await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${l}/municipios?orderBy=nome&view=nivelado`).then(s=>s.json()),F=()=>{e.city=null},U=()=>({state:{api_id:p(e.state,"UF-id"),abbreviation:p(e.state,"UF-sigla")},city:{api_id:p(e.city,"municipio-id"),name:p(e.city,"municipio-nome")}});return(l,s)=>{const n=m("AppInput"),c=m("AppCombobox"),C=m("AppButton"),D=m("AppForm");return k(),x(D,{form:a(e),endpoint:l.route("auth.register"),"transformed-data":U},{footer:d(()=>[t(C,{loading:a(e).processing,type:"submit",class:"btn-success w-full",label:"Criar conta"},null,8,["loading"])]),default:d(()=>[q,t(n,{modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=o=>a(e).email=o),label:"E-mail",placeholder:"Digite seu e-mail...",name:"email","error-message":a(e).errors.email},null,8,["modelValue","error-message"]),t(n,{modelValue:a(e).password,"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).password=o),label:"Senha",placeholder:"Digite sua senha...",type:"password",name:"password","error-message":a(e).errors.password},null,8,["modelValue","error-message"]),t(n,{modelValue:a(e).password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=o=>a(e).password_confirmation=o),placeholder:"Repita a senha...",label:"Confirme a senha",name:"password",type:"password"},null,8,["modelValue"]),N,t(n,{modelValue:a(e).name,"onUpdate:modelValue":s[3]||(s[3]=o=>a(e).name=o),placeholder:"Digite seu nome...",label:"Nome",name:"name","error-message":a(e).errors.name},null,8,["modelValue","error-message"]),t(n,{modelValue:a(e).birth_date,"onUpdate:modelValue":s[4]||(s[4]=o=>a(e).birth_date=o),placeholder:"Digite sua data de nascimento...",label:"Data de nascimento",name:"birth_date",mask:"##/##/####","error-message":a(e).errors.birth_date},null,8,["modelValue","error-message"]),t(c,{modelValue:a(e).state,"onUpdate:modelValue":[s[5]||(s[5]=o=>a(e).state=o),F],by:"UF-id","search-prop":"UF-nome",items:a(r),placeholder:"Selecione um estado...",label:"Estado",name:"state",loading:a(h),"display-value":o=>o?o["UF-nome"]:"","error-message":a(e).errors.state},{option:d(o=>[g(b(o["UF-nome"]),1)]),_:1},8,["modelValue","items","loading","display-value","error-message"]),t(c,{modelValue:a(e).city,"onUpdate:modelValue":s[6]||(s[6]=o=>a(e).city=o),by:"municipio-id","search-prop":"municipio-nome",items:a(V),placeholder:"Selecione uma cidade...",label:"Cidade",name:"city",loading:a(v),"display-value":o=>o?o["municipio-nome"]:"","error-message":a(e).errors.city},{option:d(o=>[g(b(o["municipio-nome"]),1)]),_:1},8,["modelValue","items","loading","display-value","error-message"]),t(n,{modelValue:a(e).phone,"onUpdate:modelValue":s[7]||(s[7]=o=>a(e).phone=o),label:"Telefone",placeholder:"Digite seu telefone...",name:"phone","error-message":a(e).errors.phone,mask:"['(##) # ####-####', '(##) ####-####']"},null,8,["modelValue","error-message"])]),_:1},8,["form","endpoint"])}}});export{K as _};