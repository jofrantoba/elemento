goog.module('org.gwtproject.cell.client.EditTextCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEditableCell = goog.require('org.gwtproject.cell.client.AbstractEditableCell$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.EditTextCell.Template$impl');
let ViewData = goog.forwardDeclare('org.gwtproject.cell.client.EditTextCell.ViewData$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

/**
 * @extends {AbstractEditableCell<?string, ViewData>}
  */
class EditTextCell extends AbstractEditableCell {
 /** @protected */
 constructor() {
  super();
  /**@type {SafeHtmlRenderer<?string>}*/
  this.f_renderer__org_gwtproject_cell_client_EditTextCell_;
 }
 //Factory method corresponding to constructor 'EditTextCell()'.
 /** @return {!EditTextCell} */
 static $create__() {
  EditTextCell.$clinit();
  let $instance = new EditTextCell();
  $instance.$ctor__org_gwtproject_cell_client_EditTextCell__();
  return $instance;
 }
 //Initialization from constructor 'EditTextCell()'.
 
 $ctor__org_gwtproject_cell_client_EditTextCell__() {
  this.$ctor__org_gwtproject_cell_client_EditTextCell__org_gwtproject_text_shared_SafeHtmlRenderer(SimpleSafeHtmlRenderer.m_getInstance__());
 }
 //Factory method corresponding to constructor 'EditTextCell(SafeHtmlRenderer)'.
 /** @return {!EditTextCell} */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  EditTextCell.$clinit();
  let $instance = new EditTextCell();
  $instance.$ctor__org_gwtproject_cell_client_EditTextCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 //Initialization from constructor 'EditTextCell(SafeHtmlRenderer)'.
 
 $ctor__org_gwtproject_cell_client_EditTextCell__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  this.$ctor__org_gwtproject_cell_client_AbstractEditableCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  if ($Equality.$same(renderer, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("renderer == null"));
  }
  this.f_renderer__org_gwtproject_cell_client_EditTextCell_ = renderer;
 }
 /** @return {boolean} */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(/** Context */ context, /** Object */ parent, /** ?string */ value) {
  let viewData = /**@type {ViewData}*/ ($Casts.$to(this.m_getViewData__java_lang_Object(context.m_getKey__()), ViewData));
  return $Equality.$same(viewData, null) ? false : viewData.m_isEditing__();
 }
 
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(/** Context */ context, /** Object */ parent, /** ?string */ value, /** Object */ event, /** ValueUpdater<?string> */ valueUpdater) {
  let key = context.m_getKey__();
  let viewData = /**@type {ViewData}*/ ($Casts.$to(this.m_getViewData__java_lang_Object(key), ViewData));
  if (!$Equality.$same(viewData, null) && viewData.m_isEditing__()) {
   this.m_editEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_cell_client_EditTextCell_ViewData__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater_$p_org_gwtproject_cell_client_EditTextCell(context, parent, value, viewData, event, valueUpdater);
  } else {
   let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   let enterPressed = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, type) && keyCode == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes;
   if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, type) || enterPressed) {
    if ($Equality.$same(viewData, null)) {
     viewData = ViewData.$create__java_lang_String(value);
     this.m_setViewData__java_lang_Object__java_lang_Object(key, viewData);
    } else {
     viewData.m_setEditing__boolean(true);
    }
    this.m_edit__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(context, parent, value);
   }
  }
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** ?string */ value, /** SafeHtmlBuilder */ sb) {
  let key = context.m_getKey__();
  let viewData = /**@type {ViewData}*/ ($Casts.$to(this.m_getViewData__java_lang_Object(key), ViewData));
  if (!$Equality.$same(viewData, null) && !viewData.m_isEditing__() && !$Equality.$same(value, null) && j_l_String.m_equals__java_lang_String__java_lang_Object(value, viewData.m_getText__())) {
   this.m_clearViewData__java_lang_Object(key);
   viewData = null;
  }
  let toRender = value;
  if (!$Equality.$same(viewData, null)) {
   let text = viewData.m_getText__();
   if (viewData.m_isEditing__()) {
    sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_EditTextCell_Template.m_input__java_lang_String(text));
    return;
   } else {
    toRender = text;
   }
  }
  if (!$Equality.$same(toRender, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(toRender)) > 0) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.f_renderer__org_gwtproject_cell_client_EditTextCell_.m_render__java_lang_Object(toRender));
  } else {
   sb.m_appendHtmlConstant__java_lang_String("\u00A0");
  }
 }
 /** @return {boolean} */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(/** Context */ context, /** Object */ parent, /** ?string */ value) {
  if (this.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(context, parent, value)) {
   this.m_getInputElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(parent).focus();
   return true;
  }
  return false;
 }
 
 m_edit__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(/** Context */ context, /** Object */ parent, /** ?string */ value) {
  this.m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value);
  let input = this.m_getInputElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(parent);
  input.focus();
  input.select();
 }
 
 m_cancel__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_cell_client_EditTextCell(/** Context */ context, /** Object */ parent, /** ?string */ value) {
  this.m_clearInput__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(this.m_getInputElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(parent));
  this.m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value);
 }
 
 m_clearInput__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(/** Object */ input) {
  let jsObject = /**@type {Object}*/ (input);
  if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionEnd")) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(jsObject, "selectionEnd", JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionStart"));
  } else if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (Document_$Overlay.m_get__()), "selection")) {
   /**@type {?function():void}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (Document_$Overlay.m_get__()), "selection"), $JavaScriptFunction))();
  }
 }
 
 m_commit__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_cell_client_EditTextCell_ViewData__org_gwtproject_cell_client_ValueUpdater_$p_org_gwtproject_cell_client_EditTextCell(/** Context */ context, /** Object */ parent, /** ViewData */ viewData, /** ValueUpdater<?string> */ valueUpdater) {
  let value = this.m_updateViewData__org_gwtproject_dom_client_Element__org_gwtproject_cell_client_EditTextCell_ViewData__boolean_$p_org_gwtproject_cell_client_EditTextCell(parent, viewData, false);
  this.m_clearInput__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(this.m_getInputElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(parent));
  this.m_setValue__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, viewData.m_getOriginal__());
  if (!$Equality.$same(valueUpdater, null)) {
   valueUpdater.m_update__java_lang_Object(value);
  }
 }
 
 m_editEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String__org_gwtproject_cell_client_EditTextCell_ViewData__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater_$p_org_gwtproject_cell_client_EditTextCell(/** Context */ context, /** Object */ parent, /** ?string */ value, /** ViewData */ viewData, /** Object */ event, /** ValueUpdater<?string> */ valueUpdater) {
  let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let keyUp = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, type);
  let keyDown = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, type);
  if (keyUp || keyDown) {
   let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   if (keyUp && keyCode == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes) {
    this.m_commit__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_cell_client_EditTextCell_ViewData__org_gwtproject_cell_client_ValueUpdater_$p_org_gwtproject_cell_client_EditTextCell(context, parent, viewData, valueUpdater);
   } else if (keyUp && keyCode == KeyCodes.f_KEY_ESCAPE__org_gwtproject_event_dom_client_KeyCodes) {
    let originalText = viewData.m_getOriginal__();
    if (viewData.m_isEditingAgain__()) {
     viewData.m_setText__java_lang_String(originalText);
     viewData.m_setEditing__boolean(false);
    } else {
     this.m_setViewData__java_lang_Object__java_lang_Object(context.m_getKey__(), null);
    }
    this.m_cancel__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_cell_client_EditTextCell(context, parent, value);
   } else {
    this.m_updateViewData__org_gwtproject_dom_client_Element__org_gwtproject_cell_client_EditTextCell_ViewData__boolean_$p_org_gwtproject_cell_client_EditTextCell(parent, viewData, true);
   }
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents, type)) {
   let eventTarget = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   if (Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
    let target = Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(eventTarget);
    if ($Equality.$same("input", j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(target), Locale.f_ROOT__java_util_Locale))) {
     this.m_commit__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_cell_client_EditTextCell_ViewData__org_gwtproject_cell_client_ValueUpdater_$p_org_gwtproject_cell_client_EditTextCell(context, parent, viewData, valueUpdater);
    }
   }
  }
 }
 /** @return {Object} */
 m_getInputElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_cell_client_EditTextCell(/** Object */ parent) {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(parent.firstChild), InputElement_$Overlay));
 }
 /** @return {?string} */
 m_updateViewData__org_gwtproject_dom_client_Element__org_gwtproject_cell_client_EditTextCell_ViewData__boolean_$p_org_gwtproject_cell_client_EditTextCell(/** Object */ parent, /** ViewData */ viewData, /** boolean */ isEditing) {
  let input = /**@type {Object}*/ ($Casts.$to(parent.firstChild, InputElement_$Overlay));
  let value = input.value;
  viewData.m_setText__java_lang_String(value);
  viewData.m_setEditing__boolean(isEditing);
  return value;
 }
 //Bridge method.
 /** @override @return {boolean} */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ arg0, /** Object */ arg1, /** * */ arg2) {
  return this.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(arg0, arg1, /**@type {?string}*/ ($Casts.$to(arg2, j_l_String)));
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
 //Bridge method.
 /** @override @return {boolean} */
 m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ arg0, /** Object */ arg1, /** * */ arg2) {
  return this.m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_String(arg0, arg1, /**@type {?string}*/ ($Casts.$to(arg2, j_l_String)));
 }
 
 static $clinit() {
  EditTextCell.$clinit = () =>{};
  EditTextCell.$loadModules();
  AbstractEditableCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EditTextCell;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Template = goog.module.get('org.gwtproject.cell.client.EditTextCell.Template$impl');
  ViewData = goog.module.get('org.gwtproject.cell.client.EditTextCell.ViewData$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
 
}
$Util.$setClassMetadata(EditTextCell, 'org.gwtproject.cell.client.EditTextCell');

exports = EditTextCell; 
//# sourceMappingURL=EditTextCell.js.map