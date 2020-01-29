goog.module('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');

let LoadingStateChangeEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(LoadingStateChangeEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(LoadingStateChangeEvent):void} */
  this.f_$$fn__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$JsFunction(fn);
 }
 /**
  * @param {?function(LoadingStateChangeEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor = fn;
 }
 /**
  * @param {LoadingStateChangeEvent} arg0
  * @public
  */
 m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.LoadingStateChangeEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoadingStateChangeEvent$Handler$$LambdaAdaptor.js.map