goog.module('org.gwtproject.event.shared.HasHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasHandlers {
 /**
  * @abstract
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {}
 /**
  * @param {?function(Event<?>):void} fn
  * @return {HasHandlers}
  * @public
  */
 static $adapt(fn) {
  HasHandlers.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  HasHandlers.$clinit = () =>{};
  HasHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_shared_HasHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HasHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HasHandlers.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasHandlers, 'org.gwtproject.event.shared.HasHandlers');

HasHandlers.$markImplementor(/** @type {Function} */ (HasHandlers));

exports = HasHandlers; 
//# sourceMappingURL=HasHandlers.js.map