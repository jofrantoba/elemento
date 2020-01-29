goog.module('org.gwtproject.dom.client.DataTransfer.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DataTransfer_$Overlay = goog.forwardDeclare('elemental2.dom.DataTransfer.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DropEffect = goog.forwardDeclare('org.gwtproject.dom.client.DataTransfer.DropEffect$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

class org_gwtproject_dom_client_DataTransfer_$Overlay {
 /**
  * @param {!Object} $thisArg
  * @param {Object} element
  * @param {number} x
  * @param {number} y
  * @public
  */
 static m_setDragImage__$devirt__org_gwtproject_dom_client_DataTransfer__org_gwtproject_dom_client_Element__int__int($thisArg, element, x, y) {
  org_gwtproject_dom_client_DataTransfer_$Overlay.$clinit();
  if (!$Equality.$same($thisArg.setDragImage, null)) {
   $thisArg.setDragImage(element, x, y);
  }
 }
 /**
  * @param {!Object} $thisArg
  * @param {DropEffect} dropEffect
  * @public
  */
 static m_setDropEffect__$devirt__org_gwtproject_dom_client_DataTransfer__org_gwtproject_dom_client_DataTransfer_DropEffect($thisArg, dropEffect) {
  org_gwtproject_dom_client_DataTransfer_$Overlay.$clinit();
  org_gwtproject_dom_client_DataTransfer_$Overlay.m_setDropEffect__$devirt__org_gwtproject_dom_client_DataTransfer__java_lang_String($thisArg, j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(dropEffect.name(), Locale.f_ROOT__java_util_Locale));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} dropEffect
  * @public
  */
 static m_setDropEffect__$devirt__org_gwtproject_dom_client_DataTransfer__java_lang_String($thisArg, dropEffect) {
  if (Js.m_isTruthy__java_lang_Object(/**@type {DataTransfer} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).dropEffect)) {
   /**@type {DataTransfer} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).dropEffect = dropEffect;
  }
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_dom_client_DataTransfer_$Overlay.$clinit = () =>{};
  org_gwtproject_dom_client_DataTransfer_$Overlay.$loadModules();
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
  Locale = goog.module.get('java.util.Locale$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_dom_client_DataTransfer_$Overlay, 'Object');

exports = org_gwtproject_dom_client_DataTransfer_$Overlay; 
//# sourceMappingURL=DataTransfer$$Overlay.js.map