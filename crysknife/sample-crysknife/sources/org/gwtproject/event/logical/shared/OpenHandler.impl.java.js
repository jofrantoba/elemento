goog.module('org.gwtproject.event.logical.shared.OpenHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class OpenHandler {
 /** @abstract */
 m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(/** OpenEvent<T> */ event) {}
 /** @template T @return {OpenHandler<T>} */
 static $adapt(/** ?function(OpenEvent<T>):void */ fn) {
  OpenHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  OpenHandler.$clinit = () =>{};
  OpenHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_OpenHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_OpenHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.OpenHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(OpenHandler, 'org.gwtproject.event.logical.shared.OpenHandler');

OpenHandler.$markImplementor(/** @type {Function} */ (OpenHandler));

exports = OpenHandler; 
//# sourceMappingURL=OpenHandler.js.map