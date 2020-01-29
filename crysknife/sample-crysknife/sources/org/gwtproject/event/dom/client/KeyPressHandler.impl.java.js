goog.module('org.gwtproject.event.dom.client.KeyPressHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class KeyPressHandler {
 /**
  * @abstract
  * @param {KeyPressEvent} event
  * @public
  */
 m_onKeyPress__org_gwtproject_event_dom_client_KeyPressEvent(event) {}
 /**
  * @param {?function(KeyPressEvent):void} fn
  * @return {KeyPressHandler}
  * @public
  */
 static $adapt(fn) {
  KeyPressHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  KeyPressHandler.$clinit = () =>{};
  KeyPressHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_KeyPressHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_KeyPressHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.KeyPressHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyPressHandler, 'org.gwtproject.event.dom.client.KeyPressHandler');

KeyPressHandler.$markImplementor(/** @type {Function} */ (KeyPressHandler));

exports = KeyPressHandler; 
//# sourceMappingURL=KeyPressHandler.js.map