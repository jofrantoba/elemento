goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_HK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__HK extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__HK} */
 static $create__() {
  DateTimeFormatInfoImpl__en__HK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__HK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_HK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_HK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__HK.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__HK.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__HK;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__HK, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_HK');

exports = DateTimeFormatInfoImpl__en__HK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_HK.js.map