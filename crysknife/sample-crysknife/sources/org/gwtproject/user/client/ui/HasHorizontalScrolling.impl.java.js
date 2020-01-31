goog.module('org.gwtproject.user.client.ui.HasHorizontalScrolling$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasHorizontalScrolling {
 /** @abstract @return {number} */
 m_getHorizontalScrollPosition__() {}
 /** @abstract @return {number} */
 m_getMaximumHorizontalScrollPosition__() {}
 /** @abstract @return {number} */
 m_getMinimumHorizontalScrollPosition__() {}
 /** @abstract */
 m_setHorizontalScrollPosition__int(/** number */ position) {}
 
 static $clinit() {
  HasHorizontalScrolling.$clinit = () =>{};
  HasHorizontalScrolling.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasHorizontalScrolling = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasHorizontalScrolling;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasHorizontalScrolling, 'org.gwtproject.user.client.ui.HasHorizontalScrolling');

HasHorizontalScrolling.$markImplementor(/** @type {Function} */ (HasHorizontalScrolling));

exports = HasHorizontalScrolling; 
//# sourceMappingURL=HasHorizontalScrolling.js.map