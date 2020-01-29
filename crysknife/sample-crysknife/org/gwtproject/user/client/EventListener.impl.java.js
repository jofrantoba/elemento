goog.module('org.gwtproject.user.client.EventListener$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.EventListener.$LambdaAdaptor$impl');

/**
 * @interface
 */
class EventListener {
 /**
  * @abstract
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {}
 /**
  * @param {?function(Event):void} fn
  * @return {EventListener}
  * @public
  */
 static $adapt(fn) {
  EventListener.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  EventListener.$clinit = () =>{};
  EventListener.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_EventListener = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_EventListener;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.EventListener.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EventListener, 'org.gwtproject.user.client.EventListener');

EventListener.$markImplementor(/** @type {Function} */ (EventListener));

exports = EventListener; 
//# sourceMappingURL=EventListener.js.map