goog.module('org.gwtproject.user.cellview.client.HasDataPresenter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyboardPagingPolicy = goog.require('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy$impl');
const HasData = goog.require('org.gwtproject.view.client.HasData$impl');
const HasKeyProvider = goog.require('org.gwtproject.view.client.HasKeyProvider$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Error = goog.forwardDeclare('java.lang.Error$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let JsArrayInteger_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArrayInteger.$Overlay$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.$2$impl');
let DefaultState = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.DefaultState$impl');
let PendingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.PendingState$impl');
let State = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.State$impl');
let View = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.View$impl');
let KeyboardPagingPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let LoadingStateChangeEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');
let LoadingStateChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.Handler$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let RangeChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent$impl');
let RangeChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');
let RowCountChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent$impl');
let RowCountChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {HasData<T>}
 * @implements {HasKeyProvider<T>}
 * @implements {HasKeyboardPagingPolicy}
  */
class HasDataPresenter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HasData<T>}*/
  this.f_display__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {boolean}*/
  this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
  /**@type {KeyboardPagingPolicy}*/
  this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {KeyboardSelectionPolicy}*/
  this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {ProvidesKey<T>}*/
  this.f_keyProvider__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {PendingState<T>}*/
  this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {ScheduledCommand}*/
  this.f_pendingStateCommand__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {number}*/
  this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0;
  /**@type {HandlerRegistration}*/
  this.f_selectionHandler__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {SelectionModel<?>}*/
  this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {State<T>}*/
  this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_;
  /**@type {View<T>}*/
  this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 
 static m_sortJsArrayInteger__elemental2_core_JsArray(/** Array */ array) {
  array.sort(/**@type {?function(?number, ?number):number}*/ ((x, y) =>{
   let x_1 = /**@type {?number}*/ ($Casts.$to(x, Double));
   let y_1 = /**@type {?number}*/ ($Casts.$to(y, Double));
   return Double.m_doubleValue__java_lang_Double(x_1) - Double.m_doubleValue__java_lang_Double(y_1);
  }));
 }
 /** @template T @return {!HasDataPresenter<T>} */
 static $create__org_gwtproject_view_client_HasData__org_gwtproject_user_cellview_client_HasDataPresenter_View__int__org_gwtproject_view_client_ProvidesKey(/** HasData<T> */ display, /** View<T> */ view, /** number */ pageSize, /** ProvidesKey<T> */ keyProvider) {
  HasDataPresenter.$clinit();
  let $instance = new HasDataPresenter();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasDataPresenter__org_gwtproject_view_client_HasData__org_gwtproject_user_cellview_client_HasDataPresenter_View__int__org_gwtproject_view_client_ProvidesKey(display, view, pageSize, keyProvider);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_HasDataPresenter__org_gwtproject_view_client_HasData__org_gwtproject_user_cellview_client_HasDataPresenter_View__int__org_gwtproject_view_client_ProvidesKey(/** HasData<T> */ display, /** View<T> */ view, /** number */ pageSize, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  this.f_display__org_gwtproject_user_cellview_client_HasDataPresenter_ = display;
  this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_ = view;
  this.f_keyProvider__org_gwtproject_user_cellview_client_HasDataPresenter_ = keyProvider;
  this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_ = /**@type {!DefaultState<T>}*/ (DefaultState.$create__int(pageSize));
 }
 /** @override @return {HandlerRegistration} */
 m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/** Handler<T> */ handler) {
  return this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, CellPreviewEvent.m_getType__());
 }
 /** @return {HandlerRegistration} */
 m_addLoadingStateChangeHandler__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_Handler(/** LoadingStateChangeEvent_Handler */ handler) {
  return this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, LoadingStateChangeEvent.f_TYPE__org_gwtproject_user_cellview_client_LoadingStateChangeEvent);
 }
 /** @override @return {HandlerRegistration} */
 m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(/** RangeChangeEvent_Handler */ handler) {
  return this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, RangeChangeEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(/** RowCountChangeEvent_Handler */ handler) {
  return this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, RowCountChangeEvent.m_getType__());
 }
 
 m_clearKeyboardSelectedRowValue__() {
  if (!$Equality.$same(this.m_getKeyboardSelectedRowValue__(), null)) {
   this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
  }
 }
 
 m_clearSelectionModel__() {
  if (!$Equality.$same(this.f_selectionHandler__org_gwtproject_user_cellview_client_HasDataPresenter_, null)) {
   this.f_selectionHandler__org_gwtproject_user_cellview_client_HasDataPresenter_.m_removeHandler__();
   this.f_selectionHandler__org_gwtproject_user_cellview_client_HasDataPresenter_ = null;
  }
  this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_ = null;
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 
 m_flush__() {
  this.m_resolvePendingState__org_gwtproject_core_client_JsArrayInteger_$p_org_gwtproject_user_cellview_client_HasDataPresenter(null);
 }
 /** @return {number} */
 m_getCurrentPageSize__() {
  return Math.min(this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter(), this.m_getRowCount__() - this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter());
 }
 /** @override @return {KeyboardPagingPolicy} */
 m_getKeyboardPagingPolicy__() {
  return this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 /** @return {number} */
 m_getKeyboardSelectedRow__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_) ? -1 : this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getKeyboardSelectedRow__();
 }
 /** @return {number} */
 m_getKeyboardSelectedRowInView__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_) ? -1 : this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_.m_getKeyboardSelectedRow__();
 }
 /** @return {T} */
 m_getKeyboardSelectedRowValue__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_) ? null : this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getKeyboardSelectedRowValue__();
 }
 /** @override @return {KeyboardSelectionPolicy} */
 m_getKeyboardSelectionPolicy__() {
  return this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 /** @override @return {ProvidesKey<T>} */
 m_getKeyProvider__() {
  return this.f_keyProvider__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 /** @override @return {number} */
 m_getRowCount__() {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getRowCount__();
 }
 /** @override @return {SelectionModel<?>} */
 m_getSelectionModel__() {
  return this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 /** @override @return {T} */
 m_getVisibleItem__int(/** number */ indexOnPage) {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getRowDataValue__int(indexOnPage);
 }
 /** @override @return {number} */
 m_getVisibleItemCount__() {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getRowDataSize__();
 }
 /** @override @return {List<T>} */
 m_getVisibleItems__() {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getRowDataValues__();
 }
 /** @override @return {Range} */
 m_getVisibleRange__() {
  return Range.$create__int__int(this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter(), this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter());
 }
 /** @return {boolean} */
 m_hasPendingState__() {
  return !$Equality.$same(this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_, null);
 }
 /** @return {boolean} */
 m_isEmpty__() {
  return this.m_isRowCountExact__() && this.m_getRowCount__() == 0;
 }
 /** @override @return {boolean} */
 m_isRowCountExact__() {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_isRowCountExact__();
 }
 
 m_redraw__() {
  this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_redrawRequired__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = true;
 }
 /** @override */
 m_setKeyboardPagingPolicy__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy(/** KeyboardPagingPolicy */ policy) {
  if ($Equality.$same(policy, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("KeyboardPagingPolicy cannot be null"));
  }
  this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_ = policy;
 }
 
 m_setKeyboardSelectedRow__int__boolean__boolean(/** number */ index, /** boolean */ stealFocus, /** boolean */ forceUpdate) {
  if ($Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_)) {
   return;
  }
  if (this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_.m_isLimitedToRange___$pp_org_gwtproject_user_cellview_client()) {
   index = Math.max(0, Math.min(index, this.m_getVisibleItemCount__() - 1));
  }
  this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = true;
  if (!forceUpdate && this.m_getKeyboardSelectedRow__() == index && !$Equality.$same(this.m_getKeyboardSelectedRowValue__(), null)) {
   return;
  }
  let pageStart = this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let pageSize = this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let rowCount = this.m_getRowCount__();
  let absIndex = pageStart + index;
  if (absIndex >= rowCount && this.m_isRowCountExact__()) {
   absIndex = rowCount - 1;
  }
  index = Math.max(0, absIndex) - pageStart;
  if (this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_.m_isLimitedToRange___$pp_org_gwtproject_user_cellview_client()) {
   index = Math.max(0, Math.min(index, pageSize - 1));
  }
  let newPageStart = pageStart;
  let newPageSize = pageSize;
  let pending = this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  pending.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  pending.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
  pending.f_keyboardSelectedRowChanged__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = true;
  if (index >= 0 && index < pageSize) {
   pending.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = index;
   pending.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = index < pending.m_getRowDataSize__() ? this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getRowDataValue__int(index) : null;
   pending.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = stealFocus;
   return;
  } else if ($Equality.$same(KeyboardPagingPolicy.f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_)) {
   while (index < 0) {
    let shift = Math.min(pageSize, newPageStart);
    newPageStart -= shift;
    index += shift;
   }
   while (index >= pageSize) {
    newPageStart += pageSize;
    index -= pageSize;
   }
  } else if ($Equality.$same(KeyboardPagingPolicy.f_INCREASE_RANGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy, this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_)) {
   while (index < 0) {
    let shift_1 = Math.min(HasDataPresenter.f_PAGE_INCREMENT__org_gwtproject_user_cellview_client_HasDataPresenter, newPageStart);
    newPageSize += shift_1;
    newPageStart -= shift_1;
    index += shift_1;
   }
   while (index >= newPageSize) {
    newPageSize += HasDataPresenter.f_PAGE_INCREMENT__org_gwtproject_user_cellview_client_HasDataPresenter;
   }
   if (this.m_isRowCountExact__()) {
    newPageSize = Math.min(newPageSize, rowCount - newPageStart);
    if (index >= rowCount) {
     index = rowCount - 1;
    }
   }
  }
  if (newPageStart != pageStart || newPageSize != pageSize) {
   pending.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = index;
   this.m_setVisibleRange__org_gwtproject_view_client_Range__boolean__boolean_$p_org_gwtproject_user_cellview_client_HasDataPresenter(Range.$create__int__int(newPageStart, newPageSize), false, false);
  }
 }
 /** @override */
 m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(/** KeyboardSelectionPolicy */ policy) {
  if ($Equality.$same(policy, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("KeyboardSelectionPolicy cannot be null"));
  }
  this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_ = policy;
 }
 /** @override */
 m_setRowCount__int(/** number */ count) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 m_setRowCount__int__boolean(/** number */ count, /** boolean */ isExact) {
  if (count == this.m_getRowCount__() && isExact == this.m_isRowCountExact__()) {
   return;
  }
  this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = count;
  this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = isExact;
  this.m_updateCachedData___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  RowCountChangeEvent.m_fire__org_gwtproject_view_client_HasRows__int__boolean(this.f_display__org_gwtproject_user_cellview_client_HasDataPresenter_, count, isExact);
 }
 /** @override */
 m_setRowData__int__java_util_List(/** number */ start, /** List<?> */ values) {
  let valuesLength = values.size();
  let valuesEnd = start + valuesLength;
  let pageStart = this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let pageEnd = this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter() + this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let boundedStart = Math.max(start, pageStart);
  let boundedEnd = Math.min(valuesEnd, pageEnd);
  if (start != pageStart && boundedStart >= boundedEnd) {
   return;
  }
  let pending = this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let cacheOffset = Math.max(0, boundedStart - pageStart - this.m_getVisibleItemCount__());
  for (let i = 0; i < cacheOffset; i++) {
   pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.add(null);
  }
  for (let i_1 = boundedStart; i_1 < boundedEnd; i_1++) {
   let value = values.getAtIndex(i_1 - start);
   let dataIndex = i_1 - pageStart;
   if (dataIndex < this.m_getVisibleItemCount__()) {
    pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.setAtIndex(dataIndex, value);
   } else {
    pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.add(value);
   }
  }
  pending.m_replaceRange__int__int(boundedStart - cacheOffset, boundedEnd);
  if (valuesEnd > this.m_getRowCount__()) {
   this.m_setRowCount__int__boolean(valuesEnd, this.m_isRowCountExact__());
  }
 }
 /** @override */
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel(/** SelectionModel<?> */ selectionModel) {
  this.m_clearSelectionModel__();
  this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_ = selectionModel;
  if (!$Equality.$same(selectionModel, null)) {
   this.f_selectionHandler__org_gwtproject_user_cellview_client_HasDataPresenter_ = selectionModel.m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_user_cellview_client_HasDataPresenter(this)));
  }
  this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
 }
 /** @override */
 m_setVisibleRange__int__int(/** number */ start, /** number */ length) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 m_setVisibleRange__org_gwtproject_view_client_Range(/** Range */ range) {
  this.m_setVisibleRange__org_gwtproject_view_client_Range__boolean__boolean_$p_org_gwtproject_user_cellview_client_HasDataPresenter(range, false, false);
 }
 /** @override */
 m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(/** Range */ range, /** boolean */ forceRangeChangeEvent) {
  this.m_setVisibleRange__org_gwtproject_view_client_Range__boolean__boolean_$p_org_gwtproject_user_cellview_client_HasDataPresenter(range, true, forceRangeChangeEvent);
 }
 
 m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(/** ScheduledCommand */ command) {
  Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(command);
 }
 /** @return {List<Range>} */
 m_calculateModifiedRanges__org_gwtproject_core_client_JsArrayInteger__int__int_$pp_org_gwtproject_user_cellview_client(/** Object */ modifiedRows, /** number */ pageStart, /** number */ pageEnd) {
  HasDataPresenter.m_sortJsArrayInteger__elemental2_core_JsArray(/**@type {Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object(modifiedRows), $Overlay)));
  let rangeStart0 = -1;
  let rangeEnd0 = -1;
  let rangeStart1 = -1;
  let rangeEnd1 = -1;
  let maxDiff = 0;
  for (let i = 0; i < JsArrayInteger_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayInteger(modifiedRows); i++) {
   let index = JsArrayInteger_$Overlay.m_get__$devirt__org_gwtproject_core_client_JsArrayInteger__int(modifiedRows, i);
   if (index < pageStart || index >= pageEnd) {
    continue;
   } else if (rangeStart0 == -1) {
    rangeStart0 = index;
    rangeEnd0 = index;
   } else if (rangeStart1 == -1) {
    maxDiff = index - rangeEnd0;
    rangeStart1 = index;
    rangeEnd1 = index;
   } else {
    let diff = index - rangeEnd1;
    if (diff > maxDiff) {
     rangeEnd0 = rangeEnd1;
     rangeStart1 = index;
     rangeEnd1 = index;
     maxDiff = diff;
    } else {
     rangeEnd1 = index;
    }
   }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
   rangeEnd0 = rangeEnd1;
   rangeStart1 = -1;
   rangeEnd1 = -1;
  }
  let toRet = /**@type {!ArrayList<Range>}*/ (ArrayList.$create__());
  if (rangeStart0 != -1) {
   let rangeLength0 = rangeEnd0 - rangeStart0;
   toRet.add(Range.$create__int__int(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
   let rangeLength1 = rangeEnd1 - rangeStart1;
   toRet.add(Range.$create__int__int(rangeStart1, rangeLength1));
  }
  return toRet;
 }
 /** @return {PendingState<T>} */
 m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  if ($Equality.$same(this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_, null)) {
   this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = /**@type {!PendingState<T>}*/ (PendingState.$create__org_gwtproject_user_cellview_client_HasDataPresenter_State(this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_));
  }
  this.f_pendingStateCommand__org_gwtproject_user_cellview_client_HasDataPresenter_ = /**@type {!$2<T>}*/ ($2.$create__org_gwtproject_user_cellview_client_HasDataPresenter(this));
  this.m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(this.f_pendingStateCommand__org_gwtproject_user_cellview_client_HasDataPresenter_);
  return this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 /** @return {number} */
 m_findIndexOfBestMatch__org_gwtproject_user_cellview_client_HasDataPresenter_State__java_lang_Object__int_$p_org_gwtproject_user_cellview_client_HasDataPresenter(/** State<T> */ state, /** T */ value, /** number */ initialIndex) {
  let key = this.m_getRowValueKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_HasDataPresenter(value);
  if ($Equality.$same(key, null)) {
   return -1;
  }
  let bestMatchIndex = -1;
  let bestMatchDiff = Integer.f_MAX_VALUE__java_lang_Integer;
  let rowDataCount = state.m_getRowDataSize__();
  for (let i = 0; i < rowDataCount; i++) {
   let curValue = state.m_getRowDataValue__int(i);
   let curKey = this.m_getRowValueKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_HasDataPresenter(curValue);
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(key, curKey)) {
    let diff = Math.abs(initialIndex - i);
    if (diff < bestMatchDiff) {
     bestMatchIndex = i;
     bestMatchDiff = diff;
    }
   }
  }
  return bestMatchIndex;
 }
 /** @return {State<T>} */
 m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  return $Equality.$same(this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_, null) ? this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_ : this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_;
 }
 /** @return {number} */
 m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getPageSize__();
 }
 /** @return {number} */
 m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  return this.m_getCurrentState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().m_getPageStart__();
 }
 /** @return {*} */
 m_getRowValueKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_HasDataPresenter(/** T */ rowValue) {
  return ($Equality.$same(this.f_keyProvider__org_gwtproject_user_cellview_client_HasDataPresenter_, null) || $Equality.$same(rowValue, null)) ? rowValue : this.f_keyProvider__org_gwtproject_user_cellview_client_HasDataPresenter_.m_getKey__java_lang_Object(rowValue);
 }
 /** @return {boolean} */
 m_resolvePendingState__org_gwtproject_core_client_JsArrayInteger_$p_org_gwtproject_user_cellview_client_HasDataPresenter(/** Object */ modifiedRows) {
  this.f_pendingStateCommand__org_gwtproject_user_cellview_client_HasDataPresenter_ = null;
  if (this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_) {
   return false;
  }
  this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = true;
  if ($Equality.$same(this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_, null)) {
   this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
   this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0;
   return false;
  }
  this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_++;
  if (this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ > HasDataPresenter.f_LOOP_MAXIMUM__org_gwtproject_user_cellview_client_HasDataPresenter_) {
   this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
   this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0;
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("A possible infinite loop has been detected in a Cell Widget. This " + "usually happens when your SelectionModel triggers a " + "SelectionChangeEvent when SelectionModel.isSelection() is " + "called, which causes the table to redraw continuously."));
  }
  let oldState = this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_;
  let newState = this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_;
  this.f_state__org_gwtproject_user_cellview_client_HasDataPresenter_ = this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_;
  this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = null;
  if ($Equality.$same(modifiedRows, null)) {
   modifiedRows = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(JavaScriptObject_$Overlay.m_createArray__()), JsArrayInteger_$Overlay));
  }
  let pageStart = newState.m_getPageStart__();
  let pageSize = newState.m_getPageSize__();
  let pageEnd = pageStart + pageSize;
  let rowDataCount = newState.m_getRowDataSize__();
  newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = Math.max(0, Math.min(newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState, rowDataCount - 1));
  if ($Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_)) {
   newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
   newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
  } else if (newState.f_keyboardSelectedRowChanged__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_) {
   newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = rowDataCount > 0 ? newState.m_getRowDataValue__int(newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState) : null;
  } else if (!$Equality.$same(newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState, null)) {
   let bestMatchIndex = this.m_findIndexOfBestMatch__org_gwtproject_user_cellview_client_HasDataPresenter_State__java_lang_Object__int_$p_org_gwtproject_user_cellview_client_HasDataPresenter(newState, newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState, newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState);
   if (bestMatchIndex >= 0) {
    newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = bestMatchIndex;
    newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = rowDataCount > 0 ? newState.m_getRowDataValue__int(newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState) : null;
   } else {
    newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
    newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
   }
  }
  try {
   if ($Equality.$same(KeyboardSelectionPolicy.f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_) && !$Equality.$same(this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_, null) && newState.f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState) {
    let oldValue = oldState.m_getSelectedValue__();
    let oldKey = this.m_getRowValueKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_HasDataPresenter(oldValue);
    let newValue = rowDataCount > 0 ? newState.m_getRowDataValue__int(newState.m_getKeyboardSelectedRow__()) : null;
    let newKey = this.m_getRowValueKey__java_lang_Object_$p_org_gwtproject_user_cellview_client_HasDataPresenter(newValue);
    if (!$Equality.$same(newKey, null)) {
     let oldValueWasSelected = $Equality.$same(oldValue, null) ? false : this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_.m_isSelected__java_lang_Object(oldValue);
     let newValueWasSelected = $Equality.$same(newValue, null) ? false : this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_.m_isSelected__java_lang_Object(newValue);
     if (!$Objects.m_equals__java_lang_Object__java_lang_Object(newKey, oldKey)) {
      if (oldValueWasSelected) {
       this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setSelected__java_lang_Object__boolean(oldValue, false);
      }
      newState.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = newValue;
      if (!$Equality.$same(newValue, null) && !newValueWasSelected) {
       this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setSelected__java_lang_Object__boolean(newValue, true);
      }
     } else if (!newValueWasSelected) {
      newState.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
     }
    }
   }
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (RuntimeException.$isInstance(__$exc)) {
    let e = /**@type {RuntimeException}*/ (__$exc);
    this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
    this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0;
    throw $Exceptions.toJs(e);
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
  let keyboardRowChanged = newState.f_keyboardSelectedRowChanged__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ || (oldState.m_getKeyboardSelectedRow__() != newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState) || ($Equality.$same(oldState.m_getKeyboardSelectedRowValue__(), null) && !$Equality.$same(newState.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState, null));
  let newlySelectedRows = /**@type {!HashSet<Integer>}*/ (HashSet.$create__());
  try {
   for (let i = pageStart; i < pageStart + rowDataCount; i++) {
    let rowValue = newState.m_getRowDataValue__int(i - pageStart);
    let isSelected = (!$Equality.$same(rowValue, null) && !$Equality.$same(this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_, null) && this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_.m_isSelected__java_lang_Object(rowValue));
    let wasSelected = oldState.m_isRowSelected__int(i);
    if (isSelected) {
     newState.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.add(Integer.m_valueOf__int(i));
     newlySelectedRows.add(Integer.m_valueOf__int(i));
     if (!wasSelected) {
      modifiedRows.push(i);
     }
    } else if (wasSelected) {
     modifiedRows.push(i);
    }
   }
  } catch (__$exc_1) {
   __$exc_1 = $Exceptions.toJava(__$exc_1);
   if (RuntimeException.$isInstance(__$exc_1)) {
    let e_1 = /**@type {RuntimeException}*/ (__$exc_1);
    this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
    this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0;
    throw $Exceptions.toJs(e_1);
   } else {
    throw $Exceptions.toJs(__$exc_1);
   }
  }
  let replacedEmptyRange = false;
  for (let $iterator = newState.f_replacedRanges__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let replacedRange = /**@type {Range}*/ ($Casts.$to($iterator.m_next__(), Range));
   let start = replacedRange.m_getStart__();
   let length = replacedRange.m_getLength__();
   if (length == 0) {
    replacedEmptyRange = true;
   }
   for (let i_1 = start; i_1 < start + length; i_1++) {
    modifiedRows.push(i_1);
   }
  }
  if (JsArrayInteger_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayInteger(modifiedRows) > 0 && keyboardRowChanged) {
   modifiedRows.push(oldState.m_getKeyboardSelectedRow__());
   modifiedRows.push(newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState);
  }
  if (!$Equality.$same(this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_, null)) {
   this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
   this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = newState.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
   this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.addAll(newlySelectedRows);
   if (keyboardRowChanged) {
    this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_.f_keyboardSelectedRowChanged__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = true;
   }
   if (newState.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_) {
    this.f_pendingState__org_gwtproject_user_cellview_client_HasDataPresenter_.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = true;
   }
   modifiedRows.push(oldState.m_getKeyboardSelectedRow__());
   modifiedRows.push(newState.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState);
   if (this.m_resolvePendingState__org_gwtproject_core_client_JsArrayInteger_$p_org_gwtproject_user_cellview_client_HasDataPresenter(modifiedRows)) {
    return true;
   }
  }
  let modifiedRanges = this.m_calculateModifiedRanges__org_gwtproject_core_client_JsArrayInteger__int__int_$pp_org_gwtproject_user_cellview_client(modifiedRows, pageStart, pageEnd);
  let range0 = modifiedRanges.size() > 0 ? /**@type {Range}*/ ($Casts.$to(modifiedRanges.getAtIndex(0), Range)) : null;
  let range1 = modifiedRanges.size() > 1 ? /**@type {Range}*/ ($Casts.$to(modifiedRanges.getAtIndex(1), Range)) : null;
  let replaceDiff = 0;
  for (let $iterator_1 = modifiedRanges.m_iterator__(); $iterator_1.m_hasNext__(); ) {
   let range = /**@type {Range}*/ ($Casts.$to($iterator_1.m_next__(), Range));
   replaceDiff += range.m_getLength__();
  }
  let oldPageStart = oldState.m_getPageStart__();
  let oldPageSize = oldState.m_getPageSize__();
  let oldRowDataCount = oldState.m_getRowDataSize__();
  let redrawRequired = newState.f_redrawRequired__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_;
  if (pageStart != oldPageStart) {
   redrawRequired = true;
  } else if (rowDataCount < oldRowDataCount) {
   redrawRequired = true;
  } else if ($Equality.$same(range1, null) && !$Equality.$same(range0, null) && range0.m_getStart__() == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)) {
   redrawRequired = true;
  } else if (replaceDiff >= HasDataPresenter.f_REDRAW_MINIMUM__org_gwtproject_user_cellview_client_HasDataPresenter_ && replaceDiff > HasDataPresenter.f_REDRAW_THRESHOLD__org_gwtproject_user_cellview_client_HasDataPresenter_ * oldRowDataCount) {
   redrawRequired = true;
  } else if (replacedEmptyRange && oldRowDataCount == 0) {
   redrawRequired = true;
  }
  this.m_updateLoadingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  try {
   if (redrawRequired) {
    let sb = SafeHtmlBuilder.$create__();
    this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_replaceAllChildren__java_util_List__org_gwtproject_view_client_SelectionModel__boolean(newState.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState, this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_, newState.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_);
    this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_resetFocus__();
   } else if (!$Equality.$same(range0, null)) {
    {
     let absStart = range0.m_getStart__();
     let relStart = absStart - pageStart;
     let sb_1 = SafeHtmlBuilder.$create__();
     let replaceValues = newState.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.subList(relStart, relStart + range0.m_getLength__());
     this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_replaceChildren__java_util_List__int__org_gwtproject_view_client_SelectionModel__boolean(replaceValues, relStart, this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_, newState.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_);
    }
    if (!$Equality.$same(range1, null)) {
     let absStart_1 = range1.m_getStart__();
     let relStart_1 = absStart_1 - pageStart;
     let sb_2 = SafeHtmlBuilder.$create__();
     let replaceValues_1 = newState.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.subList(relStart_1, relStart_1 + range1.m_getLength__());
     this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_replaceChildren__java_util_List__int__org_gwtproject_view_client_SelectionModel__boolean(replaceValues_1, relStart_1, this.f_selectionModel__org_gwtproject_user_cellview_client_HasDataPresenter_, newState.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_);
    }
    this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_resetFocus__();
   } else if (keyboardRowChanged) {
    let oldSelectedRow = oldState.m_getKeyboardSelectedRow__();
    if (oldSelectedRow >= 0 && oldSelectedRow < rowDataCount) {
     this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setKeyboardSelected__int__boolean__boolean(oldSelectedRow, false, false);
    }
    let newSelectedRow = newState.m_getKeyboardSelectedRow__();
    if (newSelectedRow >= 0 && newSelectedRow < rowDataCount) {
     this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setKeyboardSelected__int__boolean__boolean(newSelectedRow, true, newState.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_);
    }
   }
  } catch (__$exc_2) {
   __$exc_2 = $Exceptions.toJava(__$exc_2);
   if (Error.$isInstance(__$exc_2)) {
    let e_2 = /**@type {Error}*/ (__$exc_2);
    throw $Exceptions.toJs(RuntimeException.$create__java_lang_Throwable(e_2));
   } else {
    throw $Exceptions.toJs(__$exc_2);
   }
  } finally {
   this.f_isResolvingState__org_gwtproject_user_cellview_client_HasDataPresenter_ = false;
  }
  this.m_resolvePendingState__org_gwtproject_core_client_JsArrayInteger_$p_org_gwtproject_user_cellview_client_HasDataPresenter(null);
  return true;
 }
 
 m_setVisibleRange__org_gwtproject_view_client_Range__boolean__boolean_$p_org_gwtproject_user_cellview_client_HasDataPresenter(/** Range */ range, /** boolean */ clearData, /** boolean */ forceRangeChangeEvent) {
  let start = range.m_getStart__();
  let length = range.m_getLength__();
  if (start < 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Range start cannot be less than 0"));
  }
  if (length < 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Range length cannot be less than 0"));
  }
  let pageStart = this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let pageSize = this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let pageStartChanged = (pageStart != start);
  if (pageStartChanged) {
   let pending = this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
   if (!clearData) {
    if (start > pageStart) {
     let increase = start - pageStart;
     if (this.m_getVisibleItemCount__() > increase) {
      for (let i = 0; i < increase; i++) {
       pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.removeAtIndex(0);
      }
     } else {
      pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.clear();
     }
    } else {
     let decrease = pageStart - start;
     if ((this.m_getVisibleItemCount__() > 0) && (decrease < pageSize)) {
      for (let i_1 = 0; i_1 < decrease; i_1++) {
       pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.addAtIndex(0, null);
      }
      pending.m_replaceRange__int__int(start, start + decrease);
     } else {
      pending.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.clear();
     }
    }
   }
   pending.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = start;
  }
  let pageSizeChanged = (pageSize != length);
  if (pageSizeChanged) {
   this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = length;
  }
  if (clearData) {
   this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.clear();
  }
  this.m_updateCachedData___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  if (pageStartChanged || pageSizeChanged || forceRangeChangeEvent) {
   RangeChangeEvent.m_fire__org_gwtproject_view_client_HasRows__org_gwtproject_view_client_Range(this.f_display__org_gwtproject_user_cellview_client_HasDataPresenter_, this.m_getVisibleRange__());
  }
 }
 
 m_updateCachedData___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  let pageStart = this.m_getPageStart___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  let expectedLastIndex = Math.max(0, Math.min(this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter(), this.m_getRowCount__() - pageStart));
  let lastIndex = this.m_getVisibleItemCount__() - 1;
  while (lastIndex >= expectedLastIndex) {
   this.m_ensurePendingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter().f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.removeAtIndex(lastIndex);
   lastIndex--;
  }
 }
 
 m_updateLoadingState___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  let cacheSize = this.m_getVisibleItemCount__();
  let curPageSize = this.m_isRowCountExact__() ? this.m_getCurrentPageSize__() : this.m_getPageSize___$p_org_gwtproject_user_cellview_client_HasDataPresenter();
  if (cacheSize >= curPageSize) {
   this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(LoadingState.f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState);
  } else if (cacheSize == 0) {
   this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(LoadingState.f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState);
  } else {
   this.f_view__org_gwtproject_user_cellview_client_HasDataPresenter_.m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(LoadingState.f_PARTIALLY_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_HasDataPresenter() {
  this.f_keyboardPagingPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_ = KeyboardPagingPolicy.f_CHANGE_PAGE__org_gwtproject_user_cellview_client_HasKeyboardPagingPolicy_KeyboardPagingPolicy;
  this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasDataPresenter_ = KeyboardSelectionPolicy.f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy;
  this.f_pendingStateLoop__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0;
 }
 
 static $clinit() {
  HasDataPresenter.$clinit = () =>{};
  HasDataPresenter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HasDataPresenter;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Error = goog.module.get('java.lang.Error$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  JsArrayInteger_$Overlay = goog.module.get('org.gwtproject.core.client.JsArrayInteger.$Overlay$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.HasDataPresenter.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.cellview.client.HasDataPresenter.$2$impl');
  DefaultState = goog.module.get('org.gwtproject.user.cellview.client.HasDataPresenter.DefaultState$impl');
  PendingState = goog.module.get('org.gwtproject.user.cellview.client.HasDataPresenter.PendingState$impl');
  KeyboardPagingPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardPagingPolicy.KeyboardPagingPolicy$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  LoadingStateChangeEvent = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent$impl');
  LoadingState = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
  CellPreviewEvent = goog.module.get('org.gwtproject.view.client.CellPreviewEvent$impl');
  Range = goog.module.get('org.gwtproject.view.client.Range$impl');
  RangeChangeEvent = goog.module.get('org.gwtproject.view.client.RangeChangeEvent$impl');
  RowCountChangeEvent = goog.module.get('org.gwtproject.view.client.RowCountChangeEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(HasDataPresenter, 'org.gwtproject.user.cellview.client.HasDataPresenter');

HasData.$markImplementor(HasDataPresenter);
HasKeyProvider.$markImplementor(HasDataPresenter);
HasKeyboardPagingPolicy.$markImplementor(HasDataPresenter);

/**@const {number}*/
HasDataPresenter.f_PAGE_INCREMENT__org_gwtproject_user_cellview_client_HasDataPresenter = 30;
/**@const {number}*/
HasDataPresenter.f_LOOP_MAXIMUM__org_gwtproject_user_cellview_client_HasDataPresenter_ = 10;
/**@const {number}*/
HasDataPresenter.f_REDRAW_MINIMUM__org_gwtproject_user_cellview_client_HasDataPresenter_ = 5;
/**@const {number}*/
HasDataPresenter.f_REDRAW_THRESHOLD__org_gwtproject_user_cellview_client_HasDataPresenter_ = 0.3;

exports = HasDataPresenter; 
//# sourceMappingURL=HasDataPresenter.js.map