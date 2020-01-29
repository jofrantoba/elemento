goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_gd$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__gd extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__gd}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__gd.$clinit();
  let $instance = new DateTimeFormatInfoImpl__gd();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_gd__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_gd__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["m", "f"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, d'mh' MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "d'mh' MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "dd/MM/y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Ro Chr\u00ECosta", "An d\u00E8idh Chr\u00ECosta"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["RC", "AD"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatHour12Minute__() {
  return "h:mma";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullDay__() {
  return "d'mh' MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "LLL Y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "LLLL y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "d'mh' MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "L/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["dhen Fhaoilleach", "dhen Ghearran", "dhen Mh\u00E0rt", "dhen Ghiblean", "dhen Ch\u00E8itean", "dhen \u00D2gmhios", "dhen Iuchar", "dhen L\u00F9nastal", "dhen t-Sultain", "dhen D\u00E0mhair", "dhen t-Samhain", "dhen D\u00F9bhlachd"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Am Faoilleach", "An Gearran", "Am M\u00E0rt", "An Giblean", "An C\u00E8itean", "An t-\u00D2gmhios", "An t-Iuchar", "An L\u00F9nastal", "An t-Sultain", "An D\u00E0mhair", "An t-Samhain", "An D\u00F9bhlachd"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["F", "G", "M", "G", "C", "\u00D2", "I", "L", "S", "D", "S", "D"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Faoi", "Gearr", "M\u00E0rt", "Gibl", "C\u00E8it", "\u00D2gmh", "Iuch", "L\u00F9na", "Sult", "D\u00E0mh", "Samh", "D\u00F9bh"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1d chairteal", "2na cairteal", "3s cairteal", "4mh cairteal"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["C1", "C2", "C3", "C4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["DiD\u00F2mhnaich", "DiLuain", "DiM\u00E0irt", "DiCiadain", "DiarDaoin", "DihAoine", "DiSathairne"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["D", "L", "M", "C", "A", "H", "S"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["DiD", "DiL", "DiM", "DiC", "Dia", "Dih", "DiS"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__gd.$clinit = () =>{};
  DateTimeFormatInfoImpl__gd.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__gd;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__gd, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_gd');

exports = DateTimeFormatInfoImpl__gd; 
//# sourceMappingURL=DateTimeFormatInfoImpl_gd.js.map