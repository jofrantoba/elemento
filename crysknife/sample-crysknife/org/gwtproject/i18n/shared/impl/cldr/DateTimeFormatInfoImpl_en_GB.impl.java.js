goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_GB$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__GB extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__GB} */
 static $create__() {
  DateTimeFormatInfoImpl__en__GB.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__GB();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_GB__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_GB__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__GB.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__GB.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__GB;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__GB, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_GB');

exports = DateTimeFormatInfoImpl__en__GB; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_GB.js.map