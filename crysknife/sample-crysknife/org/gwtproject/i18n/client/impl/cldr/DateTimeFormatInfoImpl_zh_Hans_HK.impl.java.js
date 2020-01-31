goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_HK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh__Hans = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

class DateTimeFormatInfoImpl__zh__Hans__HK extends DateTimeFormatInfoImpl__zh__Hans {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zh__Hans__HK} */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans__HK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans__HK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_HK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_HK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hans__HK.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans__HK.$loadModules();
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans__HK;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans__HK, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_HK');

exports = DateTimeFormatInfoImpl__zh__Hans__HK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans_HK.js.map