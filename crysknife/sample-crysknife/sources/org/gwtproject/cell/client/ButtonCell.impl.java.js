goog.module('org.gwtproject.cell.client.ButtonCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSafeHtmlCell = goog.require('org.gwtproject.cell.client.AbstractSafeHtmlCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractSafeHtmlCell<?string>}
  */
class ButtonCell extends AbstractSafeHtmlCell {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'ButtonCell()'.
  * @return {!ButtonCell}
  * @public
  */
 static $create__() {
  ButtonCell.$clinit();
  let $instance = new ButtonCell();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCell__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ButtonCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCell__() {
  this.$ctor__org_gwtproject_cell_client_ButtonCell__org_gwtproject_text_shared_SafeHtmlRenderer(SimpleSafeHtmlRenderer.m_getInstance__());
 }
 /**
  * Factory method corresponding to constructor 'ButtonCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!ButtonCell}
  * @public
  */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  ButtonCell.$clinit();
  let $instance = new ButtonCell();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'ButtonCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  this.$ctor__org_gwtproject_cell_client_AbstractSafeHtmlCell__org_gwtproject_text_shared_SafeHtmlRenderer__arrayOf_java_lang_String(renderer, /**@type {!Array<?string>} */ ($Arrays.$init([BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
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
  super.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event))) {
   let eventTarget = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
    return;
   }
   if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(eventTarget))) {
    this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
   }
  }
 }
 /**
  * @override
  * @param {Context} context
  * @param {SafeHtml} data
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, data, sb) {
  sb.m_appendHtmlConstant__java_lang_String("<button type=\"button\" tabindex=\"-1\">");
  if (!$Equality.$same(data, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(data);
  }
  sb.m_appendHtmlConstant__java_lang_String("</button>");
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {?string} value
  * @param {Object} event
  * @param {ValueUpdater<?string>} valueUpdater
  * @public
  */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  if (!$Equality.$same(valueUpdater, null)) {
   valueUpdater.m_update__java_lang_Object(value);
  }
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
  * @param {Object} arg1
  * @param {*} arg2
  * @param {Object} arg3
  * @param {ValueUpdater} arg4
  * @public
  */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, arg2, arg3, arg4) {
  this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, /**@type {?string} */ ($Casts.$to(arg2, j_l_String)), arg3, arg4);
 }
 /**
  * @public
  */
 static $clinit() {
  ButtonCell.$clinit = () =>{};
  ButtonCell.$loadModules();
  AbstractSafeHtmlCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ButtonCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ButtonCell, 'org.gwtproject.cell.client.ButtonCell');

exports = ButtonCell; 
//# sourceMappingURL=ButtonCell.js.map