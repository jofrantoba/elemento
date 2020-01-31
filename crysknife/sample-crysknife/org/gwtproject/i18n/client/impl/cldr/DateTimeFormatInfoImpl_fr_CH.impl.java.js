goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_CH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

class DateTimeFormatInfoImpl__fr__CH extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__CH} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__CH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__CH();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_CH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_CH__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd.MM.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH.mm:ss 'h' zzzz";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fr__CH.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__CH.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__CH;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__CH, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_CH');

exports = DateTimeFormatInfoImpl__fr__CH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_CH.js.map