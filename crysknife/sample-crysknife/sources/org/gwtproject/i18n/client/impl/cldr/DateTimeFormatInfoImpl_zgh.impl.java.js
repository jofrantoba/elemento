goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zgh$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__zgh extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zgh} */
 static $create__() {
  DateTimeFormatInfoImpl__zgh.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zgh();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zgh__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zgh__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D5C\u2D49\u2D3C\u2D30\u2D61\u2D5C", "\u2D5C\u2D30\u2D37\u2D33\u2D33\u2D6F\u2D30\u2D5C"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D37\u2D30\u2D5C \u2D4F \u2D44\u2D49\u2D59\u2D30", "\u2D37\u2D3C\u2D3C\u2D49\u2D54 \u2D4F \u2D44\u2D49\u2D59\u2D30"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D37\u2D30\u2D44", "\u2D37\u2D3C\u2D44"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "m:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "MMM";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d MMMM";
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
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D49\u2D4F\u2D4F\u2D30\u2D62\u2D54", "\u2D31\u2D55\u2D30\u2D62\u2D55", "\u2D4E\u2D30\u2D55\u2D5A", "\u2D49\u2D31\u2D54\u2D49\u2D54", "\u2D4E\u2D30\u2D62\u2D62\u2D53", "\u2D62\u2D53\u2D4F\u2D62\u2D53", "\u2D62\u2D53\u2D4D\u2D62\u2D53\u2D63", "\u2D56\u2D53\u2D5B\u2D5C", "\u2D5B\u2D53\u2D5C\u2D30\u2D4F\u2D31\u2D49\u2D54", "\u2D3D\u2D5C\u2D53\u2D31\u2D54", "\u2D4F\u2D53\u2D61\u2D30\u2D4F\u2D31\u2D49\u2D54", "\u2D37\u2D53\u2D4A\u2D30\u2D4F\u2D31\u2D49\u2D54"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D49", "\u2D31", "\u2D4E", "\u2D49", "\u2D4E", "\u2D62", "\u2D62", "\u2D56", "\u2D5B", "\u2D3D", "\u2D4F", "\u2D37"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D49\u2D4F\u2D4F", "\u2D31\u2D55\u2D30", "\u2D4E\u2D30\u2D55", "\u2D49\u2D31\u2D54", "\u2D4E\u2D30\u2D62", "\u2D62\u2D53\u2D4F", "\u2D62\u2D53\u2D4D", "\u2D56\u2D53\u2D5B", "\u2D5B\u2D53\u2D5C", "\u2D3D\u2D5C\u2D53", "\u2D4F\u2D53\u2D61", "\u2D37\u2D53\u2D4A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D30\u2D3D\u2D55\u2D30\u2D39\u2D62\u2D53\u2D54 1", "\u2D30\u2D3D\u2D55\u2D30\u2D39\u2D62\u2D53\u2D54 2", "\u2D30\u2D3D\u2D55\u2D30\u2D39\u2D62\u2D53\u2D54 3", "\u2D30\u2D3D\u2D55\u2D30\u2D39\u2D62\u2D53\u2D54 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D30\u2D3D 1", "\u2D30\u2D3D 2", "\u2D30\u2D3D 3", "\u2D30\u2D3D 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59", "\u2D30\u2D62\u2D4F\u2D30\u2D59", "\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59", "\u2D30\u2D3D\u2D55\u2D30\u2D59", "\u2D30\u2D3D\u2D61\u2D30\u2D59", "\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59", "\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u2D30\u2D59\u2D30", "\u2D30\u2D62\u2D4F", "\u2D30\u2D59\u2D49", "\u2D30\u2D3D\u2D55", "\u2D30\u2D3D\u2D61", "\u2D30\u2D59\u2D49\u2D4E", "\u2D30\u2D59\u2D49\u2D39"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zgh.$clinit = () =>{};
  DateTimeFormatInfoImpl__zgh.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zgh;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zgh, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zgh');

exports = DateTimeFormatInfoImpl__zgh; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zgh.js.map