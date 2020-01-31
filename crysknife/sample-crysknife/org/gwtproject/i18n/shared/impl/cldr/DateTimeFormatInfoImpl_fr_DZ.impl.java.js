goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_DZ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

class DateTimeFormatInfoImpl__fr__DZ extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__DZ} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__DZ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__DZ();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_DZ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_DZ__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm a";
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
  DateTimeFormatInfoImpl__fr__DZ.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__DZ.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__DZ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__DZ, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_DZ');

exports = DateTimeFormatInfoImpl__fr__DZ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_DZ.js.map