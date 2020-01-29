goog.module('org.gwtproject.resources.client.ImageResource.RepeatStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<RepeatStyle>}
  */
class RepeatStyle extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!RepeatStyle}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new RepeatStyle();
  $instance.$ctor__org_gwtproject_resources_client_ImageResource_RepeatStyle__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_resources_client_ImageResource_RepeatStyle__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!RepeatStyle}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  RepeatStyle.$clinit();
  if ($Equality.$same(RepeatStyle.f_namesToValuesMap__org_gwtproject_resources_client_ImageResource_RepeatStyle_, null)) {
   RepeatStyle.f_namesToValuesMap__org_gwtproject_resources_client_ImageResource_RepeatStyle_ = $Enums.createMapFromValues(RepeatStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, RepeatStyle.f_namesToValuesMap__org_gwtproject_resources_client_ImageResource_RepeatStyle_);
 }
 /**
  * @return {!Array<!RepeatStyle>}
  * @public
  */
 static m_values__() {
  RepeatStyle.$clinit();
  return /**@type {!Array<RepeatStyle>} */ ($Arrays.$init([RepeatStyle.$f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle, RepeatStyle.$f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle, RepeatStyle.$f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle, RepeatStyle.$f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle], RepeatStyle));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {RepeatStyle} */ ($Casts.$to(arg0, RepeatStyle)));
 }
 /**
  * @return {!RepeatStyle}
  * @public
  */
 static get f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle() {
  return (RepeatStyle.$clinit(), RepeatStyle.$f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle);
 }
 /**
  * @return {!RepeatStyle}
  * @public
  */
 static get f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle() {
  return (RepeatStyle.$clinit(), RepeatStyle.$f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle);
 }
 /**
  * @return {!RepeatStyle}
  * @public
  */
 static get f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle() {
  return (RepeatStyle.$clinit(), RepeatStyle.$f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle);
 }
 /**
  * @return {!RepeatStyle}
  * @public
  */
 static get f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle() {
  return (RepeatStyle.$clinit(), RepeatStyle.$f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle);
 }
 /**
  * @public
  */
 static $clinit() {
  RepeatStyle.$clinit = () =>{};
  RepeatStyle.$loadModules();
  Enum.$clinit();
  RepeatStyle.$f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle = RepeatStyle.$create__java_lang_String__int($Util.$makeEnumName("None"), RepeatStyle.$ordinal$f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle);
  RepeatStyle.$f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle = RepeatStyle.$create__java_lang_String__int($Util.$makeEnumName("Horizontal"), RepeatStyle.$ordinal$f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle);
  RepeatStyle.$f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle = RepeatStyle.$create__java_lang_String__int($Util.$makeEnumName("Vertical"), RepeatStyle.$ordinal$f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle);
  RepeatStyle.$f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle = RepeatStyle.$create__java_lang_String__int($Util.$makeEnumName("Both"), RepeatStyle.$ordinal$f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle);
  RepeatStyle.f_namesToValuesMap__org_gwtproject_resources_client_ImageResource_RepeatStyle_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RepeatStyle;
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
$Util.$setClassMetadataForEnum(RepeatStyle, 'org.gwtproject.resources.client.ImageResource$RepeatStyle');

/** @private {!RepeatStyle} */
RepeatStyle.$f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle;
/** @private {!RepeatStyle} */
RepeatStyle.$f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle;
/** @private {!RepeatStyle} */
RepeatStyle.$f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle;
/** @private {!RepeatStyle} */
RepeatStyle.$f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle;
/** @public {Map<?string, !RepeatStyle>} */
RepeatStyle.f_namesToValuesMap__org_gwtproject_resources_client_ImageResource_RepeatStyle_;
/** @public {number} @const */
RepeatStyle.$ordinal$f_None__org_gwtproject_resources_client_ImageResource_RepeatStyle = 0;
/** @public {number} @const */
RepeatStyle.$ordinal$f_Horizontal__org_gwtproject_resources_client_ImageResource_RepeatStyle = 1;
/** @public {number} @const */
RepeatStyle.$ordinal$f_Vertical__org_gwtproject_resources_client_ImageResource_RepeatStyle = 2;
/** @public {number} @const */
RepeatStyle.$ordinal$f_Both__org_gwtproject_resources_client_ImageResource_RepeatStyle = 3;

exports = RepeatStyle; 
//# sourceMappingURL=ImageResource$RepeatStyle.js.map