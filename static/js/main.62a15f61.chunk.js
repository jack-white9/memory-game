(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=n(2),i=(n(9),n(10),n(0)),u=function(){return Object(i.jsx)("header",{className:"header",children:"Memory Game"})},j=(n(12),function(e){var t=e.score;return Object(i.jsx)("section",{className:"scoreContainer",children:Object(i.jsxs)("p",{className:"score",children:["Score: ",t]})})}),d=(n(13),[]),b=function(e){var t=e.setScore,n=e.resetScore,r=Object(c.useState)([]),s=Object(o.a)(r,2),a=s[0],u=s[1];return Object(c.useEffect)((function(){document.body.querySelector(".cardContainer").innerHTML="";for(var e=[],t=0;t<12;t++){var n=parseInt(12*Math.random()+1);e.includes(n)?t-=1:e.push(n)}u(a.concat(e))}),[t]),Object(i.jsx)("section",{className:"cardContainer",children:a.map((function(e){return Object(i.jsx)("button",{className:"card",onClick:function(e){t(),function(e){d.includes(e.target.textContent)?(n(),d=[]):d.push(e.target.textContent)}(e)},children:e})}))})};var l=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)("section",{className:"appContainer",children:[Object(i.jsxs)("section",{className:"headerContainer",children:[Object(i.jsx)(u,{}),Object(i.jsx)(j,{score:n})]}),Object(i.jsx)("section",{className:"mainContainer",children:Object(i.jsx)(b,{setScore:function(){return r(n+1)},resetScore:function(){return r(n-n)}})})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.62a15f61.chunk.js.map