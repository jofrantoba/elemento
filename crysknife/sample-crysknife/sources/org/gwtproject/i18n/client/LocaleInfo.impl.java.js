goog.module('org.gwtproject.i18n.client.LocaleInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateTimeFormatInfo = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormatInfo$impl');
let DateTimeConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.DateTimeConstants$impl');
let NumberConstants = goog.forwardDeclare('org.gwtproject.i18n.client.constants.NumberConstants$impl');
let CldrImpl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.CldrImpl$impl');
let LocaleInfoImpl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.LocaleInfoImpl$impl');
let NumberConstantsImpl__ = goog.forwardDeclare('org.gwtproject.i18n.client.impl.NumberConstantsImpl_$impl');

class LocaleInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LocaleInfoImpl}*/
  this.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_;
  /**@type {CldrImpl}*/
  this.f_cldrImpl__org_gwtproject_i18n_client_LocaleInfo_;
  /**@type {DateTimeConstants}*/
  this.f_dateTimeConstants__org_gwtproject_i18n_client_LocaleInfo_;
  /**@type {DateTimeFormatInfo}*/
  this.f_dateTimeFormatInfo__org_gwtproject_i18n_client_LocaleInfo_;
  /**@type {NumberConstants}*/
  this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_;
 }
 /** @return {boolean} */
 static m_hasAnyRTL__() {
  LocaleInfo.$clinit();
  return LocaleInfo.f_instance__org_gwtproject_i18n_client_LocaleInfo_.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_.m_hasAnyRTL__();
 }
 //Factory method corresponding to constructor 'LocaleInfo()'.
 /** @return {!LocaleInfo} */
 static $create__() {
  LocaleInfo.$clinit();
  let $instance = new LocaleInfo();
  $instance.$ctor__org_gwtproject_i18n_client_LocaleInfo__();
  return $instance;
 }
 //Initialization from constructor 'LocaleInfo()'.
 
 $ctor__org_gwtproject_i18n_client_LocaleInfo__() {
  this.$ctor__java_lang_Object__();
  this.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_ = null;
  this.f_cldrImpl__org_gwtproject_i18n_client_LocaleInfo_ = null;
 }
 //Factory method corresponding to constructor 'LocaleInfo(LocaleInfoImpl, CldrImpl)'.
 /** @return {!LocaleInfo} */
 static $create__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(/** LocaleInfoImpl */ impl, /** CldrImpl */ cldr) {
  let $instance = new LocaleInfo();
  $instance.$ctor__org_gwtproject_i18n_client_LocaleInfo__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(impl, cldr);
  return $instance;
 }
 //Initialization from constructor 'LocaleInfo(LocaleInfoImpl, CldrImpl)'.
 
 $ctor__org_gwtproject_i18n_client_LocaleInfo__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(/** LocaleInfoImpl */ impl, /** CldrImpl */ cldr) {
  this.$ctor__java_lang_Object__();
  this.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_ = impl;
  this.f_cldrImpl__org_gwtproject_i18n_client_LocaleInfo_ = cldr;
 }
 /** @return {LocaleInfo} */
 static m_getCurrentLocale__() {
  LocaleInfo.$clinit();
  return LocaleInfo.$create__();
 }
 /** @return {boolean} */
 m_isRTL__() {
  return false;
 }
 /** @return {DateTimeFormatInfo} */
 m_getDateTimeFormatInfo__() {
  return this.f_dateTimeFormatInfo__org_gwtproject_i18n_client_LocaleInfo_;
 }
 /** @return {NumberConstants} */
 m_getNumberConstants__() {
  this.m_ensureNumberConstants___$p_org_gwtproject_i18n_client_LocaleInfo();
  return this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_;
 }
 
 m_ensureNumberConstants___$p_org_gwtproject_i18n_client_LocaleInfo() {
  if ($Equality.$same(this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_, null)) {
   this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_ = NumberConstantsImpl__.$create__();
  }
 }
 
 static $clinit() {
  LocaleInfo.$clinit = () =>{};
  LocaleInfo.$loadModules();
  j_l_Object.$clinit();
  LocaleInfo.f_instance__org_gwtproject_i18n_client_LocaleInfo_ = LocaleInfo.$create__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(LocaleInfoImpl.$create__(), CldrImpl.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocaleInfo;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CldrImpl = goog.module.get('org.gwtproject.i18n.client.impl.CldrImpl$impl');
  LocaleInfoImpl = goog.module.get('org.gwtproject.i18n.client.impl.LocaleInfoImpl$impl');
  NumberConstantsImpl__ = goog.module.get('org.gwtproject.i18n.client.impl.NumberConstantsImpl_$impl');
 }
 
}
$Util.$setClassMetadata(LocaleInfo, 'org.gwtproject.i18n.client.LocaleInfo');

/**@type {LocaleInfo}*/
LocaleInfo.f_instance__org_gwtproject_i18n_client_LocaleInfo_;

exports = LocaleInfo; 
//# sourceMappingURL=LocaleInfo.js.map