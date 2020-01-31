goog.module('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TextAlignment>}
  */
class TextAlignment extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @return {?string} */
 m_getTextAlignString___$pp_org_gwtproject_user_client_ui() {}
 /** @return {!TextAlignment} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextAlignment.$clinit();
  if ($Equality.$same(TextAlignment.f_namesToValuesMap__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_, null)) {
   TextAlignment.f_namesToValuesMap__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_ = $Enums.createMapFromValues(TextAlignment.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextAlignment.f_namesToValuesMap__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_);
 }
 /** @return {!Array<!TextAlignment>} */
 static m_values__() {
  TextAlignment.$clinit();
  return /**@type {!Array<TextAlignment>}*/ ($Arrays.$init([TextAlignment.$f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment, TextAlignment.$f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment, TextAlignment.$f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment, TextAlignment.$f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment], TextAlignment));
 }
 /** @return {!TextAlignment} */
 static get f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment() {
  return (TextAlignment.$clinit(), TextAlignment.$f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
 }
 /** @return {!TextAlignment} */
 static get f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment() {
  return (TextAlignment.$clinit(), TextAlignment.$f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
 }
 /** @return {!TextAlignment} */
 static get f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment() {
  return (TextAlignment.$clinit(), TextAlignment.$f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
 }
 /** @return {!TextAlignment} */
 static get f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment() {
  return (TextAlignment.$clinit(), TextAlignment.$f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
 }
 
 static $clinit() {
  TextAlignment.$clinit = () =>{};
  TextAlignment.$loadModules();
  Enum.$clinit();
  TextAlignment.$f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = $1.$create__java_lang_String__int($Util.$makeEnumName("CENTER"), TextAlignment.$ordinal$f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextAlignment.$f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = $2.$create__java_lang_String__int($Util.$makeEnumName("JUSTIFY"), TextAlignment.$ordinal$f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextAlignment.$f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = $3.$create__java_lang_String__int($Util.$makeEnumName("LEFT"), TextAlignment.$ordinal$f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextAlignment.$f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = $4.$create__java_lang_String__int($Util.$makeEnumName("RIGHT"), TextAlignment.$ordinal$f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextAlignment.f_namesToValuesMap__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAlignment;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$3$impl');
  $4 = goog.module.get('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextAlignment, 'org.gwtproject.user.client.ui.ValueBoxBase$TextAlignment');

/**@private {!TextAlignment}*/
TextAlignment.$f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment;
/**@private {!TextAlignment}*/
TextAlignment.$f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment;
/**@private {!TextAlignment}*/
TextAlignment.$f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment;
/**@private {!TextAlignment}*/
TextAlignment.$f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment;
/**@type {Map<?string, !TextAlignment>}*/
TextAlignment.f_namesToValuesMap__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment_;
/**@const {number}*/
TextAlignment.$ordinal$f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = 0;
/**@const {number}*/
TextAlignment.$ordinal$f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = 1;
/**@const {number}*/
TextAlignment.$ordinal$f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = 2;
/**@const {number}*/
TextAlignment.$ordinal$f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment = 3;

exports = TextAlignment; 
//# sourceMappingURL=ValueBoxBase$TextAlignment.js.map