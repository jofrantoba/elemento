goog.module('org.gwtproject.cell.client.TextInputCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractInputCell = goog.require('org.gwtproject.cell.client.AbstractInputCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.TextInputCell.Template$impl');
let ViewData = goog.forwardDeclare('org.gwtproject.cell.client.TextInputCell.ViewData$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractInputCell<?string, ViewData>}
  */
class TextInputCell extends AbstractInputCell {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TextInputCell()'.
 /** @return {!TextInputCell} */
 static $create__() {
  TextInputCell.$clinit();
  let $instance = new TextInputCell();
  $instance.$ctor__org_gwtproject_cell_client_TextInputCell__();
  return $instance;
 }
 //Initialization from constructor 'TextInputCell()'.
 
 $ctor__org_gwtproject_cell_client_TextInputCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractInputCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
 }
 //Factory method corresponding to constructor 'TextInputCell(SafeHtmlRenderer)'.
 /** @return {!TextInputCell} @deprecated */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  TextInputCell.$clinit();
  let $instance = new TextInputCell();
  $instance.$ctor__org_gwtproject_cell_client_TextInputCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 //Initialization from constructor 'TextInputCell(SafeHtmlRenderer)'.
 /** @deprecated */
 $ctor__org_gwtproject_cell_client_TextInputCell__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  this.$ctor__org_gwtproject_cell_client_TextInputCell__();
 }
 
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** ?string */ value, /** Object */ event, /** ValueUpdater<?string> */ valueUpdater) {
  super.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  let input = this.m_getInputElement__org_gwtproject_dom_client_Element(parent);
  let target = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  if (!Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(input, target)) {
   return;
  }
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let key = context.m_getKey__();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.m_finishEditing__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(parent, value, key, valueUpdater);
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   let vd = /**@type {ViewData}*/ ($Casts.$to(this.m_getViewData__java_lang_Object(key), ViewData));
   if ($Equality.$same(vd, null)) {
    vd = ViewData.$create__java_lang_String(value);
    this.m_setViewData__java_lang_Object__java_lang_Object(key, vd);
   }
   vd.m_setCurrentValue__java_lang_String(input.value);
  }
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** ?string */ value, /** SafeHtmlBuilder */ sb) {
  let key = context.m_getKey__();
  let viewData = /**@type {ViewData}*/ ($Casts.$to(this.m_getViewData__java_lang_Object(key), ViewData));
  if (!$Equality.$same(viewData, null) && j_l_String.m_equals__java_lang_String__java_lang_Object(viewData.m_getCurrentValue__(), value)) {
   this.m_clearViewData__java_lang_Object(key);
   viewData = null;
  }
  let s = (!$Equality.$same(viewData, null)) ? viewData.m_getCurrentValue__() : value;
  if (!$Equality.$same(s, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_TextInputCell_Template.m_input__java_lang_String(s));
  } else {
   sb.m_appendHtmlConstant__java_lang_String("<input type=\"text\" tabindex=\"-1\"></input>");
  }
 }
 
 m_finishEditing__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(/** Object */ parent, /** ?string */ value, /** * */ key, /** ValueUpdater<?string> */ valueUpdater) {
  let newValue = this.m_getInputElement__org_gwtproject_dom_client_Element(parent).value;
  let vd = /**@type {ViewData}*/ ($Casts.$to(this.m_getViewData__java_lang_Object(key), ViewData));
  if ($Equality.$same(vd, null)) {
   vd = ViewData.$create__java_lang_String(value);
   this.m_setViewData__java_lang_Object__java_lang_Object(key, vd);
  }
  vd.m_setCurrentValue__java_lang_String(newValue);
  if (!$Equality.$same(valueUpdater, null) && !j_l_String.m_equals__java_lang_String__java_lang_Object(vd.m_getCurrentValue__(), vd.m_getLastValue__())) {
   vd.m_setLastValue__java_lang_String(newValue);
   valueUpdater.m_update__java_lang_Object(newValue);
  }
  super.m_finishEditing__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(parent, newValue, key, valueUpdater);
 }
 /** @override @return {Object} */
 m_getInputElement__org_gwtproject_dom_client_Element(/** Object */ parent) {
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(super.m_getInputElement__org_gwtproject_dom_client_Element(parent)), InputElement_$Overlay));
 }
 //Bridge method.
 /** @override */
 m_finishEditing__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(/** Object */ arg0, /** * */ arg1, /** * */ arg2, /** ValueUpdater */ arg3) {
  this.m_finishEditing__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(arg0, /**@type {?string}*/ ($Casts.$to(arg1, j_l_String)), arg2, arg3);
 }
 //Bridge method.
 /** @override */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ arg0, /** Object */ arg1, /** * */ arg2, /** Object */ arg3, /** ValueUpdater */ arg4) {
  this.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, /**@type {?string}*/ ($Casts.$to(arg2, j_l_String)), arg3, arg4);
 }
 //Bridge method.
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ arg0, /** * */ arg1, /** SafeHtmlBuilder */ arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {?string}*/ ($Casts.$to(arg1, j_l_String)), arg2);
 }
 
 static $clinit() {
  TextInputCell.$clinit = () =>{};
  TextInputCell.$loadModules();
  AbstractInputCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Template = goog.module.get('org.gwtproject.cell.client.TextInputCell.Template$impl');
  ViewData = goog.module.get('org.gwtproject.cell.client.TextInputCell.ViewData$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TextInputCell, 'org.gwtproject.cell.client.TextInputCell');

exports = TextInputCell; 
//# sourceMappingURL=TextInputCell.js.map