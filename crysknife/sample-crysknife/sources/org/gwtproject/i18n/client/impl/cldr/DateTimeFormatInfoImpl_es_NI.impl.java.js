goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_NI$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__NI extends DateTimeFormatInfoImpl__es__419 {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__es__NI}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__es__NI.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__NI();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_NI__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_NI__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_419__();
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
  DateTimeFormatInfoImpl__es__NI.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__NI.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__NI;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__NI, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_NI');

exports = DateTimeFormatInfoImpl__es__NI; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_NI.js.map