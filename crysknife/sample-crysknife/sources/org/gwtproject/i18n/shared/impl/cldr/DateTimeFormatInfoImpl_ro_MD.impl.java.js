goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ro_MD$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ro = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ro$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ro__MD extends DateTimeFormatInfoImpl__ro {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ro__MD}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ro__MD.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ro__MD();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ro_MD__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ro_MD__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ro__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["trimestrul 1", "trimestrul 2", "trimestrul 3", "trimestrul 4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["trim. 1", "trim. 2", "trim. 3", "trim. 4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["D", "L", "Ma", "Mi", "J", "V", "S"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\u00E2m"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ro__MD.$clinit = () =>{};
  DateTimeFormatInfoImpl__ro__MD.$loadModules();
  DateTimeFormatInfoImpl__ro.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ro__MD;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ro__MD, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ro_MD');

exports = DateTimeFormatInfoImpl__ro__MD; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ro_MD.js.map