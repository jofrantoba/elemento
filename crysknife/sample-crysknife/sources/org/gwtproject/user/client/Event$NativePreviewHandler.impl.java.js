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
 /**
  * @abstract
  * @param {NativePreviewEvent} event
  * @public
  */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event) {}
 /**
  * @param {?function(NativePreviewEvent):void} fn
  * @return {NativePreviewHandler}
  * @public
  */
 static $adapt(fn) {
  NativePreviewHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  NativePreviewHandler.$clinit = () =>{};
  NativePreviewHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  EventHandler.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_Event_NativePreviewHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_Event_NativePreviewHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.Event.NativePreviewHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NativePreviewHandler, 'org.gwtproject.user.client.Event$NativePreviewHandler');

NativePreviewHandler.$markImplementor(/** @type {Function} */ (NativePreviewHandler));

exports = NativePreviewHandler; 
//# sourceMappingURL=Event$NativePreviewHandler.js.map