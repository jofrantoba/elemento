goog.module('org.gwtproject.event.dom.client.HasMouseWheelHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let MouseWheelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasMouseWheelHandlers {
 /**
  * @abstract
  * @param {MouseWheelHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseWheelHandler__org_gwtproject_event_dom_client_MouseWheelHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasMouseWheelHandlers.$clinit = () =>{};
  HasMouseWheelHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasMouseWheelHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasMouseWheelHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasMouseWheelHandlers, 'org.gwtproject.event.dom.client.HasMouseWheelHandlers');

HasMouseWheelHandlers.$markImplementor(/** @type {Function} */ (HasMouseWheelHandlers));

exports = HasMouseWheelHandlers; 
//# sourceMappingURL=HasMouseWheelHandlers.js.map