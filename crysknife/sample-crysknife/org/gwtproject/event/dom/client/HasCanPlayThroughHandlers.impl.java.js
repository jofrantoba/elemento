goog.module('org.gwtproject.event.dom.client.HasCanPlayThroughHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let CanPlayThroughHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasCanPlayThroughHandlers {
 /**
  * @abstract
  * @param {CanPlayThroughHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCanPlayThroughHandler__org_gwtproject_event_dom_client_CanPlayThroughHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasCanPlayThroughHandlers.$clinit = () =>{};
  HasCanPlayThroughHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasCanPlayThroughHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasCanPlayThroughHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCanPlayThroughHandlers, 'org.gwtproject.event.dom.client.HasCanPlayThroughHandlers');

HasCanPlayThroughHandlers.$markImplementor(/** @type {Function} */ (HasCanPlayThroughHandlers));

exports = HasCanPlayThroughHandlers; 
//# sourceMappingURL=HasCanPlayThroughHandlers.js.map