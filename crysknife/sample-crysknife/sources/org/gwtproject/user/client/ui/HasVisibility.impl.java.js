goog.module('org.gwtproject.user.client.ui.HasVisibility$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasVisibility {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isVisible__() {}
 /**
  * @abstract
  * @param {boolean} visible
  * @public
  */
 m_setVisible__boolean(visible) {}
 /**
  * @public
  */
 static $clinit() {
  HasVisibility.$clinit = () =>{};
  HasVisibility.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasVisibility = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasVisibility;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasVisibility, 'org.gwtproject.user.client.ui.HasVisibility');

HasVisibility.$markImplementor(/** @type {Function} */ (HasVisibility));

exports = HasVisibility; 
//# sourceMappingURL=HasVisibility.js.map