goog.module('org.gwtproject.dom.client.Touch.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Touch_$Overlay = goog.forwardDeclare('elemental2.dom.Touch.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.EventTarget.$Overlay$impl');

class org_gwtproject_dom_client_Touch_$Overlay {
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getClientX__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).clientX);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getClientY__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).clientY);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getIdentifier__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return /**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).identifier;
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getPageX__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).pageX);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getPageY__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).pageY);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} target
  * @return {number}
  * @public
  */
 static m_getRelativeX__$devirt__org_gwtproject_dom_client_Touch__org_gwtproject_dom_client_Element($thisArg, target) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return org_gwtproject_dom_client_Touch_$Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_Touch($thisArg) - $Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(target) + $Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(target) + Document_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Document(target.ownerDocument);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} target
  * @return {number}
  * @public
  */
 static m_getRelativeY__$devirt__org_gwtproject_dom_client_Touch__org_gwtproject_dom_client_Element($thisArg, target) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return org_gwtproject_dom_client_Touch_$Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_Touch($thisArg) - $Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(target) + $Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(target) + Document_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Document(target.ownerDocument);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getScreenX__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).screenX);
 }
 /**
  * @param {!Object} $thisArg
  * @return {number}
  * @public
  */
 static m_getScreenY__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).screenY);
 }
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_getTarget__$devirt__org_gwtproject_dom_client_Touch($thisArg) {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit();
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(/**@type {Touch} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).target));
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_dom_client_Touch_$Overlay.$clinit = () =>{};
  org_gwtproject_dom_client_Touch_$Overlay.$loadModules();
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
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_dom_client_Touch_$Overlay, 'Object');

exports = org_gwtproject_dom_client_Touch_$Overlay; 
//# sourceMappingURL=Touch$$Overlay.js.map