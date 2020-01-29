goog.module('org.gwtproject.event.dom.client.ErrorHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventHandler = goog.require('org.gwtproject.event.legacy.shared.EventHandler$impl');

let ErrorEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {EventHandler}
 */
class ErrorHandler {
 /**
  * @abstract
  * @param {ErrorEvent} event
  * @public
  */
 m_onError__org_gwtproject_event_dom_client_ErrorEvent(event) {}
 /**
  * @param {?function(ErrorEvent):void} fn
  * @return {ErrorHandler}
  * @public
  */
 static $adapt(fn) {
  ErrorHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ErrorHandler.$clinit = () =>{};
  ErrorHandler.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_ErrorHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_ErrorHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.ErrorHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ErrorHandler, 'org.gwtproject.event.dom.client.ErrorHandler');

ErrorHandler.$markImplementor(/** @type {Function} */ (ErrorHandler));

exports = ErrorHandler; 
//# sourceMappingURL=ErrorHandler.js.map