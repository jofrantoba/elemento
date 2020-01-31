goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_JE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__JE extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__JE} */
 static $create__() {
  DateTimeFormatInfoImpl__en__JE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__JE();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_JE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_JE__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__JE.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__JE.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__JE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__JE, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_JE');

exports = DateTimeFormatInfoImpl__en__JE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_JE.js.map