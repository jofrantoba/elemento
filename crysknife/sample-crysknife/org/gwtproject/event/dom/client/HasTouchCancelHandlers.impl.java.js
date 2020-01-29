goog.module('org.gwtproject.event.dom.client.HasTouchCancelHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchCancelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchCancelHandlers {
 /**
  * @abstract
  * @param {TouchCancelHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchCancelHandler__org_gwtproject_event_dom_client_TouchCancelHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasTouchCancelHandlers.$clinit = () =>{};
  HasTouchCancelHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchCancelHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchCancelHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchCancelHandlers, 'org.gwtproject.event.dom.client.HasTouchCancelHandlers');

HasTouchCancelHandlers.$markImplementor(/** @type {Function} */ (HasTouchCancelHandlers));

exports = HasTouchCancelHandlers; 
//# sourceMappingURL=HasTouchCancelHandlers.js.map