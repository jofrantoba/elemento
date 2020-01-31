goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_th$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__th extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__th} */
 static $create__() {
  DateTimeFormatInfoImpl__th.$clinit();
  let $instance = new DateTimeFormatInfoImpl__th();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_th__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_th__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE\u0E17\u0E35\u0E48 d MMMM G y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM G y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E01\u0E32\u0E25", "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E01\u0E48\u0E2D\u0E19 \u0E04.\u0E28.", "\u0E04.\u0E28."], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
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
  return "EEEE\u0E17\u0E35\u0E48 d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "G y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32 mm \u0E19\u0E32\u0E17\u0E35 ss \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32 mm \u0E19\u0E32\u0E17\u0E35 ss \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 z";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C", "\u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C", "\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23", "\u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18", "\u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35", "\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C", "\u0E27\u0E31\u0E19\u0E40\u0E2A\u0E32\u0E23\u0E4C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E2D\u0E32", "\u0E08", "\u0E2D", "\u0E1E", "\u0E1E\u0E24", "\u0E28", "\u0E2A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__th.$clinit = () =>{};
  DateTimeFormatInfoImpl__th.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__th;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__th, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_th');

exports = DateTimeFormatInfoImpl__th; 
//# sourceMappingURL=DateTimeFormatInfoImpl_th.js.map