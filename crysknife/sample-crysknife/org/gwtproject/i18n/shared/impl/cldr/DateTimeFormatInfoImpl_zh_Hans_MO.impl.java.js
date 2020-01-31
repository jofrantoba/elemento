goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_MO$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh__Hans = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

class DateTimeFormatInfoImpl__zh__Hans__MO extends DateTimeFormatInfoImpl__zh__Hans {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zh__Hans__MO} */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans__MO.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans__MO();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_MO__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_MO__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
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
 m_formatYearMonthNumDay__() {
  return "y\u5E74M\u6708d\u65E5";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hans__MO.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans__MO.$loadModules();
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans__MO;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans__MO, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_MO');

exports = DateTimeFormatInfoImpl__zh__Hans__MO; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans_MO.js.map