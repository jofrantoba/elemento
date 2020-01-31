goog.module('org.gwtproject.user.cellview.client.AbstractHasData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyboardPagingPolicy = goog.require('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const Focusable = goog.require('org.gwtproject.user.client.ui.Focusable$impl');
const HasData = goog.require('org.gwtproject.view.client.HasData$impl');
const HasKeyProvider = goog.require('org.gwtproject.view.client.HasKeyProvider$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.$1$impl');
let DefaultKeyboardSelectionHandler = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.DefaultKeyboardSelectionHandler$impl');
let RedrawEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent$impl');
let RedrawEvent_Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent.Handler$impl');
let View = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.View$impl');
let __Widget = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData._Widget$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let HasDataPresenter = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter$impl');
let KeyboardPagingPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let LoadingStateChangeEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');
let LoadingStateChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let FocusImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.FocusImpl$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
let DefaultSelectionEventManager = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let RangeChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');
let RowCountChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template T
 * @implements {HasData<T>}
 * @implements {HasKeyProvider<T>}
 * @implements {Focusable}
 * @implements {HasKeyboardPagingPolicy}
  */
class AbstractHasData extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {HasDataPresenter<T>}*/
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_;
  /**@type {boolean}*/
  this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = false;
  /**@type {number}*/
  this.f_accessKey__org_gwtproject_user_cellview_client_AbstractHasData_ = 0 /* '\u0000' */;
  /**@type {boolean}*/
  this.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_ = false;
  /**@type {HandlerRegistration}*/
  this.f_keyboardSelectionReg__org_gwtproject_user_cellview_client_AbstractHasData_;
  /**@type {HandlerRegistration}*/
  this.f_selectionManagerReg__org_gwtproject_user_cellview_client_AbstractHasData_;
  /**@type {number}*/
  this.f_tabIndex__org_gwtproject_user_cellview_client_AbstractHasData_ = 0;
 }
 //Initialization from constructor 'AbstractHasData(Element, int, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element__int__org_gwtproject_view_client_ProvidesKey(/** Object */ elem, /** number */ pageSize, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_user_client_ui_Widget__int__org_gwtproject_view_client_ProvidesKey(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element(this, elem)), pageSize, keyProvider);
 }
 //Initialization from constructor 'AbstractHasData(Widget, int, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_user_client_ui_Widget__int__org_gwtproject_view_client_ProvidesKey(/** Widget */ widget, /** number */ pageSize, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractHasData();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(widget);
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_ = /**@type {!HasDataPresenter<T>}*/ (HasDataPresenter.$create__org_gwtproject_view_client_HasData__org_gwtproject_user_cellview_client_HasDataPresenter_View__int__org_gwtproject_view_client_ProvidesKey(this, /**@type {!View<T>}*/ (View.$create__org_gwtproject_user_cellview_client_AbstractHasData(this)), pageSize, keyProvider));
  let eventTypes = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  eventTypes.add(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents);
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, eventTypes);
  this.f_selectionManagerReg__org_gwtproject_user_cellview_client_AbstractHasData_ = this.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/**@type {DefaultSelectionEventManager<T>}*/ (DefaultSelectionEventManager.m_createDefaultManager__()));
  this.m_setKeyboardSelectionHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/**@type {!DefaultKeyboardSelectionHandler<T>}*/ (DefaultKeyboardSelectionHandler.$create__org_gwtproject_user_cellview_client_AbstractHasData(this)));
 }
 /** @return {Object} */
 static m_convertToElements__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(/** Widget */ widget, /** Object */ tmpElem, /** SafeHtml */ html) {
  AbstractHasData.$clinit();
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(tmpElem, widget);
  $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(tmpElem, html);
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(tmpElem, null);
  return tmpElem;
 }
 
 static m_replaceAllChildren__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(/** Widget */ widget, /** Object */ childContainer, /** SafeHtml */ html) {
  AbstractHasData.$clinit();
  if (!widget.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(widget.m_getElement__(), widget);
  }
  $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(childContainer, CellBasedWidgetImpl.m_get__().m_processHtml__org_gwtproject_safehtml_shared_SafeHtml(html));
  if (!widget.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(widget.m_getElement__(), null);
  }
 }
 
 static m_replaceChildren__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int__org_gwtproject_safehtml_shared_SafeHtml(/** Widget */ widget, /** Object */ childContainer, /** Object */ newChildren, /** number */ start, /** SafeHtml */ html) {
  AbstractHasData.$clinit();
  let childCount = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(childContainer);
  let toReplace = null;
  if (start < childCount) {
   toReplace = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(childContainer, start)), $Overlay));
  }
  let count = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(newChildren);
  for (let i = 0; i < count; i++) {
   if ($Equality.$same(toReplace, null)) {
    childContainer.appendChild(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(newChildren, 0));
   } else {
    let nextSibling = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(toReplace);
    childContainer.replaceChild(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(newChildren, 0), toReplace);
    toReplace = nextSibling;
   }
  }
 }
 /** @return {Object} */
 static m_getTmpElem__() {
  if ($Equality.$same(AbstractHasData.f_tmpElem__org_gwtproject_user_cellview_client_AbstractHasData_, null)) {
   AbstractHasData.f_tmpElem__org_gwtproject_user_cellview_client_AbstractHasData_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  }
  return AbstractHasData.f_tmpElem__org_gwtproject_user_cellview_client_AbstractHasData_;
 }
 /** @override @return {HandlerRegistration} */
 m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/** Handler<T> */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(handler);
 }
 /** @return {HandlerRegistration} */
 m_addLoadingStateChangeHandler__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(/** LoadingStateChangeEvent_Handler */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_addLoadingStateChangeHandler__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(handler);
 }
 /** @override @return {HandlerRegistration} */
 m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(/** RangeChangeEvent_Handler */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(handler);
 }
 /** @override @return {HandlerRegistration} */
 m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(/** RowCountChangeEvent_Handler */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(handler);
 }
 /** @return {HandlerRegistration} */
 m_addRedrawHandler__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_Handler(/** RedrawEvent_Handler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, RedrawEvent.f_TYPE__org_gwtproject_user_cellview_client_AbstractHasData_RedrawEvent_);
 }
 /** @return {number} */
 m_getAccessKey__() {
  return this.f_accessKey__org_gwtproject_user_cellview_client_AbstractHasData_;
 }
 /** @override */
 m_setAccessKey__char(/** number */ key) {
  this.f_accessKey__org_gwtproject_user_cellview_client_AbstractHasData_ = key;
  this.m_setKeyboardSelected__int__boolean__boolean(this.m_getKeyboardSelectedRow__(), true, false);
 }
 /** @return {T} @deprecated */
 m_getDisplayedItem__int(/** number */ indexOnPage) {
  return this.m_getVisibleItem__int(indexOnPage);
 }
 /** @return {List<T>} @deprecated */
 m_getDisplayedItems__() {
  return this.m_getVisibleItems__();
 }
 /** @override @return {KeyboardPagingPolicy} */
 m_getKeyboardPagingPolicy__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getKeyboardPagingPolicy__();
 }
 /** @override */
 m_setKeyboardPagingPolicy__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy(/** KeyboardPagingPolicy */ policy) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setKeyboardPagingPolicy__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy(policy);
 }
 /** @return {number} */
 m_getKeyboardSelectedRow__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getKeyboardSelectedRow__();
 }
 
 m_setKeyboardSelectedRow__int(/** number */ row) {
  this.m_setKeyboardSelectedRow__int__boolean(row, true);
 }
 /** @override @return {KeyboardSelectionPolicy} */
 m_getKeyboardSelectionPolicy__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getKeyboardSelectionPolicy__();
 }
 /** @override */
 m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(/** KeyboardSelectionPolicy */ policy) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(policy);
 }
 /** @override @return {ProvidesKey<T>} */
 m_getKeyProvider__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getKeyProvider__();
 }
 /** @return {number} */
 m_getPageSize__() {
  return this.m_getVisibleRange__().m_getLength__();
 }
 
 m_setPageSize__int(/** number */ pageSize) {
  this.m_setVisibleRange__int__int(this.m_getPageStart__(), pageSize);
 }
 /** @return {number} */
 m_getPageStart__() {
  return this.m_getVisibleRange__().m_getStart__();
 }
 
 m_setPageStart__int(/** number */ pageStart) {
  this.m_setVisibleRange__int__int(pageStart, this.m_getPageSize__());
 }
 /** @return {Object} */
 m_getRowContainer__() {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_flush__();
  return this.m_getChildContainer__();
 }
 /** @override @return {number} */
 m_getRowCount__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getRowCount__();
 }
 /** @override */
 m_setRowCount__int(/** number */ count) {
  this.m_setRowCount__int__boolean(count, true);
 }
 /** @override @return {SelectionModel<?>} */
 m_getSelectionModel__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getSelectionModel__();
 }
 /** @override */
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel(/** SelectionModel<?> */ selectionModel) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(selectionModel);
 }
 /** @override @return {number} */
 m_getTabIndex__() {
  return this.f_tabIndex__org_gwtproject_user_cellview_client_AbstractHasData_;
 }
 /** @override */
 m_setTabIndex__int(/** number */ index) {
  this.f_tabIndex__org_gwtproject_user_cellview_client_AbstractHasData_ = index;
  this.m_setKeyboardSelected__int__boolean__boolean(this.m_getKeyboardSelectedRow__(), true, false);
 }
 /** @return {*} */
 m_getValueKey__java_lang_Object(/** T */ value) {
  let keyProvider = this.m_getKeyProvider__();
  return ($Equality.$same(keyProvider, null) || $Equality.$same(value, null)) ? value : keyProvider.m_getKey__java_lang_Object(value);
 }
 /** @override @return {T} */
 m_getVisibleItem__int(/** number */ indexOnPage) {
  this.m_checkRowBounds__int(indexOnPage);
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getVisibleItem__int(indexOnPage);
 }
 /** @override @return {number} */
 m_getVisibleItemCount__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getVisibleItemCount__();
 }
 /** @override @return {List<T>} */
 m_getVisibleItems__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getVisibleItems__();
 }
 /** @override @return {Range} */
 m_getVisibleRange__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getVisibleRange__();
 }
 /** @override */
 m_setVisibleRange__org_gwtproject_view_client_Range(/** Range */ range) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setVisibleRange__org_gwtproject_view_client_Range(range);
 }
 /** @override @return {boolean} */
 m_isRowCountExact__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_isRowCountExact__();
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  CellBasedWidgetImpl.m_get__().m_onBrowserEvent__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_Event(this, event);
  if (this.f_isRefreshing__org_gwtproject_user_cellview_client_AbstractHasData_) {
   return;
  }
  let eventTarget = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (!$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   return;
  }
  let target = $Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(eventTarget);
  if (!Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getElement__(), $Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(eventTarget))) {
   return;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = true;
   this.m_onFocus__();
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = false;
   this.m_onBlur__();
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = true;
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && CellBasedWidgetImpl.m_get__().m_isFocusable__org_gwtproject_dom_client_Element($Overlay.m_as__org_gwtproject_dom_client_Node(target))) {
   this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = true;
  }
  this.m_onBrowserEvent2__org_gwtproject_user_client_Event(event);
 }
 
 m_redraw__() {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_redraw__();
 }
 
 m_redrawRow__int(/** number */ absRowIndex) {
  let relRowIndex = absRowIndex - this.m_getPageStart__();
  this.m_checkRowBounds__int(relRowIndex);
  this.m_setRowData__int__java_util_List(absRowIndex, /**@type {List<T>}*/ (Collections.m_singletonList__java_lang_Object(this.m_getVisibleItem__int(relRowIndex))));
 }
 /** @override */
 m_setFocus__boolean(/** boolean */ focused) {
  let elem = this.m_getKeyboardSelectedElement__();
  if (!$Equality.$same(elem, null)) {
   if (focused) {
    elem.focus();
   } else {
    elem.blur();
   }
  }
 }
 
 m_setKeyboardSelectedRow__int__boolean(/** number */ row, /** boolean */ stealFocus) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setKeyboardSelectedRow__int__boolean__boolean(row, stealFocus, true);
 }
 
 m_setKeyboardSelectionHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/** Handler<T> */ keyboardSelectionReg) {
  if (!$Equality.$same(this.f_keyboardSelectionReg__org_gwtproject_user_cellview_client_AbstractHasData_, null)) {
   this.f_keyboardSelectionReg__org_gwtproject_user_cellview_client_AbstractHasData_.m_removeHandler__();
   this.f_keyboardSelectionReg__org_gwtproject_user_cellview_client_AbstractHasData_ = null;
  }
  if (!$Equality.$same(keyboardSelectionReg, null)) {
   this.f_keyboardSelectionReg__org_gwtproject_user_cellview_client_AbstractHasData_ = this.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(keyboardSelectionReg);
  }
 }
 /** @override */
 m_setRowCount__int__boolean(/** number */ size, /** boolean */ isExact) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setRowCount__int__boolean(size, isExact);
 }
 
 m_setRowData__java_util_List(/** List<?> */ values) {
  this.m_setRowCount__int(values.size());
  this.m_setVisibleRange__int__int(0, values.size());
  this.m_setRowData__int__java_util_List(0, values);
 }
 /** @override */
 m_setRowData__int__java_util_List(/** number */ start, /** List<?> */ values) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setRowData__int__java_util_List(start, values);
 }
 
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel__org_gwtproject_view_client_CellPreviewEvent_Handler(/** SelectionModel<?> */ selectionModel, /** Handler<T> */ selectionEventManager) {
  if (!$Equality.$same(this.f_selectionManagerReg__org_gwtproject_user_cellview_client_AbstractHasData_, null)) {
   this.f_selectionManagerReg__org_gwtproject_user_cellview_client_AbstractHasData_.m_removeHandler__();
   this.f_selectionManagerReg__org_gwtproject_user_cellview_client_AbstractHasData_ = null;
  }
  if (!$Equality.$same(selectionEventManager, null)) {
   this.f_selectionManagerReg__org_gwtproject_user_cellview_client_AbstractHasData_ = this.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(selectionEventManager);
  }
  this.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(selectionModel);
 }
 /** @override */
 m_setVisibleRange__int__int(/** number */ start, /** number */ length) {
  this.m_setVisibleRange__org_gwtproject_view_client_Range(Range.$create__int__int(start, length));
 }
 /** @override */
 m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(/** Range */ range, /** boolean */ forceRangeChangeEvent) {
  this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(range, forceRangeChangeEvent);
 }
 /** @return {boolean} */
 m_cellConsumesEventType__org_gwtproject_cell_client_Cell__java_lang_String(/** Cell<?> */ cell, /** ?string */ eventType) {
  let consumedEvents = cell.m_getConsumedEvents__();
  return !$Equality.$same(consumedEvents, null) && consumedEvents.contains(eventType);
 }
 
 m_checkRowBounds__int(/** number */ row) {
  if (!this.m_isRowWithinBounds__int(row)) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Row index: " + row + ", Row size: " + this.m_getRowCount__()));
  }
 }
 /** @return {Object} */
 m_convertToElements__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return AbstractHasData.m_convertToElements__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this, AbstractHasData.m_getTmpElem__(), html);
 }
 /** @abstract @return {boolean} */
 m_dependsOnSelection__() {}
 /** @abstract @return {Object} */
 m_getChildContainer__() {}
 /** @return {Object} */
 m_getChildElement__int(/** number */ index) {
  let childContainer = this.m_getChildContainer__();
  let childCount = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(childContainer);
  return (index < childCount) ? /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(childContainer, index)), $Overlay)) : null;
 }
 /** @abstract @return {Object} */
 m_getKeyboardSelectedElement__() {}
 /** @abstract @return {boolean} */
 m_isKeyboardNavigationSuppressed__() {}
 /** @return {boolean} */
 m_isRowWithinBounds__int(/** number */ row) {
  return row >= 0 && row < this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_.m_getVisibleItemCount__();
 }
 
 m_onBlur__() {}
 
 m_onBrowserEvent2__org_gwtproject_user_client_Event(/** Event */ event) {}
 
 m_onFocus__() {}
 
 m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {
  this.m_fireEvent__org_gwtproject_event_shared_Event(LoadingStateChangeEvent.$create__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state));
 }
 /** @override */
 m_onUnload__() {
  this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData = false;
  super.m_onUnload__();
 }
 /** @abstract */
 m_renderRowValues__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(/** SafeHtmlBuilder */ sb, /** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel) {}
 
 m_replaceAllChildren__java_util_List__org_gwtproject_safehtml_shared_SafeHtml(/** List<T> */ values, /** SafeHtml */ html) {
  AbstractHasData.m_replaceAllChildren__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this, this.m_getChildContainer__(), html);
 }
 
 m_replaceChildren__java_util_List__int__org_gwtproject_safehtml_shared_SafeHtml(/** List<T> */ values, /** number */ start, /** SafeHtml */ html) {
  let newChildren = this.m_convertToElements__org_gwtproject_safehtml_shared_SafeHtml(html);
  AbstractHasData.m_replaceChildren__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int__org_gwtproject_safehtml_shared_SafeHtml(this, this.m_getChildContainer__(), newChildren, start, html);
 }
 /** @abstract @return {boolean} */
 m_resetFocusOnCell__() {}
 
 m_setFocusable__org_gwtproject_dom_client_Element__boolean(/** Object */ elem, /** boolean */ focusable) {
  if (focusable) {
   let focusImpl = FocusImpl.m_getFocusImplForWidget__();
   focusImpl.m_setTabIndex__org_gwtproject_dom_client_Element__int(elem, this.m_getTabIndex__());
   if (this.f_accessKey__org_gwtproject_user_cellview_client_AbstractHasData_ != 0) {
    focusImpl.m_setAccessKey__org_gwtproject_dom_client_Element__char(elem, this.f_accessKey__org_gwtproject_user_cellview_client_AbstractHasData_);
   }
  } else {
   elem.tabIndex = -1;
   elem.removeAttribute("tabIndex");
   elem.removeAttribute("accessKey");
  }
 }
 /** @abstract */
 m_setKeyboardSelected__int__boolean__boolean(/** number */ index, /** boolean */ selected, /** boolean */ stealFocus) {}
 /** @deprecated */
 m_setSelected__org_gwtproject_dom_client_Element__boolean(/** Object */ elem, /** boolean */ selected) {}
 /** @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler_$pp_org_gwtproject_user_cellview_client(/** ValueChangeHandler<List<T>> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 
 m_adopt__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(/** Widget */ child) {
  let proxy = /**@type {__Widget<T>}*/ (Js.m_uncheckedCast__java_lang_Object(child));
  proxy.m_setParent__org_gwtproject_user_client_ui_Widget(this);
 }
 
 m_doAttach__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(/** Widget */ child) {
  let proxy = /**@type {__Widget<T>}*/ (Js.m_uncheckedCast__java_lang_Object(child));
  proxy.m_onAttach__();
 }
 
 m_doDetach__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(/** Widget */ child) {
  let proxy = /**@type {__Widget<T>}*/ (Js.m_uncheckedCast__java_lang_Object(child));
  proxy.m_onDetach__();
 }
 /** @return {HasDataPresenter<T>} */
 m_getPresenter___$pp_org_gwtproject_user_cellview_client() {
  return this.f_presenter__org_gwtproject_user_cellview_client_AbstractHasData_;
 }
 
 m_showOrHide__org_gwtproject_dom_client_Element__boolean_$pp_org_gwtproject_user_cellview_client(/** Object */ element, /** boolean */ show) {
  if ($Equality.$same(element, null)) {
   return;
  }
  if (show) {
   Style_$Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(element.style);
  } else {
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(element.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_AbstractHasData() {
  this.f_accessKey__org_gwtproject_user_cellview_client_AbstractHasData_ = 0 /* '\u0000' */;
 }
 
 static $clinit() {
  AbstractHasData.$clinit = () =>{};
  AbstractHasData.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractHasData;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.$1$impl');
  DefaultKeyboardSelectionHandler = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.DefaultKeyboardSelectionHandler$impl');
  RedrawEvent = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.RedrawEvent$impl');
  View = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData.View$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  HasDataPresenter = goog.module.get('org.gwtproject.user.cellview.client.HasDataPresenter$impl');
  LoadingStateChangeEvent = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  FocusImpl = goog.module.get('org.gwtproject.user.client.ui.impl.FocusImpl$impl');
  DefaultSelectionEventManager = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager$impl');
  Range = goog.module.get('org.gwtproject.view.client.Range$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractHasData, 'org.gwtproject.user.cellview.client.AbstractHasData');

HasData.$markImplementor(AbstractHasData);
HasKeyProvider.$markImplementor(AbstractHasData);
Focusable.$markImplementor(AbstractHasData);
HasKeyboardPagingPolicy.$markImplementor(AbstractHasData);

/**@type {Object}*/
AbstractHasData.f_tmpElem__org_gwtproject_user_cellview_client_AbstractHasData_;

exports = AbstractHasData; 
//# sourceMappingURL=AbstractHasData.js.map