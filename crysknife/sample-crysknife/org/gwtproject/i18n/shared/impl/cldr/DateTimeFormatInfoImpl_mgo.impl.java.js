goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_mgo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mgo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mgo} */
 static $create__() {
  DateTimeFormatInfoImpl__mgo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mgo();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_mgo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_mgo__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, y MMMM dd";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["im\u0259g mbegtug", "imeg \u00E0b\u00F9b\u00EC", "imeg mb\u0259\u014Bchubi", "im\u0259g ngw\u0259\u0300t", "im\u0259g fog", "im\u0259g ichiib\u0254d", "im\u0259g \u00E0d\u00F9mb\u0259\u0300\u014B", "im\u0259g ichika", "im\u0259g kud", "im\u0259g t\u00E8si\u02BCe", "im\u0259g z\u00F2", "im\u0259g krizmed"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["M1", "A2", "M3", "N4", "F5", "I6", "A7", "I8", "K9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["mbegtug", "imeg \u00E0b\u00F9b\u00EC", "imeg mb\u0259\u014Bchubi", "im\u0259g ngw\u0259\u0300t", "im\u0259g fog", "im\u0259g ichiib\u0254d", "im\u0259g \u00E0d\u00F9mb\u0259\u0300\u014B", "im\u0259g ichika", "im\u0259g kud", "im\u0259g t\u00E8si\u02BCe", "im\u0259g z\u00F2", "im\u0259g krizmed"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Aneg 1", "Aneg 2", "Aneg 3", "Aneg 4", "Aneg 5", "Aneg 6", "Aneg 7"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["A1", "A2", "A3", "A4", "A5", "A6", "A7"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Aneg 1", "Aneg 2", "Aneg 3", "Aneg 4", "Aneg 5", "Aneg 6", "Aneg 7"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mgo.$clinit = () =>{};
  DateTimeFormatInfoImpl__mgo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mgo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mgo, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_mgo');

exports = DateTimeFormatInfoImpl__mgo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mgo.js.map