goog.module('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ShowRangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template V
 */
class ShowRangeHandler {
 /** @abstract */
 m_onShowRange__org_gwtproject_event_logical_shared_ShowRangeEvent(/** ShowRangeEvent<V> */ event) {}
 /** @template V @return {ShowRangeHandler<V>} */
 static $adapt(/** ?function(ShowRangeEvent<V>):void */ fn) {
  ShowRangeHandler.$clinit();
  return /**@type {!$LambdaAdaptor<V>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ShowRangeHandler.$clinit = () =>{};
  ShowRangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_ShowRangeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_ShowRangeHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.ShowRangeHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ShowRangeHandler, 'org.gwtproject.event.logical.shared.ShowRangeHandler');

ShowRangeHandler.$markImplementor(/** @type {Function} */ (ShowRangeHandler));

exports = ShowRangeHandler; 
//# sourceMappingURL=ShowRangeHandler.js.map