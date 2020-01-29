goog.module('org.gwtproject.dom.client.FormElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FormElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  FormElement_$Overlay.$clinit();
  $Asserts.$assert(FormElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, FormElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  FormElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return FormElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  FormElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return FormElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  FormElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, FormElement_$Overlay.f_TAG__org_gwtproject_dom_client_FormElement_$Overlay);
 }
 /**
  * @param {!Object} $thisArg
  * @param {SafeUri} action
  * @public
  */
 static m_setAction__$devirt__org_gwtproject_dom_client_FormElement__org_gwtproject_safehtml_shared_SafeUri($thisArg, action) {
  FormElement_$Overlay.$clinit();
  $thisArg.action = action.m_asString__();
 }
 /**
  * @public
  */
 static $clinit() {
  FormElement_$Overlay.$clinit = () =>{};
  FormElement_$Overlay.$loadModules();
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FormElement_$Overlay, 'Object');

/** @public {?string} @const */
FormElement_$Overlay.f_TAG__org_gwtproject_dom_client_FormElement_$Overlay = "form";

exports = FormElement_$Overlay; 
//# sourceMappingURL=FormElement$$Overlay.js.map