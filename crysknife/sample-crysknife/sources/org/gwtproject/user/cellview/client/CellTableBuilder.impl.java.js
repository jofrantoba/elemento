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
 /** @abstract */
 m_buildRow__java_lang_Object__int(/** T */ rowValue, /** number */ absRowIndex) {}
 /** @abstract @return {TableSectionBuilder} */
 m_finish__() {}
 /** @abstract @return {HasCell<T, ?>} */
 m_getColumn__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_dom_client_Element(/** Context */ context, /** T */ rowValue, /** Object */ elem) {}
 /** @abstract @return {Collection<HasCell<T, ?>>} */
 m_getColumns__() {}
 /** @abstract @return {number} */
 m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(/** Object */ row) {}
 /** @abstract @return {number} */
 m_getSubrowValueIndex__org_gwtproject_dom_client_TableRowElement(/** Object */ row) {}
 /** @abstract @return {boolean} */
 m_isColumn__org_gwtproject_dom_client_Element(/** Object */ elem) {}
 /** @abstract */
 m_start__boolean(/** boolean */ isRebuildingAllRows) {}
 
 static $clinit() {
  CellTableBuilder.$clinit = () =>{};
  CellTableBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTableBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTableBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CellTableBuilder, 'org.gwtproject.user.cellview.client.CellTableBuilder');

CellTableBuilder.$markImplementor(/** @type {Function} */ (CellTableBuilder));

exports = CellTableBuilder; 
//# sourceMappingURL=CellTableBuilder.js.map