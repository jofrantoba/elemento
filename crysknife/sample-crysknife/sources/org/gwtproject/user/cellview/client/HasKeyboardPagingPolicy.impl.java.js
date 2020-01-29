goog.module('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyboardSelectionPolicy = goog.require('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy$impl');

let KeyboardPagingPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');

/**
 * @interface
 * @extends {HasKeyboardSelectionPolicy}
 */
class HasKeyboardPagingPolicy {
 /**
  * @abstract
  * @return {KeyboardPagingPolicy}
  * @public
  */
 m_getKeyboardPagingPolicy__() {}
 /**
  * @abstract
  * @param {KeyboardPagingPolicy} policy
  * @public
  */
 m_setKeyboardPagingPolicy__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy(policy) {}
 /**
  * @public
  */
 static $clinit() {
  HasKeyboardPagingPolicy.$clinit = () =>{};
  HasKeyboardPagingPolicy.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasKeyboardSelectionPolicy.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyboardPagingPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy');

HasKeyboardPagingPolicy.$markImplementor(/** @type {Function} */ (HasKeyboardPagingPolicy));

exports = HasKeyboardPagingPolicy; 
//# sourceMappingURL=HasKeyboardPagingPolicy.js.map