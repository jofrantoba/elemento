goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_de_IT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__de = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_de$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__de__IT extends DateTimeFormatInfoImpl__de {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__de__IT}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__de__IT.$clinit();
  let $instance = new DateTimeFormatInfoImpl__de__IT();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_de_IT__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_de_IT__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_de__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["J\u00E4nner", "Februar", "M\u00E4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["J\u00E4n.", "Feb.", "M\u00E4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["J\u00E4n", "Feb", "M\u00E4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__de__IT.$clinit = () =>{};
  DateTimeFormatInfoImpl__de__IT.$loadModules();
  DateTimeFormatInfoImpl__de.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__de__IT;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__de__IT, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_de_IT');

exports = DateTimeFormatInfoImpl__de__IT; 
//# sourceMappingURL=DateTimeFormatInfoImpl_de_IT.js.map