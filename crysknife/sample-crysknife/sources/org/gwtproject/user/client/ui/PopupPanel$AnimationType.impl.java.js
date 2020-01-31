goog.module('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AnimationType>}
  */
class AnimationType extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnimationType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new AnimationType();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_AnimationType__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel_AnimationType__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!AnimationType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AnimationType.$clinit();
  if ($Equality.$same(AnimationType.f_namesToValuesMap__org_gwtproject_user_client_ui_PopupPanel_AnimationType_, null)) {
   AnimationType.f_namesToValuesMap__org_gwtproject_user_client_ui_PopupPanel_AnimationType_ = $Enums.createMapFromValues(AnimationType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AnimationType.f_namesToValuesMap__org_gwtproject_user_client_ui_PopupPanel_AnimationType_);
 }
 /** @return {!Array<!AnimationType>} */
 static m_values__() {
  AnimationType.$clinit();
  return /**@type {!Array<AnimationType>}*/ ($Arrays.$init([AnimationType.$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType, AnimationType.$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType, AnimationType.$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType], AnimationType));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {AnimationType}*/ ($Casts.$to(arg0, AnimationType)));
 }
 /** @return {!AnimationType} */
 static get f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType() {
  return (AnimationType.$clinit(), AnimationType.$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
 }
 /** @return {!AnimationType} */
 static get f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType() {
  return (AnimationType.$clinit(), AnimationType.$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
 }
 /** @return {!AnimationType} */
 static get f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType() {
  return (AnimationType.$clinit(), AnimationType.$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
 }
 
 static $clinit() {
  AnimationType.$clinit = () =>{};
  AnimationType.$loadModules();
  Enum.$clinit();
  AnimationType.$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType = AnimationType.$create__java_lang_String__int($Util.$makeEnumName("CENTER"), AnimationType.$ordinal$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
  AnimationType.$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType = AnimationType.$create__java_lang_String__int($Util.$makeEnumName("ONE_WAY_CORNER"), AnimationType.$ordinal$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
  AnimationType.$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType = AnimationType.$create__java_lang_String__int($Util.$makeEnumName("ROLL_DOWN"), AnimationType.$ordinal$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
  AnimationType.f_namesToValuesMap__org_gwtproject_user_client_ui_PopupPanel_AnimationType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(AnimationType, 'org.gwtproject.user.client.ui.PopupPanel$AnimationType');

/**@private {!AnimationType}*/
AnimationType.$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType;
/**@private {!AnimationType}*/
AnimationType.$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType;
/**@private {!AnimationType}*/
AnimationType.$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType;
/**@type {Map<?string, !AnimationType>}*/
AnimationType.f_namesToValuesMap__org_gwtproject_user_client_ui_PopupPanel_AnimationType_;
/**@const {number}*/
AnimationType.$ordinal$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType = 0;
/**@const {number}*/
AnimationType.$ordinal$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType = 1;
/**@const {number}*/
AnimationType.$ordinal$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType = 2;

exports = AnimationType; 
//# sourceMappingURL=PopupPanel$AnimationType.js.map