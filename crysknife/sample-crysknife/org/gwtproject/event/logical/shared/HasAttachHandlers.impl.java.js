goog.module('org.gwtproject.event.logical.shared.HasAttachHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Handler = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasAttachHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addAttachHandler__org_gwtproject_event_logical_shared_AttachEvent_Handler(/** Handler */ handler) {}
 /** @abstract @return {boolean} */
 m_isAttached__() {}
 
 static $clinit() {
  HasAttachHandlers.$clinit = () =>{};
  HasAttachHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasAttachHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasAttachHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAttachHandlers, 'org.gwtproject.event.logical.shared.HasAttachHandlers');

HasAttachHandlers.$markImplementor(/** @type {Function} */ (HasAttachHandlers));

exports = HasAttachHandlers; 
//# sourceMappingURL=HasAttachHandlers.js.map