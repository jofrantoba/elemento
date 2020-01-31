goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_BW$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__BW extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__BW} */
 static $create__() {
  DateTimeFormatInfoImpl__en__BW.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__BW();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_BW__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_BW__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "dd MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, dd MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "dd MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, dd MMM y";
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__BW.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__BW.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__BW;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__BW, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_BW');

exports = DateTimeFormatInfoImpl__en__BW; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_BW.js.map