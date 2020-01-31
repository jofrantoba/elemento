goog.module('org.gwtproject.cell.client.ActionCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Delegate = goog.forwardDeclare('org.gwtproject.cell.client.ActionCell.Delegate$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @template C
 * @extends {AbstractCell<C>}
  */
class ActionCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
  /**@type {SafeHtml}*/
  this.f_html__org_gwtproject_cell_client_ActionCell_;
  /**@type {Delegate<C>}*/
  this.f_delegate__org_gwtproject_cell_client_ActionCell_;
 }
 //Factory method corresponding to constructor 'ActionCell(SafeHtml, Delegate)'.
 /** @template C @return {!ActionCell<C>} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_cell_client_ActionCell_Delegate(/** SafeHtml */ message, /** Delegate<C> */ delegate) {
  ActionCell.$clinit();
  let $instance = new ActionCell();
  $instance.$ctor__org_gwtproject_cell_client_ActionCell__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_cell_client_ActionCell_Delegate(message, delegate);
  return $instance;
 }
 //Initialization from constructor 'ActionCell(SafeHtml, Delegate)'.
 
 $ctor__org_gwtproject_cell_client_ActionCell__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_cell_client_ActionCell_Delegate(/** SafeHtml */ message, /** Delegate<C> */ delegate) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  this.f_delegate__org_gwtproject_cell_client_ActionCell_ = delegate;
  this.f_html__org_gwtproject_cell_client_ActionCell_ = SafeHtmlBuilder.$create__().m_appendHtmlConstant__java_lang_String("<button type=\"button\" tabindex=\"-1\">").m_append__org_gwtproject_safehtml_shared_SafeHtml(message).m_appendHtmlConstant__java_lang_String("</button>").m_toSafeHtml__();
 }
 //Factory method corresponding to constructor 'ActionCell(String, Delegate)'.
 /** @template C @return {!ActionCell<C>} */
 static $create__java_lang_String__org_gwtproject_cell_client_ActionCell_Delegate(/** ?string */ text, /** Delegate<C> */ delegate) {
  ActionCell.$clinit();
  let $instance = new ActionCell();
  $instance.$ctor__org_gwtproject_cell_client_ActionCell__java_lang_String__org_gwtproject_cell_client_ActionCell_Delegate(text, delegate);
  return $instance;
 }
 //Initialization from constructor 'ActionCell(String, Delegate)'.
 
 $ctor__org_gwtproject_cell_client_ActionCell__java_lang_String__org_gwtproject_cell_client_ActionCell_Delegate(/** ?string */ text, /** Delegate<C> */ delegate) {
  this.$ctor__org_gwtproject_cell_client_ActionCell__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_cell_client_ActionCell_Delegate(SafeHtmlUtils.m_fromString__java_lang_String(text), delegate);
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** C */ value, /** Object */ event, /** ValueUpdater<C> */ valueUpdater) {
  super.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event))) {
   let eventTarget = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
    return;
   }
   if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(eventTarget))) {
    this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
   }
  }
 }
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** C */ value, /** SafeHtmlBuilder */ sb) {
  sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.f_html__org_gwtproject_cell_client_ActionCell_);
 }
 /** @override */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** C */ value, /** Object */ event, /** ValueUpdater<C> */ valueUpdater) {
  this.f_delegate__org_gwtproject_cell_client_ActionCell_.m_execute__java_lang_Object(value);
 }
 
 static $clinit() {
  ActionCell.$clinit = () =>{};
  ActionCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ActionCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(ActionCell, 'org.gwtproject.cell.client.ActionCell');

exports = ActionCell; 
//# sourceMappingURL=ActionCell.js.map