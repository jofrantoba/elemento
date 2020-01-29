goog.module('org.gwtproject.event.dom.client.DragEnterHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragEnterHandler {
 /**
  * @abstract
  * @param {DragEnterEvent} event
  * @public
  */
 m_onDragEnter__org_gwtproject_event_dom_client_DragEnterEvent(event) {}
 /**
  * @param {?function(DragEnterEvent):void} fn
  * @return {DragEnterHandler}
  * @public
  */
 static $adapt(fn) {
  DragEnterHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragEnterHandler.$clinit = () =>{};
  DragEnterHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragEnterHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragEnterHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragEnterHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragEnterHandler, 'org.gwtproject.event.dom.client.DragEnterHandler');

DragEnterHandler.$markImplementor(/** @type {Function} */ (DragEnterHandler));

exports = DragEnterHandler; 
//# sourceMappingURL=DragEnterHandler.js.map