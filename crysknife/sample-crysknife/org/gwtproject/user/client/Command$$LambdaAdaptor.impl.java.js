goog.module('org.gwtproject.user.client.Command.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.user.client.Command$impl');

/**
 * @implements {Command}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void}*/
  this.f_$$fn__org_gwtproject_user_client_Command_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_Command_$LambdaAdaptor__org_gwtproject_user_client_Command_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_Command_$LambdaAdaptor__org_gwtproject_user_client_Command_$JsFunction(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_Command_$LambdaAdaptor = fn;
 }
 
 m_execute__() {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_Command_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.Command$$LambdaAdaptor');

Command.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Command$$LambdaAdaptor.js.map