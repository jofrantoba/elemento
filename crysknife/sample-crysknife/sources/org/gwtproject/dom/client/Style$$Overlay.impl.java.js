goog.module('org.gwtproject.dom.client.Style.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
let CSSStyleDeclaration_$Overlay = goog.forwardDeclare('elemental2.dom.CSSStyleDeclaration.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Clear = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear$impl');
let CssProperty = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty$impl');
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
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Style_$Overlay {
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearBackgroundColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearBackgroundImage__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearBorderColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearBorderStyle__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearBorderWidth__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearBottom__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearClear__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CLEAR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearCursor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CURSOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearDisplay__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearFloat__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FLOAT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearFontSize__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearFontStyle__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearFontWeight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearHeight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearLeft__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearLineHeight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearListStyleType__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearMargin__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearMarginBottom__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearMarginLeft__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearMarginRight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearMarginTop__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOpacity__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  /**@type {CSSStyleDeclaration} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).opacity = $Overlay.m_of__java_lang_Object("");
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOutlineColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOutlineStyle__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOutlineWidth__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOverflow__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOverflowX__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearOverflowY__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearPadding__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearPaddingBottom__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearPaddingLeft__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearPaddingRight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearPaddingTop__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearPosition__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_POSITION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @param {CssProperty} name
  * @public
  */
 static m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, name) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name.m_getJsName__(), "");
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @public
  */
 static m_clearProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, "");
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearRight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTableLayout__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTextAlign__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTextDecoration__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTextIndent__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTextJustify__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTextOverflow__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTextTransform__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearTop__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearVisibility__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearWhiteSpace__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearWidth__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @public
  */
 static m_clearZIndex__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getBackgroundColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getBackgroundImage__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getBorderColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getBorderStyle__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getBorderWidth__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getBottom__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getClear__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CLEAR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getColor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getCursor__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CURSOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getDisplay__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getFontSize__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getFontStyle__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getFontWeight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getHeight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getLeft__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getLineHeight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getListStyleType__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getMargin__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getMarginBottom__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getMarginLeft__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getMarginRight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getMarginTop__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getOpacity__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OPACITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getOverflow__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getOverflowX__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getOverflowY__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getPadding__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getPaddingBottom__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getPaddingLeft__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getPaddingRight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getPaddingTop__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getPosition__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_POSITION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @param {CssProperty} name
  * @return {?string}
  * @public
  */
 static m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, name) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name.m_getJsName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {?string}
  * @public
  */
 static m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
  return Style_$Overlay.m_getPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getRight__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTableLayout__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTextAlign__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTextDecoration__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTextIndent__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTextJustify__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTextOverflow__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTextTransform__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getTop__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getVerticalAlign__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getVisibility__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getWhiteSpace__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getWidth__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @return {?string}
  * @public
  */
 static m_getZIndex__$devirt__org_gwtproject_dom_client_Style($thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} value
  * @public
  */
 static m_setBackgroundColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} value
  * @public
  */
 static m_setBackgroundImage__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} value
  * @public
  */
 static m_setBorderColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {BorderStyle} value
  * @public
  */
 static m_setBorderStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_BorderStyle($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setBorderWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Clear} value
  * @public
  */
 static m_setClear__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Clear($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_CLEAR__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} value
  * @public
  */
 static m_setColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Cursor} value
  * @public
  */
 static m_setCursor__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Cursor($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_CURSOR__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {Display} value
  * @public
  */
 static m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {Float} value
  * @public
  */
 static m_setFloat__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Float($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_FLOAT__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setFontSize__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {FontStyle} value
  * @public
  */
 static m_setFontStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_FontStyle($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {FontWeight} value
  * @public
  */
 static m_setFontWeight__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_FontWeight($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_LEFT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setLineHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {ListStyleType} value
  * @public
  */
 static m_setListStyleType__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_ListStyleType($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setMargin__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setMarginBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setMarginLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setMarginRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setMarginTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @public
  */
 static m_setOpacity__$devirt__org_gwtproject_dom_client_Style__double($thisArg, value) {
  Style_$Overlay.$clinit();
  /**@type {CSSStyleDeclaration} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)).opacity = $Overlay.m_of__java_lang_Object(value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} value
  * @public
  */
 static m_setOutlineColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {OutlineStyle} value
  * @public
  */
 static m_setOutlineStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_OutlineStyle($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setOutlineWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Overflow} value
  * @public
  */
 static m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {Overflow} value
  * @public
  */
 static m_setOverflowX__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {Overflow} value
  * @public
  */
 static m_setOverflowY__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setPadding__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setPaddingBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setPaddingLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setPaddingRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setPaddingTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Position} value
  * @public
  */
 static m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_POSITION__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {CssProperty} name
  * @param {?string} value
  * @public
  */
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, name, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name.m_getJsName__(), value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, value);
 }
 /**
  * @param {!Object} $thisArg
  * @param {CssProperty} name
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, name, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name.m_getJsName__(), value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit($thisArg, name, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {number} value
  * @public
  */
 static m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int($thisArg, name, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit($thisArg, name, value, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_RIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {TableLayout} value
  * @public
  */
 static m_setTableLayout__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TableLayout($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextAlign} value
  * @public
  */
 static m_setTextAlign__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextAlign($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextDecoration} value
  * @public
  */
 static m_setTextDecoration__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextDecoration($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setTextIndent__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextJustify} value
  * @public
  */
 static m_setTextJustify__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextJustify($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextOverflow} value
  * @public
  */
 static m_setTextOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextOverflow($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextTransform} value
  * @public
  */
 static m_setTextTransform__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextTransform($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_TOP__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {VerticalAlign} value
  * @public
  */
 static m_setVerticalAlign__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_VerticalAlign($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setVerticalAlign__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Visibility} value
  * @public
  */
 static m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {WhiteSpace} value
  * @public
  */
 static m_setWhiteSpace__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_WhiteSpace($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @param {Unit} unit
  * @public
  */
 static m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit($thisArg, value, unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_WIDTH__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} value
  * @public
  */
 static m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int($thisArg, value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty, value + "");
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @public
  */
 static m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name) {
  $Asserts.$assertWithMessage(!j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, "-"), "The style name '" + j_l_String.m_valueOf__java_lang_Object(name) + "' should be in camelCase format");
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @return {?string}
  * @public
  */
 static m_getPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name) {
  return /**@type {?string} */ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, ?string>} */ (Js.m_uncheckedCast__java_lang_Object($thisArg)), name), j_l_String));
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 static m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, value) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 /**
  * @public
  */
 static $clinit() {
  Style_$Overlay.$clinit = () =>{};
  Style_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Object;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  CssProperty = goog.module.get('org.gwtproject.dom.style.shared.CssProperty$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Style_$Overlay, 'Object');

exports = Style_$Overlay; 
//# sourceMappingURL=Style$$Overlay.js.map