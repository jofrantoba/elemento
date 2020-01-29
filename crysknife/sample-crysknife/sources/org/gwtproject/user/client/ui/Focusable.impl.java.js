goog.module('org.gwtproject.user.client.ui.Focusable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Focusable {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getTabIndex__() {}
 /**
  * @abstract
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {}
 /**
  * @abstract
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {}
 /**
  * @abstract
  * @param {number} index
  * @public
  */
 m_setTabIndex__int(index) {}
 /**
  * @public
  */
 static $clinit() {
  Focusable.$clinit = () =>{};
  Focusable.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_Focusable = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_Focusable;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Focusable, 'org.gwtproject.user.client.ui.Focusable');

Focusable.$markImplementor(/** @type {Function} */ (Focusable));

exports = Focusable; 
//# sourceMappingURL=Focusable.js.map