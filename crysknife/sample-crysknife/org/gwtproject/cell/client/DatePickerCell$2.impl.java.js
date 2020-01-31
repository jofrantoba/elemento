goog.module('org.gwtproject.cell.client.DatePickerCell.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CloseHandler = goog.require('org.gwtproject.event.logical.shared.CloseHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DatePickerCell = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');

/**
 * @implements {CloseHandler<PopupPanel>}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatePickerCell}*/
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_cell_client_DatePickerCell(/** DatePickerCell */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell_2__org_gwtproject_cell_client_DatePickerCell($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_DatePickerCell_2__org_gwtproject_cell_client_DatePickerCell(/** DatePickerCell */ $outer_this) {
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(/** CloseEvent<PopupPanel> */ event) {
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastKey__org_gwtproject_cell_client_DatePickerCell_ = null;
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastValue__org_gwtproject_cell_client_DatePickerCell_ = null;
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastIndex__org_gwtproject_cell_client_DatePickerCell_ = -1;
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastColumn__org_gwtproject_cell_client_DatePickerCell_ = -1;
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastParent__org_gwtproject_cell_client_DatePickerCell_, null) && !event.m_isAutoClosed__()) {
   this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastParent__org_gwtproject_cell_client_DatePickerCell_.focus();
  }
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_2.f_lastParent__org_gwtproject_cell_client_DatePickerCell_ = null;
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.cell.client.DatePickerCell$2');

CloseHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=DatePickerCell$2.js.map