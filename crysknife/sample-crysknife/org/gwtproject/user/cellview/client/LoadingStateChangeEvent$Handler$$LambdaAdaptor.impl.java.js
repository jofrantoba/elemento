goog.module('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');

let LoadingStateChangeEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');

/**
 * @implements {Handler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(LoadingStateChangeEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(LoadingStateChangeEvent):void}*/
  this.f_$$fn__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$JsFunction(/** ?function(LoadingStateChangeEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor = fn;
 }
 
 m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent(/** LoadingStateChangeEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.LoadingStateChangeEvent$Handler$$LambdaAdaptor');

Handler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoadingStateChangeEvent$Handler$$LambdaAdaptor.js.map