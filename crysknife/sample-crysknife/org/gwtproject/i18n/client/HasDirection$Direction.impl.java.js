goog.module('org.gwtproject.i18n.client.HasDirection.Direction$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Direction>}
  */
class Direction extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!Direction}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new Direction();
  $instance.$ctor__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!Direction}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  Direction.$clinit();
  if ($Equality.$same(Direction.f_namesToValuesMap__org_gwtproject_i18n_client_HasDirection_Direction_, null)) {
   Direction.f_namesToValuesMap__org_gwtproject_i18n_client_HasDirection_Direction_ = $Enums.createMapFromValues(Direction.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Direction.f_namesToValuesMap__org_gwtproject_i18n_client_HasDirection_Direction_);
 }
 /**
  * @return {!Array<!Direction>}
  * @public
  */
 static m_values__() {
  Direction.$clinit();
  return /**@type {!Array<Direction>} */ ($Arrays.$init([Direction.$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction, Direction.$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction, Direction.$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction], Direction));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Direction} */ ($Casts.$to(arg0, Direction)));
 }
 /**
  * @return {!Direction}
  * @public
  */
 static get f_RTL__org_gwtproject_i18n_client_HasDirection_Direction() {
  return (Direction.$clinit(), Direction.$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction);
 }
 /**
  * @return {!Direction}
  * @public
  */
 static get f_LTR__org_gwtproject_i18n_client_HasDirection_Direction() {
  return (Direction.$clinit(), Direction.$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction);
 }
 /**
  * @return {!Direction}
  * @public
  */
 static get f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction() {
  return (Direction.$clinit(), Direction.$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction);
 }
 /**
  * @public
  */
 static $clinit() {
  Direction.$clinit = () =>{};
  Direction.$loadModules();
  Enum.$clinit();
  Direction.$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("RTL"), Direction.$ordinal$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction);
  Direction.$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("LTR"), Direction.$ordinal$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction);
  Direction.$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("DEFAULT"), Direction.$ordinal$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction);
  Direction.f_namesToValuesMap__org_gwtproject_i18n_client_HasDirection_Direction_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Direction;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Direction, 'org.gwtproject.i18n.client.HasDirection$Direction');

/** @private {!Direction} */
Direction.$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction;
/** @private {!Direction} */
Direction.$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction;
/** @private {!Direction} */
Direction.$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction;
/** @public {Map<?string, !Direction>} */
Direction.f_namesToValuesMap__org_gwtproject_i18n_client_HasDirection_Direction_;
/** @public {number} @const */
Direction.$ordinal$f_RTL__org_gwtproject_i18n_client_HasDirection_Direction = 0;
/** @public {number} @const */
Direction.$ordinal$f_LTR__org_gwtproject_i18n_client_HasDirection_Direction = 1;
/** @public {number} @const */
Direction.$ordinal$f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction = 2;

exports = Direction; 
//# sourceMappingURL=HasDirection$Direction.js.map