goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /**
  * @abstract
  * @param {ColumnSortEvent} event
  * @public
  */
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(event) {}
 /**
  * @param {?function(ColumnSortEvent):void} fn
  * @return {Handler}
  * @public
  */
 static $adapt(fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.user.cellview.client.ColumnSortEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=ColumnSortEvent$Handler.js.map