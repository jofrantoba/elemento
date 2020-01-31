goog.module('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /** @abstract */
 m_onSelectionChange__org_gwtproject_view_client_SelectionChangeEvent(/** SelectionChangeEvent */ event) {}
 /** @return {Handler} */
 static $adapt(/** ?function(SelectionChangeEvent):void */ fn) {
  Handler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_SelectionChangeEvent_Handler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SelectionChangeEvent_Handler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.SelectionChangeEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=SelectionChangeEvent$Handler.js.map