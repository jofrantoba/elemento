goog.module('org.gwtproject.user.client.ui.IsWidget.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {IsWidget}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Widget} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Widget} */
  this.f_$$fn__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor__org_gwtproject_user_client_ui_IsWidget_$JsFunction(fn);
 }
 /**
  * @param {?function():Widget} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor__org_gwtproject_user_client_ui_IsWidget_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor = fn;
 }
 /**
  * @return {Widget}
  * @public
  */
 m_asWidget__() {
  let /** ?function():Widget */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.IsWidget$$LambdaAdaptor');

IsWidget.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsWidget$$LambdaAdaptor.js.map