goog.module('org.gwtproject.event.dom.client.TouchCancelHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class TouchCancelHandler {
 /**
  * @abstract
  * @param {TouchCancelEvent} event
  * @public
  */
 m_onTouchCancel__org_gwtproject_event_dom_client_TouchCancelEvent(event) {}
 /**
  * @param {?function(TouchCancelEvent):void} fn
  * @return {TouchCancelHandler}
  * @public
  */
 static $adapt(fn) {
  TouchCancelHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  TouchCancelHandler.$clinit = () =>{};
  TouchCancelHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_TouchCancelHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_TouchCancelHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.TouchCancelHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TouchCancelHandler, 'org.gwtproject.event.dom.client.TouchCancelHandler');

TouchCancelHandler.$markImplementor(/** @type {Function} */ (TouchCancelHandler));

exports = TouchCancelHandler; 
//# sourceMappingURL=TouchCancelHandler.js.map