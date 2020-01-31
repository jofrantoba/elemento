goog.module('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onRedraw__() {}
 /** @return {Handler} */
 static $adapt(/** ?function():void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.user.cellview.client.AbstractHasData$RedrawEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=AbstractHasData$RedrawEvent$Handler.js.map