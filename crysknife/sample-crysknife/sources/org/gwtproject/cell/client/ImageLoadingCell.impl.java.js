goog.module('org.gwtproject.cell.client.ImageLoadingCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let DefaultRenderers = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers$impl');
let Renderers = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.Renderers$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractCell<?string>}
  */
class ImageLoadingCell extends AbstractCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SafeHtmlRenderer<?string>} */
  this.f_errorRenderer__org_gwtproject_cell_client_ImageLoadingCell_;
  /** @public {SafeHtmlRenderer<?string>} */
  this.f_imageRenderer__org_gwtproject_cell_client_ImageLoadingCell_;
  /** @public {SafeHtmlRenderer<?string>} */
  this.f_loadingRenderer__org_gwtproject_cell_client_ImageLoadingCell_;
 }
 /**
  * Factory method corresponding to constructor 'ImageLoadingCell()'.
  * @return {!ImageLoadingCell}
  * @public
  */
 static $create__() {
  ImageLoadingCell.$clinit();
  let $instance = new ImageLoadingCell();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ImageLoadingCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageLoadingCell__() {
  this.$ctor__org_gwtproject_cell_client_ImageLoadingCell__org_gwtproject_cell_client_ImageLoadingCell_Renderers(DefaultRenderers.$create__());
 }
 /**
  * Factory method corresponding to constructor 'ImageLoadingCell(Renderers)'.
  * @param {Renderers} renderers
  * @return {!ImageLoadingCell}
  * @public
  */
 static $create__org_gwtproject_cell_client_ImageLoadingCell_Renderers(renderers) {
  ImageLoadingCell.$clinit();
  let $instance = new ImageLoadingCell();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell__org_gwtproject_cell_client_ImageLoadingCell_Renderers(renderers);
  return $instance;
 }
 /**
  * Initialization from constructor 'ImageLoadingCell(Renderers)'.
  * @param {Renderers} renderers
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageLoadingCell__org_gwtproject_cell_client_ImageLoadingCell_Renderers(renderers) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_ERROR__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  this.f_errorRenderer__org_gwtproject_cell_client_ImageLoadingCell_ = renderers.m_getErrorRenderer__();
  this.f_imageRenderer__org_gwtproject_cell_client_ImageLoadingCell_ = renderers.m_getImageRenderer__();
  this.f_loadingRenderer__org_gwtproject_cell_client_ImageLoadingCell_ = renderers.m_getLoadingRenderer__();
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {?string} value
  * @param {Object} event
  * @param {ValueUpdater<?string>} valueUpdater
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents, type) && this.m_eventOccurredOnImage__org_gwtproject_dom_client_NativeEvent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_ImageLoadingCell(event, parent)) {
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent).style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   let imgWrapper = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(parent, 1)), Element_$Overlay));
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(imgWrapper.style, "height", "auto");
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(imgWrapper.style, "width", "auto");
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(imgWrapper.style, "overflow", "auto");
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_ERROR__org_gwtproject_dom_client_BrowserEvents, type) && this.m_eventOccurredOnImage__org_gwtproject_dom_client_NativeEvent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_ImageLoadingCell(event, parent)) {
   Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), this.f_errorRenderer__org_gwtproject_cell_client_ImageLoadingCell_.m_render__java_lang_Object(value));
  }
 }
 /**
  * @param {Context} context
  * @param {?string} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template.m_loading__org_gwtproject_safehtml_shared_SafeHtml(this.f_loadingRenderer__org_gwtproject_cell_client_ImageLoadingCell_.m_render__java_lang_Object(value)));
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template.m_image__org_gwtproject_safehtml_shared_SafeHtml(this.f_imageRenderer__org_gwtproject_cell_client_ImageLoadingCell_.m_render__java_lang_Object(value)));
  }
 }
 /**
  * @param {Object} event
  * @param {Object} parent
  * @return {boolean}
  * @public
  */
 m_eventOccurredOnImage__org_gwtproject_dom_client_NativeEvent__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_ImageLoadingCell(event, parent) {
  let eventTarget = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   return false;
  }
  let target = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(eventTarget), Element_$Overlay));
  let imgWrapper = Element_$Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent));
  return Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(imgWrapper, target);
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {Object} arg1
  * @param {*} arg2
  * @param {Object} arg3
  * @param {ValueUpdater} arg4
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, arg2, arg3, arg4) {
  this.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, /**@type {?string} */ ($Casts.$to(arg2, j_l_String)), arg3, arg4);
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {*} arg1
  * @param {SafeHtmlBuilder} arg2
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, arg1, arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {?string} */ ($Casts.$to(arg1, j_l_String)), arg2);
 }
 /**
  * @public
  */
 static $clinit() {
  ImageLoadingCell.$clinit = () =>{};
  ImageLoadingCell.$loadModules();
  AbstractCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ImageLoadingCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultRenderers = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers$impl');
  Template = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageLoadingCell, 'org.gwtproject.cell.client.ImageLoadingCell');

exports = ImageLoadingCell; 
//# sourceMappingURL=ImageLoadingCell.js.map