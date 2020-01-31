goog.module('org.gwtproject.view.client.HasData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCellPreviewHandlers = goog.require('org.gwtproject.view.client.HasCellPreviewHandlers$impl');
const HasRows = goog.require('org.gwtproject.view.client.HasRows$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');

/**
 * @interface
 * @template T
 * @extends {HasRows}
 * @extends {HasCellPreviewHandlers<T>}
 */
class HasData {
 /** @abstract @return {SelectionModel<?>} */
 m_getSelectionModel__() {}
 /** @abstract @return {T} */
 m_getVisibleItem__int(/** number */ indexOnPage) {}
 /** @abstract @return {number} */
 m_getVisibleItemCount__() {}
 /** @abstract @return {Iterable<T>} */
 m_getVisibleItems__() {}
 /** @abstract */
 m_setRowData__int__java_util_List(/** number */ start, /** List<?> */ values) {}
 /** @abstract */
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel(/** SelectionModel<?> */ selectionModel) {}
 /** @abstract */
 m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(/** Range */ range, /** boolean */ forceRangeChangeEvent) {}
 
 static $clinit() {
  HasData.$clinit = () =>{};
  HasData.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasRows.$markImplementor(ctor);
  HasCellPreviewHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_view_client_HasData = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasData;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasData, 'org.gwtproject.view.client.HasData');

HasData.$markImplementor(/** @type {Function} */ (HasData));

exports = HasData; 
//# sourceMappingURL=HasData.js.map