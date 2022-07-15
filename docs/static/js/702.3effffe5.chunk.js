"use strict";(self.webpackChunkinventory_manager=self.webpackChunkinventory_manager||[]).push([[702],{6313:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(7305),i=t(394),c=t(2380),s=t(3099),o=t(2426),a=t.n(o),l=t(2791),d=t(5856),u=t(7309),x=t(2622),m=t(1413),f=t(5048),h=t(6552),v=t(3309),j=function(){var e=(0,f.I0)();return function(n){var t=v.Z.getState();return e((0,h.Z)((0,m.Z)((0,m.Z)({},t),{},{inventoryItems:t.inventoryItems.filter((function(e){return e.id!==n}))})))}},y=t(184),Z=function(e){var n=e.inventoryItemId,t=j();return(0,y.jsx)(d.Z,{title:"Are you sure to delete the inventory item?",onConfirm:function(){t(n)},okText:"Yes",cancelText:"No",children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(x.Z,{}),"Delete"]})})},I=t(9271),g=t(1752),p=function(e){var n=e.inventoryItemId,t=(0,I.k6)(),r=(0,I.$B)().url;return(0,y.jsxs)(u.Z,{onClick:function(){t.push("".concat(r,"/").concat(n,"/edit-item"))},children:[(0,y.jsx)(g.Z,{}),"Edit"]})},b=function(e){var n=e.category,t=e.inventoryItem,o=e.showCategory;return(0,y.jsxs)(r.Z,{size:"small",className:"mb-4 box-shadow",children:[(0,y.jsxs)(i.Z,{layout:"vertical",size:"small",colon:!1,column:{xl:3,lg:3,md:2,sm:1,xs:1},children:[o&&(0,y.jsx)(i.Z.Item,{label:(0,y.jsx)(c.Z.Text,{type:"secondary",children:"Category"}),children:n.title}),n.fields.map((function(e){var n,r=t.data.find((function(n){return n.categoryFieldId===e.id}));if(!r)return null;var s="";if("Date"===e.type&&r.value)try{s=a()(Number(r.value)).format("DD MMM 'YY")}catch(o){console.error(o)}else s=r.value;return(0,y.jsx)(i.Z.Item,{label:(0,y.jsx)(c.Z.Text,{type:"secondary",children:e.title}),span:"LongText"===e.type?2:1,children:(null!==(n=s)&&void 0!==n?n:"").length>0?s:"Not available"},e.id)}))]}),(0,y.jsxs)(s.Z,{className:"mt-1",direction:"horizontal",size:"small",children:[(0,y.jsx)(p,{inventoryItemId:t.id}),(0,y.jsx)(Z,{inventoryItemId:t.id})]})]})},k=l.memo(b)},8407:function(e,n,t){t.d(n,{Z:function(){return c}});t(2791);var r="styles_header__SE5mY",i=t(184),c=function(e){var n=e.children;return(0,i.jsx)("div",{className:"pb-4 ".concat(r),children:n})}},6552:function(e,n){n.Z=function(e){return{type:"ACTION",payload:e}}},6702:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(6106),i=t(914),c=t(2380),s=t(2791),o=t(5048),a=t(9271),l=t(8407),d=t(7309),u=t(9286),x=t(184),m=function(e){var n=e.categoryId,t=(0,a.k6)(),r=(0,a.$B)().url;return(0,x.jsxs)(d.Z,{onClick:function(){t.push("".concat(r,"/").concat(n,"/add-item"))},children:[(0,x.jsx)(u.Z,{}),"Add New Item"]})},f=t(7305),h=t(7063),v=t(2542),j=t(6313),y=function(e){var n=e.category,t=(0,o.v9)((function(e){return e.inventoryItems.filter((function(e){return e.categoryId===n.id}))}),o.wU);return t.length>0?(0,x.jsx)("div",{children:t.map((function(e){return(0,x.jsx)(j.Z,{category:n,inventoryItem:e},e.id)}))}):(0,x.jsx)(f.Z,{className:"box-shadow",children:(0,x.jsx)(h.ZP,{icon:(0,x.jsx)(v.Z,{}),title:"Start managing ".concat(n.title,"!"),subTitle:"Please start adding our inventory items."})})},Z=s.memo(y),I=t(7860),g=t(8731),p=(0,s.lazy)((function(){return Promise.all([t.e(113),t.e(666),t.e(30)]).then(t.bind(t,3030))})),b=(0,s.lazy)((function(){return Promise.all([t.e(113),t.e(666),t.e(68)]).then(t.bind(t,8068))})),k=function(){var e=(0,a.$B)().url;return(0,x.jsx)(g.Z,{children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(I.Z,{}),children:(0,x.jsxs)(a.rs,{children:[(0,x.jsx)(a.AW,{exact:!0,path:"".concat(e,"/:categoryId/add-item"),children:(0,x.jsx)(p,{goBackUrl:e})}),(0,x.jsx)(a.AW,{exact:!0,path:"".concat(e,"/:inventoryItemId/edit-item"),children:(0,x.jsx)(b,{goBackUrl:e})})]})})})},N=function(){var e=(0,a.k6)(),n=(0,a.UO)().categoryId,t=(0,o.v9)((function(e){return e.categories.find((function(e){return e.id===n}))}),o.wU);return(0,s.useEffect)((function(){n&&!t&&e.push("/")}),[n,t]),(0,x.jsxs)("div",{children:[(0,x.jsx)(l.Z,{children:(0,x.jsxs)(r.Z,{children:[(0,x.jsx)(i.Z,{xs:24,sm:24,md:12,children:(0,x.jsx)(c.Z.Title,{children:null===t||void 0===t?void 0:t.title})}),(0,x.jsx)(i.Z,{xs:24,sm:24,md:12,className:"flex flex-row justify-end items-center",children:(0,x.jsx)(m,{categoryId:n})})]})}),(0,x.jsxs)("div",{children:[t&&(0,x.jsx)(Z,{category:t}),(0,x.jsx)(k,{})]})]})}}}]);
//# sourceMappingURL=702.3effffe5.chunk.js.map