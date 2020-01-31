goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_FK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__FK extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__FK} */
 static $create__() {
  DateTimeFormatInfoImpl__en__FK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__FK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_FK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_FK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
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
  DateTimeFormatInfoImpl__en__FK.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__FK.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__FK;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__FK, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_FK');

exports = DateTimeFormatInfoImpl__en__FK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_FK.js.map