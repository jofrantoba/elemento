goog.module('org.gwtproject.user.client.ui.ButtonBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @abstract
 * @implements {HasHTML}
 * @implements {HasSafeHtml}
  */
class ButtonBase extends FocusWidget {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_ui_ButtonBase__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__org_gwtproject_dom_client_Element(elem);
 }
 /** @override @return {?string} */
 m_getHTML__() {
  return $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override @return {?string} */
 m_getText__() {
  return $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override */
 m_setHTML__java_lang_String(/** ?string */ html) {
  $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), html);
 }
 /** @override */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), text);
 }
 
 static $clinit() {
  ButtonBase.$clinit = () =>{};
  ButtonBase.$loadModules();
  FocusWidget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ButtonBase;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(ButtonBase, 'org.gwtproject.user.client.ui.ButtonBase');

HasHTML.$markImplementor(ButtonBase);
HasSafeHtml.$markImplementor(ButtonBase);

exports = ButtonBase; 
//# sourceMappingURL=ButtonBase.js.map