goog.module('org.gwtproject.user.window.client.Window.ClosingHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ClosingEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ClosingHandler {
 /**
  * @abstract
  * @param {ClosingEvent} event
  * @public
  */
 m_onWindowClosing__org_gwtproject_user_window_client_Window_ClosingEvent(event) {}
 /**
  * @param {?function(ClosingEvent):void} fn
  * @return {ClosingHandler}
  * @public
  */
 static $adapt(fn) {
  ClosingHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ClosingHandler.$clinit = () =>{};
  ClosingHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_window_client_Window_ClosingHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_window_client_Window_ClosingHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.window.client.Window.ClosingHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ClosingHandler, 'org.gwtproject.user.window.client.Window$ClosingHandler');

ClosingHandler.$markImplementor(/** @type {Function} */ (ClosingHandler));

exports = ClosingHandler; 
//# sourceMappingURL=Window$ClosingHandler.js.map