goog.module('org.gwtproject.user.window.client.Window.ScrollHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ScrollEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ScrollHandler {
 /**
  * @abstract
  * @param {ScrollEvent} event
  * @public
  */
 m_onWindowScroll__org_gwtproject_user_window_client_Window_ScrollEvent(event) {}
 /**
  * @param {?function(ScrollEvent):void} fn
  * @return {ScrollHandler}
  * @public
  */
 static $adapt(fn) {
  ScrollHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ScrollHandler.$clinit = () =>{};
  ScrollHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_window_client_Window_ScrollHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_window_client_Window_ScrollHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.window.client.Window.ScrollHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ScrollHandler, 'org.gwtproject.user.window.client.Window$ScrollHandler');

ScrollHandler.$markImplementor(/** @type {Function} */ (ScrollHandler));

exports = ScrollHandler; 
//# sourceMappingURL=Window$ScrollHandler.js.map