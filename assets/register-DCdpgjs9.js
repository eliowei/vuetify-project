import{R as C,ad as q,ae as M,Y as P,$ as R,X as l,L as t,aw as V,ai as w,Z as e,aN as T,au as i,af as E,ag as N,am as B}from"./index-DE2ZxSef.js";import{c as F,a as n,f as U,u as _,e as m,V as I}from"./index.esm-Z-AUgbwO.js";import{v as b}from"./index-DwEiyNro.js";import{V as h,a as L,b as $}from"./route-block-BPskVbgn.js";import{V as D}from"./VDivider-BLGl6AYq.js";import{V as j}from"./VContainer-B1KUYeIW.js";const O={class:"text-center"},X={class:"text-center"},Y={__name:"register",setup(Z){const{t:s}=C(),{api:x}=B(),f=q(),y=M(),S=F({account:n().required(s("api.userAccountRequired")).min(4,s("api.userAccountTooShort")).max(20,s("api.userAccountTooLong")).test("isAlphanumeric",s("api.userAccountInvalid"),a=>b.isAlphanumeric(a)),email:n().required(s("api.userEmailRequired")).test("isEmail",s("api.userEmailInvalid"),a=>b.isEmail(a)),password:n().required(s("api.userPasswordRequired")).min(4,s("api.userPasswordTooShort")).max(20,s("api.userPasswordTooLong")),passwordConfirm:n().oneOf([U("password")],s("api.userPasswordNotMatch"))}),{handleSubmit:k,isSubmitting:v}=_({validationSchema:S}),d=m("account"),c=m("email"),p=m("password"),g=m("passwordConfirm"),A=k(async a=>{var r,o;try{await x.post("/user",{account:a.account,email:a.email,password:a.password}),f({text:s("register.success"),snackbarProps:{color:"green"}}),y.push("/login")}catch(u){console.log(u),f({text:s("api."+(((o=(r=u==null?void 0:u.response)==null?void 0:r.data)==null?void 0:o.message)||"unknownError")),snackbarProps:{color:"red"}})}});return(a,r)=>(P(),R(j,null,{default:l(()=>[t(L,{justify:"center"},{default:l(()=>[t(h,{cols:"12"},{default:l(()=>[V("h1",O,w(a.$t("nav.register")),1)]),_:1}),t(D),t(h,{cols:"6"},{default:l(()=>[t(I,{disabled:e(v),onSubmit:T(e(A),["prevent"])},{default:l(()=>[t(i,{modelValue:e(d).value.value,"onUpdate:modelValue":r[0]||(r[0]=o=>e(d).value.value=o),"error-messages":e(d).errorMessage.value,label:a.$t("user.account"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),t(i,{modelValue:e(c).value.value,"onUpdate:modelValue":r[1]||(r[1]=o=>e(c).value.value=o),"error-messages":e(c).errorMessage.value,label:a.$t("user.email")},null,8,["modelValue","error-messages","label"]),t(i,{modelValue:e(p).value.value,"onUpdate:modelValue":r[2]||(r[2]=o=>e(p).value.value=o),type:"password","error-messages":e(p).errorMessage.value,label:a.$t("user.password"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),t(i,{modelValue:e(g).value.value,"onUpdate:modelValue":r[3]||(r[3]=o=>e(g).value.value=o),type:"password","error-messages":e(g).errorMessage.value,label:a.$t("user.passwordConfirm"),minlength:"4",maxlength:"20",counter:""},null,8,["modelValue","error-messages","label"]),V("div",X,[t(E,{loading:e(v),type:"submit",color:"primary"},{default:l(()=>[N(w(a.$t("register.submit")),1)]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};typeof $=="function"&&$(Y);export{Y as default};
