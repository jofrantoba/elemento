goog.module('elemental2.dom.FetchEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.FetchEvent.RespondWithRUnionType.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let IThenable_$Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class FetchEvent_$Overlay {
 /**
  * @param {!FetchEvent} $thisArg
  * @param {IThenable<Response>} r
  * @public
  */
 static m_respondWith__$devirt__elemental2_dom_FetchEvent__elemental2_promise_IThenable($thisArg, r) {
  FetchEvent_$Overlay.$clinit();
  $thisArg.respondWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(r)));
 }
 /**
  * @param {!FetchEvent} $thisArg
  * @param {Response} r
  * @public
  */
 static m_respondWith__$devirt__elemental2_dom_FetchEvent__elemental2_dom_Response($thisArg, r) {
  FetchEvent_$Overlay.$clinit();
  $thisArg.respondWith(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(r)));
 }
 /**
  * @public
  */
 static $clinit() {
  FetchEvent_$Overlay.$clinit = () =>{};
  FetchEvent_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FetchEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(FetchEvent_$Overlay, 'FetchEvent');

exports = FetchEvent_$Overlay; 
//# sourceMappingURL=FetchEvent$$Overlay.js.map