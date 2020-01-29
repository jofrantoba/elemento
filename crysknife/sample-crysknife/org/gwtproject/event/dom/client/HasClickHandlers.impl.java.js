goog.module('org.gwtproject.event.dom.client.HasClickHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasClickHandlers {
 /**
  * @abstract
  * @param {ClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasClickHandlers.$clinit = () =>{};
  HasClickHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasClickHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasClickHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasClickHandlers, 'org.gwtproject.event.dom.client.HasClickHandlers');

HasClickHandlers.$markImplementor(/** @type {Function} */ (HasClickHandlers));

exports = HasClickHandlers; 
//# sourceMappingURL=HasClickHandlers.js.map