goog.module('org.gwtproject.dom.client.DataTransfer.DropEffect$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DropEffect>}
  */
class DropEffect extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!DropEffect}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new DropEffect();
  $instance.$ctor__org_gwtproject_dom_client_DataTransfer_DropEffect__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_client_DataTransfer_DropEffect__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!DropEffect}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  DropEffect.$clinit();
  if ($Equality.$same(DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_, null)) {
   DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_ = $Enums.createMapFromValues(DropEffect.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_);
 }
 /**
  * @return {!Array<!DropEffect>}
  * @public
  */
 static m_values__() {
  DropEffect.$clinit();
  return /**@type {!Array<DropEffect>} */ ($Arrays.$init([DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect, DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect, DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect, DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect], DropEffect));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {DropEffect} */ ($Casts.$to(arg0, DropEffect)));
 }
 /**
  * @return {!DropEffect}
  * @public
  */
 static get f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /**
  * @return {!DropEffect}
  * @public
  */
 static get f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /**
  * @return {!DropEffect}
  * @public
  */
 static get f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /**
  * @return {!DropEffect}
  * @public
  */
 static get f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /**
  * @public
  */
 static $clinit() {
  DropEffect.$clinit = () =>{};
  DropEffect.$loadModules();
  Enum.$clinit();
  DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("COPY"), DropEffect.$ordinal$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("MOVE"), DropEffect.$ordinal$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("LINK"), DropEffect.$ordinal$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("NONE"), DropEffect.$ordinal$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DropEffect;
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
$Util.$setClassMetadataForEnum(DropEffect, 'org.gwtproject.dom.client.DataTransfer$DropEffect');

/** @private {!DropEffect} */
DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect;
/** @private {!DropEffect} */
DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect;
/** @private {!DropEffect} */
DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect;
/** @private {!DropEffect} */
DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect;
/** @public {Map<?string, !DropEffect>} */
DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_;
/** @public {number} @const */
DropEffect.$ordinal$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect = 0;
/** @public {number} @const */
DropEffect.$ordinal$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect = 1;
/** @public {number} @const */
DropEffect.$ordinal$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect = 2;
/** @public {number} @const */
DropEffect.$ordinal$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect = 3;

exports = DropEffect; 
//# sourceMappingURL=DataTransfer$DropEffect.js.map