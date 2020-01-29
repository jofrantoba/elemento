goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sv_FI$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__sv = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sv$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sv__FI extends DateTimeFormatInfoImpl__sv {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__sv__FI}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__sv__FI.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sv__FI();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sv_FI__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sv_FI__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sv__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "dd-MM-y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__sv__FI.$clinit = () =>{};
  DateTimeFormatInfoImpl__sv__FI.$loadModules();
  DateTimeFormatInfoImpl__sv.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__sv__FI;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sv__FI, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sv_FI');

exports = DateTimeFormatInfoImpl__sv__FI; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sv_FI.js.map