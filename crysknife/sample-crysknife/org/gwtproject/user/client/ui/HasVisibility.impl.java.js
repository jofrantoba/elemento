goog.module('org.gwtproject.user.client.ui.HasVisibility$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasVisibility {
 /** @abstract @return {boolean} */
 m_isVisible__() {}
 /** @abstract */
 m_setVisible__boolean(/** boolean */ visible) {}
 
 static $clinit() {
  HasVisibility.$clinit = () =>{};
  HasVisibility.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasVisibility = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasVisibility;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasVisibility, 'org.gwtproject.user.client.ui.HasVisibility');

HasVisibility.$markImplementor(/** @type {Function} */ (HasVisibility));

exports = HasVisibility; 
//# sourceMappingURL=HasVisibility.js.map