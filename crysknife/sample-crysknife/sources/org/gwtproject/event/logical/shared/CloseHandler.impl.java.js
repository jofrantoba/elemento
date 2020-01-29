goog.module('org.gwtproject.event.logical.shared.CloseHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class CloseHandler {
 /**
  * @abstract
  * @param {CloseEvent<T>} event
  * @public
  */
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(event) {}
 /**
  * @template T
  * @param {?function(CloseEvent<T>):void} fn
  * @return {CloseHandler<T>}
  * @public
  */
 static $adapt(fn) {
  CloseHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  CloseHandler.$clinit = () =>{};
  CloseHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_CloseHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_CloseHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.CloseHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CloseHandler, 'org.gwtproject.event.logical.shared.CloseHandler');

CloseHandler.$markImplementor(/** @type {Function} */ (CloseHandler));

exports = CloseHandler; 
//# sourceMappingURL=CloseHandler.js.map