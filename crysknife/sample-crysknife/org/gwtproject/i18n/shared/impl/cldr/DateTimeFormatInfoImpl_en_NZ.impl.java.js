goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_NZ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__NZ extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__NZ} */
 static $create__() {
  DateTimeFormatInfoImpl__en__NZ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__NZ();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_NZ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_NZ__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d/MM/y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/MM/yy";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/MM/y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__NZ.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__NZ.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__NZ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__NZ, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_NZ');

exports = DateTimeFormatInfoImpl__en__NZ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_NZ.js.map