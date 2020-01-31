goog.module('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let RowHoverEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onRowHover__org_gwtproject_user_cellview_client_RowHoverEvent(/** RowHoverEvent */ event) {}
 /** @return {Handler} */
 static $adapt(/** ?function(RowHoverEvent):void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_RowHoverEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_RowHoverEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.user.cellview.client.RowHoverEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=RowHoverEvent$Handler.js.map