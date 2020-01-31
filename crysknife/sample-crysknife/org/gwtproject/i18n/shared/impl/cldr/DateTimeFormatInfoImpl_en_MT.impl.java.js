goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_MT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__MT extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__MT} */
 static $create__() {
  DateTimeFormatInfoImpl__en__MT.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__MT();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_MT__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_MT__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd MMM y";
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
 m_formatYearMonthAbbrevDay__() {
  return "dd MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, dd MMM y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__MT.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__MT.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__MT;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__MT, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_MT');

exports = DateTimeFormatInfoImpl__en__MT; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_MT.js.map