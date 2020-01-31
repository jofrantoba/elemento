goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yue_Hant_HK$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__yue__Hant = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yue_Hant$impl');

class DateTimeFormatInfoImpl__yue__Hant__HK extends DateTimeFormatInfoImpl__yue__Hant {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__yue__Hant__HK} */
 static $create__() {
  DateTimeFormatInfoImpl__yue__Hant__HK.$clinit();
  let $instance = new DateTimeFormatInfoImpl__yue__Hant__HK();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yue_Hant_HK__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yue_Hant_HK__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yue_Hant__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__yue__Hant__HK.$clinit = () =>{};
  DateTimeFormatInfoImpl__yue__Hant__HK.$loadModules();
  DateTimeFormatInfoImpl__yue__Hant.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__yue__Hant__HK;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__yue__Hant__HK, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yue_Hant_HK');

exports = DateTimeFormatInfoImpl__yue__Hant__HK; 
//# sourceMappingURL=DateTimeFormatInfoImpl_yue_Hant_HK.js.map