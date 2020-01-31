goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ta_SG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ta = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ta$impl');

class DateTimeFormatInfoImpl__ta__SG extends DateTimeFormatInfoImpl__ta {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ta__SG} */
 static $create__() {
  DateTimeFormatInfoImpl__ta__SG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ta__SG();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ta_SG__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ta_SG__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ta__();
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ta__SG.$clinit = () =>{};
  DateTimeFormatInfoImpl__ta__SG.$loadModules();
  DateTimeFormatInfoImpl__ta.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ta__SG;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ta__SG, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ta_SG');

exports = DateTimeFormatInfoImpl__ta__SG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ta_SG.js.map