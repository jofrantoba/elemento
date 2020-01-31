goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_SE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__SE extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__SE} */
 static $create__() {
  DateTimeFormatInfoImpl__en__SE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__SE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_SE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_SE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__SE.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__SE.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__SE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__SE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_SE');

exports = DateTimeFormatInfoImpl__en__SE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_SE.js.map