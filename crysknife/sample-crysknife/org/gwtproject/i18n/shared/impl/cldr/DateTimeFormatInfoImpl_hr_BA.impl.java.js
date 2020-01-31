goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_hr_BA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__hr = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_hr$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__hr__BA extends DateTimeFormatInfoImpl__hr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__hr__BA} */
 static $create__() {
  DateTimeFormatInfoImpl__hr__BA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__hr__BA();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_hr_BA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_hr_BA__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_hr__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d. M. yy.";
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. kv.", "2. kv.", "3. kv.", "4. kv."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["N", "P", "U", "S", "\u010C", "P", "S"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__hr__BA.$clinit = () =>{};
  DateTimeFormatInfoImpl__hr__BA.$loadModules();
  DateTimeFormatInfoImpl__hr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__hr__BA;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__hr__BA, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_hr_BA');

exports = DateTimeFormatInfoImpl__hr__BA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_hr_BA.js.map