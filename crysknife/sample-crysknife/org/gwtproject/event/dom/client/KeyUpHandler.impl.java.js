goog.module('org.gwtproject.event.dom.client.KeyUpHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class KeyUpHandler {
 /**
  * @abstract
  * @param {KeyUpEvent} event
  * @public
  */
 m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(event) {}
 /**
  * @param {?function(KeyUpEvent):void} fn
  * @return {KeyUpHandler}
  * @public
  */
 static $adapt(fn) {
  KeyUpHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  KeyUpHandler.$clinit = () =>{};
  KeyUpHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_KeyUpHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_KeyUpHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.KeyUpHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyUpHandler, 'org.gwtproject.event.dom.client.KeyUpHandler');

KeyUpHandler.$markImplementor(/** @type {Function} */ (KeyUpHandler));

exports = KeyUpHandler; 
//# sourceMappingURL=KeyUpHandler.js.map