goog.module('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetProvider = goog.require('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @implements {WidgetProvider}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(number):IsWidget */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):IsWidget}*/
  this.f_$$fn__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$JsFunction(/** ?function(number):IsWidget */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor = fn;
 }
 /** @return {IsWidget} */
 m_get__int(/** number */ arg0) {
  let /** ?function(number):IsWidget */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor, $function(arg0));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FiniteWidgetIterator$WidgetProvider$$LambdaAdaptor');

WidgetProvider.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FiniteWidgetIterator$WidgetProvider$$LambdaAdaptor.js.map