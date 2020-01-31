goog.module('org.gwtproject.user.client.ui.SuggestOracle.Callback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Callback = goog.require('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');

let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');

/**
 * @implements {Callback}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Request, Response):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Request, Response):void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$JsFunction(/** ?function(Request, Response):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor = fn;
 }
 
 m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(/** Request */ arg0, /** Response */ arg1) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor;
   $function(arg0, arg1);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.SuggestOracle$Callback$$LambdaAdaptor');

Callback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SuggestOracle$Callback$$LambdaAdaptor.js.map