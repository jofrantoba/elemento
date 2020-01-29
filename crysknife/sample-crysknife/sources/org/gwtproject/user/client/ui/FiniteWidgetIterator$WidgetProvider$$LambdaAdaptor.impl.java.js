goog.module('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetProvider = goog.require('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @implements {WidgetProvider}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(number):IsWidget} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(number):IsWidget} */
  this.f_$$fn__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$JsFunction(fn);
 }
 /**
  * @param {?function(number):IsWidget} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor = fn;
 }
 /**
  * @param {number} arg0
  * @return {IsWidget}
  * @public
  */
 m_get__int(arg0) {
  let /** ?function(number):IsWidget */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider_$LambdaAdaptor, $function(arg0));
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FiniteWidgetIterator$WidgetProvider$$LambdaAdaptor');

WidgetProvider.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FiniteWidgetIterator$WidgetProvider$$LambdaAdaptor.js.map