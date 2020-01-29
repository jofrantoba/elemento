goog.module('org.gwtproject.event.dom.client.ProgressHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ProgressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ProgressHandler {
 /**
  * @abstract
  * @param {ProgressEvent} event
  * @public
  */
 m_onProgress__org_gwtproject_event_dom_client_ProgressEvent(event) {}
 /**
  * @param {?function(ProgressEvent):void} fn
  * @return {ProgressHandler}
  * @public
  */
 static $adapt(fn) {
  ProgressHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ProgressHandler.$clinit = () =>{};
  ProgressHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_ProgressHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ProgressHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ProgressHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ProgressHandler, 'org.gwtproject.event.dom.client.ProgressHandler');

ProgressHandler.$markImplementor(/** @type {Function} */ (ProgressHandler));

exports = ProgressHandler; 
//# sourceMappingURL=ProgressHandler.js.map