goog.module('org.gwtproject.cell.client.DatePickerCell.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const PositionCallback = goog.require('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');

let DatePickerCell = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @implements {PositionCallback}
  */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatePickerCell}*/
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4;
 }
 /** @return {!$4} */
 static $create__org_gwtproject_cell_client_DatePickerCell(/** DatePickerCell */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell_4__org_gwtproject_cell_client_DatePickerCell($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_DatePickerCell_4__org_gwtproject_cell_client_DatePickerCell(/** DatePickerCell */ $outer_this) {
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_setPosition__int__int(/** number */ offsetWidth, /** number */ offsetHeight) {
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4.f_panel__org_gwtproject_cell_client_DatePickerCell_.m_setPopupPosition__int__int($Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4.f_lastParent__org_gwtproject_cell_client_DatePickerCell_) + this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4.f_offsetX__org_gwtproject_cell_client_DatePickerCell_, $Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4.f_lastParent__org_gwtproject_cell_client_DatePickerCell_) + this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_4.f_offsetY__org_gwtproject_cell_client_DatePickerCell_);
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.cell.client.DatePickerCell$4');

PositionCallback.$markImplementor($4);

exports = $4; 
//# sourceMappingURL=DatePickerCell$4.js.map