goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_CL$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__CL extends DateTimeFormatInfoImpl__es__419 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__CL} */
 static $create__() {
  DateTimeFormatInfoImpl__es__CL.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__CL();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_CL__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_CL__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_419__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a. m.", "p. m."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd-MM-y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd-MM-yy";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd-MM-y";
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__CL.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__CL.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__CL;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__CL, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_CL');

exports = DateTimeFormatInfoImpl__es__CL; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_CL.js.map