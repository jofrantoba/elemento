goog.module('org.gwtproject.event.dom.client.DragOverHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragOverHandler {
 /**
  * @abstract
  * @param {DragOverEvent} event
  * @public
  */
 m_onDragOver__org_gwtproject_event_dom_client_DragOverEvent(event) {}
 /**
  * @param {?function(DragOverEvent):void} fn
  * @return {DragOverHandler}
  * @public
  */
 static $adapt(fn) {
  DragOverHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragOverHandler.$clinit = () =>{};
  DragOverHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragOverHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragOverHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragOverHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragOverHandler, 'org.gwtproject.event.dom.client.DragOverHandler');

DragOverHandler.$markImplementor(/** @type {Function} */ (DragOverHandler));

exports = DragOverHandler; 
//# sourceMappingURL=DragOverHandler.js.map