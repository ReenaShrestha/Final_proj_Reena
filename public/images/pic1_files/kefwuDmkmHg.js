if (self.CavalryLogger) { CavalryLogger.start_js(["2ALjs"]); }

__d("FocusGroup.react",["FocusManager.react","React","ReactEventsFocus","ReactEventsKeyboard","react","setElementCanTab"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("FocusManager.react").focusElement,i=b("React").useRef,j=b("ReactEventsFocus").useFocusWithin,k=b("ReactEventsKeyboard").useKeyboard;function l(a,c,d,e){c=c.queryFirstNode(a);c!==null&&(b("setElementCanTab")(c,!0),h(c,e),d.preventDefault())}var m=5;function n(a,b){a=a.getChildren();if(a!==null){var c=a.indexOf(b);b=p(b).wrap;c=r(a,c-1);return!c&&b?r(a,a.length-1):c}return null}function o(a,b){a=a.getChildren();if(a!==null){var c=a.indexOf(b);b=p(b).wrap;c=q(a,c+1);return!c&&b?q(a,0):c}return null}function p(a){a=a.getParent();if(a!==null){a=a.getProps();if(a&&a.type==="group")return a}return{}}function q(a,b){__p&&__p();var c=a.length;if(b>c)return null;b=b;while(b<c){var d=a[b];if(d.getProps().disabled!==!0)return d;b++}return null}function r(a,b){b=b;while(b>=0){var c=a[b];if(c.getProps().disabled!==!0)return c;b--}return null}function s(a){var b=a.altKey,c=a.ctrlKey,d=a.metaKey;a=a.shiftKey;return b===!0||c===!0||d===!0||a===!0}function a(a){__p&&__p();var c=(g||(g=b("react"))).unstable_createScope();function d(a){var d=a.children,e=a.portrait,f=a.wrap,h=a.tabScopeQuery,i=a.allowModifiers;a=a.pageJumpSize;a=a===void 0?m:a;return(g||(g=b("react"))).jsx(c,{type:"group",portrait:e,wrap:f,tabScopeQuery:h,allowModifiers:i,pageJumpSize:a,children:d})}function e(d){__p&&__p();var e=d.children,f=d.disabled,h=d.onKeyDown,m=d.onFocusWithinChange;d=d.onFocusWithinVisibleChange;var t=i(null);m=j({onFocusWithinChange:m,onFocusWithinVisibleChange:d});d=k({onKeyDown:function(c){__p&&__p();var d=t.current;if(d!==null){var e=d.getParent(),f=e&&e.getProps();if(e!==null&&f.type==="group"){f=f.portrait;var g=c.key;if(g==="Tab"){var i=p(d).tabScopeQuery;if(i){var j=d.getParent();if(j){var k=document.activeElement;j=j.queryAllNodes(i);for(var i=0;i<j.length;i++){var m=j[i];m!==k?b("setElementCanTab")(m,!1):b("setElementCanTab")(m,!0)}}}c.continuePropagation();return}if(s(c)){m=p(d).allowModifiers;if(!m){c.continuePropagation();return}}switch(g){case"Home":k=e.getChildren()||[];i=q(k,0);if(i){l(a,i,c,!1);return}break;case"End":j=e.getChildren()||[];m=r(j,j.length-1);if(m){l(a,m,c,!1);return}break;case"PageUp":g=e.getChildren()||[];k=e.getProps().pageJumpSize;i=g.indexOf(d);j=q(g,Math.max(0,i-k));if(j){l(a,j,c,!1);return}break;case"PageDown":m=e.getChildren()||[];g=e.getProps().pageJumpSize;i=m.indexOf(d);k=r(m,Math.min(m.length-1,i+g));if(k){l(a,k,c,!1);return}break;case"ArrowUp":if(f){j=e.getChildren()||[];m=c.metaKey||c.ctrlKey?q(j,0):n(e,d);if(m){l(a,m,c,!0);return}}break;case"ArrowDown":if(f){i=e.getChildren()||[];g=c.metaKey||c.ctrlKey?r(i,i.length-1):o(e,d);if(g){l(a,g,c,!0);return}}break;case"ArrowLeft":if(!f){k=e.getChildren()||[];j=c.metaKey||c.ctrlKey?q(k,0):n(e,d);if(j){l(a,j,c,!0);return}}break;case"ArrowRight":if(!f){m=e.getChildren()||[];i=c.metaKey||c.ctrlKey?r(m,m.length-1):o(e,d);if(i){l(a,i,c,!0);return}}break}}}h&&h(c);c.continuePropagation()}});return(g||(g=b("react"))).jsx(c,{DEPRECATED_flareListeners:[m,d],disabled:f,ref:t,type:"item",children:e})}return[d,e]}e.exports={createFocusGroup:a}}),null);
__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","React","TabbableScopeQuery.react"],(function(a,b,c,d,e,f,g){"use strict";c=b("FocusGroup.react").createFocusGroup;d=c(b("TabbableScopeQuery.react"));var h=d[0];f=d[1];function a(a){var c=[{command:{key:b("CometKeys").UP},description:g._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").DOWN},description:g._("Next item"),handler:function(){}}];return b("React").jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,children:b("React").jsx(h,babelHelpers["extends"]({},a))})}e.exports={FocusGroup:a,FocusItem:f}}),null);
__d("CometSeparatorMenuItem.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("React").jsx("li",{className:"dhix69tm tvmbv18p wkznzc2l aahdfvyu l6v480f0",ref:c,role:"presentation"})}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuBase.react",["CometErrorBoundary.react","CometMenuFocusGroup","CometPopover.react","CometSeparatorMenuItem.react","React","TabbableScopeQuery.react","TetraTextPairing.react","cometTestID","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useRef;function a(a,c){__p&&__p();var d=a.children,e=a.footer,f=a.header,i=a.maxBodyHeight,j=a.size;j=j===void 0?"normal":j;a=a.withArrow;var k=h(null),l=0,m=b("React").Children.toArray(d).map(function(a){if(a==null)return null;var c=l++;return a.type===b("CometSeparatorMenuItem.react")?a:b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,children:a},c)}),n=m.length;n>0&&i!=null&&(m=b("React").jsx("div",{className:"eg9m0zos",style:{maxHeight:i},children:m}));return b("React").Children.count(d)>0?b("React").jsx("div",babelHelpers["extends"]({className:(g||(g=b("stylex"))).dedupe(j==="full"?{"width-1":"k4urcfbm"}:{},j==="normal"?{"width-1":"geg40m2u"}:null)},b("cometTestID")("comet-menu"),{ref:k,children:b("React").jsx(b("CometPopover.react"),{ref:c,role:"menu",withArrow:a,children:b("React").jsx(b("CometMenuFocusGroup").FocusGroup,{portrait:!0,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:b("React").jsxs("ul",{className:"a8nywdso sj5x9vvc rz4wbd8a cxgpxx05 p7hjln8o",children:[f!=null&&b("React").jsxs(b("React").Fragment,{children:[b("React").jsx("li",{className:"scb9dxdr f10w8fjw dflh9lhu pybr56ya h676nmdw oygrvhab oi9244e8 kvgmc6g5 btwxx1t3 j83agx80 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",children:b("React").jsx(b("TetraTextPairing.react"),{headline:f.title,level:3,meta:f.meta,reduceEmphasis:!0})}),b("React").jsx(b("CometSeparatorMenuItem.react"),{})]}),m,e!=null&&b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("CometSeparatorMenuItem.react"),{}),b("React").jsx("li",{className:"scb9dxdr f10w8fjw dflh9lhu pybr56ya h676nmdw oygrvhab oi9244e8 kvgmc6g5 btwxx1t3 j83agx80 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",children:b("React").jsx(b("TetraTextPairing.react"),{level:3,meta:e.text})})]})]})})})})):null}e.exports=b("React").memo(b("React").forwardRef(a))}),null);
__d("CometMenu.react",["CometMenuBase.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("React").jsx(b("CometMenuBase.react"),babelHelpers["extends"]({},a,{ref:c}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuItemHighlightContext",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(!1)}),null);
__d("CometMenuItemBase.react",["CometMenuContext","CometMenuFocusGroup","CometMenuItemHighlightContext","CometPressable.react","React","TetraTextPairing.react","cometTestID","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useContext,i={aux:{marginStart:"ozuftl9m"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",justifyContent:"i1fnvgqd",minWidth:"hpfvmrgz"},disabled:{cursor:"rj84mg9z"},highlighted:{backgroundColor:"tdjehn4e",cursor:"nhd2j8a9"},listItem:{alignItems:"bp9cbjyn",appearance:"dwo3fsh8",backgroundColor:"g5ia77u1",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"rt8b4zig",borderEndWidth:"n8ej3o3l",borderBottomWidth:"agehan2d",borderStartWidth:"sk4xxmp2",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",position:"l9j0dhe7",textAlign:"i1ao9s8h",zIndex:"du4w35lb",":hover":{backgroundColor:"o6bdp0ec"}},listItemAlignedCenter:{alignItems:"bp9cbjyn"},listItemWithIcon:{paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"},root:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"cbu4d94t"}};function a(a,c){__p&&__p();var d=a.alignCenter,e=d===void 0?!1:d,f=a.aux,j=a.bodyColor,k=a.bodyText;d=a.disabled;var l=d===void 0?!1:d;d=a.download;var m=a.href,n=a.iconNode,o=a.onClick,p=a.onMouseDown,q=a.onMouseEnter,r=a.onMouseLeave,s=a.preventLocalNavigation,t=a.primaryText,u=a.role;u=u===void 0?"menuitem":u;var v=a.routeTarget,w=a.secondaryColor,x=a.secondaryText,y=a.target,z=a.testid,A=a.to;a=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","bodyColor","bodyText","disabled","download","href","iconNode","onClick","onMouseDown","onMouseEnter","onMouseLeave","preventLocalNavigation","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","to"]);var B=h(b("CometMenuContext"));B=B&&B.onClose;d=m!=null||v!=null||y!=null||A!=null?{download:d,passthroughProps:A!=null?{to:A}:null,preventLocalNavigation:s,routeTarget:v,target:y,url:m}:void 0;return b("React").jsx("li",babelHelpers["extends"]({className:(g||(g=b("stylex")))(i.root)},b("cometTestID")(z),{onClick:B,onMouseDown:p,onMouseEnter:q,onMouseLeave:r,role:"presentation",children:b("React").jsx(b("CometMenuFocusGroup").FocusItem,{children:b("React").jsx(b("CometPressable.react"),babelHelpers["extends"]({},a,{disabled:l,display:"inline",linkProps:d,onPress:o,overlayDisabled:!0,ref:c,role:u,xstyle:function(a){var b=a.focused;a=a.focusVisible;return[i.listItem,e&&i.listItemAlignedCenter,n!=null&&i.listItemWithIcon,b&&a&&i.highlighted,l&&i.disabled]},children:function(a){var c=a.focused,d=a.focusVisible;a=a.hovered;return b("React").jsxs(b("CometMenuItemHighlightContext").Provider,{value:c&&d||a,children:[n,b("React").jsxs("div",{className:(g||(g=b("stylex")))(i.content),children:[b("React").jsx(b("TetraTextPairing.react"),{body:k,bodyColor:j,headline:t,headlineColor:l?"disabled":"primary",level:4,meta:x,metaColor:w,reduceEmphasis:!0}),f!=null&&b("React").jsx("div",{className:(g||(g=b("stylex")))(i.aux),children:f})]})]})}}))})}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometMenuItemIcon.react",["CometImageIcon.react","CometMenuItemHighlightContext","IconSource","ImageIconSource","React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React").useContext;function a(a){var c=a.icon,d=a.iconColor;a=a.use;a=a===void 0?"normal":a;var e=h(b("CometMenuItemHighlightContext"));return b("React").jsx("div",{className:(g||(g=b("stylex"))).dedupe(a==="contained"||a==="contained_small_icon"?{"align-items-1":"bp9cbjyn","background-color-1":"tdjehn4e","border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","display-1":"j83agx80","height-1":"tv7at329","justify-content-1":"taijpn5t","min-width-1":"odlk74j0"}:{},(a==="contained"||a==="contained_small_icon")&&c instanceof b("IconSource")&&e?{"background-color-1":"g5ijobay"}:null,a==="normal"?{"align-self-1":"tiyi1ipj","height-1":"jnigpg78","width-1":"odw8uiq3"}:null,{"margin-end-1":"tvfksri0"}),children:c instanceof b("IconSource")?b("React").jsx(b("TetraIcon.react"),{color:(e=d)!=null?e:"secondary",icon:c}):c instanceof b("ImageIconSource")?b("React").jsx(b("TetraIcon.react"),{icon:c}):b("React").jsx(b("CometImageIcon.react"),babelHelpers["extends"]({},c,{size:a==="contained"?36:20}))})}e.exports=b("React").memo(a)}),null);
__d("CometMenuItem.react",["CometBadge.react","CometMenuItemBase.react","CometMenuItemIcon.react","React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=a.auxItem,e=a.icon,f=a.iconStyle;f=f===void 0?"normal":f;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","icon","iconStyle"]);var g=null;d!=null&&(g=d.type==="text"?b("React").jsx(b("TetraTextPairing.react"),{level:3,meta:d.auxText}):b("React").jsx(b("CometBadge.react"),{color:d.color}));return b("React").jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:g,iconNode:e!=null?b("React").jsx(b("CometMenuItemIcon.react"),{icon:e,use:f}):null,ref:c}))}e.exports=b("React").forwardRef(a)}),null);
__d("CometLegalFooterMoreMenu.react",["fbt","CometMenu.react","CometMenuItem.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c;return(a=b("React")).jsxs(b("CometMenu.react"),{withArrow:!0,children:[a.jsx(c=b("CometMenuItem.react"),{href:"https://www.facebook.com/about/",primaryText:g._("About")}),a.jsx(c,{href:"https://www.facebook.com/careers/?ref=pf",primaryText:g._("Careers")}),a.jsx(c,{href:"https://developers.facebook.com/?ref=pf",primaryText:g._("Developers")}),a.jsx(c,{href:"https://www.facebook.com/help/?ref=pf",primaryText:g._("Help")})]})}e.exports=a}),null);
__d("XSEOEngagementMetricController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/xsemc/",{})}),null);
__d("SEOEngagementMetricShared",["csx","Parent","URI","XSEOEngagementMetricController","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="client_load",i="retain",j="click",k="submit",l=11e3;function a(a,c){__p&&__p();return{_category:"",_id:"",_keyword:"",_fbid:"",init:function(c){__p&&__p();var d=this;this._category=c.category;this._id=c.id;this.keyword=c.keyword;this._fbid=c.fbid;b("setTimeout")(function(){return d._log(i)},l);a.listen(document,"click",function(a){a=a.target||a.srcElement;var c=b("Parent").byTag(a,"a");c!==null&&c.getAttribute("href")!=="#"&&c.getAttribute("ajaxify")===null?d._log(j):b("Parent").byTag(a,"button")&&!b("Parent").bySelector(a,"._zbd")&&d._log(k)});a.listen(document,"submit",function(a){return d._log(k)});this._log(h)},_log:function(a){a={category:this._category,id:this._id,client_time:Math.floor(Date.now()/1e3),event:a,keyword:this.keyword,fbid:this._fbid};c(b("XSEOEngagementMetricController").getURIBuilder().getURI(),a)}}}e.exports=a}),null);
__d("SEOEngagementMetric",["AsyncRequest","Event","SEOEngagementMetricShared","URI"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("AsyncRequest").post(a,c)}var g=b("SEOEngagementMetricShared")(b("Event"),a);c={log:function(a){g.init(a)}};e.exports=c}),null);
__d("CollapsibleSectionController",["cx","CSS","DOMScroll","Event"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(c,d,e,f){var g=this;this.$1=e;this.$2=d;b("Event").listen(e,"click",function(){return g.$3()});c&&a.controllers.set(c,this);f&&(document.location.href.indexOf("#"+f)>-1&&(b("CSS").addClass(d,"_1kar"),b("DOMScroll").scrollTo(d)))}var c=a.prototype;c.$3=function(){b("CSS").toggleClass(this.$2,"_1kar")};a.setupLink=function(c,d){b("Event").listen(d,"click",function(){return a.$4(c)})};a.$4=function(c){c=a.controllers.get(c);if(!c)return;c=c.$2;b("CSS").addClass(c,"_1kar");b("DOMScroll").scrollTo(c)};return a}();a.controllers=new Map();e.exports=a}),null);