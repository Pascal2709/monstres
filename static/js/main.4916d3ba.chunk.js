(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),m=n(5),h=(n(13),function(e){return a.a.createElement("div",{className:"fiche-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.monstre.id,"?set=set3&size=180x180"),alt:"monstre"}),a.a.createElement("h2",null,e.monstre.name),a.a.createElement("p",null,e.monstre.email))}),u=(n(14),function(e){return a.a.createElement("div",{className:"fiche-list"}," ",e.monstres.map((function(e){return a.a.createElement(h,{key:e.id,monstre:e})})))}),f=(n(15),function(e){var t=e.placeholder,n=e.gererChangement;return a.a.createElement("input",{className:"recherche",type:"search",placeholder:t,onChange:n})}),p=(n(16),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).gererChangement=function(t){e.setState({champsRecherche:t.target.value})},e.state={monstres:[],champsRecherche:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monstres:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monstres,n=e.champsRecherche,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monstres carrousel"),a.a.createElement(f,{placeholder:"Cherche monstres",gererChangement:this.gererChangement}),a.a.createElement(u,{monstres:r}))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4916d3ba.chunk.js.map