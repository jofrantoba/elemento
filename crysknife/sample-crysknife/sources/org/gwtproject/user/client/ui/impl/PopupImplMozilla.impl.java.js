goog.module('org.gwtproject.user.client.ui.impl.PopupImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PopupImpl = goog.require('org.gwtproject.user.client.ui.impl.PopupImpl$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.PopupImplMozilla.$1$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class PopupImplMozilla extends PopupImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PopupImplMozilla} */
 static $create__() {
  PopupImplMozilla.$clinit();
  let $instance = new PopupImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_PopupImplMozilla__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_PopupImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_ui_impl_PopupImpl__();
 }
 /** @return {boolean} */
 static m_isFF2Mac__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {Object} */
 m_createElement__() {
  let outerElem = DOM.m_createDiv__();
  if (PopupImplMozilla.f_isFF2Mac__org_gwtproject_user_client_ui_impl_PopupImplMozilla_) {
   $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(outerElem, "<div></div>");
   Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_client_ui_impl_PopupImplMozilla__org_gwtproject_dom_client_Element(this, outerElem));
  }
  return outerElem;
 }
 /** @override @return {Object} */
 m_getContainerElement__org_gwtproject_dom_client_Element(/** Object */ outerElem) {
  return PopupImplMozilla.f_isFF2Mac__org_gwtproject_user_client_ui_impl_PopupImplMozilla_ ? $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(outerElem) : outerElem;
 }
 /** @override @return {Object} */
 m_getStyleElement__org_gwtproject_dom_client_Element(/** Object */ outerElem) {
  return PopupImplMozilla.f_isFF2Mac__org_gwtproject_user_client_ui_impl_PopupImplMozilla_ ? outerElem : super.m_getStyleElement__org_gwtproject_dom_client_Element(outerElem);
 }
 /** @override */
 m_setClip__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ popup, /** ?string */ rect) {
  super.m_setClip__org_gwtproject_dom_client_Element__java_lang_String(popup, rect);
  Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(popup.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  Style_$Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(popup.style);
 }
 
 static $clinit() {
  PopupImplMozilla.$clinit = () =>{};
  PopupImplMozilla.$loadModules();
  PopupImpl.$clinit();
  PopupImplMozilla.f_isFF2Mac__org_gwtproject_user_client_ui_impl_PopupImplMozilla_ = PopupImplMozilla.m_isFF2Mac__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopupImplMozilla;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.impl.PopupImplMozilla.$1$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(PopupImplMozilla, 'org.gwtproject.user.client.ui.impl.PopupImplMozilla');

/**@type {boolean}*/
PopupImplMozilla.f_isFF2Mac__org_gwtproject_user_client_ui_impl_PopupImplMozilla_ = false;

exports = PopupImplMozilla; 
//# sourceMappingURL=PopupImplMozilla.js.map