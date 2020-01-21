goog.module('elemental2.dom.MessageEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let GetSourceUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MessageEventInit.GetSourceUnionType.$Overlay$impl');
let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MessageEventInit_$Overlay {
 /**
  * @return {MessageEventInit}
  * @public
  */
 static m_create__() {
  MessageEventInit_$Overlay.$clinit();
  return /**@type {MessageEventInit} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @template T
  * @param {!MessageEventInit<T>} $thisArg
  * @param {Array<MessagePort>} ports
  * @public
  */
 static m_setPorts__$devirt__elemental2_dom_MessageEventInit__arrayOf_elemental2_dom_MessagePort($thisArg, ports) {
  MessageEventInit_$Overlay.$clinit();
  $thisArg.ports = /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(ports));
 }
 /**
  * @template T
  * @param {!MessageEventInit<T>} $thisArg
  * @param {MessagePort} source
  * @public
  */
 static m_setSource__$devirt__elemental2_dom_MessageEventInit__elemental2_dom_MessagePort($thisArg, source) {
  MessageEventInit_$Overlay.$clinit();
  $thisArg.source = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /**
  * @template T
  * @param {!MessageEventInit<T>} $thisArg
  * @param {ServiceWorker} source
  * @public
  */
 static m_setSource__$devirt__elemental2_dom_MessageEventInit__elemental2_dom_ServiceWorker($thisArg, source) {
  MessageEventInit_$Overlay.$clinit();
  $thisArg.source = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /**
  * @template T
  * @param {!MessageEventInit<T>} $thisArg
  * @param {Window} source
  * @public
  */
 static m_setSource__$devirt__elemental2_dom_MessageEventInit__elemental2_dom_Window($thisArg, source) {
  MessageEventInit_$Overlay.$clinit();
  $thisArg.source = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /**
  * @public
  */
 static $clinit() {
  MessageEventInit_$Overlay.$clinit = () =>{};
  MessageEventInit_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MessageEventInit_$Overlay; 
//# sourceMappingURL=MessageEventInit$$Overlay.js.map