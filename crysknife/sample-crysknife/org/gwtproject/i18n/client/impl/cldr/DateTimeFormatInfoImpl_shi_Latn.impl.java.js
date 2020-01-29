goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_shi_Latn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__shi = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_shi$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__shi__Latn extends DateTimeFormatInfoImpl__shi {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__shi__Latn}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__shi__Latn.$clinit();
  let $instance = new DateTimeFormatInfoImpl__shi__Latn();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_shi_Latn__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_shi_Latn__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_shi__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["tifawt", "tadgg\u02B7at"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["dat n \u025Bisa", "dffir n \u025Bisa"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["da\u025B", "df\u025B"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["innayr", "b\u1E5Bay\u1E5B", "ma\u1E5B\u1E63", "ibrir", "mayyu", "yunyu", "yulyuz", "\u0263uct", "cutanbir", "ktubr", "nuwanbir", "dujanbir"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["i", "b", "m", "i", "m", "y", "y", "\u0263", "c", "k", "n", "d"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["inn", "b\u1E5Ba", "ma\u1E5B", "ibr", "may", "yun", "yul", "\u0263uc", "cut", "ktu", "nuw", "duj"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["ak\u1E5Ba\u1E0Dyur 1", "ak\u1E5Ba\u1E0Dyur 2", "ak\u1E5Ba\u1E0Dyur 3", "ak\u1E5Ba\u1E0Dyur 4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["ak 1", "ak 2", "ak 3", "ak 4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["asamas", "aynas", "asinas", "ak\u1E5Bas", "akwas", "asimwas", "asi\u1E0Dyas"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["asa", "ayn", "asi", "ak\u1E5B", "akw", "asim", "asi\u1E0D"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__shi__Latn.$clinit = () =>{};
  DateTimeFormatInfoImpl__shi__Latn.$loadModules();
  DateTimeFormatInfoImpl__shi.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__shi__Latn;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__shi__Latn, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_shi_Latn');

exports = DateTimeFormatInfoImpl__shi__Latn; 
//# sourceMappingURL=DateTimeFormatInfoImpl_shi_Latn.js.map