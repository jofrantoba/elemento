goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fi$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__fi extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fi} */
 static $create__() {
  DateTimeFormatInfoImpl__fi.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fi();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fi__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fi__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ap.", "ip."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "cccc d. MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d. MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'klo' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'klo' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'klo' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ennen Kristuksen syntym\u00E4\u00E4", "j\u00E4lkeen Kristuksen syntym\u00E4n"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["eKr.", "jKr."], j_l_String));
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
  return "m.ss";
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
  return "cccc d. MMMM";
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
  return "d. MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "LLLL y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d. MMMM y";
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
  return "EEE d. MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kes\u00E4kuuta", "hein\u00E4kuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\u00E4kuu", "hein\u00E4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["tammik.", "helmik.", "maalisk.", "huhtik.", "toukok.", "kes\u00E4k.", "hein\u00E4k.", "elok.", "syysk.", "lokak.", "marrask.", "jouluk."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["tammi", "helmi", "maalis", "huhti", "touko", "kes\u00E4", "hein\u00E4", "elo", "syys", "loka", "marras", "joulu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. nelj\u00E4nnes", "2. nelj\u00E4nnes", "3. nelj\u00E4nnes", "4. nelj\u00E4nnes"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "T", "K", "T", "P", "L"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["su", "ma", "ti", "ke", "to", "pe", "la"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fi.$clinit = () =>{};
  DateTimeFormatInfoImpl__fi.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fi;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fi, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fi');

exports = DateTimeFormatInfoImpl__fi; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fi.js.map