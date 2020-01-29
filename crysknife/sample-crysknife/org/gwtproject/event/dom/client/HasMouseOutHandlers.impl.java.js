goog.module('org.gwtproject.event.dom.client.HasMouseOutHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseOutHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseOutHandlers {
 /**
  * @abstract
  * @param {MouseOutHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasMouseOutHandlers.$clinit = () =>{};
  HasMouseOutHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseOutHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseOutHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseOutHandlers, 'org.gwtproject.event.dom.client.HasMouseOutHandlers');

HasMouseOutHandlers.$markImplementor(/** @type {Function} */ (HasMouseOutHandlers));

exports = HasMouseOutHandlers; 
//# sourceMappingURL=HasMouseOutHandlers.js.map