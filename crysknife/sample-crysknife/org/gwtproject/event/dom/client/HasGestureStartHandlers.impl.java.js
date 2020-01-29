goog.module('org.gwtproject.event.dom.client.HasGestureStartHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let GestureStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasGestureStartHandlers {
 /**
  * @abstract
  * @param {GestureStartHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addGestureStartHandler__org_gwtproject_event_dom_client_GestureStartHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasGestureStartHandlers.$clinit = () =>{};
  HasGestureStartHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasGestureStartHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasGestureStartHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasGestureStartHandlers, 'org.gwtproject.event.dom.client.HasGestureStartHandlers');

HasGestureStartHandlers.$markImplementor(/** @type {Function} */ (HasGestureStartHandlers));

exports = HasGestureStartHandlers; 
//# sourceMappingURL=HasGestureStartHandlers.js.map