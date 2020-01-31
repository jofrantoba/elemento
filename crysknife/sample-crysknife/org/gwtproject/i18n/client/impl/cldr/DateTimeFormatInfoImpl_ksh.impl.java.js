goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ksh$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ksh extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ksh} */
 static $create__() {
  DateTimeFormatInfoImpl__ksh.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ksh();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ksh__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ksh__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["v.M.", "n.M."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, 'd\u00E4' d. MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d. MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d. MMM. y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d. M. y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["v\u00FCr Krestos", "noh Krestos"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["v. Chr.", "n. Chr."], j_l_String));
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
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d. MMM. y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d. MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "Y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d. MMM. y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Qy";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jannewa", "F\u00E4browa", "M\u00E4\u00E4z", "Aprell", "Mai", "Juuni", "Juuli", "Oujo\u00DF", "Sept\u00E4mber", "Oktohber", "Nov\u00E4mber", "Dez\u00E4mber"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan", "F\u00E4b", "M\u00E4z", "Apr", "Mai", "Jun", "Jul", "Ouj", "S\u00E4p", "Okt", "Nov", "Dez"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan.", "F\u00E4b.", "M\u00E4z.", "Apr.", "Mai", "Jun.", "Jul.", "Ouj.", "S\u00E4p.", "Okt.", "Nov.", "Dez."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. Quattahl", "2. Quattahl", "3. Quattahl", "4. Quattahl"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.Q.", "2.Q.", "3.Q.", "4.Q."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sunndaach", "Mohndaach", "Dinnsdaach", "Metwoch", "Dunnersdaach", "Friidaach", "Samsdaach"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "D", "M", "D", "F", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Su.", "Mo.", "Di.", "Me.", "Du.", "Fr.", "Sa."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ksh.$clinit = () =>{};
  DateTimeFormatInfoImpl__ksh.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ksh;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ksh, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ksh');

exports = DateTimeFormatInfoImpl__ksh; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ksh.js.map