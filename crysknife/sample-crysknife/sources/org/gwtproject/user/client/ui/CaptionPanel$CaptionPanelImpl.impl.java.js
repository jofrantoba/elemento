goog.module('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class CaptionPanelImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CaptionPanelImpl} */
 static $create__() {
  CaptionPanelImpl.$clinit();
  let $instance = new CaptionPanelImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(/** Object */ fieldset, /** Object */ legend, /** SafeHtml */ caption) {
  this.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption.m_asString__(), true);
 }
 
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(/** Object */ fieldset, /** Object */ legend, /** ?string */ caption, /** boolean */ asHTML) {
  $Asserts.$assert((!$Equality.$same(caption, null)));
  if (asHTML) {
   $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(legend, caption);
  } else {
   $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(legend, caption);
  }
  if (!$Equality.$same("", caption)) {
   fieldset.insertBefore(legend, fieldset.firstChild);
  } else if (!$Equality.$same(legend.parentNode, null)) {
   fieldset.removeChild(legend);
  }
 }
 
 static $clinit() {
  CaptionPanelImpl.$clinit = () =>{};
  CaptionPanelImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CaptionPanelImpl;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(CaptionPanelImpl, 'org.gwtproject.user.client.ui.CaptionPanel$CaptionPanelImpl');

exports = CaptionPanelImpl; 
//# sourceMappingURL=CaptionPanel$CaptionPanelImpl.js.map