goog.module('org.gwtproject.user.window.client.Window.ClosingHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ClosingEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ClosingHandler {
 /** @abstract */
 m_onWindowClosing__org_gwtproject_user_window_client_Window_ClosingEvent(/** ClosingEvent */ event) {}
 /** @return {ClosingHandler} */
 static $adapt(/** ?function(ClosingEvent):void */ fn) {
  ClosingHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ClosingHandler.$clinit = () =>{};
  ClosingHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_window_client_Window_ClosingHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_window_client_Window_ClosingHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.window.client.Window.ClosingHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ClosingHandler, 'org.gwtproject.user.window.client.Window$ClosingHandler');

ClosingHandler.$markImplementor(/** @type {Function} */ (ClosingHandler));

exports = ClosingHandler; 
//# sourceMappingURL=Window$ClosingHandler.js.map