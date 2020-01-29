goog.module('org.gwtproject.event.logical.shared.HasShowRangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ShowRangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template V
 * @extends {HasHandlers}
 */
class HasShowRangeHandlers {
 /**
  * @abstract
  * @param {ShowRangeHandler<V>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addShowRangeHandler__org_gwtproject_event_logical_shared_ShowRangeHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasShowRangeHandlers.$clinit = () =>{};
  HasShowRangeHandlers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasShowRangeHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasShowRangeHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasShowRangeHandlers, 'org.gwtproject.event.logical.shared.HasShowRangeHandlers');

HasShowRangeHandlers.$markImplementor(/** @type {Function} */ (HasShowRangeHandlers));

exports = HasShowRangeHandlers; 
//# sourceMappingURL=HasShowRangeHandlers.js.map