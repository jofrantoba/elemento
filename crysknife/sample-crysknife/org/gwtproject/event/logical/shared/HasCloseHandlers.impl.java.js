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
 /**
  * @abstract
  * @param {CloseHandler<T>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasCloseHandlers.$clinit = () =>{};
  HasCloseHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_logical_shared_HasCloseHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_logical_shared_HasCloseHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCloseHandlers, 'org.gwtproject.event.logical.shared.HasCloseHandlers');

HasCloseHandlers.$markImplementor(/** @type {Function} */ (HasCloseHandlers));

exports = HasCloseHandlers; 
//# sourceMappingURL=HasCloseHandlers.js.map