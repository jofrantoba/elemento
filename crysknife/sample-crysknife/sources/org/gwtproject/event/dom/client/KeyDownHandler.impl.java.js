goog.module('org.gwtproject.event.dom.client.KeyDownHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class KeyDownHandler {
 /**
  * @abstract
  * @param {KeyDownEvent} event
  * @public
  */
 m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(event) {}
 /**
  * @param {?function(KeyDownEvent):void} fn
  * @return {KeyDownHandler}
  * @public
  */
 static $adapt(fn) {
  KeyDownHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  KeyDownHandler.$clinit = () =>{};
  KeyDownHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_KeyDownHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_KeyDownHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.KeyDownHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyDownHandler, 'org.gwtproject.event.dom.client.KeyDownHandler');

KeyDownHandler.$markImplementor(/** @type {Function} */ (KeyDownHandler));

exports = KeyDownHandler; 
//# sourceMappingURL=KeyDownHandler.js.map