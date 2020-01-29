goog.module('org.gwtproject.event.dom.client.HasTouchMoveHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let TouchMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasTouchMoveHandlers {
 /**
  * @abstract
  * @param {TouchMoveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchMoveHandler__org_gwtproject_event_dom_client_TouchMoveHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasTouchMoveHandlers.$clinit = () =>{};
  HasTouchMoveHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasTouchMoveHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasTouchMoveHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasTouchMoveHandlers, 'org.gwtproject.event.dom.client.HasTouchMoveHandlers');

HasTouchMoveHandlers.$markImplementor(/** @type {Function} */ (HasTouchMoveHandlers));

exports = HasTouchMoveHandlers; 
//# sourceMappingURL=HasTouchMoveHandlers.js.map