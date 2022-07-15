"use strict";(self.webpackChunkinventory_manager=self.webpackChunkinventory_manager||[]).push([[137],{8407:function(e,t,n){n.d(t,{Z:function(){return c}});n(2791);var r="styles_header__SE5mY",i=n(184),c=function(e){var t=e.children;return(0,i.jsx)("div",{className:"pb-4 ".concat(r),children:t})}},6552:function(e,t){t.Z=function(e){return{type:"ACTION",payload:e}}},5137:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(6106),i=n(914),c=n(2380),a=n(2791),l=n(8407),o=n(7309),s=n(9271),d=n(9286),u=n(184),x=function(){var e=(0,s.k6)(),t=(0,s.$B)().url;return(0,u.jsxs)(o.Z,{onClick:function(){e.push("".concat(t,"/add-category"))},children:[(0,u.jsx)(d.Z,{}),"Add New Category"]})},f=n(7305),h=n(7063),y=n(5048),j=n(2542),m=n(394),Z=n(3099),g=n(5406),v=n(5856),p=n(2622),b=n(1413),I=n(6552),k=n(3309),T=function(){var e=(0,y.I0)();return function(t){var n=k.Z.getState();return e((0,I.Z)((0,b.Z)((0,b.Z)({},n),{},{categories:n.categories.filter((function(e){return e.id!==t})),inventoryItems:n.inventoryItems.map((function(e){return(0,b.Z)((0,b.Z)({},e),{},{data:e.data.filter((function(e){return e.categoryFieldId!==t}))})}))})))}},C=function(e){var t=e.categoryId,n=T();return(0,u.jsx)(v.Z,{title:"Are you sure to delete the category?",onConfirm:function(){n(t)},okText:"Yes",cancelText:"No",children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(p.Z,{}),"Delete"]})})},N=n(1752),w=function(e){var t=e.categoryId,n=(0,s.k6)(),r=(0,s.$B)().url;return(0,u.jsxs)(o.Z,{onClick:function(){n.push("".concat(r,"/").concat(t,"/edit-category"))},children:[(0,u.jsx)(N.Z,{}),"Edit"]})},z=function(e){var t,n=e.category;return(0,u.jsxs)(f.Z,{size:"small",className:"mb-4 box-shadow",children:[(0,u.jsxs)(m.Z,{layout:"vertical",size:"small",colon:!1,children:[(0,u.jsx)(m.Z.Item,{label:(0,u.jsx)(c.Z.Text,{type:"secondary",children:"Category title"}),children:n.title}),(0,u.jsx)(m.Z.Item,{label:(0,u.jsx)(c.Z.Text,{type:"secondary",children:"Field title"}),children:null===(t=n.fields.find((function(e){return e.id===n.fieldTitleId})))||void 0===t?void 0:t.title}),n.fields.map((function(e){var t;return(0,u.jsx)(m.Z.Item,{label:(0,u.jsx)(c.Z.Text,{type:"secondary",children:e.title}),children:null===(t=g.k.find((function(t){return t.type===e.type})))||void 0===t?void 0:t.label},e.id)}))]}),(0,u.jsxs)(Z.Z,{className:"mt-1",direction:"horizontal",size:"small",children:[(0,u.jsx)(w,{categoryId:n.id}),(0,u.jsx)(C,{categoryId:n.id})]})]})},A=a.memo(z),B=function(){var e=(0,y.v9)((function(e){return e.categories}),y.wU);return e.length>0?(0,u.jsx)("div",{children:e.map((function(e){return(0,u.jsx)(A,{category:e},e.id)}))}):(0,u.jsx)(f.Z,{className:"box-shadow",children:(0,u.jsx)(h.ZP,{icon:(0,u.jsx)(j.Z,{}),title:"Categories are the core classification of the Inventory!",subTitle:"Please add a category to start managing your inventory."})})},S=a.memo(B),_=n(7860),P=n(8731),D=(0,a.lazy)((function(){return Promise.all([n.e(113),n.e(708),n.e(268)]).then(n.bind(n,268))})),U=(0,a.lazy)((function(){return Promise.all([n.e(113),n.e(708),n.e(633)]).then(n.bind(n,7633))})),$=function(){var e=(0,s.$B)().url;return(0,u.jsx)(P.Z,{children:(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)(_.Z,{}),children:(0,u.jsxs)(s.rs,{children:[(0,u.jsx)(s.AW,{exact:!0,path:"".concat(e,"/add-category"),children:(0,u.jsx)(D,{goBackUrl:e})}),(0,u.jsx)(s.AW,{exact:!0,path:"".concat(e,"/:categoryId/edit-category"),children:(0,u.jsx)(U,{goBackUrl:e})})]})})})},E=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(l.Z,{children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(i.Z,{xs:24,sm:24,md:12,children:(0,u.jsx)(c.Z.Title,{children:"Categories"})}),(0,u.jsx)(i.Z,{xs:24,sm:24,md:12,className:"flex flex-row justify-end items-center",children:(0,u.jsx)(x,{})})]})}),(0,u.jsx)(S,{}),(0,u.jsx)($,{})]})}},5406:function(e,t,n){n.d(t,{k:function(){return r}});var r=[{type:"ShortText",label:"Short text"},{type:"LongText",label:"Long text"},{type:"Number",label:"Number"},{type:"Date",label:"Date"}]}}]);
//# sourceMappingURL=137.9e839dde.chunk.js.map