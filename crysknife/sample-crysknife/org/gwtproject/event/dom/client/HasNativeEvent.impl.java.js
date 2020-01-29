goog.module('org.gwtproject.event.dom.client.HasNativeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.dom.client.HasNativeEvent.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasNativeEvent {
 /**
  * @abstract
  * @return {Object}
  * @public
  */
 m_getNativeEvent__() {}
 /**
  * @param {?function():Object} fn
  * @return {HasNativeEvent}
  * @public
  */
 static $adapt(fn) {
  HasNativeEvent.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  HasNativeEvent.$clinit = () =>{};
  HasNativeEvent.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasNativeEvent = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasNativeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.dom.client.HasNativeEvent.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasNativeEvent, 'org.gwtproject.event.dom.client.HasNativeEvent');

HasNativeEvent.$markImplementor(/** @type {Function} */ (HasNativeEvent));

exports = HasNativeEvent; 
//# sourceMappingURL=HasNativeEvent.js.map