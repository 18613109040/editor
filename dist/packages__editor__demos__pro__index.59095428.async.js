(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"74yu":function(e,t,a){},Eh9v:function(e,t,a){e.exports={"ant-card-head":"ant-card-head___3O4yq","ant-card-head-title":"ant-card-head-title___QOCM0",variable:"variable___2xbS1","ant-table-cell":"ant-table-cell___FOqQ9","result-code-box":"result-code-box___I7NDO",title:"title___34BsD","ant-card-body":"ant-card-body___2tUpI","pro-demo":"pro-demo___aaQUg","left-meun":"left-meun___1AjvC","center-editor":"center-editor___2n2mo","right-menu":"right-menu___26Ciy","func-table-col":"func-table-col___3ZD8F","func-table-text":"func-table-text___2an24","params-modal":"params-modal___1mLvk",CodeMirror:"CodeMirror___37Vgk","json-editor-select":"json-editor-select___30Az6","addon-input-number":"addon-input-number___2-gqr","ant-input-number":"ant-input-number___pOebj","ant-select":"ant-select___3udsK","ant-select-selector":"ant-select-selector___3XE2e",btn:"btn___3YgyE"}},nqOY:function(e,t,a){"use strict";a.r(t);a("q+9F");var n=a("hWdR"),r=a("GZha"),o=a("ZZRV"),c=a.n(o),i=a("sMcp"),l=a("pgy8"),s=(a("TEVm"),a("xiN7")),u=a("YhPB");window.HY={Modal:s["a"],info:console.info,R:u};a("RHH8");var m=a("M73O"),d=(a("Ac8A"),a("X3Sf")),p=[{key:"String",value:"\u5b57\u7b26\u4e32"},{key:"Number",value:"\u6570\u5b57"},{key:"Array",value:"\u6570\u7ec4"},{key:"Object",value:"\u5bf9\u8c61"}],h={key:"0",title:"HY",children:[{key:"0-1",title:"\u5e38\u7528",children:[{key:"0-1-1",title:"\u4e2d\u63a7\u53f0\u8f93\u51fa\u65e5\u5fd7",name:"HY.info('xxxx');",description:'\nHY.info(params);\n\u529f\u80fd: \u5728\u63a7\u5236\u53f0\u6253\u5370info\u8f93\u51fa\u65e5\u5fd7\n@params \u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u6216\u8005\u5bf9\u8c61\n\u4f7f\u7528: HY.info("hello, world")\n'},{key:"0-1-2",title:"\u9519\u8bef\u63d0\u9192",name:"HY.Modal.warning({title: 'xxxx'});",description:'\nHY.Modal.warning(params);\n\u529f\u80fd: \u5728\u63a7\u5236\u53f0\u6253\u5370info\u8f93\u51fa\u65e5\u5fd7\n@params object {\ntitle: string;  \u6807\u9898\ncontent: string | ReactNode; \u5185\u5bb9\ncancelText: string; \u53d6\u6d88\u6309\u94ae\u6587\u5b57\nokText: string; \u786e\u8ba4\u6309\u94ae\u6587\u5b57\nwidth: string | number; \u5bbd\u5ea6\nzIndex: number; \u8bbe\u7f6e Modal \u7684 z-index\nmaskClosable: boolean; \u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed\nonCancel: function(close); \u53d6\u6d88\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u5173\u95ed\u51fd\u6570\nonOk: \u70b9\u51fb\u786e\u5b9a\u56de\u8c03\n}\n\u4f7f\u7528:\nHY.Modal.warning({\ntitle: "\u6d4b\u8bd5\u8b66\u544a",\ncontent: "\u5185\u5bb9",\nonOk: function() { console.log("onOk") }\n})\n'},{key:"0-1-3",title:"\u6c42\u548c",name:"HY.R.add(1,2);",description:"\nHY.R.add(number1, number2, ...numbern);\n\u529f\u80fd: \u6c42\u548c\n@params number1\n\u4f7f\u7528: HY.R.add(1,2)\n"}]}]},y=(a("74yu"),e=>{var t=Object(o["useState"])(""),a=Object(r["a"])(t,2),n=a[0],l=a[1],s=e.onSelect,u=(e,t)=>{t.node.description&&l(t.node.description),s(t)};return c.a.createElement("div",{className:"tree-menu"},c.a.createElement(m["a"],{title:"\u529f\u80fd\u51fd\u6570",style:{width:300}},c.a.createElement(d["a"],{height:200,onSelect:u,treeData:[h],defaultExpandAll:!0})),c.a.createElement(m["a"],{title:"\u51fd\u6570\u8bf4\u660e",style:{width:300}},c.a.createElement(i["a"],{value:n,mode:"javascript",readOnly:"nocursor",height:"400",lint:!1,hint:!1,renderToolBar:()=>c.a.createElement(c.a.Fragment,null)})))}),v=c.a.memo(y),f=(a("5H9D"),a("dcU9")),g=a("55MS"),b=(a("rjej"),a("WPl5")),O=(a("GOSq"),a("HiKu")),E=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,w=/([^\s,]+)/g;function _(e){var t=e.toString().replace(E,""),a=t.slice(t.indexOf("(")+1,t.indexOf(")")).match(w);return a||[]}function j(e,t){var a=e instanceof Object,n=t instanceof Object;if(!a||!n)return e===t;if(Object.keys(e).length!==Object.keys(t).length)return!1;var r=Object.keys(e);for(var o in r){o=r[o];var c=e[o]instanceof Object,i=t[o]instanceof Object;if(c&&i)j(e[o],t[o]);else if(e[o]!==t[o])return!1}return!0}function P(e){var t=/("([^\\\"]*(\\.)?)*")|('([^\\\']*(\\.)?)*')|(\/{2,}.*?(\r|\n|$))|(\/\*(\n|.)*?\*\/)/g;return e.replace(t,e=>/^\/{2,}/.test(e)||/^\/\*/.test(e)?"":e).trim()}function x(e){var t=P(e);return t.substring(t.indexOf("{")+1,t.lastIndexOf("}"))}a("O/7z");var C=a("HzrB"),k=(a("veYD"),a("6gjD")),S=(a("jhHa"),a("UGN5")),M=(a("cy6x"),a("o0sS")),N=M["a"].Option;window["jsonlint"]=a("HdY0");var F=e=>{var t=e.onSelectChange,n=e.type,r=e.value,o=e.onChange,l=(e,t)=>{o&&o(e.getValue())};return c.a.createElement(c.a.Fragment,null,c.a.createElement(i["a"],{value:r,mode:"application/json",gutters:["CodeMirror-lint-markers","CodeMirror-linenumbers","CodeMirror-foldgutter"],theme:"base16-light",renderToolBar:()=>c.a.createElement(c.a.Fragment,null),onChange:l,cusResourceList:{mode:"application/json",dependentLint:()=>a.e(4).then(a.t.bind(null,"WcTO",7))}}),c.a.createElement("div",{className:"json-editor-select"},c.a.createElement(H,{type:n,onChange:t})))},H=e=>{var t=e.onChange,a=e.type;return c.a.createElement(M["a"],{style:{width:100},onChange:e=>t&&t(e),defaultValue:a},p.map((e,t)=>c.a.createElement(N,{key:t,value:e.key},e.value)))},T=e=>{var t=e.onChange,a=e.onSelectChange,n=e.type,r=e.value;return c.a.createElement("div",{className:"addon-input-number"},c.a.createElement(S["a"],{defaultValue:r,onChange:t}),c.a.createElement(H,{type:n,onChange:a}))},D=e=>{var t=e.visible,a=e.params,i=e.onCancel,l=e.onFinish,u=Object(o["useState"])(a),m=Object(r["a"])(u,2),d=m[0],p=m[1],h=Object(o["useState"])(""),y=Object(r["a"])(h,2),v=y[0],f=y[1];Object(o["useEffect"])(()=>{p(a)},[t]);var g=()=>{i&&i()},b=()=>{var e=d.type,t=d.value;if(t||0===t){if("Array"===e||"Object"===e)try{var a=JSON.parse(t);if(Object.prototype.toString.call(a)!=="[object ".concat(e,"]"))return void f("\u6570\u636e\u683c\u5f0f\u4e0d\u5bf9")}catch(v){return void f("\u6570\u636e\u683c\u5f0f\u4e0d\u5bf9")}l&&l(d)}else f("\u503c\u4e0d\u80fd\u4e3a\u7a7a")},O=e=>{f(""),p(Object.assign({},d,{type:e,value:""}))},E=e=>{p(Object.assign(d,{value:e}))},w=e=>{var t=e.type,a=e.value;return"String"===t?c.a.createElement(k["a"],{defaultValue:a,addonAfter:c.a.createElement(H,{type:t,onChange:O}),onChange:e=>E(e.target.value)}):"Number"===t?c.a.createElement(T,{value:a,type:t,onSelectChange:O,onChange:E}):c.a.createElement(F,{value:a,type:t,onSelectChange:O,onChange:E})};return c.a.createElement(s["a"],{title:"\u8fd0\u884c\u53c2\u6570\u914d\u7f6e",visible:t,footer:null,maskClosable:!1,destroyOnClose:!0,className:"params-modal",onCancel:g},c.a.createElement(w,d),v&&c.a.createElement(C["a"],{message:v,type:"error",showIcon:!0}),c.a.createElement("div",{className:"btn"},c.a.createElement(n["a"],{type:"primary",onClick:b},"\u786e\u5b9a")))},Y=c.a.memo(D),R=O["a"].TabPane;class A extends o["PureComponent"]{constructor(e){super(e),this.funcColumns=[{title:"\u5b57\u6bb5",dataIndex:"key",key:"key"},{title:"\u53c2\u6570\u540d",dataIndex:"name",key:"name"},{title:"\u53c2\u6570\u503c",dataIndex:"value",key:"value",render:(e,t,a)=>c.a.createElement("div",{key:a,className:"func-table-col"},c.a.createElement(b["a"],{placement:"topLeft",title:e},c.a.createElement("span",{className:"func-table-text"},e)),c.a.createElement("a",{onClick:()=>this.handleEidtValue(e,t,a)},"\u7f16\u8f91"))}],this.handleFinsh=e=>{var t=e.index,a=this.state.activeKey;this.state[a]["".concat(t)]=e,this.setState({visible:!1,["".concat(a)]:[...this.state[a]]})},this.handleTabsChange=e=>{this.setState({activeKey:e})},this.handleCancel=()=>{this.setState({visible:!1})},this.getCurrentParmas=()=>{var e=this.state,t=e.currentFuncParams,a=e.currentPageParams,n=e.currentSysParams;return[...t,...a,...n]},this.state={currentFuncParams:[],currentPageParams:[{key:"orderTime",name:"\u4e0b\u5355\u65f6\u95f4",value:"2020-3-8",type:"String"},{key:"contact",name:"\u8054\u7cfb\u4eba",value:"\u5f20\u4e09",type:"String"}],currentSysParams:[{key:"sysTime",name:"\u7cfb\u7edf\u65f6\u95f4",value:(new Date).getTime(),type:"String"},{key:"user",name:"\u7cfb\u7edf\u7528\u6237",value:"\u7ba1\u7406\u5458",type:"String"}],visible:!1,changeParams:{},activeKey:"currentFuncParams"}}handleEidtValue(e,t,a){this.setState({visible:!0,changeParams:Object(g["a"])(Object(g["a"])({},t),{},{index:a})})}getParmasData(){var e=[],t=this.props.params;return t.map(t=>{e.push({key:t,name:"\u53c2\u6570".concat(t),value:"",type:"String"})}),e}componentDidUpdate(e){if(!j(e.params,this.props.params)){var t=this.getParmasData();this.setState({currentFuncParams:t})}}render(){var e=this.state,t=e.currentFuncParams,a=e.visible,n=e.changeParams,r=e.currentPageParams,o=e.currentSysParams,i=e.activeKey;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"variable"},c.a.createElement(m["a"],{title:"\u9875\u9762\u53d8\u91cf",style:{width:300}},c.a.createElement(O["a"],{onChange:this.handleTabsChange,activeKey:i},c.a.createElement(R,{tab:"\u5f53\u524d\u51fd\u6570",key:"currentFuncParams"},c.a.createElement(f["a"],{dataSource:t,columns:this.funcColumns,size:"small",pagination:!1,locale:{emptyText:"\u672a\u83b7\u53d6\u5230\u51fd\u6570\u4efb\u4f55\u53c2\u6570"}})),c.a.createElement(R,{tab:"\u5f53\u524d\u754c\u9762",key:"currentPageParams"},c.a.createElement(f["a"],{dataSource:r,columns:this.funcColumns,size:"small",pagination:!1,locale:{emptyText:"\u672a\u83b7\u53d6\u5230\u51fd\u6570\u4efb\u4f55\u53c2\u6570"}})),c.a.createElement(R,{tab:"\u7cfb\u7edf\u53d8\u91cf",key:"currentSysParams"},c.a.createElement(f["a"],{dataSource:o,columns:this.funcColumns,size:"small",pagination:!1,locale:{emptyText:"\u672a\u83b7\u53d6\u5230\u51fd\u6570\u4efb\u4f55\u53c2\u6570"}}))))),c.a.createElement(Y,{onFinish:this.handleFinsh,onCancel:this.handleCancel,visible:a,params:n}))}}var V,K=A,z=a("Eh9v"),B=a.n(z),I=()=>{var e=Object(o["useState"])([]),t=Object(r["a"])(e,2),a=t[0],s=t[1],u=Object(o["useState"])(!1),m=Object(r["a"])(u,2),d=(m[0],m[1],Object(o["useState"])("")),p=Object(r["a"])(d,2),h=p[0],y=p[1],f=Object(o["useRef"])(null),g=e=>{var t=e.node.name;if(t&&V){var a=V.getCursor();V.replaceRange(t,a,a,"+insert"),V.setCursor({line:a.line,ch:a.ch+1})}},b=(e,t)=>{var n=_(e.getValue());(n.length>0||0===n.length&&1===a.length)&&s(n)},O=()=>{var e=f.current.getCurrentParmas(),t=E(e),a=x(V.getValue());console.dir(t);var n=Object(l["a"])(t),r=n(a);y(r)},E=e=>{var t={};return e.map(e=>{var a=e.key,n=e.value;t["".concat(a)]=n}),t};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:B.a["pro-demo"]},c.a.createElement("div",{className:B.a["left-meun"]},c.a.createElement(K,{params:a,ref:f}),c.a.createElement(n["a"],{onClick:O},"\u8fd0\u884c"),c.a.createElement("div",{className:"result-code-box"},c.a.createElement("div",{className:"title"},"\u8f93\u51fa\u7ed3\u679c: "),c.a.createElement("div",null,h))),c.a.createElement("div",{className:B.a["center-editor"]},c.a.createElement(i["a"],{value:"function main() {}",mode:"javascript",renderSelectMode:()=>c.a.createElement(c.a.Fragment,null),gutters:["CodeMirror-lint-markers","CodeMirror-linenumbers","CodeMirror-foldgutter"],getEditor:e=>V=e,hintOptions:{completeSingle:!1,keywords:["orderTime","contact","sysTime","user"]},onChange:b})),c.a.createElement("div",{className:B.a["right-menu"]},c.a.createElement(v,{onSelect:g}))))};t["default"]=I},pgy8:function(e,t,a){"use strict";function n(e){return e.filter((function(e){return!(e in this)&&(this[e]=!0)}),{})}function r(e){var t=/^function\b\s[A-Z].*/,a=/^class\b/;return e.prototype&&e.prototype.constructor===e&&Object.getOwnPropertyNames(e.prototype).length>1||t.test(e.toString())||a.test(e.toString())}function o(e){return 0===e.name.indexOf("bound ")&&!e.hasOwnProperty("prototype")}a.d(t,"a",(function(){return f}));var c="function"===typeof document.all&&"undefined"===typeof document.all,i=c?e=>"function"===typeof e&&"undefined"!==typeof e:e=>"function"===typeof e;function l(e){var t=new Map,a={};return Object.getOwnPropertyNames(e).filter(t=>{var a=Object.getOwnPropertyDescriptor(e,t);return!(null===a||void 0===a?void 0:a.configurable)}).forEach(n=>{var r=Object.getOwnPropertyDescriptor(e,n);if(r){var o=Object.prototype.hasOwnProperty.call(r,"get");"top"!==n&&"self"!==n&&"window"!==n&&"document"!==n||(r.configurable=!0,o||(r.writable=!0)),o&&t.set(n,!0),Object.defineProperty(a,n,Object.freeze(r))}}),{fakeWindow:a,propertiesWithGetter:t}}var s=Symbol("bound value"),u=new Map,m=new Map;function d(e,t){if(i(t)&&!o(t)&&!r(t)){if(t[s])return t[s];var a=t.bind(e);return Object.keys(t).forEach(e=>a[e]=t[e]),Object.defineProperty(t,s,{enumerable:!1,value:a}),a}return t}function p(e){var t=m.get(e);if(!t){var a=e();return m.set(e,a),a}return t}function h(e,t){var a=u.get(e);if(a)return a[t]}var y={undefined:!0,Array:!0,Object:!0,String:!0,Boolean:!0,Math:!0,eval:!0,Number:!0,Symbol:!0,parseFloat:!0,Float32Array:!0};class v{constructor(e,t){this.proxy=void 0,this.options=void 0,this.context=void 0,this.options=t,this.context=e,this.proxy=this.createProxy()}createProxy(){var e=this.options&&this.getBlackMap()||{},t=Object.assign({},window,this.context),a=l(window),r=a.fakeWindow,o=a.propertiesWithGetter,c=new Map,i=e=>r.hasOwnProperty(e)||t.hasOwnProperty(e),s=new Proxy(Object.assign(r,this.context),{set(e,t,a,n){return e["".concat(t)]=a,!0},get(a,n){if(!e.hasOwnProperty(n)){if(n===Symbol.unscopables)return y;if("top"===n||"window"===n||"self"===n)return s;if("hasOwnProperty"===n)return i;var r=h(s,n);if(r)return p(r);var c=o.has(n)?t[n]:a[n]||t[n];return d(t,c)}console.error("\u5c5e\u6027".concat(n,"\u88ab\u62e6\u622a"))},has(e,a){return a in y||a in e||a in t},getOwnPropertyDescriptor(e,a){if(e.hasOwnProperty(a)){var n=Object.getOwnPropertyDescriptor(e,a);return c.set(a,"target"),n}if(t.hasOwnProperty(a)){var r=Object.getOwnPropertyDescriptor(t,a);return c.set(a,"context"),r}},ownKeys(e){return n(Reflect.ownKeys(t).concat(Reflect.ownKeys(e)))},defineProperty(e,a,n){var r=c.get(a);switch(r){case"context":return Reflect.defineProperty(t,a,n);default:return Reflect.defineProperty(e,a,n)}},deleteProperty(e,t){return!e.hasOwnProperty(t)||(delete e[t],!0)}});return s}getBlackMap(){for(var e={},t=this.options.blackList,a=void 0===t?[]:t,n=0;n<a.length;n++){var r=a[n];e[r]=!0}return e}}function f(e,t){window.Proxy&&(e=new v(e,{}).proxy);var a=t=>{try{return new Function("context","with (context) { return (function(){ return ".concat(t,"})()}"))(e)}catch(a){return a}};return a.context=e,a.exec=a,a}}}]);