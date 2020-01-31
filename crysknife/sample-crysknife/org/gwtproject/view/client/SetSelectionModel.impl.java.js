goog.module('org.gwtproject.view.client.SetSelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SelectionModel = goog.require('org.gwtproject.view.client.SelectionModel$impl');

let Set = goog.forwardDeclare('java.util.Set$impl');

/**
 * @interface
 * @template T
 * @extends {SelectionModel<T>}
 */
class SetSelectionModel {
 /** @abstract */
 m_clear__() {}
 /** @abstract @return {Set<T>} */
 m_getSelectedSet__() {}
 
 static $clinit() {
  SetSelectionModel.$clinit = () =>{};
  SetSelectionModel.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SelectionModel.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_view_client_SetSelectionModel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SetSelectionModel;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SetSelectionModel, 'org.gwtproject.view.client.SetSelectionModel');

SetSelectionModel.$markImplementor(/** @type {Function} */ (SetSelectionModel));

exports = SetSelectionModel; 
//# sourceMappingURL=SetSelectionModel.js.map