goog.module('org.gwtproject.user.datepicker.client.DefaultCalendarView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CalendarView = goog.require('org.gwtproject.user.datepicker.client.CalendarView$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CalendarModel = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarModel$impl');
let CalendarUtil = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
let CellGrid = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid$impl');
let DateCell = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid.DateCell$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class DefaultCalendarView extends CalendarView {
 /** @protected */
 constructor() {
  super();
  /**@type {CellGrid}*/
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_;
  /**@type {Date}*/
  this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_;
  /**@type {Date}*/
  this.f_lastDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_;
  /**@type {DateCell}*/
  this.f_ariaSelectedCell__org_gwtproject_user_datepicker_client_DefaultCalendarView_;
 }
 /** @return {!DefaultCalendarView} */
 static $create__() {
  DefaultCalendarView.$clinit();
  let $instance = new DefaultCalendarView();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultCalendarView__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_datepicker_client_DefaultCalendarView__() {
  this.$ctor__org_gwtproject_user_datepicker_client_CalendarView__();
  this.$init___$p_org_gwtproject_user_datepicker_client_DefaultCalendarView();
 }
 /** @override */
 m_addStyleToDate__java_lang_String__java_util_Date(/** ?string */ styleName, /** Date */ date) {
  $Asserts.$assertWithMessage(this.m_getDatePicker__().m_isDateVisible__java_util_Date(date), "You tried to add style " + j_l_String.m_valueOf__java_lang_Object(styleName) + " to " + j_l_String.m_valueOf__java_lang_Object(date) + ". The calendar is currently showing " + j_l_String.m_valueOf__java_lang_Object(this.m_getFirstDate__()) + " to " + j_l_String.m_valueOf__java_lang_Object(this.m_getLastDate__()));
  this.m_getCell__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView(date).m_addStyleName__java_lang_String(styleName);
 }
 /** @override @return {Date} */
 m_getFirstDate__() {
  return this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_;
 }
 /** @override @return {Date} */
 m_getLastDate__() {
  return this.f_lastDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_;
 }
 /** @override @return {boolean} */
 m_isDateEnabled__java_util_Date(/** Date */ d) {
  return this.m_getCell__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView(d).m_isEnabled__();
 }
 /** @override */
 m_refresh__() {
  this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_ = this.m_getModel__().m_getCurrentFirstDayOfFirstWeek__();
  if (this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getDate__() == 1) {
   DefaultCalendarView.m_addDays__java_util_Date__int(this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_, -7);
  }
  this.f_lastDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_setTime__long(this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getTime__());
  for (let i = 0; i < this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getNumCells__(); i++) {
   if (i != 0) {
    DefaultCalendarView.m_addDays__java_util_Date__int(this.f_lastDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_, 1);
   }
   let cell = /**@type {DateCell}*/ ($Casts.$to(this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getCell__int(i), DateCell));
   cell.m_update__java_util_Date_$pp_org_gwtproject_user_datepicker_client(this.f_lastDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_);
  }
  this.m_setAriaSelectedCell__java_util_Date(null);
 }
 
 static m_addDays__java_util_Date__int(/** Date */ date, /** number */ days) {
  CalendarUtil.m_addDaysToDate__java_util_Date__int(date, days);
  CalendarUtil.m_resetTime__java_util_Date(date);
 }
 /** @override */
 m_removeStyleFromDate__java_lang_String__java_util_Date(/** ?string */ styleName, /** Date */ date) {
  this.m_getCell__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView(date).m_removeStyleName__java_lang_String(styleName);
 }
 /** @override */
 m_setAriaSelectedCell__java_util_Date(/** Date */ date) {
  if (!$Equality.$same(this.f_ariaSelectedCell__org_gwtproject_user_datepicker_client_DefaultCalendarView_, null)) {
   this.f_ariaSelectedCell__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_setAriaSelected__boolean(false);
  }
  let newSelectedCell = !$Equality.$same(date, null) ? this.m_getCell__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView(date) : null;
  if (!$Equality.$same(newSelectedCell, null)) {
   newSelectedCell.m_setAriaSelected__boolean(true);
  }
  this.f_ariaSelectedCell__org_gwtproject_user_datepicker_client_DefaultCalendarView_ = newSelectedCell;
 }
 /** @override */
 m_setEnabledOnDate__boolean__java_util_Date(/** boolean */ enabled, /** Date */ date) {
  this.m_getCell__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView(date).m_setEnabled__boolean(enabled);
 }
 /** @override */
 m_setup__() {
  let formatter = this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getCellFormatter__();
  let weekendStartColumn = -1;
  let weekendEndColumn = -1;
  for (let i = 0; i < CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel; i++) {
   let shift = CalendarUtil.m_getStartingDayOfWeek__();
   let dayIdx = i + shift < CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel ? i + shift : i + shift - CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel;
   this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_setText__int__int__java_lang_String(0, i, this.m_getModel__().m_formatDayOfWeek__int(dayIdx));
   if (CalendarUtil.m_isWeekend__int(dayIdx)) {
    formatter.m_setStyleName__int__int__java_lang_String(0, i, this.m_css___$pp_org_gwtproject_user_datepicker_client().m_weekendLabel__());
    if (weekendStartColumn == -1) {
     weekendStartColumn = i;
    } else {
     weekendEndColumn = i;
    }
   } else {
    formatter.m_setStyleName__int__int__java_lang_String(0, i, this.m_css___$pp_org_gwtproject_user_datepicker_client().m_weekdayLabel__());
   }
  }
  for (let row = 1; row <= CalendarModel.f_WEEKS_IN_MONTH__org_gwtproject_user_datepicker_client_CalendarModel; row++) {
   for (let column = 0; column < CalendarModel.f_DAYS_IN_WEEK__org_gwtproject_user_datepicker_client_CalendarModel; column++) {
    let cell = DateCell.$create__org_gwtproject_user_datepicker_client_DefaultCalendarView_CellGrid__boolean(this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_, column == weekendStartColumn || column == weekendEndColumn);
    this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(row, column, cell);
   }
  }
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_);
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_setStyleName__java_lang_String(this.m_css___$pp_org_gwtproject_user_datepicker_client().m_days__());
 }
 /** @return {DateCell} */
 m_getCell__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultCalendarView(/** Date */ d) {
  let index = CalendarUtil.m_getDaysBetween__java_util_Date__java_util_Date(this.f_firstDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_, d);
  if (index < 0 || this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getNumCells__() <= index) {
   return null;
  }
  let cell = /**@type {DateCell}*/ ($Casts.$to(this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_.m_getCell__int(index), DateCell));
  if (/**@type {Date}*/ ($Casts.$to(cell.m_getValue__(), Date)).m_getDate__() != d.m_getDate__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(d) + " cannot be associated with cell " + j_l_String.m_valueOf__java_lang_Object(cell) + " as it has date " + j_l_String.m_valueOf__java_lang_Object(cell.m_getValue__())));
  }
  return cell;
 }
 /** @private */
 $init___$p_org_gwtproject_user_datepicker_client_DefaultCalendarView() {
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultCalendarView_ = CellGrid.$create__org_gwtproject_user_datepicker_client_DefaultCalendarView(this);
  this.f_lastDisplayed__org_gwtproject_user_datepicker_client_DefaultCalendarView_ = Date.$create__();
 }
 
 static $clinit() {
  DefaultCalendarView.$clinit = () =>{};
  DefaultCalendarView.$loadModules();
  CalendarView.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultCalendarView;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CalendarModel = goog.module.get('org.gwtproject.user.datepicker.client.CalendarModel$impl');
  CalendarUtil = goog.module.get('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
  CellGrid = goog.module.get('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid$impl');
  DateCell = goog.module.get('org.gwtproject.user.datepicker.client.DefaultCalendarView.CellGrid.DateCell$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DefaultCalendarView, 'org.gwtproject.user.datepicker.client.DefaultCalendarView');

exports = DefaultCalendarView; 
//# sourceMappingURL=DefaultCalendarView.js.map