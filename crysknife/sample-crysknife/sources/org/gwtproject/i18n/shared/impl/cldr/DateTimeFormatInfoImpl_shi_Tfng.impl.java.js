goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_shi_Tfng$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__shi = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_shi$impl');

class DateTimeFormatInfoImpl__shi__Tfng extends DateTimeFormatInfoImpl__shi {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__shi__Tfng} */
 static $create__() {
  DateTimeFormatInfoImpl__shi__Tfng.$clinit();
  let $instance = new DateTimeFormatInfoImpl__shi__Tfng();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_shi_Tfng__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_shi_Tfng__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_shi__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 0;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__shi__Tfng.$clinit = () =>{};
  DateTimeFormatInfoImpl__shi__Tfng.$loadModules();
  DateTimeFormatInfoImpl__shi.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__shi__Tfng;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__shi__Tfng, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_shi_Tfng');

exports = DateTimeFormatInfoImpl__shi__Tfng; 
//# sourceMappingURL=DateTimeFormatInfoImpl_shi_Tfng.js.map