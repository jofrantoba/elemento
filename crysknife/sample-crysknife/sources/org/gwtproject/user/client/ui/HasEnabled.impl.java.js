goog.module('org.gwtproject.user.client.ui.HasEnabled$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasEnabled {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {}
 /**
  * @abstract
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {}
 /**
  * @public
  */
 static $clinit() {
  HasEnabled.$clinit = () =>{};
  HasEnabled.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasEnabled = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasEnabled;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasEnabled, 'org.gwtproject.user.client.ui.HasEnabled');

HasEnabled.$markImplementor(/** @type {Function} */ (HasEnabled));

exports = HasEnabled; 
//# sourceMappingURL=HasEnabled.js.map