goog.module('org.gwtproject.event.logical.shared.HasShowRangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ShowRangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template V
 * @extends {HasHandlers}
 */
class HasShowRangeHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addShowRangeHandler__org_gwtproject_event_logical_shared_ShowRangeHandler(/** ShowRangeHandler<V> */ handler) {}
 
 static $clinit() {
  HasShowRangeHandlers.$clinit = () =>{};
  HasShowRangeHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasShowRangeHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasShowRangeHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasShowRangeHandlers, 'org.gwtproject.event.logical.shared.HasShowRangeHandlers');

HasShowRangeHandlers.$markImplementor(/** @type {Function} */ (HasShowRangeHandlers));

exports = HasShowRangeHandlers; 
//# sourceMappingURL=HasShowRangeHandlers.js.map