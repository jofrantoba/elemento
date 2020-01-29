goog.module('org.gwtproject.user.datepicker.client.DatePicker$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const HasHighlightHandlers = goog.require('org.gwtproject.event.logical.shared.HasHighlightHandlers$impl');
const HasShowRangeHandlers = goog.require('org.gwtproject.event.logical.shared.HasShowRangeHandlers$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let HighlightEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightEvent$impl');
let HighlightHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightHandler$impl');
let ShowRangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');
let ShowRangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let VerticalPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.VerticalPanel$impl');
let CalendarModel = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarModel$impl');
let CalendarUtil = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
let CalendarView = goog.forwardDeclare('org.gwtproject.user.datepicker.client.CalendarView$impl');
let DateChangeEvent = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateChangeEvent$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker.$1$impl');
let DateHighlightEvent = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker.DateHighlightEvent$impl');
let DateStyler = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker.DateStyler$impl');
let StandardCss = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker.StandardCss$impl');
let DefaultCalendarView = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultCalendarView$impl');
let DefaultMonthSelector = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DefaultMonthSelector$impl');
let MonthSelector = goog.forwardDeclare('org.gwtproject.user.datepicker.client.MonthSelector$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasHighlightHandlers<Date>}
 * @implements {HasShowRangeHandlers<Date>}
 * @implements {HasValue<Date>}
 * @implements {IsEditor<LeafValueEditor<Date>>}
  */
class DatePicker extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateStyler} */
  this.f_styler__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {MonthSelector} */
  this.f_monthAndYearSelector__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {CalendarView} */
  this.f_view__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {CalendarModel} */
  this.f_model__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {Date} */
  this.f_value__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {Date} */
  this.f_highlighted__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {StandardCss} */
  this.f_css__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {LeafValueEditor<Date>} */
  this.f_editor__org_gwtproject_user_datepicker_client_DatePicker_;
  /** @public {number} */
  this.f_visibleYearCount__org_gwtproject_user_datepicker_client_DatePicker_ = 0;
  /** @public {boolean} */
  this.f_yearArrowsVisible__org_gwtproject_user_datepicker_client_DatePicker_ = false;
  /** @public {boolean} */
  this.f_yearAndMonthDropdownVisible__org_gwtproject_user_datepicker_client_DatePicker_ = false;
 }
 /**
  * Factory method corresponding to constructor 'DatePicker()'.
  * @return {!DatePicker}
  * @public
  */
 static $create__() {
  DatePicker.$clinit();
  let $instance = new DatePicker();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DatePicker__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DatePicker()'.
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DatePicker__() {
  this.$ctor__org_gwtproject_user_datepicker_client_DatePicker__org_gwtproject_user_datepicker_client_MonthSelector__org_gwtproject_user_datepicker_client_CalendarView__org_gwtproject_user_datepicker_client_CalendarModel(DefaultMonthSelector.$create__(), DefaultCalendarView.$create__(), CalendarModel.$create__());
 }
 /**
  * Factory method corresponding to constructor 'DatePicker(MonthSelector, CalendarView, CalendarModel)'.
  * @param {MonthSelector} monthAndYearSelector
  * @param {CalendarView} view
  * @param {CalendarModel} model
  * @return {!DatePicker}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_MonthSelector__org_gwtproject_user_datepicker_client_CalendarView__org_gwtproject_user_datepicker_client_CalendarModel(monthAndYearSelector, view, model) {
  DatePicker.$clinit();
  let $instance = new DatePicker();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DatePicker__org_gwtproject_user_datepicker_client_MonthSelector__org_gwtproject_user_datepicker_client_CalendarView__org_gwtproject_user_datepicker_client_CalendarModel(monthAndYearSelector, view, model);
  return $instance;
 }
 /**
  * Initialization from constructor 'DatePicker(MonthSelector, CalendarView, CalendarModel)'.
  * @param {MonthSelector} monthAndYearSelector
  * @param {CalendarView} view
  * @param {CalendarModel} model
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DatePicker__org_gwtproject_user_datepicker_client_MonthSelector__org_gwtproject_user_datepicker_client_CalendarView__org_gwtproject_user_datepicker_client_CalendarModel(monthAndYearSelector, view, model) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_datepicker_client_DatePicker();
  this.f_model__org_gwtproject_user_datepicker_client_DatePicker_ = model;
  this.f_monthAndYearSelector__org_gwtproject_user_datepicker_client_DatePicker_ = monthAndYearSelector;
  monthAndYearSelector.m_setDatePicker__org_gwtproject_user_datepicker_client_DatePicker_$pp_org_gwtproject_user_datepicker_client(this);
  this.f_view__org_gwtproject_user_datepicker_client_DatePicker_ = view;
  view.m_setDatePicker__org_gwtproject_user_datepicker_client_DatePicker_$pp_org_gwtproject_user_datepicker_client(this);
  view.m_setup__();
  monthAndYearSelector.m_setup__();
  this.m_setup__();
  this.m_setCurrentMonth__java_util_Date(Date.$create__());
  this.m_addStyleToDates__java_lang_String__java_util_Date(this.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsToday__(), Date.$create__());
 }
 /**
  * @override
  * @param {HighlightHandler<Date>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHighlightHandler__org_gwtproject_event_logical_shared_HighlightHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, HighlightEvent.m_getType__());
 }
 /**
  * @override
  * @param {ShowRangeHandler<Date>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addShowRangeHandler__org_gwtproject_event_logical_shared_ShowRangeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ShowRangeEvent.m_getType__());
 }
 /**
  * @param {ShowRangeHandler<Date>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addShowRangeHandlerAndFire__org_gwtproject_event_logical_shared_ShowRangeHandler(handler) {
  let event = $1.$create__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__java_util_Date(this, this.m_getView__().m_getFirstDate__(), this.m_getView__().m_getLastDate__());
  handler.m_onShowRange__org_gwtproject_event_logical_shared_ShowRangeEvent(event);
  return this.m_addShowRangeHandler__org_gwtproject_event_logical_shared_ShowRangeHandler(handler);
 }
 /**
  * @param {?string} styleName
  * @param {Date} date
  * @public
  */
 m_addStyleToDates__java_lang_String__java_util_Date(styleName, date) {
  this.f_styler__org_gwtproject_user_datepicker_client_DatePicker_.m_setStyleName__java_util_Date__java_lang_String__boolean(date, styleName, true);
  if (this.m_isDateVisible__java_util_Date(date)) {
   this.m_getView__().m_addStyleToDate__java_lang_String__java_util_Date(styleName, date);
  }
 }
 /**
  * @param {?string} styleName
  * @param {Date} date
  * @param {Array<Date>} moreDates
  * @public
  */
 m_addStyleToDates__java_lang_String__java_util_Date__arrayOf_java_util_Date(styleName, date, moreDates) {
  this.m_addStyleToDates__java_lang_String__java_util_Date(styleName, date);
  for (let $array = moreDates, $index = 0; $index < $array.length; $index++) {
   let d = $array[$index];
   this.m_addStyleToDates__java_lang_String__java_util_Date(styleName, d);
  }
 }
 /**
  * @param {?string} styleName
  * @param {Iterable<Date>} dates
  * @public
  */
 m_addStyleToDates__java_lang_String__java_lang_Iterable(styleName, dates) {
  for (let $iterator = dates.m_iterator__(); $iterator.m_hasNext__(); ) {
   let d = /**@type {Date} */ ($Casts.$to($iterator.m_next__(), Date));
   this.m_addStyleToDates__java_lang_String__java_util_Date(styleName, d);
  }
 }
 /**
  * @param {?string} styleName
  * @param {Date} date
  * @public
  */
 m_addTransientStyleToDates__java_lang_String__java_util_Date(styleName, date) {
  $Asserts.$assertWithMessage(this.m_isDateVisible__java_util_Date(date), j_l_String.m_valueOf__java_lang_Object(date) + " must be visible");
  this.m_getView__().m_addStyleToDate__java_lang_String__java_util_Date(styleName, date);
 }
 /**
  * @param {?string} styleName
  * @param {Date} date
  * @param {Array<Date>} moreDates
  * @public
  */
 m_addTransientStyleToDates__java_lang_String__java_util_Date__arrayOf_java_util_Date(styleName, date, moreDates) {
  this.m_addTransientStyleToDates__java_lang_String__java_util_Date(styleName, date);
  for (let $array = moreDates, $index = 0; $index < $array.length; $index++) {
   let d = $array[$index];
   this.m_addTransientStyleToDates__java_lang_String__java_util_Date(styleName, d);
  }
 }
 /**
  * @param {?string} styleName
  * @param {Iterable<Date>} dates
  * @public
  */
 m_addTransientStyleToDates__java_lang_String__java_lang_Iterable(styleName, dates) {
  for (let $iterator = dates.m_iterator__(); $iterator.m_hasNext__(); ) {
   let d = /**@type {Date} */ ($Casts.$to($iterator.m_next__(), Date));
   this.m_addTransientStyleToDates__java_lang_String__java_util_Date(styleName, d);
  }
 }
 /**
  * @override
  * @param {ValueChangeHandler<Date>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /**
  * @override
  * @return {LeafValueEditor<Date>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_datepicker_client_DatePicker_, null)) {
   this.f_editor__org_gwtproject_user_datepicker_client_DatePicker_ = /**@type {TakesValueEditor<Date>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @return {Date}
  * @public
  */
 m_getCurrentMonth__() {
  return this.m_getModel__().m_getCurrentMonth__();
 }
 /**
  * @return {Date}
  * @public
  */
 m_getFirstDate__() {
  return this.f_view__org_gwtproject_user_datepicker_client_DatePicker_.m_getFirstDate__();
 }
 /**
  * @return {Date}
  * @public
  */
 m_getHighlightedDate__() {
  return CalendarUtil.m_copyDate__java_util_Date(this.f_highlighted__org_gwtproject_user_datepicker_client_DatePicker_);
 }
 /**
  * @return {Date}
  * @public
  */
 m_getLastDate__() {
  return this.f_view__org_gwtproject_user_datepicker_client_DatePicker_.m_getLastDate__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getVisibleYearCount__() {
  return this.f_visibleYearCount__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_getStyleOfDate__java_util_Date(date) {
  return this.f_styler__org_gwtproject_user_datepicker_client_DatePicker_.m_getStyleName__java_util_Date(date);
 }
 /**
  * @override
  * @return {Date}
  * @public
  */
 m_getValue__() {
  return CalendarUtil.m_copyDate__java_util_Date(this.f_value__org_gwtproject_user_datepicker_client_DatePicker_);
 }
 /**
  * @param {Date} date
  * @return {boolean}
  * @public
  */
 m_isDateEnabled__java_util_Date(date) {
  $Asserts.$assertWithMessage(this.m_isDateVisible__java_util_Date(date), j_l_String.m_valueOf__java_lang_Object(date) + " is not visible");
  return this.m_getView__().m_isDateEnabled__java_util_Date(date);
 }
 /**
  * @param {Date} date
  * @return {boolean}
  * @public
  */
 m_isDateVisible__java_util_Date(date) {
  let r = this.m_getView__();
  let first = r.m_getFirstDate__();
  let last = r.m_getLastDate__();
  return (!$Equality.$same(date, null) && (CalendarUtil.m_isSameDate__java_util_Date__java_util_Date(first, date) || CalendarUtil.m_isSameDate__java_util_Date__java_util_Date(last, date) || (first.m_before__java_util_Date(date) && last.m_after__java_util_Date(date))));
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isYearArrowsVisible__() {
  return this.f_yearArrowsVisible__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isYearAndMonthDropdownVisible__() {
  return this.f_yearAndMonthDropdownVisible__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @override
  * @public
  */
 m_onLoad__() {
  ShowRangeEvent.m_fire__org_gwtproject_event_logical_shared_HasShowRangeHandlers__java_lang_Object__java_lang_Object(this, this.m_getFirstDate__(), this.m_getLastDate__());
 }
 /**
  * @param {?string} styleName
  * @param {Date} date
  * @public
  */
 m_removeStyleFromDates__java_lang_String__java_util_Date(styleName, date) {
  this.f_styler__org_gwtproject_user_datepicker_client_DatePicker_.m_setStyleName__java_util_Date__java_lang_String__boolean(date, styleName, false);
  if (this.m_isDateVisible__java_util_Date(date)) {
   this.m_getView__().m_removeStyleFromDate__java_lang_String__java_util_Date(styleName, date);
  }
 }
 /**
  * @param {?string} styleName
  * @param {Date} date
  * @param {Array<Date>} moreDates
  * @public
  */
 m_removeStyleFromDates__java_lang_String__java_util_Date__arrayOf_java_util_Date(styleName, date, moreDates) {
  this.m_removeStyleFromDates__java_lang_String__java_util_Date(styleName, date);
  for (let $array = moreDates, $index = 0; $index < $array.length; $index++) {
   let d = $array[$index];
   this.m_removeStyleFromDates__java_lang_String__java_util_Date(styleName, d);
  }
 }
 /**
  * @param {?string} styleName
  * @param {Iterable<Date>} dates
  * @public
  */
 m_removeStyleFromDates__java_lang_String__java_lang_Iterable(styleName, dates) {
  for (let $iterator = dates.m_iterator__(); $iterator.m_hasNext__(); ) {
   let d = /**@type {Date} */ ($Casts.$to($iterator.m_next__(), Date));
   this.m_removeStyleFromDates__java_lang_String__java_util_Date(styleName, d);
  }
 }
 /**
  * @param {Date} month
  * @public
  */
 m_setCurrentMonth__java_util_Date(month) {
  this.m_getModel__().m_setCurrentMonth__java_util_Date(month);
  this.m_refreshAll__();
 }
 /**
  * @param {number} numberOfYears
  * @public
  */
 m_setVisibleYearCount__int(numberOfYears) {
  if (numberOfYears <= 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("The number of years to display must be positive"));
  }
  this.f_visibleYearCount__org_gwtproject_user_datepicker_client_DatePicker_ = numberOfYears;
  this.m_getMonthSelector__().m_refresh__();
 }
 /**
  * @param {boolean} yearArrowsVisible
  * @public
  */
 m_setYearArrowsVisible__boolean(yearArrowsVisible) {
  this.f_yearArrowsVisible__org_gwtproject_user_datepicker_client_DatePicker_ = yearArrowsVisible;
  this.m_getMonthSelector__().m_refresh__();
 }
 /**
  * @param {boolean} dropdownVisible
  * @public
  */
 m_setYearAndMonthDropdownVisible__boolean(dropdownVisible) {
  this.f_yearAndMonthDropdownVisible__org_gwtproject_user_datepicker_client_DatePicker_ = dropdownVisible;
  this.m_getMonthSelector__().m_refresh__();
 }
 /**
  * @override
  * @param {?string} styleName
  * @public
  */
 m_setStyleName__java_lang_String(styleName) {
  this.f_css__org_gwtproject_user_datepicker_client_DatePicker_ = StandardCss.$create__java_lang_String__java_lang_String(styleName, "datePicker");
  super.m_setStyleName__java_lang_String(styleName);
 }
 /**
  * @param {boolean} enabled
  * @param {Date} date
  * @public
  */
 m_setTransientEnabledOnDates__boolean__java_util_Date(enabled, date) {
  $Asserts.$assertWithMessage(this.m_isDateVisible__java_util_Date(date), j_l_String.m_valueOf__java_lang_Object(date) + " must be visible");
  this.m_getView__().m_setEnabledOnDate__boolean__java_util_Date(enabled, date);
 }
 /**
  * @param {boolean} enabled
  * @param {Date} date
  * @param {Array<Date>} moreDates
  * @public
  */
 m_setTransientEnabledOnDates__boolean__java_util_Date__arrayOf_java_util_Date(enabled, date, moreDates) {
  this.m_setTransientEnabledOnDates__boolean__java_util_Date(enabled, date);
  for (let $array = moreDates, $index = 0; $index < $array.length; $index++) {
   let d = $array[$index];
   this.m_setTransientEnabledOnDates__boolean__java_util_Date(enabled, d);
  }
 }
 /**
  * @param {boolean} enabled
  * @param {Iterable<Date>} dates
  * @public
  */
 m_setTransientEnabledOnDates__boolean__java_lang_Iterable(enabled, dates) {
  for (let $iterator = dates.m_iterator__(); $iterator.m_hasNext__(); ) {
   let d = /**@type {Date} */ ($Casts.$to($iterator.m_next__(), Date));
   this.m_setTransientEnabledOnDates__boolean__java_util_Date(enabled, d);
  }
 }
 /**
  * @param {Date} newValue
  * @public
  */
 m_setValue__java_util_Date(newValue) {
  this.m_setValue__java_util_Date__boolean(newValue, false);
 }
 /**
  * @param {Date} newValue
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_util_Date__boolean(newValue, fireEvents) {
  let oldValue = this.f_value__org_gwtproject_user_datepicker_client_DatePicker_;
  if (!$Equality.$same(oldValue, null)) {
   this.m_removeStyleFromDates__java_lang_String__java_util_Date(this.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsValue__(), oldValue);
  }
  this.f_value__org_gwtproject_user_datepicker_client_DatePicker_ = CalendarUtil.m_copyDate__java_util_Date(newValue);
  if (!$Equality.$same(this.f_value__org_gwtproject_user_datepicker_client_DatePicker_, null)) {
   this.m_addStyleToDates__java_lang_String__java_util_Date(this.m_css___$pp_org_gwtproject_user_datepicker_client().m_dayIsValue__(), this.f_value__org_gwtproject_user_datepicker_client_DatePicker_);
  }
  this.m_getView__().m_setAriaSelectedCell__java_util_Date(newValue);
  if (fireEvents) {
   DateChangeEvent.m_fireIfNotEqualDates__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_util_Date__java_util_Date(this, oldValue, newValue);
  }
 }
 /**
  * @return {CalendarModel}
  * @public
  */
 m_getModel__() {
  return this.f_model__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @return {MonthSelector}
  * @public
  */
 m_getMonthSelector__() {
  return this.f_monthAndYearSelector__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @return {CalendarView}
  * @public
  */
 m_getView__() {
  return this.f_view__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @public
  */
 m_refreshAll__() {
  this.f_highlighted__org_gwtproject_user_datepicker_client_DatePicker_ = null;
  this.m_getModel__().m_refresh__();
  this.m_getView__().m_refresh__();
  this.m_getMonthSelector__().m_refresh__();
  if (this.m_isAttached__()) {
   ShowRangeEvent.m_fire__org_gwtproject_event_logical_shared_HasShowRangeHandlers__java_lang_Object__java_lang_Object(this, this.m_getFirstDate__(), this.m_getLastDate__());
  }
  this.m_getView__().m_setAriaSelectedCell__java_util_Date(this.f_value__org_gwtproject_user_datepicker_client_DatePicker_);
 }
 /**
  * @public
  */
 m_setup__() {
  let panel = VerticalPanel.$create__();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(panel);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(panel.m_getElement__(), this.f_css__org_gwtproject_user_datepicker_client_DatePicker_.m_datePicker__());
  this.m_setStyleName__java_lang_String(this.m_css___$pp_org_gwtproject_user_datepicker_client().m_datePicker__());
  panel.m_add__org_gwtproject_user_client_ui_Widget(this.m_getMonthSelector__());
  panel.m_add__org_gwtproject_user_client_ui_Widget(this.m_getView__());
 }
 /**
  * @return {StandardCss}
  * @public
  */
 m_css___$pp_org_gwtproject_user_datepicker_client() {
  return this.f_css__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @param {Date} highlighted
  * @public
  */
 m_setHighlightedDate__java_util_Date_$pp_org_gwtproject_user_datepicker_client(highlighted) {
  this.f_highlighted__org_gwtproject_user_datepicker_client_DatePicker_ = highlighted;
  this.m_fireEvent__org_gwtproject_event_shared_Event(DateHighlightEvent.$create__java_util_Date(highlighted));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_util_Date(/**@type {Date} */ ($Casts.$to(arg0, Date)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {boolean} arg1
  * @public
  */
 m_setValue__java_lang_Object__boolean(arg0, arg1) {
  this.m_setValue__java_util_Date__boolean(/**@type {Date} */ ($Casts.$to(arg0, Date)), arg1);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_datepicker_client_DatePicker() {
  this.f_styler__org_gwtproject_user_datepicker_client_DatePicker_ = DateStyler.$create__();
  this.f_css__org_gwtproject_user_datepicker_client_DatePicker_ = StandardCss.f_DEFAULT__org_gwtproject_user_datepicker_client_DatePicker_StandardCss;
  this.f_visibleYearCount__org_gwtproject_user_datepicker_client_DatePicker_ = DatePicker.f_DEFAULT_VISIBLE_YEAR_COUNT__org_gwtproject_user_datepicker_client_DatePicker_;
 }
 /**
  * @public
  */
 static $clinit() {
  DatePicker.$clinit = () =>{};
  DatePicker.$loadModules();
  Composite.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DatePicker;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  HighlightEvent = goog.module.get('org.gwtproject.event.logical.shared.HighlightEvent$impl');
  ShowRangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  VerticalPanel = goog.module.get('org.gwtproject.user.client.ui.VerticalPanel$impl');
  CalendarModel = goog.module.get('org.gwtproject.user.datepicker.client.CalendarModel$impl');
  CalendarUtil = goog.module.get('org.gwtproject.user.datepicker.client.CalendarUtil$impl');
  DateChangeEvent = goog.module.get('org.gwtproject.user.datepicker.client.DateChangeEvent$impl');
  $1 = goog.module.get('org.gwtproject.user.datepicker.client.DatePicker.$1$impl');
  DateHighlightEvent = goog.module.get('org.gwtproject.user.datepicker.client.DatePicker.DateHighlightEvent$impl');
  DateStyler = goog.module.get('org.gwtproject.user.datepicker.client.DatePicker.DateStyler$impl');
  StandardCss = goog.module.get('org.gwtproject.user.datepicker.client.DatePicker.StandardCss$impl');
  DefaultCalendarView = goog.module.get('org.gwtproject.user.datepicker.client.DefaultCalendarView$impl');
  DefaultMonthSelector = goog.module.get('org.gwtproject.user.datepicker.client.DefaultMonthSelector$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DatePicker, 'org.gwtproject.user.datepicker.client.DatePicker');

HasHighlightHandlers.$markImplementor(DatePicker);
HasShowRangeHandlers.$markImplementor(DatePicker);
HasValue.$markImplementor(DatePicker);
IsEditor.$markImplementor(DatePicker);

/** @public {number} @const */
DatePicker.f_DEFAULT_VISIBLE_YEAR_COUNT__org_gwtproject_user_datepicker_client_DatePicker_ = 21;

exports = DatePicker; 
//# sourceMappingURL=DatePicker.js.map