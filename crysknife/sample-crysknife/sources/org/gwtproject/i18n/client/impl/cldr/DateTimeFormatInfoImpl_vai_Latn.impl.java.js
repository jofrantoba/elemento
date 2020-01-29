goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_vai_Latn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__vai = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_vai$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__vai__Latn extends DateTimeFormatInfoImpl__vai {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__vai__Latn}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__vai__Latn.$clinit();
  let $instance = new DateTimeFormatInfoImpl__vai__Latn();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_vai_Latn__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_vai_Latn__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_vai__();
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
 m_formatYearMonthAbbrevDay__() {
  return "MMM d y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "y MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["luukao kem\u00E3", "\u0253anda\u0253u", "v\u0254\u0254", "fulu", "goo", "6", "7", "k\u0254nde", "saah", "galo", "kenpkato \u0253olol\u0254", "luukao l\u0254ma"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["luukao kem\u00E3", "\u0253anda\u0253u", "v\u0254\u0254", "fulu", "goo", "6", "7", "k\u0254nde", "saah", "galo", "kenpkato \u0253olol\u0254", "luukao l\u0254ma"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["lahadi", "t\u025B\u025Bn\u025B\u025B", "talata", "alaba", "aimisa", "aijima", "si\u0253iti"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["lahadi", "t\u025B\u025Bn\u025B\u025B", "talata", "alaba", "aimisa", "aijima", "si\u0253iti"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__vai__Latn.$clinit = () =>{};
  DateTimeFormatInfoImpl__vai__Latn.$loadModules();
  DateTimeFormatInfoImpl__vai.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__vai__Latn;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__vai__Latn, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_vai_Latn');

exports = DateTimeFormatInfoImpl__vai__Latn; 
//# sourceMappingURL=DateTimeFormatInfoImpl_vai_Latn.js.map