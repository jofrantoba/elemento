goog.module('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');

/**
 * @interface
 */
class HasKeyboardSelectionPolicy {
 /**
  * @abstract
  * @return {KeyboardSelectionPolicy}
  * @public
  */
 m_getKeyboardSelectionPolicy__() {}
 /**
  * @abstract
  * @param {KeyboardSelectionPolicy} policy
  * @public
  */
 m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(policy) {}
 /**
  * @public
  */
 static $clinit() {
  HasKeyboardSelectionPolicy.$clinit = () =>{};
  HasKeyboardSelectionPolicy.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyboardSelectionPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy');

HasKeyboardSelectionPolicy.$markImplementor(/** @type {Function} */ (HasKeyboardSelectionPolicy));

exports = HasKeyboardSelectionPolicy; 
//# sourceMappingURL=HasKeyboardSelectionPolicy.js.map