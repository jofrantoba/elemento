goog.module('org.gwtproject.event.logical.shared.HasValueChangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasValueChangeHandlers {
 /**
  * @abstract
  * @param {ValueChangeHandler<T>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasValueChangeHandlers.$clinit = () =>{};
  HasValueChangeHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasValueChangeHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasValueChangeHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasValueChangeHandlers, 'org.gwtproject.event.logical.shared.HasValueChangeHandlers');

HasValueChangeHandlers.$markImplementor(/** @type {Function} */ (HasValueChangeHandlers));

exports = HasValueChangeHandlers; 
//# sourceMappingURL=HasValueChangeHandlers.js.map