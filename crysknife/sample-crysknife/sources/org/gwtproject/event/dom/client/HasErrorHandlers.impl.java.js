goog.module('org.gwtproject.event.dom.client.HasErrorHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ErrorHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasErrorHandlers {
 /**
  * @abstract
  * @param {ErrorHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addErrorHandler__org_gwtproject_event_dom_client_ErrorHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasErrorHandlers.$clinit = () =>{};
  HasErrorHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasErrorHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasErrorHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasErrorHandlers, 'org.gwtproject.event.dom.client.HasErrorHandlers');

HasErrorHandlers.$markImplementor(/** @type {Function} */ (HasErrorHandlers));

exports = HasErrorHandlers; 
//# sourceMappingURL=HasErrorHandlers.js.map