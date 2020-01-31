goog.module('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider.$LambdaAdaptor$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 */
class WidgetProvider {
 /** @abstract @return {IsWidget} */
 m_get__int(/** number */ index) {}
 /** @return {WidgetProvider} */
 static $adapt(/** ?function(number):IsWidget */ fn) {
  WidgetProvider.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  WidgetProvider.$clinit = () =>{};
  WidgetProvider.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(WidgetProvider, 'org.gwtproject.user.client.ui.FiniteWidgetIterator$WidgetProvider');

WidgetProvider.$markImplementor(/** @type {Function} */ (WidgetProvider));

exports = WidgetProvider; 
//# sourceMappingURL=FiniteWidgetIterator$WidgetProvider.js.map