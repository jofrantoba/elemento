goog.module('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let RowCountChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /**
  * @abstract
  * @param {RowCountChangeEvent} event
  * @public
  */
 m_onRowCountChange__org_gwtproject_view_client_RowCountChangeEvent(event) {}
 /**
  * @param {?function(RowCountChangeEvent):void} fn
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
  classConstructor.prototype.$implements__org_gwtproject_view_client_RowCountChangeEvent_Handler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_RowCountChangeEvent_Handler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.RowCountChangeEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.RowCountChangeEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=RowCountChangeEvent$Handler.js.map