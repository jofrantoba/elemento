goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kkj$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kkj extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kkj} */
 static $create__() {
  DateTimeFormatInfoImpl__kkj.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kkj();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kkj__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kkj__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd/MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd/MM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d MMM y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pamba", "wanja", "mbiy\u0254 m\u025Bndo\u014Bg\u0254", "Ny\u0254l\u0254mb\u0254\u014Bg\u0254", "M\u0254n\u0254 \u014Bgbanja", "Nya\u014Bgw\u025B \u014Bgbanja", "ku\u014Bgw\u025B", "f\u025B", "njapi", "nyukul", "11", "\u0253ul\u0253us\u025B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pamba", "wanja", "mbiy\u0254 m\u025Bndo\u014Bg\u0254", "Ny\u0254l\u0254mb\u0254\u014Bg\u0254", "M\u0254n\u0254 \u014Bgbanja", "Nya\u014Bgw\u025B \u014Bgbanja", "ku\u014Bgw\u025B", "f\u025B", "njapi", "nyukul", "11", "\u0253ul\u0253us\u025B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u0254ndi", "lundi", "mardi", "m\u025Brk\u025Br\u025Bdi", "yedi", "va\u014Bd\u025Br\u025Bdi", "m\u0254n\u0254 s\u0254ndi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["so", "lu", "ma", "m\u025B", "ye", "va", "ms"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u0254ndi", "lundi", "mardi", "m\u025Brk\u025Br\u025Bdi", "yedi", "va\u014Bd\u025Br\u025Bdi", "m\u0254n\u0254 s\u0254ndi"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kkj.$clinit = () =>{};
  DateTimeFormatInfoImpl__kkj.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kkj;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kkj, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kkj');

exports = DateTimeFormatInfoImpl__kkj; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kkj.js.map