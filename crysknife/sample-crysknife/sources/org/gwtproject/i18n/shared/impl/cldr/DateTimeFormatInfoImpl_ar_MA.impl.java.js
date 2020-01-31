goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_MA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ar__MA extends DateTimeFormatInfoImpl__ar__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ar__MA} */
 static $create__() {
  DateTimeFormatInfoImpl__ar__MA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__MA();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_MA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_MA__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648\u0632", "\u063A\u0634\u062A", "\u0634\u062A\u0646\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0646\u0628\u0631", "\u062F\u062C\u0646\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A", "\u0641", "\u0645", "\u0623", "\u0645", "\u0646", "\u0644", "\u063A", "\u0634", "\u0643", "\u0628", "\u062F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648\u0632", "\u063A\u0634\u062A", "\u0634\u062A\u0646\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0646\u0628\u0631", "\u062F\u062C\u0646\u0628\u0631"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ar__MA.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__MA.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__MA;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__MA, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ar_MA');

exports = DateTimeFormatInfoImpl__ar__MA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_MA.js.map