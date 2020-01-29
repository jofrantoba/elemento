goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_GT$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__GT extends DateTimeFormatInfoImpl__es__419 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__es__GT}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__es__GT.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__GT();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_GT__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_GT__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_419__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["a. m.", "p. m."], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "d/MM/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "d/MM/yy";
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__es__GT.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__GT.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__GT;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__GT, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_GT');

exports = DateTimeFormatInfoImpl__es__GT; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_GT.js.map