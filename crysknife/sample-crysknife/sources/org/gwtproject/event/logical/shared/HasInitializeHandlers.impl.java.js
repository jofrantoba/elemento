goog.module('org.gwtproject.event.logical.shared.HasInitializeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let InitializeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasInitializeHandlers {
 /**
  * @abstract
  * @param {InitializeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addInitializeHandler__org_gwtproject_event_logical_shared_InitializeHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasInitializeHandlers.$clinit = () =>{};
  HasInitializeHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasInitializeHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasInitializeHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasInitializeHandlers, 'org.gwtproject.event.logical.shared.HasInitializeHandlers');

HasInitializeHandlers.$markImplementor(/** @type {Function} */ (HasInitializeHandlers));

exports = HasInitializeHandlers; 
//# sourceMappingURL=HasInitializeHandlers.js.map