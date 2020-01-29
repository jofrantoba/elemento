goog.module('org.gwtproject.user.datepicker.client.DateBox.DateBoxHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BlurHandler = goog.require('org.gwtproject.event.dom.client.BlurHandler$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');
const FocusHandler = goog.require('org.gwtproject.event.dom.client.FocusHandler$impl');
const KeyDownHandler = goog.require('org.gwtproject.event.dom.client.KeyDownHandler$impl');
const CloseHandler = goog.require('org.gwtproject.event.logical.shared.CloseHandler$impl');
const ValueChangeHandler = goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let DateBox = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ValueChangeHandler<Date>}
 * @implements {FocusHandler}
 * @implements {BlurHandler}
 * @implements {ClickHandler}
 * @implements {KeyDownHandler}
 * @implements {CloseHandler<PopupPanel>}
  */
class DateBoxHandler extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateBox} */
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler;
 }
 /**
  * @param {DateBox} $outer_this
  * @return {!DateBoxHandler}
  * @public
  */
 static $create__org_gwtproject_user_datepicker_client_DateBox($outer_this) {
  DateBoxHandler.$clinit();
  let $instance = new DateBoxHandler();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler__org_gwtproject_user_datepicker_client_DateBox($outer_this);
  return $instance;
 }
 /**
  * @param {DateBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler__org_gwtproject_user_datepicker_client_DateBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {BlurEvent} event
  * @public
  */
 m_onBlur__org_gwtproject_event_dom_client_BlurEvent(event) {
  if (this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_isDatePickerShowing__() == false) {
   this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_updateDateFromTextBox___$p_org_gwtproject_user_datepicker_client_DateBox();
  }
 }
 /**
  * @override
  * @param {ClickEvent} event
  * @public
  */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(event) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_showDatePicker__();
 }
 /**
  * @override
  * @param {CloseEvent<PopupPanel>} event
  * @public
  */
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(event) {
  if (this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.f_allowDPShow__org_gwtproject_user_datepicker_client_DateBox_) {
   this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_updateDateFromTextBox___$p_org_gwtproject_user_datepicker_client_DateBox();
  }
 }
 /**
  * @override
  * @param {FocusEvent} event
  * @public
  */
 m_onFocus__org_gwtproject_event_dom_client_FocusEvent(event) {
  if (this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.f_allowDPShow__org_gwtproject_user_datepicker_client_DateBox_ && this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_isDatePickerShowing__() == false) {
   this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_showDatePicker__();
  }
 }
 /**
  * @override
  * @param {KeyDownEvent} event
  * @public
  */
 m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(event) {
  switch (event.m_getNativeKeyCode__()) {
   case KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_TAB__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_updateDateFromTextBox___$p_org_gwtproject_user_datepicker_client_DateBox();
   case KeyCodes.f_KEY_ESCAPE__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_hideDatePicker__();
    break;
   case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_showDatePicker__();
    break;
  }
 }
 /**
  * @override
  * @param {ValueChangeEvent<Date>} event
  * @public
  */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(event) {
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_setValue__java_util_Date__java_util_Date__boolean__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_parseDate__boolean_$p_org_gwtproject_user_datepicker_client_DateBox(false), this.m_normalize__java_util_Date_$p_org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler(/**@type {Date} */ ($Casts.$to(event.m_getValue__(), Date))), true, true);
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_hideDatePicker__();
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_preventDatePickerPopup___$p_org_gwtproject_user_datepicker_client_DateBox();
  this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.f_box__org_gwtproject_user_datepicker_client_DateBox_.m_setFocus__boolean(true);
 }
 /**
  * @param {Date} date
  * @return {Date}
  * @public
  */
 m_normalize__java_util_Date_$p_org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler(date) {
  let dateBox = this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler;
  return this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_getFormat__().m_parse__org_gwtproject_user_datepicker_client_DateBox__java_lang_String__boolean(dateBox, this.f_$outer_this__org_gwtproject_user_datepicker_client_DateBox_DateBoxHandler.m_getFormat__().m_format__org_gwtproject_user_datepicker_client_DateBox__java_util_Date(dateBox, date), false);
 }
 /**
  * @public
  */
 static $clinit() {
  DateBoxHandler.$clinit = () =>{};
  DateBoxHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateBoxHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateBoxHandler, 'org.gwtproject.user.datepicker.client.DateBox$DateBoxHandler');

ValueChangeHandler.$markImplementor(DateBoxHandler);
FocusHandler.$markImplementor(DateBoxHandler);
BlurHandler.$markImplementor(DateBoxHandler);
ClickHandler.$markImplementor(DateBoxHandler);
KeyDownHandler.$markImplementor(DateBoxHandler);
CloseHandler.$markImplementor(DateBoxHandler);

exports = DateBoxHandler; 
//# sourceMappingURL=DateBox$DateBoxHandler.js.map