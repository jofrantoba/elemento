goog.module('org.gwtproject.user.window.client.Window.ScrollHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollHandler = goog.require('org.gwtproject.user.window.client.Window.ScrollHandler$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollEvent$impl');

/**
 * @implements {ScrollHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ScrollEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ScrollEvent):void} */
  this.f_$$fn__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ScrollHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ScrollEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor__org_gwtproject_user_window_client_Window_ScrollHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ScrollEvent} arg0
  * @public
  */
 m_onWindowScroll__org_gwtproject_user_window_client_Window_ScrollEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_window_client_Window_ScrollHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.window.client.Window$ScrollHandler$$LambdaAdaptor');

ScrollHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Window$ScrollHandler$$LambdaAdaptor.js.map