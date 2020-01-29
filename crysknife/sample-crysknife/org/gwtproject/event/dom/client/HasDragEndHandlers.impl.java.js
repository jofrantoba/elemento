goog.module('org.gwtproject.event.dom.client.HasDragEndHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragEndHandlers {
 /**
  * @abstract
  * @param {DragEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragEndHandler__org_gwtproject_event_dom_client_DragEndHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasDragEndHandlers.$clinit = () =>{};
  HasDragEndHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasDragEndHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragEndHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragEndHandlers, 'org.gwtproject.event.dom.client.HasDragEndHandlers');

HasDragEndHandlers.$markImplementor(/** @type {Function} */ (HasDragEndHandlers));

exports = HasDragEndHandlers; 
//# sourceMappingURL=HasDragEndHandlers.js.map