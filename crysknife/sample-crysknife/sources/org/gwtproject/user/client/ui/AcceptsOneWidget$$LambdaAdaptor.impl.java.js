goog.module('org.gwtproject.user.client.ui.AcceptsOneWidget.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AcceptsOneWidget = goog.require('org.gwtproject.user.client.ui.AcceptsOneWidget$impl');

let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @implements {AcceptsOneWidget}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsWidget):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsWidget):void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_AcceptsOneWidget_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_AcceptsOneWidget_$LambdaAdaptor__org_gwtproject_user_client_ui_AcceptsOneWidget_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_AcceptsOneWidget_$LambdaAdaptor__org_gwtproject_user_client_ui_AcceptsOneWidget_$JsFunction(/** ?function(IsWidget):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_AcceptsOneWidget_$LambdaAdaptor = fn;
 }
 
 m_setWidget__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_AcceptsOneWidget_$LambdaAdaptor;
   $function(arg0);
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.AcceptsOneWidget$$LambdaAdaptor');

AcceptsOneWidget.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AcceptsOneWidget$$LambdaAdaptor.js.map