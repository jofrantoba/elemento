goog.module('org.gwtproject.user.client.ui.HasOneWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AcceptsOneWidget = goog.require('org.gwtproject.user.client.ui.AcceptsOneWidget$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 * @extends {AcceptsOneWidget}
 */
class HasOneWidget {
 /**
  * @abstract
  * @return {Widget}
  * @public
  */
 m_getWidget__() {}
 /**
  * @abstract
  * @param {Widget} w
  * @public
  */
 m_setWidget__org_gwtproject_user_client_ui_Widget(w) {}
 /**
  * @public
  */
 static $clinit() {
  HasOneWidget.$clinit = () =>{};
  HasOneWidget.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  AcceptsOneWidget.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasOneWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasOneWidget;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasOneWidget, 'org.gwtproject.user.client.ui.HasOneWidget');

HasOneWidget.$markImplementor(/** @type {Function} */ (HasOneWidget));

exports = HasOneWidget; 
//# sourceMappingURL=HasOneWidget.js.map