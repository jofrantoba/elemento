goog.module('org.gwtproject.event.dom.client.MouseUpHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseUpHandler {
 /**
  * @abstract
  * @param {MouseUpEvent} event
  * @public
  */
 m_onMouseUp__org_gwtproject_event_dom_client_MouseUpEvent(event) {}
 /**
  * @param {?function(MouseUpEvent):void} fn
  * @return {MouseUpHandler}
  * @public
  */
 static $adapt(fn) {
  MouseUpHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseUpHandler.$clinit = () =>{};
  MouseUpHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_MouseUpHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseUpHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseUpHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseUpHandler, 'org.gwtproject.event.dom.client.MouseUpHandler');

MouseUpHandler.$markImplementor(/** @type {Function} */ (MouseUpHandler));

exports = MouseUpHandler; 
//# sourceMappingURL=MouseUpHandler.js.map