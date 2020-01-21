goog.module('elemental2.dom.MessageEvent.InitMessageEventNSSourceArgUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class InitMessageEventNSSourceArgUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {MessagePort}
  * @public
  */
 static m_asMessagePort__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType($thisArg) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return /**@type {MessagePort} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ServiceWorker}
  * @public
  */
 static m_asServiceWorker__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType($thisArg) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return /**@type {ServiceWorker} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ServiceWorker_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {Window}
  * @public
  */
 static m_asWindow__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType($thisArg) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return /**@type {Window} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Window_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isMessagePort__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType($thisArg) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isServiceWorker__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType($thisArg) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return ServiceWorker_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isWindow__$devirt__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType($thisArg) {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit();
  return Window_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  InitMessageEventNSSourceArgUnionType_$Overlay.$clinit = () =>{};
  InitMessageEventNSSourceArgUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.MessagePort.$Overlay$impl');
  ServiceWorker_$Overlay = goog.module.get('elemental2.dom.ServiceWorker.$Overlay$impl');
  Window_$Overlay = goog.module.get('elemental2.dom.Window.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = InitMessageEventNSSourceArgUnionType_$Overlay; 
//# sourceMappingURL=MessageEvent$InitMessageEventNSSourceArgUnionType$$Overlay.js.map