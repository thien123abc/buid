(()=>{"use strict";const e=(e,t)=>Math.random()*(t-e)+e,t=(t,n)=>Math.floor(e(t,n)),n=e=>(console.log("MOCK api setting.get",e),new Promise((e=>{setTimeout((()=>e({status:0,result:[{domain:"soar.sirc.viettel.com",monitor:[{pathPattern:"^/",contentDomPath:".mat-dialog-container app-alert-event-detail .alert-event-detail-content--body",injectedDomPath:".mat-dialog-container app-alert-event-detail .alert-event-detail-content--header .title-popup"}]},{domain:"stackoverflow.com",monitor:[{pathPattern:"^/questions/\\d+/",contentDomPath:".sidebar-related .related.js-gps-related-questions",injectedDomPath:".sidebar-related h4"}]},{domain:"f2dr.test.viettelcybersecurity.com",monitor:[{pathPattern:"^/forensic",contentDomPath:"#forensic-right-detail mat-tab-body event-detail",injectedDomPath:"#forensic-right-detail mat-tab-header .mat-tab-list .mat-tab-label-content"}]}]})),t(500,1e3))})));let o,r="init";(()=>{if(!globalThis.window||!window.indexedDB)return;const e=window.indexedDB.open("vsoc",1);e.onsuccess=()=>{o=e.result,r="ready"},e.onerror=e=>{console.error(e),r="error"},e.onupgradeneeded=e=>{const t=e.target.result;t.onerror=()=>r="error",t.createObjectStore("message",{autoIncrement:!0}).createIndex("_id",["conversation_id","time"])}})();const a={getAsync:e=>n(e)};let i=[];const s=()=>{chrome.contextMenus.create({id:"vsocSidePanel",title:"vSOC: Mobility Security Operation Center",contexts:["all"]})},c=(e,t)=>{var n;chrome.sidePanel.open({tabId:null!==(n=null==t?void 0:t.id)&&void 0!==n?n:0})},d=(e,t,n)=>{var o,r,a;let i;console.log("onMessage",e),"open_side_panel"===e.type?i=l(null!==(r=null===(o=t.tab)||void 0===o?void 0:o.id)&&void 0!==r?r:0):"get_settings"===e.type?i=m():"monitored_content"===e.type&&(i=u(e.text)),null!=i||(i={error:!0,errorMessage:"unknown type "+e.type}),null!==(a=i.type)&&void 0!==a||(i.type="response_"+e.type),n(i)},l=e=>{try{return chrome.sidePanel.open({tabId:e}),{error:!1}}catch(e){return console.error(e),{error:!0}}},m=()=>({error:!1,value:i}),u=e=>{try{const t={type:"text_from_monitor",text:e};return console.log("chrome.runtime.sendMessage",t),chrome.runtime.sendMessage(t),{error:!1}}catch(e){return console.error(e),{error:!0}}};var h,p;p=function*(){chrome.runtime.onInstalled.addListener(s),chrome.contextMenus.onClicked.addListener(c),chrome.runtime.onMessage.addListener(d);const e=yield a.getAsync();i=e.result},new((h=void 0)||(h=Promise))((function(e,t){function n(e){try{r(p.next(e))}catch(e){t(e)}}function o(e){try{r(p.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof h?r:new h((function(e){e(r)}))).then(n,o)}r((p=p.apply(void 0,[])).next())}))})();
