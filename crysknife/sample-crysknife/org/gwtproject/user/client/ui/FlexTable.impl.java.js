goog.module('org.gwtproject.user.client.ui.FlexTable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HTMLTable = goog.require('org.gwtproject.user.client.ui.HTMLTable$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let FlexCellFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.FlexTable.FlexCellFormatter$impl');
let ColumnFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.ColumnFormatter$impl');
let RowFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.RowFormatter$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class FlexTable extends HTMLTable {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!FlexTable}
  * @public
  */
 static $create__() {
  FlexTable.$clinit();
  let $instance = new FlexTable();
  $instance.$ctor__org_gwtproject_user_client_ui_FlexTable__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FlexTable__() {
  this.$ctor__org_gwtproject_user_client_ui_HTMLTable__();
  this.m_setCellFormatter__org_gwtproject_user_client_ui_HTMLTable_CellFormatter(FlexCellFormatter.$create__org_gwtproject_user_client_ui_FlexTable(this));
  this.m_setRowFormatter__org_gwtproject_user_client_ui_HTMLTable_RowFormatter(RowFormatter.$create__org_gwtproject_user_client_ui_HTMLTable(this));
  this.m_setColumnFormatter__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(ColumnFormatter.$create__org_gwtproject_user_client_ui_HTMLTable(this));
 }
 /**
  * @param {number} row
  * @public
  */
 m_addCell__int(row) {
  this.m_insertCell__int__int(row, this.m_getCellCount__int(row));
 }
 /**
  * @override
  * @param {number} row
  * @return {number}
  * @public
  */
 m_getCellCount__int(row) {
  this.m_checkRowBounds__int(row);
  return this.m_getDOMCellCount__org_gwtproject_dom_client_Element__int(this.m_getBodyElement__(), row);
 }
 /**
  * @return {FlexCellFormatter}
  * @public
  */
 m_getFlexCellFormatter__() {
  return /**@type {FlexCellFormatter} */ ($Casts.$to(this.m_getCellFormatter__(), FlexCellFormatter));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getRowCount__() {
  return this.m_getDOMRowCount__();
 }
 /**
  * @override
  * @param {number} beforeRow
  * @param {number} beforeColumn
  * @public
  */
 m_insertCell__int__int(beforeRow, beforeColumn) {
  super.m_insertCell__int__int(beforeRow, beforeColumn);
 }
 /**
  * @override
  * @param {number} beforeRow
  * @return {number}
  * @public
  */
 m_insertRow__int(beforeRow) {
  return super.m_insertRow__int(beforeRow);
 }
 /**
  * @public
  */
 m_removeAllRows__() {
  let numRows = this.m_getRowCount__();
  for (let i = 0; i < numRows; i++) {
   this.m_removeRow__int(0);
  }
 }
 /**
  * @override
  * @param {number} row
  * @param {number} col
  * @public
  */
 m_removeCell__int__int(row, col) {
  super.m_removeCell__int__int(row, col);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {number} num
  * @public
  */
 m_removeCells__int__int__int(row, column, num) {
  for (let i = 0; i < num; i++) {
   this.m_removeCell__int__int(row, column);
  }
 }
 /**
  * @override
  * @param {number} row
  * @public
  */
 m_removeRow__int(row) {
  super.m_removeRow__int(row);
 }
 /**
  * @override
  * @param {number} row
  * @param {number} column
  * @public
  */
 m_prepareCell__int__int(row, column) {
  this.m_prepareRow__int(row);
  if (column < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot create a column with a negative index: " + column));
  }
  let cellCount = this.m_getCellCount__int(row);
  let required = column + 1 - cellCount;
  if (required > 0) {
   this.m_addCells__org_gwtproject_dom_client_Element__int__int_$pp_org_gwtproject_user_client_ui(this.m_getBodyElement__(), row, required);
  }
 }
 /**
  * @override
  * @param {number} row
  * @public
  */
 m_prepareRow__int(row) {
  if (row < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot create a row with a negative index: " + row));
  }
  let rowCount = this.m_getRowCount__();
  for (let i = rowCount; i <= row; i++) {
   this.m_insertRow__int(i);
  }
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @public
  */
 static $clinit() {
  FlexTable.$clinit = () =>{};
  FlexTable.$loadModules();
  HTMLTable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FlexTable;
 }
 /**
  * @public
  */
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  FlexCellFormatter = goog.module.get('org.gwtproject.user.client.ui.FlexTable.FlexCellFormatter$impl');
  ColumnFormatter = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.ColumnFormatter$impl');
  RowFormatter = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.RowFormatter$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(FlexTable, 'org.gwtproject.user.client.ui.FlexTable');

exports = FlexTable; 
//# sourceMappingURL=FlexTable.js.map