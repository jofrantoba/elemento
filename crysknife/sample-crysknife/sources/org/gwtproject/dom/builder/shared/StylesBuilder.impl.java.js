goog.module('org.gwtproject.dom.builder.shared.StylesBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

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
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 */
class StylesBuilder {
 /**
  * @abstract
  * @param {SafeUri} uri
  * @return {StylesBuilder}
  * @public
  */
 m_backgroundImage__org_gwtproject_safehtml_shared_SafeUri(uri) {}
 /**
  * @abstract
  * @param {BorderStyle} value
  * @return {StylesBuilder}
  * @public
  */
 m_borderStyle__org_gwtproject_dom_style_shared_BorderStyle(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_borderWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_bottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {Cursor} value
  * @return {StylesBuilder}
  * @public
  */
 m_cursor__org_gwtproject_dom_style_shared_Cursor(value) {}
 /**
  * @abstract
  * @param {Display} value
  * @return {StylesBuilder}
  * @public
  */
 m_display__org_gwtproject_dom_style_shared_Display(value) {}
 /**
  * @abstract
  * @public
  */
 m_endStyle__() {}
 /**
  * @abstract
  * @param {Float} value
  * @return {StylesBuilder}
  * @public
  */
 m_floatprop__org_gwtproject_dom_style_shared_Float(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_fontSize__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {FontStyle} value
  * @return {StylesBuilder}
  * @public
  */
 m_fontStyle__org_gwtproject_dom_style_shared_FontStyle(value) {}
 /**
  * @abstract
  * @param {FontWeight} value
  * @return {StylesBuilder}
  * @public
  */
 m_fontWeight__org_gwtproject_dom_style_shared_FontWeight(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_height__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_left__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_lineHeight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {ListStyleType} value
  * @return {StylesBuilder}
  * @public
  */
 m_listStyleType__org_gwtproject_dom_style_shared_ListStyleType(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_margin__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginRight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_marginTop__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @return {StylesBuilder}
  * @public
  */
 m_opacity__double(value) {}
 /**
  * @abstract
  * @param {OutlineStyle} value
  * @return {StylesBuilder}
  * @public
  */
 m_outlineStyle__org_gwtproject_dom_style_shared_OutlineStyle(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_outlineWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {Overflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_overflow__org_gwtproject_dom_style_shared_Overflow(value) {}
 /**
  * @abstract
  * @param {Overflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_overflowX__org_gwtproject_dom_style_shared_Overflow(value) {}
 /**
  * @abstract
  * @param {Overflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_overflowY__org_gwtproject_dom_style_shared_Overflow(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_padding__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_paddingTop__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {Position} value
  * @return {StylesBuilder}
  * @public
  */
 m_position__org_gwtproject_dom_style_shared_Position(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_right__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {TableLayout} value
  * @return {StylesBuilder}
  * @public
  */
 m_tableLayout__org_gwtproject_dom_style_shared_TableLayout(value) {}
 /**
  * @abstract
  * @param {TextAlign} value
  * @return {StylesBuilder}
  * @public
  */
 m_textAlign__org_gwtproject_dom_style_shared_TextAlign(value) {}
 /**
  * @abstract
  * @param {TextDecoration} value
  * @return {StylesBuilder}
  * @public
  */
 m_textDecoration__org_gwtproject_dom_style_shared_TextDecoration(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_textIndent__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {TextJustify} value
  * @return {StylesBuilder}
  * @public
  */
 m_textJustify__org_gwtproject_dom_style_shared_TextJustify(value) {}
 /**
  * @abstract
  * @param {TextOverflow} value
  * @return {StylesBuilder}
  * @public
  */
 m_textOverflow__org_gwtproject_dom_style_shared_TextOverflow(value) {}
 /**
  * @abstract
  * @param {TextTransform} value
  * @return {StylesBuilder}
  * @public
  */
 m_textTransform__org_gwtproject_dom_style_shared_TextTransform(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_top__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedBackgroundColor__java_lang_String(value) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedBackgroundImage__java_lang_String(value) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedBorderColor__java_lang_String(value) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedColor__java_lang_String(value) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedOutlineColor__java_lang_String(value) {}
 /**
  * @abstract
  * @param {?string} name
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_trustedProperty__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(name, value, unit) {}
 /**
  * @abstract
  * @param {?string} name
  * @param {?string} value
  * @return {StylesBuilder}
  * @public
  */
 m_trustedProperty__java_lang_String__java_lang_String(name, value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_verticalAlign__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {VerticalAlign} value
  * @return {StylesBuilder}
  * @public
  */
 m_verticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(value) {}
 /**
  * @abstract
  * @param {Visibility} value
  * @return {StylesBuilder}
  * @public
  */
 m_visibility__org_gwtproject_dom_style_shared_Visibility(value) {}
 /**
  * @abstract
  * @param {number} value
  * @param {Unit} unit
  * @return {StylesBuilder}
  * @public
  */
 m_width__double__org_gwtproject_dom_style_shared_Unit(value, unit) {}
 /**
  * @abstract
  * @param {number} value
  * @return {StylesBuilder}
  * @public
  */
 m_zIndex__int(value) {}
 /**
  * @public
  */
 static $clinit() {
  StylesBuilder.$clinit = () =>{};
  StylesBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_StylesBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_StylesBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StylesBuilder, 'org.gwtproject.dom.builder.shared.StylesBuilder');

StylesBuilder.$markImplementor(/** @type {Function} */ (StylesBuilder));

exports = StylesBuilder; 
//# sourceMappingURL=StylesBuilder.js.map