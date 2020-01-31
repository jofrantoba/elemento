goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ast$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ast extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ast} */
 static $create__() {
  DateTimeFormatInfoImpl__ast.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ast();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ast__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ast__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'a' 'les' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'a' 'les' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["enantes de Cristu", "despu\u00E9s de Cristu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["e.C.", "d.C."], j_l_String));
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
  return "EEEE, d MMMM";
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
  return "LLLL 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM 'de' y";
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
  return "EEE, d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["de xineru", "de febreru", "de marzu", "d\u2019abril", "de mayu", "de xunu", "de xunetu", "d\u2019agostu", "de setiembre", "d\u2019ochobre", "de payares", "d\u2019avientu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["xineru", "febreru", "marzu", "abril", "mayu", "xunu", "xunetu", "agostu", "setiembre", "ochobre", "payares", "avientu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["X", "F", "M", "A", "M", "X", "X", "A", "S", "O", "P", "A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["xin", "feb", "mar", "abr", "may", "xun", "xnt", "ago", "set", "och", "pay", "avi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Xin", "Feb", "Mar", "Abr", "May", "Xun", "Xnt", "Ago", "Set", "Och", "Pay", "Avi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1er trimestre", "2u trimestre", "3er trimestre", "4u trimestre"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1T", "2T", "3T", "4T"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["domingu", "llunes", "martes", "mi\u00E9rcoles", "xueves", "vienres", "s\u00E1badu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "L", "M", "M", "X", "V", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dom", "llu", "mar", "mi\u00E9", "xue", "vie", "s\u00E1b"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ast.$clinit = () =>{};
  DateTimeFormatInfoImpl__ast.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ast;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ast, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ast');

exports = DateTimeFormatInfoImpl__ast; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ast.js.map