goog.module('org.gwtproject.dom.client.ParagraphElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ParagraphElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  ParagraphElement_$Overlay.$clinit();
  $Asserts.$assert(ParagraphElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, ParagraphElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  ParagraphElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return ParagraphElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  ParagraphElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return ParagraphElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  ParagraphElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, ParagraphElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParagraphElement_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  ParagraphElement_$Overlay.$clinit = () =>{};
  ParagraphElement_$Overlay.$loadModules();
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
$Util.$setClassMetadata(ParagraphElement_$Overlay, 'Object');

/** @public {?string} @const */
ParagraphElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParagraphElement_$Overlay = "p";

exports = ParagraphElement_$Overlay; 
//# sourceMappingURL=ParagraphElement$$Overlay.js.map