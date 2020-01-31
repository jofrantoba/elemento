goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Delegate {
 /** @abstract */
 m_onResize__() {}
 /** @return {Delegate} */
 static $adapt(/** ?function():void */ fn) {
  Delegate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Delegate.$clinit = () =>{};
  Delegate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Delegate, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$Impl$Delegate');

Delegate.$markImplementor(/** @type {Function} */ (Delegate));

exports = Delegate; 
//# sourceMappingURL=ResizeLayoutPanel$Impl$Delegate.js.map