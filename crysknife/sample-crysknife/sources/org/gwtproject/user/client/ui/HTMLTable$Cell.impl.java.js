goog.module('org.gwtproject.user.client.ui.HTMLTable.Cell$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let HTMLTable = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLTable$impl');

class Cell extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HTMLTable} */
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_Cell;
  /** @public {number} */
  this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = 0;
  /** @public {number} */
  this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = 0;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @param {number} rowIndex
  * @param {number} cellIndex
  * @return {!Cell}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HTMLTable__int__int($outer_this, rowIndex, cellIndex) {
  Cell.$clinit();
  let $instance = new Cell();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLTable_Cell__org_gwtproject_user_client_ui_HTMLTable__int__int($outer_this, rowIndex, cellIndex);
  return $instance;
 }
 /**
  * @param {HTMLTable} $outer_this
  * @param {number} rowIndex
  * @param {number} cellIndex
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HTMLTable_Cell__org_gwtproject_user_client_ui_HTMLTable__int__int($outer_this, rowIndex, cellIndex) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_Cell = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = cellIndex;
  this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_ = rowIndex;
 }
 /**
  * @return {number}
  * @public
  */
 m_getCellIndex__() {
  return this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getElement__() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_HTMLTable_Cell.m_getCellFormatter__().m_getElement__int__int(this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_, this.f_cellIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_);
 }
 /**
  * @return {number}
  * @public
  */
 m_getRowIndex__() {
  return this.f_rowIndex__org_gwtproject_user_client_ui_HTMLTable_Cell_;
 }
 /**
  * @public
  */
 static $clinit() {
  Cell.$clinit = () =>{};
  Cell.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Cell;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Cell, 'org.gwtproject.user.client.ui.HTMLTable$Cell');

exports = Cell; 
//# sourceMappingURL=HTMLTable$Cell.js.map