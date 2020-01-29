goog.module('org.gwtproject.event.dom.client.MouseOutHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseOutHandler {
 /**
  * @abstract
  * @param {MouseOutEvent} event
  * @public
  */
 m_onMouseOut__org_gwtproject_event_dom_client_MouseOutEvent(event) {}
 /**
  * @param {?function(MouseOutEvent):void} fn
  * @return {MouseOutHandler}
  * @public
  */
 static $adapt(fn) {
  MouseOutHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseOutHandler.$clinit = () =>{};
  MouseOutHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_MouseOutHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseOutHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseOutHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseOutHandler, 'org.gwtproject.event.dom.client.MouseOutHandler');

MouseOutHandler.$markImplementor(/** @type {Function} */ (MouseOutHandler));

exports = MouseOutHandler; 
//# sourceMappingURL=MouseOutHandler.js.map