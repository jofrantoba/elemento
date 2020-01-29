goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fa_AF$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fa = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fa$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__fa__AF extends DateTimeFormatInfoImpl__fa {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__fa__AF}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__fa__AF.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fa__AF();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fa_AF__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fa_AF__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fa__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0628\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C", "\u0641", "\u0645", "\u0627", "\u0645", "\u062C", "\u062C", "\u0627", "\u0633", "\u0627", "\u0646", "\u062F"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0646\u0648", "\u0641\u0628\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644", "\u0627\u06AF\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0628\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0631\u0628\u0639 \u0627\u0648\u0644", "\u0631\u0628\u0639 \u062F\u0648\u0645", "\u0631\u0628\u0639 \u0633\u0648\u0645", "\u0631\u0628\u0639 \u0686\u0647\u0627\u0631\u0645"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0631\u06F1", "\u0631\u06F2", "\u0631\u06F3", "\u0631\u06F4"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 4;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__fa__AF.$clinit = () =>{};
  DateTimeFormatInfoImpl__fa__AF.$loadModules();
  DateTimeFormatInfoImpl__fa.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__fa__AF;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fa__AF, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fa_AF');

exports = DateTimeFormatInfoImpl__fa__AF; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fa_AF.js.map