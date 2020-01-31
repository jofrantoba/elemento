goog.module('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid.DateCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cell = goog.require('org.gwtproject.user.datepicker.client.CellGridImpl.Cell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let SelectedValue = goog.forwardDeclare('org.gwtproject.aria.client.SelectedValue$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let CellGrid = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Cell<Date>}
  */
class DateCell extends Cell {
 /** @protected */
 constructor() {
  super();
  /**@type {CellGrid}*/
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell;
  /**@type {?string}*/
  this.f_cellStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_;
  /**@type {?string}*/
  this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_;
 }
 /** @return {!DateCell} */
 static $create__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid__boolean(/** CellGrid */ $outer_this, /** boolean */ isWeekend) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid__boolean($outer_this, isWeekend);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid__boolean(/** CellGrid */ $outer_this, /** boolean */ isWeekend) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell = $outer_this;
  this.$ctor__org_gwtproject_user_datepicker_client_CellGridImpl_Cell__org_gwtproject_user_datepicker_client_CellGridImpl__java_lang_Object($outer_this, Date.$create__());
  this.f_cellStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = $outer_this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_css___$pp_org_gwtproject_user_datepicker_client().m_day__();
  if (isWeekend) {
   this.f_cellStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = j_l_String.m_valueOf__java_lang_Object(this.f_cellStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object($outer_this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsWeekend__())));
  }
  this.m_getElement__().tabIndex = this.m_isFiller__() ? -1 : 0;
  this.m_setAriaSelected__boolean(false);
 }
 /** @override */
 m_addStyleName__java_lang_String(/** ?string */ styleName) {
  if (j_l_String.m_indexOf__java_lang_String__java_lang_String(this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_, " " + j_l_String.m_valueOf__java_lang_Object(styleName) + " ") == -1) {
   this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = j_l_String.m_valueOf__java_lang_Object(this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_) + j_l_String.m_valueOf__java_lang_Object((j_l_String.m_valueOf__java_lang_Object(styleName) + " "));
  }
  this.m_updateStyle__();
 }
 /** @return {boolean} */
 m_isFiller__() {
  return !this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_getModel__().m_isInCurrentMonth__java_util_Date(/**@type {Date}*/ ($Casts.$to(this.m_getValue__(), Date)));
 }
 /** @override */
 m_onHighlighted__boolean(/** boolean */ highlighted) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_setHighlightedDate__java_util_Date(/**@type {Date}*/ ($Casts.$to(this.m_getValue__(), Date)));
  this.m_updateStyle__();
 }
 /** @override */
 m_onSelected__boolean(/** boolean */ selected) {
  if (selected) {
   this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_getDatePicker__().m_setValue__java_util_Date__boolean(/**@type {Date}*/ ($Casts.$to(this.m_getValue__(), Date)), true);
   if (this.m_isFiller__()) {
    this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_getDatePicker__().m_setCurrentMonth__java_util_Date(/**@type {Date}*/ ($Casts.$to(this.m_getValue__(), Date)));
   }
  }
  this.m_updateStyle__();
 }
 /** @override */
 m_removeStyleName__java_lang_String(/** ?string */ styleName) {
  this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_, " " + j_l_String.m_valueOf__java_lang_Object(styleName) + " ", " ");
  this.m_updateStyle__();
 }
 
 m_setAriaSelected__boolean(/** boolean */ value) {
  Roles.m_getGridcellRole__().m_setAriaSelectedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_SelectedValue(this.m_getElement__(), SelectedValue.m_of__boolean(value));
 }
 /** @override */
 m_updateStyle__() {
  let accum = this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_;
  if (this.m_isHighlighted__()) {
   accum = j_l_String.m_valueOf__java_lang_Object(accum) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsHighlighted__())));
   if (this.m_isHighlighted__() && this.m_isSelected__()) {
    accum = j_l_String.m_valueOf__java_lang_Object(accum) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsValueAndHighlighted__())));
   }
  }
  if (!this.m_isEnabled__()) {
   accum = j_l_String.m_valueOf__java_lang_Object(accum) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsDisabled__())));
  }
  this.m_setStyleName__java_lang_String(accum);
 }
 
 m_update__java_util_Date_$pp_org_gwtproject_user_datepicker_client(/** Date */ current) {
  this.m_setEnabled__boolean(true);
  /**@type {Date}*/ ($Casts.$to(this.m_getValue__(), Date)).m_setTime__long(current.m_getTime__());
  let value = this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_getModel__().m_formatDayOfMonth__java_util_Date(/**@type {Date}*/ ($Casts.$to(this.m_getValue__(), Date)));
  this.m_setText__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell(value);
  this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = this.f_cellStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_;
  if (this.m_isFiller__()) {
   this.m_getElement__().tabIndex = -1;
   this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = j_l_String.m_valueOf__java_lang_Object(this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsFiller__())));
  } else {
   this.m_getElement__().tabIndex = 0;
   let extraStyle = this.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell.f_$outer_this__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid.m_getDatePicker__().m_getStyleOfDate__java_util_Date(current);
   if (!$Equality.$same(extraStyle, null)) {
    this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = j_l_String.m_valueOf__java_lang_Object(this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object(extraStyle)));
   }
  }
  this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_ = j_l_String.m_valueOf__java_lang_Object(this.f_dateStyle__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell_) + " ";
  this.m_updateStyle__();
 }
 
 m_setText__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid_DateCell(/** ?string */ value) {
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), value);
 }
 
 static $clinit() {
  DateCell.$clinit = () =>{};
  DateCell.$loadModules();
  Cell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  SelectedValue = goog.module.get('org.gwtproject.aria.client.SelectedValue$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateCell, 'org.gwtproject.user.datepicker.client.DefaultCalendarView$CellGrid$DateCell');

exports = DateCell; 
//# sourceMappingURL=DefaultCalendarView$CellGrid$DateCell.js.map