(this["webpackJsonpmatrix-builder"]=this["webpackJsonpmatrix-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(6),c=n.n(u),l=(n(20),n(21),n(3)),o=n(1),s=(n(28),n(29),function(e){var t=e.className,n=e.buttonClickHandler,a=e.buttonText;return r.a.createElement("button",{className:t,onClick:n},a)}),i=(n(30),function(e){var t=e.errorText;return r.a.createElement("div",{className:"error-hint"},t)}),m=n(14),d=(n(31),function(e){var t=e.id,n=e.value,a=e.onChangeInput;return r.a.createElement("div",{className:"input-settings"},r.a.createElement(s,{className:"input-control__button",buttonText:"-",buttonClickHandler:function(){return a(--n)}}),r.a.createElement("input",{className:"input-settings__input",type:"number",id:t,onChange:function(e){return a(+e.target.value)},min:"0",value:n}),r.a.createElement(s,{className:"input-control__button",buttonText:"+",buttonClickHandler:function(){return a(++n)}}))}),f=function(e){var t=e.id,n=e.label,a=Object(m.a)(e,["id","label"]);return r.a.createElement("div",{className:"input-wrapper"},r.a.createElement("label",{htmlFor:t},n),r.a.createElement(d,Object.assign({id:t},a)))},v=function(){var e=Object(o.c)((function(e){return e.matrix.settings})),t=Object(o.b)(),n=Object(a.useState)(e.rowsCount),u=Object(l.a)(n,2),c=u[0],m=u[1],d=Object(a.useState)(e.columnsCount),v=Object(l.a)(d,2),E=v[0],b=v[1],h=Object(a.useState)(e.cellsCount),p=Object(l.a)(h,2),g=p[0],C=p[1],O=Object(a.useState)(!1),w=Object(l.a)(O,2),j=w[0],N=w[1],S=Object(a.useState)(""),T=Object(l.a)(S,2),x=T[0],_=T[1];return r.a.createElement("div",{className:"settings-wrapper"},r.a.createElement(f,{id:"rows-input",className:"input-settings",label:"Set the rows count",value:c,onChangeInput:m}),r.a.createElement(f,{id:"columns-input",className:"input-settings",label:"Set the columns count",value:E,onChangeInput:b}),r.a.createElement(f,{id:"cells-input",className:"input-settings",label:"Set the count of cells to show the nearest value",value:g,onChangeInput:C}),r.a.createElement(s,{className:"red-button",buttonText:"Apply settings",buttonClickHandler:function(){var e,n=function(e,t){return(0===e||e<0)&&(0===t||t<0)?"Please, set the correct rows and columns count":0===e||e<0?"Please, set the correct rows count":0===t||t<0?"Please, set the correct columns count":void 0}(c,E);n?(e=n,N(!0),_(e),setTimeout((function(){N(!1)}),2e3)):t(function(e){return{type:"SET_SETTINGS",settings:e}}({rowsCount:c,columnsCount:E,cellsCount:g}))}}),j&&r.a.createElement(i,{errorText:x}))},E=(n(32),n(33),function(e){var t=e.value;return r.a.createElement("td",{className:"static-cell"},r.a.createElement("div",null,t))}),b=function(e){var t=e.sumRow,n=(100*e.value/t).toFixed(2),a={backgroundSize:"100% ".concat(n,"% ")};return r.a.createElement("td",null,r.a.createElement("div",{style:a,className:"percentage-cell"},n,"%"))},h=function(e){var t=e.value,n=e.sumMouseEnterHandler,a=e.sumMouseLeaveHandler;return r.a.createElement("td",{className:"sum-cell",onMouseEnter:n,onMouseLeave:a},r.a.createElement("div",null,t))},p=function(e){var t=e.label,n=e.RendererType,u=e.rowData,c=e.sumRow,o=Object(a.useState)(!1),s=Object(l.a)(o,2),i=s[0],m=s[1],d=i?b:n,f=u.map((function(e,t){var n=e.value||e;return r.a.createElement(d,{key:e.id||t,id:e.id,value:n,sumRow:c})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{key:t,value:t}),f,r.a.createElement(h,{key:c,value:c,sumMouseEnterHandler:function(){return m(!0)},sumMouseLeaveHandler:function(){return m(!1)}}))},g=function(e){for(var t=e.map((function(e){return e.map((function(e){return e.value}))})),n=t[0].length,a=[],r=0;r<n;r++){for(var u=0,c=0;c<t.length;c++)u+=t[c][r];var l=u/t.length;a.push(l)}return a.map((function(e){return e.toFixed(2)}))},C=function(e){var t=e.matrixData,n=g(t),a=n.reduce((function(e,t){return e+Number(t)}),0).toFixed(2);return r.a.createElement("tr",null,r.a.createElement(p,{className:"average-cell",label:"Avg",rowData:n,sumRow:a,RendererType:E}))},O=(n(34),function(e){var t=e.buttonClickHandler;return r.a.createElement("div",{className:"button-remove",onClick:t},r.a.createElement("span",{className:"button-remove__element"}),r.a.createElement("span",{className:"button-remove__element"}))}),w=function(e){var t=e.id,n=e.value,a=Object(o.c)((function(e){return e.matrix.nearestIds})),u=Object(o.b)(),c=!!a.sameValueIds.find((function(e){return e===t})),l=!!a.ids.find((function(e){return e===t})),s=c?"same-value":l?"nearest-value":null;return r.a.createElement("td",{className:s},r.a.createElement("div",{onMouseEnter:function(){return u(function(e){return{type:"SET_NEAREST_IDS",id:e}}(t))},onMouseLeave:function(){return u({type:"RESET_NEAREST_IDS"})},onClick:function(){return u(function(e,t){return{type:"INCREMENT_CELL",id:e,value:t}}(t,n))}},n))},j=function(e){var t=e.rowNumber,n=e.rowData,a=Object(o.b)(),u=n.map((function(e){return e.value})).reduce((function(e,t){return e+t}),0);return r.a.createElement("tr",null,r.a.createElement(p,{label:t,rowData:n,RendererType:w,sumRow:u}),r.a.createElement("td",null,r.a.createElement(O,{buttonClickHandler:function(){return a({type:"REMOVE_ROW",rowIndex:t-1})}})))},N=function(){var e=Object(o.c)((function(e){return e.matrix.data})),t=e.map((function(e,t){return r.a.createElement(j,{rowData:e,rowNumber:t+1,key:t})}));return r.a.createElement("tbody",null,t,r.a.createElement(C,{matrixData:e}))},S=function(e){var t=e.value;return r.a.createElement("th",null,t)},T=function(e,t){return r.a.createElement(S,{key:e,value:t})},x=function(){var e=function(e){for(var t=[T("\u2116","\u2116")],n=0;n<e;n++)t.push(T(n+1,n+1));return t.push(T("Sum","Sum")),t}(Object(o.c)((function(e){return e.matrix.settings.columnsCount})));return r.a.createElement("thead",null,r.a.createElement("tr",null,e))},_=function(){return r.a.createElement("div",{className:"table-blacklight-hint"},r.a.createElement("div",null,r.a.createElement("div",{className:"same-value"})," the same values"),r.a.createElement("div",null,r.a.createElement("div",{className:"nearest-value"})," the nearest values"))},I=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return!!e.matrix.settings.cellsCount}));return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(s,{className:"red-button",buttonText:"Add new row",buttonClickHandler:function(){return e({type:"ADD_ROW"})}}),t&&r.a.createElement(_,null),r.a.createElement("table",{className:"table-matrix"},r.a.createElement(x,null),r.a.createElement(N,null)))},R=r.a.createElement("p",{className:"empty-table"},"Please, set the starting settings of the table"),y=function(){var e=Object(o.c)((function(e){return!!e.matrix.data.length}));return r.a.createElement("main",{className:"main"},e?r.a.createElement(I,null):R)};var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to Matrix Builder"),r.a.createElement(v,null),r.a.createElement("div",{className:"separate"}),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(4),M=n(2),H=n(8),A=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n<e;)t.push({id:"".concat(Date.now()).concat(Math.round(1+9999*Math.random())).concat(n),value:Math.round(100+899*Math.random())}),n++;return t},L=function(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;a<t;){var r=A(n);e.push(r),a++}return e},W=function(e,t,n){return function(e,t,n){var a=0;t.columnsCount<n.columnsCount?(a=n.columnsCount-t.columnsCount,e.forEach((function(e,t){return A(a,e)}))):t.columnsCount>n.columnsCount&&(a=t.columnsCount-n.columnsCount,e.forEach((function(e){return e.splice(-a)})))}(e,t,n),function(e,t,n){var a=0;t.rowsCount<n.rowsCount?(a=n.rowsCount-t.rowsCount,L(e,a,n.columnsCount)):t.rowsCount>n.rowsCount&&(a=t.rowsCount-n.rowsCount,e.splice(-a))}(e,t,n),e},V={settings:{rowsCount:0,columnsCount:0,cellsCount:0},data:[],sortedData:[],nearestIds:{sameValueIds:[],ids:[]}},F=function(e,t){return e[0].id===t},P=function(e,t){return e[e.length-1].id===t},B=function(e,t){return e.slice(1,t+1).map((function(e){return e.id}))},G=function(e,t){return e.slice(-t-1,-1).map((function(e){return e.id}))},J=function(e,t){var n=e.indexOf(e.find((function(e){return e.id===t}))),a=e[n-1],r=e[n+1],u=e[n];return(Math.abs(u.value-a.value)<Math.abs(r.value-u.value)?a:r).id},z=function(e,t,n){var a=e.find((function(e){return e.id===n})).value,r=e.filter((function(e){return e.value===a&&e.id!==n})).map((function(e){return e.id}));r.length>0&&(e=e.filter((function(e){return!r.includes(e.id)})));var u=function e(t,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(u<a){if(F(t,n))return r.push(B(t,a-u)),r.flat();if(P(t,n))return r.push(G(t,a-u)),r.flat();var c=J(t,n);return r.push(c),e(t=t.filter((function(e){return e.id!==c})),n,a,r,++u)}return r}(e,n,t);return{sameValueIds:r,ids:u}},$=V,q=function(e){return e.flat().sort((function(e,t){return e.value-t.value}))},K=function(e,t,n){return 0===e.length?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return L(n,e,t)}(n.rowsCount,n.columnsCount):t.rowsCount!==n.rowsCount||t.columnsCount!==n.columnsCount?W(e,t,n):e},Q=function(){var e,t,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_SETTINGS":return e=K(Object(H.a)(a.data),a.settings,r.settings),Object(M.a)(Object(M.a)({},a),{},{data:e,sortedData:q(e),settings:r.settings});case"RESET_SETTINGS":return{defaultState:V};case"ADD_ROW":return e=L(Object(H.a)(a.data),1,a.settings.columnsCount),n=Object(M.a)(Object(M.a)({},a.settings),{},{rowsCount:e.length}),Object(M.a)(Object(M.a)({},a),{},{settings:n,data:e,sortedData:q(e)});case"REMOVE_ROW":return e=a.data.filter((function(e,t){return t!==r.rowIndex})),n=Object(M.a)(Object(M.a)({},a.settings),{},{rowsCount:a.data.length}),Object(M.a)(Object(M.a)({},a),{},{settings:n,data:e,sortedData:q(e)});case"INCREMENT_CELL":return(e=Object(H.a)(a.data)).find((function(e){return e.find((function(e){return e.id===r.id?e.value++:null}))})),t=q(e),Object(M.a)(Object(M.a)({},a),{},{data:e,sortedData:t,nearestIds:z(t,a.settings.cellsCount,r.id)});case"SET_NEAREST_IDS":return a.settings.cellsCount?Object(M.a)(Object(M.a)({},a),{},{nearestIds:z(a.sortedData,a.settings.cellsCount,r.id)}):Object(M.a)({},a);case"RESET_NEAREST_IDS":return a.nearestIds.ids.length?Object(M.a)(Object(M.a)({},a),{},{nearestIds:{sameValueIds:[],ids:[]}}):Object(M.a)({},a);default:return V}},U=Object(k.b)({matrix:Q});c.a.render(r.a.createElement(o.a,{store:Object(k.c)(U)},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.75ab2a2c.chunk.js.map