goog.module('org.gwtproject.event.dom.client.GestureChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let GestureChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class GestureChangeHandler {
 /**
  * @abstract
  * @param {GestureChangeEvent} event
  * @public
  */
 m_onGestureChange__org_gwtproject_event_dom_client_GestureChangeEvent(event) {}
 /**
  * @param {?function(GestureChangeEvent):void} fn
  * @return {GestureChangeHandler}
  * @public
  */
 static $adapt(fn) {
  GestureChangeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  GestureChangeHandler.$clinit = () =>{};
  GestureChangeHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_GestureChangeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_GestureChangeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.GestureChangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GestureChangeHandler, 'org.gwtproject.event.dom.client.GestureChangeHandler');

GestureChangeHandler.$markImplementor(/** @type {Function} */ (GestureChangeHandler));

exports = GestureChangeHandler; 
//# sourceMappingURL=GestureChangeHandler.js.map