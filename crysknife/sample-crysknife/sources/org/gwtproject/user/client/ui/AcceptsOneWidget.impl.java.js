goog.module('org.gwtproject.user.client.ui.AcceptsOneWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.AcceptsOneWidget.$LambdaAdaptor$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 */
class AcceptsOneWidget {
 /**
  * @abstract
  * @param {IsWidget} w
  * @public
  */
 m_setWidget__org_gwtproject_user_client_ui_IsWidget(w) {}
 /**
  * @param {?function(IsWidget):void} fn
  * @return {AcceptsOneWidget}
  * @public
  */
 static $adapt(fn) {
  AcceptsOneWidget.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  AcceptsOneWidget.$clinit = () =>{};
  AcceptsOneWidget.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_AcceptsOneWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_AcceptsOneWidget;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.AcceptsOneWidget.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AcceptsOneWidget, 'org.gwtproject.user.client.ui.AcceptsOneWidget');

AcceptsOneWidget.$markImplementor(/** @type {Function} */ (AcceptsOneWidget));

exports = AcceptsOneWidget; 
//# sourceMappingURL=AcceptsOneWidget.js.map