goog.module('org.gwtproject.event.dom.client.DragEnterClickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterClickHandler.$LambdaAdaptor$impl');
let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');

/**
 * @interface
 */
class DragEnterClickHandler {
 /**
  * @abstract
  * @param {DragEnterEvent} event
  * @public
  */
 m_onDoubleClick__org_gwtproject_event_dom_client_DragEnterEvent(event) {}
 /**
  * @param {?function(DragEnterEvent):void} fn
  * @return {DragEnterClickHandler}
  * @public
  */
 static $adapt(fn) {
  DragEnterClickHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DragEnterClickHandler.$clinit = () =>{};
  DragEnterClickHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DragEnterClickHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DragEnterClickHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DragEnterClickHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DragEnterClickHandler, 'org.gwtproject.event.dom.client.DragEnterClickHandler');

DragEnterClickHandler.$markImplementor(/** @type {Function} */ (DragEnterClickHandler));

exports = DragEnterClickHandler; 
//# sourceMappingURL=DragEnterClickHandler.js.map