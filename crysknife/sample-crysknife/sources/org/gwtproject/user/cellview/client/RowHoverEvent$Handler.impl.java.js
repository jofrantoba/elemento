goog.module('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let RowHoverEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /**
  * @abstract
  * @param {RowHoverEvent} event
  * @public
  */
 m_onRowHover__org_gwtproject_user_cellview_client_RowHoverEvent(event) {}
 /**
  * @param {?function(RowHoverEvent):void} fn
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_RowHoverEvent_Handler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_RowHoverEvent_Handler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.user.cellview.client.RowHoverEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=RowHoverEvent$Handler.js.map