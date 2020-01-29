goog.module('org.gwtproject.dom.client.FrameElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLFrameElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FrameElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  FrameElement_$Overlay.$clinit();
  $Asserts.$assert(FrameElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, FrameElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  FrameElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return FrameElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  FrameElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return FrameElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  FrameElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, FrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameElement_$Overlay);
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isNoResize__$devirt__org_gwtproject_dom_client_FrameElement($thisArg) {
  FrameElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLFrameElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).noResize);
 }
 /**
  * @param {!Object} $thisArg
  * @param {SafeUri} longDesc
  * @public
  */
 static m_setLongDesc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri($thisArg, longDesc) {
  FrameElement_$Overlay.$clinit();
  $thisArg.longDesc = longDesc.m_asString__();
 }
 /**
  * @param {!Object} $thisArg
  * @param {SafeUri} src
  * @public
  */
 static m_setSrc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri($thisArg, src) {
  FrameElement_$Overlay.$clinit();
  $thisArg.src = src.m_asString__();
 }
 /**
  * @public
  */
 static $clinit() {
  FrameElement_$Overlay.$clinit = () =>{};
  FrameElement_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Object;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FrameElement_$Overlay, 'Object');

/** @public {?string} @const */
FrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameElement_$Overlay = "frame";

exports = FrameElement_$Overlay; 
//# sourceMappingURL=FrameElement$$Overlay.js.map