goog.module('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let BeforeSelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasBeforeSelectionHandlers {
 /**
  * @abstract
  * @param {BeforeSelectionHandler<T>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasBeforeSelectionHandlers.$clinit = () =>{};
  HasBeforeSelectionHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasBeforeSelectionHandlers, 'org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers');

HasBeforeSelectionHandlers.$markImplementor(/** @type {Function} */ (HasBeforeSelectionHandlers));

exports = HasBeforeSelectionHandlers; 
//# sourceMappingURL=HasBeforeSelectionHandlers.js.map