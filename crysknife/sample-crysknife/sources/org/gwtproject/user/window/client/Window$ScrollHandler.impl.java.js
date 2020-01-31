goog.module('org.gwtproject.user.window.client.Window.ScrollHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ScrollHandler {
 /** @abstract */
 m_onWindowScroll__org_gwtproject_user_window_client_Window_ScrollEvent(/** ScrollEvent */ event) {}
 /** @return {ScrollHandler} */
 static $adapt(/** ?function(ScrollEvent):void */ fn) {
  ScrollHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ScrollHandler.$clinit = () =>{};
  ScrollHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_window_client_Window_ScrollHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_window_client_Window_ScrollHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.window.client.Window.ScrollHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ScrollHandler, 'org.gwtproject.user.window.client.Window$ScrollHandler');

ScrollHandler.$markImplementor(/** @type {Function} */ (ScrollHandler));

exports = ScrollHandler; 
//# sourceMappingURL=Window$ScrollHandler.js.map