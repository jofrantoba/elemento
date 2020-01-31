goog.module('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');

/**
 * @interface
 */
class HasKeyboardSelectionPolicy {
 /** @abstract @return {KeyboardSelectionPolicy} */
 m_getKeyboardSelectionPolicy__() {}
 /** @abstract */
 m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(/** KeyboardSelectionPolicy */ policy) {}
 
 static $clinit() {
  HasKeyboardSelectionPolicy.$clinit = () =>{};
  HasKeyboardSelectionPolicy.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyboardSelectionPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy');

HasKeyboardSelectionPolicy.$markImplementor(/** @type {Function} */ (HasKeyboardSelectionPolicy));

exports = HasKeyboardSelectionPolicy; 
//# sourceMappingURL=HasKeyboardSelectionPolicy.js.map