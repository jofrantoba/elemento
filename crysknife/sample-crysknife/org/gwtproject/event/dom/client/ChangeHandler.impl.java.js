goog.module('org.gwtproject.event.dom.client.ChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ChangeHandler {
 /**
  * @abstract
  * @param {ChangeEvent} event
  * @public
  */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(event) {}
 /**
  * @param {?function(ChangeEvent):void} fn
  * @return {ChangeHandler}
  * @public
  */
 static $adapt(fn) {
  ChangeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ChangeHandler.$clinit = () =>{};
  ChangeHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_ChangeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ChangeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ChangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ChangeHandler, 'org.gwtproject.event.dom.client.ChangeHandler');

ChangeHandler.$markImplementor(/** @type {Function} */ (ChangeHandler));

exports = ChangeHandler; 
//# sourceMappingURL=ChangeHandler.js.map