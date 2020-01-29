goog.module('org.gwtproject.event.dom.client.DropHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let DropEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DropEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class DropHandler {
 /**
  * @abstract
  * @param {DropEvent} event
  * @public
  */
 m_onDrop__org_gwtproject_event_dom_client_DropEvent(event) {}
 /**
  * @param {?function(DropEvent):void} fn
  * @return {DropHandler}
  * @public
  */
 static $adapt(fn) {
  DropHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DropHandler.$clinit = () =>{};
  DropHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_DropHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_DropHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.DropHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DropHandler, 'org.gwtproject.event.dom.client.DropHandler');

DropHandler.$markImplementor(/** @type {Function} */ (DropHandler));

exports = DropHandler; 
//# sourceMappingURL=DropHandler.js.map