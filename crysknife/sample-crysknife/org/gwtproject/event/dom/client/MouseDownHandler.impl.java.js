goog.module('org.gwtproject.event.dom.client.MouseDownHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseDownHandler {
 /**
  * @abstract
  * @param {MouseDownEvent} event
  * @public
  */
 m_onMouseDown__org_gwtproject_event_dom_client_MouseDownEvent(event) {}
 /**
  * @param {?function(MouseDownEvent):void} fn
  * @return {MouseDownHandler}
  * @public
  */
 static $adapt(fn) {
  MouseDownHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseDownHandler.$clinit = () =>{};
  MouseDownHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_MouseDownHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseDownHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseDownHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseDownHandler, 'org.gwtproject.event.dom.client.MouseDownHandler');

MouseDownHandler.$markImplementor(/** @type {Function} */ (MouseDownHandler));

exports = MouseDownHandler; 
//# sourceMappingURL=MouseDownHandler.js.map