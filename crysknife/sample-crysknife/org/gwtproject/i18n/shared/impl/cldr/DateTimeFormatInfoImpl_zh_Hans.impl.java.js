goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh$impl');

class DateTimeFormatInfoImpl__zh__Hans extends DateTimeFormatInfoImpl__zh {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zh__Hans} */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hans.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hans();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh_Hans__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_zh__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hans.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hans.$loadModules();
  DateTimeFormatInfoImpl__zh.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hans;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hans, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_zh_Hans');

exports = DateTimeFormatInfoImpl__zh__Hans; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hans.js.map