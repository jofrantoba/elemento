goog.module('org.gwtproject.canvas.dom.client.Context2d.TextAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextAlign>}
  */
class TextAlign extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextAlign_;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @return {!TextAlign}
  * @public
  */
 static $create__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  let $instance = new TextAlign();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_TextAlign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @public
  */
 $ctor__org_gwtproject_canvas_dom_client_Context2d_TextAlign__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextAlign_ = value;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextAlign_;
 }
 /**
  * @param {string} name
  * @return {!TextAlign}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  TextAlign.$clinit();
  if ($Equality.$same(TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_, null)) {
   TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_ = $Enums.createMapFromValues(TextAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_);
 }
 /**
  * @return {!Array<!TextAlign>}
  * @public
  */
 static m_values__() {
  TextAlign.$clinit();
  return /**@type {!Array<TextAlign>} */ ($Arrays.$init([TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign], TextAlign));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {TextAlign} */ ($Casts.$to(arg0, TextAlign)));
 }
 /**
  * @return {!TextAlign}
  * @public
  */
 static get f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /**
  * @return {!TextAlign}
  * @public
  */
 static get f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /**
  * @return {!TextAlign}
  * @public
  */
 static get f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /**
  * @return {!TextAlign}
  * @public
  */
 static get f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /**
  * @return {!TextAlign}
  * @public
  */
 static get f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /**
  * @public
  */
 static $clinit() {
  TextAlign.$clinit = () =>{};
  TextAlign.$loadModules();
  Enum.$clinit();
  TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), TextAlign.$ordinal$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "center");
  TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), TextAlign.$ordinal$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "end");
  TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT"), TextAlign.$ordinal$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "left");
  TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT"), TextAlign.$ordinal$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "right");
  TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), TextAlign.$ordinal$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "start");
  TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextAlign;
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
$Util.$setClassMetadataForEnum(TextAlign, 'org.gwtproject.canvas.dom.client.Context2d$TextAlign');

/** @private {!TextAlign} */
TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/** @private {!TextAlign} */
TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/** @private {!TextAlign} */
TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/** @private {!TextAlign} */
TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/** @private {!TextAlign} */
TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/** @public {Map<?string, !TextAlign>} */
TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_;
/** @public {number} @const */
TextAlign.$ordinal$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 0;
/** @public {number} @const */
TextAlign.$ordinal$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 1;
/** @public {number} @const */
TextAlign.$ordinal$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 2;
/** @public {number} @const */
TextAlign.$ordinal$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 3;
/** @public {number} @const */
TextAlign.$ordinal$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 4;

exports = TextAlign; 
//# sourceMappingURL=Context2d$TextAlign.js.map