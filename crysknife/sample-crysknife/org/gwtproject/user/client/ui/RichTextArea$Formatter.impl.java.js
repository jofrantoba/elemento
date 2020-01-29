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
 /**
  * @abstract
  * @override
  * @param {?string} url
  * @public
  */
 m_createLink__java_lang_String(url) {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_getBackColor__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_getForeColor__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_insertHorizontalRule__() {}
 /**
  * @abstract
  * @param {?string} html
  * @public
  */
 m_insertHTML__java_lang_String(html) {}
 /**
  * @abstract
  * @override
  * @param {?string} url
  * @public
  */
 m_insertImage__java_lang_String(url) {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_insertOrderedList__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_insertUnorderedList__() {}
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_isBold__() {}
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_isItalic__() {}
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_isStrikethrough__() {}
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_isSubscript__() {}
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_isSuperscript__() {}
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_isUnderlined__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_leftIndent__() {}
 /**
  * @abstract
  * @public
  */
 m_redo__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_removeFormat__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_removeLink__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_rightIndent__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_selectAll__() {}
 /**
  * @abstract
  * @override
  * @param {?string} color
  * @public
  */
 m_setBackColor__java_lang_String(color) {}
 /**
  * @abstract
  * @override
  * @param {?string} name
  * @public
  */
 m_setFontName__java_lang_String(name) {}
 /**
  * @abstract
  * @override
  * @param {FontSize} fontSize
  * @public
  */
 m_setFontSize__org_gwtproject_user_client_ui_RichTextArea_FontSize(fontSize) {}
 /**
  * @abstract
  * @override
  * @param {?string} color
  * @public
  */
 m_setForeColor__java_lang_String(color) {}
 /**
  * @abstract
  * @override
  * @param {Justification} justification
  * @public
  */
 m_setJustification__org_gwtproject_user_client_ui_RichTextArea_Justification(justification) {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_toggleBold__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_toggleItalic__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_toggleStrikethrough__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_toggleSubscript__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_toggleSuperscript__() {}
 /**
  * @abstract
  * @override
  * @public
  */
 m_toggleUnderline__() {}
 /**
  * @abstract
  * @public
  */
 m_undo__() {}
 /**
  * @public
  */
 static $clinit() {
  Formatter.$clinit = () =>{};
  Formatter.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ExtendedFormatter.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_RichTextArea_Formatter = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RichTextArea_Formatter;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Formatter, 'org.gwtproject.user.client.ui.RichTextArea$Formatter');

Formatter.$markImplementor(/** @type {Function} */ (Formatter));

exports = Formatter; 
//# sourceMappingURL=RichTextArea$Formatter.js.map