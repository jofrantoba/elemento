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
 /**
  * @abstract
  * @param {HighlightHandler<V>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHighlightHandler__org_gwtproject_event_logical_shared_HighlightHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasHighlightHandlers.$clinit = () =>{};
  HasHighlightHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasHighlightHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasHighlightHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasHighlightHandlers, 'org.gwtproject.event.logical.shared.HasHighlightHandlers');

HasHighlightHandlers.$markImplementor(/** @type {Function} */ (HasHighlightHandlers));

exports = HasHighlightHandlers; 
//# sourceMappingURL=HasHighlightHandlers.js.map