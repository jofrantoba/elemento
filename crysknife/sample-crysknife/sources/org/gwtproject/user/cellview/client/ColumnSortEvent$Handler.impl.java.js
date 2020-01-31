goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(/** ColumnSortEvent */ event) {}
 /** @return {Handler} */
 static $adapt(/** ?function(ColumnSortEvent):void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.user.cellview.client.ColumnSortEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=ColumnSortEvent$Handler.js.map