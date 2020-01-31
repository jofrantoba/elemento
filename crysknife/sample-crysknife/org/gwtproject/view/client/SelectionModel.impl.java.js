goog.module('org.gwtproject.view.client.SelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesKey = goog.require('org.gwtproject.view.client.ProvidesKey$impl');
const HasSelectionChangedHandlers = goog.require('org.gwtproject.view.client.SelectionChangeEvent.HasSelectionChangedHandlers$impl');

let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');

/**
 * @interface
 * @template T
 * @extends {HasSelectionChangedHandlers}
 * @extends {ProvidesKey<T>}
 */
class SelectionModel {
 /** @abstract @override @return {HandlerRegistration} */
 m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(/** Handler */ handler) {}
 /** @abstract @return {boolean} */
 m_isSelected__java_lang_Object(/** T */ object) {}
 /** @abstract */
 m_setSelected__java_lang_Object__boolean(/** T */ object, /** boolean */ selected) {}
 
 static $clinit() {
  SelectionModel.$clinit = () =>{};
  SelectionModel.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasSelectionChangedHandlers.$markImplementor(ctor);
  ProvidesKey.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_view_client_SelectionModel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SelectionModel;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SelectionModel, 'org.gwtproject.view.client.SelectionModel');

SelectionModel.$markImplementor(/** @type {Function} */ (SelectionModel));

exports = SelectionModel; 
//# sourceMappingURL=SelectionModel.js.map