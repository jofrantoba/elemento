goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_CN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh__Hans = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

class DateTimeFormatInfoImpl__zh__Hans__CN extends DateTimeFormatInfoImpl__zh__Hans {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zh__Hans__CN} */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans__CN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans__CN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_CN__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans_CN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hans__CN.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans__CN.$loadModules();
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans__CN;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans__CN, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hans_CN');

exports = DateTimeFormatInfoImpl__zh__Hans__CN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans_CN.js.map