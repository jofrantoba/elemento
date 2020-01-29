goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sr_Cyrl_BA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sr = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sr$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sr__Cyrl__BA extends DateTimeFormatInfoImpl__sr {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__sr__Cyrl__BA}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__sr__Cyrl__BA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sr__Cyrl__BA();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sr_Cyrl_BA__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sr_Cyrl_BA__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_sr__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043F\u0440\u0438\u0458\u0435 \u043F\u043E\u0434\u043D\u0435", "\u043F\u043E \u043F\u043E\u0434\u043D\u0435"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043F\u0440\u0438\u0458\u0435 \u043D\u043E\u0432\u0435 \u0435\u0440\u0435", "\u043D\u043E\u0432\u0435 \u0435\u0440\u0435"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0458\u0430\u043D", "\u0444\u0435\u0431", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F\u0442", "\u043E\u043A\u0442", "\u043D\u043E\u0432", "\u0434\u0435\u0446"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D\u0435\u0434\u0458\u0435\u0459\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A", "\u0443\u0442\u043E\u0440\u0430\u043A", "\u0441\u0440\u0438\u0458\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A", "\u043F\u0435\u0442\u0430\u043A", "\u0441\u0443\u0431\u043E\u0442\u0430"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0443\u0442", "\u0441\u0440", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0443\u0431"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__sr__Cyrl__BA.$clinit = () =>{};
  DateTimeFormatInfoImpl__sr__Cyrl__BA.$loadModules();
  DateTimeFormatInfoImpl__sr.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__sr__Cyrl__BA;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sr__Cyrl__BA, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_sr_Cyrl_BA');

exports = DateTimeFormatInfoImpl__sr__Cyrl__BA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sr_Cyrl_BA.js.map