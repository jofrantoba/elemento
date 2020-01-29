goog.module('org.gwtproject.event.dom.client.MouseOverHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class MouseOverHandler {
 /**
  * @abstract
  * @param {MouseOverEvent} event
  * @public
  */
 m_onMouseOver__org_gwtproject_event_dom_client_MouseOverEvent(event) {}
 /**
  * @param {?function(MouseOverEvent):void} fn
  * @return {MouseOverHandler}
  * @public
  */
 static $adapt(fn) {
  MouseOverHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseOverHandler.$clinit = () =>{};
  MouseOverHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_MouseOverHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_MouseOverHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.MouseOverHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(MouseOverHandler, 'org.gwtproject.event.dom.client.MouseOverHandler');

MouseOverHandler.$markImplementor(/** @type {Function} */ (MouseOverHandler));

exports = MouseOverHandler; 
//# sourceMappingURL=MouseOverHandler.js.map