goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_CA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__en__CA extends DateTimeFormatInfoImpl__en__001 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__en__CA}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__en__CA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__CA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_CA__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_CA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["a.m.", "p.m."], j_l_String));
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
  return "y-MM-dd";
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
  return "MM-dd";
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
  return "y-MM";
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
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, MMM d, y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__en__CA.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__CA.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__CA;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__CA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_CA');

exports = DateTimeFormatInfoImpl__en__CA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_CA.js.map