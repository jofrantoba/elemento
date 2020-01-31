goog.module('org.gwtproject.user.client.ui.FlexTable.FlexCellFormatter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellFormatter = goog.require('org.gwtproject.user.client.ui.HTMLTable.CellFormatter$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FlexTable = goog.forwardDeclare('org.gwtproject.user.client.ui.FlexTable$impl');

class FlexCellFormatter extends CellFormatter {
 /** @protected */
 constructor() {
  super();
  /**@type {FlexTable}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter;
 }
 /** @return {!FlexCellFormatter} */
 static $create__org_gwtproject_user_client_ui_FlexTable(/** FlexTable */ $outer_this) {
  FlexCellFormatter.$clinit();
  let $instance = new FlexCellFormatter();
  $instance.$ctor__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter__org_gwtproject_user_client_ui_FlexTable($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter__org_gwtproject_user_client_ui_FlexTable(/** FlexTable */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_FlexTable_FlexCellFormatter = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_HTMLTable_CellFormatter__org_gwtproject_user_client_ui_HTMLTable($outer_this);
 }
 /** @return {number} */
 m_getColSpan__int__int(/** number */ row, /** number */ column) {
  return $Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__int__int(row, column), "colSpan");
 }
 /** @return {number} */
 m_getRowSpan__int__int(/** number */ row, /** number */ column) {
  return $Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__int__int(row, column), "rowSpan");
 }
 
 m_setColSpan__int__int__int(/** number */ row, /** number */ column, /** number */ colSpan) {
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.m_ensureElement__int__int(row, column), "colSpan", colSpan);
 }
 
 m_setRowSpan__int__int__int(/** number */ row, /** number */ column, /** number */ rowSpan) {
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.m_ensureElement__int__int(row, column), "rowSpan", rowSpan);
 }
 
 static $clinit() {
  FlexCellFormatter.$clinit = () =>{};
  FlexCellFormatter.$loadModules();
  CellFormatter.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlexCellFormatter;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(FlexCellFormatter, 'org.gwtproject.user.client.ui.FlexTable$FlexCellFormatter');

exports = FlexCellFormatter; 
//# sourceMappingURL=FlexTable$FlexCellFormatter.js.map