goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_dz$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__dz extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__dz} */
 static $create__() {
  DateTimeFormatInfoImpl__dz.$clinit();
  let $instance = new DateTimeFormatInfoImpl__dz();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_dz__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_dz__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F66\u0F94\u0F0B\u0F46\u0F0B", "\u0F55\u0FB1\u0F72\u0F0B\u0F46\u0F0B"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, \u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By MMMM \u0F5A\u0F7A\u0F66\u0F0Bdd";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By MMMM \u0F5A\u0F7A\u0F66\u0F0B dd";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By \u0F5F\u0FB3\u0F0BMMM \u0F5A\u0F7A\u0F66\u0F0Bdd";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B h \u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0Bh:mm:ss a";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "\u0F66\u0FA4\u0FB1\u0F72\u0F0BLLL";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "\u0F66\u0FA4\u0FB1\u0F72\u0F0BLLL \u0F5A\u0F7A\u0F0Bd";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "\u0F66\u0FA4\u0FB1\u0F72\u0F0BLLLL";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, \u0F66\u0FA4\u0FB1\u0F72\u0F0BLLLL \u0F5A\u0F7A\u0F0Bd";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y \u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0BMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By MMMM \u0F5A\u0F7A\u0F66\u0F0B d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-M";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "\u0F42\u0F5F\u0F60\u0F0BEEE, \u0F63\u0F7Cy \u0F5F\u0FB3\u0F0BMMM \u0F5A\u0F7A\u0F0Bd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F5F\u0FB3\u0F0B\u0F51\u0F44\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F63\u0F94\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54", "\u0F5F\u0FB3\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F51\u0F44\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F63\u0F94\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F21", "\u0F22", "\u0F23", "4", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "9", "\u0F21\u0F20", "\u0F21\u0F21", "\u0F21\u0F22"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29", "\u0F21\u0F20", "\u0F21\u0F21", "\u0F21\u0F22"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29", "\u0F21\u0F20", "\u0F21\u0F21", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F5F\u0FB3\u0F0B\u0F21", "\u0F5F\u0FB3\u0F0B\u0F22", "\u0F5F\u0FB3\u0F0B\u0F23", "\u0F5F\u0FB3\u0F0B\u0F24", "\u0F5F\u0FB3\u0F0B\u0F25", "\u0F5F\u0FB3\u0F0B\u0F26", "\u0F5F\u0FB3\u0F0B\u0F27", "\u0F5F\u0FB3\u0F0B\u0F28", "\u0F5F\u0FB3\u0F0B\u0F29", "\u0F5F\u0FB3\u0F0B\u0F21\u0F20", "\u0F5F\u0FB3\u0F0B\u0F21\u0F21", "\u0F5F\u0FB3\u0F0B\u0F21\u0F22"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F51\u0F44\u0F0B\u0F54\u0F0B", "\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B", "\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54\u0F0B", "\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54\u0F0B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F21", "\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F22", "\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F23", "\u0F56\u0F5E\u0F72\u0F0B\u0F51\u0F54\u0FB1\u0F0B\u0F24"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B h \u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B h \u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0Bh:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B h \u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B mm a";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F42\u0F5F\u0F60\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F49\u0F72\u0F0B\u0F58\u0F0B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F5F\u0FB3", "\u0F58\u0F72\u0F62", "\u0F63\u0FB7\u0F42", "\u0F55\u0F74\u0F62", "\u0F66\u0F44\u0FB6", "\u0F66\u0FA4\u0F7A\u0F53", "\u0F49\u0F72"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0F5F\u0FB3\u0F0B", "\u0F58\u0F72\u0F62\u0F0B", "\u0F63\u0FB7\u0F42\u0F0B", "\u0F55\u0F74\u0F62\u0F0B", "\u0F66\u0F44\u0F66\u0F0B", "\u0F66\u0FA4\u0F7A\u0F53\u0F0B", "\u0F49\u0F72\u0F0B"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__dz.$clinit = () =>{};
  DateTimeFormatInfoImpl__dz.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__dz;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__dz, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_dz');

exports = DateTimeFormatInfoImpl__dz; 
//# sourceMappingURL=DateTimeFormatInfoImpl_dz.js.map