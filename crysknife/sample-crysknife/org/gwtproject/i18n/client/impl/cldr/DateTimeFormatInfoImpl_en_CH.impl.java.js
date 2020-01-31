goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_CH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__CH extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__CH} */
 static $create__() {
  DateTimeFormatInfoImpl__en__CH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__CH();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_CH__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_CH__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__CH.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__CH.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__CH;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__CH, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_CH');

exports = DateTimeFormatInfoImpl__en__CH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_CH.js.map