goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_TT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__TT extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__TT} */
 static $create__() {
  DateTimeFormatInfoImpl__en__TT.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__TT();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_TT__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_TT__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__TT.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__TT.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__TT;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__TT, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_TT');

exports = DateTimeFormatInfoImpl__en__TT; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_TT.js.map