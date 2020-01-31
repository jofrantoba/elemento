goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sr_Latn_BA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sr__Latn = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sr_Latn$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sr__Latn__BA extends DateTimeFormatInfoImpl__sr__Latn {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__sr__Latn__BA} */
 static $create__() {
  DateTimeFormatInfoImpl__sr__Latn__BA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sr__Latn__BA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sr_Latn_BA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sr_Latn_BA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sr_Latn__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["prije podne", "po podne"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["prije nove ere", "nove ere"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan", "feb", "mart", "apr", "maj", "jun", "jul", "avg", "sept", "okt", "nov", "dec"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nedjelja", "ponedeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ned", "pon", "ut", "sr", "\u010Det", "pet", "sub"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__sr__Latn__BA.$clinit = () =>{};
  DateTimeFormatInfoImpl__sr__Latn__BA.$loadModules();
  DateTimeFormatInfoImpl__sr__Latn.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__sr__Latn__BA;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sr__Latn__BA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sr_Latn_BA');

exports = DateTimeFormatInfoImpl__sr__Latn__BA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sr_Latn_BA.js.map