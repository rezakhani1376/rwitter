(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{52:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n(43),a=n.n(r),i=(n(52),n(3)),s=n(11),u=n(0),o=n.n(u),j=n(31),b=n(14),l=n(44),d=n(21),O=n(65),h=n(46),f=n(25),p=Object(h.a)({apiKey:"AIzaSyBEWQMAxNx4_yTE1OpDufYoeutZG59PdPY",authDomain:"rwitter-37d3e.firebaseapp.com",databaseURL:"https://rwitter-37d3e.firebaseio.com",projectId:"rwitter-37d3e",storageBucket:"rwitter-37d3e.appspot.com",messagingSenderId:"1072656244567",appId:"1:1072656244567:web:bf9caf6dfd8e59d80c2812"}),x=(Object(f.c)(p),Object(d.e)()),m=n(9),v=function(e){var t=e.rweetObj,n=e.isOwner,r=Object(c.useState)(!1),a=Object(s.a)(r,2),u=a[0],j=a[1],b=Object(c.useState)(t.text),l=Object(s.a)(b,2),O=l[0],h=l[1],p=function(){var e=Object(i.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure want to delete this rweet?")){e.next=4;break}return e.next=4,Object(d.c)(Object(d.d)(x,"rweets","".concat(t.id)));case 4:n=Object(f.c)(),c=Object(f.d)(n,"".concat(t.creatorId)),Object(f.a)(c).then((function(){console.log("file deleted")})).catch((function(e){}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.d)(x,"rweets","".concat(t.id)),e.next=3,Object(d.h)(n,{text:O});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl,alt:"this is a image",width:"100px",height:"100px"})]}),u&&Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(),j(!1)},children:[Object(m.jsx)("input",{value:O,onChange:function(e){var t=e.target.value;console.log(t),h(t)},type:"text",placeholder:"Edit your rweet",required:!0}),Object(m.jsx)("button",{onClick:function(){j(!1),h(t.text)},children:"Cancel"}),Object(m.jsx)("button",{type:"submit",children:"confirm"})]})}),n&&!u&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:p,children:"Delete Rweeet"}),Object(m.jsx)("button",{onClick:g,children:"Edit Rweet"})]})]})},g=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],u=r[1],j=Object(c.useState)([]),b=Object(s.a)(j,2),h=b[0],p=b[1],g=Object(c.useState)(""),w=Object(s.a)(g,2),y=w[0],k=w[1];Object(c.useEffect)((function(){var e=Object(d.g)(Object(d.b)(x,"rweets"));Object(d.f)(e,(function(e){var t=[];e.forEach((function(e){var n=Object(l.a)({id:e.id},e.data());t.push(n)})),p(t)}))}),[]);var S=function(){var e=Object(i.a)(o.a.mark((function e(n){var c,r,i,s,j,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",r=Object(O.a)(),""===y){e.next=12;break}return i=Object(f.c)(),s=Object(f.d)(i,"".concat(r)),e.next=8,Object(f.e)(s,y,"data_url");case 8:return e.sent,e.next=11,Object(f.b)(Object(f.d)(i,"".concat(r)));case 11:c=e.sent;case 12:return j={text:a,createAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.prev=13,e.next=16,Object(d.a)(Object(d.b)(x,"rweets"),j);case 16:b=e.sent,console.log("Document written with ID: ",b.id),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.error("Error adding document: ",e.t0);case 23:u(""),k("");case 25:case"end":return e.stop()}}),e,null,[[13,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{onSubmit:S,children:[Object(m.jsx)("input",{type:"text",placeholder:"what's in your mind?",onChange:function(e){var t=e.target.value;u(t)},value:a,maxLength:120}),Object(m.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){console.log(e),k(e.currentTarget.result)},n.readAsDataURL(t)}}),Object(m.jsx)("button",{type:"submit",children:"Rweet"}),y&&Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:y,width:"50px",height:"50px"}),Object(m.jsx)("button",{onClick:function(){return k(null)},children:"Clear"})]})]}),h.map((function(e){return Object(m.jsx)(v,{rweetObj:e,isOwner:t.uid===e.creatorId},e.id)}))]})},w=n(17),y=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(c.useState)(""),b=Object(s.a)(j,2),l=b[0],d=b[1],O=Object(c.useState)(!0),h=Object(s.a)(O,2),f=h[0],p=h[1],x=Object(w.d)(),v=function(e){var t=e.target.name;"email"===t?r(e.target.value):"password"===t&&o(e.target.value)},g=function(e){var t,n=e.target.name;"google"===n?t=new w.b:"github"===n&&(t=new w.a),Object(w.f)(x,t).then((function(e){w.b.credentialFromResult(e).accessToken;var t=e.user;console.log(t)})).catch((function(e){e.code;var t=e.message;e.email,w.b.credentialFromError(e);console.log(t)}))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f?Object(w.c)(x,n,u).then((function(e){var t=e.user;console.log(t)})).catch((function(e){e.code;var t=e.message;console.log(t),d(t)})):Object(w.e)(x,n,u).then((function(e){e.user})).catch((function(e){e.code;var t=e.message;d(t)}))},children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:v}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,value:u,onChange:v}),Object(m.jsx)("button",{type:"submit",children:f?"Create Account":"Sign In"}),l]}),Object(m.jsx)("div",{onClick:function(){p((function(e){return!e}))},children:f?"Sign In":"Create Account"}),Object(m.jsx)("button",{onClick:g,name:"google",children:"Continue With Google"}),Object(m.jsx)("button",{onClick:g,name:"github",children:"Continue With GitHub"})]})},k=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsxs)(j.b,{to:"/profile",children:[" ",t.displayName]})})]})})},S=function(e){var t=e.refreshUser,n=e.userObj,r=Object(c.useState)(n.displayName),a=Object(s.a)(r,2),u=a[0],j=a[1],l=Object(w.d)(),d=Object(b.f)(),O=function(){var e=Object(i.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),u!==n.displayName){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(w.h)(l.currentUser,{displayName:u});case 5:e.sent,t();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{onSubmit:O,children:[Object(m.jsx)("input",{value:u,type:"text",placeholder:"Display name",onChange:function(e){var t=e.target.value;j(t)}}),Object(m.jsx)("button",{type:"submit",children:"Updated Profile"})]}),Object(m.jsx)("button",{onClick:function(){Object(w.g)(l).then((function(){d.push("/")})).catch((function(e){}))},children:"Log Out"})]})},C=function(e){var t=e.isLoggedIn,n=e.userObj,r=e.refreshUser;Object(w.d)().currentUser;return Object(m.jsxs)(j.a,{children:[t&&Object(m.jsx)(k,{userObj:n}),Object(m.jsx)(b.c,{children:t?Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(b.a,{exact:!0,path:"/",children:Object(m.jsx)(g,{userObj:n})}),Object(m.jsx)(b.a,{exact:!0,path:"/profile",children:Object(m.jsx)(S,{userObj:n,refreshUser:r})})]}):Object(m.jsx)(b.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})})})]})};var I=function(){var e=Object(w.d)(),t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],u=Object(c.useState)(!1),j=Object(s.a)(u,2),b=j[0],l=j[1],d=Object(c.useState)(null),O=Object(s.a)(d,2),h=O[0],f=O[1];Object(c.useEffect)((function(){e.onAuthStateChanged((function(e){e?(l(!0),f({displayName:e.displayName,uid:e.uid})):(l(!1),f(null)),a(!0)}))}),[]);var p=function(){var t=Object(i.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.currentUser;case 2:n=t.sent,console.log(n.displayName),f((function(){return{displayName:n.displayName,uid:n.uid}}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(c.Fragment,{children:[r?Object(m.jsx)(C,{refreshUser:p,isLoggedIn:b,userObj:h}):"Initializing...",Object(m.jsxs)("footer",{children:[" \xa9 ",(new Date).getFullYear()," Rwitter"]})]})};a.a.render(Object(m.jsx)(I,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1d934b3d.chunk.js.map