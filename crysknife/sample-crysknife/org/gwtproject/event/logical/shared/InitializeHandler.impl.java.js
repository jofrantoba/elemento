goog.module('org.gwtproject.event.logical.shared.InitializeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InitializeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class InitializeHandler {
 /**
  * @abstract
  * @param {InitializeEvent} event
  * @public
  */
 m_onInitialize__org_gwtproject_event_logical_shared_InitializeEvent(event) {}
 /**
  * @param {?function(InitializeEvent):void} fn
  * @return {InitializeHandler}
  * @public
  */
 static $adapt(fn) {
  InitializeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  InitializeHandler.$clinit = () =>{};
  InitializeHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_InitializeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_InitializeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.InitializeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(InitializeHandler, 'org.gwtproject.event.logical.shared.InitializeHandler');

InitializeHandler.$markImplementor(/** @type {Function} */ (InitializeHandler));

exports = InitializeHandler; 
//# sourceMappingURL=InitializeHandler.js.map