goog.module('org.gwtproject.user.client.ui.HasEnabled$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasEnabled {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract */
 m_setEnabled__boolean(/** boolean */ enabled) {}
 
 static $clinit() {
  HasEnabled.$clinit = () =>{};
  HasEnabled.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasEnabled = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasEnabled;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasEnabled, 'org.gwtproject.user.client.ui.HasEnabled');

HasEnabled.$markImplementor(/** @type {Function} */ (HasEnabled));

exports = HasEnabled; 
//# sourceMappingURL=HasEnabled.js.map