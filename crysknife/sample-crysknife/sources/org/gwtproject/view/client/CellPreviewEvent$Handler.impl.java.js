goog.module('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Handler {
 /** @abstract */
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {}
 /** @template T @return {Handler<T>} */
 static $adapt(/** ?function(CellPreviewEvent<T>):void */ fn) {
  Handler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_CellPreviewEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_CellPreviewEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.CellPreviewEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.CellPreviewEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=CellPreviewEvent$Handler.js.map