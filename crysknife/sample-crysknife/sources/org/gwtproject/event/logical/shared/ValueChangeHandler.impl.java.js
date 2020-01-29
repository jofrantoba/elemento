goog.module('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ValueChangeHandler {
 /**
  * @abstract
  * @param {ValueChangeEvent<T>} event
  * @public
  */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(event) {}
 /**
  * @template T
  * @param {?function(ValueChangeEvent<T>):void} fn
  * @return {ValueChangeHandler<T>}
  * @public
  */
 static $adapt(fn) {
  ValueChangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  ValueChangeHandler.$clinit = () =>{};
  ValueChangeHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_ValueChangeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_ValueChangeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ValueChangeHandler, 'org.gwtproject.event.logical.shared.ValueChangeHandler');

ValueChangeHandler.$markImplementor(/** @type {Function} */ (ValueChangeHandler));

exports = ValueChangeHandler; 
//# sourceMappingURL=ValueChangeHandler.js.map