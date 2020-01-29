goog.module('org.gwtproject.user.client.ui.RequiresResize$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.RequiresResize.$LambdaAdaptor$impl');

/**
 * @interface
 */
class RequiresResize {
 /**
  * @abstract
  * @public
  */
 m_onResize__() {}
 /**
  * @param {?function():void} fn
  * @return {RequiresResize}
  * @public
  */
 static $adapt(fn) {
  RequiresResize.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  RequiresResize.$clinit = () =>{};
  RequiresResize.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_RequiresResize = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RequiresResize;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.RequiresResize.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(RequiresResize, 'org.gwtproject.user.client.ui.RequiresResize');

RequiresResize.$markImplementor(/** @type {Function} */ (RequiresResize));

exports = RequiresResize; 
//# sourceMappingURL=RequiresResize.js.map