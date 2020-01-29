goog.module('org.gwtproject.event.logical.shared.OpenHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class OpenHandler {
 /**
  * @abstract
  * @param {OpenEvent<T>} event
  * @public
  */
 m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(event) {}
 /**
  * @template T
  * @param {?function(OpenEvent<T>):void} fn
  * @return {OpenHandler<T>}
  * @public
  */
 static $adapt(fn) {
  OpenHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  OpenHandler.$clinit = () =>{};
  OpenHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_OpenHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_OpenHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.OpenHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(OpenHandler, 'org.gwtproject.event.logical.shared.OpenHandler');

OpenHandler.$markImplementor(/** @type {Function} */ (OpenHandler));

exports = OpenHandler; 
//# sourceMappingURL=OpenHandler.js.map