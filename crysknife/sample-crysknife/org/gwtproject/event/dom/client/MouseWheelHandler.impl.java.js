goog.module('org.gwtproject.event.dom.client.MouseWheelHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseWheelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseWheelHandler {
 /**
  * @abstract
  * @param {MouseWheelEvent} event
  * @public
  */
 m_onMouseWheel__org_gwtproject_event_dom_client_MouseWheelEvent(event) {}
 /**
  * @param {?function(MouseWheelEvent):void} fn
  * @return {MouseWheelHandler}
  * @public
  */
 static $adapt(fn) {
  MouseWheelHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseWheelHandler.$clinit = () =>{};
  MouseWheelHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_MouseWheelHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseWheelHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseWheelHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseWheelHandler, 'org.gwtproject.event.dom.client.MouseWheelHandler');

MouseWheelHandler.$markImplementor(/** @type {Function} */ (MouseWheelHandler));

exports = MouseWheelHandler; 
//# sourceMappingURL=MouseWheelHandler.js.map