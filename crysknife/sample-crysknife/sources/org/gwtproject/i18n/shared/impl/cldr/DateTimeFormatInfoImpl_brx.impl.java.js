goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_brx$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__brx extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__brx} */
 static $create__() {
  DateTimeFormatInfoImpl__brx.$clinit();
  let $instance = new DateTimeFormatInfoImpl__brx();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_brx__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_brx__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092B\u0941\u0902", "\u092C\u0947\u0932\u093E\u0938\u0947"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, MMMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "MMMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "MMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "M/d/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0908\u0938\u093E.\u092A\u0942\u0930\u094D\u0935", "\u0938\u0928"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0908\u0938\u093E.\u092A\u0942\u0930\u094D\u0935", "\u0938\u0928"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d-MMM";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E\u0928\u0941\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u0938", "\u090F\u092B\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0907", "\u0906\u0917\u0938\u094D\u0925", "\u0938\u0947\u092C\u0925\u0947\u091C\u094D\u092C\u093C\u0930", "\u0905\u0916\u0925\u092C\u0930", "\u0928\u092C\u0947\u091C\u094D\u092C\u093C\u0930", "\u0926\u093F\u0938\u0947\u091C\u094D\u092C\u093C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C", "\u092B\u0947", "\u092E\u093E", "\u090F", "\u092E\u0947", "\u091C\u0941", "\u091C\u0941", "\u0906", "\u0938\u0947", "\u0905", "\u0928", "\u0926\u093F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E\u0928\u0941\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u0938", "\u090F\u092B\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0907", "\u0906\u0917\u0938\u094D\u0925", "\u0938\u0947\u092C\u0925\u0947\u091C\u094D\u092C\u093C\u0930", "\u0905\u0916\u0925\u092C\u0930", "\u0928\u092C\u0947\u091C\u094D\u092C\u093C\u0930", "\u0926\u093F\u0938\u0947\u091C\u094D\u092C\u093C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0938\u093F\u0925\u093E\u0938\u0947/\u0916\u094B\u0928\u094D\u0926\u094B\u0938\u0947/\u092C\u093E\u0939\u093E\u0917\u094B\u0938\u0947", "\u0916\u093E\u0935\u0938\u0947/\u0916\u094B\u0928\u094D\u0926\u094B\u0928\u0948/\u092C\u093E\u0939\u093E\u0917\u094B\u0928\u0948", "\u0916\u093E\u0935\u0925\u093E\u092E/\u0916\u094B\u0928\u094D\u0926\u094B\u0925\u093E\u092E/\u092C\u093E\u0939\u093E\u0917\u094B\u0925\u093E\u092E", "\u0916\u093E\u0935\u092C\u094D\u0930\u0948/\u0916\u094B\u0928\u094D\u0926\u094B\u092C\u094D\u0930\u0948/\u092B\u0941\u0930\u093E/\u0906\u092C\u0941\u0902"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0938\u093F\u0925\u093E\u0938\u0947/\u0916\u094B\u0928\u094D\u0926\u094B\u0938\u0947/\u092C\u093E\u0939\u093E\u0917\u094B\u0938\u0947", "\u0916\u093E\u0935\u0938\u0947/\u0916\u094B\u0928\u094D\u0926\u094B\u0928\u0948/\u092C\u093E\u0939\u093E\u0917\u094B\u0928\u0948", "\u0916\u093E\u0935\u0925\u093E\u092E/\u0916\u094B\u0928\u094D\u0926\u094B\u0925\u093E\u092E/\u092C\u093E\u0939\u093E\u0917\u094B\u0925\u093E\u092E", "\u0916\u093E\u0935\u092C\u094D\u0930\u0948/\u0916\u094B\u0928\u094D\u0926\u094B\u092C\u094D\u0930\u0948/\u092B\u0941\u0930\u093E/\u0906\u092C\u0941\u0902"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0930\u092C\u093F\u092C\u093E\u0930", "\u0938\u092E\u092C\u093E\u0930", "\u092E\u0902\u0917\u0932\u092C\u093E\u0930", "\u092C\u0941\u0926\u092C\u093E\u0930", "\u092C\u093F\u0938\u0925\u093F\u092C\u093E\u0930", "\u0938\u0941\u0916\u0941\u0930\u092C\u093E\u0930", "\u0938\u0941\u0928\u093F\u092C\u093E\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0930", "\u0938", "\u092E\u0902", "\u092C\u0941", "\u092C\u093F", "\u0938\u0941", "\u0938\u0941"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0930\u092C\u093F", "\u0938\u092E", "\u092E\u0902\u0917\u0932", "\u092C\u0941\u0926", "\u092C\u093F\u0938\u0925\u093F", "\u0938\u0941\u0916\u0941\u0930", "\u0938\u0941\u0928\u093F"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__brx.$clinit = () =>{};
  DateTimeFormatInfoImpl__brx.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__brx;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__brx, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_brx');

exports = DateTimeFormatInfoImpl__brx; 
//# sourceMappingURL=DateTimeFormatInfoImpl_brx.js.map