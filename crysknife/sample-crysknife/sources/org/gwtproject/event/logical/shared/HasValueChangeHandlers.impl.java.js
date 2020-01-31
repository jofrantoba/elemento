goog.module('org.gwtproject.event.logical.shared.HasValueChangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasValueChangeHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(/** ValueChangeHandler<T> */ handler) {}
 
 static $clinit() {
  HasValueChangeHandlers.$clinit = () =>{};
  HasValueChangeHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasValueChangeHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasValueChangeHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasValueChangeHandlers, 'org.gwtproject.event.logical.shared.HasValueChangeHandlers');

HasValueChangeHandlers.$markImplementor(/** @type {Function} */ (HasValueChangeHandlers));

exports = HasValueChangeHandlers; 
//# sourceMappingURL=HasValueChangeHandlers.js.map