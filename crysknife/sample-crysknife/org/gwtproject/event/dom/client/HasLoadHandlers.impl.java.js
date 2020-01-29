goog.module('org.gwtproject.event.dom.client.HasLoadHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let LoadHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasLoadHandlers {
 /**
  * @abstract
  * @param {LoadHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addLoadHandler__org_gwtproject_event_dom_client_LoadHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasLoadHandlers.$clinit = () =>{};
  HasLoadHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasLoadHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasLoadHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasLoadHandlers, 'org.gwtproject.event.dom.client.HasLoadHandlers');

HasLoadHandlers.$markImplementor(/** @type {Function} */ (HasLoadHandlers));

exports = HasLoadHandlers; 
//# sourceMappingURL=HasLoadHandlers.js.map