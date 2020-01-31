goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_lag$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__lag extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__lag} */
 static $create__() {
  DateTimeFormatInfoImpl__lag.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lag();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_lag__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_lag__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["TOO", "MUU"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K\u0268r\u0268sit\u0289 s\u0268 anavyaal", "K\u0268r\u0268sit\u0289 akavyaalwe"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["KSA", "KA"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M/d";
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
  return "EEE, MMM d, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K\u0289f\u00FAngat\u0268", "K\u0289naan\u0268", "K\u0289keenda", "Kwiikumi", "Kwiinyamb\u00E1la", "Kwiidwaata", "K\u0289m\u0289\u0289nch\u0268", "K\u0289v\u0268\u0268r\u0268", "K\u0289saat\u0289", "Kwiinyi", "K\u0289saano", "K\u0289sasat\u0289"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["F", "N", "K", "I", "I", "I", "M", "V", "S", "I", "S", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["F\u00FAngat\u0268", "Naan\u0268", "Keenda", "Ik\u00FAmi", "Inyambala", "Idwaata", "M\u0289\u0289nch\u0268", "V\u0268\u0268r\u0268", "Saat\u0289", "Inyi", "Saano", "Sasat\u0289"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ncholo ya 1", "Ncholo ya 2", "Ncholo ya 3", "Ncholo ya 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ncho 1", "Ncho 2", "Ncho 3", "Ncho 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jumap\u00EDiri", "Jumat\u00E1tu", "Juma\u00EDne", "Jumat\u00E1ano", "Alam\u00EDisi", "Ijum\u00E1a", "Jumam\u00F3osi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["P", "T", "E", "O", "A", "I", "M"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["P\u00EDili", "T\u00E1atu", "\u00CDne", "T\u00E1ano", "Alh", "Ijm", "M\u00F3osi"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__lag.$clinit = () =>{};
  DateTimeFormatInfoImpl__lag.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__lag;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lag, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_lag');

exports = DateTimeFormatInfoImpl__lag; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lag.js.map