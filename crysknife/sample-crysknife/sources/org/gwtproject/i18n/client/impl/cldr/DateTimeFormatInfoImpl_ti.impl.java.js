goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ti$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ti extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ti}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ti.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ti();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ti__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ti__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1295\u1309\u1206 \u1230\u12D3\u1270", "\u12F5\u1215\u122D \u1230\u12D3\u1275"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE\u1363 dd MMMM \u1218\u12D3\u120D\u1272 y G";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "dd MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "dd-MMM-y";
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
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u12D3/\u12D3", "\u12D3\u1218\u1270 \u121D\u1205\u1228\u1275"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u12D3/\u12D3", "\u12D3/\u121D"], j_l_String));
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
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1325\u122A", "\u1208\u12AB\u1272\u1275", "\u1218\u130B\u1262\u1275", "\u121A\u12EB\u12DD\u12EB", "\u130D\u1295\u1266\u1275", "\u1230\u1290", "\u1213\u121D\u1208", "\u1290\u1213\u1230", "\u1218\u1235\u12A8\u1228\u121D", "\u1325\u1245\u121D\u1272", "\u1215\u12F3\u122D", "\u1273\u1215\u1233\u1235"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1325", "\u1208", "\u1218", "\u121A", "\u130D", "\u1230", "\u1213", "\u1290", "\u1218", "\u1325", "\u1215", "\u1273"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1325\u122A", "\u1208\u12AB", "\u1218\u130B", "\u121A\u12EB", "\u130D\u1295", "\u1230\u1290", "\u1213\u121D", "\u1290\u1213", "\u1218\u1235", "\u1325\u1245", "\u1215\u12F3", "\u1273\u1215"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1240\u12F3\u121B\u12ED \u122D\u1265\u12D2", "\u12AB\u120D\u12A3\u12ED \u122D\u1265\u12D2", "\u1233\u120D\u1233\u12ED \u122D\u1265\u12D2", "\u122B\u1265\u12D3\u12ED \u122D\u1265\u12D2"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u122D1", "\u122D2", "\u122D3", "\u122D4"], j_l_String));
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1230\u1295\u1260\u1275", "\u1230\u1291\u12ED", "\u1220\u1209\u1235", "\u1228\u1261\u12D5", "\u1283\u1219\u1235", "\u12D3\u122D\u1262", "\u1240\u12F3\u121D"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1230", "\u1230", "\u1230", "\u1228", "\u1213", "\u12D3", "\u1240"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1230", "\u1230", "\u1220", "\u1228", "\u1213", "\u12D3", "\u1240"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1230\u1295", "\u1230\u1291", "\u1230\u1209", "\u1228\u1261", "\u1213\u1219", "\u12D3\u122D", "\u1240\u12F3"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ti.$clinit = () =>{};
  DateTimeFormatInfoImpl__ti.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ti;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ti, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ti');

exports = DateTimeFormatInfoImpl__ti; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ti.js.map