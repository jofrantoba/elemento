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
 /** @abstract @return {HandlerRegistration} */
 m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/** Handler<T> */ handler) {}
 
 static $clinit() {
  HasCellPreviewHandlers.$clinit = () =>{};
  HasCellPreviewHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_view_client_HasCellPreviewHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasCellPreviewHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCellPreviewHandlers, 'org.gwtproject.view.client.HasCellPreviewHandlers');

HasCellPreviewHandlers.$markImplementor(/** @type {Function} */ (HasCellPreviewHandlers));

exports = HasCellPreviewHandlers; 
//# sourceMappingURL=HasCellPreviewHandlers.js.map