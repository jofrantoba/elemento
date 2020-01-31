goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ku$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ku extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ku} */
 static $create__() {
  DateTimeFormatInfoImpl__ku.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ku();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ku__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ku__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BN", "PN"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ber\u00EE zay\u00EEn\u00EA", "pi\u015Ft\u00EE zay\u00EEn\u00EA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BZ", "PZ"], j_l_String));
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
  return "MMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "MMMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["r\u00EAbendan\u00EA", "re\u015Femiy\u00EA", "adar\u00EA", "avr\u00EAl\u00EA", "gulan\u00EA", "p\u00FB\u015Fper\u00EA", "t\u00EErmeh\u00EA", "gelaw\u00EAj\u00EA", "rezber\u00EA", "kew\u00E7\u00EAr\u00EA", "sermawez\u00EA", "berfanbar\u00EA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["r\u00EAbendan", "re\u015Fem\u00EE", "adar", "avr\u00EAl", "gulan", "p\u00FB\u015Fper", "t\u00EErmeh", "gelaw\u00EAj", "rezber", "kew\u00E7\u00EAr", "sermawez", "berfanbar"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["R", "R", "A", "A", "G", "P", "T", "G", "R", "K", "S", "B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["r\u00EAb", "re\u015F", "ada", "avr", "gul", "p\u00FB\u015F", "t\u00EEr", "gel", "rez", "kew", "ser", "ber"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00C71", "\u00C72", "\u00C73", "\u00C74"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00C71", "\u00C72", "\u00C73", "\u00C74"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["yek\u015Fem", "du\u015Fem", "s\u00EA\u015Fem", "\u00E7ar\u015Fem", "p\u00EAnc\u015Fem", "\u00EEn", "\u015Fem\u00EE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Y", "D", "S", "\u00C7", "P", "\u00CE", "\u015E"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["y\u015F", "d\u015F", "s\u015F", "\u00E7\u015F", "p\u015F", "\u00EEn", "\u015F"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ku.$clinit = () =>{};
  DateTimeFormatInfoImpl__ku.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ku;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ku, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ku');

exports = DateTimeFormatInfoImpl__ku; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ku.js.map