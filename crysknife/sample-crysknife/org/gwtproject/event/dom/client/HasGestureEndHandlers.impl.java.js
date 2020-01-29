goog.module('org.gwtproject.event.dom.client.HasGestureEndHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let GestureEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasGestureEndHandlers {
 /**
  * @abstract
  * @param {GestureEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addGestureEndHandler__org_gwtproject_event_dom_client_GestureEndHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasGestureEndHandlers.$clinit = () =>{};
  HasGestureEndHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasGestureEndHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasGestureEndHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasGestureEndHandlers, 'org.gwtproject.event.dom.client.HasGestureEndHandlers');

HasGestureEndHandlers.$markImplementor(/** @type {Function} */ (HasGestureEndHandlers));

exports = HasGestureEndHandlers; 
//# sourceMappingURL=HasGestureEndHandlers.js.map