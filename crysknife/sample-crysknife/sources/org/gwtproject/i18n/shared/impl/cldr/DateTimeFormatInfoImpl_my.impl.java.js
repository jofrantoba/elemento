goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_my$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__my extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__my} */
 static $create__() {
  DateTimeFormatInfoImpl__my.$clinit();
  let $instance = new DateTimeFormatInfoImpl__my();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_my__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_my__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1014\u1036\u1014\u1000\u103A", "\u100A\u1014\u1031"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y\u104A MMMM d\u104A EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y\u104A d MMMM";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y\u104A MMM d";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd-MM-yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1001\u101B\u1005\u103A\u1010\u1031\u102C\u103A \u1019\u1015\u1031\u102B\u103A\u1019\u102E\u1014\u103E\u1005\u103A", "\u1001\u101B\u1005\u103A\u1014\u103E\u1005\u103A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1018\u102E\u1005\u102E", "\u1021\u1012\u1031\u102E"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
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
  return "B H:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "B HH:mm:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM d \u101B\u1000\u103A EEEE\u1014\u1031\u1037";
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
  return "y\u104A MMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y\u104A d MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd-MM-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y\u104A MMM d\u104A EEE";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E", "\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E", "\u1019\u1010\u103A", "\u1027\u1015\u103C\u102E", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u1007\u1030\u101C\u102D\u102F\u1004\u103A", "\u1029\u1002\u102F\u1010\u103A", "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C", "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C", "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C", "\u1012\u102E\u1007\u1004\u103A\u1018\u102C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1007", "\u1016", "\u1019", "\u1027", "\u1019", "\u1007", "\u1007", "\u1029", "\u1005", "\u1021", "\u1014", "\u1012"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1007\u1014\u103A", "\u1016\u1031", "\u1019\u1010\u103A", "\u1027", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u1007\u1030", "\u1029", "\u1005\u1000\u103A", "\u1021\u1031\u102C\u1000\u103A", "\u1014\u102D\u102F", "\u1012\u102E"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1015\u1011\u1019 \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A", "\u1012\u102F\u1010\u102D\u101A \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A", "\u1010\u1010\u102D\u101A \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A", "\u1005\u1010\u102F\u1010\u1039\u1011 \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1015\u1011\u1019 \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A", "\u1012\u102F\u1010\u102D\u101A \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A", "\u1010\u1010\u102D\u101A \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A", "\u1005\u1010\u102F\u1010\u1039\u1011 \u101E\u102F\u1036\u1038\u101C\u1015\u1010\u103A"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "zzzz HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "z HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "B HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "B H:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031", "\u1010\u1014\u1004\u103A\u1039\u101C\u102C", "\u1021\u1004\u103A\u1039\u1002\u102B", "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038", "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038", "\u101E\u1031\u102C\u1000\u103C\u102C", "\u1005\u1014\u1031"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1010", "\u1010", "\u1021", "\u1017", "\u1000", "\u101E", "\u1005"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031", "\u1010\u1014\u1004\u103A\u1039\u101C\u102C", "\u1021\u1004\u103A\u1039\u1002\u102B", "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038", "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038", "\u101E\u1031\u102C\u1000\u103C\u102C", "\u1005\u1014\u1031"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__my.$clinit = () =>{};
  DateTimeFormatInfoImpl__my.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__my;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__my, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_my');

exports = DateTimeFormatInfoImpl__my; 
//# sourceMappingURL=DateTimeFormatInfoImpl_my.js.map