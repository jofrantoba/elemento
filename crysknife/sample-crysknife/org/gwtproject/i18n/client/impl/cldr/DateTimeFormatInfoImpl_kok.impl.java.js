goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_kok$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kok extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kok} */
 static $create__() {
  DateTimeFormatInfoImpl__kok.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kok();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_kok__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_kok__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092E.\u092A\u0942.", "\u092E.\u0928\u0902."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd-MM-y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d-M-yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0915\u094D\u0930\u093F\u0938\u094D\u0924\u092A\u0942\u0930\u094D\u0935", "\u0915\u094D\u0930\u093F\u0938\u094D\u0924\u0936\u0916\u093E"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0915\u094D\u0930\u093F\u0938\u094D\u0924\u092A\u0942\u0930\u094D\u0935", "\u0915\u094D\u0930\u093F\u0938\u094D\u0924\u0936\u0916\u093E"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u093E\u092F", "\u0906\u0917\u094B\u0938\u094D\u0924", "\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930", "\u0911\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930", "\u0921\u093F\u0938\u0947\u0902\u092C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u093E\u092F", "\u0906\u0917\u094B\u0938\u094D\u0924", "\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930", "\u0911\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930", "\u0921\u093F\u0938\u0947\u0902\u092C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0906\u092F\u0924\u093E\u0930", "\u0938\u094B\u092E\u093E\u0930", "\u092E\u0902\u0917\u0933\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u093E\u0930", "\u0936\u0947\u0928\u0935\u093E\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0906", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936\u0947"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0906\u092F\u0924\u093E\u0930", "\u0938\u094B\u092E\u093E\u0930", "\u092E\u0902\u0917\u0933\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u093E\u0930", "\u0936\u0947\u0928\u0935\u093E\u0930"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kok.$clinit = () =>{};
  DateTimeFormatInfoImpl__kok.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kok;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kok, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_kok');

exports = DateTimeFormatInfoImpl__kok; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kok.js.map