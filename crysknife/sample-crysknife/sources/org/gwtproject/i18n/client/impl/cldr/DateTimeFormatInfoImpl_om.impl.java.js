goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_om$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__om extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__om} */
 static $create__() {
  DateTimeFormatInfoImpl__om.$clinit();
  let $instance = new DateTimeFormatInfoImpl__om();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_om__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_om__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["WD", "WB"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, MMMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd-MMM-y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Dheengadda Jeesu", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Amajjii", "Guraandhala", "Bitooteessa", "Elba", "Caamsa", "Waxabajjii", "Adooleessa", "Hagayya", "Fuulbana", "Onkololeessa", "Sadaasa", "Muddee"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ama", "Gur", "Bit", "Elb", "Cam", "Wax", "Ado", "Hag", "Ful", "Onk", "Sad", "Mud"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kurmaana 1", "Kurmaana 2", "Kurmaana 3", "Kurmaana 4"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Dilbata", "Wiixata", "Qibxata", "Roobii", "Kamiisa", "Jimaata", "Sanbata"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Dil", "Wix", "Qib", "Rob", "Kam", "Jim", "San"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__om.$clinit = () =>{};
  DateTimeFormatInfoImpl__om.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__om;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__om, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_om');

exports = DateTimeFormatInfoImpl__om; 
//# sourceMappingURL=DateTimeFormatInfoImpl_om.js.map