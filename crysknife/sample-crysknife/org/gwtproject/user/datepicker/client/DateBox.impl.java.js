goog.module('org.gwtproject.user.datepicker.client.DateBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let TextBox = goog.forwardDeclare('org.gwtproject.user.client.ui.TextBox$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox.$1$impl');
let DateBoxHandler = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox.DateBoxHandler$impl');
let DefaultFormat = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox.DefaultFormat$impl');
let Format = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox.Format$impl');
let DateChangeEvent = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateChangeEvent$impl');
let DatePicker = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasEnabled}
 * @implements {HasValue<Date>}
 * @implements {IsEditor<LeafValueEditor<Date>>}
  */
class DateBox extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {PopupPanel}*/
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_;
  /**@type {TextBox}*/
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_;
  /**@type {DatePicker}*/
  this.f_picker__org_gwtproject_user_datepicker_client_DateBox_;
  /**@type {LeafValueEditor<Date>}*/
  this.f_editor__org_gwtproject_user_datepicker_client_DateBox_;
  /**@type {Format}*/
  this.f_format__org_gwtproject_user_datepicker_client_DateBox_;
  /**@type {boolean}*/
  this.f_allowDPShow__org_gwtproject_user_datepicker_client_DateBox_ = false;
  /**@type {boolean}*/
  this.f_fireNullValues__org_gwtproject_user_datepicker_client_DateBox_ = false;
 }
 //Factory method corresponding to constructor 'DateBox()'.
 /** @return {!DateBox} */
 static $create__() {
  DateBox.$clinit();
  let $instance = new DateBox();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateBox__();
  return $instance;
 }
 //Initialization from constructor 'DateBox()'.
 
 $ctor__org_gwtproject_user_datepicker_client_DateBox__() {
  this.$ctor__org_gwtproject_user_datepicker_client_DateBox__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__org_gwtproject_user_datepicker_client_DateBox_Format(DatePicker.$create__(), null, DateBox.f_DEFAULT_FORMAT__org_gwtproject_user_datepicker_client_DateBox_);
 }
 //Factory method corresponding to constructor 'DateBox(DatePicker, Date, Format)'.
 /** @return {!DateBox} */
 static $create__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__org_gwtproject_user_datepicker_client_DateBox_Format(/** DatePicker */ picker, /** Date */ date, /** Format */ format) {
  DateBox.$clinit();
  let $instance = new DateBox();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateBox__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__org_gwtproject_user_datepicker_client_DateBox_Format(picker, date, format);
  return $instance;
 }
 //Initialization from constructor 'DateBox(DatePicker, Date, Format)'.
 
 $ctor__org_gwtproject_user_datepicker_client_DateBox__org_gwtproject_user_datepicker_client_DatePicker__java_util_Date__org_gwtproject_user_datepicker_client_DateBox_Format(/** DatePicker */ picker, /** Date */ date, /** Format */ format) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_datepicker_client_DateBox();
  this.f_picker__org_gwtproject_user_datepicker_client_DateBox_ = picker;
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_ = PopupPanel.$create__boolean(true);
  $Asserts.$assertWithMessage(!$Equality.$same(format, null), "You may not construct a date box with a null format");
  this.f_format__org_gwtproject_user_datepicker_client_DateBox_ = format;
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_addAutoHidePartner__org_gwtproject_dom_client_Element(this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_getElement__());
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_setWidget__org_gwtproject_user_client_ui_Widget(picker);
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_setStyleName__java_lang_String("dateBoxPopup");
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_box__org_gwtproject_user_datepicker_client_DateBox_);
  this.m_setStyleName__java_lang_String(DateBox.f_DEFAULT_STYLENAME__org_gwtproject_user_datepicker_client_DateBox);
  let handler = DateBoxHandler.$create__org_gwtproject_user_datepicker_client_DateBox(this);
  picker.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler);
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_addFocusHandler__org_gwtproject_event_dom_client_FocusHandler(handler);
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_addBlurHandler__org_gwtproject_event_dom_client_BlurHandler(handler);
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(handler);
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setDirectionEstimator__boolean(false);
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(handler);
  this.m_setValue__java_util_Date(date);
 }
 /** @override @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(/** ValueChangeHandler<Date> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /** @override @return {LeafValueEditor<Date>} */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_datepicker_client_DateBox_, null)) {
   this.f_editor__org_gwtproject_user_datepicker_client_DateBox_ = /**@type {TakesValueEditor<Date>}*/ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_datepicker_client_DateBox_;
 }
 /** @return {number} */
 m_getCursorPos__() {
  return this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_getCursorPos__();
 }
 /** @return {DatePicker} */
 m_getDatePicker__() {
  return this.f_picker__org_gwtproject_user_datepicker_client_DateBox_;
 }
 /** @return {boolean} */
 m_getFireNullValues__() {
  return this.f_fireNullValues__org_gwtproject_user_datepicker_client_DateBox_;
 }
 /** @return {Format} */
 m_getFormat__() {
  return this.f_format__org_gwtproject_user_datepicker_client_DateBox_;
 }
 /** @return {number} */
 m_getTabIndex__() {
  return this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_getTabIndex__();
 }
 /** @return {TextBox} */
 m_getTextBox__() {
  return this.f_box__org_gwtproject_user_datepicker_client_DateBox_;
 }
 /** @override @return {Date} */
 m_getValue__() {
  return this.m_parseDate__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(true);
 }
 
 m_hideDatePicker__() {
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_hide__();
 }
 /** @return {boolean} */
 m_isDatePickerShowing__() {
  return this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_isShowing__();
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_isEnabled__();
 }
 
 m_setAccessKey__char(/** number */ key) {
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setAccessKey__char(key);
 }
 /** @override */
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setEnabled__boolean(enabled);
 }
 
 m_setFireNullValues__boolean(/** boolean */ fireNullValues) {
  this.f_fireNullValues__org_gwtproject_user_datepicker_client_DateBox_ = fireNullValues;
 }
 
 m_setFocus__boolean(/** boolean */ focused) {
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setFocus__boolean(focused);
 }
 
 m_setFormat__org_gwtproject_user_datepicker_client_DateBox_Format(/** Format */ format) {
  $Asserts.$assertWithMessage(!$Equality.$same(format, null), "A Date box may not have a null format");
  if (!$Equality.$same(this.f_format__org_gwtproject_user_datepicker_client_DateBox_, format)) {
   let date = this.m_getValue__();
   this.f_format__org_gwtproject_user_datepicker_client_DateBox_.m_reset__org_gwtproject_user_datepicker_client_DateBox__boolean(this, true);
   this.f_format__org_gwtproject_user_datepicker_client_DateBox_ = format;
   this.m_setValue__java_util_Date(date);
  }
 }
 
 m_setTabIndex__int(/** number */ index) {
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setTabIndex__int(index);
 }
 
 m_setValue__java_util_Date(/** Date */ date) {
  this.m_setValue__java_util_Date__boolean(date, false);
 }
 
 m_setValue__java_util_Date__boolean(/** Date */ date, /** boolean */ fireEvents) {
  this.m_setValue__java_util_Date__java_util_Date__boolean__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(this.f_picker__org_gwtproject_user_datepicker_client_DateBox_.m_getValue__(), date, fireEvents, true);
 }
 
 m_showDatePicker__() {
  let current = this.m_parseDate__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(false);
  if ($Equality.$same(current, null)) {
   current = Date.$create__();
  }
  this.f_picker__org_gwtproject_user_datepicker_client_DateBox_.m_setCurrentMonth__java_util_Date(current);
  this.f_popup__org_gwtproject_user_datepicker_client_DateBox_.m_showRelativeTo__org_gwtproject_user_client_ui_UIObject(this);
 }
 /** @return {Date} */
 m_parseDate__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(/** boolean */ reportError) {
  if (reportError) {
   this.m_getFormat__().m_reset__org_gwtproject_user_datepicker_client_DateBox__boolean(this, false);
  }
  let text = j_l_String.m_trim__java_lang_String(this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_getText__());
  return this.m_getFormat__().m_parse__org_gwtproject_user_datepicker_client_DateBox__java_lang_String__boolean(this, text, reportError);
 }
 
 m_preventDatePickerPopup___$p_org_gwtproject_user_datepicker_client_DateBox() {
  this.f_allowDPShow__org_gwtproject_user_datepicker_client_DateBox_ = false;
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_datepicker_client_DateBox(this));
 }
 
 m_setValue__java_util_Date__java_util_Date__boolean__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(/** Date */ oldDate, /** Date */ date, /** boolean */ fireEvents, /** boolean */ updateText) {
  if (!$Equality.$same(date, null)) {
   this.f_picker__org_gwtproject_user_datepicker_client_DateBox_.m_setCurrentMonth__java_util_Date(date);
  }
  this.f_picker__org_gwtproject_user_datepicker_client_DateBox_.m_setValue__java_util_Date__boolean(date, false);
  if (updateText) {
   this.f_format__org_gwtproject_user_datepicker_client_DateBox_.m_reset__org_gwtproject_user_datepicker_client_DateBox__boolean(this, false);
   this.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setText__java_lang_String(this.m_getFormat__().m_format__org_gwtproject_user_datepicker_client_DateBox__java_util_Date(this, date));
  }
  if (fireEvents) {
   DateChangeEvent.m_fireIfNotEqualDates__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_util_Date__java_util_Date(this, oldDate, date);
  }
 }
 
 m_updateDateFromTextBox___$p_org_gwtproject_user_datepicker_client_DateBox() {
  let parsedDate = this.m_parseDate__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(true);
  if (this.f_fireNullValues__org_gwtproject_user_datepicker_client_DateBox_ || (!$Equality.$same(parsedDate, null))) {
   this.m_setValue__java_util_Date__java_util_Date__boolean__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(this.f_picker__org_gwtproject_user_datepicker_client_DateBox_.m_getValue__(), parsedDate, true, false);
  }
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object(/** * */ arg0) {
  this.m_setValue__java_util_Date(/**@type {Date}*/ ($Casts.$to(arg0, Date)));
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object__boolean(/** * */ arg0, /** boolean */ arg1) {
  this.m_setValue__java_util_Date__boolean(/**@type {Date}*/ ($Casts.$to(arg0, Date)), arg1);
 }
 /** @private */
 $init___$p_org_gwtproject_user_datepicker_client_DateBox() {
  this.f_box__org_gwtproject_user_datepicker_client_DateBox_ = TextBox.$create__();
  this.f_allowDPShow__org_gwtproject_user_datepicker_client_DateBox_ = true;
  this.f_fireNullValues__org_gwtproject_user_datepicker_client_DateBox_ = false;
 }
 
 static $clinit() {
  DateBox.$clinit = () =>{};
  DateBox.$loadModules();
  Composite.$clinit();
  DateBox.f_DEFAULT_FORMAT__org_gwtproject_user_datepicker_client_DateBox_ = DefaultFormat.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateBox;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  PopupPanel = goog.module.get('org.gwtproject.user.client.ui.PopupPanel$impl');
  TextBox = goog.module.get('org.gwtproject.user.client.ui.TextBox$impl');
  $1 = goog.module.get('org.gwtproject.user.datepicker.client.DateBox.$1$impl');
  DateBoxHandler = goog.module.get('org.gwtproject.user.datepicker.client.DateBox.DateBoxHandler$impl');
  DefaultFormat = goog.module.get('org.gwtproject.user.datepicker.client.DateBox.DefaultFormat$impl');
  DateChangeEvent = goog.module.get('org.gwtproject.user.datepicker.client.DateChangeEvent$impl');
  DatePicker = goog.module.get('org.gwtproject.user.datepicker.client.DatePicker$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateBox, 'org.gwtproject.user.datepicker.client.DateBox');

HasEnabled.$markImplementor(DateBox);
HasValue.$markImplementor(DateBox);
IsEditor.$markImplementor(DateBox);

/**@const {?string}*/
DateBox.f_DATE_BOX_FORMAT_ERROR__org_gwtproject_user_datepicker_client_DateBox_ = "dateBoxFormatError";
/**@const {?string}*/
DateBox.f_DEFAULT_STYLENAME__org_gwtproject_user_datepicker_client_DateBox = "gwt-DateBox";
/**@type {DefaultFormat}*/
DateBox.f_DEFAULT_FORMAT__org_gwtproject_user_datepicker_client_DateBox_;

exports = DateBox; 
//# sourceMappingURL=DateBox.js.map