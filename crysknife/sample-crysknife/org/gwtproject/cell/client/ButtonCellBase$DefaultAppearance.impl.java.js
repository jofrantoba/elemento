goog.module('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Appearance = goog.require('org.gwtproject.cell.client.ButtonCellBase.Appearance$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonCellBase = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase$impl');
let Decoration = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.Decoration$impl');
let Resources = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Resources$impl');
let Style = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Style$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Template$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let CommonResources = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeStylesBuilder = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template C
 * @implements {Appearance<C>}
  */
class DefaultAppearance extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SafeHtml} */
  this.f_iconSafeHtml__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_;
  /** @public {ImageResource} */
  this.f_lastIcon__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_;
  /** @public {SafeHtmlRenderer<C>} */
  this.f_renderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_;
  /** @public {Style} */
  this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_;
 }
 /**
  * @return {Resources}
  * @public
  */
 static m_getDefaultResources__() {
  return Resources.f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources;
 }
 /**
  * Factory method corresponding to constructor 'DefaultAppearance(SafeHtmlRenderer)'.
  * @template C
  * @param {SafeHtmlRenderer<C>} renderer
  * @return {!DefaultAppearance<C>}
  * @public
  */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  DefaultAppearance.$clinit();
  let $instance = new DefaultAppearance();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultAppearance(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<C>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  this.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(renderer, DefaultAppearance.m_getDefaultResources__());
 }
 /**
  * Factory method corresponding to constructor 'DefaultAppearance(SafeHtmlRenderer, Resources)'.
  * @template C
  * @param {SafeHtmlRenderer<C>} renderer
  * @param {Resources} resources
  * @return {!DefaultAppearance<C>}
  * @public
  */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(renderer, resources) {
  DefaultAppearance.$clinit();
  let $instance = new DefaultAppearance();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(renderer, resources);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultAppearance(SafeHtmlRenderer, Resources)'.
  * @param {SafeHtmlRenderer<C>} renderer
  * @param {Resources} resources
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(renderer, resources) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance();
  this.f_renderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ = renderer;
  this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ = resources.m_buttonCellBaseStyle__();
  this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_ensureInjected__();
 }
 /**
  * @return {SafeHtmlRenderer<C>}
  * @public
  */
 m_getRenderer__() {
  return this.f_renderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_;
 }
 /**
  * @override
  * @param {Object} parent
  * @public
  */
 m_onPush__org_gwtproject_dom_client_Element(parent) {
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBasePushing__());
 }
 /**
  * @override
  * @param {Object} parent
  * @public
  */
 m_onUnpush__org_gwtproject_dom_client_Element(parent) {
  $Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String($Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBasePushing__());
 }
 /**
  * @override
  * @param {ButtonCellBase<C>} cell
  * @param {Context} context
  * @param {C} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(cell, context, value, sb) {
  let classes = SafeHtmlBuilder.$create__();
  classes.m_appendEscaped__java_lang_String(this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBase__());
  let decoration = cell.m_getDecoration__();
  if ($Equality.$same(decoration, Decoration.f_PRIMARY__org_gwtproject_cell_client_ButtonCellBase_Decoration)) {
   classes.m_appendEscaped__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBasePrimary__()));
  } else if ($Equality.$same(decoration, Decoration.f_NEGATIVE__org_gwtproject_cell_client_ButtonCellBase_Decoration)) {
   classes.m_appendEscaped__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBaseNegative__()));
  } else {
   classes.m_appendEscaped__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBaseDefault__()));
  }
  if (cell.m_isCollapseLeft__()) {
   classes.m_appendEscaped__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBaseCollapseLeft__()));
  }
  if (cell.m_isCollapseRight__()) {
   classes.m_appendEscaped__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_buttonCellBaseCollapseRight__()));
  }
  let icon = cell.m_getIcon__();
  if (!$Equality.$same(icon, this.f_lastIcon__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_)) {
   if ($Equality.$same(icon, null)) {
    this.f_iconSafeHtml__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ = SafeHtmlUtils.f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils;
   } else {
    let proto = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(icon);
    let iconOnly = proto.m_getSafeHtml__();
    let halfHeight = $Primitives.$narrowLongToInt(Math.m_round__double(icon.m_getHeight__() / 2.0));
    let styles = SafeStylesBuilder.$create__();
    styles.m_marginTop__double__org_gwtproject_dom_style_shared_Unit(-halfHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
     styles.m_right__double__org_gwtproject_dom_style_shared_Unit(0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    } else {
     styles.m_left__double__org_gwtproject_dom_style_shared_Unit(0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    }
    this.f_iconSafeHtml__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ = Template.f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template.m_iconWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(styles.m_toSafeStyles__(), iconOnly);
   }
  }
  let accessKey = cell.m_getAccessKey__();
  let attributes = StringBuilder.$create__();
  if (!cell.m_isEnabled__()) {
   attributes.m_append__java_lang_String("disabled=disabled ");
  }
  if (accessKey != 0) {
   attributes.m_append__java_lang_String("accessKey=\"").m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String("" + j_l_String.m_valueOf__char(accessKey)));
   attributes.m_append__java_lang_String("\" ");
  }
  let styles_1 = SafeStylesBuilder.$create__();
  let iconWidth = $Equality.$same(icon, null) ? 0 : icon.m_getWidth__();
  let iconPadding = iconWidth + DefaultAppearance.f_DEFAULT_ICON_PADDING__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_;
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   styles_1.m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(iconPadding, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   styles_1.m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(iconPadding, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  let safeValue = this.f_renderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_.m_render__java_lang_Object(value);
  let content = Template.f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template.m_iconContentLayout__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(CommonResources.m_getInlineBlockStyle__(), styles_1.m_toSafeStyles__(), this.f_iconSafeHtml__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_, safeValue);
  let tabIndex = cell.m_getTabIndex__();
  let openTag = StringBuilder.$create__();
  openTag.m_append__java_lang_String("<button type=\"button\"");
  openTag.m_append__java_lang_String(" class=\"" + j_l_String.m_valueOf__java_lang_Object(classes.m_toSafeHtml__().m_asString__()) + "\"");
  openTag.m_append__java_lang_String(" tabindex=\"" + tabIndex + "\" ");
  openTag.m_append__java_lang_String(attributes.toString()).m_append__java_lang_String(">");
  sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(SafeHtmlUtils.m_fromTrustedString__java_lang_String(openTag.toString()));
  sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(content);
  sb.m_appendHtmlConstant__java_lang_String("</button>");
 }
 /**
  * @override
  * @param {Object} parent
  * @param {boolean} focused
  * @public
  */
 m_setFocus__org_gwtproject_dom_client_Element__boolean(parent, focused) {
  let focusable = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent)), $Overlay));
  if (focused) {
   focusable.focus();
  } else {
   focusable.blur();
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance() {
  this.f_iconSafeHtml__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ = SafeHtmlUtils.f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultAppearance.$clinit = () =>{};
  DefaultAppearance.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultAppearance;
 }
 /**
  * @public
  */
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Decoration = goog.module.get('org.gwtproject.cell.client.ButtonCellBase.Decoration$impl');
  Resources = goog.module.get('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Resources$impl');
  Template = goog.module.get('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Template$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  CommonResources = goog.module.get('org.gwtproject.resources.client.CommonResources$impl');
  SafeStylesBuilder = goog.module.get('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(DefaultAppearance, 'org.gwtproject.cell.client.ButtonCellBase$DefaultAppearance');

Appearance.$markImplementor(DefaultAppearance);

/** @public {number} @const */
DefaultAppearance.f_DEFAULT_ICON_PADDING__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_ = 3;

exports = DefaultAppearance; 
//# sourceMappingURL=ButtonCellBase$DefaultAppearance.js.map