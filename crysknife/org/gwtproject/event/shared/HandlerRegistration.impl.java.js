goog.module('org.gwtproject.event.shared.HandlerRegistration$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HandlerRegistration {
 /**
  * @abstract
  * @public
  */
 m_removeHandler__() {}
 /**
  * @param {?function():void} fn
  * @return {HandlerRegistration}
  * @public
  */
 static $adapt(fn) {
  HandlerRegistration.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  HandlerRegistration.$clinit = () =>{};
  HandlerRegistration.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_shared_HandlerRegistration = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HandlerRegistration;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HandlerRegistration.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HandlerRegistration, 'org.gwtproject.event.shared.HandlerRegistration');

HandlerRegistration.$markImplementor(/** @type {Function} */ (HandlerRegistration));

exports = HandlerRegistration; 
//# sourceMappingURL=HandlerRegistration.js.map