goog.module('elemental2.dom.MessageEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let InitMessageEventNSSourceArgUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MessageEvent.InitMessageEventNSSourceArgUnionType.$Overlay$impl');
let InitMessageEventSourceArgUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MessageEvent.InitMessageEventSourceArgUnionType.$Overlay$impl');
let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MessageEvent_$Overlay {
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {?} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessageEvent_InitMessageEventSourceArgUnionType__arrayOf_elemental2_dom_MessagePort($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {MessagePort} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort__elemental2_core_JsArray($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)), portsArg);
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {MessagePort} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort__arrayOf_elemental2_dom_MessagePort($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  MessageEvent_$Overlay.m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort__elemental2_core_JsArray($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {MessagePort} sourceArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {ServiceWorker} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker__elemental2_core_JsArray($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)), portsArg);
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {ServiceWorker} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker__arrayOf_elemental2_dom_MessagePort($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  MessageEvent_$Overlay.m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker__elemental2_core_JsArray($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {ServiceWorker} sourceArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {Window} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window__elemental2_core_JsArray($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)), portsArg);
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {Window} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window__arrayOf_elemental2_dom_MessagePort($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  MessageEvent_$Overlay.m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window__elemental2_core_JsArray($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {Window} sourceArg
  * @public
  */
 static m_initMessageEvent__$devirt__elemental2_dom_MessageEvent__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window($thisArg, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {?} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessageEvent_InitMessageEventNSSourceArgUnionType__arrayOf_elemental2_dom_MessagePort($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {MessagePort} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort__elemental2_core_JsArray($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)), portsArg);
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {MessagePort} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort__arrayOf_elemental2_dom_MessagePort($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  MessageEvent_$Overlay.m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort__elemental2_core_JsArray($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {MessagePort} sourceArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_MessagePort($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {ServiceWorker} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker__elemental2_core_JsArray($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)), portsArg);
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {ServiceWorker} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker__arrayOf_elemental2_dom_MessagePort($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  MessageEvent_$Overlay.m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker__elemental2_core_JsArray($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {ServiceWorker} sourceArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_ServiceWorker($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {Window} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window__elemental2_core_JsArray($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)), portsArg);
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {Window} sourceArg
  * @param {Array<MessagePort>} portsArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window__arrayOf_elemental2_dom_MessagePort($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg) {
  MessageEvent_$Overlay.$clinit();
  MessageEvent_$Overlay.m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window__elemental2_core_JsArray($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, /**@type {Array<MessagePort>} */ (Js.m_uncheckedCast__java_lang_Object(portsArg)));
 }
 /**
  * @template T
  * @param {!MessageEvent<T>} $thisArg
  * @param {?string} namespaceURI
  * @param {?string} typeArg
  * @param {boolean} canBubbleArg
  * @param {boolean} cancelableArg
  * @param {T} dataArg
  * @param {?string} originArg
  * @param {?string} lastEventIdArg
  * @param {Window} sourceArg
  * @public
  */
 static m_initMessageEventNS__$devirt__elemental2_dom_MessageEvent__java_lang_String__java_lang_String__boolean__boolean__java_lang_Object__java_lang_String__java_lang_String__elemental2_dom_Window($thisArg, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
  MessageEvent_$Overlay.$clinit();
  $thisArg.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sourceArg)));
 }
 /**
  * @public
  */
 static $clinit() {
  MessageEvent_$Overlay.$clinit = () =>{};
  MessageEvent_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MessageEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(MessageEvent_$Overlay, 'MessageEvent');

exports = MessageEvent_$Overlay; 
//# sourceMappingURL=MessageEvent$$Overlay.js.map