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
 /** @abstract @return {HandlerRegistration} */
 m_addInitializeHandler__org_gwtproject_event_logical_shared_InitializeHandler(/** InitializeHandler */ handler) {}
 
 static $clinit() {
  HasInitializeHandlers.$clinit = () =>{};
  HasInitializeHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasInitializeHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasInitializeHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasInitializeHandlers, 'org.gwtproject.event.logical.shared.HasInitializeHandlers');

HasInitializeHandlers.$markImplementor(/** @type {Function} */ (HasInitializeHandlers));

exports = HasInitializeHandlers; 
//# sourceMappingURL=HasInitializeHandlers.js.map