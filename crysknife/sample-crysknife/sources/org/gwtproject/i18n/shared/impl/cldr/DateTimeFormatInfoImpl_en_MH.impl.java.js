goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_MH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__en__MH extends DateTimeFormatInfoImpl__en__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__MH}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__MH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__MH();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_MH__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_MH__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["AM", "PM"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "MMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "M/d/yy";
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
 m_formatMonthAbbrevDay__() {
  return "MMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullDay__() {
  return "MMMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "M/d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "MMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, MMM d, y";
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__en__MH.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__MH.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__MH;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__MH, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_en_MH');

exports = DateTimeFormatInfoImpl__en__MH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_MH.js.map