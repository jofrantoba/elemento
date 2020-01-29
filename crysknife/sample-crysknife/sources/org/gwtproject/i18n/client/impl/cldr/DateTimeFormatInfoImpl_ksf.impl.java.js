goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ksf$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ksf extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ksf}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ksf.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ksf();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ksf__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ksf__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["s\u00E1r\u00FAw\u00E1", "c\u025B\u025B\u0301nko"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["di Y\u025B\u0301sus ak\u00E1 y\u00E1l\u025B", "c\u00E1m\u025B\u025Bn k\u01DD k\u01DDb\u0254pka Y"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["d.Y.", "k.Y."], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMinuteSecond__() {
  return "m:ss";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d MMMM";
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
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y";
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
 m_formatYearMonthNum__() {
  return "M/y";
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
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u014Bw\u00ED\u00ED a nt\u0254\u0301nt\u0254", "\u014Bw\u00ED\u00ED ak\u01DD b\u025B\u0301\u025B", "\u014Bw\u00ED\u00ED ak\u01DD r\u00E1\u00E1", "\u014Bw\u00ED\u00ED ak\u01DD nin", "\u014Bw\u00ED\u00ED ak\u01DD t\u00E1an", "\u014Bw\u00ED\u00ED ak\u01DD t\u00E1af\u0254k", "\u014Bw\u00ED\u00ED ak\u01DD t\u00E1ab\u025B\u025B", "\u014Bw\u00ED\u00ED ak\u01DD t\u00E1araa", "\u014Bw\u00ED\u00ED ak\u01DD t\u00E1anin", "\u014Bw\u00ED\u00ED ak\u01DD nt\u025Bk", "\u014Bw\u00ED\u00ED ak\u01DD nt\u025Bk di b\u0254\u0301k", "\u014Bw\u00ED\u00ED ak\u01DD nt\u025Bk di b\u025B\u0301\u025B"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u014B1", "\u014B2", "\u014B3", "\u014B4", "\u014B5", "\u014B6", "\u014B7", "\u014B8", "\u014B9", "\u014B10", "\u014B11", "\u014B12"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["id\u0301\u025B\u0301n k\u01DDb\u01DDk k\u01DD nt\u0254\u0301nt\u0254\u0301", "id\u025B\u0301n k\u01DDb\u01DDk k\u01DD k\u01DDb\u025B\u0301\u025B", "id\u025B\u0301n k\u01DDb\u01DDk k\u01DD k\u01DDr\u00E1\u00E1", "id\u025B\u0301n k\u01DDb\u01DDk k\u01DD k\u01DDnin"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["i1", "i2", "i3", "i4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["s\u0254\u0301nd\u01DD", "l\u01DDnd\u00ED", "maad\u00ED", "m\u025Bkr\u025Bd\u00ED", "j\u01DD\u01DDd\u00ED", "j\u00FAmb\u00E1", "samd\u00ED"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["s", "l", "m", "m", "j", "j", "s"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["s\u0254\u0301n", "l\u01DDn", "maa", "m\u025Bk", "j\u01DD\u01DD", "j\u00FAm", "sam"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ksf.$clinit = () =>{};
  DateTimeFormatInfoImpl__ksf.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ksf;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ksf, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ksf');

exports = DateTimeFormatInfoImpl__ksf; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ksf.js.map