goog.module('elemental2.dom.ExtendableMessageEventInit.GetSourceUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let ServiceWorkerClient_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GetSourceUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  GetSourceUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {MessagePort}
  * @public
  */
 static m_asMessagePort__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType($thisArg) {
  GetSourceUnionType_$Overlay.$clinit();
  return /**@type {MessagePort} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ServiceWorker}
  * @public
  */
 static m_asServiceWorker__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType($thisArg) {
  GetSourceUnionType_$Overlay.$clinit();
  return /**@type {ServiceWorker} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ServiceWorker_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ServiceWorkerClient}
  * @public
  */
 static m_asServiceWorkerClient__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType($thisArg) {
  GetSourceUnionType_$Overlay.$clinit();
  return /**@type {ServiceWorkerClient} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ServiceWorkerClient_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isMessagePort__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType($thisArg) {
  GetSourceUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isServiceWorker__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType($thisArg) {
  GetSourceUnionType_$Overlay.$clinit();
  return ServiceWorker_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isServiceWorkerClient__$devirt__elemental2_dom_ExtendableMessageEventInit_GetSourceUnionType($thisArg) {
  GetSourceUnionType_$Overlay.$clinit();
  return ServiceWorkerClient_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  GetSourceUnionType_$Overlay.$clinit = () =>{};
  GetSourceUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.MessagePort.$Overlay$impl');
  ServiceWorker_$Overlay = goog.module.get('elemental2.dom.ServiceWorker.$Overlay$impl');
  ServiceWorkerClient_$Overlay = goog.module.get('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = GetSourceUnionType_$Overlay; 
//# sourceMappingURL=ExtendableMessageEventInit$GetSourceUnionType$$Overlay.js.map