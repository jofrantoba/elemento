goog.module('org.gwtproject.canvas.dom.client.Context2d.TextBaseline$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextBaseline>}
  */
class TextBaseline extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @return {!TextBaseline}
  * @public
  */
 static $create__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  let $instance = new TextBaseline();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_TextBaseline__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @public
  */
 $ctor__org_gwtproject_canvas_dom_client_Context2d_TextBaseline__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_ = value;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_;
 }
 /**
  * @param {string} name
  * @return {!TextBaseline}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  TextBaseline.$clinit();
  if ($Equality.$same(TextBaseline.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_, null)) {
   TextBaseline.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_ = $Enums.createMapFromValues(TextBaseline.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextBaseline.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_);
 }
 /**
  * @return {!Array<!TextBaseline>}
  * @public
  */
 static m_values__() {
  TextBaseline.$clinit();
  return /**@type {!Array<TextBaseline>} */ ($Arrays.$init([TextBaseline.$f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, TextBaseline.$f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, TextBaseline.$f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, TextBaseline.$f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, TextBaseline.$f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, TextBaseline.$f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline], TextBaseline));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {TextBaseline} */ ($Casts.$to(arg0, TextBaseline)));
 }
 /**
  * @return {!TextBaseline}
  * @public
  */
 static get f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline);
 }
 /**
  * @return {!TextBaseline}
  * @public
  */
 static get f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline);
 }
 /**
  * @return {!TextBaseline}
  * @public
  */
 static get f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline);
 }
 /**
  * @return {!TextBaseline}
  * @public
  */
 static get f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline);
 }
 /**
  * @return {!TextBaseline}
  * @public
  */
 static get f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline);
 }
 /**
  * @return {!TextBaseline}
  * @public
  */
 static get f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline() {
  return (TextBaseline.$clinit(), TextBaseline.$f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline);
 }
 /**
  * @public
  */
 static $clinit() {
  TextBaseline.$clinit = () =>{};
  TextBaseline.$loadModules();
  Enum.$clinit();
  TextBaseline.$f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALPHABETIC"), TextBaseline.$ordinal$f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, "alphabetic");
  TextBaseline.$f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOTTOM"), TextBaseline.$ordinal$f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, "bottom");
  TextBaseline.$f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HANGING"), TextBaseline.$ordinal$f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, "hanging");
  TextBaseline.$f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IDEOGRAPHIC"), TextBaseline.$ordinal$f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, "ideographic");
  TextBaseline.$f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIDDLE"), TextBaseline.$ordinal$f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, "middle");
  TextBaseline.$f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = TextBaseline.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOP"), TextBaseline.$ordinal$f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline, "top");
  TextBaseline.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextBaseline;
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
$Util.$setClassMetadataForEnum(TextBaseline, 'org.gwtproject.canvas.dom.client.Context2d$TextBaseline');

/** @private {!TextBaseline} */
TextBaseline.$f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline;
/** @private {!TextBaseline} */
TextBaseline.$f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline;
/** @private {!TextBaseline} */
TextBaseline.$f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline;
/** @private {!TextBaseline} */
TextBaseline.$f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline;
/** @private {!TextBaseline} */
TextBaseline.$f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline;
/** @private {!TextBaseline} */
TextBaseline.$f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline;
/** @public {Map<?string, !TextBaseline>} */
TextBaseline.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextBaseline_;
/** @public {number} @const */
TextBaseline.$ordinal$f_ALPHABETIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = 0;
/** @public {number} @const */
TextBaseline.$ordinal$f_BOTTOM__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = 1;
/** @public {number} @const */
TextBaseline.$ordinal$f_HANGING__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = 2;
/** @public {number} @const */
TextBaseline.$ordinal$f_IDEOGRAPHIC__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = 3;
/** @public {number} @const */
TextBaseline.$ordinal$f_MIDDLE__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = 4;
/** @public {number} @const */
TextBaseline.$ordinal$f_TOP__org_gwtproject_canvas_dom_client_Context2d_TextBaseline = 5;

exports = TextBaseline; 
//# sourceMappingURL=Context2d$TextBaseline.js.map