goog.module('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let RowCountChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onRowCountChange__org_gwtproject_view_client_RowCountChangeEvent(/** RowCountChangeEvent */ event) {}
 /** @return {Handler} */
 static $adapt(/** ?function(RowCountChangeEvent):void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_RowCountChangeEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_RowCountChangeEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.RowCountChangeEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.RowCountChangeEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=RowCountChangeEvent$Handler.js.map