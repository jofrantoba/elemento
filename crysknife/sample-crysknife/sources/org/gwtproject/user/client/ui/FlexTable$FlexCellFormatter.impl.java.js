goog.module('org.gwtproject.user.client.ui.FlexTable.FlexCellFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellFormatter = goog.require('org.gwtproject.user.client.ui.HTMLTable.CellFormatter$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FlexTable = goog.forwardDeclare('org.gwtproject.user.client.ui.FlexTable$impl');

class FlexCellFormatter extends CellFormatter {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {FlexTable} */
  this.f_$outer_this__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter;
 }
 /**
  * @param {FlexTable} $outer_this
  * @return {!FlexCellFormatter}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_FlexTable($outer_this) {
  FlexCellFormatter.$clinit();
  let $instance = new FlexCellFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter__org_gwtproject_user_client_ui_FlexTable($outer_this);
  return $instance;
 }
 /**
  * @param {FlexTable} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter__org_gwtproject_user_client_ui_FlexTable($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_HTMLTable_CellFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {number}
  * @public
  */
 m_getColSpan__int__int(row, column) {
  return $Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__int__int(row, column), "colSpan");
 }
 /**
  * @param {number} row
  * @param {number} column
  * @return {number}
  * @public
  */
 m_getRowSpan__int__int(row, column) {
  return $Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__int__int(row, column), "rowSpan");
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {number} colSpan
  * @public
  */
 m_setColSpan__int__int__int(row, column, colSpan) {
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.m_ensureElement__int__int(row, column), "colSpan", colSpan);
 }
 /**
  * @param {number} row
  * @param {number} column
  * @param {number} rowSpan
  * @public
  */
 m_setRowSpan__int__int__int(row, column, rowSpan) {
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.m_ensureElement__int__int(row, column), "rowSpan", rowSpan);
 }
 /**
  * @public
  */
 static $clinit() {
  FlexCellFormatter.$clinit = () =>{};
  FlexCellFormatter.$loadModules();
  CellFormatter.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FlexCellFormatter;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(FlexCellFormatter, 'org.gwtproject.user.client.ui.FlexTable$FlexCellFormatter');

exports = FlexCellFormatter; 
//# sourceMappingURL=FlexTable$FlexCellFormatter.js.map