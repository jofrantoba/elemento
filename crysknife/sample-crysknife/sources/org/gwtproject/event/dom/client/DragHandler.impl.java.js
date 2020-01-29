goog.module('org.gwtproject.event.dom.client.DragHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DragEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DragHandler {
 /**
  * @abstract
  * @param {DragEvent} event
  * @public
  */
 m_onDrag__org_gwtproject_event_dom_client_DragEvent(event) {}
 /**
  * @param {?function(DragEvent):void} fn
  * @return {DragHandler}
  * @public
  */
 static $adapt(fn) {
  DragHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragHandler.$clinit = () =>{};
  DragHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragHandler, 'org.gwtproject.event.dom.client.DragHandler');

DragHandler.$markImplementor(/** @type {Function} */ (DragHandler));

exports = DragHandler; 
//# sourceMappingURL=DragHandler.js.map