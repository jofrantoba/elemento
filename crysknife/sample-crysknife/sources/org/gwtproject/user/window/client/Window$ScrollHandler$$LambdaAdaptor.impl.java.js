goog.module('org.gwtproject.user.window.client.Window.ScrollHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollHandler = goog.require('org.gwtproject.user.window.client.Window.ScrollHandler$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollEvent$impl');

/**
 * @implements {ScrollHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ScrollEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ScrollEvent):void}*/
  this.f_$$fn__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ScrollHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ScrollHandler_$JsFunction(/** ?function(ScrollEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor = fn;
 }
 
 m_onWindowScroll__org_gwtproject_user_window_client_Window_ScrollEvent(/** ScrollEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.window.client.Window$ScrollHandler$$LambdaAdaptor');

ScrollHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Window$ScrollHandler$$LambdaAdaptor.js.map