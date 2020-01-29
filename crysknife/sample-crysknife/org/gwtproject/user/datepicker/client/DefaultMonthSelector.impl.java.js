goog.module('org.gwtproject.user.datepicker.client.DefaultMonthSelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MonthSelector = goog.require('org.gwtproject.user.datepicker.client.MonthSelector$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FlexTable = goog.forwardDeclare('org.gwtproject.user.client.ui.FlexTable$impl');
let ListBox = goog.forwardDeclare('org.gwtproject.user.client.ui.ListBox$impl');
let PushButton = goog.forwardDeclare('org.gwtproject.user.client.ui.PushButton$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let CalendarModel = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarModel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$3$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class DefaultMonthSelector extends MonthSelector {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PushButton} */
  this.f_monthBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {PushButton} */
  this.f_monthForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {FlexTable} */
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {PushButton} */
  this.f_yearBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {PushButton} */
  this.f_yearForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {ListBox} */
  this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {ListBox} */
  this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
  /** @public {number} */
  this.f_monthColumn__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = 0;
 }
 /**
  * @return {!DefaultMonthSelector}
  * @public
  */
 static $create__() {
  DefaultMonthSelector.$clinit();
  let $instance = new DefaultMonthSelector();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DefaultMonthSelector__() {
  this.$ctor__org_gwtproject_user_datepicker_client_MonthSelector__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getBackwardButtonElement__() {
  return this.f_monthBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getElement__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getForwardButtonElement__() {
  return this.f_monthForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getElement__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getYearBackwardButtonElement__() {
  return this.f_yearBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getElement__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getYearForwardButtonElement__() {
  return this.f_yearForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getElement__();
 }
 /**
  * @return {ListBox}
  * @public
  */
 m_getMonthSelectListBox__() {
  return this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
 }
 /**
  * @return {ListBox}
  * @public
  */
 m_getYearSelectListBox__() {
  return this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_;
 }
 /**
  * @override
  * @public
  */
 m_refresh__() {
  if (this.m_isDatePickerConfigChanged___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector()) {
   this.m_setupGrid___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
  }
  this.m_setDate__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.m_getModel__().m_getCurrentMonth__());
 }
 /**
  * @override
  * @public
  */
 m_setup__() {
  this.f_monthBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_createNavigationButton__java_lang_String__int__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector("&lsaquo;", -1, this.m_css___$pp_org_gwtproject_user_datepicker_client().m_previousButton__());
  this.f_monthForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_createNavigationButton__java_lang_String__int__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector("&rsaquo;", 1, this.m_css___$pp_org_gwtproject_user_datepicker_client().m_nextButton__());
  this.f_yearBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_createNavigationButton__java_lang_String__int__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector("&laquo;", -12, this.m_css___$pp_org_gwtproject_user_datepicker_client().m_previousYearButton__());
  this.f_yearForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_createNavigationButton__java_lang_String__int__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector("&raquo;", 12, this.m_css___$pp_org_gwtproject_user_datepicker_client().m_nextYearButton__());
  this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_createMonthSelect___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
  this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_createYearSelect___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = FlexTable.$create__();
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_setStyleName__java_lang_String(this.m_css___$pp_org_gwtproject_user_datepicker_client().m_monthSelector__());
  this.m_setupGrid___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_);
 }
 /**
  * @param {?string} label
  * @param {number} noOfMonths
  * @param {?string} styleName
  * @return {PushButton}
  * @public
  */
 m_createNavigationButton__java_lang_String__int__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(label, noOfMonths, styleName) {
  let button = PushButton.$create__();
  button.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($1.$create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__int(this, noOfMonths));
  button.m_getUpFace__().m_setHTML__java_lang_String(label);
  button.m_setStyleName__java_lang_String(styleName);
  return button;
 }
 /**
  * @return {ListBox}
  * @public
  */
 m_createMonthSelect___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector() {
  let monthListBox = ListBox.$create__();
  for (let i = 0; i < CalendarModel.f_MONTHS_IN_YEAR__org_gwtproject_user_datepicker_client_CalendarModel; i++) {
   monthListBox.m_addItem__java_lang_String(this.m_getModel__().m_formatMonth__int(i));
  }
  monthListBox.m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler($2.$create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox(this, monthListBox));
  return monthListBox;
 }
 /**
  * @return {ListBox}
  * @public
  */
 m_createYearSelect___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector() {
  let yearListBox = ListBox.$create__();
  yearListBox.m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler($3.$create__org_gwtproject_user_datepicker_client_DefaultMonthSelector__org_gwtproject_user_client_ui_ListBox(this, yearListBox));
  return yearListBox;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDatePickerConfigChanged___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector() {
  let isMonthCurrentlySelectable = !$Equality.$same(this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getParent__(), null);
  let isYearNavigationCurrentlyEnabled = !$Equality.$same(this.f_yearBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getParent__(), null);
  return this.m_getDatePicker__().m_isYearAndMonthDropdownVisible__() != isMonthCurrentlySelectable || this.m_getDatePicker__().m_isYearArrowsVisible__() != isYearNavigationCurrentlyEnabled;
 }
 /**
  * @param {Date} date
  * @public
  */
 m_setDate__java_util_Date_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(date) {
  if (this.m_getDatePicker__().m_isYearAndMonthDropdownVisible__()) {
   let month = date.m_getMonth__();
   this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_setSelectedIndex__int(month);
   this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_clear__();
   let year = date.m_getYear__();
   let startYear = year - this.m_getNoOfYearsToDisplayBefore___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
   let endYear = year + this.m_getNoOfYearsToDisplayAfter___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector();
   let newDate = Date.$create__();
   for (let i = startYear; i <= endYear; i++) {
    newDate.m_setYear__int(i);
    this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_addItem__java_lang_String(this.m_getModel__().m_getYearFormatter__().m_format__java_util_Date(newDate));
   }
   this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_setSelectedIndex__int(year - startYear);
  } else {
   this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_setText__int__int__java_lang_String(0, this.f_monthColumn__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, this.m_getModel__().m_formatCurrentMonthAndYear__());
  }
 }
 /**
  * @return {number}
  * @public
  */
 m_getNoOfYearsToDisplayBefore___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector() {
  return $Primitives.$coerceDivision((this.m_getDatePicker__().m_getVisibleYearCount__() - 1) / 2);
 }
 /**
  * @return {number}
  * @public
  */
 m_getNoOfYearsToDisplayAfter___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector() {
  return $Primitives.$coerceDivision(this.m_getDatePicker__().m_getVisibleYearCount__() / 2);
 }
 /**
  * @public
  */
 m_setupGrid___$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector() {
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_removeAllRows__();
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_insertRow__int(0);
  if (this.m_getDatePicker__().m_isYearArrowsVisible__()) {
   this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_yearBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "1");
  }
  this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_monthBackwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "1");
  if (this.m_getDatePicker__().m_isYearAndMonthDropdownVisible__()) {
   if (this.m_getModel__().m_isMonthBeforeYear__()) {
    this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "50%", this.m_css___$pp_org_gwtproject_user_datepicker_client().m_month__());
    this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "50%", this.m_css___$pp_org_gwtproject_user_datepicker_client().m_year__());
   } else {
    this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_yearSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "50%", this.m_css___$pp_org_gwtproject_user_datepicker_client().m_year__());
    this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_monthSelect__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "50%", this.m_css___$pp_org_gwtproject_user_datepicker_client().m_month__());
   }
  } else {
   this.f_monthColumn__org_gwtproject_user_datepicker_client_DefaultMonthSelector_ = this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(null, "100%", this.m_css___$pp_org_gwtproject_user_datepicker_client().m_month__());
  }
  this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_monthForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "1");
  if (this.m_getDatePicker__().m_isYearArrowsVisible__()) {
   this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(this.f_yearForwards__org_gwtproject_user_datepicker_client_DefaultMonthSelector_, "1");
  }
 }
 /**
  * @param {Widget} widget
  * @param {?string} width
  * @return {number}
  * @public
  */
 m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(widget, width) {
  return this.m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(widget, width, null);
 }
 /**
  * @param {Widget} widget
  * @param {?string} width
  * @param {?string} className
  * @return {number}
  * @public
  */
 m_addCell__org_gwtproject_user_client_ui_Widget__java_lang_String__java_lang_String_$p_org_gwtproject_user_datepicker_client_DefaultMonthSelector(widget, width, className) {
  let cell = this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getCellCount__int(0);
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(0, cell, widget);
  this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getCellFormatter__().m_setWidth__int__int__java_lang_String(0, cell, width);
  if (!$Equality.$same(className, null)) {
   this.f_grid__org_gwtproject_user_datepicker_client_DefaultMonthSelector_.m_getCellFormatter__().m_setStyleName__int__int__java_lang_String(0, cell, className);
  }
  return cell;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultMonthSelector.$clinit = () =>{};
  DefaultMonthSelector.$loadModules();
  MonthSelector.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultMonthSelector;
 }
 /**
  * @public
  */
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FlexTable = goog.module.get('org.gwtproject.user.client.ui.FlexTable$impl');
  ListBox = goog.module.get('org.gwtproject.user.client.ui.ListBox$impl');
  PushButton = goog.module.get('org.gwtproject.user.client.ui.PushButton$impl');
  CalendarModel = goog.module.get('org.gwtproject.user.datepicker.client.CalendarModel$impl');
  $1 = goog.module.get('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.datepicker.client.DefaultMonthSelector.$3$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(DefaultMonthSelector, 'org.gwtproject.user.datepicker.client.DefaultMonthSelector');

exports = DefaultMonthSelector; 
//# sourceMappingURL=DefaultMonthSelector.js.map