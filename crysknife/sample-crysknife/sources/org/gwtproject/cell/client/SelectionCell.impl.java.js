goog.module('org.gwtproject.cell.client.SelectionCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractInputCell = goog.require('org.gwtproject.cell.client.AbstractInputCell$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.SelectionCell.Template$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let SelectElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractInputCell<?string, ?string>}
  */
class SelectionCell extends AbstractInputCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HashMap<?string, Integer>} */
  this.f_indexForOption__org_gwtproject_cell_client_SelectionCell_;
  /** @public {List<?string>} */
  this.f_options__org_gwtproject_cell_client_SelectionCell_;
 }
 /**
  * @param {List<?string>} options
  * @return {!SelectionCell}
  * @public
  */
 static $create__java_util_List(options) {
  SelectionCell.$clinit();
  let $instance = new SelectionCell();
  $instance.$ctor__org_gwtproject_cell_client_SelectionCell__java_util_List(options);
  return $instance;
 }
 /**
  * @param {List<?string>} options
  * @public
  */
 $ctor__org_gwtproject_cell_client_SelectionCell__java_util_List(options) {
  this.$ctor__org_gwtproject_cell_client_AbstractInputCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  this.$init___$p_org_gwtproject_cell_client_SelectionCell();
  this.f_options__org_gwtproject_cell_client_SelectionCell_ = /**@type {!ArrayList<?string>} */ (ArrayList.$create__java_util_Collection(options));
  let index = 0;
  for (let $iterator = options.m_iterator__(); $iterator.m_hasNext__(); ) {
   let option = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   this.f_indexForOption__org_gwtproject_cell_client_SelectionCell_.put(option, Integer.m_valueOf__int(index++));
  }
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
  let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, type)) {
   let key = context.m_getKey__();
   let select = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(parent.firstChild), SelectElement_$Overlay));
   let newValue = /**@type {?string} */ ($Casts.$to(this.f_options__org_gwtproject_cell_client_SelectionCell_.getAtIndex(select.selectedIndex), j_l_String));
   this.m_setViewData__java_lang_Object__java_lang_Object(key, newValue);
   this.m_finishEditing__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object__org_gwtproject_cell_client_ValueUpdater(parent, newValue, key, valueUpdater);
   if (!$Equality.$same(valueUpdater, null)) {
    valueUpdater.m_update__java_lang_Object(newValue);
   }
  }
 }
 /**
  * @param {Context} context
  * @param {?string} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  let key = context.m_getKey__();
  let viewData = /**@type {?string} */ ($Casts.$to(this.m_getViewData__java_lang_Object(key), j_l_String));
  if (!$Equality.$same(viewData, null) && j_l_String.m_equals__java_lang_String__java_lang_Object(viewData, value)) {
   this.m_clearViewData__java_lang_Object(key);
   viewData = null;
  }
  let selectedIndex = this.m_getSelectedIndex__java_lang_String_$p_org_gwtproject_cell_client_SelectionCell($Equality.$same(viewData, null) ? value : viewData);
  sb.m_appendHtmlConstant__java_lang_String("<select tabindex=\"-1\">");
  let index = 0;
  for (let $iterator = this.f_options__org_gwtproject_cell_client_SelectionCell_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let option = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   if (index++ == selectedIndex) {
    sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_SelectionCell_Template.m_selected__java_lang_String(option));
   } else {
    sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_SelectionCell_Template.m_deselected__java_lang_String(option));
   }
  }
  sb.m_appendHtmlConstant__java_lang_String("</select>");
 }
 /**
  * @param {?string} value
  * @return {number}
  * @public
  */
 m_getSelectedIndex__java_lang_String_$p_org_gwtproject_cell_client_SelectionCell(value) {
  let index = /**@type {Integer} */ ($Casts.$to(this.f_indexForOption__org_gwtproject_cell_client_SelectionCell_.get(value), Integer));
  if ($Equality.$same(index, null)) {
   return -1;
  }
  return index.m_intValue__();
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
  * @private
  */
 $init___$p_org_gwtproject_cell_client_SelectionCell() {
  this.f_indexForOption__org_gwtproject_cell_client_SelectionCell_ = /**@type {!HashMap<?string, Integer>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  SelectionCell.$clinit = () =>{};
  SelectionCell.$loadModules();
  AbstractInputCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SelectionCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Template = goog.module.get('org.gwtproject.cell.client.SelectionCell.Template$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  SelectElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SelectionCell, 'org.gwtproject.cell.client.SelectionCell');

exports = SelectionCell; 
//# sourceMappingURL=SelectionCell.js.map