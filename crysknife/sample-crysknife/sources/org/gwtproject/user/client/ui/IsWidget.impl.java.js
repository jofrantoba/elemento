goog.module('org.gwtproject.user.client.ui.IsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget.$LambdaAdaptor$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class IsWidget {
 /**
  * @abstract
  * @return {Widget}
  * @public
  */
 m_asWidget__() {}
 /**
  * @param {?function():Widget} fn
  * @return {IsWidget}
  * @public
  */
 static $adapt(fn) {
  IsWidget.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  IsWidget.$clinit = () =>{};
  IsWidget.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_IsWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IsWidget;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.IsWidget.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsWidget, 'org.gwtproject.user.client.ui.IsWidget');

IsWidget.$markImplementor(/** @type {Function} */ (IsWidget));

exports = IsWidget; 
//# sourceMappingURL=IsWidget.js.map