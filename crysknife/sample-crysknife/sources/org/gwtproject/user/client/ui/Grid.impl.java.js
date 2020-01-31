goog.module('org.gwtproject.user.client.ui.Grid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HTMLTable = goog.require('org.gwtproject.user.client.ui.HTMLTable$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let CellFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.CellFormatter$impl');
let ColumnFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.ColumnFormatter$impl');
let RowFormatter = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable.RowFormatter$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Grid extends HTMLTable {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_numColumns__org_gwtproject_user_client_ui_Grid = 0;
  /**@type {number}*/
  this.f_numRows__org_gwtproject_user_client_ui_Grid = 0;
 }
 
 static m_addRows__org_gwtproject_dom_client_Element__int__int(/** Object */ table, /** number */ rows, /** number */ columns) {
  let td = $Overlay.m_createTDElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, "&nbsp;");
  let row = $Overlay.m_createTRElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  for (let cellNum = 0; cellNum < columns; cellNum++) {
   let cell = td.cloneNode(true);
   row.appendChild(cell);
  }
  table.appendChild(row);
  for (let rowNum = 1; rowNum < rows; rowNum++) {
   table.appendChild(row.cloneNode(true));
  }
 }
 //Factory method corresponding to constructor 'Grid()'.
 /** @return {!Grid} */
 static $create__() {
  Grid.$clinit();
  let $instance = new Grid();
  $instance.$ctor__org_gwtproject_user_client_ui_Grid__();
  return $instance;
 }
 //Initialization from constructor 'Grid()'.
 
 $ctor__org_gwtproject_user_client_ui_Grid__() {
  this.$ctor__org_gwtproject_user_client_ui_HTMLTable__();
  this.m_setCellFormatter__org_gwtproject_user_client_ui_HTMLTable_CellFormatter(CellFormatter.$create__org_gwtproject_user_client_ui_HTMLTable(this));
  this.m_setRowFormatter__org_gwtproject_user_client_ui_HTMLTable_RowFormatter(RowFormatter.$create__org_gwtproject_user_client_ui_HTMLTable(this));
  this.m_setColumnFormatter__org_gwtproject_user_client_ui_HTMLTable_ColumnFormatter(ColumnFormatter.$create__org_gwtproject_user_client_ui_HTMLTable(this));
 }
 //Factory method corresponding to constructor 'Grid(int, int)'.
 /** @return {!Grid} */
 static $create__int__int(/** number */ rows, /** number */ columns) {
  Grid.$clinit();
  let $instance = new Grid();
  $instance.$ctor__org_gwtproject_user_client_ui_Grid__int__int(rows, columns);
  return $instance;
 }
 //Initialization from constructor 'Grid(int, int)'.
 
 $ctor__org_gwtproject_user_client_ui_Grid__int__int(/** number */ rows, /** number */ columns) {
  this.$ctor__org_gwtproject_user_client_ui_Grid__();
  this.m_resize__int__int(rows, columns);
 }
 /** @override @return {boolean} */
 m_clearCell__int__int(/** number */ row, /** number */ column) {
  let td = this.m_getCellFormatter__().m_getElement__int__int(row, column);
  let b = this.m_internalClearCell__org_gwtproject_dom_client_Element__boolean(td, false);
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, "&nbsp;");
  return b;
 }
 /** @override @return {number} */
 m_getCellCount__int(/** number */ row) {
  return this.f_numColumns__org_gwtproject_user_client_ui_Grid;
 }
 /** @return {number} */
 m_getColumnCount__() {
  return this.f_numColumns__org_gwtproject_user_client_ui_Grid;
 }
 /** @override @return {number} */
 m_getRowCount__() {
  return this.f_numRows__org_gwtproject_user_client_ui_Grid;
 }
 /** @override @return {number} */
 m_insertRow__int(/** number */ beforeRow) {
  let index = super.m_insertRow__int(beforeRow);
  this.f_numRows__org_gwtproject_user_client_ui_Grid++;
  for (let i = 0; i < this.f_numColumns__org_gwtproject_user_client_ui_Grid; i++) {
   this.m_insertCell__int__int(index, i);
  }
  return index;
 }
 /** @override */
 m_removeRow__int(/** number */ row) {
  super.m_removeRow__int(row);
  this.f_numRows__org_gwtproject_user_client_ui_Grid--;
 }
 
 m_resize__int__int(/** number */ rows, /** number */ columns) {
  this.m_resizeColumns__int(columns);
  this.m_resizeRows__int(rows);
 }
 
 m_resizeColumns__int(/** number */ columns) {
  if (this.f_numColumns__org_gwtproject_user_client_ui_Grid == columns) {
   return;
  }
  if (columns < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot set number of columns to " + columns));
  }
  if (this.f_numColumns__org_gwtproject_user_client_ui_Grid > columns) {
   for (let i = 0; i < this.f_numRows__org_gwtproject_user_client_ui_Grid; i++) {
    for (let j = this.f_numColumns__org_gwtproject_user_client_ui_Grid - 1; j >= columns; j--) {
     this.m_removeCell__int__int(i, j);
    }
   }
  } else {
   for (let i_1 = 0; i_1 < this.f_numRows__org_gwtproject_user_client_ui_Grid; i_1++) {
    for (let j_1 = this.f_numColumns__org_gwtproject_user_client_ui_Grid; j_1 < columns; j_1++) {
     this.m_insertCell__int__int(i_1, j_1);
    }
   }
  }
  this.f_numColumns__org_gwtproject_user_client_ui_Grid = columns;
  this.m_getColumnFormatter__().m_resizeColumnGroup__int__boolean_$pp_org_gwtproject_user_client_ui(columns, false);
 }
 
 m_resizeRows__int(/** number */ rows) {
  if (this.f_numRows__org_gwtproject_user_client_ui_Grid == rows) {
   return;
  }
  if (rows < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot set number of rows to " + rows));
  }
  if (this.f_numRows__org_gwtproject_user_client_ui_Grid < rows) {
   Grid.m_addRows__org_gwtproject_dom_client_Element__int__int(this.m_getBodyElement__(), rows - this.f_numRows__org_gwtproject_user_client_ui_Grid, this.f_numColumns__org_gwtproject_user_client_ui_Grid);
   this.f_numRows__org_gwtproject_user_client_ui_Grid = rows;
  } else {
   while (this.f_numRows__org_gwtproject_user_client_ui_Grid > rows) {
    this.m_removeRow__int(this.f_numRows__org_gwtproject_user_client_ui_Grid - 1);
   }
  }
 }
 /** @override @return {Object} */
 m_createCell__() {
  let td = super.m_createCell__();
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, "&nbsp;");
  return td;
 }
 /** @override */
 m_prepareCell__int__int(/** number */ row, /** number */ column) {
  this.m_prepareRow__int(row);
  if (column < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot access a column with a negative index: " + column));
  }
  if (column >= this.f_numColumns__org_gwtproject_user_client_ui_Grid) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column index: " + column + ", Column size: " + this.f_numColumns__org_gwtproject_user_client_ui_Grid));
  }
 }
 /** @override */
 m_prepareColumn__int(/** number */ column) {
  super.m_prepareColumn__int(column);
  if (column >= this.f_numColumns__org_gwtproject_user_client_ui_Grid) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column index: " + column + ", Column size: " + this.f_numColumns__org_gwtproject_user_client_ui_Grid));
  }
 }
 /** @override */
 m_prepareRow__int(/** number */ row) {
  if (row < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Cannot access a row with a negative index: " + row));
  }
  if (row >= this.f_numRows__org_gwtproject_user_client_ui_Grid) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Row index: " + row + ", Row size: " + this.f_numRows__org_gwtproject_user_client_ui_Grid));
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  Grid.$clinit = () =>{};
  Grid.$loadModules();
  HTMLTable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Grid;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  CellFormatter = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.CellFormatter$impl');
  ColumnFormatter = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.ColumnFormatter$impl');
  RowFormatter = goog.module.get('org.gwtproject.user.client.ui.HTMLTable.RowFormatter$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Grid, 'org.gwtproject.user.client.ui.Grid');

exports = Grid; 
//# sourceMappingURL=Grid.js.map