goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_TN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

class DateTimeFormatInfoImpl__fr__TN extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__TN} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__TN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__TN();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_TN__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_TN__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr__();
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
 
 static $clinit() {
  DateTimeFormatInfoImpl__fr__TN.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__TN.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__TN;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__TN, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_TN');

exports = DateTimeFormatInfoImpl__fr__TN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_TN.js.map