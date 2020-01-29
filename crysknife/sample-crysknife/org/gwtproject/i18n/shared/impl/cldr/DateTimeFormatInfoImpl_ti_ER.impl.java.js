goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ti_ER$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ti = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ti$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ti__ER extends DateTimeFormatInfoImpl__ti {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ti__ER}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ti__ER.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ti__ER();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ti_ER__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ti_ER__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ti__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u12D3\u1218\u1270 \u12D3\u1208\u121D", "\u12D3\u1218\u1270 \u121D\u1205\u1228\u1275"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u1230", "\u1230", "\u1230", "\u1228", "\u1213", "\u12D3", "\u1240"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ti__ER.$clinit = () =>{};
  DateTimeFormatInfoImpl__ti__ER.$loadModules();
  DateTimeFormatInfoImpl__ti.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ti__ER;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ti__ER, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ti_ER');

exports = DateTimeFormatInfoImpl__ti__ER; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ti_ER.js.map