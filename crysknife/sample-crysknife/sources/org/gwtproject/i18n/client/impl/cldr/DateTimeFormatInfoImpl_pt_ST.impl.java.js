goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_pt_ST$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__pt = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_pt$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__pt__ST extends DateTimeFormatInfoImpl__pt {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__pt__ST} */
 static $create__() {
  DateTimeFormatInfoImpl__pt__ST.$clinit();
  let $instance = new DateTimeFormatInfoImpl__pt__ST();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_pt_ST__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_pt_ST__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_pt__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.m.", "p.m."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd/MM/y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u00E0s' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u00E0s' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d/MM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "cccc, d 'de' MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd/MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d/MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.\u00BA trimestre", "2.\u00BA trimestre", "3.\u00BA trimestre", "4.\u00BA trimestre"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["domingo", "segunda", "ter\u00E7a", "quarta", "quinta", "sexta", "s\u00E1bado"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__pt__ST.$clinit = () =>{};
  DateTimeFormatInfoImpl__pt__ST.$loadModules();
  DateTimeFormatInfoImpl__pt.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__pt__ST;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__pt__ST, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_pt_ST');

exports = DateTimeFormatInfoImpl__pt__ST; 
//# sourceMappingURL=DateTimeFormatInfoImpl_pt_ST.js.map