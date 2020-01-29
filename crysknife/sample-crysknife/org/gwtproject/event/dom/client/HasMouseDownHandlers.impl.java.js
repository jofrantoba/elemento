goog.module('org.gwtproject.event.dom.client.HasMouseDownHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseDownHandlers {
 /**
  * @abstract
  * @param {MouseDownHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseDownHandler__org_gwtproject_event_dom_client_MouseDownHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasMouseDownHandlers.$clinit = () =>{};
  HasMouseDownHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseDownHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseDownHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseDownHandlers, 'org.gwtproject.event.dom.client.HasMouseDownHandlers');

HasMouseDownHandlers.$markImplementor(/** @type {Function} */ (HasMouseDownHandlers));

exports = HasMouseDownHandlers; 
//# sourceMappingURL=HasMouseDownHandlers.js.map