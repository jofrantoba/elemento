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
 /** @abstract */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {}
 /** @abstract */
 m_clear__() {}
 /** @abstract @override @return {Iterator<Widget>} */
 m_iterator__() {}
 /** @abstract @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {}
 
 static $clinit() {
  HasWidgets.$clinit = () =>{};
  HasWidgets.$loadModules();
  Iterable.$clinit();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Iterable.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasWidgets = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasWidgets;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasWidgets, 'org.gwtproject.user.client.ui.HasWidgets');

HasWidgets.$markImplementor(/** @type {Function} */ (HasWidgets));

exports = HasWidgets; 
//# sourceMappingURL=HasWidgets.js.map