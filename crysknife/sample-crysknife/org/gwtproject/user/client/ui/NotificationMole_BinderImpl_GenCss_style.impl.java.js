goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class NotificationMole__BinderImpl__GenCss__style {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_container__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_centered__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_notificationText__() {}
 /**
  * @public
  */
 static $clinit() {
  NotificationMole__BinderImpl__GenCss__style.$clinit = () =>{};
  NotificationMole__BinderImpl__GenCss__style.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CssResource.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenCss_style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenCss_style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NotificationMole__BinderImpl__GenCss__style, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style');

NotificationMole__BinderImpl__GenCss__style.$markImplementor(/** @type {Function} */ (NotificationMole__BinderImpl__GenCss__style));

exports = NotificationMole__BinderImpl__GenCss__style; 
//# sourceMappingURL=NotificationMole_BinderImpl_GenCss_style.js.map