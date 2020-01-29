goog.module('org.gwtproject.event.dom.client.HasDragHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let DragHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasDragHandlers {
 /**
  * @abstract
  * @param {DragHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragHandler__org_gwtproject_event_dom_client_DragHandler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasDragHandlers.$clinit = () =>{};
  HasDragHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_event_dom_client_HasDragHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasDragHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDragHandlers, 'org.gwtproject.event.dom.client.HasDragHandlers');

HasDragHandlers.$markImplementor(/** @type {Function} */ (HasDragHandlers));

exports = HasDragHandlers; 
//# sourceMappingURL=HasDragHandlers.js.map