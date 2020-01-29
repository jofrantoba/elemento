goog.module('org.gwtproject.user.client.ui.RichTextArea.ExtendedFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BasicFormatter = goog.require('org.gwtproject.user.client.ui.RichTextArea.BasicFormatter$impl');

/**
 * @interface
 * @extends {BasicFormatter}
 * @deprecated
 */
class ExtendedFormatter {
 /**
  * @abstract
  * @param {?string} url
  * @public
  */
 m_createLink__java_lang_String(url) {}
 /**
  * @abstract
  * @public
  */
 m_insertHorizontalRule__() {}
 /**
  * @abstract
  * @param {?string} url
  * @public
  */
 m_insertImage__java_lang_String(url) {}
 /**
  * @abstract
  * @public
  */
 m_insertOrderedList__() {}
 /**
  * @abstract
  * @public
  */
 m_insertUnorderedList__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isStrikethrough__() {}
 /**
  * @abstract
  * @public
  */
 m_leftIndent__() {}
 /**
  * @abstract
  * @public
  */
 m_removeFormat__() {}
 /**
  * @abstract
  * @public
  */
 m_removeLink__() {}
 /**
  * @abstract
  * @public
  */
 m_rightIndent__() {}
 /**
  * @abstract
  * @public
  */
 m_toggleStrikethrough__() {}
 /**
  * @public
  */
 static $clinit() {
  ExtendedFormatter.$clinit = () =>{};
  ExtendedFormatter.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  BasicFormatter.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_RichTextArea_ExtendedFormatter = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RichTextArea_ExtendedFormatter;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ExtendedFormatter, 'org.gwtproject.user.client.ui.RichTextArea$ExtendedFormatter');

ExtendedFormatter.$markImplementor(/** @type {Function} */ (ExtendedFormatter));

exports = ExtendedFormatter; 
//# sourceMappingURL=RichTextArea$ExtendedFormatter.js.map