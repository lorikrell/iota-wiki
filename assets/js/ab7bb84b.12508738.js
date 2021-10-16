"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71992],{2877:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=t(74034),a=t(79973),o=(t(67294),t(3905)),i=t(31137),u=t(71871),c=["components"],s={},l="Thunk Functions",d={unversionedId:"guide/schema/thunks",id:"guide/schema/thunks",isDocsHomePage:!1,title:"Thunk Functions",description:"In computer programming, a thunk is a function used to inject a calculation into another",source:"@site/external/wasp/documentation/docs/guide/schema/thunks.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/thunks",permalink:"/wasp/guide/schema/thunks",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Function Results",permalink:"/wasp/guide/schema/results"},next:{title:"View-Only Functions",permalink:"/wasp/guide/schema/views"}},f=[],p={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"thunk-functions"},"Thunk Functions"),(0,o.kt)("p",null,"In computer programming, a thunk is a function used to inject a calculation into another\nfunction. Thunks are used to insert operations at the beginning or end of the other\nfunction to adapt it to changing requirements. If you remember from\nthe ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/context"},"function call context")," section, the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_load")," function and skeleton\nfunction signatures looked like this:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc("divide", funcDivide)\n    exports.AddFunc("init", funcInit)\n    exports.AddFunc("member", funcMember)\n    exports.AddFunc("setOwner", funcSetOwner)\n    exports.AddView("getFactor", viewGetFactor)\n    exports.AddView("getOwner", viewGetOwner)\n}\n\nfunc funcDivide(ctx wasmlib.ScFuncContext) {}\nfunc funcInit(ctx wasmlib.ScFuncContext) {}\nfunc funcMember(ctx wasmlib.ScFuncContext) {}\nfunc funcSetOwner(ctx wasmlib.ScFuncContext) {}\nfunc viewGetFactor(ctx wasmlib.ScViewContext) {}\nfunc viewGetOwner(ctx wasmlib.ScViewContext) {}\n'))),(0,o.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func("divide", func_divide);\n    exports.add_func("init", func_init);\n    exports.add_func("member", func_member);\n    exports.add_func("setOwner", func_set_owner);\n    exports.add_view("getFactor", view_get_factor);\n    exports.add_view("getOwner", view_get_owner);\n}\n\nfn func_divide(ctx: &ScFuncContext) {}\nfn func_init(ctx: &ScFuncContext) {}\nfn func_member(ctx: &ScFuncContext) {}\nfn func_set_owner(ctx: &ScFuncContext) {}\nfn view_get_factor(ctx: &ScViewContext) {}\nfn view_get_owner(ctx: &ScViewContext) {}\n')))),(0,o.kt)("p",null,"Now that the schema tool introduces a bunch of automatically generated features, that is\nno longer sufficient. Luckily, the schema tool also generates thunks to inject these\nfeatures, before calling the function implementations that are maintained by the user.\nHere is the new ",(0,o.kt)("inlineCode",{parentName:"p"},"on_load")," function for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc(FuncDivide, funcDivideThunk)\n    exports.AddFunc(FuncInit, funcInitThunk)\n    exports.AddFunc(FuncMember, funcMemberThunk)\n    exports.AddFunc(FuncSetOwner, funcSetOwnerThunk)\n    exports.AddView(ViewGetFactor, viewGetFactorThunk)\n    exports.AddView(ViewGetOwner, viewGetOwnerThunk)\n\n    for i, key := range keyMap {\n        idxMap[i] = key.KeyID()\n    }\n}\n"))),(0,o.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func(FUNC_DIVIDE, func_divide_thunk);\n    exports.add_func(FUNC_INIT, func_init_thunk);\n    exports.add_func(FUNC_MEMBER, func_member_thunk);\n    exports.add_func(FUNC_SET_OWNER, func_set_owner_thunk);\n    exports.add_view(VIEW_GET_FACTOR, view_get_factor_thunk);\n    exports.add_view(VIEW_GET_OWNER, view_get_owner_thunk);\n\n    unsafe {\n        for i in 0..KEY_MAP_LEN {\n            IDX_MAP[i] = get_key_id_from_string(KEY_MAP[i]);\n        }\n    }\n}\n")))),(0,o.kt)("p",null,"As you can see instead of calling the user functions directly, we now call thunk versions\nof these functions. We also added initialization of a local array that holds all key IDs\nnegotiated with the host, so that we can simply use (generated) indexes into this array\ninstead of having to negotiate these IDs each time we need them. The rest of the generated\ncode will use those indexes whenever a known key is used."),(0,o.kt)("p",null,"Here is an example of a thunk function for the ",(0,o.kt)("inlineCode",{parentName:"p"},"setOwner")," contract function. You can\nexamine the other thunks that all follow the same pattern in the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.rs"),":"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type SetOwnerContext struct {\n    Params ImmutableSetOwnerParams\n    State  MutableDividendState\n}\n\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n    // only defined owner of contract can change owner\n    access := ctx.State().GetAgentID(wasmlib.Key("owner"))\n    ctx.Require(access.Exists(), "access not set: owner")\n    ctx.Require(ctx.Caller() == access.Value(), "no permission")\n\n    f := &SetOwnerContext{\n        Params: ImmutableSetOwnerParams{\n           id: wasmlib.OBJ_ID_PARAMS,\n        },\n        State: MutableDividendState{\n            id: wasmlib.OBJ_ID_STATE,\n        },\n    }\n    ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")\n    funcSetOwner(ctx, f)\n    ctx.Log("dividend.funcSetOwner ok")\n}\n'))),(0,o.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct SetOwnerContext {\n    params: ImmutableSetOwnerParams,\n    state:  MutableDividendState,\n}\n\nfn func_set_owner_thunk(ctx: &ScFuncContext) {\n    ctx.log("dividend.funcSetOwner");\n    // only defined owner of contract can change owner\n    let access = ctx.state().get_agent_id("owner");\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller() == access.value(), "no permission");\n\n    let f = SetOwnerContext {\n        params: ImmutableSetOwnerParams {\n            id: OBJ_ID_PARAMS,\n        },\n        state: MutableDividendState {\n            id: OBJ_ID_STATE,\n        },\n    };\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    func_set_owner(ctx, &f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n')))),(0,o.kt)("p",null,"The thunk first logs the contract and function name to show the call has started. Then it\nsets up the access control for the function according to the schema definition file.\nIn this case it retrieves the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," state variable, requires that it exists, and then\nrequires that the caller() of the function equals that value. Any failing requirement will\npanic out of the function with an error message. So this code makes sure only the owner of\nthe contract can call this function."),(0,o.kt)("p",null,"Next we set up a strongly typed function-specific context structure. First we add the\nfunction-specific immutable ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," interface structure, which is only present when the\nfunction can have parameters. Then we add the contract-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," interface\nstructure. In this case it is mutable because setOwner is a Func. For Views this will be\nan immutable state interface. Finally, we add the function-specific mutable ",(0,o.kt)("inlineCode",{parentName:"p"},"results"),"\ninterface structure, which is only present when the function returns results. Obviously,\nthis is not the case for this setOwner function."),(0,o.kt)("p",null,"Now we get to the point where we can use the function-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," interface to check\nfor mandatory parameters. Each mandatory parameter is required to exist, or else we will\npanic out of the function with an error message."),(0,o.kt)("p",null,"With the automated checks and setup completed we now call the function implementation that\nis maintained by the user. After the user function has completed we log that the contract\nfunction has completed successfully. Remember that any error within the user function will\ncause a panic, so this logging will never happen in that case."),(0,o.kt)("p",null,"In the next section we will look at the specifics of view functions."))}m.isMDXComponent=!0},71871:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},31137:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(74034),a=t(67294),o=t(5730),i=t(54179);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(29085),s=t(86010),l="tabItem_1uMI";function d(e){var n,t,r,o=e.lazy,i=e.block,d=e.defaultValue,f=e.values,p=e.groupId,m=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,c.lx)(w,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==x&&!w.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),b=g.tabGroupChoices,k=g.setTabGroupChoices,y=(0,a.useState)(x),_=y[0],O=y[1],T=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var N=b[p];null!=N&&N!==_&&w.some((function(e){return e.value===N}))&&O(N)}var C=function(e){var n=e.currentTarget,t=T.indexOf(n),r=w[t].value;r!==_&&(S(n),O(r),null!=p&&k(p,r))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},w.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":_===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:C,onClick:C},null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function f(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},54179:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),p=a,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);