goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ckb_IR$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ckb = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ckb$impl');

class DateTimeFormatInfoImpl__ckb__IR extends DateTimeFormatInfoImpl__ckb {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ckb__IR} */
 static $create__() {
  DateTimeFormatInfoImpl__ckb__IR.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ckb__IR();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ckb_IR__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ckb_IR__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ckb__();
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "G y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM\u06CC y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "G y QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "G y Q";
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
 /** @override @return {number} */
 m_weekendEnd__() {
  return 5;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ckb__IR.$clinit = () =>{};
  DateTimeFormatInfoImpl__ckb__IR.$loadModules();
  DateTimeFormatInfoImpl__ckb.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ckb__IR;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ckb__IR, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ckb_IR');

exports = DateTimeFormatInfoImpl__ckb__IR; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ckb_IR.js.map