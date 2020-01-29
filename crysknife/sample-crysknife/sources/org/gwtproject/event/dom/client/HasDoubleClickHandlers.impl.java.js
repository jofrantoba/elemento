goog.module('org.gwtproject.event.dom.client.HasDoubleClickHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DoubleClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDoubleClickHandlers {
 /**
  * @abstract
  * @param {DoubleClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDoubleClickHandler__org_gwtproject_event_dom_client_DoubleClickHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasDoubleClickHandlers.$clinit = () =>{};
  HasDoubleClickHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasDoubleClickHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDoubleClickHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDoubleClickHandlers, 'org.gwtproject.event.dom.client.HasDoubleClickHandlers');

HasDoubleClickHandlers.$markImplementor(/** @type {Function} */ (HasDoubleClickHandlers));

exports = HasDoubleClickHandlers; 
//# sourceMappingURL=HasDoubleClickHandlers.js.map