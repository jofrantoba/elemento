goog.module('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let CanPlayThroughEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class CanPlayThroughHandler {
 /**
  * @abstract
  * @param {CanPlayThroughEvent} event
  * @public
  */
 m_onCanPlayThrough__org_gwtproject_event_dom_client_CanPlayThroughEvent(event) {}
 /**
  * @param {?function(CanPlayThroughEvent):void} fn
  * @return {CanPlayThroughHandler}
  * @public
  */
 static $adapt(fn) {
  CanPlayThroughHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  CanPlayThroughHandler.$clinit = () =>{};
  CanPlayThroughHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_CanPlayThroughHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_CanPlayThroughHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.CanPlayThroughHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CanPlayThroughHandler, 'org.gwtproject.event.dom.client.CanPlayThroughHandler');

CanPlayThroughHandler.$markImplementor(/** @type {Function} */ (CanPlayThroughHandler));

exports = CanPlayThroughHandler; 
//# sourceMappingURL=CanPlayThroughHandler.js.map