goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lrc_IQ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__lrc = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lrc$impl');

class DateTimeFormatInfoImpl__lrc__IQ extends DateTimeFormatInfoImpl__lrc {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__lrc__IQ} */
 static $create__() {
  DateTimeFormatInfoImpl__lrc__IQ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lrc__IQ();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lrc_IQ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lrc_IQ__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lrc__();
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y MMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y MMMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-M-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y MMM d, EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y Q";
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__lrc__IQ.$clinit = () =>{};
  DateTimeFormatInfoImpl__lrc__IQ.$loadModules();
  DateTimeFormatInfoImpl__lrc.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__lrc__IQ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lrc__IQ, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lrc_IQ');

exports = DateTimeFormatInfoImpl__lrc__IQ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lrc_IQ.js.map