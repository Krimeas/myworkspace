(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{81:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var a,n,r,s,l,i,o=c(2),j=c.n(o),d=c(68),b=c.n(d),m=(c(81),c(18)),x=c(73),O=c(96),h=c(98),p=c(95),u=c(71),v=c(17),g=c(6),N=(c(82),c(8)),f=c(15),y=c(12),w=c(9),k=c(92),S=c(32),P=c(97),I=Object(P.a)(a||(a=Object(S.a)(["\nmutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      _id\n      username\n      email\n    }\n  }\n}\n"]))),T=Object(P.a)(n||(n=Object(S.a)(["\nmutation CreateUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {\n  createUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {\n    token\n    user {\n      username\n      _id\n    }\n  }\n}\n"]))),$=Object(P.a)(r||(r=Object(S.a)(["\nmutation CreateProject($projectName: String!, $projectDescription: String!) {\n  createProject(projectName: $projectName, projectDescription: $projectDescription) {\n    owner\n    _id\n    projectName\n    projectDescription\n  }\n}\n"]))),C=(Object(P.a)(s||(s=Object(S.a)(["\nmutation Mutation($commentText: String!, $projectName: String!) {\n  createProjectComment(commentText: $commentText, projectName: $projectName) {\n    commentText\n    username\n    projectRecipient\n    createdAt\n    updatedAt\n  }\n}\n"]))),c(29)),D=c(30),_=c(59),E=new(function(){function e(){Object(C.a)(this,e)}return Object(D.a)(e,[{key:"getProfile",value:function(){return Object(_.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(_.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/user")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),A=c(0),G=function(e){var t=Object(o.useState)({email:"",password:""}),c=Object(w.a)(t,2),a=c[0],n=c[1],r=Object(k.a)(I),s=Object(w.a)(r,2),l=s[0],i=s[1],j=(i.error,i.data,function(e){var t=e.target,c=t.name,r=t.value;n(Object(m.a)(Object(m.a)({},a),{},Object(y.a)({},c,r)))}),d=function(){var e=Object(f.a)(Object(N.a)().mark((function e(t){var c,r;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,l({variables:Object(m.a)({},a)});case 5:c=e.sent,r=c.data,E.login(r.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:n({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)("main",{children:Object(A.jsxs)("div",{className:"tab-content",children:[Object(A.jsxs)("div",{className:"tab-pane fade show active",id:"pills-login",role:"tabpanel","aria-labelledby":"tab-login",children:[Object(A.jsxs)("form",{onSubmit:d,children:[Object(A.jsxs)("div",{className:"form-outline mb-4",children:[Object(A.jsx)("label",{className:"form-label",children:"Email"}),Object(A.jsx)("input",{className:"form-control",placeholder:"Your email",type:"email",name:"email",value:a.email,onChange:j})]}),Object(A.jsx)("label",{className:"form-label",children:"Password"}),Object(A.jsx)("div",{className:"form-outline mb-4",children:Object(A.jsx)("input",{className:"form-control",placeholder:"******",type:"password",name:"password",value:a.password,onChange:j})}),Object(A.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",children:"Sign in"})]}),Object(A.jsx)("button",{type:"submit",className:"btn  btn-block mb-4",children:Object(A.jsx)(v.b,{to:"/signup",children:"Signup"})})]}),Object(A.jsx)("div",{className:"tab-pane fade",id:"pills-register",role:"tabpanel","aria-labelledby":"tab-register"})]})})},L=function(){var e=Object(o.useState)({username:"",firstName:"",lastName:"",email:"",password:""}),t=Object(w.a)(e,2),c=t[0],a=t[1],n=Object(k.a)(T),r=Object(w.a)(n,2),s=r[0],l=r[1],i=l.error,j=l.data,d=function(e){var t=e.target,n=t.name,r=t.value;a(Object(m.a)(Object(m.a)({},c),{},Object(y.a)({},n,r)))},b=function(){var e=Object(f.a)(Object(N.a)().mark((function e(t){var a,n;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(c),e.prev=2,e.next=5,s({variables:Object(m.a)({},c)});case 5:a=e.sent,n=a.data,E.login(n.createUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)("main",{className:"flex-row justify-center mb-4 row",children:Object(A.jsx)("div",{className:"container h-100",children:Object(A.jsx)("div",{className:"row h-100 justify-content-center align-items-center",children:Object(A.jsxs)("div",{className:"col-lg-12 col-lg-offset-4",children:[Object(A.jsx)("div",{className:"container col-lg-12",children:Object(A.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Sign Up"})}),j?Object(A.jsxs)("p",{children:["Success! You may now head"," ",Object(A.jsx)(v.b,{to:"/",children:"back to the homepage."})]}):Object(A.jsxs)("form",{onSubmit:b,children:[Object(A.jsx)("div",{className:"container d-flex justify-content-center",children:Object(A.jsx)("div",{className:"col-lg-12 col-lg-offset-4",children:Object(A.jsx)("div",{className:"d-flex justify-content-center lign-items-center",children:Object(A.jsxs)("div",{className:"vstack gap-3 col-lg-10",children:[Object(A.jsx)("div",{className:"mb-3 mt-3",children:Object(A.jsx)("input",{className:"form-control",placeholder:"Create a username",name:"username",type:"text",value:c.username,onChange:d})}),Object(A.jsx)("div",{className:"mb-3 mt-3",children:Object(A.jsx)("input",{className:"form-control",placeholder:"Your First Name",name:"firstName",type:"text",value:c.firstName,onChange:d})}),Object(A.jsx)("div",{className:"mb-3 mt-3",children:Object(A.jsx)("input",{className:"form-control",placeholder:"Your Last Name",name:"lastName",type:"text",value:c.lastName,onChange:d})}),Object(A.jsx)("div",{className:"mb-3 mt-3",children:Object(A.jsx)("input",{className:"form-control",placeholder:"Your email",name:"email",type:"email",value:c.email,onChange:d})}),Object(A.jsx)("div",{className:"mb-3 mt-3",children:Object(A.jsx)("input",{className:"form-control",placeholder:"Create a password",name:"password",type:"password",value:c.password,onChange:d})})]})})})}),Object(A.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),i&&Object(A.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:i.message})]})})})})},R=function(){return Object(A.jsx)("main",{children:Object(A.jsxs)("div",{className:"text-center row col-xl-12",children:[Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "}),Object(A.jsx)("div",{className:"col-xl-8",style:{border:"1px dotted #1a1a1a"},children:Object(A.jsx)("div",{style:{border:"1px dotted #1a1a1a"},children:Object(A.jsx)("h3",{children:"USER COMPONENT"})})}),Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "})]})})},U=c(101),B=c(99),M=function(e){var t=e.projects;return console.log(t),t.length?Object(A.jsx)("div",{children:t&&t.map((function(e){return Object(A.jsx)("div",{className:"card mb-3",children:Object(A.jsx)(v.b,{className:"btn btn-primary btn-block btn-squared",to:"/projects/".concat(e._id),children:Object(A.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:e.projectName})})},e._id)}))}):Object(A.jsx)("h3",{children:"There are no projects"})},q=function(e){e.projects;var t=Object(o.useState)({projectName:"",projectDescription:""}),c=Object(w.a)(t,2),a=c[0],n=c[1],r=Object(k.a)($),s=Object(w.a)(r,2),l=s[0],i=s[1],j=(i.error,i.data,function(e){var t=e.target,c=t.name,r=t.value;n(Object(m.a)(Object(m.a)({},a),{},Object(y.a)({},c,r)))}),d=function(){var e=Object(f.a)(Object(N.a)().mark((function e(t){var c,r;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,l({variables:Object(m.a)({},a)});case 5:c=e.sent,r=c.data,console.log(r),window.location.assign("/projects/".concat(r.createProject._id)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:n({projectName:"",projectDescription:""});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)("main",{children:[Object(A.jsx)("h3",{children:"Add a Project"}),Object(A.jsxs)("div",{className:"tab-content",children:[Object(A.jsx)("div",{className:"tab-pane fade show active",id:"pills-login",role:"tabpanel","aria-labelledby":"tab-login"}),Object(A.jsxs)("form",{onSubmit:d,children:[Object(A.jsxs)("div",{className:"form-outline mb-4",children:[Object(A.jsx)("label",{className:"form-label",children:"Project Name"}),Object(A.jsx)("input",{className:"form-control",placeholder:"Project Name",type:"projectName",name:"projectName",value:a.projectName,onChange:j})]}),Object(A.jsx)("label",{className:"form-label",children:"Project Description"}),Object(A.jsx)("div",{className:"form-outline mb-4",children:Object(A.jsx)("input",{className:"form-control",placeholder:"Project Description",type:"projectDescription",name:"projectDescription",value:a.projectDescription,onChange:j})}),Object(A.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",children:"Submit"})]})]})]})},F=Object(P.a)(l||(l=Object(S.a)(["\nquery GetProjects {\n  GetProjects {\n    _id\n    projectName\n    projectDescription\n    owner\n    createdAt\n  }\n}\n"]))),H=Object(P.a)(i||(i=Object(S.a)(["\nquery GetProjects($projectId: ID!) {\n  GetProjectById(projectId: $projectId) {\n    projectName\n    projectDescription\n    owner\n    members\n    comments {\n      _id\n      username\n      commentText\n      createdAt\n      updatedAt\n    }\n    tasks {\n      _id\n      username\n      taskName\n      createdAt\n      updatedAt\n      isComplete\n      isInProgress\n      isOpen\n    }\n  }\n}\n"]))),Y=function(){var e=Object(U.a)(F),t=e.loading,c=e.data,a=(null===c||void 0===c?void 0:c.GetProjects)||[];return Object(A.jsx)(B.a,{fluid:!0,children:Object(A.jsx)("main",{children:Object(A.jsxs)("div",{className:"text-center row col-xl-12",children:[Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "}),Object(A.jsxs)("div",{className:"col-xl-8",style:{border:"1px dotted #1a1a1a"},children:[Object(A.jsx)("div",{style:{border:"1px dotted #1a1a1a"},children:t?Object(A.jsx)("div",{children:"Loading..."}):Object(A.jsx)(q,{})}),Object(A.jsxs)("div",{style:{border:"1px dotted #1a1a1a"},children:[Object(A.jsx)("h3",{children:"All Projects"}),t?Object(A.jsx)("div",{children:"Loading..."}):Object(A.jsx)(M,{projects:a})]})]}),Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "})]})})})},J=function(){return Object(A.jsx)(B.a,{fluid:!0,children:Object(A.jsx)("main",{children:Object(A.jsxs)("div",{className:"text-center row col-xl-12",children:[Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "}),Object(A.jsx)("div",{className:"col-xl-8",style:{border:"1px dotted #1a1a1a"},children:Object(A.jsx)("div",{style:{border:"1px dotted #1a1a1a"},children:Object(A.jsx)("h3",{children:"All Coworkers COMPONENT"})})}),Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "})]})})})},W=function(e){var t=e.project;return console.log(t._id),t.length?Object(A.jsx)("div",{children:t&&t.map((function(e){return Object(A.jsxs)("div",{className:"card mb-3",children:[Object(A.jsx)("div",{children:Object(A.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:e.ProjectName})}),Object(A.jsx)("div",{children:Object(A.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:e.ProjectDescription})}),Object(A.jsx)("div",{children:Object(A.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:e.owner})})]},e._id)}))}):Object(A.jsx)("h3",{children:"THERE HAS BEEN AN ERROR"})},z=function(e){var t=e.projects;return console.log(t._id),t.tasks.length?Object(A.jsx)("div",{children:t&&t.map((function(e){return Object(A.jsx)("div",{className:"card mb-3",children:Object(A.jsx)(v.b,{className:"btn btn-primary btn-block btn-squared",to:"/projects/".concat(t._id,"/").concat(e),children:Object(A.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:t.projectName})})},t._id)}))}):Object(A.jsx)("h3",{children:"This task is empty"})},V=function(){var e=Object(g.n)().projectId,t=Object(U.a)(H,{variables:{projectId:e}}),c=t.loading,a=t.data,n=(null===a||void 0===a?void 0:a.GetProjectById)||{};return console.log(n),Object(A.jsxs)("main",{children:[Object(A.jsx)("h1",{children:"THIS IS THE INDIVIDUAL PROJECTS PAGE"}),Object(A.jsx)("div",{className:"flex-row justify-center",children:Object(A.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"}})}),Object(A.jsxs)("div",{className:"col-xl-8",style:{border:"1px dotted #1a1a1a"},children:[Object(A.jsx)("h3",{children:"Individual Project"}),Object(A.jsx)("div",{style:{border:"1px dotted #1a1a1a"},children:c?Object(A.jsx)("div",{children:"Loading..."}):Object(A.jsx)(W,{projects:n})}),Object(A.jsxs)("div",{style:{border:"1px dotted #1a1a1a"},children:[Object(A.jsx)("h3",{children:"Project Tasks"}),c?Object(A.jsx)("div",{children:"Loading..."}):Object(A.jsx)(z,{tasks:n})]})]}),Object(A.jsx)("div",{className:"flex-row justify-center",children:Object(A.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"}})})]})},K=function(){return Object(A.jsx)(B.a,{fluid:!0,children:Object(A.jsx)("main",{children:Object(A.jsxs)("div",{className:"text-center row col-xl-12",children:[Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "}),Object(A.jsxs)("div",{className:"col-xl-8",style:{border:"1px dotted #1a1a1a"},children:[Object(A.jsx)("h3",{children:"Individual Task"}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{})]}),Object(A.jsx)("div",{className:"col-xl-2 justify-content-left bg-primary "})]})})})},Q=function(){return Object(A.jsx)("header",{className:"bg-primary text-light mb-4 py-3 flex-row align center",children:Object(A.jsx)("nav",{className:"navbar navbar-expand-lg bg-light flex-row justify-content-center",children:Object(A.jsxs)("div",{className:"container-fluid flex-column align-content-center",children:[Object(A.jsx)("a",{className:"navbar-brand",href:"/",children:Object(A.jsx)("h1",{children:"MyWorkSpace"})}),Object(A.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(A.jsx)("span",{className:"navbar-toggler-icon"})}),Object(A.jsxs)("div",{className:"container text-center",children:[Object(A.jsx)("div",{className:"nav-item",children:Object(A.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/users/:username/:coworkers",children:"CoWorkers"})}),Object(A.jsx)("div",{className:"row align-items-center",children:Object(A.jsx)("div",{className:"nav-item",children:Object(A.jsx)("a",{className:"nav-link",href:"/projects",children:"Projects"})})}),Object(A.jsx)("div",{className:"row align-items-end",children:Object(A.jsx)("div",{className:"nav-item",children:Object(A.jsx)("a",{className:"nav-link",href:"/users/:username",children:"User"})})})]})]})})})},X=function(){Object(g.j)(),Object(g.l)();return Object(A.jsxs)("footer",{className:"text-align-center",children:[Object(A.jsx)("h4",{children:Object(A.jsx)("center",{children:" Made with React by"})}),Object(A.jsx)("h4",{children:Object(A.jsx)("center",{children:"'Github11', 'Github12', 'Github13', 'Github14'"})})]})},Z=Object(x.a)({uri:"/graphql"}),ee=Object(u.a)((function(e,t){var c=t.headers,a=localStorage.getItem("id_token");return{headers:Object(m.a)(Object(m.a)({},c),{},{authorization:a?"Bearer ".concat(a):""})}})),te=new O.a({link:ee.concat(Z),cache:new h.a});var ce=function(){return Object(A.jsxs)(p.a,{client:te,children:[Object(A.jsx)(v.a,{children:Object(A.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(A.jsx)(Q,{}),Object(A.jsx)("div",{className:"container col-12",children:Object(A.jsxs)(g.c,{children:[Object(A.jsx)(g.a,{path:"/",element:Object(A.jsx)(G,{})}),Object(A.jsx)(g.a,{path:"/signup",element:Object(A.jsx)(L,{})}),Object(A.jsx)(g.a,{path:"/user",element:Object(A.jsx)(R,{})}),Object(A.jsx)(g.a,{path:"/projects",element:Object(A.jsx)(Y,{})}),Object(A.jsx)(g.a,{path:"/users/:username",element:Object(A.jsx)(R,{})}),Object(A.jsx)(g.a,{path:"/users/:username/:coworkers",element:Object(A.jsx)(J,{})}),Object(A.jsx)(g.a,{path:"/projects/:projectId",element:Object(A.jsx)(V,{})}),Object(A.jsx)(g.a,{path:"/projects/:projectId/:taskID",element:Object(A.jsx)(K,{})})]})}),Object(A.jsx)(X,{})]})}),console.log("Hello There")]})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};b.a.render(Object(A.jsx)(j.a.StrictMode,{children:Object(A.jsx)(ce,{})}),document.getElementById("root")),ae()}},[[85,1,2]]]);
//# sourceMappingURL=main.cea49a5e.chunk.js.map