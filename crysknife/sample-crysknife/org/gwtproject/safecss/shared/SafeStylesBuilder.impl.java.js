goog.module('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Clear = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear$impl');
let Cursor = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Float = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float$impl');
let FontStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle$impl');
let FontWeight = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight$impl');
let ListStyleType = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType$impl');
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
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeStylesString = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesString$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

class SafeStylesBuilder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {StringBuilder} */
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_;
 }
 /**
  * @return {!SafeStylesBuilder}
  * @public
  */
 static $create__() {
  SafeStylesBuilder.$clinit();
  let $instance = new SafeStylesBuilder();
  $instance.$ctor__org_gwtproject_safecss_shared_SafeStylesBuilder__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_safecss_shared_SafeStylesBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_safecss_shared_SafeStylesBuilder();
 }
 /**
  * @param {SafeStyles} styles
  * @return {SafeStylesBuilder}
  * @public
  */
 m_append__org_gwtproject_safecss_shared_SafeStyles(styles) {
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_.m_append__java_lang_String(styles.m_asString__());
  return this;
 }
 /**
  * @param {?string} styles
  * @return {SafeStylesBuilder}
  * @public
  */
 m_appendTrustedString__java_lang_String(styles) {
  SafeStylesUtils.m_verifySafeStylesConstraints__java_lang_String(styles);
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_.m_append__java_lang_String(styles);
  return this;
 }
 /**
  * @param {SafeUri} uri
  * @return {SafeStylesBuilder}
  * @public
  */
 m_backgroundImage__org_gwtproject_safehtml_shared_SafeUri(uri) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBackgroundImage__org_gwtproject_safehtml_shared_SafeUri(uri));
 }
 /**
  * @param {BorderStyle} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_borderStyle__org_gwtproject_dom_style_shared_BorderStyle(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBorderStyle__org_gwtproject_dom_style_shared_BorderStyle(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_borderWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBorderWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_bottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {Clear} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_clear__org_gwtproject_dom_style_shared_Clear(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forClear__org_gwtproject_dom_style_shared_Clear(value));
 }
 /**
  * @param {Cursor} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_cursor__org_gwtproject_dom_style_shared_Cursor(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forCursor__org_gwtproject_dom_style_shared_Cursor(value));
 }
 /**
  * @param {Display} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_display__org_gwtproject_dom_style_shared_Display(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forDisplay__org_gwtproject_dom_style_shared_Display(value));
 }
 /**
  * @param {Float} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_floatprop__org_gwtproject_dom_style_shared_Float(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFloat__org_gwtproject_dom_style_shared_Float(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_fontSize__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFontSize__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {FontStyle} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_fontStyle__org_gwtproject_dom_style_shared_FontStyle(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFontStyle__org_gwtproject_dom_style_shared_FontStyle(value));
 }
 /**
  * @param {FontWeight} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_fontWeight__org_gwtproject_dom_style_shared_FontWeight(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFontWeight__org_gwtproject_dom_style_shared_FontWeight(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_height__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forHeight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_left__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {ListStyleType} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_listStyleType__org_gwtproject_dom_style_shared_ListStyleType(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forListStyleType__org_gwtproject_dom_style_shared_ListStyleType(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_margin__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMargin__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_marginBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_marginLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_marginRight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginRight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_marginTop__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginTop__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_opacity__double(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOpacity__double(value));
 }
 /**
  * @param {Overflow} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_overflow__org_gwtproject_dom_style_shared_Overflow(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOverflow__org_gwtproject_dom_style_shared_Overflow(value));
 }
 /**
  * @param {Overflow} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_overflowX__org_gwtproject_dom_style_shared_Overflow(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOverflowX__org_gwtproject_dom_style_shared_Overflow(value));
 }
 /**
  * @param {Overflow} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_overflowY__org_gwtproject_dom_style_shared_Overflow(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOverflowY__org_gwtproject_dom_style_shared_Overflow(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_padding__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPadding__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_paddingBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingRight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_paddingTop__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingTop__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {Position} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_position__org_gwtproject_dom_style_shared_Position(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPosition__org_gwtproject_dom_style_shared_Position(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_right__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forRight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {TableLayout} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_tableLayout__org_gwtproject_dom_style_shared_TableLayout(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTableLayout__org_gwtproject_dom_style_shared_TableLayout(value));
 }
 /**
  * @param {TextAlign} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_textAlign__org_gwtproject_dom_style_shared_TextAlign(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextAlign__org_gwtproject_dom_style_shared_TextAlign(value));
 }
 /**
  * @param {TextDecoration} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_textDecoration__org_gwtproject_dom_style_shared_TextDecoration(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextDecoration__org_gwtproject_dom_style_shared_TextDecoration(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_textIndent__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextIndent__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {TextJustify} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_textJustify__org_gwtproject_dom_style_shared_TextJustify(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextJustify__org_gwtproject_dom_style_shared_TextJustify(value));
 }
 /**
  * @param {TextOverflow} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_textOverflow__org_gwtproject_dom_style_shared_TextOverflow(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextOverflow__org_gwtproject_dom_style_shared_TextOverflow(value));
 }
 /**
  * @param {TextTransform} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_textTransform__org_gwtproject_dom_style_shared_TextTransform(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextTransform__org_gwtproject_dom_style_shared_TextTransform(value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_top__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTop__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @return {SafeStyles}
  * @public
  */
 m_toSafeStyles__() {
  return SafeStylesString.$create__java_lang_String(this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_.toString());
 }
 /**
  * @param {?string} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_trustedBackgroundColor__java_lang_String(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBackgroundColor__java_lang_String(value));
 }
 /**
  * @param {?string} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_trustedBackgroundImage__java_lang_String(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBackgroundImage__java_lang_String(value));
 }
 /**
  * @param {?string} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_trustedBorderColor__java_lang_String(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBorderColor__java_lang_String(value));
 }
 /**
  * @param {?string} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_trustedColor__java_lang_String(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedColor__java_lang_String(value));
 }
 /**
  * @param {?string} name
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_trustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(name, value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(name, value, unit));
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_trustedNameAndValue__java_lang_String__java_lang_String(name, value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String(name, value));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_verticalAlign__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forVerticalAlign__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {VerticalAlign} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_verticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forVerticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(value));
 }
 /**
  * @param {Visibility} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_visibility__org_gwtproject_dom_style_shared_Visibility(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forVisibility__org_gwtproject_dom_style_shared_Visibility(value));
 }
 /**
  * @param {WhiteSpace} whiteSpace
  * @return {SafeStylesBuilder}
  * @public
  */
 m_whiteSpace__org_gwtproject_dom_style_shared_WhiteSpace(whiteSpace) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forWhiteSpace__org_gwtproject_dom_style_shared_WhiteSpace(whiteSpace));
 }
 /**
  * @param {number} value
  * @param {Unit} unit
  * @return {SafeStylesBuilder}
  * @public
  */
 m_width__double__org_gwtproject_dom_style_shared_Unit(value, unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /**
  * @param {number} value
  * @return {SafeStylesBuilder}
  * @public
  */
 m_zIndex__int(value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forZIndex__int(value));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_safecss_shared_SafeStylesBuilder() {
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_ = StringBuilder.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  SafeStylesBuilder.$clinit = () =>{};
  SafeStylesBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SafeStylesBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  SafeStylesString = goog.module.get('org.gwtproject.safecss.shared.SafeStylesString$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
 }
 
}
$Util.$setClassMetadata(SafeStylesBuilder, 'org.gwtproject.safecss.shared.SafeStylesBuilder');

exports = SafeStylesBuilder; 
//# sourceMappingURL=SafeStylesBuilder.js.map