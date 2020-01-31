goog.module('org.gwtproject.user.client.ui.RichTextArea.Formatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ExtendedFormatter = goog.require('org.gwtproject.user.client.ui.RichTextArea.ExtendedFormatter$impl');

let FontSize = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.FontSize$impl');
let Justification = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.Justification$impl');

/**
 * @interface
 * @extends {ExtendedFormatter}
 */
class Formatter {
 /** @abstract @override */
 m_createLink__java_lang_String(/** ?string */ url) {}
 /** @abstract @override @return {?string} */
 m_getBackColor__() {}
 /** @abstract @override @return {?string} */
 m_getForeColor__() {}
 /** @abstract @override */
 m_insertHorizontalRule__() {}
 /** @abstract */
 m_insertHTML__java_lang_String(/** ?string */ html) {}
 /** @abstract @override */
 m_insertImage__java_lang_String(/** ?string */ url) {}
 /** @abstract @override */
 m_insertOrderedList__() {}
 /** @abstract @override */
 m_insertUnorderedList__() {}
 /** @abstract @override @return {boolean} */
 m_isBold__() {}
 /** @abstract @override @return {boolean} */
 m_isItalic__() {}
 /** @abstract @override @return {boolean} */
 m_isStrikethrough__() {}
 /** @abstract @override @return {boolean} */
 m_isSubscript__() {}
 /** @abstract @override @return {boolean} */
 m_isSuperscript__() {}
 /** @abstract @override @return {boolean} */
 m_isUnderlined__() {}
 /** @abstract @override */
 m_leftIndent__() {}
 /** @abstract */
 m_redo__() {}
 /** @abstract @override */
 m_removeFormat__() {}
 /** @abstract @override */
 m_removeLink__() {}
 /** @abstract @override */
 m_rightIndent__() {}
 /** @abstract @override */
 m_selectAll__() {}
 /** @abstract @override */
 m_setBackColor__java_lang_String(/** ?string */ color) {}
 /** @abstract @override */
 m_setFontName__java_lang_String(/** ?string */ name) {}
 /** @abstract @override */
 m_setFontSize__org_gwtproject_user_client_ui_RichTextArea_FontSize(/** FontSize */ fontSize) {}
 /** @abstract @override */
 m_setForeColor__java_lang_String(/** ?string */ color) {}
 /** @abstract @override */
 m_setJustification__org_gwtproject_user_client_ui_RichTextArea_Justification(/** Justification */ justification) {}
 /** @abstract @override */
 m_toggleBold__() {}
 /** @abstract @override */
 m_toggleItalic__() {}
 /** @abstract @override */
 m_toggleStrikethrough__() {}
 /** @abstract @override */
 m_toggleSubscript__() {}
 /** @abstract @override */
 m_toggleSuperscript__() {}
 /** @abstract @override */
 m_toggleUnderline__() {}
 /** @abstract */
 m_undo__() {}
 
 static $clinit() {
  Formatter.$clinit = () =>{};
  Formatter.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ExtendedFormatter.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_RichTextArea_Formatter = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RichTextArea_Formatter;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Formatter, 'org.gwtproject.user.client.ui.RichTextArea$Formatter');

Formatter.$markImplementor(/** @type {Function} */ (Formatter));

exports = Formatter; 
//# sourceMappingURL=RichTextArea$Formatter.js.map