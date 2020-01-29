goog.module('org.gwtproject.event.dom.client.HasTouchEndHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchEndHandlers {
 /**
  * @abstract
  * @param {TouchEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchEndHandler__org_gwtproject_event_dom_client_TouchEndHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasTouchEndHandlers.$clinit = () =>{};
  HasTouchEndHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchEndHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchEndHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchEndHandlers, 'org.gwtproject.event.dom.client.HasTouchEndHandlers');

HasTouchEndHandlers.$markImplementor(/** @type {Function} */ (HasTouchEndHandlers));

exports = HasTouchEndHandlers; 
//# sourceMappingURL=HasTouchEndHandlers.js.map