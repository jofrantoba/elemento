goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_QA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

class DateTimeFormatInfoImpl__ar__QA extends DateTimeFormatInfoImpl__ar__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ar__QA} */
 static $create__() {
  DateTimeFormatInfoImpl__ar__QA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__QA();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_QA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_QA__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
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
  DateTimeFormatInfoImpl__ar__QA.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__QA.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__QA;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__QA, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_QA');

exports = DateTimeFormatInfoImpl__ar__QA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_QA.js.map