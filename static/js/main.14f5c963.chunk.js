(this["webpackJsonpphoto-port"]=this["webpackJsonpphoto-port"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cover-image.6a2b7a16.jpg"},function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){var c={"./commercial/0.jpg":14,"./commercial/1.jpg":15,"./commercial/2.jpg":16,"./commercial/3.jpg":17,"./commercial/4.jpg":18,"./food/0.jpg":19,"./food/1.jpg":20,"./food/2.jpg":21,"./food/3.jpg":22,"./food/4.jpg":23,"./landscape/0.jpg":24,"./landscape/1.jpg":25,"./landscape/2.jpg":26,"./landscape/3.jpg":27,"./landscape/4.jpg":28,"./portraits/0.jpg":29,"./portraits/1.jpg":30,"./portraits/2.jpg":31,"./portraits/3.jpg":32};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=i,e.exports=n,n.id=13},function(e,t,a){e.exports=a.p+"static/media/0.a42cd359.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.e05d88b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.75df3018.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.0a075f4d.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.74c830fd.jpg"},function(e,t,a){e.exports=a.p+"static/media/0.736e9503.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.6dc96543.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.082ff7d9.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.c7510d3a.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.8c4c93ec.jpg"},function(e,t,a){e.exports=a.p+"static/media/0.c0bc02a0.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.100fef3c.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.0c7dce01.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.ff79cea1.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.9030776b.jpg"},function(e,t,a){e.exports=a.p+"static/media/0.3cb61cf2.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.181f9d5c.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.efb308ab.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.b2912d99.jpg"},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(5),r=a.n(i),o=(a(12),a(1));function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}var s=function(e){var t=e.categories,a=void 0===t?[]:t,i=e.setCurrentCategory,r=e.currentCategory,o=e.contactSelected,s=e.setContactSelected;return Object(c.useEffect)((function(){document.title=l(r.name)}),[r]),n.a.createElement("header",{className:"flex-row px-1"},n.a.createElement("h2",null,n.a.createElement("a",{"data-testid":"link",href:"/"},n.a.createElement("span",{role:"img","aria-label":"camera"}," ","\ud83d\udcf8")," ","Oh Snap!")),n.a.createElement("nav",null,n.a.createElement("ul",{className:"flex-row"},n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){return s(!1)}},"About me")),n.a.createElement("li",{className:"mx-2 ".concat(o&&"navActive")},n.a.createElement("span",{onClick:function(){return s(!0)}},"Contact")),a.map((function(e){return n.a.createElement("li",{className:"mx-1 ".concat(r.name===e.name&&!o&&"navActive"),key:e.name},n.a.createElement("span",{onClick:function(){i(e),s(!1)}},l(e.name)))})))))},m=a(6),u=a.n(m);var p=function(){return n.a.createElement("section",{className:"my-5"},n.a.createElement("h1",{id:"about"},"Who am I?"),n.a.createElement("img",{src:u.a,className:"my-2",style:{width:"100%"},alt:"cover"}))},d=a(2),g=function(e){var t=e.onClose,a=e.currentPhoto;a.name,a.category,a.description,a.index;return n.a.createElement("div",{className:"modalBackdrop"},n.a.createElement("div",{className:"modalContainer"},n.a.createElement("h3",{className:"modalTitle"},"Photo Name"),n.a.createElement("img",{alt:"current category"}),n.a.createElement("p",null,"Photo Description"),n.a.createElement("button",{onClick:t,type:"button"},"Close this modal")))},f=function(e){var t=e.category,i=Object(c.useState)(!1),r=Object(o.a)(i,2),l=r[0],s=r[1],m=Object(c.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),u=Object(o.a)(m,1)[0],p=Object(c.useState)(),f=Object(o.a)(p,2),j=f[0],E=f[1],b=u.filter((function(e){return e.category===t})),y=function(e,t){E(Object(d.a)(Object(d.a)({},e),{},{index:t})),s(!l)};return n.a.createElement("div",null,l&&n.a.createElement(g,{currentPhoto:j,onClose:y}),n.a.createElement("div",{className:"flex-row"},b.map((function(e,c){return n.a.createElement("img",{src:a(13)("./".concat(t,"/").concat(c,".jpg")),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return y(e,c)},key:e.name})}))))};var j=function(e){var t=e.currentCategory,a=t.name,c=t.description;return n.a.createElement("section",null,n.a.createElement("h1",{"data-testid":"h1tag"},l(a)),n.a.createElement("p",null,c),n.a.createElement(f,{category:t.name}))},E=a(3);var b=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),s=l[0],m=l[1],u=a.name,p=a.email,g=a.message;function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?m(""):m("".concat(e.target.name," is required.")):m("Your email is invalid.")}s||i(Object(d.a)(Object(d.a)({},a),{},Object(E.a)({},e.target.name,e.target.value)))}return n.a.createElement("section",null,n.a.createElement("h1",null,"Contact me"),n.a.createElement("form",{id:"contact-form"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"name"},"Name:"),n.a.createElement("input",{type:"text",defaultValue:u,onBlur:f,name:"name"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"Email address:"),n.a.createElement("input",{type:"email",defaultValue:p,name:"email",onBlur:f})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"message"},"Message:"),n.a.createElement("textarea",{name:"message",defaultValue:g,onBlur:f,rows:"5"})),s&&n.a.createElement("div",null,n.a.createElement("p",{className:"error-text"},s)),n.a.createElement("button",{type:"submit"},"Submit")))};var y=function(){var e=Object(c.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),t=Object(o.a)(e,1)[0],a=Object(c.useState)(t[0]),i=Object(o.a)(a,2),r=i[0],l=i[1],m=Object(c.useState)(!1),u=Object(o.a)(m,2),d=u[0],g=u[1];return n.a.createElement("div",null,n.a.createElement(s,{categories:t,setCurrentCategory:l,currentCategory:r,contactSelected:d,setContactSelected:g}),n.a.createElement("main",null,d?n.a.createElement(b,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{currentCategory:r}),n.a.createElement(p,null))))},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),v()}],[[7,1,2]]]);
//# sourceMappingURL=main.14f5c963.chunk.js.map