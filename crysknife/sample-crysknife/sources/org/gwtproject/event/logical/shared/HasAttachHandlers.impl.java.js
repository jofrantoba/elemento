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
 /**
  * @abstract
  * @param {Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addAttachHandler__org_gwtproject_event_logical_shared_AttachEvent_Handler(handler) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isAttached__() {}
 /**
  * @public
  */
 static $clinit() {
  HasAttachHandlers.$clinit = () =>{};
  HasAttachHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasAttachHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasAttachHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAttachHandlers, 'org.gwtproject.event.logical.shared.HasAttachHandlers');

HasAttachHandlers.$markImplementor(/** @type {Function} */ (HasAttachHandlers));

exports = HasAttachHandlers; 
//# sourceMappingURL=HasAttachHandlers.js.map