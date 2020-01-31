goog.module('org.gwtproject.user.client.ui.RequiresResize.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

/**
 * @implements {RequiresResize}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_RequiresResize_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_RequiresResize_$LambdaAdaptor__org_gwtproject_user_client_ui_RequiresResize_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_RequiresResize_$LambdaAdaptor__org_gwtproject_user_client_ui_RequiresResize_$JsFunction(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_RequiresResize_$LambdaAdaptor = fn;
 }
 
 m_onResize__() {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_RequiresResize_$LambdaAdaptor;
   $function();
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.RequiresResize$$LambdaAdaptor');

RequiresResize.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=RequiresResize$$LambdaAdaptor.js.map