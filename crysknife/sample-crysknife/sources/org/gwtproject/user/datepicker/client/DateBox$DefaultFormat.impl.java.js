goog.module('org.gwtproject.user.datepicker.client.DateBox.DefaultFormat$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Format = goog.require('org.gwtproject.user.datepicker.client.DateBox.Format$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateTimeFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
let DateBox = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DateBox$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Format}
  */
class DefaultFormat extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateTimeFormat} */
  this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_;
 }
 /**
  * Factory method corresponding to constructor 'DefaultFormat()'.
  * @return {!DefaultFormat}
  * @public
  */
 static $create__() {
  DefaultFormat.$clinit();
  let $instance = new DefaultFormat();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultFormat()'.
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat__() {
  this.$ctor__java_lang_Object__();
  this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_ = DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_TIME_MEDIUM__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat);
 }
 /**
  * Factory method corresponding to constructor 'DefaultFormat(DateTimeFormat)'.
  * @param {DateTimeFormat} dateTimeFormat
  * @return {!DefaultFormat}
  * @public
  */
 static $create__org_gwtproject_i18n_client_DateTimeFormat(dateTimeFormat) {
  DefaultFormat.$clinit();
  let $instance = new DefaultFormat();
  $instance.$ctor__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat__org_gwtproject_i18n_client_DateTimeFormat(dateTimeFormat);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultFormat(DateTimeFormat)'.
  * @param {DateTimeFormat} dateTimeFormat
  * @public
  */
 $ctor__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat__org_gwtproject_i18n_client_DateTimeFormat(dateTimeFormat) {
  this.$ctor__java_lang_Object__();
  this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_ = dateTimeFormat;
 }
 /**
  * @override
  * @param {DateBox} box
  * @param {Date} date
  * @return {?string}
  * @public
  */
 m_format__org_gwtproject_user_datepicker_client_DateBox__java_util_Date(box, date) {
  if ($Equality.$same(date, null)) {
   return "";
  } else {
   return this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_.m_format__java_util_Date(date);
  }
 }
 /**
  * @return {DateTimeFormat}
  * @public
  */
 m_getDateTimeFormat__() {
  return this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_;
 }
 /**
  * @override
  * @param {DateBox} dateBox
  * @param {?string} dateText
  * @param {boolean} reportError
  * @return {Date}
  * @public
  */
 m_parse__org_gwtproject_user_datepicker_client_DateBox__java_lang_String__boolean(dateBox, dateText, reportError) {
  let date = null;
  try {
   if (j_l_String.m_length__java_lang_String(dateText) > 0) {
    date = this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_.m_parse__java_lang_String(dateText);
   }
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IllegalArgumentException.$isInstance(__$exc)) {
    let exception = /**@type {IllegalArgumentException} */ (__$exc);
    try {
     date = Date.$create__java_lang_String(dateText);
     date = this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_.m_parse__java_lang_String(this.f_dateTimeFormat__org_gwtproject_user_datepicker_client_DateBox_DefaultFormat_.m_format__java_util_Date(date));
    } catch (__$exc_1) {
     __$exc_1 = $Exceptions.toJava(__$exc_1);
     if (IllegalArgumentException.$isInstance(__$exc_1)) {
      let e = /**@type {IllegalArgumentException} */ (__$exc_1);
      if (reportError) {
       dateBox.m_addStyleName__java_lang_String(DateBox.f_DATE_BOX_FORMAT_ERROR__org_gwtproject_user_datepicker_client_DateBox_);
      }
      return null;
     } else {
      throw $Exceptions.toJs(__$exc_1);
     }
    }
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
  return date;
 }
 /**
  * @override
  * @param {DateBox} dateBox
  * @param {boolean} abandon
  * @public
  */
 m_reset__org_gwtproject_user_datepicker_client_DateBox__boolean(dateBox, abandon) {
  dateBox.m_removeStyleName__java_lang_String(DateBox.f_DATE_BOX_FORMAT_ERROR__org_gwtproject_user_datepicker_client_DateBox_);
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultFormat.$clinit = () =>{};
  DefaultFormat.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultFormat;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateTimeFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
  DateBox = goog.module.get('org.gwtproject.user.datepicker.client.DateBox$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DefaultFormat, 'org.gwtproject.user.datepicker.client.DateBox$DefaultFormat');

Format.$markImplementor(DefaultFormat);

exports = DefaultFormat; 
//# sourceMappingURL=DateBox$DefaultFormat.js.map