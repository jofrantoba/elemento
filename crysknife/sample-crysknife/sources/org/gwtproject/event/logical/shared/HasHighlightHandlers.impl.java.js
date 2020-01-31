goog.module('org.gwtproject.event.logical.shared.HasHighlightHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let HighlightHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @template V
 * @extends {HasHandlers}
 */
class HasHighlightHandlers {
 /** @abstract @return {HandlerRegistration} */
 m_addHighlightHandler__org_gwtproject_event_logical_shared_HighlightHandler(/** HighlightHandler<V> */ handler) {}
 
 static $clinit() {
  HasHighlightHandlers.$clinit = () =>{};
  HasHighlightHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_logical_shared_HasHighlightHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasHighlightHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasHighlightHandlers, 'org.gwtproject.event.logical.shared.HasHighlightHandlers');

HasHighlightHandlers.$markImplementor(/** @type {Function} */ (HasHighlightHandlers));

exports = HasHighlightHandlers; 
//# sourceMappingURL=HasHighlightHandlers.js.map