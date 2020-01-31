goog.module('org.gwtproject.cell.client.IconCellDecorator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Cell = goog.require('org.gwtproject.cell.client.Cell$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.IconCellDecorator.Template$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeStylesBuilder = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let HasVerticalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template C
 * @implements {Cell<C>}
  */
class IconCellDecorator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Cell<C>}*/
  this.f_cell__org_gwtproject_cell_client_IconCellDecorator_;
  /**@type {?string}*/
  this.f_direction__org_gwtproject_cell_client_IconCellDecorator_;
  /**@type {SafeHtml}*/
  this.f_iconHtml__org_gwtproject_cell_client_IconCellDecorator_;
  /**@type {number}*/
  this.f_imageWidth__org_gwtproject_cell_client_IconCellDecorator_ = 0;
  /**@type {SafeStyles}*/
  this.f_outerDivPadding__org_gwtproject_cell_client_IconCellDecorator_;
  /**@type {SafeHtml}*/
  this.f_placeHolderHtml__org_gwtproject_cell_client_IconCellDecorator_;
 }
 //Factory method corresponding to constructor 'IconCellDecorator(ImageResource, Cell)'.
 /** @template C @return {!IconCellDecorator<C>} */
 static $create__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell(/** ImageResource */ icon, /** Cell<C> */ cell) {
  IconCellDecorator.$clinit();
  let $instance = new IconCellDecorator();
  $instance.$ctor__org_gwtproject_cell_client_IconCellDecorator__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell(icon, cell);
  return $instance;
 }
 //Initialization from constructor 'IconCellDecorator(ImageResource, Cell)'.
 
 $ctor__org_gwtproject_cell_client_IconCellDecorator__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell(/** ImageResource */ icon, /** Cell<C> */ cell) {
  this.$ctor__org_gwtproject_cell_client_IconCellDecorator__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__int(icon, cell, HasVerticalAlignment.f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment, IconCellDecorator.f_DEFAULT_SPACING__org_gwtproject_cell_client_IconCellDecorator_);
 }
 //Factory method corresponding to constructor 'IconCellDecorator(ImageResource, Cell, VerticalAlignmentConstant, int)'.
 /** @template C @return {!IconCellDecorator<C>} */
 static $create__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__int(/** ImageResource */ icon, /** Cell<C> */ cell, /** VerticalAlignmentConstant */ valign, /** number */ spacing) {
  IconCellDecorator.$clinit();
  let $instance = new IconCellDecorator();
  $instance.$ctor__org_gwtproject_cell_client_IconCellDecorator__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__int(icon, cell, valign, spacing);
  return $instance;
 }
 //Initialization from constructor 'IconCellDecorator(ImageResource, Cell, VerticalAlignmentConstant, int)'.
 
 $ctor__org_gwtproject_cell_client_IconCellDecorator__org_gwtproject_resources_client_ImageResource__org_gwtproject_cell_client_Cell__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__int(/** ImageResource */ icon, /** Cell<C> */ cell, /** VerticalAlignmentConstant */ valign, /** number */ spacing) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_cell_client_IconCellDecorator();
  this.f_cell__org_gwtproject_cell_client_IconCellDecorator_ = cell;
  this.f_iconHtml__org_gwtproject_cell_client_IconCellDecorator_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__boolean_$pp_org_gwtproject_cell_client(icon, valign, false);
  this.f_imageWidth__org_gwtproject_cell_client_IconCellDecorator_ = icon.m_getWidth__() + spacing;
  this.f_placeHolderHtml__org_gwtproject_cell_client_IconCellDecorator_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__boolean_$pp_org_gwtproject_cell_client(icon, valign, true);
  this.f_outerDivPadding__org_gwtproject_cell_client_IconCellDecorator_ = SafeStylesUtils.m_fromTrustedString__java_lang_String("padding-" + j_l_String.m_valueOf__java_lang_Object(this.f_direction__org_gwtproject_cell_client_IconCellDecorator_) + ": " + this.f_imageWidth__org_gwtproject_cell_client_IconCellDecorator_ + "px;");
 }
 /** @override @return {boolean} */
 m_dependsOnSelection__() {
  return this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_dependsOnSelection__();
 }
 /** @override @return {Set<?string>} */
 m_getConsumedEvents__() {
  return this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_getConsumedEvents__();
 }
 /** @override @return {boolean} */
 m_handlesSelection__() {
  return this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_handlesSelection__();
 }
 /** @override @return {boolean} */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {
  return this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, this.m_getCellParent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_IconCellDecorator(parent), value);
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** C */ value, /** Object */ event, /** ValueUpdater<C> */ valueUpdater) {
  this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, this.m_getCellParent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_IconCellDecorator(parent), value, event, valueUpdater);
 }
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** C */ value, /** SafeHtmlBuilder */ sb) {
  let cellBuilder = SafeHtmlBuilder.$create__();
  this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, cellBuilder);
  sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template.m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(this.f_outerDivPadding__org_gwtproject_cell_client_IconCellDecorator_, this.m_isIconUsed__java_lang_Object(value) ? this.m_getIconHtml__java_lang_Object(value) : this.f_placeHolderHtml__org_gwtproject_cell_client_IconCellDecorator_, cellBuilder.m_toSafeHtml__()));
 }
 /** @override @return {boolean} */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {
  return this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, this.m_getCellParent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_IconCellDecorator(parent), value);
 }
 /** @override */
 m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Object */ parent, /** C */ value) {
  this.f_cell__org_gwtproject_cell_client_IconCellDecorator_.m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, this.m_getCellParent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_IconCellDecorator(parent), value);
 }
 /** @return {SafeHtml} */
 m_getIconHtml__java_lang_Object(/** C */ value) {
  return this.f_iconHtml__org_gwtproject_cell_client_IconCellDecorator_;
 }
 /** @return {boolean} */
 m_isIconUsed__java_lang_Object(/** C */ value) {
  return true;
 }
 /** @return {SafeHtml} */
 m_getImageHtml__org_gwtproject_resources_client_ImageResource__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant__boolean_$pp_org_gwtproject_cell_client(/** ImageResource */ res, /** VerticalAlignmentConstant */ valign, /** boolean */ isPlaceholder) {
  let /** SafeHtml */ image;
  if (isPlaceholder) {
   image = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("<div></div>");
  } else {
   let proto = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(res);
   image = proto.m_getSafeHtml__();
  }
  let cssStyles = SafeStylesBuilder.$create__().m_appendTrustedString__java_lang_String(j_l_String.m_valueOf__java_lang_Object(this.f_direction__org_gwtproject_cell_client_IconCellDecorator_) + ":0px;");
  if ($Equality.$same(HasVerticalAlignment.f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment, valign)) {
   return Template.f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template.m_imageWrapperTop__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(cssStyles.m_toSafeStyles__(), image);
  } else if ($Equality.$same(HasVerticalAlignment.f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment, valign)) {
   return Template.f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template.m_imageWrapperBottom__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(cssStyles.m_toSafeStyles__(), image);
  } else {
   let halfHeight = $Primitives.$narrowLongToInt(Math.m_round__double(res.m_getHeight__() / 2.0));
   cssStyles.m_appendTrustedString__java_lang_String("margin-top:-" + halfHeight + "px;");
   return Template.f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template.m_imageWrapperMiddle__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(cssStyles.m_toSafeStyles__(), image);
  }
 }
 /** @return {Object} */
 m_getCellParent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_IconCellDecorator(/** Object */ parent) {
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), 1)), Element_$Overlay));
 }
 /** @private */
 $init___$p_org_gwtproject_cell_client_IconCellDecorator() {
  this.f_direction__org_gwtproject_cell_client_IconCellDecorator_ = LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? "right" : "left";
 }
 
 static $clinit() {
  IconCellDecorator.$clinit = () =>{};
  IconCellDecorator.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconCellDecorator;
 }
 
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Template = goog.module.get('org.gwtproject.cell.client.IconCellDecorator.Template$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  SafeStylesBuilder = goog.module.get('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  HasVerticalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(IconCellDecorator, 'org.gwtproject.cell.client.IconCellDecorator');

Cell.$markImplementor(IconCellDecorator);

/**@const {number}*/
IconCellDecorator.f_DEFAULT_SPACING__org_gwtproject_cell_client_IconCellDecorator_ = 6;

exports = IconCellDecorator; 
//# sourceMappingURL=IconCellDecorator.js.map