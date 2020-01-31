goog.module('org.gwtproject.event.logical.shared.SelectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class SelectionHandler {
 /** @abstract */
 m_onSelection__org_gwtproject_event_logical_shared_SelectionEvent(/** SelectionEvent<T> */ event) {}
 /** @template T @return {SelectionHandler<T>} */
 static $adapt(/** ?function(SelectionEvent<T>):void */ fn) {
  SelectionHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  SelectionHandler.$clinit = () =>{};
  SelectionHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_SelectionHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_SelectionHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.SelectionHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SelectionHandler, 'org.gwtproject.event.logical.shared.SelectionHandler');

SelectionHandler.$markImplementor(/** @type {Function} */ (SelectionHandler));

exports = SelectionHandler; 
//# sourceMappingURL=SelectionHandler.js.map