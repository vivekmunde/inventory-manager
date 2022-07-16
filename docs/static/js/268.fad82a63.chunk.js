"use strict";(self.webpackChunkinventory_manager=self.webpackChunkinventory_manager||[]).push([[268],{3683:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(1413),l=n(3272),r=n(177),u=n(2791),o=n(8389),a=n(184),d=function(e){var t=e.fields,n=e.value,i=e.onChange;return(0,a.jsx)(l.Z.Item,{label:"Field title",children:(0,a.jsx)(o.Z,{defaultValue:n,value:n,onChange:function(e){i(e)},children:t.map((function(e){return(0,a.jsx)(o.Z.Option,{value:e.uiKey,children:e.title},e.uiKey)}))})})},c=n(3433),f=n(5984),s=n(7309),y=n(9286),v=u.memo((function(e){var t=e.onAdd;return(0,a.jsxs)(s.Z,{type:"default",onClick:function(){t()},children:[(0,a.jsx)(y.Z,{}),"Add field"]})})),x=n(732),h=n(5406),Z=u.memo((function(e){var t=e.value,n=e.canDelete,u=e.onChange,d=e.onDelete;return(0,a.jsx)(l.Z.Item,{children:(0,a.jsx)(r.Z,{value:t.title,onChange:function(e){t.title=e.target.value,u((0,i.Z)((0,i.Z)({},t),{},{title:e.target.value}))},addonBefore:(0,a.jsx)(o.Z,{defaultValue:t.type,value:t.type,onChange:function(e){u((0,i.Z)((0,i.Z)({},t),{},{type:e}))},style:{minWidth:"120px"},children:h.k.map((function(e){return(0,a.jsx)(o.Z.Option,{value:e.type,children:e.label},e.type)}))}),addonAfter:n&&(0,a.jsx)(s.Z,{type:"text",size:"small",shape:"circle",onClick:function(){d(t)},children:(0,a.jsx)(x.Z,{className:"font-color-secondary"})})})})})),p=function(e){var t=e.value,n=e.onChange,i=function(e){var i=t.findIndex((function(t){return t.uiKey===e.uiKey}));i>-1&&(t.splice(i,1,e),n((0,c.Z)(t)))},l=function(e){n(t.filter((function(t){return t.uiKey!==e.uiKey})))};return(0,a.jsxs)(u.Fragment,{children:[t.map((function(e){return(0,a.jsx)(Z,{value:e,canDelete:t.length>1,onChange:i,onDelete:l},e.uiKey)})),(0,a.jsx)(v,{onAdd:function(){n([].concat((0,c.Z)(t),[{id:void 0,uiKey:(0,f.x0)(),title:"",type:"ShortText"}]))}})]})},g=function(e){var t=e.values,n=e.onChange;return(0,a.jsxs)(l.Z,{layout:"vertical",children:[(0,a.jsx)(l.Z.Item,{label:"Category title",children:(0,a.jsx)(r.Z,{value:t.title,onChange:function(e){n((0,i.Z)((0,i.Z)({},t),{},{title:e.target.value}))},type:"text",placeholder:"Category title"})}),(0,a.jsx)(d,{value:t.fieldTitleUiKey,fields:t.fields,onChange:function(e){n((0,i.Z)((0,i.Z)({},t),{},{fieldTitleUiKey:e}))}}),(0,a.jsx)(p,{value:t.fields,onChange:function(e){var l=!e.find((function(e){return e.uiKey===t.fieldTitleUiKey}));n(l?(0,i.Z)((0,i.Z)({},t),{},{fields:e,fieldTitleUiKey:e[0].uiKey}):(0,i.Z)((0,i.Z)({},t),{},{fields:e}))}})]})}},2604:function(e,t,n){n.d(t,{a:function(){return i},o:function(){return l}});var i=function(e){var t,n,i=e.fields.map((function(e){return{id:e.id,uiKey:e.id,type:e.type,title:e.title}}));return{title:e.title,fields:i,fieldTitleUiKey:null!==(t=null===(n=i.find((function(t){return t.id===e.fieldTitleId})))||void 0===n?void 0:n.uiKey)&&void 0!==t?t:""}},l=function(e){return{title:e.title,fields:e.fields.map((function(e){return{id:e.id,type:e.type,title:e.title}})),fieldTitleIdIndex:e.fields.findIndex((function(t){return t.uiKey===e.fieldTitleUiKey}))}}},592:function(e,t,n){var i=n(9439),l=n(2791),r=n(9271),u=n(184);t.Z=function(e){var t=e.goBackUrl,n=e.children,o=(0,r.k6)(),a=(0,l.useState)(!1),d=(0,i.Z)(a,2),c=d[0],f=d[1],s={visible:c,placement:"right",closable:!1,maskClosable:!1,push:!1,destroyOnClose:!0,width:"auto",keyboard:!1,onClose:function(){f(!1)},afterVisibleChange:function(e){e||o.push(t)}};return(0,l.useEffect)((function(){f(!0)}),[]),(0,u.jsx)(l.Fragment,{children:n(s,(function(e){f(e)}))})}},268:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(1413),l=n(9439),r=n(7629),u=n(2380),o=n(7309),a=n(2791),d=n(732),c=n(3683),f=n(2604),s=n(3433),y=n(5984),v=n(5048),x=n(6552),h=n(1956),Z=function(){var e=(0,v.I0)();return function(t){var n=h.Z.getState(),l=function(e){var t=e.fields.map((function(e){return{id:(0,y.x0)(),type:e.type,title:e.title}}));return{id:(0,y.x0)(),slug:e.title.replace(/\s/,"-"),title:e.title,fields:t,fieldTitleId:t[e.fieldTitleIdIndex].id}}(t);return e((0,x.Z)((0,i.Z)((0,i.Z)({},n),{},{categories:[].concat((0,s.Z)(n.categories),[l])})))}},p=n(592),g=n(184),j=function(e){var t=e.goBackUrl,n=Z(),s=(0,a.useState)(function(){var e=(0,y.x0)();return{title:"",fields:[{id:void 0,uiKey:e,type:"ShortText",title:"Model"}],fieldTitleUiKey:e}}()),v=(0,l.Z)(s,2),x=v[0],h=v[1];return(0,g.jsx)(p.Z,{goBackUrl:t,children:function(e,t){return(0,g.jsx)(r.Z,(0,i.Z)((0,i.Z)({},e),{},{title:(0,g.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,g.jsx)(u.Z.Text,{strong:!0,children:"Add Category"}),(0,g.jsx)(o.Z,{type:"text",icon:(0,g.jsx)(d.Z,{}),onClick:function(){return t(!1)}})]}),footer:(0,g.jsx)("div",{className:"flex flex-row justify-end",children:(0,g.jsx)(o.Z,{type:"primary",onClick:function(){x.title&&!x.fields.find((function(e){var t;return 0===(null!==(t=e.title)&&void 0!==t?t:"").length}))&&(n((0,f.o)(x)),t(!1))},children:"Add"})}),children:(0,g.jsx)(c.Z,{values:x,onChange:function(e){h(e)}})}))}})}}}]);
//# sourceMappingURL=268.fad82a63.chunk.js.map