goog.module('org.gwtproject.event.dom.client.DragStartHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragStartHandler {
 /**
  * @abstract
  * @param {DragStartEvent} event
  * @public
  */
 m_onDragStart__org_gwtproject_event_dom_client_DragStartEvent(event) {}
 /**
  * @param {?function(DragStartEvent):void} fn
  * @return {DragStartHandler}
  * @public
  */
 static $adapt(fn) {
  DragStartHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragStartHandler.$clinit = () =>{};
  DragStartHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragStartHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragStartHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragStartHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragStartHandler, 'org.gwtproject.event.dom.client.DragStartHandler');

DragStartHandler.$markImplementor(/** @type {Function} */ (DragStartHandler));

exports = DragStartHandler; 
//# sourceMappingURL=DragStartHandler.js.map