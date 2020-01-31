goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ru_MD$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ru = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ru$impl');

class DateTimeFormatInfoImpl__ru__MD extends DateTimeFormatInfoImpl__ru {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ru__MD} */
 static $create__() {
  DateTimeFormatInfoImpl__ru__MD.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ru__MD();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ru_MD__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ru_MD__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ru__();
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ru__MD.$clinit = () =>{};
  DateTimeFormatInfoImpl__ru__MD.$loadModules();
  DateTimeFormatInfoImpl__ru.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ru__MD;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ru__MD, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ru_MD');

exports = DateTimeFormatInfoImpl__ru__MD; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ru_MD.js.map