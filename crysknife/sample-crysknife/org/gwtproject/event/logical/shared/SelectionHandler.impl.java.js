goog.module('org.gwtproject.event.logical.shared.SelectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class SelectionHandler {
 /**
  * @abstract
  * @param {SelectionEvent<T>} event
  * @public
  */
 m_onSelection__org_gwtproject_event_logical_shared_SelectionEvent(event) {}
 /**
  * @template T
  * @param {?function(SelectionEvent<T>):void} fn
  * @return {SelectionHandler<T>}
  * @public
  */
 static $adapt(fn) {
  SelectionHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  SelectionHandler.$clinit = () =>{};
  SelectionHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_SelectionHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_SelectionHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.SelectionHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SelectionHandler, 'org.gwtproject.event.logical.shared.SelectionHandler');

SelectionHandler.$markImplementor(/** @type {Function} */ (SelectionHandler));

exports = SelectionHandler; 
//# sourceMappingURL=SelectionHandler.js.map