(this.webpackJsonpreactblog=this.webpackJsonpreactblog||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(23),r=s.n(n),i=s(3),l=s(8),o="LOGIN_START",j="LOGIN_SUCCESS",u="LOGIN_FAILURE",b="UPDATE_START",p="UPDATE_SUCCESS",O="UPDATE_FAILURE",d="LOGOUT",m=function(e,t){switch(t.type){case o:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload,isFetching:!1,error:!1});case u:return Object(l.a)(Object(l.a)({},e),{},{error:!0});case b:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case p:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1});case O:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,error:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{user:null,isFetching:!1,error:!1});default:return e}},h=s(0),x={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},f=Object(a.createContext)(x),g=function(e){var t=e.children,s=Object(a.useReducer)(m,x),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(h.jsx)(f.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},N=s(4),v=s.n(N),w=s(7),I=s(6),y=s.n(I),S=(s(48),function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"headerTitles",children:[Object(h.jsx)("span",{className:"headerTitleSmall",children:"React & Node"}),Object(h.jsx)("span",{className:"headerTitleLarge",children:"Blog"})]}),Object(h.jsx)("img",{className:"headerImg",src:"https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:"hero"})]})}),k=s(5),T=(s(49),function(e){var t=e.post;return Object(h.jsxs)("div",{className:"post",children:[t.photo&&Object(h.jsx)("img",{className:"postImg",src:"http://localhost:5000/images/"+t.photo,alt:""}),Object(h.jsxs)("div",{className:"postInfo",children:[Object(h.jsx)("div",{className:"postCategories",children:t.categories.map((function(e){return Object(h.jsx)("span",{className:"postCategory",children:e.name})}))}),Object(h.jsx)(k.b,{to:"/post/".concat(t._id),className:"link",children:Object(h.jsx)("span",{className:"postTitle",children:t.title})}),Object(h.jsx)("hr",{}),Object(h.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(h.jsx)("div",{className:"postDesc",children:t.description})]})}),C=(s(50),function(e){var t=e.posts;return Object(h.jsx)("div",{className:"posts",children:t.map((function(e,t){return Object(h.jsx)(T,{post:e},t)}))})}),E=(s(51),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsxs)("div",{className:"sidebarItem",children:[Object(h.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(h.jsx)("img",{src:"https://images.pexels.com/photos/7645825/pexels-photo-7645825.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",alt:"me"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eligendi saepe consectetur cum atque pariatur ipsum aperiam quae."})]}),Object(h.jsxs)("div",{className:"sidebarItem",children:[Object(h.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(h.jsx)("ul",{className:"sidebarList",children:s.map((function(e,t){return Object(h.jsx)(k.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(h.jsx)("li",{className:"sidebarListItem",children:e.name})},t)}))})]}),Object(h.jsxs)("div",{className:"sidebarItem",children:[Object(h.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(h.jsxs)("div",{className:"sidebarSocial",children:[Object(h.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(h.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"}),Object(h.jsx)("i",{className:"sidebarIcon fab fa-pinterest-square"}),Object(h.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"})]})]})]})}),P=(s(52),s(2)),L=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(P.e)().search;return Object(a.useEffect)((function(){var e=function(){var e=Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/posts".concat(n));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{}),Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)(C,{posts:s}),Object(h.jsx)(E,{})]})]})},F=(s(53),function(){var e=Object(a.useContext)(f),t=e.user,s=e.dispatch;Object(P.f)();return Object(h.jsxs)("div",{className:"top",children:[Object(h.jsxs)("div",{className:"topLeft",children:[Object(h.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(h.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(h.jsx)("i",{className:"topIcon fab fa-pinterest-square"}),Object(h.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(h.jsx)("div",{className:"topCenter",children:Object(h.jsxs)("ul",{className:"topList",children:[Object(h.jsx)("li",{className:"topListItem",children:Object(h.jsx)(k.b,{className:"link",to:"/",children:"HOME"})}),Object(h.jsx)("li",{className:"topListItem",children:Object(h.jsx)(k.b,{className:"link",to:"/about",children:"ABOUT"})}),Object(h.jsx)("li",{className:"topListItem",children:Object(h.jsx)(k.b,{className:"link",to:"/contact",children:"CONTACT"})}),Object(h.jsx)("li",{className:"topListItem",children:Object(h.jsx)(k.b,{className:"link",to:"/write",children:"WRITE"})}),Object(h.jsx)("li",{className:"topListItem",onClick:function(){s({type:d}),window.location.replace("/")},children:t&&Object(h.jsx)(k.b,{className:"link",to:"/logout",children:"LOGOUT"})})]})}),Object(h.jsxs)("div",{className:"topRight",children:[t?Object(h.jsx)(k.b,{to:"/settings",children:Object(h.jsx)("img",{className:"topImage",src:"http://localhost:5000/images/"+t.profilePicture,alt:"avatar"})}):Object(h.jsxs)("ul",{className:"topList",children:[Object(h.jsx)("li",{className:"topListItem",children:Object(h.jsx)(k.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(h.jsx)("li",{className:"topListItem",children:Object(h.jsx)(k.b,{className:"link",to:"/register",children:"REGISTER"})})]}),Object(h.jsx)("i",{className:"topSearchIcon fas fa-search"})]})]})}),D=(s(54),s(55),function(){var e=Object(P.e)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(i.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(f).user,l=Object(a.useState)(""),o=Object(i.a)(l,2),j=o[0],u=o[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),O=p[0],d=p[1],m=Object(a.useState)(!1),x=Object(i.a)(m,2),g=x[0],N=x[1];Object(a.useEffect)((function(){var t=function(){var t=Object(w.a)(v.a.mark((function t(){var s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("/posts/".concat(e));case 2:s=t.sent,n(s.data),u(s.data.title),d(s.data.description);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var I=function(){var t=Object(w.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.delete("/posts/".concat(e),{data:{username:r.username}});case 3:window.location.replace("/"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(w.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.put("/posts/".concat(e),{username:r.username,title:j,description:O});case 3:N(!1),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"singlePost",children:Object(h.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(h.jsx)("img",{src:"http://localhost:5000/images/"+c.photo,alt:"",className:"singlePostImg"}),g?Object(h.jsx)("input",{type:"text",value:j,onChange:function(e){return u(e.target.value)},className:"singlePostTitleInput",autoFocus:!0}):Object(h.jsxs)("h1",{className:"singlePostTitle",children:[j,c.username===(null===r||void 0===r?void 0:r.username)&&Object(h.jsxs)("div",{className:"singlePostEdit",children:[Object(h.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return N(!0)}}),Object(h.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:I})]})]}),Object(h.jsxs)("div",{className:"singlePostInfo",children:[Object(h.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(h.jsx)(k.b,{className:"link",to:"/?user=".concat(c.username),children:Object(h.jsxs)("b",{children:[" ",c.username]})})]}),Object(h.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),g?Object(h.jsx)("textarea",{className:"singlePostDescInput",value:O,onChange:function(e){return d(e.target.value)}}):Object(h.jsx)("p",{className:"singlePostDesc",children:O}),g&&Object(h.jsx)("button",{className:"singlePostButton",onClick:S,children:"Update"})]})})}),U=function(){return Object(h.jsxs)("div",{className:"single",children:[Object(h.jsx)(D,{}),Object(h.jsx)(E,{})]})},R=(s(56),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(a.useState)(null),u=Object(i.a)(j,2),b=u[0],p=u[1],O=Object(a.useContext)(f).user,d=function(){var e=Object(w.a)(v.a.mark((function e(t){var a,c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:O.username,title:s,description:l},!b){e.next=16;break}return c=new FormData,n=Date.now()+b.name,c.append("name",n),c.append("file",b),a.photo=n,e.prev=8,e.next=11,y.a.post("/upload",c);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),alert("Error has occurred!",e.t0);case 16:return e.prev=16,e.next=19,y.a.post("/posts",a);case 19:r=e.sent,window.location.replace("/post/".concat(r.data._id)),e.next=26;break;case 23:e.prev=23,e.t1=e.catch(16),alert("Error has occurred!",e.t1);case 26:case"end":return e.stop()}}),e,null,[[8,13],[16,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"write",children:[b&&Object(h.jsx)("img",{className:"writeImg",src:URL.createObjectURL(b),alt:""}),Object(h.jsxs)("form",{className:"writeForm",onSubmit:d,children:[Object(h.jsxs)("div",{className:"writeFormGroup",children:[Object(h.jsx)("label",{htmlFor:"fileInput",children:Object(h.jsx)("i",{className:" writeIcon fas fa-plus"})}),Object(h.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return p(e.target.files[0])}}),Object(h.jsx)("input",{type:"text",placeholder:"title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsx)("div",{className:"writeFormGroup",children:Object(h.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}})}),Object(h.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}),A=(s(57),function(){var e=Object(a.useContext)(f),t=e.user,s=e.dispatch,c=Object(a.useState)(null),n=Object(i.a)(c,2),r=n[0],l=n[1],o=Object(a.useState)(""),j=Object(i.a)(o,2),u=j[0],d=j[1],m=Object(a.useState)(""),x=Object(i.a)(m,2),g=x[0],N=x[1],I=Object(a.useState)(""),S=Object(i.a)(I,2),k=S[0],T=S[1],C=Object(a.useState)(!1),P=Object(i.a)(C,2),L=P[0],F=P[1],D=function(){var e=Object(w.a)(v.a.mark((function e(a){var c,n,i,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s({type:b}),c={userId:t._id,username:u,email:g,password:k},!r){e.next=17;break}return n=new FormData,i=Date.now()+r.name,n.append("name",i),n.append("file",r),c.profilePicture=i,e.prev=9,e.next=12,y.a.post("/upload",n);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),alert("Error has occurred!",e.t0);case 17:return e.prev=17,e.next=20,y.a.put("/users/".concat(t._id),c);case 20:l=e.sent,F(!0),s({type:p,payload:l.data}),e.next=29;break;case 25:e.prev=25,e.t1=e.catch(17),s({type:O}),alert("Error has occurred!",e.t1);case 29:case"end":return e.stop()}}),e,null,[[9,14],[17,25]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"settings",children:[Object(h.jsxs)("div",{className:"settingsWrapper",children:[Object(h.jsxs)("div",{className:"settingsTitle",children:[Object(h.jsx)("span",{className:"settingsUpdateTitle",children:"Update your account"}),Object(h.jsx)("span",{className:"settingsDeleteTitle",children:"Delete your account"})]}),Object(h.jsxs)("form",{className:"settingsForm",onSubmit:D,children:[Object(h.jsx)("label",{children:"Profile Picture"}),Object(h.jsxs)("div",{className:"settingsPP",children:[Object(h.jsx)("img",{src:r?URL.createObjectURL(r):"http://localhost:5000/images/"+t.profilePicture,alt:"avatar"}),Object(h.jsx)("label",{htmlFor:"fileInput",children:Object(h.jsx)("i",{className:" settingsPPIcon far fa-user-circle"})}),Object(h.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return l(e.target.files[0])}})]}),Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",placeholder:t.username,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",placeholder:t.email,onChange:function(e){return N(e.target.value)}}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",onChange:function(e){return T(e.target.value)}}),Object(h.jsx)("button",{className:"settingsSubmit",type:"submit",children:"update"}),L&&Object(h.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(h.jsx)(E,{})]})}),q=(s(58),function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(f),c=s.dispatch,n=(s.isFetching,Object(P.f)()),r=function(){var s=Object(w.a)(v.a.mark((function s(a){var r;return v.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:o}),s.prev=2,s.next=5,y.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:r=s.sent,c({type:j,payload:r.data}),n.push("/"),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),c({type:u});case 13:case"end":return s.stop()}}),s,null,[[2,10]])})));return function(e){return s.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("span",{className:"loginTitle",children:"Login"}),Object(h.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{className:"loginInput",type:"text",placeholder:"Enter your username...",ref:e}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"loginInput",type:"password",placeholder:"Enter your password",ref:t}),Object(h.jsx)("button",{className:"logButton",type:"submit",children:"Login"})]}),Object(h.jsx)("button",{className:"loginRegisterButton",children:Object(h.jsx)(k.b,{className:"link",to:"/register",children:"Register"})})]})}),G=(s(59),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),b=u[0],p=u[1],O=Object(a.useState)(!1),d=Object(i.a)(O,2),m=d[0],x=d[1],f=function(){var e=Object(w.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(!1),e.prev=2,e.next=5,y.a.post("/auth/register",{username:s,email:l,password:b});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)("span",{className:"registerTitle",children:"Register"}),Object(h.jsxs)("form",{className:"registerForm",onSubmit:f,children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{className:"registerInput",type:"text",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{className:"registerInput",type:"text",placeholder:"Enter your email...",onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{className:"registerInput",type:"password",placeholder:"Enter your password",onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(h.jsx)("button",{className:"loginButton",children:Object(h.jsx)(k.b,{className:"link",to:"/login",children:"Login"})}),m&&Object(h.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})});var _=function(){var e=Object(a.useContext)(f).user;return Object(h.jsxs)(k.a,{children:[Object(h.jsx)(F,{}),Object(h.jsxs)(P.c,{children:[Object(h.jsx)(P.a,{path:"/",element:Object(h.jsx)(L,{})}),Object(h.jsx)(P.a,{path:"/register",element:e?Object(h.jsx)(L,{}):Object(h.jsx)(G,{})}),Object(h.jsx)(P.a,{path:"/login",element:e?Object(h.jsx)(L,{}):Object(h.jsx)(q,{})}),Object(h.jsx)(P.a,{path:"/write",element:e?Object(h.jsx)(R,{}):Object(h.jsx)(G,{})}),Object(h.jsx)(P.a,{path:"/settings",element:e?Object(h.jsx)(A,{}):Object(h.jsx)(G,{})}),Object(h.jsx)(P.a,{path:"/post/:postId",element:Object(h.jsx)(U,{})})]})]})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{children:Object(h.jsx)(_,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.8a261a8c.chunk.js.map