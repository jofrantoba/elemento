goog.module('org.gwtproject.event.logical.shared.HighlightHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HighlightEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightHandler.$LambdaAdaptor$impl');

/**
 * @interface
 * @template V
 */
class HighlightHandler {
 /**
  * @abstract
  * @param {HighlightEvent<V>} event
  * @public
  */
 m_onHighlight__org_gwtproject_event_logical_shared_HighlightEvent(event) {}
 /**
  * @template V
  * @param {?function(HighlightEvent<V>):void} fn
  * @return {HighlightHandler<V>}
  * @public
  */
 static $adapt(fn) {
  HighlightHandler.$clinit();
  return /**@type {!$LambdaAdaptor<V>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  HighlightHandler.$clinit = () =>{};
  HighlightHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HighlightHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HighlightHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.logical.shared.HighlightHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HighlightHandler, 'org.gwtproject.event.logical.shared.HighlightHandler');

HighlightHandler.$markImplementor(/** @type {Function} */ (HighlightHandler));

exports = HighlightHandler; 
//# sourceMappingURL=HighlightHandler.js.map