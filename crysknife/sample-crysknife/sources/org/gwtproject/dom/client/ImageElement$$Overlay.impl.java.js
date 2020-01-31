goog.module('org.gwtproject.dom.client.ImageElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ImageElement_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Element(/** Object */ elem) {
  ImageElement_$Overlay.$clinit();
  $Asserts.$assert(ImageElement_$Overlay.m_is__org_gwtproject_dom_client_Element(elem));
  return /**@type {Object}*/ ($Casts.$to(elem, ImageElement_$Overlay));
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  ImageElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(o)) {
   return ImageElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(o, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Node(/** Object */ node) {
  ImageElement_$Overlay.$clinit();
  if ($Overlay.m_is__org_gwtproject_dom_client_Node(node)) {
   return ImageElement_$Overlay.m_is__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(node, $Overlay)));
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__org_gwtproject_dom_client_Element(/** Object */ elem) {
  ImageElement_$Overlay.$clinit();
  return !$Equality.$same(elem, null) && $Overlay.m_hasTagName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, ImageElement_$Overlay.f_TAG__org_gwtproject_dom_client_ImageElement_$Overlay);
 }
 /** @return {boolean} */
 static m_isMap__$devirt__org_gwtproject_dom_client_ImageElement(/** !Object */ $thisArg) {
  ImageElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object($thisArg.isMap);
 }
 /** @return {boolean} */
 static m_useMap__$devirt__org_gwtproject_dom_client_ImageElement(/** !Object */ $thisArg) {
  ImageElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object($thisArg.useMap);
 }
 
 static $clinit() {
  ImageElement_$Overlay.$clinit = () =>{};
  ImageElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageElement_$Overlay, 'Object');

/**@const {?string}*/
ImageElement_$Overlay.f_TAG__org_gwtproject_dom_client_ImageElement_$Overlay = "img";

exports = ImageElement_$Overlay; 
//# sourceMappingURL=ImageElement$$Overlay.js.map