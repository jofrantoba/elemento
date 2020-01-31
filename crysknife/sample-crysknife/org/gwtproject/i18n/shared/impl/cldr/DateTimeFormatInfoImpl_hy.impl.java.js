goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_hy$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__hy extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__hy} */
 static $create__() {
  DateTimeFormatInfoImpl__hy.$clinit();
  let $instance = new DateTimeFormatInfoImpl__hy();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_hy__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_hy__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y \u0569. MMMM d, EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd MMMM, y \u0569.";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd MMM, y \u0569.";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0554\u0580\u056B\u057D\u057F\u0578\u057D\u056B\u0581 \u0561\u057C\u0561\u057B", "\u0554\u0580\u056B\u057D\u057F\u0578\u057D\u056B\u0581 \u0570\u0565\u057F\u0578"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0574.\u0569.\u0561.", "\u0574.\u0569."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "d MMMM, EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd.MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y \u0569. LLL";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y \u0569.";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y \u0569\u2024 LLLL";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y \u0569.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y \u0569. MMM d, EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y \u0569. QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y \u0569. Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0570\u0578\u0582\u0576\u057E\u0561\u0580\u056B", "\u0583\u0565\u057F\u0580\u057E\u0561\u0580\u056B", "\u0574\u0561\u0580\u057F\u056B", "\u0561\u057A\u0580\u056B\u056C\u056B", "\u0574\u0561\u0575\u056B\u057D\u056B", "\u0570\u0578\u0582\u0576\u056B\u057D\u056B", "\u0570\u0578\u0582\u056C\u056B\u057D\u056B", "\u0585\u0563\u0578\u057D\u057F\u0578\u057D\u056B", "\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580\u056B", "\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B", "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056B", "\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0570\u0578\u0582\u0576\u057E\u0561\u0580", "\u0583\u0565\u057F\u0580\u057E\u0561\u0580", "\u0574\u0561\u0580\u057F", "\u0561\u057A\u0580\u056B\u056C", "\u0574\u0561\u0575\u056B\u057D", "\u0570\u0578\u0582\u0576\u056B\u057D", "\u0570\u0578\u0582\u056C\u056B\u057D", "\u0585\u0563\u0578\u057D\u057F\u0578\u057D", "\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580", "\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580", "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0540", "\u0553", "\u0544", "\u0531", "\u0544", "\u0540", "\u0540", "\u0555", "\u054D", "\u0540", "\u0546", "\u0534"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0570\u0576\u057E", "\u0583\u057F\u057E", "\u0574\u0580\u057F", "\u0561\u057A\u0580", "\u0574\u0575\u057D", "\u0570\u0576\u057D", "\u0570\u056C\u057D", "\u0585\u0563\u057D", "\u057D\u0565\u057A", "\u0570\u0578\u056F", "\u0576\u0578\u0575", "\u0564\u0565\u056F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u056B\u0576 \u0565\u057C\u0561\u0574\u057D\u0575\u0561\u056F", "2-\u0580\u0564 \u0565\u057C\u0561\u0574\u057D\u0575\u0561\u056F", "3-\u0580\u0564 \u0565\u057C\u0561\u0574\u057D\u0575\u0561\u056F", "4-\u0580\u0564 \u0565\u057C\u0561\u0574\u057D\u0575\u0561\u056F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u056B\u0576 \u0565\u057C\u0574\u057D.", "2-\u0580\u0564 \u0565\u057C\u0574\u057D.", "3-\u0580\u0564 \u0565\u057C\u0574\u057D.", "4-\u0580\u0564 \u0565\u057C\u0574\u057D."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u056F\u056B\u0580\u0561\u056F\u056B", "\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B", "\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B", "\u0578\u0582\u0580\u0562\u0561\u0569", "\u0577\u0561\u0562\u0561\u0569"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u053F", "\u0535", "\u0535", "\u0549", "\u0540", "\u0548", "\u0547"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u056F\u056B\u0580", "\u0565\u0580\u056F", "\u0565\u0580\u0584", "\u0579\u0580\u0584", "\u0570\u0576\u0563", "\u0578\u0582\u0580", "\u0577\u0562\u0569"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__hy.$clinit = () =>{};
  DateTimeFormatInfoImpl__hy.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__hy;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__hy, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_hy');

exports = DateTimeFormatInfoImpl__hy; 
//# sourceMappingURL=DateTimeFormatInfoImpl_hy.js.map