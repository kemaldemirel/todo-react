(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{215:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(93),r=n.n(c),o=n(20),i=n(4),l=n(10),j=n(23),d=n(99),u=n(69),p=n(30),b=n.n(p),m=n(2),f=u.a({textTask:u.b().min(5,"\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(30,"\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),x=function(e){var t,n=e.onClickTask,s=Object(j.d)({resolver:Object(d.a)(f)}),a=s.register,c=s.handleSubmit,r=s.formState.errors,i=s.reset;return Object(m.jsxs)("form",{className:b.a.Form,onSubmit:c((function(e){var t={text:e.textTask,done:!1};n(t),i({textTask:""})})),children:[r.textTask&&Object(m.jsx)("span",{className:b.a.FormError,children:null===(t=r.textTask)||void 0===t?void 0:t.message}),Object(m.jsxs)("label",{className:b.a.FormLabel,children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({},a("textTask")),{},{type:"text",className:b.a.FormInput,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443..."})),Object(m.jsx)("button",{className:b.a.FormBtn,children:"+"})]})]})},h=n(97),O=n.n(h),k=n(26),_=n.n(k),T={month:"long",day:"numeric",hour:"numeric",minute:"numeric"},D=function(e){var t=e.id,n=e.index,s=e.createAt,a=e.text,c=e.doneTask,r=e.onClickDelete,o=e.done,i=new Date(s);return Object(m.jsxs)("li",{className:o?_.a.ListTasksDone:"",children:[Object(m.jsxs)("p",{children:[a,Object(m.jsxs)("span",{children:["\u0421\u043e\u0437\u0434\u0430\u043d\u0430: ",i.toLocaleString("ru",T)]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return c(t,n)},className:o?_.a.ListTasksDesabledBtn:_.a.ListTasksDoneBtn,children:"Done"}),Object(m.jsx)("button",{onClick:function(){return r(t)},className:_.a.ListTasksDeleteBtn,children:"Delete"})]})]},t)},L=function(e){var t=e.data,n=e.onClickDelete,s=e.searchValue,a=e.doneTask;return Object(m.jsx)(m.Fragment,{children:t.length>0?Object(m.jsx)("ul",{className:_.a.ListTasks,children:t.filter((function(e){return e.text.toLowerCase().includes(s.toLowerCase())})).map((function(e,t){return Object(m.jsx)(D,Object(o.a)(Object(o.a)({},e),{},{onClickDelete:n,done:e.done,doneTask:a}),e.id)}))}):Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px 40px",color:"#ccc"},children:[Object(m.jsx)(O.a,{sx:{fontSize:"60px"}}),Object(m.jsx)("span",{style:{fontSize:"20px"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442\u043e\u0439"})]})})},v=n(55),F=n.n(v),C=n(233),g=n(231);function N(){return Object(m.jsxs)(C.a,{sx:{width:"100%"},children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(g.a,{animation:"wave"}),Object(m.jsx)(g.a,{animation:!1})]})}var y=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],s=t[1],c=a.a.useState(""),r=Object(l.a)(c,2),j=r[0],d=r[1],u=a.a.useState(!0),p=Object(l.a)(u,2),b=p[0],f=p[1];return a.a.useEffect((function(){fetch("https://61753daa08834f0017c70b7f.mockapi.io/tasks").then((function(e){return e.json()})).then((function(e){e.reverse(),s(e),f(!1)}))}),[]),Object(m.jsxs)("div",{className:F.a.App,children:[Object(m.jsxs)("div",{className:F.a.AppHeader,children:[Object(m.jsxs)("h1",{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447",Object(m.jsx)("span",{children:n.length})]}),Object(m.jsx)("input",{value:j,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..",onChange:function(e){return d(e.target.value)}})]}),Object(m.jsx)("div",{className:F.a.AppInner,children:b?Object(m.jsx)(N,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{onClickTask:function(e){fetch("https://61753daa08834f0017c70b7f.mockapi.io/tasks",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return s([e].concat(Object(i.a)(n)))}))}}),Object(m.jsx)(L,{searchValue:j,data:n,onClickDelete:function(e){fetch("https://61753daa08834f0017c70b7f.mockapi.io/tasks/".concat(e),{method:"DELETE"}).then(s(n.filter((function(t){return t.id!==e}))))},doneTask:function(e){var t=n.filter((function(t){return t.id===e})),a=!Object(l.a)(t,1)[0].done;fetch("https://61753daa08834f0017c70b7f.mockapi.io/tasks/".concat(e),{method:"PUT",body:JSON.stringify({done:a}),headers:{"Content-Type":"application/json"}}).then(s(n.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{done:a}):t}))))}})]})})]})};n(215);r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))},26:function(e,t,n){e.exports={ListTasks:"list_ListTasks__3j0cj",ListTasksDone:"list_ListTasksDone__2iT8H",ListTasksDoneBtn:"list_ListTasksDoneBtn__2w3Wj",ListTasksDesabledBtn:"list_ListTasksDesabledBtn__2_91E",ListTasksDeleteBtn:"list_ListTasksDeleteBtn__2C_6Q"}},30:function(e,t,n){e.exports={Form:"form_Form__2dzrA",FormLabel:"form_FormLabel__3T8wU",FormInput:"form_FormInput__3wNvj",FormBtn:"form_FormBtn__1Y0Gs",FormError:"form_FormError__1KqC0"}},55:function(e,t,n){e.exports={App:"App_App__11kKp",AppHeader:"App_AppHeader__t3fsF",AppInner:"App_AppInner__6DqBf"}}},[[217,1,2]]]);
//# sourceMappingURL=main.d08e23e4.chunk.js.map