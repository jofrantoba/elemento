goog.module('org.gwtproject.dom.builder.client.DomStylesBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const StylesBuilder = goog.require('org.gwtproject.dom.builder.shared.StylesBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Cursor = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Float = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float$impl');
let FontStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle$impl');
let FontWeight = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight$impl');
let ListStyleType = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType$impl');
let OutlineStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let TableLayout = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout$impl');
let TextAlign = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign$impl');
let TextDecoration = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration$impl');
let TextJustify = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify$impl');
let TextOverflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextOverflow$impl');
let TextTransform = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let VerticalAlign = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign$impl');
let Visibility = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility$impl');
let MatchResult = goog.forwardDeclare('org.gwtproject.regexp.shared.MatchResult$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {StylesBuilder}
  */
class DomStylesBuilder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DomBuilderImpl} */
  this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_;
 }
 /**
  * @param {?string} name
  * @return {?string}
  * @public
  */
 static m_toCamelCaseForm__java_lang_String(name) {
  DomStylesBuilder.$clinit();
  if ($Equality.$same(DomStylesBuilder.f_hyphenatedMap__org_gwtproject_dom_builder_client_DomStylesBuilder_, null)) {
   DomStylesBuilder.f_hyphenatedMap__org_gwtproject_dom_builder_client_DomStylesBuilder_ = /**@type {Object<string, ?string>} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
   DomStylesBuilder.f_maybeHyphenatedWord__org_gwtproject_dom_builder_client_DomStylesBuilder_ = RegExp.m_compile__java_lang_String__java_lang_String("([-]?)([a-z])([a-z0-9]*)", "g");
  }
  if (!j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, "-")) {
   return name;
  }
  let camelCase = DomStylesBuilder.m_getCamelCaseName__jsinterop_base_JsPropertyMap__java_lang_String(DomStylesBuilder.f_hyphenatedMap__org_gwtproject_dom_builder_client_DomStylesBuilder_, name);
  if ($Equality.$same(camelCase, null)) {
   if (j_l_String.m_startsWith__java_lang_String__java_lang_String(name, "-") && j_l_String.m_length__java_lang_String(name) > 1) {
    name = j_l_String.m_substring__java_lang_String__int(name, 1);
   }
   camelCase = "";
   let /** MatchResult */ matches;
   while (!$Equality.$same((matches = DomStylesBuilder.f_maybeHyphenatedWord__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_exec__java_lang_String(name)), null)) {
    let word = matches.m_getGroup__int(0);
    if (!j_l_String.m_startsWith__java_lang_String__java_lang_String(word, "-")) {
     camelCase = j_l_String.m_valueOf__java_lang_Object(camelCase) + j_l_String.m_valueOf__java_lang_Object(word);
    } else {
     camelCase = j_l_String.m_valueOf__java_lang_Object(camelCase) + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_toUpperCase__java_lang_String__java_util_Locale(matches.m_getGroup__int(2), Locale.f_ROOT__java_util_Locale));
     if (matches.m_getGroupCount__() > 2) {
      camelCase = j_l_String.m_valueOf__java_lang_Object(camelCase) + j_l_String.m_valueOf__java_lang_Object(matches.m_getGroup__int(3));
     }
    }
   }
   DomStylesBuilder.m_putCamelCaseName__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_String(DomStylesBuilder.f_hyphenatedMap__org_gwtproject_dom_builder_client_DomStylesBuilder_, name, camelCase);
  }
  return camelCase;
 }
 /**
  * @param {Object<string, ?string>} map
  * @param {?string} name
  * @return {?string}
  * @public
  */
 static m_getCamelCaseName__jsinterop_base_JsPropertyMap__java_lang_String(map, name) {
  return /**@type {?string} */ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, name), j_l_String));
 }
 /**
  * @param {Object<string, ?string>} map
  * @param {?string} name
  * @param {?string} camelCase
  * @public
  */
 static m_putCamelCaseName__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_String(map, name, camelCase) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, name, camelCase);
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomStylesBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomStylesBuilder.$clinit();
  let $instance = new DomStylesBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomStylesBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomStylesBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__java_lang_Object__();
  this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_ = delegate;
 }
 /**
  * @override
  * @param {SafeUri} uri
  * @return {StylesBuilder}
  * @public
  */
 m_backgroundImage__org_gwtproject_safehtml_shared_SafeUri(uri) {
  Style_$Overlay.m_setBackgroundImage__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), uri.m_asString__());
  return this;
 }
 /**
  * @override
  * @param {BorderStyle} value
  * @return {StylesBuilder}
  * @public
  */
 m_borderStyle__org_gwtproject_dom_style_shared_BorderStyle(value) {
  Style_$Overlay.m_setBorderStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_BorderStyle(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_borderWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setBorderWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_bottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {Cursor} value
  * @return {StylesBuilder}
  * @public
  */
 m_cursor__org_gwtproject_dom_style_shared_Cursor(value) {
  Style_$Overlay.m_setCursor__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Cursor(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {Display} value
  * @return {StylesBuilder}
  * @public
  */
 m_display__org_gwtproject_dom_style_shared_Display(value) {
  Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @public
  */
 m_endStyle__() {
  this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_endStyle__();
 }
 /**
  * @override
  * @param {Float} value
  * @return {StylesBuilder}
  * @public
  */
 m_floatprop__org_gwtproject_dom_style_shared_Float(value) {
  Style_$Overlay.m_setFloat__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Float(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_fontSize__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setFontSize__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {FontStyle} value
  * @return {StylesBuilder}
  * @public
  */
 m_fontStyle__org_gwtproject_dom_style_shared_FontStyle(value) {
  Style_$Overlay.m_setFontStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_FontStyle(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {FontWeight} value
  * @return {StylesBuilder}
  * @public
  */
 m_fontWeight__org_gwtproject_dom_style_shared_FontWeight(value) {
  Style_$Overlay.m_setFontWeight__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_FontWeight(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_height__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_left__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_lineHeight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setLineHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {ListStyleType} value
  * @return {StylesBuilder}
  * @public
  */
 m_listStyleType__org_gwtproject_dom_style_shared_ListStyleType(value) {
  Style_$Overlay.m_setListStyleType__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_ListStyleType(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_margin__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setMargin__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setMarginBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setMarginLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginRight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setMarginRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginTop__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setMarginTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @return {StylesBuilder}
  * @public
  */
 m_opacity__double(value) {
  Style_$Overlay.m_setOpacity__$devirt__org_gwtproject_dom_client_Style__double(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {OutlineStyle} value
  * @return {StylesBuilder}
  * @public
  */
 m_outlineStyle__org_gwtproject_dom_style_shared_OutlineStyle(value) {
  Style_$Overlay.m_setOutlineStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_OutlineStyle(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_outlineWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setOutlineWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {Overflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_overflow__org_gwtproject_dom_style_shared_Overflow(value) {
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {Overflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_overflowX__org_gwtproject_dom_style_shared_Overflow(value) {
  Style_$Overlay.m_setOverflowX__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {Overflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_overflowY__org_gwtproject_dom_style_shared_Overflow(value) {
  Style_$Overlay.m_setOverflowY__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_padding__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setPadding__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setPaddingBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setPaddingLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setPaddingRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingTop__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setPaddingTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {Position} value
  * @return {StylesBuilder}
  * @public
  */
 m_position__org_gwtproject_dom_style_shared_Position(value) {
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_right__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {TableLayout} value
  * @return {StylesBuilder}
  * @public
  */
 m_tableLayout__org_gwtproject_dom_style_shared_TableLayout(value) {
  Style_$Overlay.m_setTableLayout__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TableLayout(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {TextAlign} value
  * @return {StylesBuilder}
  * @public
  */
 m_textAlign__org_gwtproject_dom_style_shared_TextAlign(value) {
  Style_$Overlay.m_setTextAlign__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextAlign(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {TextDecoration} value
  * @return {StylesBuilder}
  * @public
  */
 m_textDecoration__org_gwtproject_dom_style_shared_TextDecoration(value) {
  Style_$Overlay.m_setTextDecoration__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextDecoration(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_textIndent__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setTextIndent__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {TextJustify} value
  * @return {StylesBuilder}
  * @public
  */
 m_textJustify__org_gwtproject_dom_style_shared_TextJustify(value) {
  Style_$Overlay.m_setTextJustify__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextJustify(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {TextOverflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_textOverflow__org_gwtproject_dom_style_shared_TextOverflow(value) {
  Style_$Overlay.m_setTextOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextOverflow(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {TextTransform} value
  * @return {StylesBuilder}
  * @public
  */
 m_textTransform__org_gwtproject_dom_style_shared_TextTransform(value) {
  Style_$Overlay.m_setTextTransform__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextTransform(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_top__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedBackgroundColor__java_lang_String(value) {
  Style_$Overlay.m_setBackgroundColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedBackgroundImage__java_lang_String(value) {
  Style_$Overlay.m_setBackgroundImage__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedBorderColor__java_lang_String(value) {
  Style_$Overlay.m_setBorderColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedColor__java_lang_String(value) {
  Style_$Overlay.m_setColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedOutlineColor__java_lang_String(value) {
  Style_$Overlay.m_setOutlineColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {?string} name
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_trustedProperty__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(name, value, unit) {
  name = DomStylesBuilder.m_toCamelCaseForm__java_lang_String(name);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), name, value, unit);
  return this;
 }
 /**
  * @override
  * @param {?string} name
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedProperty__java_lang_String__java_lang_String(name, value) {
  name = DomStylesBuilder.m_toCamelCaseForm__java_lang_String(name);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), name, value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_verticalAlign__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setVerticalAlign__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {VerticalAlign} value
  * @return {StylesBuilder}
  * @public
  */
 m_verticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(value) {
  Style_$Overlay.m_setVerticalAlign__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_VerticalAlign(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {Visibility} value
  * @return {StylesBuilder}
  * @public
  */
 m_visibility__org_gwtproject_dom_style_shared_Visibility(value) {
  Style_$Overlay.m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_width__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value, unit);
  return this;
 }
 /**
  * @override
  * @param {number} value
  * @return {StylesBuilder}
  * @public
  */
 m_zIndex__int(value) {
  Style_$Overlay.m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int(this.f_delegate__org_gwtproject_dom_builder_client_DomStylesBuilder_.m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client(), value);
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomStylesBuilder.$clinit = () =>{};
  DomStylesBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomStylesBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  RegExp = goog.module.get('org.gwtproject.regexp.shared.RegExp$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomStylesBuilder, 'org.gwtproject.dom.builder.client.DomStylesBuilder');

StylesBuilder.$markImplementor(DomStylesBuilder);

/** @public {Object<string, ?string>} */
DomStylesBuilder.f_hyphenatedMap__org_gwtproject_dom_builder_client_DomStylesBuilder_;
/** @public {RegExp} */
DomStylesBuilder.f_maybeHyphenatedWord__org_gwtproject_dom_builder_client_DomStylesBuilder_;

exports = DomStylesBuilder; 
//# sourceMappingURL=DomStylesBuilder.js.map