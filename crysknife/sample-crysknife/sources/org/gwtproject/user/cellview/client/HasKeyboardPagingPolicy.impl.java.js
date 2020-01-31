goog.module('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyboardSelectionPolicy = goog.require('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy$impl');

let KeyboardPagingPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');

/**
 * @interface
 * @extends {HasKeyboardSelectionPolicy}
 */
class HasKeyboardPagingPolicy {
 /** @abstract @return {KeyboardPagingPolicy} */
 m_getKeyboardPagingPolicy__() {}
 /** @abstract */
 m_setKeyboardPagingPolicy__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy(/** KeyboardPagingPolicy */ policy) {}
 
 static $clinit() {
  HasKeyboardPagingPolicy.$clinit = () =>{};
  HasKeyboardPagingPolicy.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasKeyboardSelectionPolicy.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyboardPagingPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy');

HasKeyboardPagingPolicy.$markImplementor(/** @type {Function} */ (HasKeyboardPagingPolicy));

exports = HasKeyboardPagingPolicy; 
//# sourceMappingURL=HasKeyboardPagingPolicy.js.map