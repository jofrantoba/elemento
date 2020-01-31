goog.module('org.gwtproject.user.client.ui.HasVerticalScrolling$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasVerticalScrolling {
 /** @abstract @return {number} */
 m_getMaximumVerticalScrollPosition__() {}
 /** @abstract @return {number} */
 m_getMinimumVerticalScrollPosition__() {}
 /** @abstract @return {number} */
 m_getVerticalScrollPosition__() {}
 /** @abstract */
 m_setVerticalScrollPosition__int(/** number */ position) {}
 
 static $clinit() {
  HasVerticalScrolling.$clinit = () =>{};
  HasVerticalScrolling.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasVerticalScrolling = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasVerticalScrolling;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasVerticalScrolling, 'org.gwtproject.user.client.ui.HasVerticalScrolling');

HasVerticalScrolling.$markImplementor(/** @type {Function} */ (HasVerticalScrolling));

exports = HasVerticalScrolling; 
//# sourceMappingURL=HasVerticalScrolling.js.map