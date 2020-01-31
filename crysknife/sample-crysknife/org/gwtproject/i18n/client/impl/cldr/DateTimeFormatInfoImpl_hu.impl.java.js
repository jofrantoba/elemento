goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_hu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__hu extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__hu} */
 static $create__() {
  DateTimeFormatInfoImpl__hu.$clinit();
  let $instance = new DateTimeFormatInfoImpl__hu();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_hu__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_hu__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["de.", "du."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y. MMMM d., EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y. MMMM d.";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y. MMM d.";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y. MM. dd.";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Krisztus el\u0151tt", "id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["i. e.", "i. sz."], j_l_String));
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
 m_formatHour24Minute__() {
  return "H:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "H:mm:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "MMM d.";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "MMMM d.";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM d., EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M. d.";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y. MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y. MMM d.";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y. MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y. MMMM d.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y. M.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y. MM. dd.";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y. MMM d., EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y. QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y. Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["janu\u00E1r", "febru\u00E1r", "m\u00E1rcius", "\u00E1prilis", "m\u00E1jus", "j\u00FAnius", "j\u00FAlius", "augusztus", "szeptember", "okt\u00F3ber", "november", "december"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J", "F", "M", "\u00C1", "M", "J", "J", "A", "Sz", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan.", "febr.", "m\u00E1rc.", "\u00E1pr.", "m\u00E1j.", "j\u00FAn.", "j\u00FAl.", "aug.", "szept.", "okt.", "nov.", "dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I. negyed\u00E9v", "II. negyed\u00E9v", "III. negyed\u00E9v", "IV. negyed\u00E9v"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I. n.\u00E9v", "II. n.\u00E9v", "III. n.\u00E9v", "IV. n.\u00E9v"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "H:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "H:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["vas\u00E1rnap", "h\u00E9tf\u0151", "kedd", "szerda", "cs\u00FCt\u00F6rt\u00F6k", "p\u00E9ntek", "szombat"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["V", "H", "K", "Sz", "Cs", "P", "Sz"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["V", "H", "K", "Sze", "Cs", "P", "Szo"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__hu.$clinit = () =>{};
  DateTimeFormatInfoImpl__hu.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__hu;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__hu, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_hu');

exports = DateTimeFormatInfoImpl__hu; 
//# sourceMappingURL=DateTimeFormatInfoImpl_hu.js.map