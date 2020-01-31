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
 /** @abstract @return {HandlerRegistration} */
 m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(/** BeforeSelectionHandler<T> */ handler) {}
 
 static $clinit() {
  HasBeforeSelectionHandlers.$clinit = () =>{};
  HasBeforeSelectionHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasBeforeSelectionHandlers, 'org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers');

HasBeforeSelectionHandlers.$markImplementor(/** @type {Function} */ (HasBeforeSelectionHandlers));

exports = HasBeforeSelectionHandlers; 
//# sourceMappingURL=HasBeforeSelectionHandlers.js.map