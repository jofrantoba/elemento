goog.module('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TableSectionElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TableSectionElement_$Overlay.$clinit();
  $Asserts.$assert(TableSectionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, TableSectionElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  TableSectionElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return TableSectionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  TableSectionElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return TableSectionElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  TableSectionElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), TableSectionElement_$Overlay.f_TAG_THEAD__org_gwtproject_dom_client_TableSectionElement_$Overlay) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), TableSectionElement_$Overlay.f_TAG_TFOOT__org_gwtproject_dom_client_TableSectionElement_$Overlay) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), TableSectionElement_$Overlay.f_TAG_TBODY__org_gwtproject_dom_client_TableSectionElement_$Overlay));
 }
 /** @return {Array<?string>} */
 static get f_TAGS__org_gwtproject_dom_client_TableSectionElement_$Overlay() {
  return (TableSectionElement_$Overlay.$clinit(), TableSectionElement_$Overlay.$f_TAGS__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 
 static $clinit() {
  TableSectionElement_$Overlay.$clinit = () =>{};
  TableSectionElement_$Overlay.$loadModules();
  TableSectionElement_$Overlay.$f_TAGS__org_gwtproject_dom_client_TableSectionElement_$Overlay = /**@type {!Array<?string>}*/ ($Arrays.$init([TableSectionElement_$Overlay.f_TAG_TBODY__org_gwtproject_dom_client_TableSectionElement_$Overlay, TableSectionElement_$Overlay.f_TAG_TFOOT__org_gwtproject_dom_client_TableSectionElement_$Overlay, TableSectionElement_$Overlay.f_TAG_THEAD__org_gwtproject_dom_client_TableSectionElement_$Overlay], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TableSectionElement_$Overlay, 'Object');

/**@private {Array<?string>}*/
TableSectionElement_$Overlay.$f_TAGS__org_gwtproject_dom_client_TableSectionElement_$Overlay;
/**@const {?string}*/
TableSectionElement_$Overlay.f_TAG_TBODY__org_gwtproject_dom_client_TableSectionElement_$Overlay = "tbody";
/**@const {?string}*/
TableSectionElement_$Overlay.f_TAG_TFOOT__org_gwtproject_dom_client_TableSectionElement_$Overlay = "tfoot";
/**@const {?string}*/
TableSectionElement_$Overlay.f_TAG_THEAD__org_gwtproject_dom_client_TableSectionElement_$Overlay = "thead";

exports = TableSectionElement_$Overlay; 
//# sourceMappingURL=TableSectionElement$$Overlay.js.map