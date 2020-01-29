goog.module('org.gwtproject.user.client.Event.NativePreviewHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativePreviewHandler = goog.require('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');

/**
 * @implements {NativePreviewHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(NativePreviewEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(NativePreviewEvent):void} */
  this.f_$$fn__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor__org_gwtproject_user_client_Event_NativePreviewHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(NativePreviewEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor__org_gwtproject_user_client_Event_NativePreviewHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {NativePreviewEvent} arg0
  * @public
  */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_Event_NativePreviewHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.Event$NativePreviewHandler$$LambdaAdaptor');

NativePreviewHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Event$NativePreviewHandler$$LambdaAdaptor.js.map