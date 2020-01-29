goog.module('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Handler {
 /**
  * @abstract
  * @param {SelectionChangeEvent} event
  * @public
  */
 m_onSelectionChange__org_gwtproject_view_client_SelectionChangeEvent(event) {}
 /**
  * @param {?function(SelectionChangeEvent):void} fn
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
  classConstructor.prototype.$implements__org_gwtproject_view_client_SelectionChangeEvent_Handler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SelectionChangeEvent_Handler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent.Handler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Handler, 'org.gwtproject.view.client.SelectionChangeEvent$Handler');

Handler.$markImplementor(/** @type {Function} */ (Handler));

exports = Handler; 
//# sourceMappingURL=SelectionChangeEvent$Handler.js.map