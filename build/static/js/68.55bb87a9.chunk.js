"use strict";(self.webpackChunkinventory_manager=self.webpackChunkinventory_manager||[]).push([[68],{2590:function(e,n,t){var i=t(1413),r=t(3433),l=t(3272),o=t(177),u=t(1666),a=t(2426),c=t.n(a),d=t(2791),v=t(184);n.Z=function(e){var n=e.category,t=e.values,a=e.onChange;return(0,v.jsx)(l.Z,{layout:"vertical",colon:!1,style:{minWidth:"280px"},children:n.fields.map((function(e){var n,s,f,h=t.find((function(n){return n.categoryFieldId===e.id}));if(!h)return null;var y=function(n){a([].concat((0,r.Z)(t.filter((function(n){return n.categoryFieldId!==e.id}))),[(0,i.Z)((0,i.Z)({},h),{},{value:n})]))};return(0,v.jsx)(d.Fragment,{children:(0,v.jsxs)(l.Z.Item,{label:e.title,children:["ShortText"===e.type&&(0,v.jsx)(o.Z,{value:null!==(n=h.value)&&void 0!==n?n:"",onChange:function(e){y(e.target.value)},type:"text",placeholder:e.title}),"LongText"===e.type&&(0,v.jsx)(o.Z.TextArea,{value:null!==(s=h.value)&&void 0!==s?s:"",onChange:function(e){y(e.target.value)},placeholder:e.title}),"Number"===e.type&&(0,v.jsx)(o.Z,{value:null!==(f=h.value)&&void 0!==f?f:"",onChange:function(e){y(e.target.value)},type:"number",placeholder:e.title}),"Date"===e.type&&(0,v.jsx)(u.Z,{format:"DD MMM 'YY",style:{width:"100%"},value:h.value&&h.value.length>0?c()(Number(h.value)):void 0,allowClear:!1,onChange:function(e){var n;y(null!==(n=null===e||void 0===e?void 0:e.valueOf().toString())&&void 0!==n?n:"")}})]})},e.id)}))})}},592:function(e,n,t){var i=t(9439),r=t(2791),l=t(9271),o=t(184);n.Z=function(e){var n=e.goBackUrl,t=e.children,u=(0,l.k6)(),a=(0,r.useState)(!1),c=(0,i.Z)(a,2),d=c[0],v=c[1],s={visible:d,placement:"right",closable:!1,maskClosable:!1,push:!1,destroyOnClose:!0,width:"auto",onClose:function(){v(!1)},afterVisibleChange:function(e){e||u.push(n)}};return(0,r.useEffect)((function(){v(!0)}),[]),(0,o.jsx)(r.Fragment,{children:t(s,(function(e){v(e)}))})}},8068:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var i=t(1413),r=t(9439),l=t(7629),o=t(2380),u=t(7309),a=t(2791),c=t(5048),d=t(9271),v=t(732),s=t(2590),f=t(592),h=t(6552),y=t(3309),g=function(){var e=(0,c.I0)();return function(n){var t=y.Z.getState();return e((0,h.Z)((0,i.Z)((0,i.Z)({},t),{},{inventoryItems:t.inventoryItems.map((function(e){return e.id===n.inventoryItemId?(0,i.Z)((0,i.Z)({},e),{},{data:n.inventoryItemData}):e}))})))}},x=t(184),Z=function(e){var n,t=e.goBackUrl,h=(0,d.UO)().inventoryItemId,y=(0,c.v9)((function(e){return e.inventoryItems.find((function(e){return e.id===h}))}),c.wU),Z=(0,c.v9)((function(e){return y?e.categories.find((function(e){return e.id===y.categoryId})):void 0}),c.wU),m=g(),p=(0,a.useState)((null!==(n=null===Z||void 0===Z?void 0:Z.fields)&&void 0!==n?n:[]).map((function(e){var n,t;return{categoryFieldId:e.id,value:null!==(n=null===y||void 0===y||null===(t=y.data.find((function(n){return n.categoryFieldId===e.id})))||void 0===t?void 0:t.value)&&void 0!==n?n:""}}))),j=(0,r.Z)(p,2),I=j[0],C=j[1];return(0,x.jsx)(f.Z,{goBackUrl:t,children:function(e,n){return(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({},e),{},{title:(0,x.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,x.jsxs)(o.Z.Text,{strong:!0,children:["Edit ",null===Z||void 0===Z?void 0:Z.title]}),(0,x.jsx)(u.Z,{type:"text",icon:(0,x.jsx)(v.Z,{}),onClick:function(){return n(!1)}})]}),footer:(0,x.jsx)("div",{className:"flex flex-row justify-end",children:(0,x.jsx)(u.Z,{type:"primary",onClick:function(){m({inventoryItemId:h,inventoryItemData:I}),n(!1)},children:"Update"})}),children:Z?(0,x.jsx)(s.Z,{values:I,category:Z,onChange:function(e){C(e)}}):null}))}})}}}]);
//# sourceMappingURL=68.55bb87a9.chunk.js.map