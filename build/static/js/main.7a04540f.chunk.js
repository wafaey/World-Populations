(this["webpackJsonpworld-population"]=this["webpackJsonpworld-population"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),c=n(26),r=n.n(c),i=(n(65),n(50)),o=n.n(i),s=n(58),u=n(29),b=n(44),j=n(60),d=n(37),p=n.n(d),h=(n(90),n(21)),x={height:"60vh",width:"80vw"},g={disableDefaultUI:!0,zoomControl:!0,mapTypeControl:!1,streetViewControl:!1},f={lat:30.033333,lng:31.233334},m=function(){var e=l.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=l.a.useState(null),r=Object(u.a)(c,2),i=r[0],m=r[1],O=l.a.useState(null),v=Object(u.a)(O,2),C=v[0],w=v[1],S=l.a.useCallback((function(e){console.log(C,e)}),[C]),y=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,l,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&t.trim().length>2)){e.next=10;break}return e.next=3,fetch("https://restcountries.eu/rest/v2/name/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,Array.isArray(l)&&(c=l.map((function(e){return{label:e.name,country:e.name,value:e.numericCode,latlng:e.latlng,area:e.population}})),a(c)),e.next=11;break;case 10:a([]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsx)("div",{className:"label-name",children:Object(h.jsx)("label",{children:"Please enter country name :"})}),Object(h.jsx)(j.a,{isClearable:!0,onSelectResetsInput:!0,onChange:function(e){return m(e)},value:i||"",onInputChange:function(e){y(e)},options:n})]}),Object(h.jsxs)(b.a,{id:"map",mapContainerStyle:x,zoom:2.5,center:f,options:g,onClick:S,onLoad:function(e){return w(e)},children:[n.map((function(e){return Object(h.jsx)(b.c,{position:{lat:e.latlng[0],lng:e.latlng[1]},label:{text:e.label,color:"#222222",fontSize:"12px"}},"".concat(e.latlng[0],"-").concat(e.latlng[1]))})),i?Object(h.jsx)(b.b,{position:{lat:i.latlng[0],lng:i.latlng[1]},children:Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:i.label})})}):null]}),Object(h.jsx)("div",{className:"pie-chart",children:Object(h.jsxs)(p.a,{id:"pie",dataSource:i?[i]:n,palette:"Bright",title:"Population of Countries",children:[Object(h.jsx)(d.Series,{argumentField:"country",valueField:"area",children:Object(h.jsx)(d.Label,{visible:!0,children:Object(h.jsx)(d.Connector,{visible:!0,width:6})})}),Object(h.jsx)(d.Size,{width:600})]})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),O()},65:function(e,t,n){},90:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.7a04540f.chunk.js.map