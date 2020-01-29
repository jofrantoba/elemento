goog.module('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<KeyboardPagingPolicy>}
  */
class KeyboardPagingPolicy extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_isLimitedToRange__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = false;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {boolean} isLimitedToRange
  * @return {!KeyboardPagingPolicy}
  * @public
  */
 static $create__java_lang_String__int__boolean($name, $ordinal, isLimitedToRange) {
  let $instance = new KeyboardPagingPolicy();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy__java_lang_String__int__boolean($name, $ordinal, isLimitedToRange);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {boolean} isLimitedToRange
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy__java_lang_String__int__boolean($name, $ordinal, isLimitedToRange) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_isLimitedToRange__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = isLimitedToRange;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isLimitedToRange___$pp_org_gwtproject_user_cellview_client() {
  return this.f_isLimitedToRange__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_;
 }
 /**
  * @param {string} name
  * @return {!KeyboardPagingPolicy}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  KeyboardPagingPolicy.$clinit();
  if ($Equality.$same(KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_, null)) {
   KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = $Enums.createMapFromValues(KeyboardPagingPolicy.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_);
 }
 /**
  * @return {!Array<!KeyboardPagingPolicy>}
  * @public
  */
 static m_values__() {
  KeyboardPagingPolicy.$clinit();
  return /**@type {!Array<KeyboardPagingPolicy>} */ ($Arrays.$init([KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy], KeyboardPagingPolicy));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {KeyboardPagingPolicy} */ ($Casts.$to(arg0, KeyboardPagingPolicy)));
 }
 /**
  * @return {!KeyboardPagingPolicy}
  * @public
  */
 static get f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy() {
  return (KeyboardPagingPolicy.$clinit(), KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy);
 }
 /**
  * @return {!KeyboardPagingPolicy}
  * @public
  */
 static get f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy() {
  return (KeyboardPagingPolicy.$clinit(), KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy);
 }
 /**
  * @return {!KeyboardPagingPolicy}
  * @public
  */
 static get f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy() {
  return (KeyboardPagingPolicy.$clinit(), KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy);
 }
 /**
  * @public
  */
 static $clinit() {
  KeyboardPagingPolicy.$clinit = () =>{};
  KeyboardPagingPolicy.$loadModules();
  Enum.$clinit();
  KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = KeyboardPagingPolicy.$create__java_lang_String__int__boolean($Util.$makeEnumName("CURRENT_PAGE"), KeyboardPagingPolicy.$ordinal$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, true);
  KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = KeyboardPagingPolicy.$create__java_lang_String__int__boolean($Util.$makeEnumName("CHANGE_PAGE"), KeyboardPagingPolicy.$ordinal$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, false);
  KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = KeyboardPagingPolicy.$create__java_lang_String__int__boolean($Util.$makeEnumName("INCREASE_RANGE"), KeyboardPagingPolicy.$ordinal$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, false);
  KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof KeyboardPagingPolicy;
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
$Util.$setClassMetadataForEnum(KeyboardPagingPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy$KeyboardPagingPolicy');

/** @private {!KeyboardPagingPolicy} */
KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
/** @private {!KeyboardPagingPolicy} */
KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
/** @private {!KeyboardPagingPolicy} */
KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
/** @public {Map<?string, !KeyboardPagingPolicy>} */
KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_;
/** @public {number} @const */
KeyboardPagingPolicy.$ordinal$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = 0;
/** @public {number} @const */
KeyboardPagingPolicy.$ordinal$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = 1;
/** @public {number} @const */
KeyboardPagingPolicy.$ordinal$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = 2;

exports = KeyboardPagingPolicy; 
//# sourceMappingURL=HasKeyboardPagingPolicy$KeyboardPagingPolicy.js.map