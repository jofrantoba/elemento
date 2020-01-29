goog.module('org.gwtproject.user.client.ui.RichTextArea.BasicFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let FontSize = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.FontSize$impl');
let Justification = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.Justification$impl');

/**
 * @interface
 * @deprecated
 */
class BasicFormatter {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getBackColor__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getForeColor__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isBold__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isItalic__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isSubscript__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isSuperscript__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isUnderlined__() {}
 /**
  * @abstract
  * @public
  */
 m_selectAll__() {}
 /**
  * @abstract
  * @param {?string} color
  * @public
  */
 m_setBackColor__java_lang_String(color) {}
 /**
  * @abstract
  * @param {?string} name
  * @public
  */
 m_setFontName__java_lang_String(name) {}
 /**
  * @abstract
  * @param {FontSize} fontSize
  * @public
  */
 m_setFontSize__org_gwtproject_user_client_ui_RichTextArea_FontSize(fontSize) {}
 /**
  * @abstract
  * @param {?string} color
  * @public
  */
 m_setForeColor__java_lang_String(color) {}
 /**
  * @abstract
  * @param {Justification} justification
  * @public
  */
 m_setJustification__org_gwtproject_user_client_ui_RichTextArea_Justification(justification) {}
 /**
  * @abstract
  * @public
  */
 m_toggleBold__() {}
 /**
  * @abstract
  * @public
  */
 m_toggleItalic__() {}
 /**
  * @abstract
  * @public
  */
 m_toggleSubscript__() {}
 /**
  * @abstract
  * @public
  */
 m_toggleSuperscript__() {}
 /**
  * @abstract
  * @public
  */
 m_toggleUnderline__() {}
 /**
  * @public
  */
 static $clinit() {
  BasicFormatter.$clinit = () =>{};
  BasicFormatter.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_RichTextArea_BasicFormatter = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RichTextArea_BasicFormatter;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BasicFormatter, 'org.gwtproject.user.client.ui.RichTextArea$BasicFormatter');

BasicFormatter.$markImplementor(/** @type {Function} */ (BasicFormatter));

exports = BasicFormatter; 
//# sourceMappingURL=RichTextArea$BasicFormatter.js.map