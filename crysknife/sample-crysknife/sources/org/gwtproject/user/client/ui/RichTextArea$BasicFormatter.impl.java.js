goog.module('org.gwtproject.user.client.ui.RichTextArea.BasicFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let FontSize = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.FontSize$impl');
let Justification = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.Justification$impl');

/**
 * @interface
 * @deprecated
 */
class BasicFormatter {
 /** @abstract @return {?string} */
 m_getBackColor__() {}
 /** @abstract @return {?string} */
 m_getForeColor__() {}
 /** @abstract @return {boolean} */
 m_isBold__() {}
 /** @abstract @return {boolean} */
 m_isItalic__() {}
 /** @abstract @return {boolean} */
 m_isSubscript__() {}
 /** @abstract @return {boolean} */
 m_isSuperscript__() {}
 /** @abstract @return {boolean} */
 m_isUnderlined__() {}
 /** @abstract */
 m_selectAll__() {}
 /** @abstract */
 m_setBackColor__java_lang_String(/** ?string */ color) {}
 /** @abstract */
 m_setFontName__java_lang_String(/** ?string */ name) {}
 /** @abstract */
 m_setFontSize__org_gwtproject_user_client_ui_RichTextArea_FontSize(/** FontSize */ fontSize) {}
 /** @abstract */
 m_setForeColor__java_lang_String(/** ?string */ color) {}
 /** @abstract */
 m_setJustification__org_gwtproject_user_client_ui_RichTextArea_Justification(/** Justification */ justification) {}
 /** @abstract */
 m_toggleBold__() {}
 /** @abstract */
 m_toggleItalic__() {}
 /** @abstract */
 m_toggleSubscript__() {}
 /** @abstract */
 m_toggleSuperscript__() {}
 /** @abstract */
 m_toggleUnderline__() {}
 
 static $clinit() {
  BasicFormatter.$clinit = () =>{};
  BasicFormatter.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_RichTextArea_BasicFormatter = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RichTextArea_BasicFormatter;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BasicFormatter, 'org.gwtproject.user.client.ui.RichTextArea$BasicFormatter');

BasicFormatter.$markImplementor(/** @type {Function} */ (BasicFormatter));

exports = BasicFormatter; 
//# sourceMappingURL=RichTextArea$BasicFormatter.js.map