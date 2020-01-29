goog.module('org.gwtproject.event.dom.client.HasKeyUpHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasKeyUpHandlers {
 /**
  * @abstract
  * @param {KeyUpHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasKeyUpHandlers.$clinit = () =>{};
  HasKeyUpHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasKeyUpHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasKeyUpHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyUpHandlers, 'org.gwtproject.event.dom.client.HasKeyUpHandlers');

HasKeyUpHandlers.$markImplementor(/** @type {Function} */ (HasKeyUpHandlers));

exports = HasKeyUpHandlers; 
//# sourceMappingURL=HasKeyUpHandlers.js.map