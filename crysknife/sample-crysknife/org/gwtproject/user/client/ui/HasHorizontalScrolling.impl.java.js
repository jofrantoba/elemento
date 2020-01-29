goog.module('org.gwtproject.user.client.ui.HasHorizontalScrolling$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class HasHorizontalScrolling {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getHorizontalScrollPosition__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getMaximumHorizontalScrollPosition__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getMinimumHorizontalScrollPosition__() {}
 /**
  * @abstract
  * @param {number} position
  * @public
  */
 m_setHorizontalScrollPosition__int(position) {}
 /**
  * @public
  */
 static $clinit() {
  HasHorizontalScrolling.$clinit = () =>{};
  HasHorizontalScrolling.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasHorizontalScrolling = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasHorizontalScrolling;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasHorizontalScrolling, 'org.gwtproject.user.client.ui.HasHorizontalScrolling');

HasHorizontalScrolling.$markImplementor(/** @type {Function} */ (HasHorizontalScrolling));

exports = HasHorizontalScrolling; 
//# sourceMappingURL=HasHorizontalScrolling.js.map