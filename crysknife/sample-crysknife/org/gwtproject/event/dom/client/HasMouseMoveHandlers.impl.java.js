goog.module('org.gwtproject.event.dom.client.HasMouseMoveHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseMoveHandlers {
 /**
  * @abstract
  * @param {MouseMoveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseMoveHandler__org_gwtproject_event_dom_client_MouseMoveHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasMouseMoveHandlers.$clinit = () =>{};
  HasMouseMoveHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseMoveHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseMoveHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseMoveHandlers, 'org.gwtproject.event.dom.client.HasMouseMoveHandlers');

HasMouseMoveHandlers.$markImplementor(/** @type {Function} */ (HasMouseMoveHandlers));

exports = HasMouseMoveHandlers; 
//# sourceMappingURL=HasMouseMoveHandlers.js.map