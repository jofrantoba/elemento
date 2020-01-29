goog.module('org.gwtproject.event.dom.client.HasKeyPressHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasKeyPressHandlers {
 /**
  * @abstract
  * @param {KeyPressHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasKeyPressHandlers.$clinit = () =>{};
  HasKeyPressHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasKeyPressHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasKeyPressHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasKeyPressHandlers, 'org.gwtproject.event.dom.client.HasKeyPressHandlers');

HasKeyPressHandlers.$markImplementor(/** @type {Function} */ (HasKeyPressHandlers));

exports = HasKeyPressHandlers; 
//# sourceMappingURL=HasKeyPressHandlers.js.map