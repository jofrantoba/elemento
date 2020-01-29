goog.module('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class QuoteElement_$Overlay {
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(elem) {
  QuoteElement_$Overlay.$clinit();
  $Asserts.$assert(QuoteElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object} */ ($Casts.$to(elem, QuoteElement_$Overlay));
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_core_client_JavaScriptObject(o) {
  QuoteElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return QuoteElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} node
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Node(node) {
  QuoteElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return QuoteElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /**
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 static m_is__org_gwtproject_dom_client_Element(elem) {
  QuoteElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), QuoteElement_$Overlay.f_TAG_Q__org_gwtproject_dom_client_QuoteElement_$Overlay) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(elem), QuoteElement_$Overlay.f_TAG_BLOCKQUOTE__org_gwtproject_dom_client_QuoteElement_$Overlay));
 }
 /**
  * @param {!Object} $thisArg
  * @param {SafeUri} cite
  * @public
  */
 static m_setCite__$devirt__org_gwtproject_dom_client_QuoteElement__org_gwtproject_safehtml_shared_SafeUri($thisArg, cite) {
  QuoteElement_$Overlay.$clinit();
  $thisArg.cite = cite.m_asString__();
 }
 /**
  * @public
  */
 static $clinit() {
  QuoteElement_$Overlay.$clinit = () =>{};
  QuoteElement_$Overlay.$loadModules();
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
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(QuoteElement_$Overlay, 'Object');

/** @public {?string} @const */
QuoteElement_$Overlay.f_TAG_BLOCKQUOTE__org_gwtproject_dom_client_QuoteElement_$Overlay = "blockquote";
/** @public {?string} @const */
QuoteElement_$Overlay.f_TAG_Q__org_gwtproject_dom_client_QuoteElement_$Overlay = "q";

exports = QuoteElement_$Overlay; 
//# sourceMappingURL=QuoteElement$$Overlay.js.map