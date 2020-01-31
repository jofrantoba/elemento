goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ne$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ne extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ne} */
 static $create__() {
  DateTimeFormatInfoImpl__ne.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ne();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ne__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ne__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", "\u0905\u092A\u0930\u093E\u0939\u094D\u0928"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "yy/M/d";
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0908\u0938\u093E \u092A\u0942\u0930\u094D\u0935", "\u0938\u0928\u094D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0908\u0938\u093E \u092A\u0942\u0930\u094D\u0935", "\u0938\u0928\u094D"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u0928\u0935\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0905\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u091F", "\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930", "\u0905\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930", "\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u0928", "\u092B\u0947\u092C", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932", "\u0905\u0917", "\u0938\u0947\u092A", "\u0905\u0915\u094D\u091F\u094B", "\u0928\u094B\u092D\u0947", "\u0921\u093F\u0938\u0947"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u0928", "\u092B\u0947\u0947\u092C", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932", "\u0905\u0917", "\u0938\u0947\u092A", "\u0905\u0915\u094D\u091F\u094B", "\u0928\u094B\u092D\u0947", "\u0921\u093F\u0938\u0947"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u0928\u0935\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0905\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u091F", "\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930", "\u0905\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930", "\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092A\u0939\u093F\u0932\u094B \u0938\u0924\u094D\u0930", "\u0926\u094B\u0938\u094D\u0930\u094B \u0938\u0924\u094D\u0930", "\u0924\u0947\u0938\u094D\u0930\u094B \u0938\u0924\u094D\u0930", "\u091A\u094C\u0925\u094B \u0938\u0924\u094D\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092A\u0939\u093F\u0932\u094B \u0938\u0924\u094D\u0930", "\u0926\u094B\u0938\u094D\u0930\u094B \u0938\u0924\u094D\u0930", "\u0924\u0947\u0938\u094D\u0930\u094B \u0938\u0924\u094D\u0930", "\u091A\u094C\u0925\u094B \u0938\u0924\u094D\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0906\u0907\u0924\u092C\u093E\u0930", "\u0938\u094B\u092E\u092C\u093E\u0930", "\u092E\u0919\u094D\u0917\u0932\u092C\u093E\u0930", "\u092C\u0941\u0927\u092C\u093E\u0930", "\u092C\u093F\u0939\u093F\u092C\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u092C\u093E\u0930", "\u0936\u0928\u093F\u092C\u093E\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0906", "\u0938\u094B", "\u092E", "\u092C\u0941", "\u092C\u093F", "\u0936\u0941", "\u0936"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0906\u0907\u0924", "\u0938\u094B\u092E", "\u092E\u0919\u094D\u0917\u0932", "\u092C\u0941\u0927", "\u092C\u093F\u0939\u093F", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ne.$clinit = () =>{};
  DateTimeFormatInfoImpl__ne.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ne;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ne, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ne');

exports = DateTimeFormatInfoImpl__ne; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ne.js.map