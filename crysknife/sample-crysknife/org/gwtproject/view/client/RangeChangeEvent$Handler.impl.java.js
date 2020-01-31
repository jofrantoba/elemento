goog.module('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let RangeChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onRangeChange__org_gwtproject_view_client_RangeChangeEvent(/** RangeChangeEvent */ event) {}
 /** @return {Handler} */
 static $adapt(/** ?function(RangeChangeEvent):void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_RangeChangeEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_RangeChangeEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.RangeChangeEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.RangeChangeEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=RangeChangeEvent$Handler.js.map