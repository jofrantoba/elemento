goog.module('org.gwtproject.user.window.client.Window.ClosingHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClosingHandler = goog.require('org.gwtproject.user.window.client.Window.ClosingHandler$impl');

let ClosingEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingEvent$impl');

/**
 * @implements {ClosingHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ClosingEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ClosingEvent):void} */
  this.f_$$fn__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ClosingHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ClosingEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ClosingHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ClosingEvent} arg0
  * @public
  */
 m_onWindowClosing__org_gwtproject_user_window_client_Window_ClosingEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_window_client_Window_ClosingHandler_$LambdaAdaptor;
   $function(arg0);
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.window.client.Window$ClosingHandler$$LambdaAdaptor');

ClosingHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Window$ClosingHandler$$LambdaAdaptor.js.map