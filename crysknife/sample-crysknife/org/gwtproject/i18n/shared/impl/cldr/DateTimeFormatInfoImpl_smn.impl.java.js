goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_smn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__smn extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__smn} */
 static $create__() {
  DateTimeFormatInfoImpl__smn.$clinit();
  let $instance = new DateTimeFormatInfoImpl__smn();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_smn__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_smn__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ip.", "ep."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "cccc, MMMM d. y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "MMMM d. y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "MMM d. y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'tme' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'tme' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'tme' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ovdil Kristus \u0161odd\u00E2m", "ma\u014Ba Kristus \u0161odd\u00E2m"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["oKr.", "mKr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "h.mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h.mm.ss a";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "H.mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "H.mm.ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "m.ss.";
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
  return "EEEE, MMMM d.";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d.M.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "LLL y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "MMM d. y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "LLLL y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "MMMM d. y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "L.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "ccc, MMM d. y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["u\u0111\u0111\u00E2ivem\u00E1\u00E1nu", "kuov\u00E2m\u00E1\u00E1nu", "njuh\u010D\u00E2m\u00E1\u00E1nu", "cu\u00E1\u014Buim\u00E1\u00E1nu", "vyesim\u00E1\u00E1nu", "kesim\u00E1\u00E1nu", "syeinim\u00E1\u00E1nu", "porgem\u00E1\u00E1nu", "\u010Doh\u010D\u00E2m\u00E1\u00E1nu", "roovv\u00E2dm\u00E1\u00E1nu", "skamm\u00E2m\u00E1\u00E1nu", "juovl\u00E2m\u00E1\u00E1nu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["U", "K", "NJ", "C", "V", "K", "S", "P", "\u010C", "R", "S", "J"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["u\u0111iv", "kuov\u00E2", "njuh\u010D\u00E2", "cu\u00E1\u014Bui", "vyesi", "kesi", "syeini", "porge", "\u010Doh\u010D\u00E2", "roovv\u00E2d", "skamm\u00E2", "juovl\u00E2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. ni\u00E4lj\u00E1d\u00E2s", "2. ni\u00E4lj\u00E1d\u00E2s", "3. ni\u00E4lj\u00E1d\u00E2s", "4. ni\u00E4lj\u00E1d\u00E2s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. ni\u00E4lj.", "2. ni\u00E4lj.", "3. ni\u00E4lj.", "4. ni\u00E4lj."], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "H.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "H.mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pasepeeivi", "vuossaarg\u00E2", "majebaarg\u00E2", "koskoho", "tuor\u00E2stuv", "v\u00E1stuppeeivi", "l\u00E1vurduv"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pasepeivi", "vuossarg\u00E2", "majebarg\u00E2", "koskokko", "tuor\u00E2st\u00E2h", "v\u00E1stuppeivi", "l\u00E1vurd\u00E2h"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["p", "V", "M", "K", "T", "V", "L"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pas", "vuo", "maj", "kos", "tuo", "v\u00E1s", "l\u00E1v"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__smn.$clinit = () =>{};
  DateTimeFormatInfoImpl__smn.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__smn;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__smn, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_smn');

exports = DateTimeFormatInfoImpl__smn; 
//# sourceMappingURL=DateTimeFormatInfoImpl_smn.js.map