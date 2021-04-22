(this["webpackJsonpelevator-react"]=this["webpackJsonpelevator-react"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),i=n(8),c=n.n(i),s=(n(17),n(3)),l=n.n(s),u=n(2),d=n(4),f=n(6),b=n(5),p=n(9),v=n(10),m=n(12),j=n(11),O=n.p+"static/media/elevator_sound.6347182a.mp3";function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){var n=e.title,o=e.titleId,i=x(e,["title","titleId"]);return a.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:"20.000000pt",height:"40.000000pt",viewBox:"0 0 50.000000 50.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":o},i),n?a.createElement("title",{id:o},n):null,r||(r=a.createElement("g",{transform:"translate(0.000000,50.000000) scale(0.100000,-0.100000)",fill:"current",stroke:"none"},a.createElement("path",{d:"M0 200 l0 -200 250 0 250 0 0 200 0 200 -250 0 -250 0 0 -200z m475 0 l0 -175 -225 0 -225 0 -3 165 c-1 90 0 170 3 177 3 11 51 13 227 11 l223 -3 0 -175z"}),a.createElement("path",{d:"M74 345 c-4 -8 -4 -26 -2 -40 3 -14 -1 -30 -8 -36 -16 -13 -20 -139 -4 -139 6 0 10 -20 10 -45 l0 -45 40 0 40 0 0 45 c0 25 5 45 10 45 14 0 13 123 -2 138 -6 6 -12 29 -12 49 -1 35 -3 38 -34 41 -22 2 -34 -2 -38 -13z"}),a.createElement("path",{d:"M214 345 c-4 -8 -4 -26 -2 -40 3 -14 -1 -30 -8 -36 -16 -13 -20 -139 -4 -139 6 0 10 -20 10 -45 l0 -45 40 0 40 0 0 45 c0 25 5 45 10 45 14 0 13 123 -2 138 -6 6 -12 29 -12 49 -1 35 -3 38 -34 41 -22 2 -34 -2 -38 -13z"}),a.createElement("path",{d:"M354 345 c-4 -8 -4 -26 -2 -40 3 -14 -1 -30 -8 -36 -16 -13 -20 -139 -4 -139 6 0 10 -20 10 -45 l0 -45 40 0 40 0 0 45 c0 25 5 45 10 45 14 0 13 123 -2 138 -6 6 -12 29 -12 49 -1 35 -3 38 -34 41 -22 2 -34 -2 -38 -13z"}))))}var y=a.forwardRef(g),I=(n.p,n(0)),k="#ed484d",w="#5bcd88",E="#000000",C=function(e){return Object(I.jsx)("div",{className:"elevator",style:{top:e.elevator.position},children:Object(I.jsx)(y,{fill:e.elevator.isDoorOpen?w:e.elevator.isOccupied?k:E})})},S=function(e){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("button",{className:"capitalize border-radius bold ".concat(e.condition),onClick:e.handleClick,children:e.condition})})},F=function(e){return Object(I.jsxs)("div",{className:"Floor flex align-center justify-center",children:[Object(I.jsx)("h5",{className:"capitalize",children:function(){var t=e.floor.number;switch(t){case 0:return"ground floor";case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd");default:return"".concat(t,"th")}}()}),Object(I.jsx)("div",{className:"cells-container flex",children:e.elevators.map((function(t,n){return 0===e.floor.number?Object(I.jsx)("div",{className:"cell",children:Object(I.jsx)(C,{elevator:t})},n):Object(I.jsx)("div",{className:"cell"},n)}))}),Object(I.jsx)(S,{handleClick:function(){e.handleClick(e.floor)},condition:e.floor.condition}),Object(I.jsx)("audio",{className:"audio-element",children:Object(I.jsx)("source",{src:O})}),"arrived"===e.floor.condition&&void document.getElementsByClassName("audio-element")[0].play()]})};function B(e){return Array.from(Array(e).keys()).map((function(e){return{number:e,condition:"call"}}))}function N(e){return Array.from(Array(e).keys()).map((function(e){return{id:e,isOccupied:!1,isDoorOpen:!1,inFloor:0,position:0}}))}var A=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).updateData=function(t,n){var r=function(e,t){return{floorsInBuilding:B(e),elevators:N(t)}}(t,n),a=r.floorsInBuilding,o=r.elevators;e.state.rafIds.forEach((function(e){cancelAnimationFrame(e)})),e.setState((function(){return{floorsInBuilding:a,elevators:o,rafIds:Array.from(Array(n).keys())}}))},e.handleSubmit=function(){e.updateData(e.state.numOfFloors,e.state.numOfElevators)},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;a<1||e.setState((function(){return Object(b.a)({},r,+a)}))},e.handleClick=function(){var t=Object(f.a)(l.a.mark((function t(n){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.number,"call"===n.condition){t.next=3;break}return t.abrupt("return");case 3:return(a=Object(d.a)(e.state.queue)).push(r),t.next=7,e.setState((function(e){return{floorsInBuilding:e.floorsInBuilding.map((function(e){return e.number===r?Object(u.a)(Object(u.a)({},e),{},{condition:"waiting"}):e})),queue:Object(d.a)(a)}}));case 7:e.handleRequest();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRequest=Object(f.a)(l.a.mark((function t(){var n,r,a,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=e.state.queue).length){t.next=3;break}return t.abrupt("return");case 3:if(r=n[0],-1!==(a=e.findAvailableElevator(r))){t.next=7;break}return t.abrupt("return");case 7:return(o=Object(d.a)(n)).shift(),t.next=11,e.setState((function(){return{queue:Object(d.a)(o)}}));case 11:e.moveElevator(a,r);case 12:case"end":return t.stop()}}),t)}))),e.findAvailableElevator=function(t){return e.state.elevators.filter((function(e){return!e.isOccupied})).reduce((function(e,n){var r=Math.abs(t-n.inFloor);return r<e.diff&&(e.diff=r,e.elevatorId=n.id),e}),{diff:1e9,elevatorId:-1}).elevatorId},e.moveElevator=function(t,n){var r=e.state.elevators.find((function(e){return e.id===t}));e.setState((function(e){return{elevators:e.elevators.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{isOccupied:!0}):e}))}}));var a,o,i=-56*n,c=r.position,s=i<c,l=Date.now();!function r(){var d=Date.now()-l;if(o=s?c-d/25:c+d/25,e.setState((function(e){return{elevators:e.elevators.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{position:o}):e}))}})),s?o<=i:o>=i)return e.setState((function(e){return{elevators:e.elevators.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{position:i,inFloor:n,isDoorOpen:!0}):e}))}})),e.setState((function(e){return{floorsInBuilding:e.floorsInBuilding.map((function(e){return e.number===n?Object(u.a)(Object(u.a)({},e),{},{condition:"arrived"}):e}))}})),void setTimeout((function(){e.setState((function(e){return{floorsInBuilding:e.floorsInBuilding.map((function(e){return e.number===n?Object(u.a)(Object(u.a)({},e),{},{condition:"call"}):e})),elevators:e.elevators.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{isDoorOpen:!1,isOccupied:!1}):e}))}})),e.handleRequest()}),2e3);a=requestAnimationFrame(r),e.updateRafIdsState(t,a)}()},e.updateRafIdsState=function(){var t=Object(f.a)(l.a.mark((function t(n,r){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=Object(d.a)(e.state.rafIds))[n]=r,t.next=4,e.setState((function(){return{rafIds:Object(d.a)(a)}}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.state={numOfFloors:10,numOfElevators:5,floorsInBuilding:[],elevators:[],queue:[],rafIds:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.updateData(this.state.numOfFloors,this.state.numOfElevators)}},{key:"render",value:function(){var e=this;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"form",children:[Object(I.jsxs)("label",{className:"capitalize",children:["floors:",Object(I.jsx)("input",{type:"number",name:"numOfFloors",value:this.state.numOfFloors,onChange:this.handleChange})]}),Object(I.jsxs)("label",{className:"capitalize",children:["elevators:",Object(I.jsx)("input",{type:"number",name:"numOfElevators",value:this.state.numOfElevators,onChange:this.handleChange})]}),Object(I.jsx)("button",{type:"submit",onClick:this.handleSubmit,children:"Update"})]}),Object(I.jsx)("div",{className:"building bold",children:e.state.floorsInBuilding.map((function(t){return Object(I.jsx)(F,{floor:t,elevators:e.state.elevators,handleClick:e.handleClick},t.number)}))})]})}}]),n}(a.Component),D=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)("header",{className:"App-header center bold capitalize",children:Object(I.jsx)("h1",{children:"elevator exercise"})}),Object(I.jsx)(A,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};c.a.render(Object(I.jsx)(o.a.StrictMode,{children:Object(I.jsx)(D,{})}),document.getElementById("root")),z()}},[[20,1,2]]]);
//# sourceMappingURL=main.e677b639.chunk.js.map