goog.module('org.gwtproject.event.dom.client.GestureEndHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class GestureEndHandler {
 /**
  * @abstract
  * @param {GestureEndEvent} event
  * @public
  */
 m_onGestureEnd__org_gwtproject_event_dom_client_GestureEndEvent(event) {}
 /**
  * @param {?function(GestureEndEvent):void} fn
  * @return {GestureEndHandler}
  * @public
  */
 static $adapt(fn) {
  GestureEndHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  GestureEndHandler.$clinit = () =>{};
  GestureEndHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_GestureEndHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_GestureEndHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.GestureEndHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(GestureEndHandler, 'org.gwtproject.event.dom.client.GestureEndHandler');

GestureEndHandler.$markImplementor(/** @type {Function} */ (GestureEndHandler));

exports = GestureEndHandler; 
//# sourceMappingURL=GestureEndHandler.js.map