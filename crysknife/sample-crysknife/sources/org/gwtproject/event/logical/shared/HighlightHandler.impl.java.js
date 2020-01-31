goog.module('org.gwtproject.event.logical.shared.HighlightHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HighlightEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template V
 */
class HighlightHandler {
 /** @abstract */
 m_onHighlight__org_gwtproject_event_logical_shared_HighlightEvent(/** HighlightEvent<V> */ event) {}
 /** @template V @return {HighlightHandler<V>} */
 static $adapt(/** ?function(HighlightEvent<V>):void */ fn) {
  HighlightHandler.$clinit();
  return /**@type {!$LambdaAdaptor<V>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  HighlightHandler.$clinit = () =>{};
  HighlightHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HighlightHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HighlightHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.HighlightHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HighlightHandler, 'org.gwtproject.event.logical.shared.HighlightHandler');

HighlightHandler.$markImplementor(/** @type {Function} */ (HighlightHandler));

exports = HighlightHandler; 
//# sourceMappingURL=HighlightHandler.js.map