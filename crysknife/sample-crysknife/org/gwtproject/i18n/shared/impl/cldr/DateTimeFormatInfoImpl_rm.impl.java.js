goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_rm$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__rm extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__rm} */
 static $create__() {
  DateTimeFormatInfoImpl__rm.$clinit();
  let $instance = new DateTimeFormatInfoImpl__rm();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_rm__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_rm__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, 'ils' d 'da' MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d 'da' MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd-MM-y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd-MM-yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["avant Cristus", "suenter Cristus"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["av. Cr.", "s. Cr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d. MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d.M.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d 'da' MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["schaner", "favrer", "mars", "avrigl", "matg", "zercladur", "fanadur", "avust", "settember", "october", "november", "december"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "F", "M", "A", "M", "Z", "F", "A", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["schan.", "favr.", "mars", "avr.", "matg", "zercl.", "fan.", "avust", "sett.", "oct.", "nov.", "dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. quartal", "2. quartal", "3. quartal", "4. quartal"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dumengia", "glindesdi", "mardi", "mesemna", "gievgia", "venderdi", "sonda"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "G", "M", "M", "G", "V", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["du", "gli", "ma", "me", "gie", "ve", "so"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__rm.$clinit = () =>{};
  DateTimeFormatInfoImpl__rm.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__rm;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__rm, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_rm');

exports = DateTimeFormatInfoImpl__rm; 
//# sourceMappingURL=DateTimeFormatInfoImpl_rm.js.map