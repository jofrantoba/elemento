goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_BE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__BE extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__BE} */
 static $create__() {
  DateTimeFormatInfoImpl__en__BE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__BE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_BE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_BE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__BE.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__BE.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__BE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__BE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_BE');

exports = DateTimeFormatInfoImpl__en__BE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_BE.js.map