goog.module('org.gwtproject.user.cellview.client.CellList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractHasData = goog.require('org.gwtproject.user.cellview.client.AbstractHasData$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.$1$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Resources$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Style$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Template$impl');
let CellList__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AttachDetachException = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException$impl');
let DeckPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckPanel$impl');
let HTML = goog.forwardDeclare('org.gwtproject.user.client.ui.HTML$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template T
 * @extends {AbstractHasData<T>}
  */
class CellList extends AbstractHasData {
 /** @protected */
 constructor() {
  super();
  /**@type {Cell<T>}*/
  this.f_cell__org_gwtproject_user_cellview_client_CellList_;
  /**@type {boolean}*/
  this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellList_ = false;
  /**@type {Object}*/
  this.f_childContainer__org_gwtproject_user_cellview_client_CellList_;
  /**@type {SafeHtml}*/
  this.f_emptyListMessage__org_gwtproject_user_cellview_client_CellList_;
  /**@type {SimplePanel}*/
  this.f_emptyListWidgetContainer__org_gwtproject_user_cellview_client_CellList_;
  /**@type {SimplePanel}*/
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellList_;
  /**@type {DeckPanel}*/
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_;
  /**@type {Style}*/
  this.f_style__org_gwtproject_user_cellview_client_CellList_;
  /**@type {ValueUpdater<T>}*/
  this.f_valueUpdater__org_gwtproject_user_cellview_client_CellList_;
 }
 /** @return {Resources} */
 static m_getDefaultResources__() {
  if ($Equality.$same(CellList.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellList_, null)) {
   CellList.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellList_ = CellList__ResourcesImpl.$create__();
  }
  return CellList.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellList_;
 }
 //Factory method corresponding to constructor 'CellList(Cell)'.
 /** @template T @return {!CellList<T>} */
 static $create__org_gwtproject_cell_client_Cell(/** Cell<T> */ cell) {
  CellList.$clinit();
  let $instance = new CellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell(cell);
  return $instance;
 }
 //Initialization from constructor 'CellList(Cell)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell(/** Cell<T> */ cell) {
  this.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(cell, CellList.m_getDefaultResources__(), null);
 }
 //Factory method corresponding to constructor 'CellList(Cell, Resources)'.
 /** @template T @return {!CellList<T>} */
 static $create__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources(/** Cell<T> */ cell, /** Resources */ resources) {
  CellList.$clinit();
  let $instance = new CellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources(cell, resources);
  return $instance;
 }
 //Initialization from constructor 'CellList(Cell, Resources)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources(/** Cell<T> */ cell, /** Resources */ resources) {
  this.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(cell, resources, null);
 }
 //Factory method corresponding to constructor 'CellList(Cell, ProvidesKey)'.
 /** @template T @return {!CellList<T>} */
 static $create__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_ProvidesKey(/** Cell<T> */ cell, /** ProvidesKey<T> */ keyProvider) {
  CellList.$clinit();
  let $instance = new CellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_ProvidesKey(cell, keyProvider);
  return $instance;
 }
 //Initialization from constructor 'CellList(Cell, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_view_client_ProvidesKey(/** Cell<T> */ cell, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(cell, CellList.m_getDefaultResources__(), keyProvider);
 }
 //Factory method corresponding to constructor 'CellList(Cell, Resources, ProvidesKey)'.
 /** @template T @return {!CellList<T>} */
 static $create__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(/** Cell<T> */ cell, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider) {
  CellList.$clinit();
  let $instance = new CellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(cell, resources, keyProvider);
  return $instance;
 }
 //Initialization from constructor 'CellList(Cell, Resources, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_CellList__org_gwtproject_cell_client_Cell__org_gwtproject_user_cellview_client_CellList_Resources__org_gwtproject_view_client_ProvidesKey(/** Cell<T> */ cell, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element__int__org_gwtproject_view_client_ProvidesKey($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), CellList.f_DEFAULT_PAGE_SIZE__org_gwtproject_user_cellview_client_CellList_, keyProvider);
  this.$init___$p_org_gwtproject_user_cellview_client_CellList();
  this.f_cell__org_gwtproject_user_cellview_client_CellList_ = cell;
  this.f_style__org_gwtproject_user_cellview_client_CellList_ = resources.m_cellListStyle__();
  this.f_style__org_gwtproject_user_cellview_client_CellList_.m_ensureInjected__();
  let widgetStyle = this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListWidget__();
  if (!$Equality.$same(widgetStyle, null)) {
   this.m_addStyleName__java_lang_String(widgetStyle);
  }
  this.f_childContainer__org_gwtproject_user_cellview_client_CellList_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  let outerDiv = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), DivElement_$Overlay));
  outerDiv.appendChild(this.f_childContainer__org_gwtproject_user_cellview_client_CellList_);
  outerDiv.appendChild(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_.m_getElement__());
  this.m_adopt__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_);
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_.m_add__org_gwtproject_user_client_ui_Widget(this.f_emptyListWidgetContainer__org_gwtproject_user_cellview_client_CellList_);
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_.m_add__org_gwtproject_user_client_ui_Widget(this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellList_);
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, cell.m_getConsumedEvents__());
 }
 /** @return {SafeHtml} @deprecated */
 m_getEmptyListMessage__() {
  return this.f_emptyListMessage__org_gwtproject_user_cellview_client_CellList_;
 }
 /** @return {Widget} */
 m_getEmptyListWidget__() {
  return this.f_emptyListWidgetContainer__org_gwtproject_user_cellview_client_CellList_.m_getWidget__();
 }
 /** @return {Widget} */
 m_getLoadingIndicator__() {
  return this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellList_.m_getWidget__();
 }
 /** @return {Object} */
 m_getRowElement__int(/** number */ indexOnPage) {
  this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_flush__();
  this.m_checkRowBounds__int(indexOnPage);
  if (Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_childContainer__org_gwtproject_user_cellview_client_CellList_) > indexOnPage) {
   return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_childContainer__org_gwtproject_user_cellview_client_CellList_, indexOnPage)), Element_$Overlay));
  }
  return null;
 }
 /** @deprecated */
 m_setEmptyListMessage__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.f_emptyListMessage__org_gwtproject_user_cellview_client_CellList_ = html;
  this.m_setEmptyListWidget__org_gwtproject_user_client_ui_Widget($Equality.$same(html, null) ? null : HTML.$create__org_gwtproject_safehtml_shared_SafeHtml(html));
 }
 
 m_setEmptyListWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.f_emptyListWidgetContainer__org_gwtproject_user_cellview_client_CellList_.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 
 m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellList_.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 
 m_setValueUpdater__org_gwtproject_cell_client_ValueUpdater(/** ValueUpdater<T> */ valueUpdater) {
  this.f_valueUpdater__org_gwtproject_user_cellview_client_CellList_ = valueUpdater;
 }
 /** @override @return {boolean} */
 m_dependsOnSelection__() {
  return this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_dependsOnSelection__();
 }
 /** @override */
 m_doAttachChildren__() {
  try {
   this.m_doAttach__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   {
    let e = /**@type {Throwable}*/ (__$exc);
    throw $Exceptions.toJs(AttachDetachException.$create__java_util_Set(/**@type {Set<Throwable>}*/ (Collections.m_singleton__java_lang_Object(e))));
   }
  }
 }
 /** @override */
 m_doDetachChildren__() {
  try {
   this.m_doDetach__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   {
    let e = /**@type {Throwable}*/ (__$exc);
    throw $Exceptions.toJs(AttachDetachException.$create__java_util_Set(/**@type {Set<Throwable>}*/ (Collections.m_singleton__java_lang_Object(e))));
   }
  }
 }
 
 m_fireEventToCell__org_gwtproject_cell_client_Cell_Context__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__java_lang_Object(/** Context */ context, /** Event */ event, /** Object */ parent, /** T */ value) {
  let consumedEvents = this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_getConsumedEvents__();
  if (!$Equality.$same(consumedEvents, null) && consumedEvents.contains(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event))) {
   let cellWasEditing = this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value);
   this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, this.f_valueUpdater__org_gwtproject_user_cellview_client_CellList_);
   this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellList_ = this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parent, value);
   if (cellWasEditing && !this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellList_) {
    CellBasedWidgetImpl.m_get__().m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_user_cellview_client_CellList(this)));
   }
  }
 }
 /** @return {Cell<T>} */
 m_getCell__() {
  return this.f_cell__org_gwtproject_user_cellview_client_CellList_;
 }
 /** @return {Object} */
 m_getCellParent__org_gwtproject_dom_client_Element(/** Object */ item) {
  return item;
 }
 /** @override @return {Object} */
 m_getChildContainer__() {
  return this.f_childContainer__org_gwtproject_user_cellview_client_CellList_;
 }
 /** @override @return {Object} */
 m_getKeyboardSelectedElement__() {
  let rowIndex = this.m_getKeyboardSelectedRow__();
  if (rowIndex >= 0 && Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_childContainer__org_gwtproject_user_cellview_client_CellList_) > rowIndex) {
   return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_childContainer__org_gwtproject_user_cellview_client_CellList_, rowIndex)), Element_$Overlay));
  }
  return null;
 }
 /** @override @return {boolean} */
 m_isKeyboardNavigationSuppressed__() {
  return this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellList_;
 }
 /** @override */
 m_onBrowserEvent2__org_gwtproject_user_client_Event(/** Event */ event) {
  let eventTarget = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   return;
  }
  let target = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  let idxString = "";
  let cellTarget = target;
  while ((!$Equality.$same(cellTarget, null)) && (j_l_String.m_length__java_lang_String((idxString = Element_$Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(cellTarget, "__idx"))) == 0)) {
   cellTarget = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(cellTarget);
  }
  if (j_l_String.m_length__java_lang_String(idxString) > 0) {
   let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   let isClick = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType);
   let idx = Integer.m_parseInt__java_lang_String(idxString);
   let indexOnPage = idx - this.m_getPageStart__();
   if (!this.m_isRowWithinBounds__int(indexOnPage)) {
    return;
   }
   let isSelectionHandled = this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_handlesSelection__() || $Equality.$same(KeyboardSelectionPolicy.f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__());
   let cellParent = this.m_getCellParent__org_gwtproject_dom_client_Element(cellTarget);
   let value = this.m_getVisibleItem__int(indexOnPage);
   let context = Context.$create__int__int__java_lang_Object(idx, 0, this.m_getValueKey__java_lang_Object(value));
   let previewEvent = /**@type {CellPreviewEvent<T>}*/ (CellPreviewEvent.m_fire__org_gwtproject_view_client_HasCellPreviewHandlers__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(this, event, this, context, value, this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellList_, isSelectionHandled));
   if (!previewEvent.m_isCanceled__()) {
    this.m_fireEventToCell__org_gwtproject_cell_client_Cell_Context__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__java_lang_Object(context, event, cellParent, value);
   }
  }
 }
 /** @override */
 m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {
  let message = null;
  if ($Equality.$same(state, LoadingState.f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState)) {
   message = this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellList_;
  } else if ($Equality.$same(state, LoadingState.f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState) && this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_isEmpty__()) {
   message = this.f_emptyListWidgetContainer__org_gwtproject_user_cellview_client_CellList_;
  }
  if (!$Equality.$same(message, null)) {
   this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_.m_showWidget__int(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(message));
  }
  this.m_showOrHide__org_gwtproject_dom_client_Element__boolean_$pp_org_gwtproject_user_cellview_client(this.m_getChildContainer__(), $Equality.$same(message, null));
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_.m_setVisible__boolean(!$Equality.$same(message, null));
  super.m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state);
 }
 /** @override */
 m_renderRowValues__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(/** SafeHtmlBuilder */ sb, /** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel) {
  let keyboardSelectedItem = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListKeyboardSelectedItem__());
  let selectedItem = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListSelectedItem__());
  let evenItem = this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListEvenItem__();
  let oddItem = this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListOddItem__();
  let keyboardSelectedRow = this.m_getKeyboardSelectedRow__() + this.m_getPageStart__();
  let length = values.size();
  let end = start + length;
  for (let i = start; i < end; i++) {
   let value = values.getAtIndex(i - start);
   let isSelected = $Equality.$same(selectionModel, null) ? false : selectionModel.m_isSelected__java_lang_Object(value);
   let classesBuilder = StringBuilder.$create__();
   classesBuilder.m_append__java_lang_String($Primitives.$coerceDivision(i % 2) == 0 ? evenItem : oddItem);
   if (isSelected) {
    classesBuilder.m_append__java_lang_String(selectedItem);
   }
   if (i == keyboardSelectedRow) {
    classesBuilder.m_append__java_lang_String(keyboardSelectedItem);
   }
   let cellBuilder = SafeHtmlBuilder.$create__();
   let context = Context.$create__int__int__java_lang_Object(i, 0, this.m_getValueKey__java_lang_Object(value));
   this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, cellBuilder);
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Template.m_div__int__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(i, classesBuilder.toString(), cellBuilder.m_toSafeHtml__()));
  }
 }
 /** @override @return {boolean} */
 m_resetFocusOnCell__() {
  let row = this.m_getKeyboardSelectedRow__();
  if (this.m_isRowWithinBounds__int(row)) {
   let rowElem = this.m_getKeyboardSelectedElement__();
   let cellParent = this.m_getCellParent__org_gwtproject_dom_client_Element(rowElem);
   let value = this.m_getVisibleItem__int(row);
   let context = Context.$create__int__int__java_lang_Object(row + this.m_getPageStart__(), 0, this.m_getValueKey__java_lang_Object(value));
   return this.f_cell__org_gwtproject_user_cellview_client_CellList_.m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, value);
  }
  return false;
 }
 /** @override */
 m_setKeyboardSelected__int__boolean__boolean(/** number */ index, /** boolean */ selected, /** boolean */ stealFocus) {
  if (!this.m_isRowWithinBounds__int(index)) {
   return;
  }
  let elem = this.m_getRowElement__int(index);
  if (!selected || this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData || stealFocus) {
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(elem, this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListKeyboardSelectedItem__(), selected);
  }
  this.m_setFocusable__org_gwtproject_dom_client_Element__boolean(elem, selected);
  if (selected && stealFocus && !this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellList_) {
   elem.focus();
   this.m_onFocus__();
  }
 }
 /** @override @deprecated */
 m_setSelected__org_gwtproject_dom_client_Element__boolean(/** Object */ elem, /** boolean */ selected) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(elem, this.f_style__org_gwtproject_user_cellview_client_CellList_.m_cellListSelectedItem__(), selected);
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_CellList() {
  this.f_emptyListMessage__org_gwtproject_user_cellview_client_CellList_ = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("");
  this.f_emptyListWidgetContainer__org_gwtproject_user_cellview_client_CellList_ = SimplePanel.$create__();
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellList_ = SimplePanel.$create__();
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellList_ = DeckPanel.$create__();
 }
 
 static $clinit() {
  CellList.$clinit = () =>{};
  CellList.$loadModules();
  AbstractHasData.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellList;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  DivElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellList.$1$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.CellList.Template$impl');
  CellList__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  LoadingState = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
  AttachDetachException = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException$impl');
  DeckPanel = goog.module.get('org.gwtproject.user.client.ui.DeckPanel$impl');
  HTML = goog.module.get('org.gwtproject.user.client.ui.HTML$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  CellPreviewEvent = goog.module.get('org.gwtproject.view.client.CellPreviewEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(CellList, 'org.gwtproject.user.cellview.client.CellList');

/**@const {number}*/
CellList.f_DEFAULT_PAGE_SIZE__org_gwtproject_user_cellview_client_CellList_ = 25;
/**@type {Resources}*/
CellList.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellList_;

exports = CellList; 
//# sourceMappingURL=CellList.js.map