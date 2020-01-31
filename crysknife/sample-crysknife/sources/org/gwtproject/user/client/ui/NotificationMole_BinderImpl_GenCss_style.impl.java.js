goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class NotificationMole__BinderImpl__GenCss__style {
 /** @abstract @return {?string} */
 m_container__() {}
 /** @abstract @return {?string} */
 m_centered__() {}
 /** @abstract @return {?string} */
 m_notificationText__() {}
 
 static $clinit() {
  NotificationMole__BinderImpl__GenCss__style.$clinit = () =>{};
  NotificationMole__BinderImpl__GenCss__style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenCss_style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenCss_style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NotificationMole__BinderImpl__GenCss__style, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style');

NotificationMole__BinderImpl__GenCss__style.$markImplementor(/** @type {Function} */ (NotificationMole__BinderImpl__GenCss__style));

exports = NotificationMole__BinderImpl__GenCss__style; 
//# sourceMappingURL=NotificationMole_BinderImpl_GenCss_style.js.map