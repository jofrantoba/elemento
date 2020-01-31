goog.module('org.gwtproject.user.window.client.Window.ClosingHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClosingHandler = goog.require('org.gwtproject.user.window.client.Window.ClosingHandler$impl');

let ClosingEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingEvent$impl');

/**
 * @implements {ClosingHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ClosingEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ClosingEvent):void}*/
  this.f_$$fn__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ClosingHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ClosingHandler_$JsFunction(/** ?function(ClosingEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor = fn;
 }
 
 m_onWindowClosing__org_gwtproject_user_window_client_Window_ClosingEvent(/** ClosingEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.window.client.Window$ClosingHandler$$LambdaAdaptor');

ClosingHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Window$ClosingHandler$$LambdaAdaptor.js.map