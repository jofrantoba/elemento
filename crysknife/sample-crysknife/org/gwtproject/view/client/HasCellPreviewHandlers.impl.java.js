goog.module('org.gwtproject.view.client.HasCellPreviewHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');

/**
 * @interface
 * @template T
 * @extends {HasHandlers}
 */
class HasCellPreviewHandlers {
 /**
  * @abstract
  * @param {Handler<T>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(handler) {}
 /**
  * @public
  */
 static $clinit() {
  HasCellPreviewHandlers.$clinit = () =>{};
  HasCellPreviewHandlers.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_view_client_HasCellPreviewHandlers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasCellPreviewHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCellPreviewHandlers, 'org.gwtproject.view.client.HasCellPreviewHandlers');

HasCellPreviewHandlers.$markImplementor(/** @type {Function} */ (HasCellPreviewHandlers));

exports = HasCellPreviewHandlers; 
//# sourceMappingURL=HasCellPreviewHandlers.js.map