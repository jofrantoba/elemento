goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_it_CH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__it = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_it$impl');

class DateTimeFormatInfoImpl__it__CH extends DateTimeFormatInfoImpl__it {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__it__CH} */
 static $create__() {
  DateTimeFormatInfoImpl__it__CH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__it__CH();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_it_CH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_it_CH__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_it__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__it__CH.$clinit = () =>{};
  DateTimeFormatInfoImpl__it__CH.$loadModules();
  DateTimeFormatInfoImpl__it.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__it__CH;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__it__CH, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_it_CH');

exports = DateTimeFormatInfoImpl__it__CH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_it_CH.js.map