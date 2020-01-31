goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_PH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es$impl');

class DateTimeFormatInfoImpl__es__PH extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__PH} */
 static $create__() {
  DateTimeFormatInfoImpl__es__PH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__PH();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_PH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_PH__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es__();
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
  DateTimeFormatInfoImpl__es__PH.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__PH.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__PH;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__PH, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_PH');

exports = DateTimeFormatInfoImpl__es__PH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_PH.js.map