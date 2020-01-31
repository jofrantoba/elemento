goog.module('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<HoveringScope>}
  */
class HoveringScope extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HoveringScope} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new HoveringScope();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!HoveringScope} */
 static m_valueOf__java_lang_String(/** string */ name) {
  HoveringScope.$clinit();
  if ($Equality.$same(HoveringScope.f_namesToValuesMap__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope_, null)) {
   HoveringScope.f_namesToValuesMap__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope_ = $Enums.createMapFromValues(HoveringScope.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, HoveringScope.f_namesToValuesMap__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope_);
 }
 /** @return {!Array<!HoveringScope>} */
 static m_values__() {
  HoveringScope.$clinit();
  return /**@type {!Array<HoveringScope>}*/ ($Arrays.$init([HoveringScope.$f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope, HoveringScope.$f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope, HoveringScope.$f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope], HoveringScope));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** * */ arg0) {
  return super.compareTo(/**@type {HoveringScope}*/ ($Casts.$to(arg0, HoveringScope)));
 }
 /** @return {!HoveringScope} */
 static get f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope() {
  return (HoveringScope.$clinit(), HoveringScope.$f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /** @return {!HoveringScope} */
 static get f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope() {
  return (HoveringScope.$clinit(), HoveringScope.$f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /** @return {!HoveringScope} */
 static get f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope() {
  return (HoveringScope.$clinit(), HoveringScope.$f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 
 static $clinit() {
  HoveringScope.$clinit = () =>{};
  HoveringScope.$loadModules();
  Enum.$clinit();
  HoveringScope.$f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope = HoveringScope.$create__java_lang_String__int($Util.$makeEnumName("UNKNOWN"), HoveringScope.$ordinal$f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
  HoveringScope.$f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope = HoveringScope.$create__java_lang_String__int($Util.$makeEnumName("ROW_HOVER"), HoveringScope.$ordinal$f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
  HoveringScope.$f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope = HoveringScope.$create__java_lang_String__int($Util.$makeEnumName("CELL_HOVER"), HoveringScope.$ordinal$f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
  HoveringScope.f_namesToValuesMap__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HoveringScope;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(HoveringScope, 'org.gwtproject.user.cellview.client.RowHoverEvent$HoveringScope');

/**@private {!HoveringScope}*/
HoveringScope.$f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope;
/**@private {!HoveringScope}*/
HoveringScope.$f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope;
/**@private {!HoveringScope}*/
HoveringScope.$f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope;
/**@type {Map<?string, !HoveringScope>}*/
HoveringScope.f_namesToValuesMap__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope_;
/**@const {number}*/
HoveringScope.$ordinal$f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope = 0;
/**@const {number}*/
HoveringScope.$ordinal$f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope = 1;
/**@const {number}*/
HoveringScope.$ordinal$f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope = 2;

exports = HoveringScope; 
//# sourceMappingURL=RowHoverEvent$HoveringScope.js.map