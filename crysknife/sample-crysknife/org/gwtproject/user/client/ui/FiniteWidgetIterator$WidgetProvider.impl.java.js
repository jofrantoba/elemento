goog.module('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider.$LambdaAdaptor$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 */
class WidgetProvider {
 /**
  * @abstract
  * @param {number} index
  * @return {IsWidget}
  * @public
  */
 m_get__int(index) {}
 /**
  * @param {?function(number):IsWidget} fn
  * @return {WidgetProvider}
  * @public
  */
 static $adapt(fn) {
  WidgetProvider.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  WidgetProvider.$clinit = () =>{};
  WidgetProvider.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(WidgetProvider, 'org.gwtproject.user.client.ui.FiniteWidgetIterator$WidgetProvider');

WidgetProvider.$markImplementor(/** @type {Function} */ (WidgetProvider));

exports = WidgetProvider; 
//# sourceMappingURL=FiniteWidgetIterator$WidgetProvider.js.map