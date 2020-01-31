goog.module('org.gwtproject.event.logical.shared.HasOpenHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let OpenHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasOpenHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addOpenHandler__org_gwtproject_event_logical_shared_OpenHandler(/** OpenHandler<T> */ handler) {}
 
 static $clinit() {
  HasOpenHandlers.$clinit = () =>{};
  HasOpenHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasOpenHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasOpenHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasOpenHandlers, 'org.gwtproject.event.logical.shared.HasOpenHandlers');

HasOpenHandlers.$markImplementor(/** @type {Function} */ (HasOpenHandlers));

exports = HasOpenHandlers; 
//# sourceMappingURL=HasOpenHandlers.js.map