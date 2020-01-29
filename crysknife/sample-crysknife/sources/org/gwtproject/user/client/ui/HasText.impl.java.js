goog.module('org.gwtproject.user.client.ui.HasText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasText {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getText__() {}
 /**
  * @abstract
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {}
 /**
  * @public
  */
 static $clinit() {
  HasText.$clinit = () =>{};
  HasText.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasText = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasText;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasText, 'org.gwtproject.user.client.ui.HasText');

HasText.$markImplementor(/** @type {Function} */ (HasText));

exports = HasText; 
//# sourceMappingURL=HasText.js.map