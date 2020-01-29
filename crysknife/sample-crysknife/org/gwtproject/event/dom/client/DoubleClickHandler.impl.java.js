goog.module('org.gwtproject.event.dom.client.DoubleClickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DoubleClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DoubleClickHandler {
 /**
  * @abstract
  * @param {DoubleClickEvent} event
  * @public
  */
 m_onDoubleClick__org_gwtproject_event_dom_client_DoubleClickEvent(event) {}
 /**
  * @param {?function(DoubleClickEvent):void} fn
  * @return {DoubleClickHandler}
  * @public
  */
 static $adapt(fn) {
  DoubleClickHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DoubleClickHandler.$clinit = () =>{};
  DoubleClickHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DoubleClickHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DoubleClickHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DoubleClickHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DoubleClickHandler, 'org.gwtproject.event.dom.client.DoubleClickHandler');

DoubleClickHandler.$markImplementor(/** @type {Function} */ (DoubleClickHandler));

exports = DoubleClickHandler; 
//# sourceMappingURL=DoubleClickHandler.js.map