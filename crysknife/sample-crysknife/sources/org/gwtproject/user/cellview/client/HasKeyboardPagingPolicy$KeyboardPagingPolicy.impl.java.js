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
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isLimitedToRange__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = false;
 }
 /** @return {!KeyboardPagingPolicy} */
 static $create__java_lang_String__int__boolean(/** ?string */ $name, /** number */ $ordinal, /** boolean */ isLimitedToRange) {
  let $instance = new KeyboardPagingPolicy();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy__java_lang_String__int__boolean($name, $ordinal, isLimitedToRange);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy__java_lang_String__int__boolean(/** ?string */ $name, /** number */ $ordinal, /** boolean */ isLimitedToRange) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_isLimitedToRange__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = isLimitedToRange;
 }
 /** @return {boolean} */
 m_isLimitedToRange___$pp_org_gwtproject_user_cellview_client() {
  return this.f_isLimitedToRange__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_;
 }
 /** @return {!KeyboardPagingPolicy} */
 static m_valueOf__java_lang_String(/** string */ name) {
  KeyboardPagingPolicy.$clinit();
  if ($Equality.$same(KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_, null)) {
   KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = $Enums.createMapFromValues(KeyboardPagingPolicy.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_);
 }
 /** @return {!Array<!KeyboardPagingPolicy>} */
 static m_values__() {
  KeyboardPagingPolicy.$clinit();
  return /**@type {!Array<KeyboardPagingPolicy>}*/ ($Arrays.$init([KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy], KeyboardPagingPolicy));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {KeyboardPagingPolicy}*/ ($Casts.$to(arg0, KeyboardPagingPolicy)));
 }
 /** @return {!KeyboardPagingPolicy} */
 static get f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy() {
  return (KeyboardPagingPolicy.$clinit(), KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy);
 }
 /** @return {!KeyboardPagingPolicy} */
 static get f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy() {
  return (KeyboardPagingPolicy.$clinit(), KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy);
 }
 /** @return {!KeyboardPagingPolicy} */
 static get f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy() {
  return (KeyboardPagingPolicy.$clinit(), KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy);
 }
 
 static $clinit() {
  KeyboardPagingPolicy.$clinit = () =>{};
  KeyboardPagingPolicy.$loadModules();
  Enum.$clinit();
  KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = KeyboardPagingPolicy.$create__java_lang_String__int__boolean($Util.$makeEnumName("CURRENT_PAGE"), KeyboardPagingPolicy.$ordinal$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, true);
  KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = KeyboardPagingPolicy.$create__java_lang_String__int__boolean($Util.$makeEnumName("CHANGE_PAGE"), KeyboardPagingPolicy.$ordinal$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, false);
  KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = KeyboardPagingPolicy.$create__java_lang_String__int__boolean($Util.$makeEnumName("INCREASE_RANGE"), KeyboardPagingPolicy.$ordinal$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, false);
  KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KeyboardPagingPolicy;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(KeyboardPagingPolicy, 'org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy$KeyboardPagingPolicy');

/**@private {!KeyboardPagingPolicy}*/
KeyboardPagingPolicy.$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
/**@private {!KeyboardPagingPolicy}*/
KeyboardPagingPolicy.$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
/**@private {!KeyboardPagingPolicy}*/
KeyboardPagingPolicy.$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
/**@type {Map<?string, !KeyboardPagingPolicy>}*/
KeyboardPagingPolicy.f_namesToValuesMap__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy_;
/**@const {number}*/
KeyboardPagingPolicy.$ordinal$f_CURRENT_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = 0;
/**@const {number}*/
KeyboardPagingPolicy.$ordinal$f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = 1;
/**@const {number}*/
KeyboardPagingPolicy.$ordinal$f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy = 2;

exports = KeyboardPagingPolicy; 
//# sourceMappingURL=HasKeyboardPagingPolicy$KeyboardPagingPolicy.js.map