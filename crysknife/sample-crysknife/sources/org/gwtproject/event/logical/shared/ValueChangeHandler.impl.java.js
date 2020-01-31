goog.module('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ValueChangeHandler {
 /** @abstract */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(/** ValueChangeEvent<T> */ event) {}
 /** @template T @return {ValueChangeHandler<T>} */
 static $adapt(/** ?function(ValueChangeEvent<T>):void */ fn) {
  ValueChangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ValueChangeHandler.$clinit = () =>{};
  ValueChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_ValueChangeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_ValueChangeHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ValueChangeHandler, 'org.gwtproject.event.logical.shared.ValueChangeHandler');

ValueChangeHandler.$markImplementor(/** @type {Function} */ (ValueChangeHandler));

exports = ValueChangeHandler; 
//# sourceMappingURL=ValueChangeHandler.js.map