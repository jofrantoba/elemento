goog.module('org.gwtproject.user.client.ui.DockLayoutPanel.Direction$impl');

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
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Direction} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Direction();
  $instance.$ctor__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!Direction} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Direction.$clinit();
  if ($Equality.$same(Direction.f_namesToValuesMap__org_gwtproject_user_client_ui_DockLayoutPanel_Direction_, null)) {
   Direction.f_namesToValuesMap__org_gwtproject_user_client_ui_DockLayoutPanel_Direction_ = $Enums.createMapFromValues(Direction.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Direction.f_namesToValuesMap__org_gwtproject_user_client_ui_DockLayoutPanel_Direction_);
 }
 /** @return {!Array<!Direction>} */
 static m_values__() {
  Direction.$clinit();
  return /**@type {!Array<Direction>}*/ ($Arrays.$init([Direction.$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, Direction.$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, Direction.$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, Direction.$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, Direction.$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, Direction.$f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, Direction.$f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction], Direction));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {Direction}*/ ($Casts.$to(arg0, Direction)));
 }
 /** @return {!Direction} */
 static get f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 /** @return {!Direction} */
 static get f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 /** @return {!Direction} */
 static get f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 /** @return {!Direction} */
 static get f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 /** @return {!Direction} */
 static get f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 /** @return {!Direction} */
 static get f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 /** @return {!Direction} */
 static get f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction() {
  return (Direction.$clinit(), Direction.$f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
 }
 
 static $clinit() {
  Direction.$clinit = () =>{};
  Direction.$loadModules();
  Enum.$clinit();
  Direction.$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("NORTH"), Direction.$ordinal$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("EAST"), Direction.$ordinal$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("SOUTH"), Direction.$ordinal$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("WEST"), Direction.$ordinal$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("CENTER"), Direction.$ordinal$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.$f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("LINE_START"), Direction.$ordinal$f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.$f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = Direction.$create__java_lang_String__int($Util.$makeEnumName("LINE_END"), Direction.$ordinal$f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction);
  Direction.f_namesToValuesMap__org_gwtproject_user_client_ui_DockLayoutPanel_Direction_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Direction;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Direction, 'org.gwtproject.user.client.ui.DockLayoutPanel$Direction');

/**@private {!Direction}*/
Direction.$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@private {!Direction}*/
Direction.$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@private {!Direction}*/
Direction.$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@private {!Direction}*/
Direction.$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@private {!Direction}*/
Direction.$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@private {!Direction}*/
Direction.$f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@private {!Direction}*/
Direction.$f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
/**@type {Map<?string, !Direction>}*/
Direction.f_namesToValuesMap__org_gwtproject_user_client_ui_DockLayoutPanel_Direction_;
/**@const {number}*/
Direction.$ordinal$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 0;
/**@const {number}*/
Direction.$ordinal$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 1;
/**@const {number}*/
Direction.$ordinal$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 2;
/**@const {number}*/
Direction.$ordinal$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 3;
/**@const {number}*/
Direction.$ordinal$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 4;
/**@const {number}*/
Direction.$ordinal$f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 5;
/**@const {number}*/
Direction.$ordinal$f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction = 6;

exports = Direction; 
//# sourceMappingURL=DockLayoutPanel$Direction.js.map