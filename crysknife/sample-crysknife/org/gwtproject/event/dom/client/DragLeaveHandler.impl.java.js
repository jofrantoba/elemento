goog.module('org.gwtproject.event.dom.client.DragLeaveHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragLeaveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragLeaveHandler {
 /**
  * @abstract
  * @param {DragLeaveEvent} event
  * @public
  */
 m_onDragLeave__org_gwtproject_event_dom_client_DragLeaveEvent(event) {}
 /**
  * @param {?function(DragLeaveEvent):void} fn
  * @return {DragLeaveHandler}
  * @public
  */
 static $adapt(fn) {
  DragLeaveHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragLeaveHandler.$clinit = () =>{};
  DragLeaveHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragLeaveHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragLeaveHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragLeaveHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragLeaveHandler, 'org.gwtproject.event.dom.client.DragLeaveHandler');

DragLeaveHandler.$markImplementor(/** @type {Function} */ (DragLeaveHandler));

exports = DragLeaveHandler; 
//# sourceMappingURL=DragLeaveHandler.js.map