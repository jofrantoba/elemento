goog.module('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CaptionPanelImpl = goog.require('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImpl$impl');

let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

class CaptionPanelImplMozilla extends CaptionPanelImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CaptionPanelImplMozilla} */
 static $create__() {
  CaptionPanelImplMozilla.$clinit();
  let $instance = new CaptionPanelImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplMozilla__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImpl__();
 }
 /** @override */
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(/** Object */ fieldset, /** Object */ legend, /** SafeHtml */ caption) {
  this.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption.m_asString__(), true);
 }
 /** @override */
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(/** Object */ fieldset, /** Object */ legend, /** ?string */ caption, /** boolean */ asHTML) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(fieldset.style, "display", "none");
  super.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption, asHTML);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(fieldset.style, "display", "");
 }
 
 static $clinit() {
  CaptionPanelImplMozilla.$clinit = () =>{};
  CaptionPanelImplMozilla.$loadModules();
  CaptionPanelImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CaptionPanelImplMozilla;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(CaptionPanelImplMozilla, 'org.gwtproject.user.client.ui.CaptionPanel$CaptionPanelImplMozilla');

exports = CaptionPanelImplMozilla; 
//# sourceMappingURL=CaptionPanel$CaptionPanelImplMozilla.js.map