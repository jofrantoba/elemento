goog.module('org.gwtproject.i18n.shared.BidiFormatterBase.Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiFormatterBase = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatterBase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @abstract
 * @template T
  */
class Factory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Array<T>} */
  this.f_instances__org_gwtproject_i18n_shared_BidiFormatterBase_Factory_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_BidiFormatterBase_Factory__() {
  this.$ctor__java_lang_Object__();
  this.f_instances__org_gwtproject_i18n_shared_BidiFormatterBase_Factory_ = /**@type {Array<T>} */ ($Arrays.$create([6], BidiFormatterBase));
 }
 /**
  * @abstract
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {T}
  * @public
  */
 m_createInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {}
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {T}
  * @public
  */
 m_getInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan) {
  let index = this.m_calculateIndex__org_gwtproject_i18n_client_HasDirection_Direction__boolean_$p_org_gwtproject_i18n_shared_BidiFormatterBase_Factory(contextDir, alwaysSpan);
  let formatter = this.f_instances__org_gwtproject_i18n_shared_BidiFormatterBase_Factory_[index];
  if ($Equality.$same(formatter, null)) {
   formatter = this.m_createInstance__org_gwtproject_i18n_client_HasDirection_Direction__boolean(contextDir, alwaysSpan);
   $Arrays.$set(this.f_instances__org_gwtproject_i18n_shared_BidiFormatterBase_Factory_, index, formatter);
  }
  return formatter;
 }
 /**
  * @param {Direction} contextDir
  * @param {boolean} alwaysSpan
  * @return {number}
  * @public
  */
 m_calculateIndex__org_gwtproject_i18n_client_HasDirection_Direction__boolean_$p_org_gwtproject_i18n_shared_BidiFormatterBase_Factory(contextDir, alwaysSpan) {
  let i = $Equality.$same(contextDir, Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction) ? 0 : $Equality.$same(contextDir, Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction) ? 1 : 2;
  if (alwaysSpan) {
   i += 3;
  }
  return i;
 }
 /**
  * @public
  */
 static $clinit() {
  Factory.$clinit = () =>{};
  Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  BidiFormatterBase = goog.module.get('org.gwtproject.i18n.shared.BidiFormatterBase$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(Factory, 'org.gwtproject.i18n.shared.BidiFormatterBase$Factory');

exports = Factory; 
//# sourceMappingURL=BidiFormatterBase$Factory.js.map