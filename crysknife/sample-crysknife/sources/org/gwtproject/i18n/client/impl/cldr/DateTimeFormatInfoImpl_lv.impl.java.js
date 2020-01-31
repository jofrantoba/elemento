goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lv$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__lv extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__lv} */
 static $create__() {
  DateTimeFormatInfoImpl__lv.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lv();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lv__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lv__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["priek\u0161p.", "p\u0113cp."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, y. 'gada' d. MMMM";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y. 'gada' d. MMMM";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y. 'gada' d. MMM";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pirms m\u016Bsu \u0113ras", "m\u016Bsu \u0113r\u0101"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["p.m.\u0113.", "m.\u0113."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d. MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd.MM.";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "y. 'g'.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y. 'g'. MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y. 'g'. d. MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y. 'g'. MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y. 'gada' d. MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM.y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y.MM.d.";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, y. 'g'. d. MMM";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y. 'g'. QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y. 'g'. Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["janv\u0101ris", "febru\u0101ris", "marts", "apr\u012Blis", "maijs", "j\u016Bnijs", "j\u016Blijs", "augusts", "septembris", "oktobris", "novembris", "decembris"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["janv.", "febr.", "marts", "apr.", "maijs", "j\u016Bn.", "j\u016Bl.", "aug.", "sept.", "okt.", "nov.", "dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.\u00A0cet.", "2.\u00A0cet.", "3.\u00A0cet.", "4.\u00A0cet."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sv\u0113tdiena", "pirmdiena", "otrdiena", "tre\u0161diena", "ceturtdiena", "piektdiena", "sestdiena"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "P", "O", "T", "C", "P", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sv\u0113td.", "pirmd.", "otrd.", "tre\u0161d.", "ceturtd.", "piektd.", "sestd."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sv\u0113td.", "Pirmd.", "Otrd.", "Tre\u0161d.", "Ceturtd.", "Piektd.", "Sestd."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__lv.$clinit = () =>{};
  DateTimeFormatInfoImpl__lv.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__lv;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lv, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lv');

exports = DateTimeFormatInfoImpl__lv; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lv.js.map