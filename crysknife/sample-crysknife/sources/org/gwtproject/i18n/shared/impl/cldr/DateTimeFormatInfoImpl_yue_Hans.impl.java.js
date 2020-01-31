goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yue_Hans$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__yue = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yue$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__yue__Hans extends DateTimeFormatInfoImpl__yue {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__yue__Hans} */
 static $create__() {
  DateTimeFormatInfoImpl__yue__Hans.$clinit();
  let $instance = new DateTimeFormatInfoImpl__yue__Hans();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yue_Hans__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yue_Hans__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_yue__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y\u5E74M\u6708d\u65E5EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "M\u6708d\u65E5EEEE";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y\u5E74M\u6708";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y\u5E74M\u6708d\u65E5EEE";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "zzzz ah:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "z ah:mm:ss";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__yue__Hans.$clinit = () =>{};
  DateTimeFormatInfoImpl__yue__Hans.$loadModules();
  DateTimeFormatInfoImpl__yue.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__yue__Hans;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__yue__Hans, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_yue_Hans');

exports = DateTimeFormatInfoImpl__yue__Hans; 
//# sourceMappingURL=DateTimeFormatInfoImpl_yue_Hans.js.map