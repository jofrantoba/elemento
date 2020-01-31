goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_de_AT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__de = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_de$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__de__AT extends DateTimeFormatInfoImpl__de {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__de__AT} */
 static $create__() {
  DateTimeFormatInfoImpl__de__AT.$clinit();
  let $instance = new DateTimeFormatInfoImpl__de__AT();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_de_AT__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_de_AT__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_de__();
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J\u00E4nner", "Februar", "M\u00E4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J\u00E4n.", "Feb.", "M\u00E4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J\u00E4n", "Feb", "M\u00E4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__de__AT.$clinit = () =>{};
  DateTimeFormatInfoImpl__de__AT.$loadModules();
  DateTimeFormatInfoImpl__de.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__de__AT;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__de__AT, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_de_AT');

exports = DateTimeFormatInfoImpl__de__AT; 
//# sourceMappingURL=DateTimeFormatInfoImpl_de_AT.js.map