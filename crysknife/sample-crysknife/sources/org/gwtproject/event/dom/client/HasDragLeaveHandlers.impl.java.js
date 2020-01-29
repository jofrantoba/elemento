goog.module('org.gwtproject.event.dom.client.HasDragLeaveHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragLeaveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragLeaveHandlers {
 /**
  * @abstract
  * @param {DragLeaveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragLeaveHandler__org_gwtproject_event_dom_client_DragLeaveHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasDragLeaveHandlers.$clinit = () =>{};
  HasDragLeaveHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasDragLeaveHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragLeaveHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragLeaveHandlers, 'org.gwtproject.event.dom.client.HasDragLeaveHandlers');

HasDragLeaveHandlers.$markImplementor(/** @type {Function} */ (HasDragLeaveHandlers));

exports = HasDragLeaveHandlers; 
//# sourceMappingURL=HasDragLeaveHandlers.js.map