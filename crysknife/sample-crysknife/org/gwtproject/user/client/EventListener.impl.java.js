goog.module('org.gwtproject.user.client.EventListener$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.EventListener.$LambdaAdaptor$impl');

/**
 * @interface
 */
class EventListener {
 /** @abstract */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {}
 /** @return {EventListener} */
 static $adapt(/** ?function(Event):void */ fn) {
  EventListener.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EventListener.$clinit = () =>{};
  EventListener.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_EventListener = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_EventListener;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.EventListener.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EventListener, 'org.gwtproject.user.client.EventListener');

EventListener.$markImplementor(/** @type {Function} */ (EventListener));

exports = EventListener; 
//# sourceMappingURL=EventListener.js.map