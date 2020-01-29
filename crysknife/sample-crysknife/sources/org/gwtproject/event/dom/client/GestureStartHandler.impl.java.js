goog.module('org.gwtproject.event.dom.client.GestureStartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let GestureStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class GestureStartHandler {
 /**
  * @abstract
  * @param {GestureStartEvent} event
  * @public
  */
 m_onGestureStart__org_gwtproject_event_dom_client_GestureStartEvent(event) {}
 /**
  * @param {?function(GestureStartEvent):void} fn
  * @return {GestureStartHandler}
  * @public
  */
 static $adapt(fn) {
  GestureStartHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  GestureStartHandler.$clinit = () =>{};
  GestureStartHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_GestureStartHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_GestureStartHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.GestureStartHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GestureStartHandler, 'org.gwtproject.event.dom.client.GestureStartHandler');

GestureStartHandler.$markImplementor(/** @type {Function} */ (GestureStartHandler));

exports = GestureStartHandler; 
//# sourceMappingURL=GestureStartHandler.js.map