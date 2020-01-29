goog.module('org.gwtproject.dom.client.OptionElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class OptionElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  OptionElement_$Overlay.$clinit();
  $Asserts.$assert(OptionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, OptionElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  OptionElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return OptionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  OptionElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return OptionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  OptionElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, OptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptionElement_$Overlay);
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDefaultSelected__$devirt__org_gwtproject_dom_client_OptionElement($thisArg) {
  OptionElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLOptionElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).defaultSelected);
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDisabled__$devirt__org_gwtproject_dom_client_OptionElement($thisArg) {
  OptionElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLOptionElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).disabled);
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isSelected__$devirt__org_gwtproject_dom_client_OptionElement($thisArg) {
  OptionElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLOptionElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).selected);
 }
 /**
  * @public
  */
 static $clinit() {
  OptionElement_$Overlay.$clinit = () =>{};
  OptionElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(OptionElement_$Overlay, 'Object');

/** @public {?string} @const */
OptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptionElement_$Overlay = "option";

exports = OptionElement_$Overlay; 
//# sourceMappingURL=OptionElement$$Overlay.js.map