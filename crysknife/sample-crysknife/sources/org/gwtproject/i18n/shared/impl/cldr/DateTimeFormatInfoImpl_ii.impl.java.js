goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ii$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ii extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ii}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ii.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ii();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ii__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ii__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA3B8\uA111", "\uA06F\uA2D2"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA0C5\uA2CA\uA0BF", "\uA0C5\uA2CA\uA282"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA0C5\uA2CA\uA0BF", "\uA0C5\uA2CA\uA282"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA2CD\uA1AA", "\uA44D\uA1AA", "\uA315\uA1AA", "\uA1D6\uA1AA", "\uA26C\uA1AA", "\uA0D8\uA1AA", "\uA3C3\uA1AA", "\uA246\uA1AA", "\uA22C\uA1AA", "\uA2B0\uA1AA", "\uA2B0\uA2AA\uA1AA", "\uA2B0\uA44B\uA1AA"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA2CD\uA1AA", "\uA44D\uA1AA", "\uA315\uA1AA", "\uA1D6\uA1AA", "\uA26C\uA1AA", "\uA0D8\uA1AA", "\uA3C3\uA1AA", "\uA246\uA1AA", "\uA22C\uA1AA", "\uA2B0\uA1AA", "\uA2B0\uA2AA\uA1AA", "\uA2B0\uA44B\uA1AA"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA0C5\uA44C", "\uA0C5\uA3B8", "\uA0C5\uA375", "\uA0C5\uA2C6"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA0C5\uA44C", "\uA0C5\uA3B8", "\uA0C5\uA375", "\uA0C5\uA2C6"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA46D\uA18F\uA44D", "\uA18F\uA282\uA2CD", "\uA18F\uA282\uA44D", "\uA18F\uA282\uA315", "\uA18F\uA282\uA1D6", "\uA18F\uA282\uA26C", "\uA18F\uA282\uA0D8"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA18F", "\uA2CD", "\uA44D", "\uA315", "\uA1D6", "\uA26C", "\uA0D8"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uA46D\uA18F", "\uA18F\uA2CD", "\uA18F\uA44D", "\uA18F\uA315", "\uA18F\uA1D6", "\uA18F\uA26C", "\uA18F\uA0D8"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ii.$clinit = () =>{};
  DateTimeFormatInfoImpl__ii.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ii;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ii, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ii');

exports = DateTimeFormatInfoImpl__ii; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ii.js.map