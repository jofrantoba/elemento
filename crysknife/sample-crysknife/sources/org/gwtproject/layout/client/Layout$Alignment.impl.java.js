goog.module('org.gwtproject.layout.client.Layout.Alignment$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Alignment>}
  */
class Alignment extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!Alignment}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new Alignment();
  $instance.$ctor__org_gwtproject_layout_client_Layout_Alignment__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_layout_client_Layout_Alignment__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!Alignment}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  Alignment.$clinit();
  if ($Equality.$same(Alignment.f_namesToValuesMap__org_gwtproject_layout_client_Layout_Alignment_, null)) {
   Alignment.f_namesToValuesMap__org_gwtproject_layout_client_Layout_Alignment_ = $Enums.createMapFromValues(Alignment.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Alignment.f_namesToValuesMap__org_gwtproject_layout_client_Layout_Alignment_);
 }
 /**
  * @return {!Array<!Alignment>}
  * @public
  */
 static m_values__() {
  Alignment.$clinit();
  return /**@type {!Array<Alignment>} */ ($Arrays.$init([Alignment.$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment, Alignment.$f_END__org_gwtproject_layout_client_Layout_Alignment, Alignment.$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment], Alignment));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Alignment} */ ($Casts.$to(arg0, Alignment)));
 }
 /**
  * @return {!Alignment}
  * @public
  */
 static get f_BEGIN__org_gwtproject_layout_client_Layout_Alignment() {
  return (Alignment.$clinit(), Alignment.$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment);
 }
 /**
  * @return {!Alignment}
  * @public
  */
 static get f_END__org_gwtproject_layout_client_Layout_Alignment() {
  return (Alignment.$clinit(), Alignment.$f_END__org_gwtproject_layout_client_Layout_Alignment);
 }
 /**
  * @return {!Alignment}
  * @public
  */
 static get f_STRETCH__org_gwtproject_layout_client_Layout_Alignment() {
  return (Alignment.$clinit(), Alignment.$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment);
 }
 /**
  * @public
  */
 static $clinit() {
  Alignment.$clinit = () =>{};
  Alignment.$loadModules();
  Enum.$clinit();
  Alignment.$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment = Alignment.$create__java_lang_String__int($Util.$makeEnumName("BEGIN"), Alignment.$ordinal$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment);
  Alignment.$f_END__org_gwtproject_layout_client_Layout_Alignment = Alignment.$create__java_lang_String__int($Util.$makeEnumName("END"), Alignment.$ordinal$f_END__org_gwtproject_layout_client_Layout_Alignment);
  Alignment.$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment = Alignment.$create__java_lang_String__int($Util.$makeEnumName("STRETCH"), Alignment.$ordinal$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment);
  Alignment.f_namesToValuesMap__org_gwtproject_layout_client_Layout_Alignment_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Alignment;
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
$Util.$setClassMetadataForEnum(Alignment, 'org.gwtproject.layout.client.Layout$Alignment');

/** @private {!Alignment} */
Alignment.$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment;
/** @private {!Alignment} */
Alignment.$f_END__org_gwtproject_layout_client_Layout_Alignment;
/** @private {!Alignment} */
Alignment.$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment;
/** @public {Map<?string, !Alignment>} */
Alignment.f_namesToValuesMap__org_gwtproject_layout_client_Layout_Alignment_;
/** @public {number} @const */
Alignment.$ordinal$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment = 0;
/** @public {number} @const */
Alignment.$ordinal$f_END__org_gwtproject_layout_client_Layout_Alignment = 1;
/** @public {number} @const */
Alignment.$ordinal$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment = 2;

exports = Alignment; 
//# sourceMappingURL=Layout$Alignment.js.map