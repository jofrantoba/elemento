goog.module('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasSelectionHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(/** SelectionHandler<T> */ handler) {}
 
 static $clinit() {
  HasSelectionHandlers.$clinit = () =>{};
  HasSelectionHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasSelectionHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasSelectionHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasSelectionHandlers, 'org.gwtproject.event.logical.shared.HasSelectionHandlers');

HasSelectionHandlers.$markImplementor(/** @type {Function} */ (HasSelectionHandlers));

exports = HasSelectionHandlers; 
//# sourceMappingURL=HasSelectionHandlers.js.map