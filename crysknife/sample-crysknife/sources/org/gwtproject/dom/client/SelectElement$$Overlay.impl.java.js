goog.module('org.gwtproject.dom.client.SelectElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let OptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SelectElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  SelectElement_$Overlay.$clinit();
  $Asserts.$assert(SelectElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, SelectElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  SelectElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return SelectElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  SelectElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return SelectElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  SelectElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, SelectElement_$Overlay.f_TAG__org_gwtproject_dom_client_SelectElement_$Overlay);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} option
  * @param {Object} before
  * @public
  */
 static m_add__$devirt__org_gwtproject_dom_client_SelectElement__org_gwtproject_dom_client_OptionElement__org_gwtproject_dom_client_OptionElement($thisArg, option, before) {
  SelectElement_$Overlay.$clinit();
  /**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).add(/**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(option)), /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(before)));
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clear__$devirt__org_gwtproject_dom_client_SelectElement($thisArg) {
  SelectElement_$Overlay.$clinit();
  /**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).options.length = 0;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getLength__$devirt__org_gwtproject_dom_client_SelectElement($thisArg) {
  SelectElement_$Overlay.$clinit();
  return /**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).options.length;
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object<string, Object>}
  * @public
  */
 static m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement($thisArg) {
  SelectElement_$Overlay.$clinit();
  return /**@type {Object<string, Object>} */ (Js.m_uncheckedCast__java_lang_Object(/**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).options));
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDisabled__$devirt__org_gwtproject_dom_client_SelectElement($thisArg) {
  SelectElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).disabled);
 }
 /**
  * @param {!Object} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isMultiple__$devirt__org_gwtproject_dom_client_SelectElement($thisArg) {
  SelectElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).multiple);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} index
  * @public
  */
 static m_remove__$devirt__org_gwtproject_dom_client_SelectElement__int($thisArg, index) {
  SelectElement_$Overlay.$clinit();
  /**@type {HTMLSelectElement} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).remove(index);
 }
 /**
  * @public
  */
 static $clinit() {
  SelectElement_$Overlay.$clinit = () =>{};
  SelectElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(SelectElement_$Overlay, 'Object');

/** @public {?string} @const */
SelectElement_$Overlay.f_TAG__org_gwtproject_dom_client_SelectElement_$Overlay = "select";

exports = SelectElement_$Overlay; 
//# sourceMappingURL=SelectElement$$Overlay.js.map