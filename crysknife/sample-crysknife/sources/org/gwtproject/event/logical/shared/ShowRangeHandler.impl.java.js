goog.module('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ShowRangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template V
 */
class ShowRangeHandler {
 /**
  * @abstract
  * @param {ShowRangeEvent<V>} event
  * @public
  */
 m_onShowRange__org_gwtproject_event_logical_shared_ShowRangeEvent(event) {}
 /**
  * @template V
  * @param {?function(ShowRangeEvent<V>):void} fn
  * @return {ShowRangeHandler<V>}
  * @public
  */
 static $adapt(fn) {
  ShowRangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<V>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  ShowRangeHandler.$clinit = () =>{};
  ShowRangeHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_ShowRangeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_ShowRangeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.ShowRangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ShowRangeHandler, 'org.gwtproject.event.logical.shared.ShowRangeHandler');

ShowRangeHandler.$markImplementor(/** @type {Function} */ (ShowRangeHandler));

exports = ShowRangeHandler; 
//# sourceMappingURL=ShowRangeHandler.js.map