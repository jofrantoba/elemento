goog.module('org.gwtproject.user.client.ui.HTMLTable.Cell$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let HTMLTable = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable$impl');

class Cell extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTable}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_Cell;
  /**@type {number}*/
  this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = 0;
  /**@type {number}*/
  this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = 0;
 }
 /** @return {!Cell} */
 static $create__org_gwtproject_user_client_ui_HTMLTable__int__int(/** HTMLTable */ $outer_this, /** number */ rowIndex, /** number */ cellIndex) {
  Cell.$clinit();
  let $instance = new Cell();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_Cell__org_gwtproject_user_client_ui_HTMLTable__int__int($outer_this, rowIndex, cellIndex);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HTMLTable_Cell__org_gwtproject_user_client_ui_HTMLTable__int__int(/** HTMLTable */ $outer_this, /** number */ rowIndex, /** number */ cellIndex) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_Cell = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = cellIndex;
  this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = rowIndex;
 }
 /** @return {number} */
 m_getCellIndex__() {
  return this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_;
 }
 /** @return {Object} */
 m_getElement__() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_Cell.m_getCellFormatter__().m_getElement__int__int(this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_, this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_);
 }
 /** @return {number} */
 m_getRowIndex__() {
  return this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_;
 }
 
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Cell;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Cell, 'org.gwtproject.user.client.ui.HTMLTable$Cell');

exports = Cell; 
//# sourceMappingURL=HTMLTable$Cell.js.map