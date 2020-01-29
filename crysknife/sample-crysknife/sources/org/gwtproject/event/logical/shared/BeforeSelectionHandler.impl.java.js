goog.module('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class BeforeSelectionHandler {
 /**
  * @abstract
  * @param {BeforeSelectionEvent<T>} event
  * @public
  */
 m_onBeforeSelection__org_gwtproject_event_logical_shared_BeforeSelectionEvent(event) {}
 /**
  * @template T
  * @param {?function(BeforeSelectionEvent<T>):void} fn
  * @return {BeforeSelectionHandler<T>}
  * @public
  */
 static $adapt(fn) {
  BeforeSelectionHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  BeforeSelectionHandler.$clinit = () =>{};
  BeforeSelectionHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_BeforeSelectionHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_BeforeSelectionHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(BeforeSelectionHandler, 'org.gwtproject.event.logical.shared.BeforeSelectionHandler');

BeforeSelectionHandler.$markImplementor(/** @type {Function} */ (BeforeSelectionHandler));

exports = BeforeSelectionHandler; 
//# sourceMappingURL=BeforeSelectionHandler.js.map