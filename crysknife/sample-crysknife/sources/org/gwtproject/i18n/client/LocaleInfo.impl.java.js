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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LocaleInfoImpl} */
  this.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_;
  /** @public {CldrImpl} */
  this.f_cldrImpl__org_gwtproject_i18n_client_LocaleInfo_;
  /** @public {DateTimeConstants} */
  this.f_dateTimeConstants__org_gwtproject_i18n_client_LocaleInfo_;
  /** @public {DateTimeFormatInfo} */
  this.f_dateTimeFormatInfo__org_gwtproject_i18n_client_LocaleInfo_;
  /** @public {NumberConstants} */
  this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_;
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_hasAnyRTL__() {
  LocaleInfo.$clinit();
  return LocaleInfo.f_instance__org_gwtproject_i18n_client_LocaleInfo_.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_.m_hasAnyRTL__();
 }
 /**
  * Factory method corresponding to constructor 'LocaleInfo()'.
  * @return {!LocaleInfo}
  * @public
  */
 static $create__() {
  LocaleInfo.$clinit();
  let $instance = new LocaleInfo();
  $instance.$ctor__org_gwtproject_i18n_client_LocaleInfo__();
  return $instance;
 }
 /**
  * Initialization from constructor 'LocaleInfo()'.
  * @public
  */
 $ctor__org_gwtproject_i18n_client_LocaleInfo__() {
  this.$ctor__java_lang_Object__();
  this.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_ = null;
  this.f_cldrImpl__org_gwtproject_i18n_client_LocaleInfo_ = null;
 }
 /**
  * Factory method corresponding to constructor 'LocaleInfo(LocaleInfoImpl, CldrImpl)'.
  * @param {LocaleInfoImpl} impl
  * @param {CldrImpl} cldr
  * @return {!LocaleInfo}
  * @public
  */
 static $create__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(impl, cldr) {
  let $instance = new LocaleInfo();
  $instance.$ctor__org_gwtproject_i18n_client_LocaleInfo__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(impl, cldr);
  return $instance;
 }
 /**
  * Initialization from constructor 'LocaleInfo(LocaleInfoImpl, CldrImpl)'.
  * @param {LocaleInfoImpl} impl
  * @param {CldrImpl} cldr
  * @public
  */
 $ctor__org_gwtproject_i18n_client_LocaleInfo__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(impl, cldr) {
  this.$ctor__java_lang_Object__();
  this.f_infoImpl__org_gwtproject_i18n_client_LocaleInfo_ = impl;
  this.f_cldrImpl__org_gwtproject_i18n_client_LocaleInfo_ = cldr;
 }
 /**
  * @return {LocaleInfo}
  * @public
  */
 static m_getCurrentLocale__() {
  LocaleInfo.$clinit();
  return LocaleInfo.$create__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isRTL__() {
  return false;
 }
 /**
  * @return {DateTimeFormatInfo}
  * @public
  */
 m_getDateTimeFormatInfo__() {
  return this.f_dateTimeFormatInfo__org_gwtproject_i18n_client_LocaleInfo_;
 }
 /**
  * @return {NumberConstants}
  * @public
  */
 m_getNumberConstants__() {
  this.m_ensureNumberConstants___$p_org_gwtproject_i18n_client_LocaleInfo();
  return this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_;
 }
 /**
  * @public
  */
 m_ensureNumberConstants___$p_org_gwtproject_i18n_client_LocaleInfo() {
  if ($Equality.$same(this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_, null)) {
   this.f_numberConstants__org_gwtproject_i18n_client_LocaleInfo_ = NumberConstantsImpl__.$create__();
  }
 }
 /**
  * @public
  */
 static $clinit() {
  LocaleInfo.$clinit = () =>{};
  LocaleInfo.$loadModules();
  j_l_Object.$clinit();
  LocaleInfo.f_instance__org_gwtproject_i18n_client_LocaleInfo_ = LocaleInfo.$create__org_gwtproject_i18n_client_impl_LocaleInfoImpl__org_gwtproject_i18n_client_impl_CldrImpl(LocaleInfoImpl.$create__(), CldrImpl.$create__());
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocaleInfo;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CldrImpl = goog.module.get('org.gwtproject.i18n.client.impl.CldrImpl$impl');
  LocaleInfoImpl = goog.module.get('org.gwtproject.i18n.client.impl.LocaleInfoImpl$impl');
  NumberConstantsImpl__ = goog.module.get('org.gwtproject.i18n.client.impl.NumberConstantsImpl_$impl');
 }
 
}
$Util.$setClassMetadata(LocaleInfo, 'org.gwtproject.i18n.client.LocaleInfo');

/** @public {LocaleInfo} */
LocaleInfo.f_instance__org_gwtproject_i18n_client_LocaleInfo_;

exports = LocaleInfo; 
//# sourceMappingURL=LocaleInfo.js.map