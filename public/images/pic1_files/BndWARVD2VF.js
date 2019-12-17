if (self.CavalryLogger) { CavalryLogger.start_js(["AwrLH"]); }

__d("StoriesReactionStickerMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"ReactStoryCardReactionStickerData!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"react_story_card_reaction_sticker",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ReactStoryCardReactionStickerResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"story_card_reaction_sticker",storageKey:null,args:null,concreteType:"StoryCardReactionSticker",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"StoriesReactionStickerMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"StoriesReactionStickerMutation",argumentDefinitions:a,selections:b},params:{operationKind:"mutation",name:"StoriesReactionStickerMutation",id:"2107432889344441",text:null,metadata:{}}}}();e.exports=a}),null);
__d("StoriesReactionSticker_overlay$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"x",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"y",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null};return{kind:"SplitOperation",name:"StoriesReactionSticker_overlay$normalization",metadata:{derivedFrom:"StoriesReactionSticker_overlay"},selections:[{kind:"LinkedField",alias:null,name:"reaction_sticker",storageKey:null,args:null,concreteType:"StoryCardReactionSticker",plural:!1,selections:[a,{kind:"LinkedField",alias:null,name:"sticker_asset",storageKey:null,args:null,concreteType:"InspirationsStickerImageAsset",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"sticker_animation_assets",storageKey:null,args:null,concreteType:"InspirationsStickerAnimationAssetWithType",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"asset",storageKey:null,args:null,concreteType:"InspirationsStickerAnimationAsset",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"keyframe_uri",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"initial_state_bounds",storageKey:null,args:null,concreteType:"StoryOverlayRectangle",plural:!1,selections:[b,c,d,e]},a]}]},a]}]},{kind:"LinkedField",alias:null,name:"bounds",storageKey:null,args:null,concreteType:"StoryOverlayRectangle",plural:!1,selections:[e,b,c,d,{kind:"ScalarField",alias:null,name:"rotation",args:null,storageKey:null}]}]}}();e.exports=a}),null);
__d("StoriesReactionSticker_overlay.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"StoriesReactionSticker_overlay",type:"StoryOverlayReactionSticker",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"reaction_sticker",storageKey:null,args:null,concreteType:"StoryCardReactionSticker",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"bounds",storageKey:null,args:null,concreteType:"StoryOverlayRectangle",plural:!1,selections:[{kind:"FragmentSpread",name:"StoriesCardOverlayPositioner_bounds",args:null}]},{kind:"FragmentSpread",name:"ReactionStickerKeyframe_overlay",args:null}]};e.exports=a}),null);
__d("ReactionStickerKeyframe_overlay.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"x",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"y",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null};return{kind:"Fragment",name:"ReactionStickerKeyframe_overlay",type:"StoryOverlayReactionSticker",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"reaction_sticker",storageKey:null,args:null,concreteType:"StoryCardReactionSticker",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"sticker_asset",storageKey:null,args:null,concreteType:"InspirationsStickerImageAsset",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"sticker_animation_assets",storageKey:null,args:null,concreteType:"InspirationsStickerAnimationAssetWithType",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"asset",storageKey:null,args:null,concreteType:"InspirationsStickerAnimationAsset",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"keyframe_uri",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"initial_state_bounds",storageKey:null,args:null,concreteType:"StoryOverlayRectangle",plural:!1,selections:[a,b,c,d]}]}]}]}]},{kind:"LinkedField",alias:null,name:"bounds",storageKey:null,args:null,concreteType:"StoryOverlayRectangle",plural:!1,selections:[d,a,b,c]}]}}();e.exports=a}),null);
__d("ReactionStickerKeyframe.react",["Keyframes.react","React","StoriesRelay","emptyFunction","stylex","ReactionStickerKeyframe_overlay.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("StoriesRelay").createFragmentContainer;b("StoriesRelay").graphql;function a(a){__p&&__p();var c,d,e=function(f){__p&&__p();var g,h={height:0,key:"",keyframe_uri:"",onRepeatEnd:b("emptyFunction"),repeatCount:1,type:"AFFORDANCE",width:0,x:0,y:0};g=(g=a.overlay)==null?void 0:(g=g.reaction_sticker)==null?void 0:(g=g.sticker_asset)==null?void 0:g.sticker_animation_assets;if(!g)return null;g=(g=g.find(function(a){return f===a.type}))==null?void 0:g.asset;if(!g)return null;g=g;var i=g.initial_state_bounds;g=g.keyframe_uri;if(!i)return null;var c=i.height,d=i.width,e=i.x;i=i.y;if(typeof d!=="number"||typeof c!=="number"||typeof e!=="number"||typeof i!=="number"||typeof g!=="string")return null;h.width=d;h.height=c;h.x=e;h.y=i;h.keyframe_uri=g;h.key=a.uniqueKey;h.type=a.type;f==="TAP"&&(h.repeatCount=1,h.onRepeatEnd=function(){a.tapOnReaptEnd(a.uniqueKey)});f==="AFFORDANCE"&&(h.repeatCount=Infinity,h.onRepeatEnd=b("emptyFunction"));return h};e=e(a.type);if(!e)return null;var f=e.height,g=e.key,h=e.keyframe_uri,i=e.onRepeatEnd,j=e.repeatCount,k=e.width,l=e.x,m=e.y,n=a.containerHeight,o=a.containerWidth,p=a.overlay;c=p==null?void 0:(c=p.bounds)==null?void 0:c.width;d=p==null?void 0:(d=p.bounds)==null?void 0:d.height;if(p==null||typeof c!=="number"||typeof d!=="number")return null;p=c*o;var q=d*n;n=n*d/q;d=o*c/p;o=q/f;c=p/k;q={left:"-"+l*c+"px",position:"absolute",top:"-"+m*o+"px",transform:"scaleY("+n+") scaleX("+d+")"};return b("React").jsx(b("Keyframes.react"),{assetName:"reaction_sticker",className:e.type==="TAP"?"pmk7jnqg hzruof5a":"",height:o,onRepeatEnd:i,projectName:"facebook_stories",repeatCount:j,source:h,style:q,width:c},g)}e.exports=c(a,{overlay:g!==void 0?g:g=b("ReactionStickerKeyframe_overlay.graphql")})}),null);
__d("StoriesReactionSticker.react",["FBLogger","React","ReactionStickerKeyframe.react","StoriesCardOverlayPositioner.react","StoriesEnums","StoriesPauseReasons","StoriesRelay","StoriesUniqueID","stylex","StoriesReactionStickerMutation.graphql","StoriesReactionSticker_overlay.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("React").useRef,j=b("React").useState,k=b("StoriesEnums").STORY_REACTION_STICKERS_CONSTANTS,l=(c=b("StoriesRelay")).commitMutation;c.graphql;var m=c.useRelayEnvironment;d=c.createFragmentContainer;function n(a,b){var c=Date.now();return function(){c+b-Date.now()<0&&(a(),c=Date.now())}}function a(a){__p&&__p();var c=m(),d=j([{key:"",type:"AFFORDANCE"}]),e=d[0],f=d[1],g=i(null),h=i(null),p=i(0);d=n(function(){a.setPause(!0,b("StoriesPauseReasons").CLICK_ON_OVERLAY_STICKER),p.current+=1,u(),s(),g.current=window.setTimeout(function(){r()},k.HOLD_DELAY)},k.ANIMATIONS_INTERVAL_THROTTLE);var q=function(c){f(function(d){d=d.filter(function(a){return a.key!==c});d.length<2&&a.setPause(!1,b("StoriesPauseReasons").CLICK_ON_OVERLAY_STICKER);return d})},r=function a(){p.current+=1,u(),h.current=window.setTimeout(function(){s(),a()},k.ANIMATIONS_INTERVAL_THROTTLE)},s=function(){f(function(a){return[].concat(a,[{key:b("StoriesUniqueID")(),type:"TAP"}])})},t=function(){window.clearTimeout(g.current),window.clearTimeout(h.current)},u=function(){var d;d=(d=a.overlay)==null?void 0:(d=d.reaction_sticker)==null?void 0:d.id;var e=a.logger;if(d===null)return;l(c,{mutation:o,onCompleted:function(a,b){e.replyAttemptCompletedLog("reaction_sticker_react",b==null?null:b[0])},onError:function(a){e.replyAttemptCompletedLog("reaction_sticker_react",a),b("FBLogger")("fbstories").catching(a).warn("Error interacting reaction stickers. ")},variables:{input:{client_mutation_id:b("StoriesUniqueID")(),count:p.current,story_card_reaction_sticker_id:d}}})},v=a.containerHeight,w=a.containerWidth,x=a.overlay,y=x==null?void 0:x.bounds;return y==null?null:b("React").jsx(b("StoriesCardOverlayPositioner.react"),{bounds:y,containerHeight:v,containerWidth:w,children:b("React").jsx("div",{className:"k4urcfbm fi2e5rcv pmk7jnqg oqq733wu datstx6m nhd2j8a9",onMouseDown:d,onMouseLeave:t,onMouseUp:t,children:e.map(function(a,c){return b("React").jsx(b("ReactionStickerKeyframe.react"),{containerHeight:v,containerWidth:w,overlay:x,tapOnReaptEnd:q,type:a.type,uniqueKey:a.key},a.key)})})})}var o=g!==void 0?g:g=b("StoriesReactionStickerMutation.graphql");e.exports=d(a,{overlay:h!==void 0?h:h=b("StoriesReactionSticker_overlay.graphql")})}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("memoize-one-4.0.3",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=function(a,b){return a===b};function b(b,c){__p&&__p();c===void 0&&(c=a);var d,e=[],f,g=!1,h=function(b,a){return c(b,e[a])},i=function(){for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];if(g&&d===this&&c.length===e.length&&c.every(h))return f;f=b.apply(this,c);g=!0;d=this;e=c;return f};return i}g.exports=b}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
__d("memoize-one",["memoize-one-4.0.3"],(function(a,b,c,d,e,f){e.exports=b("memoize-one-4.0.3")()}),null);