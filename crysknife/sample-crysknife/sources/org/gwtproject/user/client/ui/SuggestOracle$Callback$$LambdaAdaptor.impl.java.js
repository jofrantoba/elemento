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
 /**
  * @param {?function(Request, Response):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(Request, Response):void} */
  this.f_$$fn__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$JsFunction(fn);
 }
 /**
  * @param {?function(Request, Response):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor__org_gwtproject_user_client_ui_SuggestOracle_Callback_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor = fn;
 }
 /**
  * @param {Request} arg0
  * @param {Response} arg1
  * @public
  */
 m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(arg0, arg1) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_SuggestOracle_Callback_$LambdaAdaptor;
   $function(arg0, arg1);
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.SuggestOracle$Callback$$LambdaAdaptor');

Callback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SuggestOracle$Callback$$LambdaAdaptor.js.map