goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pt$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__pt extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__pt} */
 static $create__() {
  DateTimeFormatInfoImpl__pt.$clinit();
  let $instance = new DateTimeFormatInfoImpl__pt();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pt__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pt__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d 'de' MMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["antes de Cristo", "depois de Cristo"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.C.", "d.C."], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d 'de' MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d 'de' MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d 'de' MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d 'de' MMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd/MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d 'de' MMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q 'de' y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["janeiro", "fevereiro", "mar\u00E7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1\u00BA trimestre", "2\u00BA trimestre", "3\u00BA trimestre", "4\u00BA trimestre"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["T1", "T2", "T3", "T4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["domingo", "segunda-feira", "ter\u00E7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\u00E1bado"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "S", "T", "Q", "Q", "S", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dom", "seg", "ter", "qua", "qui", "sex", "s\u00E1b"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__pt.$clinit = () =>{};
  DateTimeFormatInfoImpl__pt.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__pt;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__pt, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pt');

exports = DateTimeFormatInfoImpl__pt; 
//# sourceMappingURL=DateTimeFormatInfoImpl_pt.js.map