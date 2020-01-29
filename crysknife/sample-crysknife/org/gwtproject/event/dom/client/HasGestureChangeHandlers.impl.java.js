goog.module('org.gwtproject.event.dom.client.HasGestureChangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let GestureChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasGestureChangeHandlers {
 /**
  * @abstract
  * @param {GestureChangeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addGestureChangeHandler__org_gwtproject_event_dom_client_GestureChangeHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasGestureChangeHandlers.$clinit = () =>{};
  HasGestureChangeHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasGestureChangeHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasGestureChangeHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasGestureChangeHandlers, 'org.gwtproject.event.dom.client.HasGestureChangeHandlers');

HasGestureChangeHandlers.$markImplementor(/** @type {Function} */ (HasGestureChangeHandlers));

exports = HasGestureChangeHandlers; 
//# sourceMappingURL=HasGestureChangeHandlers.js.map