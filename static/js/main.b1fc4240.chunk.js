(this.webpackJsonpnewsfeed=this.webpackJsonpnewsfeed||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(14),c=a.n(l),s=(a(22),a(4));a(23);function i(){return n.a.createElement("div",{className:"center-wrapper bg-white",style:{paddingTop:"4px"}},n.a.createElement("div",{className:"multi-wrapper radius-4 text-plain",style:{border:"0px solid #d30d1d",width:"98%"}},n.a.createElement("h3",{className:"is-main-red news-headline",style:{margin:"0px 8px"}},"Simple NewsFeed"),n.a.createElement("div",{style:{alignItems:"center",margin:"2px 8px",fontSize:"16px"}},"A React app using News API")))}var o=a(1),u=a(8),m=a.n(u),p=a(6),d=a(15),h=function(e){var t=e.currentValue,a=e.filter,r=e.setFilter,l=("gb"===t?"uk":"technology"===t?"tech":t).toUpperCase();return n.a.createElement("button",{className:a===t?"selected-button":null,onClick:function(){return r(t)}},l)};function f(e){var t=e.countryFilter,a=e.setCountryFilter,r=e.categoryFilter,l=e.setCategoryFilter,c=["gb","us","au","fr","it","de","nz"];return n.a.createElement("section",{className:"center-wrapper radius-8",style:{border:"0px solid red",width:"100%",background:"rgba(240, 240, 240, 0.4)"}},n.a.createElement("div",{className:"row-wrapper mar-b-12",style:{width:"90%",alignItems:"center",justifyContent:"space-between"}},["general","technology","science"].map((function(e){return n.a.createElement(h,{key:e,currentValue:e,filter:r,setFilter:l})}))),n.a.createElement("div",{className:"row-wrapper mar-b-12 text-plain",style:{width:"90%",alignItems:"center",justifyContent:"space-between"}},n.a.createElement(h,{currentValue:c[0],filter:t,setFilter:a}),n.a.createElement("p",{className:"is-blue",style:{fontWeight:"bold",opacity:.9}},"SELECT"),n.a.createElement(h,{currentValue:c[1],filter:t,setFilter:a})),n.a.createElement("div",{className:"row-wrapper mar-b-12",style:{width:"90%",alignItems:"center",justifyContent:"space-between"}},c.slice(2).map((function(e){return n.a.createElement(h,{key:e,currentValue:e,filter:t,setFilter:a})}))))}var w=function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cors-anywhere.herokuapp.com/",e.next=4,fetch("https://cors-anywhere.herokuapp.com/"+h);case 4:if(200!==(t=e.sent).status){e.next=8;break}return a=t.json(),e.abrupt("return",a);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var t=Object(r.useState)("gb"),a=Object(p.a)(t,2),l=a[0],c=a[1],s=Object(r.useState)("general"),i=Object(p.a)(s,2),o=i[0],u=i[1],h="https://newsapi.org/v2/top-headlines?"+"country=".concat(l,"&")+"category=".concat(o,"&")+"apiKey=".concat("9592fcd769904fdcbda9a0956c77ae6d"),w=Object(r.useState)([]),g=Object(p.a)(w,2),E=g[0],y=g[1];return Object(r.useEffect)((function(){(function(){return e.apply(this,arguments)})().then((function(e){if(e){var t=e.articles;y(t)}}))}),[l,o]),n.a.createElement("section",{className:"column-wrapper news-list pad-15"},n.a.createElement(f,{countryFilter:l,setCountryFilter:c,categoryFilter:o,setCategoryFilter:u}),E.map((function(e){var t=e.url.split("/")[2],a=t.startsWith("www.")?t.slice(4):t,r=e.content&&e.content.split("[")[0],c="fr"===l?"Lire l'article sur ":"it"===l?"Leggi l'articolo su ":"de"===l?"Artikel lesen auf ":"Read article on ";return n.a.createElement("div",{key:e.url,className:"column-wrapper news-item"},n.a.createElement("a",{className:"a2",target:"_blank",rel:"noopener noreferrer",href:e.url,title:"Full article"},n.a.createElement("h3",{className:"news-headline text-serif mar-15"},e.title)),e.urlToImage&&n.a.createElement("span",{className:"center-wrapper"},n.a.createElement("img",{className:"radius-8",src:e.urlToImage,alt:e.title,style:{width:"74%",height:"auto"}})),n.a.createElement("span",{className:"news-body text-serif mar-15"},r),n.a.createElement("a",{className:"a1 is-main-red text-plain",style:{margin:"5px 15px 15px 15px"},target:"_blank",rel:"noopener noreferrer",href:e.url,title:"Full article"},c,n.a.createElement("span",{style:{fontWeight:"bold"}},a)))})),n.a.createElement("div",{className:"center-wrapper",style:{width:"100%"}},n.a.createElement("button",{className:"mar-20",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},"Back to top")))};function g(){return n.a.createElement("section",{className:"column-wrapper news-list pad-15",style:{height:"100%"}},n.a.createElement("h3",{className:"is-almost-black pad-20"},"The page does not exist."),n.a.createElement(s.b,{className:"a1 pad-20",to:"/",title:"Home"},"Back to home page"))}function E(){return n.a.createElement(s.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:w}),n.a.createElement(o.a,{path:"/:badLink",component:g})))}var y=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:"center-wrapper",style:{width:"100%"}},n.a.createElement("div",{className:"content-area mar-5 radius-8"},n.a.createElement(i,null),n.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b1fc4240.chunk.js.map