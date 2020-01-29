goog.module('org.gwtproject.event.dom.client.HasEndedHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let EndedHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasEndedHandlers {
 /**
  * @abstract
  * @param {EndedHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addEndedHandler__org_gwtproject_event_dom_client_EndedHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasEndedHandlers.$clinit = () =>{};
  HasEndedHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasEndedHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasEndedHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasEndedHandlers, 'org.gwtproject.event.dom.client.HasEndedHandlers');

HasEndedHandlers.$markImplementor(/** @type {Function} */ (HasEndedHandlers));

exports = HasEndedHandlers; 
//# sourceMappingURL=HasEndedHandlers.js.map