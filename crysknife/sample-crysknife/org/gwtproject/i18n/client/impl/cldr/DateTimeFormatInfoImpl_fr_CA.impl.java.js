goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_CA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__fr__CA extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__CA} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__CA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__CA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_CA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_CA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.m.", "p.m."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "yy-MM-dd";
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "h 'h' mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h 'h' mm 'min' ss 's' a";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "HH 'h' mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH 'h' mm 'min' ss 's'";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "mm 'min' ss 's'";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["janv.", "f\u00E9vr.", "mars", "avr.", "mai", "juin", "juill.", "ao\u00FBt", "sept.", "oct.", "nov.", "d\u00E9c."], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH 'h' mm 'min' ss 's' zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH 'h' mm 'min' ss 's' z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH 'h' mm 'min' ss 's'";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH 'h' mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fr__CA.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__CA.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__CA;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__CA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_CA');

exports = DateTimeFormatInfoImpl__fr__CA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_CA.js.map