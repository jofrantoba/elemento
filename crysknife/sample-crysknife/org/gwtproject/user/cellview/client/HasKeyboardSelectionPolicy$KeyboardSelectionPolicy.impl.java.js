goog.module('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<KeyboardSelectionPolicy>}
  */
class KeyboardSelectionPolicy extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!KeyboardSelectionPolicy}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new KeyboardSelectionPolicy();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!KeyboardSelectionPolicy}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  KeyboardSelectionPolicy.$clinit();
  if ($Equality.$same(KeyboardSelectionPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy_, null)) {
   KeyboardSelectionPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy_ = $Enums.createMapFromValues(KeyboardSelectionPolicy.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, KeyboardSelectionPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy_);
 }
 /**
  * @return {!Array<!KeyboardSelectionPolicy>}
  * @public
  */
 static m_values__() {
  KeyboardSelectionPolicy.$clinit();
  return /**@type {!Array<KeyboardSelectionPolicy>} */ ($Arrays.$init([KeyboardSelectionPolicy.$f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, KeyboardSelectionPolicy.$f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, KeyboardSelectionPolicy.$f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy], KeyboardSelectionPolicy));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {KeyboardSelectionPolicy} */ ($Casts.$to(arg0, KeyboardSelectionPolicy)));
 }
 /**
  * @return {!KeyboardSelectionPolicy}
  * @public
  */
 static get f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy() {
  return (KeyboardSelectionPolicy.$clinit(), KeyboardSelectionPolicy.$f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
 }
 /**
  * @return {!KeyboardSelectionPolicy}
  * @public
  */
 static get f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy() {
  return (KeyboardSelectionPolicy.$clinit(), KeyboardSelectionPolicy.$f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
 }
 /**
  * @return {!KeyboardSelectionPolicy}
  * @public
  */
 static get f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy() {
  return (KeyboardSelectionPolicy.$clinit(), KeyboardSelectionPolicy.$f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
 }
 /**
  * @public
  */
 static $clinit() {
  KeyboardSelectionPolicy.$clinit = () =>{};
  KeyboardSelectionPolicy.$loadModules();
  Enum.$clinit();
  KeyboardSelectionPolicy.$f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy = KeyboardSelectionPolicy.$create__java_lang_String__int($Util.$makeEnumName("DISABLED"), KeyboardSelectionPolicy.$ordinal$f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
  KeyboardSelectionPolicy.$f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy = KeyboardSelectionPolicy.$create__java_lang_String__int($Util.$makeEnumName("ENABLED"), KeyboardSelectionPolicy.$ordinal$f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
  KeyboardSelectionPolicy.$f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy = KeyboardSelectionPolicy.$create__java_lang_String__int($Util.$makeEnumName("BOUND_TO_SELECTION"), KeyboardSelectionPolicy.$ordinal$f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
  KeyboardSelectionPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof KeyboardSelectionPolicy;
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
$Util.$setClassMetadataForEnum(KeyboardSelectionPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy$KeyboardSelectionPolicy');

/** @private {!KeyboardSelectionPolicy} */
KeyboardSelectionPolicy.$f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy;
/** @private {!KeyboardSelectionPolicy} */
KeyboardSelectionPolicy.$f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy;
/** @private {!KeyboardSelectionPolicy} */
KeyboardSelectionPolicy.$f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy;
/** @public {Map<?string, !KeyboardSelectionPolicy>} */
KeyboardSelectionPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy_;
/** @public {number} @const */
KeyboardSelectionPolicy.$ordinal$f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy = 0;
/** @public {number} @const */
KeyboardSelectionPolicy.$ordinal$f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy = 1;
/** @public {number} @const */
KeyboardSelectionPolicy.$ordinal$f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy = 2;

exports = KeyboardSelectionPolicy; 
//# sourceMappingURL=HasKeyboardSelectionPolicy$KeyboardSelectionPolicy.js.map