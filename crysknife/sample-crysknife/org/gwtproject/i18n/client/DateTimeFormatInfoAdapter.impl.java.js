goog.module('org.gwtproject.i18n.client.DateTimeFormatInfoAdapter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultDateTimeFormatInfo = goog.require('org.gwtproject.i18n.client.DefaultDateTimeFormatInfo$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DateTimeConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');

class DateTimeFormatInfoAdapter extends DefaultDateTimeFormatInfo {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateTimeConstants} */
  this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_;
 }
 /**
  * @param {DateTimeConstants} dtc
  * @return {!DateTimeFormatInfoAdapter}
  * @public
  */
 static $create__org_gwtproject_i18n_client_constants_DateTimeConstants(dtc) {
  DateTimeFormatInfoAdapter.$clinit();
  let $instance = new DateTimeFormatInfoAdapter();
  $instance.$ctor__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter__org_gwtproject_i18n_client_constants_DateTimeConstants(dtc);
  return $instance;
 }
 /**
  * @param {DateTimeConstants} dtc
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter__org_gwtproject_i18n_client_constants_DateTimeConstants(dtc) {
  this.$ctor__org_gwtproject_i18n_client_DefaultDateTimeFormatInfo__();
  this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_ = dtc;
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_ampms__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_dateFormats__()[0];
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_dateFormats__()[1];
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_dateFormats__()[2];
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_dateFormats__()[3];
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_eraNames__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_eras__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return Integer.m_valueOf__java_lang_String(this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_firstDayOfTheWeek__()).m_intValue__() - 1;
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_months__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFullStandalone__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_standaloneMonths__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_narrowMonths__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrowStandalone__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_standaloneNarrowMonths__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_shortMonths__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_standaloneShortMonths__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_quarters__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_shortQuarters__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_timeFormats__()[0];
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_timeFormats__()[1];
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_timeFormats__()[2];
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_timeFormats__()[3];
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_weekdays__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFullStandalone__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_standaloneWeekdays__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_narrowWeekdays__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrowStandalone__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_standaloneNarrowWeekdays__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_shortWeekdays__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShortStandalone__() {
  return this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_standaloneShortWeekdays__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendEnd__() {
  return Integer.m_valueOf__java_lang_String(this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_weekendRange__()[1]).m_intValue__() - 1;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return Integer.m_valueOf__java_lang_String(this.f_dtc__org_gwtproject_i18n_client_DateTimeFormatInfoAdapter_.m_weekendRange__()[0]).m_intValue__() - 1;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoAdapter.$clinit = () =>{};
  DateTimeFormatInfoAdapter.$loadModules();
  DefaultDateTimeFormatInfo.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoAdapter;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoAdapter, 'org.gwtproject.i18n.client.DateTimeFormatInfoAdapter');

exports = DateTimeFormatInfoAdapter; 
//# sourceMappingURL=DateTimeFormatInfoAdapter.js.map