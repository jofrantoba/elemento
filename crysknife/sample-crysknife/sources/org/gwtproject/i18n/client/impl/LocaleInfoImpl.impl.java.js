goog.module('org.gwtproject.i18n.client.impl.LocaleInfoImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NumberConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.NumberConstants$impl');
let NumberConstantsImpl__ = goog.forwardDeclare('org.gwtproject.i18n.client.impl.NumberConstantsImpl_$impl');

class LocaleInfoImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocaleInfoImpl} */
 static $create__() {
  LocaleInfoImpl.$clinit();
  let $instance = new LocaleInfoImpl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_LocaleInfoImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_LocaleInfoImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 m_hasAnyRTL__() {
  return false;
 }
 /** @return {NumberConstants} */
 m_getNumberConstants__() {
  return NumberConstantsImpl__.$create__();
 }
 
 static $clinit() {
  LocaleInfoImpl.$clinit = () =>{};
  LocaleInfoImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocaleInfoImpl;
 }
 
 static $loadModules() {
  NumberConstantsImpl__ = goog.module.get('org.gwtproject.i18n.client.impl.NumberConstantsImpl_$impl');
 }
 
}
$Util.$setClassMetadata(LocaleInfoImpl, 'org.gwtproject.i18n.client.impl.LocaleInfoImpl');

exports = LocaleInfoImpl; 
//# sourceMappingURL=LocaleInfoImpl.js.map