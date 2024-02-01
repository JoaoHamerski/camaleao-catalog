var G=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(G(i,t,"read from private field"),e?e.call(i):t.get(i)),o=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},h=(i,t,e,r)=>(G(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var d=(i,t,e)=>(G(i,t,"access private method"),e);import{S as Rt,L as H,M as vt,N as ct,O as lt,P as Ot,Q as Ct,R as Ut,U as dt,V as wt,W as Qt,X as St,Y as It,c as Et,Z as Ft,$ as Dt,a0 as B,a1 as Tt,a2 as Pt,a3 as ft,a4 as Mt,a5 as At}from"./app-NS2l-4AQ.js";var y,a,x,p,w,D,O,j,T,P,Q,S,U,M,I,L,k,J,K,tt,V,et,W,st,N,it,q,rt,z,nt,_,gt,bt,Lt=(bt=class extends Rt{constructor(t,e){super();o(this,I);o(this,k);o(this,K);o(this,V);o(this,W);o(this,N);o(this,q);o(this,z);o(this,_);o(this,y,void 0);o(this,a,void 0);o(this,x,void 0);o(this,p,void 0);o(this,w,void 0);o(this,D,void 0);o(this,O,void 0);o(this,j,void 0);o(this,T,void 0);o(this,P,void 0);o(this,Q,void 0);o(this,S,void 0);o(this,U,void 0);o(this,M,new Set);this.options=e,h(this,y,t),h(this,O,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),pt(s(this,a),this.options)?d(this,I,L).call(this):this.updateResult(),d(this,W,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,N,it).call(this),d(this,q,rt).call(this),s(this,a).removeObserver(this)}setOptions(t,e){const r=this.options,f=s(this,a);if(this.options=s(this,y).defaultQueryOptions(t),H(r,this.options)||s(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),d(this,z,nt).call(this);const n=this.hasListeners();n&&yt(s(this,a),f,this.options,r)&&d(this,I,L).call(this),this.updateResult(e),n&&(s(this,a)!==f||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&d(this,k,J).call(this);const c=d(this,K,tt).call(this);n&&(s(this,a)!==f||this.options.enabled!==r.enabled||c!==s(this,U))&&d(this,V,et).call(this,c)}getOptimisticResult(t){const e=s(this,y).getQueryCache().build(s(this,y),t),r=this.createResult(e,t);return jt(this,r)&&(h(this,p,r),h(this,D,this.options),h(this,w,s(this,a).state)),r}getCurrentResult(){return s(this,p)}trackResult(t){const e={};return Object.keys(t).forEach(r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(s(this,M).add(r),t[r])})}),e}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,y).defaultQueryOptions(t),r=s(this,y).getQueryCache().build(s(this,y),e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return d(this,I,L).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,p)))}createResult(t,e){var ut;const r=s(this,a),f=this.options,n=s(this,p),c=s(this,w),v=s(this,D),F=t!==r?t.state:s(this,x),{state:u}=t;let{error:C,errorUpdatedAt:l,fetchStatus:g,status:m}=u,A=!1,b;if(e._optimisticResults){const R=this.hasListeners(),$=!R&&pt(t,e),mt=R&&yt(t,r,e,f);($||mt)&&(g=Ut(t.options.networkMode)?"fetching":"paused",u.dataUpdatedAt||(m="pending")),e._optimisticResults==="isRestoring"&&(g="idle")}if(e.select&&typeof u.data<"u")if(n&&u.data===(c==null?void 0:c.data)&&e.select===s(this,j))b=s(this,T);else try{h(this,j,e.select),b=e.select(u.data),b=dt(n==null?void 0:n.data,b,e),h(this,T,b),h(this,O,null)}catch(R){h(this,O,R)}else b=u.data;if(typeof e.placeholderData<"u"&&typeof b>"u"&&m==="pending"){let R;if(n!=null&&n.isPlaceholderData&&e.placeholderData===(v==null?void 0:v.placeholderData))R=n.data;else if(R=typeof e.placeholderData=="function"?e.placeholderData((ut=s(this,P))==null?void 0:ut.state.data,s(this,P)):e.placeholderData,e.select&&typeof R<"u")try{R=e.select(R),h(this,O,null)}catch($){h(this,O,$)}typeof R<"u"&&(m="success",b=dt(n==null?void 0:n.data,R,e),A=!0)}s(this,O)&&(C=s(this,O),b=s(this,T),l=Date.now(),m="error");const X=g==="fetching",Y=m==="pending",Z=m==="error",ht=Y&&X;return{status:m,fetchStatus:g,isPending:Y,isSuccess:m==="success",isError:Z,isInitialLoading:ht,isLoading:ht,data:b,dataUpdatedAt:u.dataUpdatedAt,error:C,errorUpdatedAt:l,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>F.dataUpdateCount||u.errorUpdateCount>F.errorUpdateCount,isFetching:X,isRefetching:X&&!Y,isLoadingError:Z&&u.dataUpdatedAt===0,isPaused:g==="paused",isPlaceholderData:A,isRefetchError:Z&&u.dataUpdatedAt!==0,isStale:ot(t,e),refetch:this.refetch}}updateResult(t){const e=s(this,p),r=this.createResult(s(this,a),this.options);if(h(this,w,s(this,a).state),h(this,D,this.options),s(this,w).data!==void 0&&h(this,P,s(this,a)),H(r,e))return;h(this,p,r);const f={},n=()=>{if(!e)return!0;const{notifyOnChangeProps:c}=this.options,v=typeof c=="function"?c():c;if(v==="all"||!v&&!s(this,M).size)return!0;const E=new Set(v??s(this,M));return this.options.throwOnError&&E.add("error"),Object.keys(s(this,p)).some(F=>{const u=F;return s(this,p)[u]!==e[u]&&E.has(u)})};(t==null?void 0:t.listeners)!==!1&&n()&&(f.listeners=!0),d(this,_,gt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,W,st).call(this)}},y=new WeakMap,a=new WeakMap,x=new WeakMap,p=new WeakMap,w=new WeakMap,D=new WeakMap,O=new WeakMap,j=new WeakMap,T=new WeakMap,P=new WeakMap,Q=new WeakMap,S=new WeakMap,U=new WeakMap,M=new WeakMap,I=new WeakSet,L=function(t){d(this,z,nt).call(this);let e=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(vt)),e},k=new WeakSet,J=function(){if(d(this,N,it).call(this),ct||s(this,p).isStale||!lt(this.options.staleTime))return;const e=Ot(s(this,p).dataUpdatedAt,this.options.staleTime)+1;h(this,Q,setTimeout(()=>{s(this,p).isStale||this.updateResult()},e))},K=new WeakSet,tt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},V=new WeakSet,et=function(t){d(this,q,rt).call(this),h(this,U,t),!(ct||this.options.enabled===!1||!lt(s(this,U))||s(this,U)===0)&&h(this,S,setInterval(()=>{(this.options.refetchIntervalInBackground||Ct.isFocused())&&d(this,I,L).call(this)},s(this,U)))},W=new WeakSet,st=function(){d(this,k,J).call(this),d(this,V,et).call(this,d(this,K,tt).call(this))},N=new WeakSet,it=function(){s(this,Q)&&(clearTimeout(s(this,Q)),h(this,Q,void 0))},q=new WeakSet,rt=function(){s(this,S)&&(clearInterval(s(this,S)),h(this,S,void 0))},z=new WeakSet,nt=function(){const t=s(this,y).getQueryCache().build(s(this,y),this.options);if(t===s(this,a))return;const e=s(this,a);h(this,a,t),h(this,x,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},_=new WeakSet,gt=function(t){wt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,p))}),s(this,y).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},bt);function xt(i,t){return t.enabled!==!1&&!i.state.dataUpdatedAt&&!(i.state.status==="error"&&t.retryOnMount===!1)}function pt(i,t){return xt(i,t)||i.state.dataUpdatedAt>0&&at(i,t,t.refetchOnMount)}function at(i,t,e){if(t.enabled!==!1){const r=typeof e=="function"?e(i):e;return r==="always"||r!==!1&&ot(i,t)}return!1}function yt(i,t,e,r){return e.enabled!==!1&&(i!==t||r.enabled===!1)&&(!e.suspense||i.state.status!=="error")&&ot(i,e)}function ot(i,t){return i.isStaleByTime(t.staleTime)}function jt(i,t){return!H(i.getCurrentResult(),t)}function kt(i=""){if(!Qt())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=It(i),e=St(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function Kt(i,t,e){const r=e||kt(),f=Et(()=>{const l=Ft(t);typeof l.enabled=="function"&&(l.enabled=l.enabled());const g=r.defaultQueryOptions(l);return g._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",g}),n=new i(r,f.value),c=Dt(n.getCurrentResult());let v=()=>{};B(r.isRestoring,l=>{l||(v(),v=n.subscribe(g=>{ft(c,g)}))},{immediate:!0});const E=()=>{n.setOptions(f.value),ft(c,n.getCurrentResult())};B(f,E),Mt(()=>{v()});const F=(...l)=>(E(),c.refetch(...l)),u=()=>new Promise((l,g)=>{let m=()=>{};const A=()=>{if(f.value.enabled!==!1){n.setOptions(f.value);const b=n.getOptimisticResult(f.value);b.isStale?(m(),n.fetchOptimistic(f.value).then(l,g)):(m(),l(b))}};A(),m=B(f,A)});B(()=>c.error,l=>{if(c.isError&&!c.isFetching&&At(f.value.throwOnError,[l,n.getCurrentQuery()]))throw l});const C=Tt(Pt(c));for(const l in c)typeof c[l]=="function"&&(C[l]=c[l]);return C.suspense=u,C.refetch=F,C}function qt(i,t){return Kt(Lt,i,t)}export{qt as u};
