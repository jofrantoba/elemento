goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_be$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__be extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__be}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__be.$clinit();
  let $instance = new DateTimeFormatInfoImpl__be();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_be__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_be__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y '\u0433'.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "d MMMM y '\u0433'.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "d.MM.y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "d.MM.yy";
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeFull__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u0443' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeLong__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u0443' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeMedium__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeShort__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0434\u0430 \u043D\u0430\u0440\u0430\u0434\u0436\u044D\u043D\u043D\u044F \u0425\u0440\u044B\u0441\u0442\u043E\u0432\u0430", "\u0430\u0434 \u043D\u0430\u0440\u0430\u0434\u0436\u044D\u043D\u043D\u044F \u0425\u0440\u044B\u0441\u0442\u043E\u0432\u0430"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMinuteSecond__() {
  return "mm.ss";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullDay__() {
  return "d MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "d.M";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "LLL y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "LLLL y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "d MMMM y '\u0433'.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "M.y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F", "\u043B\u044E\u0442\u0430\u0433\u0430", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430", "\u043C\u0430\u044F", "\u0447\u044D\u0440\u0432\u0435\u043D\u044F", "\u043B\u0456\u043F\u0435\u043D\u044F", "\u0436\u043D\u0456\u045E\u043D\u044F", "\u0432\u0435\u0440\u0430\u0441\u043D\u044F", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430", "\u0441\u043D\u0435\u0436\u043D\u044F"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C", "\u043B\u044E\u0442\u044B", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A", "\u043C\u0430\u0439", "\u0447\u044D\u0440\u0432\u0435\u043D\u044C", "\u043B\u0456\u043F\u0435\u043D\u044C", "\u0436\u043D\u0456\u0432\u0435\u043D\u044C", "\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434", "\u0441\u043D\u0435\u0436\u0430\u043D\u044C"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0441", "\u043B", "\u0441", "\u043A", "\u043C", "\u0447", "\u043B", "\u0436", "\u0432", "\u043A", "\u043B", "\u0441"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0441\u0442\u0443", "\u043B\u044E\u0442", "\u0441\u0430\u043A", "\u043A\u0440\u0430", "\u043C\u0430\u044F", "\u0447\u044D\u0440", "\u043B\u0456\u043F", "\u0436\u043D\u0456", "\u0432\u0435\u0440", "\u043A\u0430\u0441", "\u043B\u0456\u0441", "\u0441\u043D\u0435"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0441\u0442\u0443", "\u043B\u044E\u0442", "\u0441\u0430\u043A", "\u043A\u0440\u0430", "\u043C\u0430\u0439", "\u0447\u044D\u0440", "\u043B\u0456\u043F", "\u0436\u043D\u0456", "\u0432\u0435\u0440", "\u043A\u0430\u0441", "\u043B\u0456\u0441", "\u0441\u043D\u0435"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1-\u0448\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0433\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0446\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0442\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1-\u0448\u044B \u043A\u0432.", "2-\u0433\u0456 \u043A\u0432.", "3-\u0446\u0456 \u043A\u0432.", "4-\u0442\u044B \u043A\u0432."], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "HH:mm:ss, zzzz";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D\u044F\u0434\u0437\u0435\u043B\u044F", "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0430\u045E\u0442\u043E\u0440\u0430\u043A", "\u0441\u0435\u0440\u0430\u0434\u0430", "\u0447\u0430\u0446\u0432\u0435\u0440", "\u043F\u044F\u0442\u043D\u0456\u0446\u0430", "\u0441\u0443\u0431\u043E\u0442\u0430"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D", "\u043F", "\u0430", "\u0441", "\u0447", "\u043F", "\u0441"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D\u0434", "\u043F\u043D", "\u0430\u045E", "\u0441\u0440", "\u0447\u0446", "\u043F\u0442", "\u0441\u0431"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__be.$clinit = () =>{};
  DateTimeFormatInfoImpl__be.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__be;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__be, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_be');

exports = DateTimeFormatInfoImpl__be; 
//# sourceMappingURL=DateTimeFormatInfoImpl_be.js.map