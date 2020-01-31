goog.module('org.gwtproject.user.client.ui.HasText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasText {
 /** @abstract @return {?string} */
 m_getText__() {}
 /** @abstract */
 m_setText__java_lang_String(/** ?string */ text) {}
 
 static $clinit() {
  HasText.$clinit = () =>{};
  HasText.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasText = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasText;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasText, 'org.gwtproject.user.client.ui.HasText');

HasText.$markImplementor(/** @type {Function} */ (HasText));

exports = HasText; 
//# sourceMappingURL=HasText.js.map