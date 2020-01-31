goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_EC$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__EC extends DateTimeFormatInfoImpl__es__419 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__EC} */
 static $create__() {
  DateTimeFormatInfoImpl__es__EC.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__EC();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_EC__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_EC__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_419__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a. m.", "p. m."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__EC.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__EC.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__EC;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__EC, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_EC');

exports = DateTimeFormatInfoImpl__es__EC; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_EC.js.map