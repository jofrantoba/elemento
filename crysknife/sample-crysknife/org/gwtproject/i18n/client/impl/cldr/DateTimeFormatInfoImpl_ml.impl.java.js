goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ml extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ml}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ml.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ml();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ml__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ml__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "y, MMMM d, EEEE";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "y, MMMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "y, MMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D15\u0D4D\u0D30\u0D3F\u0D38\u0D4D\u200C\u0D24\u0D41\u0D35\u0D3F\u0D28\u0D4D \u0D2E\u0D41\u0D2E\u0D4D\u0D2A\u0D4D", "\u0D06\u0D28\u0D4D\u0D28\u0D4B \u0D21\u0D4A\u0D2E\u0D3F\u0D28\u0D3F"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D15\u0D4D\u0D30\u0D3F.\u0D2E\u0D41.", "\u0D0E\u0D21\u0D3F"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "y, MMMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1C\u0D28\u0D41\u0D35\u0D30\u0D3F", "\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41\u0D35\u0D30\u0D3F", "\u0D2E\u0D3E\u0D7C\u0D1A\u0D4D\u0D1A\u0D4D", "\u0D0F\u0D2A\u0D4D\u0D30\u0D3F\u0D7D", "\u0D2E\u0D47\u0D2F\u0D4D", "\u0D1C\u0D42\u0D7A", "\u0D1C\u0D42\u0D32\u0D48", "\u0D13\u0D17\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D", "\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02\u0D2C\u0D7C", "\u0D12\u0D15\u0D4D\u200C\u0D1F\u0D4B\u0D2C\u0D7C", "\u0D28\u0D35\u0D02\u0D2C\u0D7C", "\u0D21\u0D3F\u0D38\u0D02\u0D2C\u0D7C"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1C", "\u0D2B\u0D46", "\u0D2E\u0D3E", "\u0D0F", "\u0D2E\u0D46", "\u0D1C\u0D42\u0D7A", "\u0D1C\u0D42", "\u0D13", "\u0D38\u0D46", "\u0D12", "\u0D28", "\u0D21\u0D3F"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1C\u0D28\u0D41", "\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41", "\u0D2E\u0D3E\u0D7C", "\u0D0F\u0D2A\u0D4D\u0D30\u0D3F", "\u0D2E\u0D47\u0D2F\u0D4D", "\u0D1C\u0D42\u0D7A", "\u0D1C\u0D42\u0D32\u0D48", "\u0D13\u0D17", "\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02", "\u0D12\u0D15\u0D4D\u0D1F\u0D4B", "\u0D28\u0D35\u0D02", "\u0D21\u0D3F\u0D38\u0D02"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D12\u0D28\u0D4D\u0D28\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02", "\u0D30\u0D23\u0D4D\u0D1F\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02", "\u0D2E\u0D42\u0D28\u0D4D\u0D28\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02", "\u0D28\u0D3E\u0D32\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D12\u0D28\u0D4D\u0D28\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02", "\u0D30\u0D23\u0D4D\u0D1F\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02", "\u0D2E\u0D42\u0D28\u0D4D\u0D28\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02", "\u0D28\u0D3E\u0D32\u0D3E\u0D02 \u0D2A\u0D3E\u0D26\u0D02"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1E\u0D3E\u0D2F\u0D31\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D33\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D1A\u0D4A\u0D35\u0D4D\u0D35\u0D3E\u0D34\u0D4D\u0D1A", "\u0D2C\u0D41\u0D27\u0D28\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D36\u0D28\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u200C\u0D1A"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1E\u0D3E\u0D2F\u0D31\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D33\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D1A\u0D4A\u0D35\u0D4D\u0D35\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D2C\u0D41\u0D27\u0D28\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D36\u0D28\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u200C\u0D1A"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1E", "\u0D24\u0D3F", "\u0D1A\u0D4A", "\u0D2C\u0D41", "\u0D35\u0D4D\u0D2F\u0D3E", "\u0D35\u0D46", "\u0D36"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1E\u0D3E", "\u0D24\u0D3F", "\u0D1A\u0D4A", "\u0D2C\u0D41", "\u0D35\u0D4D\u0D2F\u0D3E", "\u0D35\u0D46", "\u0D36"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0D1E\u0D3E\u0D2F\u0D7C", "\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D7E", "\u0D1A\u0D4A\u0D35\u0D4D\u0D35", "\u0D2C\u0D41\u0D27\u0D7B", "\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D02", "\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F", "\u0D36\u0D28\u0D3F"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 0;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ml.$clinit = () =>{};
  DateTimeFormatInfoImpl__ml.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ml;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ml, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ml');

exports = DateTimeFormatInfoImpl__ml; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ml.js.map