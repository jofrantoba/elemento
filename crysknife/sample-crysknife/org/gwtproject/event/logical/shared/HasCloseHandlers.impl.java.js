goog.module('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasCloseHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(/** CloseHandler<T> */ handler) {}
 
 static $clinit() {
  HasCloseHandlers.$clinit = () =>{};
  HasCloseHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasCloseHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasCloseHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCloseHandlers, 'org.gwtproject.event.logical.shared.HasCloseHandlers');

HasCloseHandlers.$markImplementor(/** @type {Function} */ (HasCloseHandlers));

exports = HasCloseHandlers; 
//# sourceMappingURL=HasCloseHandlers.js.map