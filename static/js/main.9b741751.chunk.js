(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(29),i=c.n(s),r=(c(63),c(52)),o=c(9),l=(c(64),c(65),c(53)),j=c.n(l),d=c(54),u=c.n(d),b=c(16),h=c(2),m=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(h.jsx)(m.Provider,{value:Object(n.useReducer)(t,c),children:a})},p=function(){return Object(n.useContext)(m)},x=c(38),g=x.a.initializeApp({apiKey:"AIzaSyBbPmyOpurHreyYcV_IkQc_ONV_MqVKjX4",authDomain:"clone-cabec.firebaseapp.com",projectId:"clone-cabec",storageBucket:"clone-cabec.appspot.com",messagingSenderId:"733182573800",appId:"1:733182573800:web:da6e5655543a8c1a171d5d",measurementId:"G-JRJ73KV7J7"}).firestore(),v=x.a.auth();var f=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("img",{className:"header_logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"error"})}),Object(h.jsxs)("div",{className:"header_search",children:[Object(h.jsx)("input",{className:"header_searchInput",type:"text"}),"  ",Object(h.jsx)(j.a,{className:"header_searchIcon"})]}),Object(h.jsxs)("div",{className:"header_nav",children:[Object(h.jsx)(b.b,{to:!a&&"/Login",children:Object(h.jsxs)("div",{onClick:function(){a&&v.signOut()},className:"header_option",children:[Object(h.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(h.jsx)("span",{className:"header_optionTwp",children:a?"Sign Out":"Sign In"})]})}),Object(h.jsx)(b.b,{to:"/orders",children:Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_optionLineOne",children:"Return"}),Object(h.jsx)("span",{className:"header_optionTwp",children:"& Orders"})]})}),Object(h.jsxs)("div",{className:"header_option",children:[Object(h.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header_optionTwp",children:"Prime"})]}),Object(h.jsx)(b.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header_optionBasket",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("span",{className:"header_optionLineTwo header_basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(77),c(78);var _=function(e){var t=e.id,c=e.title,n=e.image,a=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product_info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product_price",children:[Object(h.jsx)("small",{children:"Rs"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))})]}),Object(h.jsx)("img",{src:n,alt:"error"}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:s}})},children:"Add to Cart"})]})};var N=function(){return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"home_container",children:[Object(h.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"error"}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(_,{id:"1",title:"The lean startup",price:230,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:3}),Object(h.jsx)(_,{id:"2",title:"Kenwood Kmix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk,5 Litre Glass Bowl",price:3e3,image:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=KEKR008",rating:4})]}),Object(h.jsxs)("div",{className:"home_row",children:[Object(h.jsx)(_,{id:"3",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:42e3,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/61ZXTZMycXL._SL1000_.jpg"}),Object(h.jsx)(_,{id:"4",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa,Charcoal Fabric",price:3e3,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"}),Object(h.jsx)(_,{id:"5",title:"New Apple iPad Pro(12.9-inch,Wi-Fi,128GB) - Silver (4th Generation)",price:1e5,rating:4,image:"https://www.bhphotovideo.com/images/images2500x2500/apple_my232ll_a_11_ipad_pro_early_1553824.jpg"})]}),Object(h.jsx)("div",{className:"home_row",children:Object(h.jsx)(_,{id:"6",title:"Samsung 49 curved Gaming Monitor",price:4e4,rating:5,image:"https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49g95tssnxza/Asset1.jpg?$product-details-jpg$"})})]})})},S=(c(79),c(25)),k=c.n(S),y=c(39),C=c(22),E=function(e){return e.reduce((function(e,t){return t.price+e}),0)},A=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(y.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:n});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});default:return e}},T=c(11);var w=function(){var e=Object(T.f)(),t=p(),c=Object(o.a)(t,2),n=c[0].basket;return c[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Subtotal (",n.length," items): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal_gift",children:[Object(h.jsx)("input",{type:"checkbox"}),"This Order contains a gift"]})]})},decimalScale:2,value:E(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(h.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(81),c(82);var B=function(e){var t=p(),c=Object(o.a)(t,2),n=(c[0].basket,c[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct_image",src:e.image,alt:"error"}),Object(h.jsxs)("div",{className:"checkoutProduct_info",children:[Object(h.jsx)("p",{className:"checkoutProduct_title",children:e.title}),Object(h.jsxs)("p",{className:"checkoutProduct_price",children:[Object(h.jsx)("small",{children:"\u20b9"}),Object(h.jsx)("strong",{children:e.price})]}),Object(h.jsx)("div",{className:"checkoutProduct_rating",children:Array(e.rating).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\u2b50"})}))}),!e.hiddenButton&&Object(h.jsx)("button",{onClick:function(){n({type:"REMOVE_FROM_BASKET",id:e.id})},children:"Remove From Basket"})]})]})};var P=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout_left",children:[Object(h.jsx)("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"error"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello,",null===a||void 0===a?void 0:a.email]}),Object(h.jsx)("h2",{className:"checkout_title",children:"Your ShoppingBasket"}),n.map((function(e){return Object(h.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(h.jsx)("div",{className:"checkout_right",children:Object(h.jsx)(w,{})})]})};c(83);var I=function(){var e=Object(T.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"error"})}),Object(h.jsxs)("div",{className:"login_container",children:[Object(h.jsx)("h1",{children:"Sign-in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:l,onChange:function(e){j(e.target.value)}}),Object(h.jsx)("button",{className:"login_signInButton",onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(a,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",children:"Sign In"})]}),Object(h.jsx)("p",{children:"By Signing-in you agree to Amazon's Fake Clone Condition of Use and Sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice"}),Object(h.jsx)("button",{className:"login_registerButton",onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(a,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon Account"})]})]})},M=c(27),z=c.n(M),R=c(37),G=(c(85),c(24)),L=c(55),K=c.n(L).a.create({baseURL:"http://localhost:5001/clone-cabec/us-central1/api"});var D=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user,i=t[1],r=Object(G.useStripe)(),l=Object(G.useElements)(),j=Object(T.f)(),d=Object(n.useState)(!1),u=Object(o.a)(d,2),m=u[0],O=u[1],x=Object(n.useState)(""),v=Object(o.a)(x,2),f=v[0],_=v[1],N=Object(n.useState)(null),S=Object(o.a)(N,2),y=(S[0],S[1]),C=Object(n.useState)(!0),A=Object(o.a)(C,2),w=A[0],P=A[1],I=Object(n.useState)(!0),M=Object(o.a)(I,2),L=M[0],D=M[1];Object(n.useEffect)((function(){(function(){var e=Object(R.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({method:"post",url:"/payments/create?total=".concat(100*E(a))});case 2:t=e.sent,D(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),console.log("The Secret is >>> ",L);var Y=function(){var e=Object(R.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),_(!0),e.next=4,r.confirmCardPayment(L,{payment_method:{card:l.getElement(G.CardElement)}}).then((function(e){var t=e.paymentIntent;console.log("pi",t),g.collection("user").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(null===t||void 0===t?void 0:t.uid).set({basket:a}),O(!0),y(null),_(!1),i({type:"EMPTY_BASET"}),j.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"payment",children:Object(h.jsxs)("div",{className:"payment_container",children:[Object(h.jsxs)("h1",{children:["Checkout (",Object(h.jsxs)(b.b,{to:"/checkout",children:[" ",null===a||void 0===a?void 0:a.length," items"]}),")"]}),Object(h.jsxs)("div",{className:"payment_section",children:[Object(h.jsx)("div",{className:"payment_title",children:Object(h.jsx)("h3",{children:"Shipping Address"})}),Object(h.jsxs)("div",{className:"payment_address",children:[Object(h.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(h.jsx)("p",{children:"123 React Lane"}),Object(h.jsx)("p",{children:"Los Angela, CA"})]})]}),Object(h.jsxs)("div",{className:"payment_section",children:[Object(h.jsx)("div",{className:"paymenr_title",children:Object(h.jsx)("h3",{children:"Review items and delivery"})}),Object(h.jsx)("div",{className:"payment_item",children:a.map((function(e){return Object(h.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(h.jsxs)("div",{className:"payment_section",children:[Object(h.jsx)("div",{className:"payment_title",children:Object(h.jsx)("h3",{children:"Payment Method"})}),Object(h.jsx)("div",{className:"payment_details",children:Object(h.jsxs)("form",{onSubmit:Y,children:[Object(h.jsx)(G.CardElement,{onChange:function(e){P(e.empty),y(e.error?e.error.message:"")}}),Object(h.jsxs)("div",{className:"payment_priceContainer",children:[Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:["Order Total: ",e]})})},decimalScale:2,value:E(a),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(h.jsx)("button",{disabled:f||w||m,children:Object(h.jsx)("span",{children:f?Object(h.jsx)("p",{children:"Processing"}):"Buy Now"})})]})]})})]})]})})},Y=c(56),F=(c(103),c(104),c(57)),U=c.n(F);var V=function(e){var t=e.order;return Object(h.jsxs)("div",{className:"order",children:[Object(h.jsx)("h2",{children:"Order"}),Object(h.jsx)("p",{children:U.a.unix(t.data.created).format("MMMM Do YYYY, h:mma")}),Object(h.jsx)("p",{className:"order__id",children:Object(h.jsx)("small",{children:t.id})}),t.data.basket.map((function(e){return Object(h.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(h.jsx)(k.a,{renderText:function(e){return Object(h.jsxs)("h3",{className:"order_total",children:["Order Total: ",e," "]})},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeperator:!0,prefix:"$"})]})};var J=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=(c.basket,c.user),s=(t[1],Object(n.useState)([])),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){a?g.collection("users").doc(null===a||void 0===a?void 0:a.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[a]),Object(h.jsxs)("div",{className:"orders",children:[Object(h.jsx)("h1",{children:"Your Orders"}),Object(h.jsx)("div",{className:"orders__order",children:r.map((function(e){return Object(h.jsx)(V,{order:e})}))})]})},H=Object(Y.a)("pk_test_51J1ZMBSAcREKGzoPPlrIbuuvCPrR5teEBxfJCMGacB1t9fSKij4rEonm7su3AkkiIZbyDckGeAYbcpT6kXf2FEuY00VCtou5S8");var W=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("The User Is >>>  ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(b.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(T.c,{children:[Object(h.jsx)(T.a,{path:"/Login",children:Object(h.jsx)(I,{})}),Object(h.jsxs)(T.a,{path:"/checkout",children:[Object(h.jsx)(f,{}),Object(h.jsx)(P,{})]}),Object(h.jsxs)(T.a,{path:"/payment",children:[Object(h.jsx)(f,{}),Object(h.jsx)(G.Elements,{stripe:H,children:Object(h.jsx)(D,{})})]}),Object(h.jsxs)(T.a,{path:"/Orders",children:[Object(h.jsx)(f,{}),Object(h.jsx)(J,{})]}),Object(h.jsxs)(T.a,{path:"/",children:[Object(h.jsx)(f,{}),Object(h.jsx)(N,{})]})]})})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[],user:null},reducer:A,children:Object(h.jsx)(W,{})})}),document.getElementById("root")),X()},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},85:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.9b741751.chunk.js.map