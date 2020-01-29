goog.module('org.gwtproject.user.client.ui.ProvidesResize$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ProvidesResize {
 /**
  * @public
  */
 static $clinit() {
  ProvidesResize.$clinit = () =>{};
  ProvidesResize.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_ProvidesResize = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_ProvidesResize;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ProvidesResize, 'org.gwtproject.user.client.ui.ProvidesResize');

ProvidesResize.$markImplementor(/** @type {Function} */ (ProvidesResize));

exports = ProvidesResize; 
//# sourceMappingURL=ProvidesResize.js.map