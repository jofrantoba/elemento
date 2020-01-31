goog.module('org.gwtproject.event.logical.shared.InitializeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InitializeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class InitializeHandler {
 /** @abstract */
 m_onInitialize__org_gwtproject_event_logical_shared_InitializeEvent(/** InitializeEvent */ event) {}
 /** @return {InitializeHandler} */
 static $adapt(/** ?function(InitializeEvent):void */ fn) {
  InitializeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  InitializeHandler.$clinit = () =>{};
  InitializeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_InitializeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_InitializeHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.InitializeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(InitializeHandler, 'org.gwtproject.event.logical.shared.InitializeHandler');

InitializeHandler.$markImplementor(/** @type {Function} */ (InitializeHandler));

exports = InitializeHandler; 
//# sourceMappingURL=InitializeHandler.js.map