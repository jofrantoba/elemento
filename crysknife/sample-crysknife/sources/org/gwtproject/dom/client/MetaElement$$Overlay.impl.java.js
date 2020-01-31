goog.module('org.gwtproject.dom.client.MetaElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MetaElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  MetaElement_$Overlay.$clinit();
  $Asserts.$assert(MetaElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, MetaElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  MetaElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return MetaElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  MetaElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return MetaElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  MetaElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, MetaElement_$Overlay.f_TAG__org_gwtproject_dom_client_MetaElement_$Overlay);
 }
 
 static $clinit() {
  MetaElement_$Overlay.$clinit = () =>{};
  MetaElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MetaElement_$Overlay, 'Object');

/**@const {?string}*/
MetaElement_$Overlay.f_TAG__org_gwtproject_dom_client_MetaElement_$Overlay = "meta";

exports = MetaElement_$Overlay; 
//# sourceMappingURL=MetaElement$$Overlay.js.map