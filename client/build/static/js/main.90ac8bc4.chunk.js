(this.webpackJsonplearnapp=this.webpackJsonplearnapp||[]).push([[0],{45:function(e,c,s){},71:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),l=s(36),n=s.n(l),i=(s(45),s(6)),r=(s(3),s(8)),j=function(){var e=localStorage.getItem("payload");return e?JSON.parse(e):void 0},o=s.p+"static/media/miracle.5b737656.png",d=s.p+"static/media/logo.0ca0cc78.png",b=s.p+"static/media/profile_image.9f133616.png",m=s.p+"static/media/sunset.dfff6659.png",h=s(39),O=s(0),u=function(){Object(i.g)();var e=Object(a.useState)({}),c=Object(r.a)(e,2),s=(c[0],c[1]);Object(a.useEffect)((function(){void 0!==j()&&s({email:j().email})}),[s]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"chat-container",children:[Object(O.jsxs)("div",{className:"c-col-1",children:[Object(O.jsx)("div",{className:"c-col-nth-1",children:Object(O.jsxs)("div",{className:"col-nth-option",children:[Object(O.jsx)("div",{className:"logo-img",children:Object(O.jsx)("img",{src:d,alt:"logo"})}),Object(O.jsx)("div",{className:"chat-prof-img",children:Object(O.jsx)("img",{src:o,alt:"prof image"})})]})}),Object(O.jsxs)("div",{className:"c-col-nth-2",children:[Object(O.jsx)("div",{className:"search-case",children:Object(O.jsxs)("div",{className:"mi-search",children:[Object(O.jsx)("input",{type:"text",placeholder:"Search"}),Object(O.jsx)("button",{children:Object(O.jsx)("i",{className:"fas fa-search"})})]})}),Object(O.jsx)("div",{className:"chat-output",children:Object(O.jsxs)("div",{className:"chat-box",children:[Object(O.jsx)("div",{className:"chat-img"}),Object(O.jsxs)("div",{className:"chat-description",children:[Object(O.jsx)("h4",{children:"Aime Sanders"}),Object(O.jsx)("p",{children:"How are you? What is up with you?"}),Object(O.jsx)("span",{children:"12:43AM"})]}),Object(O.jsx)("div",{className:"no-of-messages",children:"5"})]})})]})]}),Object(O.jsxs)("div",{className:"c-col-2",children:[Object(O.jsxs)("div",{className:"col2-header col2-top-header",children:[Object(O.jsxs)("div",{className:"guest-case",children:[Object(O.jsx)("div",{className:"guest-img",style:{backgroundImage:"url(".concat(b,")")}}),Object(O.jsxs)("div",{className:"guest-description",children:[Object(O.jsx)("h4",{children:"Aime Sanders"}),Object(O.jsx)("p",{children:"She's Here"})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("i",{className:"fas fa-video"})})]}),Object(O.jsxs)("div",{className:"_cht_showroom",children:[Object(O.jsx)("div",{className:"_mi_row",children:Object(O.jsxs)("div",{className:"_mi_cht",children:["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",Object(O.jsx)("span",{className:"_mi_time",children:"12:43PM"})]})}),Object(O.jsx)("div",{className:"_gue_row",children:Object(O.jsxs)("div",{className:"_gue_cht",children:["It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",Object(O.jsx)("span",{className:"_gue_time",children:"12:43PM"})]})})]}),Object(O.jsx)("div",{className:"col2-header messageContainer",children:Object(O.jsxs)("div",{className:"mi-type",children:[Object(O.jsx)(h.a,{className:"autoResize",placeholder:"Type a messsage",minRows:2}),Object(O.jsx)("button",{children:Object(O.jsx)("i",{className:"fas fa-caret-right"})})]})})]}),Object(O.jsx)("div",{className:"c-col-3",children:Object(O.jsxs)("div",{className:"c-col-3-nth-child",children:[Object(O.jsx)("div",{className:"_gue_prof_img",style:{backgroundImage:"url(".concat(b,")")}}),Object(O.jsx)("h2",{children:"Aime Sanders"}),Object(O.jsx)("p",{children:"She's Here"}),Object(O.jsxs)("div",{className:"_gue_description",children:[Object(O.jsx)("h4",{children:"Username"}),Object(O.jsx)("p",{children:"@Aimedars"}),Object(O.jsx)("h4",{children:"Location"}),Object(O.jsx)("p",{children:"Manchester, England"}),Object(O.jsx)("h4",{children:"Media"}),Object(O.jsx)("div",{className:"_gue_media_frame",children:Object(O.jsx)("div",{className:"_gue_media",style:{backgroundImage:"url(".concat(m,")")}})})]})]})})]})})},x=s(14),p=s(72),g=s(73),N=s(25),v=function(e,c){switch(console.log(c,"action"),c.type){case"SIGNUP_SUCCESS":return console.log({state:e,action:c}),e;case"SIGNIN_SUCCESS":return console.log({state:e,action:c}),[].concat(Object(N.a)(e),[c.state]);case"SIGNUP_FAIL":return console.log("FAIL"),[].concat(Object(N.a)(e),[c.state]);default:return e}},f=s(24),S=s.n(f),y="SIGNUP_SUCCESS",I="REGISTER_FAIL",w=function(){var e=Object(i.g)(),c=Object(a.useReducer)(v,[]),s=Object(r.a)(c,2),t=s[0],l=s[1],n=Object(a.useState)(""),j=Object(r.a)(n,2),o=j[0],d=j[1],b=Object(a.useState)(""),m=Object(r.a)(b,2),h=m[0],u=m[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"sign-mn-cont",children:Object(O.jsx)("div",{className:"sign-child-cont sn-2 p-2",children:Object(O.jsxs)(p.a,{onSubmit:function(c){c.preventDefault();var s=Object(r.a)(c.target.elements,2),a=s[0],n=s[1];""!==a.value?""!==n.value?l(function(e){console.log(e),S.a.post("http://localhost:5000/auth/signin",e).then((function(e){return console.log(e,"data"),{type:"SIGNIN_SUCCESS",state:e}})).catch((function(e){if(e)return{type:I,payload:"error"}}))}({type:"SIGNIN_SUCCESS",state:{email:a.value,password:n.value}}))&&t!=={}&&e.push("/"):u("Fill up your password"):d("Fill up your email")},className:"auth-form",children:[Object(O.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(O.jsx)(p.a.Label,{children:Object(O.jsx)("h3",{children:"Sign In"})})}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:"Email address"}),Object(O.jsx)(p.a.Control,{className:"sn-input",type:"email",placeholder:"Enter email"}),Object(O.jsx)(p.a.Text,{className:"text-muted mt-2",children:Object(O.jsx)("p",{className:"mb-0",children:o})})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(p.a.Label,{children:"Password"}),Object(O.jsx)(p.a.Control,{className:"sn-input",type:"password",autoComplete:"on",placeholder:"Password"}),Object(O.jsx)(p.a.Text,{className:"text-muted mt-2",children:Object(O.jsx)("p",{className:"mb-0",children:h})})]}),Object(O.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(O.jsx)(p.a.Text,{className:"text-muted",children:Object(O.jsx)(x.b,{to:"/Sign Up",children:"Forgot password"})})}),Object(O.jsx)(g.a,{className:"sn-btn",variant:"primary",type:"submit",children:"Submit"}),Object(O.jsx)(p.a.Group,{className:"mb-3 mt-3",controlId:"formBasicPassword",children:Object(O.jsxs)(p.a.Text,{className:"text-white",children:["Don't have an account? ",Object(O.jsx)(x.b,{to:"/SignUp",children:"Sign Up"})]})})]})})})})},_=function(){Object(i.g)();var e=Object(a.useReducer)(v,{}),c=Object(r.a)(e,2),s=(c[0],c[1]),t=Object(a.useState)(""),l=Object(r.a)(t,2),n=l[0],j=l[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),b=d[0],m=d[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"sign-mn-cont",children:Object(O.jsx)("div",{className:"sign-child-cont sn-2 p-2",children:Object(O.jsxs)(p.a,{onSubmit:function(e){e.preventDefault();var c=Object(r.a)(e.target.elements,2),a=c[0],t=c[1];""!==a.value?""!==t.value?function(e,c){console.log(e),S.a.post("http://localhost:5000/auth/signUp",e).then((function(e){return console.log(e,"data"),c({type:y,payload:{type:y,state:e.data.message}})})).catch((function(e){if(e)return{type:I,payload:"error"}}))}({email:a.value,password:t.value},s):m("Fill up your password"):j("Fill up your email")},className:"auth-form",children:[Object(O.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(O.jsx)(p.a.Label,{children:Object(O.jsx)("h3",{children:"Sign Up"})})}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:"Email address"}),Object(O.jsx)(p.a.Control,{className:"sn-input",type:"email",placeholder:"Enter email"}),Object(O.jsx)(p.a.Text,{className:"text-muted mt-2",children:Object(O.jsx)("p",{className:"mb-0",children:n})})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(p.a.Label,{children:"Password"}),Object(O.jsx)(p.a.Control,{className:"sn-input",type:"password",placeholder:"Password"}),Object(O.jsx)(p.a.Text,{className:"text-muted mt-2",children:Object(O.jsx)("p",{className:"mb-0",children:b})})]}),Object(O.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword"}),Object(O.jsx)(g.a,{className:"sn-btn",variant:"primary",type:"submit",children:"Submit"}),Object(O.jsx)(p.a.Group,{className:"mb-3 mt-3",controlId:"formBasicPassword",children:Object(O.jsxs)(p.a.Text,{className:"text-white",children:["Have have an account? ",Object(O.jsx)(x.b,{to:"/SignIn",children:"Sign In"})]})})]})})})})},C=function(){return Object(O.jsxs)(i.d,{children:["282d33",Object(O.jsx)(i.b,{exact:!0,path:"/signIn",component:w}),Object(O.jsx)(i.b,{path:"/signUp",component:_}),Object(O.jsx)(i.b,{path:"/",component:u})]})},E=(s(70),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,l=c.getLCP,n=c.getTTFB;s(e),a(e),t(e),l(e),n(e)}))});n.a.render(Object(O.jsx)(x.a,{children:Object(O.jsx)(t.a.StrictMode,{children:Object(O.jsx)(C,{})})}),document.getElementById("root")),E()}},[[71,1,2]]]);
//# sourceMappingURL=main.90ac8bc4.chunk.js.map