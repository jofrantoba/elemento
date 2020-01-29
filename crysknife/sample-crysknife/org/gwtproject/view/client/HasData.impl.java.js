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
 /**
  * @abstract
  * @return {SelectionModel<?>}
  * @public
  */
 m_getSelectionModel__() {}
 /**
  * @abstract
  * @param {number} indexOnPage
  * @return {T}
  * @public
  */
 m_getVisibleItem__int(indexOnPage) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getVisibleItemCount__() {}
 /**
  * @abstract
  * @return {Iterable<T>}
  * @public
  */
 m_getVisibleItems__() {}
 /**
  * @abstract
  * @param {number} start
  * @param {List<?>} values
  * @public
  */
 m_setRowData__int__java_util_List(start, values) {}
 /**
  * @abstract
  * @param {SelectionModel<?>} selectionModel
  * @public
  */
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel(selectionModel) {}
 /**
  * @abstract
  * @param {Range} range
  * @param {boolean} forceRangeChangeEvent
  * @public
  */
 m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(range, forceRangeChangeEvent) {}
 /**
  * @public
  */
 static $clinit() {
  HasData.$clinit = () =>{};
  HasData.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasRows.$markImplementor(classConstructor);
  HasCellPreviewHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_HasData = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasData;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasData, 'org.gwtproject.view.client.HasData');

HasData.$markImplementor(/** @type {Function} */ (HasData));

exports = HasData; 
//# sourceMappingURL=HasData.js.map