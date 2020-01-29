goog.module('org.gwtproject.user.client.ui.HasVerticalScrolling$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasVerticalScrolling {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getMaximumVerticalScrollPosition__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getMinimumVerticalScrollPosition__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getVerticalScrollPosition__() {}
 /**
  * @abstract
  * @param {number} position
  * @public
  */
 m_setVerticalScrollPosition__int(position) {}
 /**
  * @public
  */
 static $clinit() {
  HasVerticalScrolling.$clinit = () =>{};
  HasVerticalScrolling.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasVerticalScrolling = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasVerticalScrolling;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasVerticalScrolling, 'org.gwtproject.user.client.ui.HasVerticalScrolling');

HasVerticalScrolling.$markImplementor(/** @type {Function} */ (HasVerticalScrolling));

exports = HasVerticalScrolling; 
//# sourceMappingURL=HasVerticalScrolling.js.map