goog.module('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplSafari$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CaptionPanelImpl = goog.require('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImpl$impl');

let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplSafari.$1$impl');

class CaptionPanelImplSafari extends CaptionPanelImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CaptionPanelImplSafari} */
 static $create__() {
  CaptionPanelImplSafari.$clinit();
  let $instance = new CaptionPanelImplSafari();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari__() {
  this.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImpl__();
 }
 /** @override */
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(/** Object */ fieldset, /** Object */ legend, /** SafeHtml */ caption) {
  this.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption.m_asString__(), true);
 }
 /** @override */
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(/** Object */ fieldset, /** Object */ legend, /** ?string */ caption, /** boolean */ asHTML) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(fieldset.style, "visibility", "hidden");
  super.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption, asHTML);
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari__org_gwtproject_dom_client_FieldSetElement(this, fieldset));
 }
 
 static $clinit() {
  CaptionPanelImplSafari.$clinit = () =>{};
  CaptionPanelImplSafari.$loadModules();
  CaptionPanelImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CaptionPanelImplSafari;
 }
 
 static $loadModules() {
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplSafari.$1$impl');
 }
 
}
$Util.$setClassMetadata(CaptionPanelImplSafari, 'org.gwtproject.user.client.ui.CaptionPanel$CaptionPanelImplSafari');

exports = CaptionPanelImplSafari; 
//# sourceMappingURL=CaptionPanel$CaptionPanelImplSafari.js.map