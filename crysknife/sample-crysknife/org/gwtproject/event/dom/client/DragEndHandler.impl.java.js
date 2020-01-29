goog.module('org.gwtproject.event.dom.client.DragEndHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragEndHandler {
 /**
  * @abstract
  * @param {DragEndEvent} event
  * @public
  */
 m_onDragEnd__org_gwtproject_event_dom_client_DragEndEvent(event) {}
 /**
  * @param {?function(DragEndEvent):void} fn
  * @return {DragEndHandler}
  * @public
  */
 static $adapt(fn) {
  DragEndHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragEndHandler.$clinit = () =>{};
  DragEndHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragEndHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragEndHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragEndHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragEndHandler, 'org.gwtproject.event.dom.client.DragEndHandler');

DragEndHandler.$markImplementor(/** @type {Function} */ (DragEndHandler));

exports = DragEndHandler; 
//# sourceMappingURL=DragEndHandler.js.map