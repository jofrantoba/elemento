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
 /**
  * @abstract
  * @public
  */
 m_clear__() {}
 /**
  * @abstract
  * @return {Set<T>}
  * @public
  */
 m_getSelectedSet__() {}
 /**
  * @public
  */
 static $clinit() {
  SetSelectionModel.$clinit = () =>{};
  SetSelectionModel.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SelectionModel.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_SetSelectionModel = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_SetSelectionModel;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SetSelectionModel, 'org.gwtproject.view.client.SetSelectionModel');

SetSelectionModel.$markImplementor(/** @type {Function} */ (SetSelectionModel));

exports = SetSelectionModel; 
//# sourceMappingURL=SetSelectionModel.js.map