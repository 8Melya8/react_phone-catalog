(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{45:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c.n(n),r=c(10),s=(c(45),c(0)),i=c(3),o=c(11),l=c.n(o),d=c.p+"static/media/Logo.2d8d3e42.svg",j=c.p+"static/media/Favourites.a95dd00f.svg",u=c.p+"static/media/Cart.9d5d0d40.svg",b=c(1),m=function(){var e=[],t=[];return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("nav",{className:"header__nav",children:[Object(b.jsx)(r.b,{to:"/",className:"header__logo",children:Object(b.jsx)("img",{src:d,alt:"logo"})}),Object(b.jsxs)("ul",{className:"header__menu",children:[Object(b.jsx)("li",{className:"header__item",children:Object(b.jsx)(r.c,{to:"/",className:function(e){var t=e.isActive;return l()("header__link",{"header__link--active":t})},children:"home"})}),Object(b.jsx)("li",{className:"header__item",children:Object(b.jsx)(r.c,{to:"/phones",className:function(e){var t=e.isActive;return l()("header__link",{"header__link--active":t})},children:"PHONES"})}),Object(b.jsx)("li",{className:"header__item",children:Object(b.jsx)(r.c,{to:"/tablets",className:function(e){var t=e.isActive;return l()("header__link",{"header__link--active":t})},children:"TABLETS"})}),Object(b.jsx)("li",{className:"header__item",children:Object(b.jsx)(r.c,{to:"/accessories",className:function(e){var t=e.isActive;return l()("header__link",{"header__link--active":t})},children:"ACCESSORIES"})})]})]}),Object(b.jsxs)("div",{className:"header__buttons",children:[Object(b.jsx)(r.c,{to:"/favorites",className:function(e){var t=e.isActive;return l()("header__buttons--link",{"header__buttons--link--active":t})},children:Object(b.jsxs)("button",{type:"button",className:"button button__cart",children:[Object(b.jsx)("img",{src:j,alt:"favorites",className:"button__cart--image"}),e.length>0&&Object(b.jsx)("span",{className:"header__total-items",children:e.length})]})}),Object(b.jsx)(r.c,{to:"/cart",className:function(e){var t=e.isActive;return l()("header__buttons--link",{"header__buttons--link--active":t})},children:Object(b.jsxs)("button",{type:"button",className:"button button__cart",children:[Object(b.jsx)("img",{src:u,alt:"cart",className:"button__cart--image"}),t.length>0&&Object(b.jsx)("span",{className:"header__total-items",children:t.length})]})})]})]})},h=c(7),_=c(5),O=c(4),f=c.n(O),x=c(38),v=c.n(x),p=c.p+"static/media/Arrow_left.91a03a1d.svg",N=c.p+"static/media/Arrow_right.470683b8.svg",g=[c.p+"static/media/banner1.5ac9fcba.png",c.p+"static/media/banner2.92ade0a5.png",c.p+"static/media/banner3.b7beb339.png"],k=function(){var e=Object(s.useState)(0),t=Object(_.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),r=Object(_.a)(a,2),i=r[0],o=r[1],d=1040,j=function(e){"right"===e?(o(i+1),n((function(e){return e-d}))):(o(i-1),n((function(e){return e+d})))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"slider slider--with-margin",children:[Object(b.jsx)("button",{className:"slider__button slider__button--left",type:"button",onClick:function(){return j("left")},disabled:0===c,children:Object(b.jsx)("img",{src:p,alt:"button left"})}),Object(b.jsx)("div",{className:"slider__img-container",children:Object(b.jsx)("div",{className:"slider__img-container-inner",style:{transform:"translateX(".concat(c,"px)")},children:g.map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{className:"slider__img",src:e,alt:"banner"})})}))})}),Object(b.jsx)("button",{className:"slider__button slider__button--right",type:"button",onClick:function(){return j("right")},disabled:c===d*(g.length-1)*-1,children:Object(b.jsx)("img",{src:N,alt:"button right"})})]}),Object(b.jsx)("div",{className:"dots__indicators",children:g.map((function(e,t){return Object(b.jsx)("span",{className:l()("dots__indicator",{"dots__indicator--is-active":t===i})},e)}))})]})},y=c(19),C=c.p+"static/media/Favourites(Heart Like).0adbb61b.svg",w=c(9),P=c(30),S=Object(P.a)({name:"favorites",initialState:[],reducers:{deleteFavorite:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},addFavorites:function(e,t){return[].concat(Object(w.a)(e),[t.payload])}}}),A=S.actions,H=A.deleteFavorite,I=A.addFavorites,T=(S.reducer,function(e){var t=e.phone,c=Object(s.useState)(!1),n=Object(_.a)(c,2),a=n[0],r=n[1],i=Object(y.b)((function(e){return e.favorites})),o=Object(y.a)();Object(s.useEffect)((function(){r(i.some((function(e){return e.itemId===t.itemId})))}),[i]);return Object(b.jsx)("button",{type:"button",className:"button button__fav",onClick:function(){return e=t,void o(a?H(e.id):I(e));var e},"data-cy":"addToFavorite",children:Object(b.jsx)("img",{src:a?C:j,alt:""})})}),E=c(18),F=Object(P.a)({name:"cart",initialState:[],reducers:{deleteCart:function(e,t){return e.filter((function(e){return e.itemId!==t.payload}))},incrementProductCount:function(e,t){var c=e.find((function(e){return e.itemId===t.payload}));null!==c&&void 0!==c&&c.count&&(c.count+=1)},discernmentProductCount:function(e,t){var c=e.find((function(e){return e.itemId===t.payload}));null!==c&&void 0!==c&&c.count&&(c.count-=1)},addCart:function(e,t){return[].concat(Object(w.a)(e),[Object(E.a)(Object(E.a)({},t.payload),{},{count:1})])}}}),B=F.actions,J=B.deleteCart,L=B.addCart,G=(B.incrementProductCount,B.discernmentProductCount,F.reducer,function(e){var t=e.phone,c=Object(s.useState)(),n=Object(_.a)(c,2),a=n[0],r=n[1],i=Object(y.b)((function(e){return e.cart}));Object(s.useEffect)((function(){r(i.some((function(e){return e.itemId===t.itemId})))}),[i]);var o=Object(y.a)();return Object(b.jsx)("button",{className:l()("button","button__add",{"button__add--selected":a}),type:"button",onClick:function(){return e=t,void o(a?J(e.itemId):L(e));var e},children:a?"addedToCart":"addToCart"})}),X=function(e){var t=e.card,c=t.itemId,n=t.name,a=t.price,s=t.screen,i=t.capacity,o=t.ram,l=t.image,d="new/".concat(l);return Object(b.jsxs)("div",{className:"card","data-cy":"cardsContainer",children:[Object(b.jsxs)(r.b,{to:"/phones/".concat(c),className:"card__content",children:[Object(b.jsx)("div",{className:"card__img-container",children:Object(b.jsx)("img",{src:d,alt:"imagine-".concat(n),className:"card__img"})}),Object(b.jsx)("h2",{className:"card__name",children:n}),Object(b.jsx)("h3",{className:"card__price",children:"$".concat(a)})]}),Object(b.jsxs)("div",{className:"card__info",children:[Object(b.jsxs)("div",{className:"card__info-str",children:[Object(b.jsx)("span",{children:"screen"}),Object(b.jsx)("span",{className:"card__info-str-value",children:s})]}),Object(b.jsxs)("div",{className:"card__info-str",children:[Object(b.jsx)("span",{children:"capacity"}),Object(b.jsx)("span",{className:"card__info-str-value",children:i})]}),Object(b.jsxs)("div",{className:"card__info-str",children:[Object(b.jsx)("span",{children:"ram"}),Object(b.jsx)("span",{className:"card__info-str-value",children:o})]})]}),Object(b.jsxs)("div",{className:"card__menu",children:[Object(b.jsx)(G,{phone:t}),Object(b.jsx)(T,{phone:t})]})]})},M=function(e){var t=e.list,c=Object(s.useState)(0),n=Object(_.a)(c,2),a=n[0],r=n[1],i=function(e){r("right"===e?function(e){return e-272-16}:function(e){return e+272+16})};return Object(b.jsxs)("div",{className:"HotPrice",children:[Object(b.jsxs)("div",{className:"HotPrice__top",children:[Object(b.jsx)("h1",{className:"HotPrice__title",children:"Hot prices"}),Object(b.jsxs)("div",{className:"HotPrice__buttons",children:[Object(b.jsx)("button",{type:"button",className:"HotPrice__button",onClick:function(){return i("left")},disabled:0===a,children:Object(b.jsx)("img",{src:p,alt:""})}),Object(b.jsx)("button",{type:"button",className:"HotPrice__button",onClick:function(){return i("right")},children:Object(b.jsx)("img",{src:N,alt:""})})]})]}),Object(b.jsx)("div",{className:"HotPrice__cards",children:Object(b.jsx)("div",{className:"HotPrice__cards-inner",style:{transform:"translateX(".concat(a,"px)")},children:t.map((function(e){return Object(b.jsx)(X,{card:e},e.itemId)}))})})]})},R="https://mate-academy.github.io/react_phone-catalog/_new";function U(e){return new Promise((function(t){setTimeout(t,e)}))}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),U(600).then((function(){return fetch(R+e,n)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var q=function(e){return $(e)},z=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q("/products.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.useState)([]),t=Object(_.a)(e,2),c=t[0],n=t[1],a=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v()({icon:"error",title:"Something goes wrong!",text:"Try in a few!"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(M,{list:c})]})},K=function(){return Object(b.jsx)("div",{children:"Phones Page"})},Q=function(){return Object(b.jsx)("div",{children:"Tablets Page"})},V=function(){return Object(b.jsx)("div",{children:"Accessories Page"})},W=c.p+"static/media/Arrow_up.470683b8.svg",Y=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("div",{className:"footer__content",children:[Object(b.jsx)(r.b,{to:"/",className:"header__logo",children:Object(b.jsx)("img",{src:d,alt:"logo"})}),Object(b.jsxs)("ul",{className:"footer__menu",children:[Object(b.jsx)("li",{className:"footer__item",children:Object(b.jsx)(r.b,{to:"https://github.com/8Melya8",className:"footer__link",target:"__blank",children:"GitHub"})}),Object(b.jsx)("li",{className:"footer__item",children:Object(b.jsx)(r.b,{to:"#/",className:"footer__link",children:"contacts"})}),Object(b.jsx)("li",{className:"footer__item",children:Object(b.jsx)(r.b,{to:"#/",className:"footer__link",children:"rights"})})]}),Object(b.jsxs)("div",{className:"footer__button",children:[Object(b.jsx)("span",{className:"footer__button-text",children:"Back to top"}),Object(b.jsx)("div",{className:"footer__button-arrow",children:Object(b.jsx)("button",{className:"arrow--button",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(b.jsx)("img",{src:W,alt:""})})})]})]})})},Z=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(D,{})}),Object(b.jsx)(i.a,{path:"/phones",element:Object(b.jsx)(K,{})}),Object(b.jsx)(i.a,{path:"/tablets",element:Object(b.jsx)(Q,{})}),Object(b.jsx)(i.a,{path:"/accessories",element:Object(b.jsx)(V,{})})]}),Object(b.jsx)(Y,{})]})};a.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(Z,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.5e3e893d.chunk.js.map