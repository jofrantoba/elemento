goog.module('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Handler {
 /**
  * @abstract
  * @param {CellPreviewEvent<T>} event
  * @public
  */
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(event) {}
 /**
  * @template T
  * @param {?function(CellPreviewEvent<T>):void} fn
  * @return {Handler<T>}
  * @public
  */
 static $adapt(fn) {
  Handler.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
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
  classConstructor.prototype.$implements__org_gwtproject_view_client_CellPreviewEvent_Handler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_CellPreviewEvent_Handler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.CellPreviewEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.CellPreviewEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=CellPreviewEvent$Handler.js.map