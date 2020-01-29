goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pt_CH$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__pt = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pt$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__pt__CH extends DateTimeFormatInfoImpl__pt {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__pt__CH}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__pt__CH.$clinit();
  let $instance = new DateTimeFormatInfoImpl__pt__CH();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pt_CH__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pt_CH__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pt__();
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
 m_dateFormatMedium__() {
  return "dd/MM/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeFull__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u00E0s' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeLong__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u00E0s' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeMedium__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeShort__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {
  return "d/MM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "cccc, d 'de' MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "dd/MM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "MM/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "d/MM/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d/MM/y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1.\u00BA trimestre", "2.\u00BA trimestre", "3.\u00BA trimestre", "4.\u00BA trimestre"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["domingo", "segunda", "ter\u00E7a", "quarta", "quinta", "sexta", "s\u00E1bado"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__pt__CH.$clinit = () =>{};
  DateTimeFormatInfoImpl__pt__CH.$loadModules();
  DateTimeFormatInfoImpl__pt.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__pt__CH;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__pt__CH, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pt_CH');

exports = DateTimeFormatInfoImpl__pt__CH; 
//# sourceMappingURL=DateTimeFormatInfoImpl_pt_CH.js.map