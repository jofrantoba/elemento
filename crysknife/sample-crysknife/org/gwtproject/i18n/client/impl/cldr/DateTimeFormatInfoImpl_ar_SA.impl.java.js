goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_SA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

class DateTimeFormatInfoImpl__ar__SA extends DateTimeFormatInfoImpl__ar__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ar__SA}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ar__SA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__SA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_SA__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_SA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYear__() {
  return "y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "MMM y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "MMMM y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "d MMMM y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "M\u200F/y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "d\u200F/M\u200F/y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE\u060C d MMM y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "QQQQ y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "Q y G";
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendEnd__() {
  return 6;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 5;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ar__SA.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__SA.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__SA;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__SA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_SA');

exports = DateTimeFormatInfoImpl__ar__SA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_SA.js.map