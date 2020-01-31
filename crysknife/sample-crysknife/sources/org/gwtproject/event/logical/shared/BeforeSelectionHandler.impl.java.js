goog.module('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class BeforeSelectionHandler {
 /** @abstract */
 m_onBeforeSelection__org_gwtproject_event_logical_shared_BeforeSelectionEvent(/** BeforeSelectionEvent<T> */ event) {}
 /** @template T @return {BeforeSelectionHandler<T>} */
 static $adapt(/** ?function(BeforeSelectionEvent<T>):void */ fn) {
  BeforeSelectionHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  BeforeSelectionHandler.$clinit = () =>{};
  BeforeSelectionHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_BeforeSelectionHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_BeforeSelectionHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(BeforeSelectionHandler, 'org.gwtproject.event.logical.shared.BeforeSelectionHandler');

BeforeSelectionHandler.$markImplementor(/** @type {Function} */ (BeforeSelectionHandler));

exports = BeforeSelectionHandler; 
//# sourceMappingURL=BeforeSelectionHandler.js.map