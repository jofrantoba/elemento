goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundle.$LambdaAdaptor$impl');
let NotificationMole__BinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class NotificationMole__BinderImpl__GenBundle {
 /**
  * @abstract
  * @return {NotificationMole__BinderImpl__GenCss__style}
  * @public
  */
 m_style__() {}
 /**
  * @param {?function():NotificationMole__BinderImpl__GenCss__style} fn
  * @return {NotificationMole__BinderImpl__GenBundle}
  * @public
  */
 static $adapt(fn) {
  NotificationMole__BinderImpl__GenBundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  NotificationMole__BinderImpl__GenBundle.$clinit = () =>{};
  NotificationMole__BinderImpl__GenBundle.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundle;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundle.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NotificationMole__BinderImpl__GenBundle, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundle');

NotificationMole__BinderImpl__GenBundle.$markImplementor(/** @type {Function} */ (NotificationMole__BinderImpl__GenBundle));

exports = NotificationMole__BinderImpl__GenBundle; 
//# sourceMappingURL=NotificationMole_BinderImpl_GenBundle.js.map