goog.module('org.gwtproject.event.dom.client.TouchEndHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchEndHandler {
 /**
  * @abstract
  * @param {TouchEndEvent} event
  * @public
  */
 m_onTouchEnd__org_gwtproject_event_dom_client_TouchEndEvent(event) {}
 /**
  * @param {?function(TouchEndEvent):void} fn
  * @return {TouchEndHandler}
  * @public
  */
 static $adapt(fn) {
  TouchEndHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  TouchEndHandler.$clinit = () =>{};
  TouchEndHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_TouchEndHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchEndHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchEndHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchEndHandler, 'org.gwtproject.event.dom.client.TouchEndHandler');

TouchEndHandler.$markImplementor(/** @type {Function} */ (TouchEndHandler));

exports = TouchEndHandler; 
//# sourceMappingURL=TouchEndHandler.js.map