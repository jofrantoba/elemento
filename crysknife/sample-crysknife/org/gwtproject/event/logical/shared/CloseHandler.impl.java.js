goog.module('org.gwtproject.event.logical.shared.CloseHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class CloseHandler {
 /** @abstract */
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(/** CloseEvent<T> */ event) {}
 /** @template T @return {CloseHandler<T>} */
 static $adapt(/** ?function(CloseEvent<T>):void */ fn) {
  CloseHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  CloseHandler.$clinit = () =>{};
  CloseHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_CloseHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_CloseHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.CloseHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CloseHandler, 'org.gwtproject.event.logical.shared.CloseHandler');

CloseHandler.$markImplementor(/** @type {Function} */ (CloseHandler));

exports = CloseHandler; 
//# sourceMappingURL=CloseHandler.js.map