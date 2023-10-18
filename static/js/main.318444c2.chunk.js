(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{55:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c(26),n=c.n(s),r=c(12),i=c(42),o=c(17),l=c(37),j=c(43),d=c.n(j),u=c(13),b=c(9),m=Object(o.b)({name:"favorites",initialState:[],reducers:{deleteFavorite:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},addFavorites:function(e,t){return[].concat(Object(b.a)(e),[t.payload])}}}),h=m.actions,O=h.deleteFavorite,_=h.addFavorites,p=m.reducer,x=c(21),f=Object(o.b)({name:"cart",initialState:[],reducers:{deleteCart:function(e,t){return e.filter((function(e){return e.itemId!==t.payload}))},incrementProductCount:function(e,t){var c=e.find((function(e){return e.itemId===t.payload}));null!==c&&void 0!==c&&c.count&&(c.count+=1)},discernmentProductCount:function(e,t){var c=e.find((function(e){return e.itemId===t.payload}));null!==c&&void 0!==c&&c.count&&(c.count-=1)},addCart:function(e,t){return[].concat(Object(b.a)(e),[Object(x.a)(Object(x.a)({},t.payload),{},{count:1})])}}}),v=f.actions,g=v.deleteCart,N=v.addCart,y=v.incrementProductCount,k=v.discernmentProductCount,w=f.reducer,C=Object(u.b)({favorites:p,cart:w}),S={key:"root",storage:d.a},A=Object(l.a)(S,C),E=Object(o.a)({reducer:A,middleware:function(e){return e({serializableCheck:!1})}}),I=Object(l.b)(E),F=(c(55),c(1)),P=c(3),L=c(11),T=c.n(L),q=c.p+"static/media/Logo.2d8d3e42.svg",R=c.p+"static/media/Favourites.a95dd00f.svg",B=c.p+"static/media/Cart.9d5d0d40.svg",D=c(0),H=function(){var e=Object(r.c)((function(e){return e.favorites})),t=Object(r.c)((function(e){return e.cart}));return Object(D.jsxs)("header",{className:"header",children:[Object(D.jsxs)("nav",{className:"header__nav",children:[Object(D.jsx)(a.b,{to:"/",className:"header__logo",children:Object(D.jsx)("img",{src:q,alt:"logo"})}),Object(D.jsxs)("ul",{className:"header__menu",children:[Object(D.jsx)("li",{className:"header__item",children:Object(D.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return T()("header__link",{"header__link--active":t})},children:"home"})}),Object(D.jsx)("li",{className:"header__item",children:Object(D.jsx)(a.c,{to:"/phones",className:function(e){var t=e.isActive;return T()("header__link",{"header__link--active":t})},children:"PHONES"})}),Object(D.jsx)("li",{className:"header__item",children:Object(D.jsx)(a.c,{to:"/tablets",className:function(e){var t=e.isActive;return T()("header__link",{"header__link--active":t})},children:"TABLETS"})}),Object(D.jsx)("li",{className:"header__item",children:Object(D.jsx)(a.c,{to:"/accessories",className:function(e){var t=e.isActive;return T()("header__link",{"header__link--active":t})},children:"ACCESSORIES"})})]})]}),Object(D.jsxs)("div",{className:"header__buttons",children:[Object(D.jsx)(a.c,{to:"/favorites",className:function(e){var t=e.isActive;return T()("header__buttons--link",{"header__buttons--link--active":t})},children:Object(D.jsxs)("button",{type:"button",className:"button button__cart",children:[Object(D.jsx)("img",{src:R,alt:"favorites",className:"button__cart--image"}),e.length>0&&Object(D.jsx)("span",{className:"header__total-items",children:e.length})]})}),Object(D.jsx)(a.c,{to:"/cart",className:function(e){var t=e.isActive;return T()("header__buttons--link",{"header__buttons--link--active":t})},children:Object(D.jsxs)("button",{type:"button",className:"button button__cart",children:[Object(D.jsx)("img",{src:B,alt:"cart",className:"button__cart--image"}),t.length>0&&Object(D.jsx)("span",{className:"header__total-items",children:t.length})]})})]})]})},M=c(7),U=c(4),$=c(5),G=c.n($),J=c(16),z=c.n(J),W=c.p+"static/media/Arrow_right.079e7aa2.svg",X=[c.p+"static/media/banner1.5ac9fcba.png",c.p+"static/media/banner2.92ade0a5.png",c.p+"static/media/banner3.b7beb339.png"],Q=function(){var e=Object(F.useState)(0),t=Object(U.a)(e,2),c=t[0],a=t[1],s=Object(F.useState)(0),n=Object(U.a)(s,2),r=n[0],i=n[1],o=1040,l=function(e){"right"===e?(i(r+1),a((function(e){return e-o}))):(i(r-1),a((function(e){return e+o})))};return Object(D.jsxs)("div",{className:"slider",children:[Object(D.jsxs)("div",{className:"slider__container",children:[Object(D.jsx)("button",{className:"slider__button slider__button--left",type:"button",onClick:function(){return l("left")},disabled:0===c,children:Object(D.jsx)("img",{src:W,alt:"button left",className:T()({"slider__button-img--activity":0===c})})}),Object(D.jsx)("div",{className:"slider__img-container",children:Object(D.jsx)("div",{className:"slider__img-container-inner",style:{transform:"translateX(".concat(c,"px)")},children:X.map((function(e){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("img",{className:"slider__img",src:e,alt:"banner"},e.length)})}))})}),Object(D.jsx)("button",{className:"slider__button slider__button--right",type:"button",onClick:function(){return l("right")},disabled:c===o*(X.length-1)*-1,children:Object(D.jsx)("img",{src:W,alt:"button left",className:T()({"slider__button-img--activity":c===o*(X.length-1)*-1})})})]}),Object(D.jsx)("div",{className:"dots__indicators",children:X.map((function(e,t){return Object(D.jsx)("span",{className:T()("dots__indicator",{"dots__indicator--is-active":t===r})},e)}))})]})},Y=c.p+"static/media/Favourites(Heart Like).0adbb61b.svg",K=function(e){var t=e.phone,c=Object(F.useState)(!1),a=Object(U.a)(c,2),s=a[0],n=a[1],i=Object(r.c)((function(e){return e.favorites})),o=Object(r.b)();Object(F.useEffect)((function(){n(i.some((function(e){return e.itemId===t.itemId})))}),[i]);return Object(D.jsx)("button",{type:"button",className:"button button__fav",onClick:function(){return e=t,void o(s?O(e.id):_(e));var e},"data-cy":"addToFavorite",children:Object(D.jsx)("img",{src:s?Y:R,alt:""})})},V=function(e){var t=e.phone,c=Object(F.useState)(),a=Object(U.a)(c,2),s=a[0],n=a[1],i=Object(r.c)((function(e){return e.cart}));Object(F.useEffect)((function(){n(i.some((function(e){return e.itemId===t.itemId})))}),[i]);var o=Object(r.b)();return Object(D.jsx)("button",{className:T()("button","button__add",{"button__add--selected":s}),type:"button",onClick:function(){return e=t,void o(s?g(e.itemId):N(e));var e},children:s?"Added to cart":"Add to cart"})},Z=function(e){var t=e.card,c=t.itemId,s=t.name,n=t.price,r=t.screen,i=t.capacity,o=t.ram,l=t.image,j="_new/".concat(l);return Object(D.jsxs)("div",{className:"card","data-cy":"cardsContainer",children:[Object(D.jsxs)(a.b,{to:"/phones/".concat(c),className:"card__content",children:[Object(D.jsx)("div",{className:"card__img-container",children:Object(D.jsx)("img",{src:j,alt:"imagine-".concat(s),className:"card__img"})}),Object(D.jsx)("h2",{className:"card__name",children:s}),Object(D.jsx)("h3",{className:"card__price",children:"$".concat(n)})]}),Object(D.jsxs)("div",{className:"card__info",children:[Object(D.jsxs)("div",{className:"card__info-str",children:[Object(D.jsx)("span",{children:"Screen"}),Object(D.jsx)("span",{className:"card__info-str-value",children:r})]}),Object(D.jsxs)("div",{className:"card__info-str",children:[Object(D.jsx)("span",{children:"Capacity"}),Object(D.jsx)("span",{className:"card__info-str-value",children:i})]}),Object(D.jsxs)("div",{className:"card__info-str",children:[Object(D.jsx)("span",{children:"RAM"}),Object(D.jsx)("span",{className:"card__info-str-value",children:o})]})]}),Object(D.jsxs)("div",{className:"card__menu",children:[Object(D.jsx)(V,{phone:t}),Object(D.jsx)(K,{phone:t})]})]})},ee=function(e){var t=e.title,c=e.list,a=Object(F.useState)(0),s=Object(U.a)(a,2),n=s[0],r=s[1],i=function(e){r("right"===e?function(e){return e-272-16}:function(e){return e+272+16})};return Object(D.jsxs)("div",{className:"catalog-products",children:[Object(D.jsxs)("div",{className:"catalog-products__top",children:[Object(D.jsx)("h1",{className:"catalog-products__title",children:t}),Object(D.jsxs)("div",{className:"catalog-products__buttons",children:[Object(D.jsx)("button",{type:"button",className:"catalog-products__button",onClick:function(){return i("left")},disabled:0===n,children:Object(D.jsx)("img",{src:W,alt:"",className:T()("catalog-products__button-left",{"catalog-products__button-left--noActive":0===n})})}),Object(D.jsx)("button",{type:"button",className:"catalog-products__button",onClick:function(){return i("right")},children:Object(D.jsx)("img",{src:W,alt:""})})]})]}),Object(D.jsx)("div",{className:"catalog-products__cards",children:Object(D.jsx)("div",{className:"catalog-products__cards-inner",style:{transform:"translateX(".concat(n,"px)")},children:c.map((function(e){return Object(D.jsx)(Z,{card:e},e.itemId)}))})})]})},te="https://mate-academy.github.io/react_phone-catalog/_new";function ce(e){return new Promise((function(t){setTimeout(t,e)}))}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),ce(600).then((function(){return fetch(te+e,a)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var se=function(e){return ae(e)},ne=function(){var e=Object(M.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se("/products.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(M.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se("/products/".concat(t,".json")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=c.p+"static/media/mobile.572a43fa.png",oe=c.p+"static/media/tablets.07a53e7a.png",le=c.p+"static/media/accessories.ca41c40d.png",je=(c(59),function(){return Object(D.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(D.jsx)("div",{className:"Loader__content"})})}),de=function(){var e=Object(F.useState)([]),t=Object(U.a)(e,2),c=t[0],s=t[1],n=Object(F.useState)(!0),r=Object(U.a)(n,2),i=r[0],o=r[1],l=function(e,t){return e.filter((function(e){return e.category===t})).length},j=function(){var e=Object(M.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,ne();case 4:t=e.sent,s(t),o(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),z()({icon:"Error",title:"Empty list, Data Error!",text:"Try again in 5 minutes"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(F.useEffect)((function(){j()}),[]),Object(D.jsxs)("div",{className:"categories",children:[Object(D.jsx)("h3",{className:"categories__title",children:"Shop by category"}),Object(D.jsxs)("div",{className:"categories__content",children:[Object(D.jsxs)(a.b,{to:"/phones",className:"categories__link",children:[Object(D.jsx)("div",{className:"categories__img-box categories__img-box-mobile",children:Object(D.jsx)("img",{src:ie,alt:"",className:"categories__img"})}),Object(D.jsx)("p",{className:"categories__type",children:"Phones"}),Object(D.jsxs)("span",{className:"categories__quantity",children:[i?Object(D.jsx)(je,{}):l(c,"phones")," ","models"]})]}),Object(D.jsxs)(a.b,{to:"/tablets",className:"categories__link",children:[Object(D.jsx)("div",{className:"categories__img-box categories__img-box-tablets",children:Object(D.jsx)("img",{src:oe,alt:"",className:"categories__img"})}),Object(D.jsx)("p",{className:"categories__type",children:"Tablets"}),Object(D.jsxs)("span",{className:"categories__quantity",children:[i?Object(D.jsx)(je,{}):l(c,"tablets")," ","models"]})]}),Object(D.jsxs)(a.b,{to:"/accessories",className:"categories__link",children:[Object(D.jsx)("div",{className:"categories__img-box categories__img-box-accessories",children:Object(D.jsx)("img",{src:le,alt:"",className:"categories__img"})}),Object(D.jsx)("p",{className:"categories__type",children:"Accessories"}),Object(D.jsxs)("span",{className:"categories__quantity",children:[i?Object(D.jsx)(je,{}):l(c,"accessories")||"0"," ","models"]})]})]})]})},ue=function(){var e=Object(F.useState)([]),t=Object(U.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(M.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),z()({icon:"error",title:"Something goes wrong!",text:"Try in a few!"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(F.useEffect)((function(){s()}),[]);var n=c.filter((function(e){return"phones"===e.category&&e.capacity.length>0})),r=c.sort((function(e,t){return t.price-e.price}));return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(Q,{}),Object(D.jsx)(ee,{list:n,title:"Hot price"}),Object(D.jsx)(de,{}),Object(D.jsx)(ee,{list:r,title:"Brend new models"})]})},be=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},me=function(){var e=Object(P.p)().category;return Object(D.jsxs)("div",{className:"NoResult",children:[Object(D.jsx)("h1",{className:"NoResult__title",children:"".concat(be("".concat(e))," not found")}),Object(D.jsx)(a.b,{to:"/",className:"NoResult__link",children:"Go to Homepage"})]})},he=function(e){var t=e.catalog,c=e.sort,a=e.quantity,s=e.currPage,n=[];return n=function(e){var c=e?e.toLowerCase().split(" "):[];return t.filter((function(e){return c.every((function(t){return e.name.toLowerCase().includes(t)}))}))}(e.query),n=(n=Object(b.a)(n).sort((function(e,t){switch(c){case"Age":return t.year-e.year;case"Name":return t.name.localeCompare(e.name);default:return t.price-e.price}}))).slice(s*a-a,s*a),Object(D.jsx)("div",{className:"catalog__content","data-cy":"productList",children:n.length?n.map((function(e){return Object(D.jsx)(Z,{card:e},e.itemId)})):Object(D.jsx)(me,{})})},Oe=c.p+"static/media/Chevron (Arrow Up).1ea6958a.svg",_e=c.p+"static/media/Chevron (Arrow Down).98c9dd6d.svg",pe=c.p+"static/media/Chevron (Arrow Right).e028d388.svg",xe=c.p+"static/media/Chevron (Arrow Left).d51ddc97.svg",fe=function(e){var t=e.direction,c=e.handler,a=Object(F.useState)(""),s=Object(U.a)(a,2),n=s[0],r=s[1];return Object(F.useEffect)((function(){switch(t){case"up":r(Oe);break;case"right":r(pe);break;case"left":r(xe);break;case"down":r(_e);break;default:throw new Error("none")}}),[]),Object(D.jsx)("button",{className:"arrowButton",type:"button",onClick:c,children:Object(D.jsx)("img",{src:n,alt:""})})};function ve(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(U.a)(e,2),a=t[0],s=t[1];""===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}var ge=function(e){var t=e.total,c=e.perPage,s=e.currPage,n=Object(F.useState)(s||1),r=Object(U.a)(n,2),i=r[0],o=r[1],l=Object(a.d)(),j=Object(U.a)(l,2),d=j[0],u=j[1],b=Math.ceil(t/c),m=[];if(Object(F.useEffect)((function(){o(s||1),window.scrollTo({top:0,behavior:"smooth"})}),[s]),b<=1)return null;s>b&&u({page:"1"});for(var h=1;h<=b;h+=1)m.push(h);var O;return O=i>3?m.slice(i-3,i+1):m.slice(0,4),Object(D.jsxs)("div",{className:"pagination",children:[i>1&&Object(D.jsx)(a.b,{to:{search:ve(d,{page:"".concat(i-1)})},children:Object(D.jsx)(fe,{direction:"left",handler:function(){u({page:"".concat(i-1)})}})}),Object(D.jsx)("ul",{className:"pagination__list",children:O.map((function(e){return Object(D.jsx)("li",{className:T()("pagination__item",{current:i===e}),children:Object(D.jsx)(a.b,{to:{search:ve(d,{page:"".concat(e)})},className:T()("pagination__link",{current:i===e}),children:e})},e)}))}),i<Math.max.apply(Math,m)&&Object(D.jsx)(a.b,{to:{search:ve(d,{page:"".concat(i+1)})},children:Object(D.jsx)(fe,{direction:"right",handler:function(){u({page:"".concat(i+1)})}})})]})},Ne=c(8),ye=function(e){var t=e.list,c=e.type,s=e.title,n=Object(a.d)(),r=Object(U.a)(n,1)[0],i=Object(F.useState)(""),o=Object(U.a)(i,2),l=o[0],j=o[1];return Object(F.useEffect)((function(){j(r.get(c)||t[0])}),[]),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:s}),Object(D.jsx)("br",{}),Object(D.jsxs)("div",{className:"dropdown",children:[Object(D.jsx)("button",{className:"dropbtn",type:"button",children:l}),Object(D.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(D.jsx)(a.b,{to:{search:ve(r,Object(Ne.a)({},c,"".concat(e)))},onClick:function(){j(e)},children:e},e)}))})]})]})},ke=c.p+"static/media/Home.d4c29e4f.svg",we=function(){var e,t=Object(P.p)(),c=t.category,s=t.id;return Object(D.jsxs)("div",{className:"NavigationField",children:[Object(D.jsx)(a.b,{to:"/",children:Object(D.jsx)("img",{src:ke,alt:"home",className:"NavigationField__button--home"})}),Object(D.jsxs)(a.b,{to:"/".concat(c),children:[Object(D.jsx)("img",{src:pe,alt:"right",className:"NavigationField__button--arrow"}),be("".concat(c))]}),s&&Object(D.jsxs)(a.b,{to:"/category/".concat(c,"/").concat(s),style:{pointerEvents:"none"},children:[Object(D.jsx)("img",{src:pe,alt:"right",className:"NavigationField__button--arrow"}),(e=s,e.split("-").map((function(e){return be(e)})).join(" "))]})]})},Ce=["Age","Price","Name"],Se=["16","8","4"],Ae=function(){var e=Object(P.l)(),t=new URLSearchParams(e.search).get("page")||"1",c=Object(P.p)().category,s=Object(F.useState)(0),n=Object(U.a)(s,2),i=n[0],o=n[1],l=Object(F.useState)(""),j=Object(U.a)(l,2),d=j[0],u=j[1],b=Object(F.useState)(16),m=Object(U.a)(b,2),h=m[0],O=m[1],_=Object(F.useState)(""),p=Object(U.a)(_,2),x=p[0],f=p[1],v=Object(a.d)(),g=Object(U.a)(v,1)[0],N=Object(F.useState)([]),y=Object(U.a)(N,2),k=y[0],w=y[1],C=Object(r.c)((function(e){return e.favorites})),S=Object(F.useState)(!0),A=Object(U.a)(S,2),E=A[0],I=A[1];Object(F.useEffect)((function(){u(g.get("sort")||"age"),O(Number(g.get("perPage")||"16")),f(g.get("query")||"")}),[t,g]);var L=function(){var e=Object(M.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,ne();case 4:t=e.sent,a=t.filter((function(e){return e.category===c})),w(a),o(a.length),I(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),z()({icon:"error",title:"Empty list, Data Error!",text:"Try again in 5 minutes"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(F.useEffect)((function(){"favorites"===c?(I(!0),w(C),o(C.length),I(!1)):L(),window.scrollTo({top:0,behavior:"smooth"})}),[c]),E?Object(D.jsx)("div",{className:"container",children:Object(D.jsx)(je,{})}):Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(we,{}),0!==i&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"catalog__top",children:[Object(D.jsx)("h1",{className:"catalog__title",children:be("".concat(c))}),Object(D.jsx)("span",{className:"catalog__subtitle",children:"".concat(i," models")})]}),Object(D.jsxs)("div",{className:"filter",children:[Object(D.jsx)(ye,{list:Ce,type:"sort",title:"Sort by"}),Object(D.jsx)(ye,{list:Se,type:"perPage",title:"Items on page"})]})]}),Object(D.jsx)(he,{catalog:k,sort:d,quantity:h,query:x,currPage:Number(t)}),Object(D.jsx)(ge,{total:i,perPage:h,currPage:Number(t)||1})]})},Ee=c.p+"static/media/Arrow_up.470683b8.svg",Ie=function(){return Object(D.jsx)("footer",{className:"footer",children:Object(D.jsxs)("div",{className:"footer__content",children:[Object(D.jsx)(a.b,{to:"/",className:"header__logo",children:Object(D.jsx)("img",{src:q,alt:"logo"})}),Object(D.jsxs)("ul",{className:"footer__menu",children:[Object(D.jsx)("li",{className:"footer__item",children:Object(D.jsx)(a.b,{to:"https://github.com/8Melya8",className:"footer__link",target:"__blank",children:"GitHub"})}),Object(D.jsx)("li",{className:"footer__item",children:Object(D.jsx)(a.b,{to:"/contacts",className:"footer__link",children:"contacts"})}),Object(D.jsx)("li",{className:"footer__item",children:Object(D.jsx)(a.b,{to:"/rights",className:"footer__link",children:"rights"})})]}),Object(D.jsxs)("div",{className:"footer__button",children:[Object(D.jsx)("span",{className:"footer__button-text",children:"Back to top"}),Object(D.jsx)("div",{className:"footer__button-arrow",children:Object(D.jsx)("button",{className:"arrow--button",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(D.jsx)("img",{src:Ee,alt:""})})})]})]})})},Fe=function(e){var t=e.images,c=Object(F.useState)("_new/".concat(t[0])),a=Object(U.a)(c,2),s=a[0],n=a[1],r=function(e){return"_new/".concat(e)};return Object(D.jsxs)("div",{className:"photos description__photos",children:[Object(D.jsx)("ul",{className:"photos__list",children:t.map((function(e){return Object(D.jsx)("button",{type:"button",className:"photos__item",onClick:function(){return function(e){var t=r(e);n(t)}(e)},children:Object(D.jsx)("img",{src:r(e),alt:"photos",className:"photos__link"})},e)}))}),Object(D.jsx)("div",{className:"photos__main-container",children:Object(D.jsx)("img",{src:s,alt:"main",className:"photos__main"})})]})},Pe=function(e){var t=e.description,c=e.currentProduct;return Object(D.jsxs)("div",{className:"description__short-info",children:[Object(D.jsxs)("div",{className:"description__filter",children:[Object(D.jsxs)("div",{className:"description__colors",children:[Object(D.jsx)("span",{className:"description__colors-title",children:"Colors"}),Object(D.jsx)("ul",{className:"description__colors-list",children:t.colorsAvailable.map((function(e){return Object(D.jsx)("li",{className:T()("description__colors-item",{current__color:t.color===e}),children:Object(D.jsx)(a.b,{className:"description__color ".concat(e),to:"/phones/".concat(t.namespaceId,"-").concat(t.capacity.toLocaleLowerCase(),"-").concat(e)})},e)}))})]}),Object(D.jsxs)("div",{className:"description__capacity",children:[Object(D.jsx)("span",{className:"description__capacity-text",children:"Select capacity"}),Object(D.jsx)("ul",{className:"description__capacity-list",children:null===t||void 0===t?void 0:t.capacityAvailable.map((function(e){return Object(D.jsx)("li",{className:"description__capacity-item",children:Object(D.jsx)(a.b,{className:T()("description__capacity-link",{current:t.capacity===e}),to:"/phones/".concat(t.namespaceId,"-").concat(e.toLocaleLowerCase(),"-").concat(t.color),children:e})},e)}))})]})]}),Object(D.jsxs)("div",{className:"description__buy",children:[Object(D.jsxs)("div",{className:"description__price",children:[Object(D.jsx)("span",{className:"description__price-disc",children:"$".concat(t.priceDiscount)}),Object(D.jsx)("span",{className:"description__price-regular",children:"$".concat(t.priceRegular)})]}),Object(D.jsxs)("div",{className:"description__buttons",children:[Object(D.jsx)(V,{phone:c}),Object(D.jsx)(K,{phone:c})]}),Object(D.jsxs)("ul",{className:"description__info",children:[Object(D.jsxs)("li",{className:"description__info-str",children:[Object(D.jsx)("span",{children:"Screen"}),Object(D.jsx)("span",{className:"description__info-str-value",children:t.screen})]}),Object(D.jsxs)("li",{className:"description__info-str",children:[Object(D.jsx)("span",{children:"Resolution"}),Object(D.jsx)("span",{className:"description__info-str-value",children:t.resolution})]}),Object(D.jsxs)("li",{className:"description__info-str",children:[Object(D.jsx)("span",{children:"Processor"}),Object(D.jsx)("span",{className:"description__info-str-value",children:t.processor})]}),Object(D.jsxs)("li",{className:"description__info-str",children:[Object(D.jsx)("span",{children:"Ram"}),Object(D.jsx)("span",{className:"description__info-str-value",children:t.ram})]})]})]})]})},Le=function(e){var t=e.description;return Object(D.jsxs)("div",{className:"about description__about","data-cy":"productDescription",children:[Object(D.jsx)("h2",{className:"about__title",children:"About"}),t.description.map((function(e){return Object(D.jsxs)("div",{className:"section description__section",children:[Object(D.jsx)("h3",{className:"section__title",children:e.title}),Object(D.jsx)("article",{className:"section__text",children:e.text.map((function(e){return Object(D.jsx)("p",{className:"section__paragraph",children:e},e.length+ +new Date)}))})]},e.title)}))]})},Te=["screen","resolution","processor","ram","capacity","camera","zoom"],qe=function(e){var t=e.description;return Object(D.jsxs)("div",{className:"tech description__tech",children:[Object(D.jsx)("h2",{className:"tech__title",children:"Tech specs"}),Object(D.jsx)("ul",{className:"tech__list",children:Te.map((function(e){return Object(D.jsxs)("li",{className:"tech__item",children:[Object(D.jsx)("span",{className:"tech__spec",children:be("".concat(e))}),Object(D.jsx)("span",{className:"tech__value",children:t[e]})]},e)}))})]})},Re=function(){var e=Object(P.n)();return Object(D.jsxs)("div",{className:"BackLink","data-cy":"backButton",children:[Object(D.jsx)("img",{src:xe,alt:"left",className:"BackLink__icon--left"}),Object(D.jsx)("button",{className:"BackLink__button",type:"button",onClick:function(){e(-1)},children:"Back"})]})},Be=function(){var e=Object(P.p)(),t=Object(F.useState)(!0),c=Object(U.a)(t,2),a=c[0],s=c[1],n=Object(F.useState)([]),r=Object(U.a)(n,2),i=r[0],o=r[1],l=Object(F.useState)(null),j=Object(U.a)(l,2),d=j[0],u=j[1],m=Object(F.useState)(null),h=Object(U.a)(m,2),O=h[0],_=h[1],p=function(){var e=Object(M.a)(G.a.mark((function e(t){var c,a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,re(t);case 4:return c=e.sent,e.next=7,ne();case 7:a=e.sent,n=a.find((function(e){return e.itemId===t}))||null,_(c),o(a),u(n),s(!1),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(0),new Error("Didn't catch data");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();Object(F.useEffect)((function(){e.id&&p(e.id),window.scrollTo({top:0,behavior:"smooth"})}),[e.id]);var x=Object(b.a)(i).sort((function(){return.5-Math.random()}));return null===O||null===d||a?Object(D.jsx)("div",{className:"container",children:Object(D.jsx)(je,{})}):Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(we,{}),Object(D.jsx)(Re,{}),Object(D.jsxs)("div",{className:"description",children:[Object(D.jsx)("h1",{children:O.name}),Object(D.jsxs)("div",{className:"description__top",children:[Object(D.jsx)(Fe,{images:O.images}),Object(D.jsx)(Pe,{description:O,currentProduct:d})]})]}),Object(D.jsxs)("div",{className:"description__content",children:[Object(D.jsx)(Le,{description:O}),Object(D.jsx)(qe,{description:O})]}),Object(D.jsx)(ee,{list:x,title:"You may also like"})]})},De=function(){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h1",{children:"Page not found"}),Object(D.jsx)("p",{children:"The page you are looking for does not exist."}),Object(D.jsx)(a.b,{to:"/",children:"Go to Homepage"})]})},He=c.p+"static/media/Close.3ea864f5.svg",Me=function(e){var t=e.product,c=Object(r.b)();return Object(D.jsxs)("li",{className:"cart__item productField",children:[Object(D.jsx)("button",{type:"button",onClick:function(){return c(g(t.itemId))},className:"productField__close",children:Object(D.jsx)("img",{src:He,alt:"close"})}),Object(D.jsx)(a.b,{to:"/".concat(t.category,"/").concat(t.itemId),children:Object(D.jsx)("img",{src:"_new/".concat(t.image),alt:"",className:"productField__image"})}),Object(D.jsx)(a.b,{to:"/".concat(t.category,"/").concat(t.itemId),className:"productField__name",children:t.name}),Object(D.jsxs)("div",{className:"productField__quantity",children:[Object(D.jsx)("button",{type:"button",className:"productField__quantity-button",disabled:t.count<=1,onClick:function(){c(k(t.itemId))},children:"-"}),Object(D.jsx)("span",{className:"productField__quantity-count",children:t.count}),Object(D.jsx)("button",{type:"button",className:"productField__quantity-button",onClick:function(){c(y(t.itemId))},children:"+"})]}),Object(D.jsx)("span",{className:"productField__price",children:"$".concat(t.price*t.count)})]},t.itemId)},Ue=function(){var e=Object(r.c)((function(e){return e.cart})),t=e.reduce((function(e,t){return e+t.price*t.count}),0);return Object(D.jsxs)("div",{className:"cart",children:[Object(D.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(D.jsxs)("div",{className:"cart__content",children:[Object(D.jsx)("ul",{className:"cart__list",children:e.length?e.map((function(e){return Object(D.jsx)(Me,{product:e},e.itemId)})):Object(D.jsx)("span",{children:"Cart empty"})}),Object(D.jsxs)("div",{className:"cart__summary","data-cy":"productQauntity",children:[Object(D.jsxs)("p",{className:"cart__summary-text",children:[Object(D.jsx)("span",{children:"$".concat(t)}),Object(D.jsx)("span",{className:"cart__summary-total",children:"Total for ".concat(e.length," items")})]}),Object(D.jsx)("hr",{}),Object(D.jsx)("button",{type:"button",className:"cart__checkout-button",onClick:function(){z()("Well done!","We are sorry, but this feature is not implemented yet!","success")},children:"Checkout"})]})]})]})},$e=function(){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(Re,{}),Object(D.jsx)(Ue,{})]})},Ge=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(H,{}),Object(D.jsxs)(P.c,{children:[Object(D.jsx)(P.a,{path:"/",element:Object(D.jsx)(ue,{})}),Object(D.jsx)(P.a,{path:":category",element:Object(D.jsx)(Ae,{})}),Object(D.jsx)(P.a,{path:":category/:id",element:Object(D.jsx)(Be,{})}),Object(D.jsx)(P.a,{path:"/cart",element:Object(D.jsx)($e,{})}),Object(D.jsx)(P.a,{path:"*",element:Object(D.jsx)(De,{})})]}),Object(D.jsx)(Ie,{})]})};n.a.render(Object(D.jsx)(a.a,{children:Object(D.jsx)(r.a,{store:E,children:Object(D.jsx)(i.a,{loading:null,persistor:I,children:Object(D.jsx)(Ge,{})})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.318444c2.chunk.js.map