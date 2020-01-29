goog.module('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasWidgets = goog.require('org.gwtproject.user.client.ui.HasWidgets$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {HasWidgets}
 */
class ForIsWidget {
 /**
  * @abstract
  * @param {IsWidget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget(w) {}
 /**
  * @abstract
  * @param {IsWidget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_IsWidget(w) {}
 /**
  * @public
  */
 static $clinit() {
  ForIsWidget.$clinit = () =>{};
  ForIsWidget.$loadModules();
  Iterable.$clinit();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasWidgets.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasWidgets_ForIsWidget = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasWidgets_ForIsWidget;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ForIsWidget, 'org.gwtproject.user.client.ui.HasWidgets$ForIsWidget');

ForIsWidget.$markImplementor(/** @type {Function} */ (ForIsWidget));

exports = ForIsWidget; 
//# sourceMappingURL=HasWidgets$ForIsWidget.js.map