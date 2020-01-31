goog.module('org.gwtproject.user.client.ui.RichTextArea.ExtendedFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BasicFormatter = goog.require('org.gwtproject.user.client.ui.RichTextArea.BasicFormatter$impl');

/**
 * @interface
 * @extends {BasicFormatter}
 * @deprecated
 */
class ExtendedFormatter {
 /** @abstract */
 m_createLink__java_lang_String(/** ?string */ url) {}
 /** @abstract */
 m_insertHorizontalRule__() {}
 /** @abstract */
 m_insertImage__java_lang_String(/** ?string */ url) {}
 /** @abstract */
 m_insertOrderedList__() {}
 /** @abstract */
 m_insertUnorderedList__() {}
 /** @abstract @return {boolean} */
 m_isStrikethrough__() {}
 /** @abstract */
 m_leftIndent__() {}
 /** @abstract */
 m_removeFormat__() {}
 /** @abstract */
 m_removeLink__() {}
 /** @abstract */
 m_rightIndent__() {}
 /** @abstract */
 m_toggleStrikethrough__() {}
 
 static $clinit() {
  ExtendedFormatter.$clinit = () =>{};
  ExtendedFormatter.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  BasicFormatter.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_RichTextArea_ExtendedFormatter = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RichTextArea_ExtendedFormatter;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ExtendedFormatter, 'org.gwtproject.user.client.ui.RichTextArea$ExtendedFormatter');

ExtendedFormatter.$markImplementor(/** @type {Function} */ (ExtendedFormatter));

exports = ExtendedFormatter; 
//# sourceMappingURL=RichTextArea$ExtendedFormatter.js.map