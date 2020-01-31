goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_PH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__PH extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__PH} */
 static $create__() {
  DateTimeFormatInfoImpl__en__PH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__PH();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_PH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_PH__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__PH.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__PH.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__PH;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__PH, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_PH');

exports = DateTimeFormatInfoImpl__en__PH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_PH.js.map