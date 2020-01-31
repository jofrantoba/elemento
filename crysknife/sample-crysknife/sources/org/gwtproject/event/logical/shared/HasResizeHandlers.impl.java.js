goog.module('org.gwtproject.event.logical.shared.HasResizeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ResizeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasResizeHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler(/** ResizeHandler */ handler) {}
 
 static $clinit() {
  HasResizeHandlers.$clinit = () =>{};
  HasResizeHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasResizeHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasResizeHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasResizeHandlers, 'org.gwtproject.event.logical.shared.HasResizeHandlers');

HasResizeHandlers.$markImplementor(/** @type {Function} */ (HasResizeHandlers));

exports = HasResizeHandlers; 
//# sourceMappingURL=HasResizeHandlers.js.map