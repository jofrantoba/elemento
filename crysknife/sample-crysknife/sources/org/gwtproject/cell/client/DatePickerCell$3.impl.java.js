goog.module('org.gwtproject.cell.client.DatePickerCell.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueChangeHandler = goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let DatePickerCell = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ValueChangeHandler<Date>}
  */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatePickerCell}*/
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3;
 }
 /** @return {!$3} */
 static $create__org_gwtproject_cell_client_DatePickerCell(/** DatePickerCell */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell_3__org_gwtproject_cell_client_DatePickerCell($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_DatePickerCell_3__org_gwtproject_cell_client_DatePickerCell(/** DatePickerCell */ $outer_this) {
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(/** ValueChangeEvent<Date> */ event) {
  let cellParent = this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_lastParent__org_gwtproject_cell_client_DatePickerCell_;
  let oldValue = this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_lastValue__org_gwtproject_cell_client_DatePickerCell_;
  let key = this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_lastKey__org_gwtproject_cell_client_DatePickerCell_;
  let index = this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_lastIndex__org_gwtproject_cell_client_DatePickerCell_;
  let column = this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_lastColumn__org_gwtproject_cell_client_DatePickerCell_;
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_panel__org_gwtproject_cell_client_DatePickerCell_.m_hide__();
  let date = /**@type {Date}*/ ($Casts.$to(event.m_getValue__(), Date));
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.m_setViewData__java_lang_Object__java_lang_Object(key, date);
  this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(Context.$create__int__int__java_lang_Object(index, column, key), cellParent, oldValue);
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_valueUpdater__org_gwtproject_cell_client_DatePickerCell_, null)) {
   this.f_$outer_this__org_gwtproject_cell_client_DatePickerCell_3.f_valueUpdater__org_gwtproject_cell_client_DatePickerCell_.m_update__java_lang_Object(date);
  }
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.cell.client.DatePickerCell$3');

ValueChangeHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=DatePickerCell$3.js.map