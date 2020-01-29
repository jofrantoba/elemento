goog.module('org.gwtproject.event.dom.client.FocusHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class FocusHandler {
 /**
  * @abstract
  * @param {FocusEvent} event
  * @public
  */
 m_onFocus__org_gwtproject_event_dom_client_FocusEvent(event) {}
 /**
  * @param {?function(FocusEvent):void} fn
  * @return {FocusHandler}
  * @public
  */
 static $adapt(fn) {
  FocusHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  FocusHandler.$clinit = () =>{};
  FocusHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_FocusHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_FocusHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.FocusHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(FocusHandler, 'org.gwtproject.event.dom.client.FocusHandler');

FocusHandler.$markImplementor(/** @type {Function} */ (FocusHandler));

exports = FocusHandler; 
//# sourceMappingURL=FocusHandler.js.map