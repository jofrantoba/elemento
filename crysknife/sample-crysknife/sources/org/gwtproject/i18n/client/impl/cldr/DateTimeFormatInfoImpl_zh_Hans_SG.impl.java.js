goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_SG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh__Hans = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

class DateTimeFormatInfoImpl__zh__Hans__SG extends DateTimeFormatInfoImpl__zh__Hans {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zh__Hans__SG} */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans__SG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans__SG();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_SG__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_SG__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
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
 m_formatMonthAbbrev__() {
  return "M\u6708";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "M\u6708";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y\u5E74M\u6708d\u65E5";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hans__SG.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans__SG.$loadModules();
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans__SG;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans__SG, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_SG');

exports = DateTimeFormatInfoImpl__zh__Hans__SG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans_SG.js.map