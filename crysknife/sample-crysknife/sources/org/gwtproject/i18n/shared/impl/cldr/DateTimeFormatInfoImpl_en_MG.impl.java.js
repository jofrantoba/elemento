goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_MG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__MG extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__MG} */
 static $create__() {
  DateTimeFormatInfoImpl__en__MG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__MG();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_MG__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_MG__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_001__();
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
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__MG.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__MG.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__MG;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__MG, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_MG');

exports = DateTimeFormatInfoImpl__en__MG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_MG.js.map