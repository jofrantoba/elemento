goog.module('org.gwtproject.event.dom.client.MouseMoveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseMoveHandler {
 /**
  * @abstract
  * @param {MouseMoveEvent} event
  * @public
  */
 m_onMouseMove__org_gwtproject_event_dom_client_MouseMoveEvent(event) {}
 /**
  * @param {?function(MouseMoveEvent):void} fn
  * @return {MouseMoveHandler}
  * @public
  */
 static $adapt(fn) {
  MouseMoveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseMoveHandler.$clinit = () =>{};
  MouseMoveHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_MouseMoveHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseMoveHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseMoveHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseMoveHandler, 'org.gwtproject.event.dom.client.MouseMoveHandler');

MouseMoveHandler.$markImplementor(/** @type {Function} */ (MouseMoveHandler));

exports = MouseMoveHandler; 
//# sourceMappingURL=MouseMoveHandler.js.map