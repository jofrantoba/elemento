goog.module('org.gwtproject.cell.client.CheckboxCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEditableCell = goog.require('org.gwtproject.cell.client.AbstractEditableCell$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractEditableCell<?boolean, ?boolean>}
  */
class CheckboxCell extends AbstractEditableCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_dependsOnSelection__org_gwtproject_cell_client_CheckboxCell_ = false;
  /** @public {boolean} */
  this.f_handlesSelection__org_gwtproject_cell_client_CheckboxCell_ = false;
 }
 /**
  * Factory method corresponding to constructor 'CheckboxCell()'.
  * @return {!CheckboxCell}
  * @public
  */
 static $create__() {
  CheckboxCell.$clinit();
  let $instance = new CheckboxCell();
  $instance.$ctor__org_gwtproject_cell_client_CheckboxCell__();
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckboxCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_CheckboxCell__() {
  this.$ctor__org_gwtproject_cell_client_CheckboxCell__boolean(false);
 }
 /**
  * Factory method corresponding to constructor 'CheckboxCell(boolean)'.
  * @param {boolean} isSelectBox
  * @return {!CheckboxCell}
  * @public
  * @deprecated
  */
 static $create__boolean(isSelectBox) {
  CheckboxCell.$clinit();
  let $instance = new CheckboxCell();
  $instance.$ctor__org_gwtproject_cell_client_CheckboxCell__boolean(isSelectBox);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckboxCell(boolean)'.
  * @param {boolean} isSelectBox
  * @public
  * @deprecated
  */
 $ctor__org_gwtproject_cell_client_CheckboxCell__boolean(isSelectBox) {
  this.$ctor__org_gwtproject_cell_client_CheckboxCell__boolean__boolean(isSelectBox, isSelectBox);
 }
 /**
  * Factory method corresponding to constructor 'CheckboxCell(boolean, boolean)'.
  * @param {boolean} dependsOnSelection
  * @param {boolean} handlesSelection
  * @return {!CheckboxCell}
  * @public
  */
 static $create__boolean__boolean(dependsOnSelection, handlesSelection) {
  CheckboxCell.$clinit();
  let $instance = new CheckboxCell();
  $instance.$ctor__org_gwtproject_cell_client_CheckboxCell__boolean__boolean(dependsOnSelection, handlesSelection);
  return $instance;
 }
 /**
  * Initialization from constructor 'CheckboxCell(boolean, boolean)'.
  * @param {boolean} dependsOnSelection
  * @param {boolean} handlesSelection
  * @public
  */
 $ctor__org_gwtproject_cell_client_CheckboxCell__boolean__boolean(dependsOnSelection, handlesSelection) {
  this.$ctor__org_gwtproject_cell_client_AbstractEditableCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  this.f_dependsOnSelection__org_gwtproject_cell_client_CheckboxCell_ = dependsOnSelection;
  this.f_handlesSelection__org_gwtproject_cell_client_CheckboxCell_ = handlesSelection;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_dependsOnSelection__() {
  return this.f_dependsOnSelection__org_gwtproject_cell_client_CheckboxCell_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_handlesSelection__() {
  return this.f_handlesSelection__org_gwtproject_cell_client_CheckboxCell_;
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {?boolean} value
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Boolean(context, parent, value) {
  return false;
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {?boolean} value
  * @param {Object} event
  * @param {ValueUpdater<?boolean>} valueUpdater
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Boolean__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let enterPressed = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, type) && $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event) == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes;
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, type) || enterPressed) {
   let input = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(parent.firstChild), InputElement_$Overlay));
   let isChecked = InputElement_$Overlay.m_isChecked__$devirt__org_gwtproject_dom_client_InputElement(input);
   if (enterPressed && (this.m_handlesSelection__() || !this.m_dependsOnSelection__())) {
    isChecked = !Boolean.m_booleanValue__java_lang_Boolean(isChecked);
    input.checked = Boolean.m_booleanValue__java_lang_Boolean(isChecked);
   }
   if (!$Equality.$same(value, isChecked) && !this.m_dependsOnSelection__()) {
    this.m_setViewData__java_lang_Object__java_lang_Object(context.m_getKey__(), isChecked);
   } else {
    this.m_clearViewData__java_lang_Object(context.m_getKey__());
   }
   if (!$Equality.$same(valueUpdater, null)) {
    valueUpdater.m_update__java_lang_Object(isChecked);
   }
  }
 }
 /**
  * @param {Context} context
  * @param {?boolean} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Boolean__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  let key = context.m_getKey__();
  let viewData = /**@type {?boolean} */ ($Casts.$to(this.m_getViewData__java_lang_Object(key), Boolean));
  if (!$Equality.$same(viewData, null) && Boolean.m_equals__java_lang_Boolean__java_lang_Object(viewData, value)) {
   this.m_clearViewData__java_lang_Object(key);
   viewData = null;
  }
  if (!$Equality.$same(value, null) && Boolean.m_booleanValue__java_lang_Boolean(((!$Equality.$same(viewData, null)) ? viewData : value))) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(CheckboxCell.f_INPUT_CHECKED__org_gwtproject_cell_client_CheckboxCell_);
  } else {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(CheckboxCell.f_INPUT_UNCHECKED__org_gwtproject_cell_client_CheckboxCell_);
  }
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {Object} arg1
  * @param {*} arg2
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(arg0, arg1, arg2) {
  return this.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Boolean(arg0, arg1, /**@type {?boolean} */ ($Casts.$to(arg2, Boolean)));
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
  this.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Boolean__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, /**@type {?boolean} */ ($Casts.$to(arg2, Boolean)), arg3, arg4);
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
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Boolean__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {?boolean} */ ($Casts.$to(arg1, Boolean)), arg2);
 }
 /**
  * @public
  */
 static $clinit() {
  CheckboxCell.$clinit = () =>{};
  CheckboxCell.$loadModules();
  AbstractEditableCell.$clinit();
  CheckboxCell.f_INPUT_CHECKED__org_gwtproject_cell_client_CheckboxCell_ = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("<input type=\"checkbox\" tabindex=\"-1\" checked/>");
  CheckboxCell.f_INPUT_UNCHECKED__org_gwtproject_cell_client_CheckboxCell_ = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("<input type=\"checkbox\" tabindex=\"-1\"/>");
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CheckboxCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CheckboxCell, 'org.gwtproject.cell.client.CheckboxCell');

/** @public {SafeHtml} */
CheckboxCell.f_INPUT_CHECKED__org_gwtproject_cell_client_CheckboxCell_;
/** @public {SafeHtml} */
CheckboxCell.f_INPUT_UNCHECKED__org_gwtproject_cell_client_CheckboxCell_;

exports = CheckboxCell; 
//# sourceMappingURL=CheckboxCell.js.map