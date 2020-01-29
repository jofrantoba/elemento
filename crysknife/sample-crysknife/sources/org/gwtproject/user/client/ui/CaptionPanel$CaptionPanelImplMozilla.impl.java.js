goog.module('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CaptionPanelImpl = goog.require('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImpl$impl');

let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

class CaptionPanelImplMozilla extends CaptionPanelImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CaptionPanelImplMozilla}
  * @public
  */
 static $create__() {
  CaptionPanelImplMozilla.$clinit();
  let $instance = new CaptionPanelImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplMozilla__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImpl__();
 }
 /**
  * @override
  * @param {Object} fieldset
  * @param {Object} legend
  * @param {SafeHtml} caption
  * @public
  */
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(fieldset, legend, caption) {
  this.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption.m_asString__(), true);
 }
 /**
  * @override
  * @param {Object} fieldset
  * @param {Object} legend
  * @param {?string} caption
  * @param {boolean} asHTML
  * @public
  */
 m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption, asHTML) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(fieldset.style, "display", "none");
  super.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(fieldset, legend, caption, asHTML);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(fieldset.style, "display", "");
 }
 /**
  * @public
  */
 static $clinit() {
  CaptionPanelImplMozilla.$clinit = () =>{};
  CaptionPanelImplMozilla.$loadModules();
  CaptionPanelImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CaptionPanelImplMozilla;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(CaptionPanelImplMozilla, 'org.gwtproject.user.client.ui.CaptionPanel$CaptionPanelImplMozilla');

exports = CaptionPanelImplMozilla; 
//# sourceMappingURL=CaptionPanel$CaptionPanelImplMozilla.js.map