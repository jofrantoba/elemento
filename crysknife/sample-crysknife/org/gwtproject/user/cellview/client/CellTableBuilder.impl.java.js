goog.module('org.gwtproject.user.cellview.client.CellTableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let HasCell = goog.forwardDeclare('org.gwtproject.cell.client.HasCell$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');

/**
 * @interface
 * @template T
 */
class CellTableBuilder {
 /**
  * @abstract
  * @param {T} rowValue
  * @param {number} absRowIndex
  * @public
  */
 m_buildRow__java_lang_Object__int(rowValue, absRowIndex) {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_finish__() {}
 /**
  * @abstract
  * @param {Context} context
  * @param {T} rowValue
  * @param {Object} elem
  * @return {HasCell<T, ?>}
  * @public
  */
 m_getColumn__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_dom_client_Element(context, rowValue, elem) {}
 /**
  * @abstract
  * @return {Collection<HasCell<T, ?>>}
  * @public
  */
 m_getColumns__() {}
 /**
  * @abstract
  * @param {Object} row
  * @return {number}
  * @public
  */
 m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(row) {}
 /**
  * @abstract
  * @param {Object} row
  * @return {number}
  * @public
  */
 m_getSubrowValueIndex__org_gwtproject_dom_client_TableRowElement(row) {}
 /**
  * @abstract
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 m_isColumn__org_gwtproject_dom_client_Element(elem) {}
 /**
  * @abstract
  * @param {boolean} isRebuildingAllRows
  * @public
  */
 m_start__boolean(isRebuildingAllRows) {}
 /**
  * @public
  */
 static $clinit() {
  CellTableBuilder.$clinit = () =>{};
  CellTableBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTableBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTableBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CellTableBuilder, 'org.gwtproject.user.cellview.client.CellTableBuilder');

CellTableBuilder.$markImplementor(/** @type {Function} */ (CellTableBuilder));

exports = CellTableBuilder; 
//# sourceMappingURL=CellTableBuilder.js.map