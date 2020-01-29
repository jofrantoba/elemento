goog.module('org.gwtproject.event.dom.client.TouchStartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchStartHandler {
 /**
  * @abstract
  * @param {TouchStartEvent} event
  * @public
  */
 m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(event) {}
 /**
  * @param {?function(TouchStartEvent):void} fn
  * @return {TouchStartHandler}
  * @public
  */
 static $adapt(fn) {
  TouchStartHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  TouchStartHandler.$clinit = () =>{};
  TouchStartHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_TouchStartHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchStartHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchStartHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchStartHandler, 'org.gwtproject.event.dom.client.TouchStartHandler');

TouchStartHandler.$markImplementor(/** @type {Function} */ (TouchStartHandler));

exports = TouchStartHandler; 
//# sourceMappingURL=TouchStartHandler.js.map