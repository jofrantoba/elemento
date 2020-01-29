goog.module('org.gwtproject.event.logical.shared.ResizeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ResizeHandler {
 /**
  * @abstract
  * @param {ResizeEvent} event
  * @public
  */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(event) {}
 /**
  * @param {?function(ResizeEvent):void} fn
  * @return {ResizeHandler}
  * @public
  */
 static $adapt(fn) {
  ResizeHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ResizeHandler.$clinit = () =>{};
  ResizeHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_ResizeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_ResizeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.ResizeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ResizeHandler, 'org.gwtproject.event.logical.shared.ResizeHandler');

ResizeHandler.$markImplementor(/** @type {Function} */ (ResizeHandler));

exports = ResizeHandler; 
//# sourceMappingURL=ResizeHandler.js.map