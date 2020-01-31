goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_AT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__AT extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__AT} */
 static $create__() {
  DateTimeFormatInfoImpl__en__AT.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__AT();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_AT__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_AT__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__AT.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__AT.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__AT;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__AT, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_AT');

exports = DateTimeFormatInfoImpl__en__AT; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_AT.js.map