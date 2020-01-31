goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_xog$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__xog extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__xog} */
 static $create__() {
  DateTimeFormatInfoImpl__xog.$clinit();
  let $instance = new DateTimeFormatInfoImpl__xog();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_xog__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_xog__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Munkyo", "Eigulo"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
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
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kulisto nga azilawo", "Kulisto nga affile"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AZ", "AF"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M/d";
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
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, MMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Janwaliyo", "Febwaliyo", "Marisi", "Apuli", "Maayi", "Juuni", "Julaayi", "Agusito", "Sebuttemba", "Okitobba", "Novemba", "Desemba"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan", "Feb", "Mar", "Apu", "Maa", "Juu", "Jul", "Agu", "Seb", "Oki", "Nov", "Des"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ebisera ebyomwaka ebisoka", "Ebisera ebyomwaka ebyokubiri", "Ebisera ebyomwaka ebyokusatu", "Ebisera ebyomwaka ebyokuna"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sabiiti", "Balaza", "Owokubili", "Owokusatu", "Olokuna", "Olokutaanu", "Olomukaaga"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "B", "B", "S", "K", "K", "M"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sabi", "Bala", "Kubi", "Kusa", "Kuna", "Kuta", "Muka"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__xog.$clinit = () =>{};
  DateTimeFormatInfoImpl__xog.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__xog;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__xog, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_xog');

exports = DateTimeFormatInfoImpl__xog; 
//# sourceMappingURL=DateTimeFormatInfoImpl_xog.js.map