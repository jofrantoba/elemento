goog.module('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ButtonElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  ButtonElement_$Overlay.$clinit();
  $Asserts.$assert(ButtonElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, ButtonElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  ButtonElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return ButtonElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  ButtonElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return ButtonElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  ButtonElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, ButtonElement_$Overlay.f_TAG__org_gwtproject_dom_client_ButtonElement_$Overlay);
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDisabled__$devirt__org_gwtproject_dom_client_ButtonElement($thisArg) {
  ButtonElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLButtonElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).disabled);
 }
 /**
  * @public
  */
 static $clinit() {
  ButtonElement_$Overlay.$clinit = () =>{};
  ButtonElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(ButtonElement_$Overlay, 'Object');

/** @public {?string} @const */
ButtonElement_$Overlay.f_TAG__org_gwtproject_dom_client_ButtonElement_$Overlay = "button";

exports = ButtonElement_$Overlay; 
//# sourceMappingURL=ButtonElement$$Overlay.js.map