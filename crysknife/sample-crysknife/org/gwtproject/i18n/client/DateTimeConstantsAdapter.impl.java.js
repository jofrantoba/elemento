goog.module('org.gwtproject.i18n.client.DateTimeConstantsAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeConstants = goog.require('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DateTimeFormatInfo = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormatInfo$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {DateTimeConstants}
  */
class DateTimeConstantsAdapter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DateTimeFormatInfo}*/
  this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_;
 }
 /** @return {!DateTimeConstantsAdapter} */
 static $create__org_gwtproject_i18n_client_DateTimeFormatInfo(/** DateTimeFormatInfo */ dtfi) {
  DateTimeConstantsAdapter.$clinit();
  let $instance = new DateTimeConstantsAdapter();
  $instance.$ctor__org_gwtproject_i18n_client_DateTimeConstantsAdapter__org_gwtproject_i18n_client_DateTimeFormatInfo(dtfi);
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_DateTimeConstantsAdapter__org_gwtproject_i18n_client_DateTimeFormatInfo(/** DateTimeFormatInfo */ dtfi) {
  this.$ctor__java_lang_Object__();
  this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_ = dtfi;
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_ampms__();
 }
 /** @override @return {Array<?string>} */
 m_dateFormats__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init([this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_dateFormatFull__(), this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_dateFormatLong__(), this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_dateFormatMedium__(), this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_dateFormatShort__()], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_eraNames__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_erasFull__();
 }
 /** @override @return {Array<?string>} */
 m_eras__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_erasShort__();
 }
 /** @override @return {?string} */
 m_firstDayOfTheWeek__() {
  return j_l_String.m_valueOf__int(this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_firstDayOfTheWeek__() + 1);
 }
 /** @override @return {Array<?string>} */
 m_months__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_monthsFull__();
 }
 /** @override @return {Array<?string>} */
 m_narrowMonths__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_monthsNarrow__();
 }
 /** @override @return {Array<?string>} */
 m_narrowWeekdays__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekdaysNarrow__();
 }
 /** @override @return {Array<?string>} */
 m_quarters__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_quartersFull__();
 }
 /** @override @return {Array<?string>} */
 m_shortMonths__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_monthsShort__();
 }
 /** @override @return {Array<?string>} */
 m_shortQuarters__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_quartersShort__();
 }
 /** @override @return {Array<?string>} */
 m_shortWeekdays__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekdaysShort__();
 }
 /** @override @return {Array<?string>} */
 m_standaloneMonths__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_monthsFullStandalone__();
 }
 /** @override @return {Array<?string>} */
 m_standaloneNarrowMonths__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_monthsNarrowStandalone__();
 }
 /** @override @return {Array<?string>} */
 m_standaloneNarrowWeekdays__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekdaysNarrowStandalone__();
 }
 /** @override @return {Array<?string>} */
 m_standaloneShortMonths__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_monthsShortStandalone__();
 }
 /** @override @return {Array<?string>} */
 m_standaloneShortWeekdays__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekdaysShortStandalone__();
 }
 /** @override @return {Array<?string>} */
 m_standaloneWeekdays__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekdaysFullStandalone__();
 }
 /** @override @return {Array<?string>} */
 m_timeFormats__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init([this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_timeFormatFull__(), this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_timeFormatLong__(), this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_timeFormatMedium__(), this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_dateFormatShort__()], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdays__() {
  return this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekdaysFull__();
 }
 /** @override @return {Array<?string>} */
 m_weekendRange__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init([j_l_String.m_valueOf__int(this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekendStart__() + 1), j_l_String.m_valueOf__int(this.f_dtfi__org_gwtproject_i18n_client_DateTimeConstantsAdapter_.m_weekendEnd__() + 1)], j_l_String));
 }
 
 static $clinit() {
  DateTimeConstantsAdapter.$clinit = () =>{};
  DateTimeConstantsAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeConstantsAdapter;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeConstantsAdapter, 'org.gwtproject.i18n.client.DateTimeConstantsAdapter');

DateTimeConstants.$markImplementor(DateTimeConstantsAdapter);

exports = DateTimeConstantsAdapter; 
//# sourceMappingURL=DateTimeConstantsAdapter.js.map