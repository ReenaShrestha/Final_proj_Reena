if (self.CavalryLogger) { CavalryLogger.start_js(["DyTrf"]); }

__d("AdsPEFilterFieldsToAPIFieldsMap",[],(function(a,b,c,d,e,f){e.exports={DELIVERY_AGE:"adset.delivery_age",DELIVERY_GENDER:"adset.delivery_gender",DELIVERY_LOCATION:"adset.delivery_location",OBJECTIVE:"campaign.objective",CAMPAIGN_GROUP_DELIVERY_INFO:"campaign.delivery_info",CAMPAIGN_DELIVERY_INFO:"adset.delivery_info",ADGROUP_DELIVERY_INFO:"ad.delivery_info",CAMPAIGN_GROUP_DELIVERY_STATUS:"campaign.delivery_status",CAMPAIGN_DELIVERY_STATUS:"adset.delivery_status",ADGROUP_DELIVERY_STATUS:"ad.delivery_status",SEARCH_BY_CAMPAIGN_GROUP_NAME:"campaign.name",SEARCH_BY_CAMPAIGN_NAME:"adset.name",SEARCH_BY_ADGROUP_NAME:"ad.name",SEARCH_BY_CAMPAIGN_GROUP_ID:"campaign.id",SEARCH_BY_CAMPAIGN_GROUP_IDS:"campaign.id",SEARCH_BY_CAMPAIGN_ID:"adset.id",SEARCH_BY_CAMPAIGN_IDS:"adset.id",SEARCH_BY_ADGROUP_ID:"ad.id",SEARCH_BY_ADGROUP_IDS:"ad.id",CAMPAIGN_GROUP_SELECTED:"campaign.id",CAMPAIGN_SELECTED:"adset.id",ADGROUP_SELECTED:"ad.id",UNIQUE_ADCREATIVE_SELECTED:"unique_adcreative.visual_hash",CAMPAIGN_GROUP_UPLOAD_RECENTLY_CHANGED:"campaign.updated_time",CAMPAIGN_UPLOAD_RECENTLY_CHANGED:"adset.updated_time",ADGROUP_UPLOAD_RECENTLY_CHANGED:"ad.updated_time",CAMPAIGN_GROUP_CHANGED:"campaign.updated_time",CAMPAIGN_CHANGED:"adset.updated_time",ADGROUP_CHANGED:"ad.updated_time","campaign.impressions":"campaign.impressions","adset.impressions":"adset.impressions","ad.impressions":"ad.impressions","campaign.cost_per":"campaign.cost_per","adset.cost_per":"adset.cost_per","ad.cost_per":"ad.cost_per","campaign.cpa":"campaign.cpa","adset.cpa":"adset.cpa","ad.cpa":"ad.cpa","campaign.cpm":"campaign.cpm","adset.cpm":"adset.cpm","ad.cpm":"ad.cpm","campaign.frequency":"campaign.frequency","adset.frequency":"adset.frequency","ad.frequency":"ad.frequency","campaign.lifetime_spent":"campaign.lifetime_spent","adset.lifetime_spent":"adset.lifetime_spent","ad.lifetime_spent":"ad.lifetime_spent","campaign.reach":"campaign.reach","adset.reach":"adset.reach","ad.reach":"ad.reach","adset.placement.page_types":"adset.placement.page_types",SEARCH_BY_TOPLINE:"campaign.topline_id",SEARCH_BY_LABEL:"campaign.adlabel_ids","adset.targeting_state":"adset.targeting_state",CAMPAIGN_GROUP_TYPE:"campaign.campaign_group_type"}}),null);
__d("AdsPEFilterUIStateProviderPlugin",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";a=b("ImmutableRecordWithV4Types").Record;var g=a({savedFilters:{},filterSet:null,labelFilterSet:null,wasModified:!1,selectedAccountID:null});c=function(){return g()};d={initialState:c()};e.exports=d}),null);
__d("AdsPEFilterUIStateProvider",["Laminar","AdsPEFilterUIStateProviderPlugin"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("AdsPEFilterUIStateProviderPlugin"),"AdsPEFilterUIStateProviderPlugin")}),null);
__d("AdsCMFilterablePaymentStatus",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({APPLIED_TO_INVOICE:null,BANK_REFUND_FAILED:null,BANK_REFUND:null,FAILED:null,FUNDED:null,PAID_BANK_REFUND_CANCELLED:null,PAID:null,PROCESSING_REFUND:null,PROCESSING:null,REFUND_FAILED:null,REFUNDED:null,UNKNOWN:null})}),null);
__d("adsCMTransactionGetPaymentStatusLabel",["fbt","AdsCMFilterablePaymentStatus"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){__p&&__p();switch(a){case b("AdsCMFilterablePaymentStatus").APPLIED_TO_INVOICE:return g._("Applied to Invoice");case b("AdsCMFilterablePaymentStatus").BANK_REFUND_FAILED:return g._("Bank Refund Failed");case b("AdsCMFilterablePaymentStatus").BANK_REFUND:return g._("Bank Refund");case b("AdsCMFilterablePaymentStatus").FAILED:return g._("Failed");case b("AdsCMFilterablePaymentStatus").FUNDED:return g._("Funded");case b("AdsCMFilterablePaymentStatus").PAID_BANK_REFUND_CANCELLED:return g._("Paid (Bank Refund Cancelled)");case b("AdsCMFilterablePaymentStatus").PAID:return g._("Paid");case b("AdsCMFilterablePaymentStatus").PROCESSING_REFUND:return g._("Processing Refund");case b("AdsCMFilterablePaymentStatus").PROCESSING:return g._("Processing");case b("AdsCMFilterablePaymentStatus").REFUND_FAILED:return g._("Refund Failed");case b("AdsCMFilterablePaymentStatus").REFUNDED:return g._("Refunded");default:return null}}e.exports=a}),null);
__d("adsMgmtCampaignSelectedIdsSelector",["AdsMgmtCampaignSelectionProvider","adsCreateSelector"],(function(a,b,c,d,e,f){"use strict";a=b("AdsMgmtCampaignSelectionProvider").toFluxSelector();c=b("adsCreateSelector")([a],function(a){a=a.cachedSelectedIDs;return a},{name:e.id+".adsMgmtCampaignSelectedIdsSelector"});e.exports=c}),null);
__d("AdsPEFilterSetToAPIUtil",["AdsGenericFilter","AdsGenericFilterSet","AdsObjectTypes","AdsPEFilterConfigUtils","AdsPEFilterFieldsToAPIFieldsMap","DateConsts","FBLogger","compactArray","gkx","removeFromArray"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=["campaignGroup","campaign","adgroup","uniqueAdCreative"];function a(a){return a==null?[]:b("compactArray")(a.map(h))}function h(a){if(!a)return a;a=i(a);if(!a||!a.field)return null;a.field=j(a.field);return!a.field?null:a}function i(a){switch(a.field){case"SEARCH_BY_CAMPAIGN_GROUP_ID":case"SEARCH_BY_CAMPAIGN_GROUP_IDS":case"SEARCH_BY_CAMPAIGN_ID":case"SEARCH_BY_CAMPAIGN_IDS":case"SEARCH_BY_ADGROUP_ID":case"SEARCH_BY_ADGROUP_IDS":return k(a);case"CAMPAIGN_GROUP_DELIVERY_INFO":case"CAMPAIGN_DELIVERY_INFO":case"ADGROUP_DELIVERY_INFO":return o(n(m(l(a))));case"CAMPAIGN_GROUP_UPLOAD_STATUS":return p(l(a),b("AdsObjectTypes").CAMPAIGN_GROUP);case"CAMPAIGN_UPLOAD_STATUS":return p(l(a),b("AdsObjectTypes").CAMPAIGN);case"ADGROUP_UPLOAD_STATUS":return p(l(a),b("AdsObjectTypes").ADGROUP);case"CAMPAIGN_GROUP_CHANGED":case"CAMPAIGN_CHANGED":case"ADGROUP_CHANGED":return r(a)}return a}function j(a){var c=b("AdsPEFilterFieldsToAPIFieldsMap")[a];c||b("FBLogger")("ads").warn("Filter field %s is not supported yet",a);return c}function k(a){var b=babelHelpers["extends"]({},a);a.operator==="EQUAL"||a.operator==="ANY"?b.operator="IN":(a.operator==="NOT_EQUAL"||a.operator==="NONE")&&(b.operator="NOT_IN");typeof a.value==="string"&&(b.value=a.value.split(/[\s,]+/).filter(function(a){return a!==""}).map(function(a){return a.replace(/^[a-z]+:/i,"")}));return b}function l(a){var c=a.value.slice();b("removeFromArray")(c,"not_published");b("removeFromArray")(c,"UPLOAD_NOT_UPLOADED");a.value=c;return a}function m(a){Array.isArray(a.value)&&a.value.indexOf("archived")>-1&&a.value.indexOf("permanently_deleted")===-1&&a.value.push("permanently_deleted");return a}function n(a){Array.isArray(a.value)&&a.value.indexOf("completed")>-1&&a.value.indexOf("recently_completed")===-1&&a.value.push("recently_completed");return a}function o(a){Array.isArray(a.value)&&a.value.indexOf("rejected")>-1&&a.value.indexOf("recently_rejected")===-1&&a.value.push("recently_rejected");return a}function p(a,c){var d=a.value;a=a.operator;if(d.length===0)return null;var e;d.includes("UPLOAD_RECENTLY_CHANGED")?e="UPLOAD_RECENTLY_CHANGED":e=d;d=Math.floor(b("DateConsts").getCurrentTimeInSeconds()-3*b("DateConsts").SEC_PER_DAY);return{field:c+"_"+e,operator:a==="IN"?"GREATER_THAN":"LESS_THAN",value:d}}function q(a){return typeof a==="string"?parseInt(a,10):a}function r(a){var c=a.value,d=0,e=[];Array.isArray(c)?e=c.map(q).map(function(a){return a/b("DateConsts").MS_PER_SEC}):d=q(c);switch(a.operator){case"AFTER":return{field:a.field,operator:"GREATER_THAN",value:d/b("DateConsts").MS_PER_SEC};case"BEFORE":return{field:a.field,operator:"LESS_THAN",value:d/b("DateConsts").MS_PER_SEC};case"IN_RANGE":return{field:a.field,operator:"IN_RANGE",value:e}}return null}function s(a,c,d){c=new(b("AdsGenericFilter"))(b("AdsPEFilterConfigUtils").getFilterFieldForLevel(c),"IN",d);!a?d=[c]:d=[].concat(a.values,[c]);return new(b("AdsGenericFilterSet"))(d)}function c(a,b,c){__p&&__p();var d=new Map();g.forEach(function(b){return d.set(b,a)});if(b==="campaign"&&c.get("campaignGroup")){var e=s(a,"campaignGroup",c.get("campaignGroup"));d.set("campaign",e);d.set("adgroup",e)}else if(b==="adgroup"&&(c.get("campaignGroup")||c.get("campaign"))){e=c.get("campaign")?"campaign":"campaignGroup";e=s(a,e,c.get(e));d.set("adgroup",e)}else if(b==="uniqueAdCreative"&&(c.get("campaignGroup")||c.get("campaign")||c.get("adgroup"))){e=c.get("adgroup")?"adgroup":c.get("campaign")?"campaign":"campaignGroup";b=s(a,e,c.get(e));d.set("uniqueAdCreative",b)}return d}function d(a,b){var c=a;b.forEach(function(a,d){a&&(c=s(c,d,b.get(d)))});return c}e.exports={addSelectionFilter:s,computeChildFilterSetWithSelectedParentIDs:c,computeFilterSetWithSelectedParentAndChildIDs:d,transformFilterToAPISpec:h,transformToAPISpec:a}}),null);
__d("AdsPEFilterSetUtil",["AdsGenericFilter","AdsGenericFilterField","AdsGenericFilterFieldConfigUtil","AdsGenericFilterSet","AdsGenericFilterSetUtil","AdsPEFilterConfigUtils","AdsPEFilterFieldConfig","AdsPEFilterSetToAPIUtil","ClientServerIDMap","PEAppLogger","PowerEditorEventCategory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Set(["CAMPAIGN_GROUP_SELECTED","CAMPAIGN_SELECTED","ADGROUP_SELECTED","SEARCH_BY_CAMPAIGN_GROUP_ID","SEARCH_BY_CAMPAIGN_ID","SEARCH_BY_ADGROUP_ID"]),h=new Set(["CAMPAIGN_GROUP_SELECTED","CAMPAIGN_SELECTED","ADGROUP_SELECTED","SEARCH_BY_CAMPAIGN_GROUP_ID","SEARCH_BY_CAMPAIGN_ID","SEARCH_BY_ADGROUP_ID","CAMPAIGN_GROUP_DELIVERY_INFO","CAMPAIGN_DELIVERY_INFO","ADGROUP_DELIVERY_INFO","CAMPAIGN_GROUP_DELIVERY_STATUS","CAMPAIGN_DELIVERY_STATUS","ADGROUP_DELIVERY_STATUS","SEARCH_BY_CAMPAIGN_GROUP_NAME","SEARCH_BY_CAMPAIGN_NAME","SEARCH_BY_ADGROUP_NAME","OBJECTIVE"]),i=new Set(["CAMPAIGN_GROUP_DELIVERY_INFO","CAMPAIGN_DELIVERY_INFO","ADGROUP_DELIVERY_INFO","CAMPAIGN_GROUP_DELIVERY_STATUS","CAMPAIGN_DELIVERY_STATUS","ADGROUP_DELIVERY_STATUS","CAMPAIGN_GROUP_UPLOAD_STATUS","CAMPAIGN_UPLOAD_STATUS","ADGROUP_UPLOAD_STATUS"]),j=new Set(["not_published","UPLOAD_NOT_UPLOADED"]);function k(a,c,d){if(c&&(a.operator==="IN"||a.operator==="NOT_IN")){d=b("AdsGenericFilterFieldConfigUtil").getConfigByField(d,c);var e=l(d.values);if(e.length&&Array.isArray(a.value))return a.value.filter(function(a){return e.includes(a)})}return a.value}function l(a){var b=[];Array.isArray(a)&&(b=a.map(function(a){if(typeof a==="object"&&a.value)return a.value;else return a}));return b}function m(a){var c=Array.isArray(a.value)?a.value.join(", "):a.value;b("PEAppLogger").logForAnalytics(b("PowerEditorEventCategory").FILTER,"filter_field_invalid",{action_type:"create_from_api_object",filter_fields:[a.field],filter_set:"("+a.field+" "+a.operator+" "+c+")"})}function n(a,c){if(a&&c)return b("AdsGenericFilterSetUtil").mergeByField(a,c,{fieldsConfig:b("AdsPEFilterFieldConfig")});else if(a)return a;else if(c)return c;else return null}function a(a,c){a=a.map(function(a){var b;try{b=o(a,c)}catch(b){m(a)}return b}).filter(function(a){return a!=null});return a.length?new(b("AdsGenericFilterSet"))(a):void 0}function o(a,c){var d=b("AdsGenericFilterFieldConfigUtil").getTypeByFieldName(c,a.field);d=new(b("AdsGenericFilterField"))(a.field,d);c=k(a,d,c);if(Array.isArray(c)&&c.length===0)return null;if(!d||!a.operator||c==null)throw new Error("Trying to create filter with invalid specifications. This might indicate URL tempering, localStorage manipulation or deprecated filters, "+JSON.stringify(a));return new(b("AdsGenericFilter"))(d,a.operator,c)}function c(a,c){return b("AdsGenericFilterSetUtil").matchesExactly(a,c)}function d(a,c){return b("AdsGenericFilterSetUtil").completeMatchesExactly(a,c)}function f(a){a=a.values.map(function(a){if(!g.has(a.field.name))return a;var c;Array.isArray(a.value)?c=a.value.map(b("ClientServerIDMap").resolveID):c=b("ClientServerIDMap").resolveID(a.value);return new(b("AdsGenericFilter"))(a.field,a.operator,c)});return new(b("AdsGenericFilterSet"))(a)}function p(a){var c;if(a==null)return!1;a instanceof b("AdsGenericFilterSet")?c=a.toAPI():c=a;return c.some(function(a){return i.has(a.field)&&a.operator==="IN"&&Array.isArray(a.value)&&a.value.length===1&&j.has(a.value[0])})}function q(a){var c=b("AdsPEFilterConfigUtils").getFieldInstanceFor("SEARCH_BY_LABEL");return a.values.some(function(a){return a.field.key===c.key})}function r(a){return a.values.some(function(a){return a.field.name==="DELIVERY_LOCATION"})}function s(a){return!a?!1:!a.values.every(function(a){return h.has(a.field.name)})}function t(a){return a==null?[]:a instanceof b("AdsGenericFilterSet")?a.toAPI():a}function u(a){if(a==null)return[];a=a.toAPI();return b("AdsPEFilterSetToAPIUtil").transformToAPISpec(a)}function v(a){return a.field==="campaign.id"||a.field==="adset.id"||a.field==="ad.id"||a.field==="id"}function w(a){a=t(a);a=a.filter(v)[0];return!!(a&&a.value.length===0)}function x(a){return a.map(function(a){return a.getFilterReference().filterSet}).reduce(function(a,b){return n(a,b)},null)}a={createFilterFromAPIObject:o,createFromAPIObject:a,isUnpublishedOnlyFilter:p,hasDateChangeRelatedFilter:s,hasAudienceLocationFilter:r,hasLabelFilter:q,matchesExactly:c,completeMatchesExactly:d,mergeByField:n,remapIDsforIDFilters:f,toMultiLevelAPISpec:u,transformToAPISpec:b("AdsPEFilterSetToAPIUtil").transformToAPISpec,isIDFilter:v,normalizeToFilterSetAPIObject:t,hasEmptyIDFilter:w,fromBUIPresetFiltersItemArray:x};e.exports=a}),null);
__d("PopoverButton.react",["cx","ix","AbstractPopoverButton.react","Button.react","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").jsx(b("Image.react"),{src:h("101373")});a={button:b("React").jsx(b("Button.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4-s1")})),chevron:a,defaultMaxWidth:200,chevronWidth:14};return b("React").jsx(b("AbstractPopoverButton.react"),{config:a,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,labelIsHidden:this.props.labelIsHidden,maxwidth:this.props.maxwidth})};return c}(b("React").Component);c.propTypes={haschevron:a.bool,label:a.node,labelIsHidden:a.bool,maxwidth:a.number};e.exports=c}),null);
__d("Selector.react",["AbstractSelector.react","PopoverButton.react","React","ReactMenu"],(function(a,b,c,d,e,f){__p&&__p();var g=b("ReactMenu").SelectableMenu;a=b("ReactMenu").SelectableItem;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a={button:b("React").jsx(b("PopoverButton.react"),{rel:"toggle",suppressed:this.props.suppressed}),menu:b("React").jsx(g,{})};return b("React").jsx(b("AbstractSelector.react"),babelHelpers["extends"]({},this.props,{overlappingborder:!0,config:a,children:this.props.children}))};return c}(b("React").Component);c.Option=a;e.exports=c}),null);
__d("AdsPaymentMethodType",["fbt"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,b){__p&&__p();switch(a){case h.CREDIT_CARD:return g._("Credit Card");case h.PAYPAL:return g._("PayPal");case h.TOKEN:return g._("Facebook Coupon");case h.EXTENDED_CREDIT:return g._("Invoiced Credit");case h.DIRECT_DEBIT:return g._("Direct Debit");case h.STORED_BALANCE:return g._("Available Balance");case h.ALTPAY:return g._("Manual Payment");case h.MOBILE:return g._("Carrier Billing");case h.COMBO_CARD:switch(b){case 68:return g._("Combo (Debit)");case 67:return g._("Combo (Credit)");default:return null}default:return null}}var h={CREDIT_CARD:"credit_card",PAYPAL:"paypal",TOKEN:"coupon",EXTENDED_CREDIT:"invoiced",DIRECT_DEBIT:"direct_debit",STORED_BALANCE:"stored_balance",ALTPAY:"altpay",MOBILE:"mobile",COMBO_CARD:"combo_card",getPaymentMethodLabel:a};e.exports=h}),null);
__d("FB4BFormWizardApp.react",["DOM","DOMQuery","Event","FB4BWizardDispatcher","FB4BWizardRootContainer.react","FB4BWizardStores","React","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("FB4BWizardDispatcher").dispatch;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.cachedEmailFormID=null,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.getEmailFormID=function(){__p&&__p();if(this.cachedEmailFormID!=null)return this.cachedEmailFormID;var a=b("DOM").create("div",{},this.props.more_help_content);a=b("DOMQuery").scry(a,"a");this.cachedEmailFormID=a.reduce(function(a,c){c=c.getAttribute("href");if(!c.includes("<EMAIL_SUPPORT>"))return a;a=c.replace("<EMAIL_SUPPORT>","");c=new(g||(g=b("URI")))(a);return c.getPath().replace("/","")},null);return this.cachedEmailFormID};d.componentDidMount=function(){__p&&__p();var a=this;b("FB4BWizardStores").init();var c=this.props.node_cms_id,d=this.props.chat_form_id,e="chat_cf";(!this.props.can_see_chat||d==null)&&(e="email_cf",d=this.getEmailFormID());var f=new URLSearchParams(window.location.search);f=f.get("node");var g=!1;if(f!=null&&f===c){h({type:"contactForm/fetch",formID:(f=d)!=null?f:"",formType:e});g=!0}h({type:"wizard/init",locale:this.props.locale,initialStaticNodeID:c,moreHelpContent:this.props.more_help_content,alwaysHideAccountSelector:this.props.always_hide_account_selector,version:this.props.version,loadAdAccount:this.props.load_ad_account,isManaged:!0,deep:g});this.props.launchObjects.forEach(function(c,f){var g=(f=a.props.formTypeOverrides[f])!=null?f:e,i=g==="email_cf"?a.getEmailFormID():d;if(i==null)return;b("Event").listen(c,"click",function(){h({type:"contactForm/fetch",formID:i,formType:g}),h({type:"select/openModal"})})})};d.render=function(){h({type:"init/sessionID"});return b("React").jsx(b("FB4BWizardRootContainer.react"),{})};return c}(b("React").Component);e.exports=a}),null);