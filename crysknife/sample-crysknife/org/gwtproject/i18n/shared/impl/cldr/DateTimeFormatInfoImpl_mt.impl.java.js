goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_mt$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mt extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mt} */
 static $create__() {
  DateTimeFormatInfoImpl__mt.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mt();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_mt__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_mt__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d 'ta'\u2019 MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d 'ta'\u2019 MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Qabel Kristu", "Wara Kristu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["QK", "WK"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d 'ta'\u2019 MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d 'ta'\u2019 MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d 'ta'\u2019 MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d 'ta'\u2019 MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d 'ta'\u2019 MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ - y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q - y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jannar", "Frar", "Marzu", "April", "Mejju", "\u0120unju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Di\u010Bembru"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J", "F", "M", "A", "M", "\u0120", "L", "A", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jn", "Fr", "Mz", "Ap", "Mj", "\u0120n", "Lj", "Aw", "St", "Ob", "Nv", "D\u010B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan", "Fra", "Mar", "Apr", "Mej", "\u0120un", "Lul", "Aww", "Set", "Ott", "Nov", "Di\u010B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1el kwart", "2ni kwart", "3et kwart", "4ba\u2019 kwart"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K1", "K2", "K3", "K4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Il-\u0126add", "It-Tnejn", "It-Tlieta", "L-Erbg\u0127a", "Il-\u0126amis", "Il-\u0120img\u0127a", "Is-Sibt"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0126d", "T", "Tl", "Er", "\u0126m", "\u0120m", "Sb"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0126d", "Tn", "Tl", "Er", "\u0126m", "\u0120m", "Sb"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0126ad", "Tne", "Tli", "Erb", "\u0126am", "\u0120im", "Sib"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mt.$clinit = () =>{};
  DateTimeFormatInfoImpl__mt.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mt;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mt, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_mt');

exports = DateTimeFormatInfoImpl__mt; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mt.js.map