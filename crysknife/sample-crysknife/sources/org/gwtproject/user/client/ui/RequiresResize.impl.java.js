goog.module('org.gwtproject.user.client.ui.RequiresResize$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.RequiresResize.$LambdaAdaptor$impl');

/**
 * @interface
 */
class RequiresResize {
 /** @abstract */
 m_onResize__() {}
 /** @return {RequiresResize} */
 static $adapt(/** ?function():void */ fn) {
  RequiresResize.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  RequiresResize.$clinit = () =>{};
  RequiresResize.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_RequiresResize = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_RequiresResize;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.RequiresResize.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(RequiresResize, 'org.gwtproject.user.client.ui.RequiresResize');

RequiresResize.$markImplementor(/** @type {Function} */ (RequiresResize));

exports = RequiresResize; 
//# sourceMappingURL=RequiresResize.js.map