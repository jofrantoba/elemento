goog.module('org.gwtproject.cell.client.ButtonCellBase.Decoration$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Decoration>}
  */
class Decoration extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Decoration} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Decoration();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_Decoration__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ButtonCellBase_Decoration__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!Decoration} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Decoration.$clinit();
  if ($Equality.$same(Decoration.f_namesToValuesMap__org_gwtproject_cell_client_ButtonCellBase_Decoration_, null)) {
   Decoration.f_namesToValuesMap__org_gwtproject_cell_client_ButtonCellBase_Decoration_ = $Enums.createMapFromValues(Decoration.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Decoration.f_namesToValuesMap__org_gwtproject_cell_client_ButtonCellBase_Decoration_);
 }
 /** @return {!Array<!Decoration>} */
 static m_values__() {
  Decoration.$clinit();
  return /**@type {!Array<Decoration>}*/ ($Arrays.$init([Decoration.$f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration, Decoration.$f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration, Decoration.$f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration], Decoration));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {Decoration}*/ ($Casts.$to(arg0, Decoration)));
 }
 /** @return {!Decoration} */
 static get f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration() {
  return (Decoration.$clinit(), Decoration.$f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration);
 }
 /** @return {!Decoration} */
 static get f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration() {
  return (Decoration.$clinit(), Decoration.$f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration);
 }
 /** @return {!Decoration} */
 static get f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration() {
  return (Decoration.$clinit(), Decoration.$f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration);
 }
 
 static $clinit() {
  Decoration.$clinit = () =>{};
  Decoration.$loadModules();
  Enum.$clinit();
  Decoration.$f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration = Decoration.$create__java_lang_String__int($Util.$makeEnumName("DEFAULT"), Decoration.$ordinal$f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration);
  Decoration.$f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration = Decoration.$create__java_lang_String__int($Util.$makeEnumName("PRIMARY"), Decoration.$ordinal$f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration);
  Decoration.$f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration = Decoration.$create__java_lang_String__int($Util.$makeEnumName("NEGATIVE"), Decoration.$ordinal$f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration);
  Decoration.f_namesToValuesMap__org_gwtproject_cell_client_ButtonCellBase_Decoration_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Decoration;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Decoration, 'org.gwtproject.cell.client.ButtonCellBase$Decoration');

/**@private {!Decoration}*/
Decoration.$f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration;
/**@private {!Decoration}*/
Decoration.$f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration;
/**@private {!Decoration}*/
Decoration.$f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration;
/**@type {Map<?string, !Decoration>}*/
Decoration.f_namesToValuesMap__org_gwtproject_cell_client_ButtonCellBase_Decoration_;
/**@const {number}*/
Decoration.$ordinal$f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration = 0;
/**@const {number}*/
Decoration.$ordinal$f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration = 1;
/**@const {number}*/
Decoration.$ordinal$f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration = 2;

exports = Decoration; 
//# sourceMappingURL=ButtonCellBase$Decoration.js.map