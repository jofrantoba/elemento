goog.module('org.gwtproject.view.client.SelectionChangeEvent.HasSelectionChangedHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

/**
 * @interface
 * @extends {HasHandlers}
 */
class HasSelectionChangedHandlers {
 /**
  * @abstract
  * @param {Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasSelectionChangedHandlers.$clinit = () =>{};
  HasSelectionChangedHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasSelectionChangedHandlers, 'org.gwtproject.view.client.SelectionChangeEvent$HasSelectionChangedHandlers');

HasSelectionChangedHandlers.$markImplementor(/** @type {Function} */ (HasSelectionChangedHandlers));

exports = HasSelectionChangedHandlers; 
//# sourceMappingURL=SelectionChangeEvent$HasSelectionChangedHandlers.js.map