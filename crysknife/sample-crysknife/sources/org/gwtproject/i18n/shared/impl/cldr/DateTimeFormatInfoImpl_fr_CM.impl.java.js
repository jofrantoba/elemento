goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_CM$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__fr__CM extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__CM} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__CM.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__CM();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_CM__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr_CM__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["mat.", "soir"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "h:mm";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h:mm:ss";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fr__CM.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__CM.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__CM;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__CM, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_fr_CM');

exports = DateTimeFormatInfoImpl__fr__CM; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_CM.js.map