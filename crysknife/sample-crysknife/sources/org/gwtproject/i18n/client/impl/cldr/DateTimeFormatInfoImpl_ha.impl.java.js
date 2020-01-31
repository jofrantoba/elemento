goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ha$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ha extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ha} */
 static $create__() {
  DateTimeFormatInfoImpl__ha.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ha();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ha__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ha__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kafin haihuwar annab", "Bayan haihuwar annab"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["KHAI", "BHAI"], j_l_String));
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
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y";
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
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Janairu", "Faburairu", "Maris", "Afirilu", "Mayu", "Yuni", "Yuli", "Agusta", "Satumba", "Oktoba", "Nuwamba", "Disamba"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J", "F", "M", "A", "M", "Y", "Y", "A", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan", "Fab", "Mar", "Afi", "May", "Yun", "Yul", "Agu", "Sat", "Okt", "Nuw", "Dis"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kwata na \u0257aya", "Kwata na biyu", "Kwata na uku", "Kwata na hu\u0257u"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K1", "K2", "K3", "K4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Jumma\u02BCa", "Asabar"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["L", "L", "T", "L", "A", "J", "A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Lah", "Lit", "Tal", "Lar", "Alh", "Jum", "Asa"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ha.$clinit = () =>{};
  DateTimeFormatInfoImpl__ha.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ha;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ha, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ha');

exports = DateTimeFormatInfoImpl__ha; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ha.js.map