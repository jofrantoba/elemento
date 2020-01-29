goog.module('org.gwtproject.event.dom.client.TouchMoveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchMoveHandler {
 /**
  * @abstract
  * @param {TouchMoveEvent} event
  * @public
  */
 m_onTouchMove__org_gwtproject_event_dom_client_TouchMoveEvent(event) {}
 /**
  * @param {?function(TouchMoveEvent):void} fn
  * @return {TouchMoveHandler}
  * @public
  */
 static $adapt(fn) {
  TouchMoveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  TouchMoveHandler.$clinit = () =>{};
  TouchMoveHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_TouchMoveHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchMoveHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchMoveHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchMoveHandler, 'org.gwtproject.event.dom.client.TouchMoveHandler');

TouchMoveHandler.$markImplementor(/** @type {Function} */ (TouchMoveHandler));

exports = TouchMoveHandler; 
//# sourceMappingURL=TouchMoveHandler.js.map