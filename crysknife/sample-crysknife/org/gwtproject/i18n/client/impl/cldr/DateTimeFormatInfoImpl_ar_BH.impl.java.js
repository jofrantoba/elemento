goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_BH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

class DateTimeFormatInfoImpl__ar__BH extends DateTimeFormatInfoImpl__ar__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ar__BH} */
 static $create__() {
  DateTimeFormatInfoImpl__ar__BH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__BH();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_BH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_BH__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 6;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 5;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ar__BH.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__BH.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__BH;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__BH, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_BH');

exports = DateTimeFormatInfoImpl__ar__BH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_BH.js.map