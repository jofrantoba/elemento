goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__tr extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__tr} */
 static $create__() {
  DateTimeFormatInfoImpl__tr.$clinit();
  let $instance = new DateTimeFormatInfoImpl__tr();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tr__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tr__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00D6\u00D6", "\u00D6S"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "d MMMM y EEEE";
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
  return "d.MM.y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Milattan \u00D6nce", "Milattan Sonra"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["M\u00D6", "MS"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "a h:mm";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "a h:mm:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "d MMMM EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
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
  return "MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "d MMM y EEE";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\u00FCl", "Ekim", "Kas\u0131m", "Aral\u0131k"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["O", "\u015E", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Oca", "\u015Eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011Fu", "Eyl", "Eki", "Kas", "Ara"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. \u00E7eyrek", "2. \u00E7eyrek", "3. \u00E7eyrek", "4. \u00E7eyrek"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00C71", "\u00C72", "\u00C73", "\u00C74"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Pazar", "Pazartesi", "Sal\u0131", "\u00C7ar\u015Famba", "Per\u015Fembe", "Cuma", "Cumartesi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["P", "P", "S", "\u00C7", "P", "C", "C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Paz", "Pzt", "Sal", "\u00C7ar", "Per", "Cum", "Cmt"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__tr.$clinit = () =>{};
  DateTimeFormatInfoImpl__tr.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__tr;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__tr, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tr');

exports = DateTimeFormatInfoImpl__tr; 
//# sourceMappingURL=DateTimeFormatInfoImpl_tr.js.map