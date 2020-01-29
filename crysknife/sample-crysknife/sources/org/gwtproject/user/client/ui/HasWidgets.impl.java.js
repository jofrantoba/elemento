goog.module('org.gwtproject.user.client.ui.HasWidgets$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 * @extends {Iterable<Widget>}
 */
class HasWidgets {
 /**
  * @abstract
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {}
 /**
  * @abstract
  * @public
  */
 m_clear__() {}
 /**
  * @abstract
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {}
 /**
  * @abstract
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {}
 /**
  * @public
  */
 static $clinit() {
  HasWidgets.$clinit = () =>{};
  HasWidgets.$loadModules();
  Iterable.$clinit();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Iterable.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasWidgets = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasWidgets;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasWidgets, 'org.gwtproject.user.client.ui.HasWidgets');

HasWidgets.$markImplementor(/** @type {Function} */ (HasWidgets));

exports = HasWidgets; 
//# sourceMappingURL=HasWidgets.js.map