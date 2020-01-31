goog.module('org.gwtproject.event.logical.shared.ResizeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ResizeHandler {
 /** @abstract */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(/** ResizeEvent */ event) {}
 /** @return {ResizeHandler} */
 static $adapt(/** ?function(ResizeEvent):void */ fn) {
  ResizeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ResizeHandler.$clinit = () =>{};
  ResizeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_ResizeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_ResizeHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.ResizeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ResizeHandler, 'org.gwtproject.event.logical.shared.ResizeHandler');

ResizeHandler.$markImplementor(/** @type {Function} */ (ResizeHandler));

exports = ResizeHandler; 
//# sourceMappingURL=ResizeHandler.js.map