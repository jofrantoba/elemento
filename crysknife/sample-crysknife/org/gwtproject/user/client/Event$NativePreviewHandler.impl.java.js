goog.module('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class NativePreviewHandler {
 /** @abstract */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ event) {}
 /** @return {NativePreviewHandler} */
 static $adapt(/** ?function(NativePreviewEvent):void */ fn) {
  NativePreviewHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  NativePreviewHandler.$clinit = () =>{};
  NativePreviewHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EventHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_Event_NativePreviewHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_Event_NativePreviewHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.Event.NativePreviewHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NativePreviewHandler, 'org.gwtproject.user.client.Event$NativePreviewHandler');

NativePreviewHandler.$markImplementor(/** @type {Function} */ (NativePreviewHandler));

exports = NativePreviewHandler; 
//# sourceMappingURL=Event$NativePreviewHandler.js.map