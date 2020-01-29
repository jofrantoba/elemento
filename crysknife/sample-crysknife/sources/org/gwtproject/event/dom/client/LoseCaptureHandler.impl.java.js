goog.module('org.gwtproject.event.dom.client.LoseCaptureHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let LoseCaptureEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class LoseCaptureHandler {
 /**
  * @abstract
  * @param {LoseCaptureEvent} event
  * @public
  */
 m_onLoseCapture__org_gwtproject_event_dom_client_LoseCaptureEvent(event) {}
 /**
  * @param {?function(LoseCaptureEvent):void} fn
  * @return {LoseCaptureHandler}
  * @public
  */
 static $adapt(fn) {
  LoseCaptureHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  LoseCaptureHandler.$clinit = () =>{};
  LoseCaptureHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_LoseCaptureHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_LoseCaptureHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.LoseCaptureHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(LoseCaptureHandler, 'org.gwtproject.event.dom.client.LoseCaptureHandler');

LoseCaptureHandler.$markImplementor(/** @type {Function} */ (LoseCaptureHandler));

exports = LoseCaptureHandler; 
//# sourceMappingURL=LoseCaptureHandler.js.map