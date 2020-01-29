goog.module('org.gwtproject.event.dom.client.HasChangeHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasChangeHandlers {
 /**
  * @abstract
  * @param {ChangeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasChangeHandlers.$clinit = () =>{};
  HasChangeHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasChangeHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasChangeHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasChangeHandlers, 'org.gwtproject.event.dom.client.HasChangeHandlers');

HasChangeHandlers.$markImplementor(/** @type {Function} */ (HasChangeHandlers));

exports = HasChangeHandlers; 
//# sourceMappingURL=HasChangeHandlers.js.map