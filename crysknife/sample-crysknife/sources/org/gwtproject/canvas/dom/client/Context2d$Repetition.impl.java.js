goog.module('org.gwtproject.canvas.dom.client.Context2d.Repetition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Repetition>}
  */
class Repetition extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_Repetition_;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @return {!Repetition}
  * @public
  */
 static $create__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  let $instance = new Repetition();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_Repetition__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @public
  */
 $ctor__org_gwtproject_canvas_dom_client_Context2d_Repetition__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_Repetition_ = value;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_Repetition_;
 }
 /**
  * @param {string} name
  * @return {!Repetition}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  Repetition.$clinit();
  if ($Equality.$same(Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_, null)) {
   Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_ = $Enums.createMapFromValues(Repetition.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_);
 }
 /**
  * @return {!Array<!Repetition>}
  * @public
  */
 static m_values__() {
  Repetition.$clinit();
  return /**@type {!Array<Repetition>} */ ($Arrays.$init([Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition, Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition], Repetition));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Repetition} */ ($Casts.$to(arg0, Repetition)));
 }
 /**
  * @return {!Repetition}
  * @public
  */
 static get f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /**
  * @return {!Repetition}
  * @public
  */
 static get f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /**
  * @return {!Repetition}
  * @public
  */
 static get f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /**
  * @return {!Repetition}
  * @public
  */
 static get f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /**
  * @public
  */
 static $clinit() {
  Repetition.$clinit = () =>{};
  Repetition.$loadModules();
  Enum.$clinit();
  Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NO_REPEAT"), Repetition.$ordinal$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, "no-repeat");
  Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT"), Repetition.$ordinal$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, "repeat");
  Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT_X"), Repetition.$ordinal$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition, "repeat-x");
  Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT_Y"), Repetition.$ordinal$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition, "repeat-y");
  Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Repetition;
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
$Util.$setClassMetadataForEnum(Repetition, 'org.gwtproject.canvas.dom.client.Context2d$Repetition');

/** @private {!Repetition} */
Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/** @private {!Repetition} */
Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/** @private {!Repetition} */
Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/** @private {!Repetition} */
Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/** @public {Map<?string, !Repetition>} */
Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_;
/** @public {number} @const */
Repetition.$ordinal$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = 0;
/** @public {number} @const */
Repetition.$ordinal$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = 1;
/** @public {number} @const */
Repetition.$ordinal$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition = 2;
/** @public {number} @const */
Repetition.$ordinal$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition = 3;

exports = Repetition; 
//# sourceMappingURL=Context2d$Repetition.js.map