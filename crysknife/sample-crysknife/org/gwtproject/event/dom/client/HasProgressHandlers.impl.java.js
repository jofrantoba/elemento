goog.module('org.gwtproject.event.dom.client.HasProgressHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ProgressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasProgressHandlers {
 /**
  * @abstract
  * @param {ProgressHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addProgressHandler__org_gwtproject_event_dom_client_ProgressHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasProgressHandlers.$clinit = () =>{};
  HasProgressHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasProgressHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasProgressHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasProgressHandlers, 'org.gwtproject.event.dom.client.HasProgressHandlers');

HasProgressHandlers.$markImplementor(/** @type {Function} */ (HasProgressHandlers));

exports = HasProgressHandlers; 
//# sourceMappingURL=HasProgressHandlers.js.map