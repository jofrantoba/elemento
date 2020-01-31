goog.module('org.gwtproject.user.client.Event.NativePreviewHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativePreviewHandler = goog.require('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');

/**
 * @implements {NativePreviewHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(NativePreviewEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(NativePreviewEvent):void}*/
  this.f_$$fn__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor__org_gwtproject_user_client_Event_NativePreviewHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor__org_gwtproject_user_client_Event_NativePreviewHandler_$JsFunction(/** ?function(NativePreviewEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor = fn;
 }
 
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.Event$NativePreviewHandler$$LambdaAdaptor');

NativePreviewHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Event$NativePreviewHandler$$LambdaAdaptor.js.map