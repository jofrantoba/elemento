goog.module('org.gwtproject.event.dom.client.EndedHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let EndedEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class EndedHandler {
 /**
  * @abstract
  * @param {EndedEvent} event
  * @public
  */
 m_onEnded__org_gwtproject_event_dom_client_EndedEvent(event) {}
 /**
  * @param {?function(EndedEvent):void} fn
  * @return {EndedHandler}
  * @public
  */
 static $adapt(fn) {
  EndedHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  EndedHandler.$clinit = () =>{};
  EndedHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_EndedHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_EndedHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.EndedHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EndedHandler, 'org.gwtproject.event.dom.client.EndedHandler');

EndedHandler.$markImplementor(/** @type {Function} */ (EndedHandler));

exports = EndedHandler; 
//# sourceMappingURL=EndedHandler.js.map