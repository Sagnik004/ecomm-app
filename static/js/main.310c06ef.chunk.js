(this.webpackJsonpsagnik_reactdeveloper=this.webpackJsonpsagnik_reactdeveloper||[]).push([[0],{43:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var r=c(0),i=c.n(r),s=c(14),n=c.n(s),a=c(20),d=c(9),o=(c(43),c(44),c(16)),l=c(6),j=c(57),u=c(54),h=c(2),b=function(){var e,t=Object(d.c)((function(e){return e.cart})),c=Object(d.c)((function(e){return e.isLoggedIn})),r=0;return t&&(r=t.reduce((function(e,t){return e+t.quantity}),0)),e=c?Object(h.jsx)(j.a,{size:"md",className:"navbar-button",disabled:!0,children:"My Account"}):Object(h.jsx)(o.b,{to:"/login",children:Object(h.jsx)(j.a,{size:"md",className:"navbar-button",children:"Login"})}),Object(h.jsxs)(u.a,{bg:"dark",variant:"dark",style:{justifyContent:"space-between",flexWrap:"wrap",padding:"1em",marginBottom:"1.5em"},children:[Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)(u.a.Brand,{className:"navbar-logo",children:"E-Commerce"})}),Object(h.jsxs)("div",{className:"navbar-right",children:[e,Object(h.jsx)(o.b,{to:"/cart",children:Object(h.jsxs)(j.a,{size:"md",className:"navbar-button",disabled:0===r,children:["Cart ( ",r," )"]})})]})]})},p=c(51),O=c(50),x=c(34),m=c(52),g=function(e){var t=e.categoryTitle;return Object(h.jsx)("div",{style:{fontSize:"1.6rem",fontWeight:"500",lineHeight:"1.5",letterSpacing:"0.2rem",paddingLeft:"1.5em"},children:t.toUpperCase()})},y=c(56),f=function(e){var t=e.detail,c=t.image,r=t.description,i=t.price,s=t.sku;return Object(h.jsxs)(y.a,{className:"shadow",style:{padding:"1em",margin:"1em",minWidth:"18rem",maxWidth:"20rem"},children:[Object(h.jsx)(y.a.Img,{variant:"top",src:c,style:{height:"275px",borderRadius:"1rem"}}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(y.a.Text,{style:{lineHeight:"1.5",letterSpacing:"0.01rem"},children:r.toUpperCase()}),Object(h.jsxs)(O.a,{style:{justifyContent:"space-between"},children:[Object(h.jsx)(j.a,{variant:"warning",disabled:!0,children:Object(h.jsx)("strong",{children:i})}),Object(h.jsx)(j.a,{variant:"success",onClick:function(){return e.handleAddCartClick(s)},children:"Add to Cart"})]})]})]})},k=function(){var e=Object(d.c)((function(e){return e.productsWithCategory})),t=Object(d.b)();function c(e){t({type:"ADD_TO_CART",skuId:e})}var r=Object(h.jsx)("h3",{style:{textAlign:"center"},children:"Loading..."});return e.length&&(r=e.map((function(e){return 0!==e.details.length?Object(h.jsx)(p.a,{fluid:!0,className:"product-category",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(x.a,{xs:12,style:{maxWidth:"100%"},children:Object(h.jsx)("div",{style:{fontSize:"1.6rem",fontWeight:"500",lineHeight:"1.5",letterSpacing:"0.2rem"},children:Object(h.jsx)(g,{categoryTitle:e.category})})}),Object(h.jsx)(x.a,{children:Object(h.jsx)(m.a,{style:{maxWidth:"90%",paddingLeft:"2em"},children:e.details.map((function(e){return Object(h.jsx)(f,{detail:e,handleAddCartClick:c},e.sku)}))})})]})},e.category):null}))),r},v=c(55),C=function(e){var t=Object(d.b)(),c=Object(l.f)();return Object(h.jsxs)(p.a,{className:"login-form",children:[Object(h.jsx)("h3",{children:"Sign In"}),Object(h.jsxs)(v.a,{onSubmit:function(e){e.preventDefault(),t({type:"LOGIN"}),c.push("/")},children:[Object(h.jsxs)(v.a.Group,{controlId:"signInEmail",children:[Object(h.jsx)(v.a.Label,{children:"Email address"}),Object(h.jsx)(v.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(h.jsxs)(v.a.Group,{controlId:"signInPassword",children:[Object(h.jsx)(v.a.Label,{children:"Password"}),Object(h.jsx)(v.a.Control,{type:"password",placeholder:"Password"})]}),Object(h.jsx)(j.a,{variant:"primary",type:"submit",children:"Sign In"})]})]})},I=c(53),S=function(){var e=Object(d.c)((function(e){return e.products})),t=Object(d.c)((function(e){return e.cart})),c=Object(d.b)();var r,i,s=0,n=0;return r=t.map((function(t){var r=e.find((function(e){return e.sku===t.sku}));return s+=t.quantity,n+=t.quantity*r.price,Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:r.description}),Object(h.jsx)("td",{children:r.price}),Object(h.jsxs)("td",{children:[Object(h.jsx)(j.a,{variant:"warning",className:"product-sub",disabled:0===t.quantity,onClick:function(){return e=t.sku,t.quantity,void c({type:"DECREMENT_QTY",skuId:e});var e},children:"-"}),t.quantity,Object(h.jsx)(j.a,{variant:"success",className:"product-add",onClick:function(){return e=t.sku,void c({type:"ADD_TO_CART",skuId:e});var e},children:"+"})]})]},t.sku)})),i=Object(h.jsxs)(y.a,{style:{marginTop:"0.5em"},children:[Object(h.jsx)(y.a.Header,{children:"Cart Summary"}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(y.a.Text,{children:Object(h.jsxs)("strong",{children:["Total Items: ",s]})}),Object(h.jsx)(y.a.Text,{children:Object(h.jsxs)("strong",{children:["Total Price: ",n.toFixed(2)]})}),Object(h.jsx)(j.a,{variant:"success",style:{width:"100%"},disabled:0===s,children:"Check out"})]})]}),Object(h.jsx)(p.a,{children:Object(h.jsxs)(O.a,{children:[Object(h.jsxs)(x.a,{sm:12,md:8,children:[Object(h.jsx)("h3",{style:{marginBottom:"1em"},children:"YOUR SHOPPING CART"}),Object(h.jsxs)(I.a,{striped:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Product Description"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Quantity"})]})}),Object(h.jsx)("tbody",{children:r})]})]}),Object(h.jsx)(x.a,{sm:12,md:4,children:i})]})})};var T=function(){return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,children:Object(h.jsx)(k,{})}),Object(h.jsx)(l.a,{path:"/login",exact:!0,children:Object(h.jsx)(C,{})}),Object(h.jsx)(l.a,{path:"/cart",exact:!0,children:Object(h.jsx)(S,{})}),Object(h.jsx)(l.a,{children:"404 - Page not Found"})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),i(e),s(e),n(e)}))},B=c(13),N=c(21),L={productsWithCategory:[{category:"Sports",details:[{sku:1001,price:"$49.99",description:"Football Size 5",image:"https://source.unsplash.com/_AOL4_fDQ3M/345*160"},{sku:1002,price:"$19.99",description:"Baseball Ball Foam",image:"https://source.unsplash.com/gNYQxI5ufII/345*160"},{sku:1003,price:"$9.49",description:"Basketball S500 Size 7",image:"https://source.unsplash.com/BfphcCvhl6E/345*160"},{sku:1004,price:"$59.99",description:"Hiking Waterproof Shoes",image:"https://source.unsplash.com/8iZvOp39rzw/345*160"}]},{category:"Fashion",details:[{sku:1050,price:"$49.79",description:"Run Dry T-Shirt",image:"https://source.unsplash.com/jXfpruvSHKk/345*160"},{sku:1051,price:"$17.80",description:"Hat - Sweat Free",image:"https://source.unsplash.com/0PJZWB5RvwM/345*160"},{sku:1052,price:"$115.65",description:"Blazer - Office Wear",image:"https://source.unsplash.com/jXzyR6tgd18/345*160"},{sku:1053,price:"$17.80",description:"Tie with your blazer",image:"https://source.unsplash.com/Xy6FpnFyVjo/345*160"}]},{category:"Electronics",details:[{sku:1100,price:"$99.99",description:"iPod Music",image:"https://source.unsplash.com/ZM8DurjwH-8/345*160"},{sku:1101,price:"$999.99",description:"iPhone 12 - Latest",image:"https://source.unsplash.com/2yIcl0B1LOw/345*160"},{sku:1102,price:"$199.70",description:"Nexus 7 - Android",image:"https://source.unsplash.com/EAge0E9epX0/345*160"}]}],products:[{sku:1001,price:49.99,description:"Football Size 5"},{sku:1002,price:19.99,description:"Baseball Ball Foam"},{sku:1003,price:9.49,description:"Basketball S500 Size 7"},{sku:1004,price:59.99,description:"Hiking Waterproof Shoes"},{sku:1050,price:49.79,description:"Run Dry T-Shirt"},{sku:1051,price:17.8,description:"Hat - Sweat Free"},{sku:1052,price:115.65,description:"Blazer - Office Wear"},{sku:1053,price:17.8,description:"Tie with your blazer"},{sku:1100,price:99.99,description:"iPod Music"},{sku:1101,price:999.99,description:"iPhone 12 - Latest"},{sku:1102,price:199.7,description:"Nexus 7 - Android"}],cart:[],isLoggedIn:!1};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var c=e.cart.findIndex((function(e){return e.sku===t.skuId}));if(-1!==c){var r=Object(N.a)(e.cart);return r[c].quantity=r[c].quantity+1,Object(B.a)(Object(B.a)({},e),{},{cart:r})}return Object(B.a)(Object(B.a)({},e),{},{cart:[].concat(Object(N.a)(e.cart),[{sku:t.skuId,quantity:1}])});case"DECREMENT_QTY":var i=e.cart.findIndex((function(e){return e.sku===t.skuId})),s=Object(N.a)(e.cart);return s[i].quantity=s[i].quantity-1,Object(B.a)(Object(B.a)({},e),{},{cart:s});case"LOGIN":return Object(B.a)(Object(B.a)({},e),{},{isLoggedIn:!0});default:return e}},P=Object(a.b)(A);n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(d.a,{store:P,children:Object(h.jsx)(T,{})})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.310c06ef.chunk.js.map