goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasData = goog.require('org.gwtproject.view.client.HasData$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let HandlerManager = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList.$1$impl');
let View = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList.View$impl');
let HasDataPresenter = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let RangeChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RangeChangeEvent.Handler$impl');
let RowCountChangeEvent_Handler = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');

/**
 * @template C
 * @implements {HasData<C>}
  */
class NodeCellList extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HasDataPresenter<C>}*/
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList;
  /**@type {Cell<C>}*/
  this.f_cell__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
  /**@type {number}*/
  this.f_defaultPageSize__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = 0;
  /**@type {HandlerManager}*/
  this.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
  /**@type {NodeInfo<C>}*/
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
  /**@type {CellTreeNodeView<?>}*/
  this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
 }
 /** @template C @return {!NodeCellList<C>} */
 static $create__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(/** NodeInfo<C> */ nodeInfo, /** CellTreeNodeView<?> */ nodeView, /** number */ pageSize) {
  NodeCellList.$clinit();
  let $instance = new NodeCellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(nodeInfo, nodeView, pageSize);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(/** NodeInfo<C> */ nodeInfo, /** CellTreeNodeView<?> */ nodeView, /** number */ pageSize) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList();
  this.f_defaultPageSize__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = pageSize;
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = nodeInfo;
  this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = nodeView;
  this.f_cell__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = nodeInfo.m_getCell__();
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList = /**@type {!HasDataPresenter<C>}*/ (HasDataPresenter.$create__org_gwtproject_view_client_HasData__org_gwtproject_user_cellview_client_HasDataPresenter_View__int__org_gwtproject_view_client_ProvidesKey(this, /**@type {!View<C>}*/ (View.$create__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_dom_client_Element(this, nodeView.m_ensureChildContainer___$pp_org_gwtproject_user_cellview_client())), pageSize, nodeInfo.m_getProvidesKey__()));
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(/**@type {!$1<C>}*/ ($1.$create__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_user_cellview_client_CellTreeNodeView(this, nodeView)));
 }
 /** @override @return {HandlerRegistration} */
 m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/** Handler<C> */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(handler);
 }
 /** @override @return {HandlerRegistration} */
 m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(/** RangeChangeEvent_Handler */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(handler);
 }
 /** @override @return {HandlerRegistration} */
 m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(/** RowCountChangeEvent_Handler */ handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(handler);
 }
 
 m_cleanup__() {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_clearSelectionModel__();
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  this.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /** @return {number} */
 m_getDefaultPageSize__() {
  return this.f_defaultPageSize__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
 }
 /** @override @return {number} */
 m_getRowCount__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getRowCount__();
 }
 /** @override @return {SelectionModel<?>} */
 m_getSelectionModel__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getSelectionModel__();
 }
 /** @override @return {C} */
 m_getVisibleItem__int(/** number */ indexOnPage) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleItem__int(indexOnPage);
 }
 /** @override @return {number} */
 m_getVisibleItemCount__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleItemCount__();
 }
 /** @override @return {List<C>} */
 m_getVisibleItems__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleItems__();
 }
 /** @override @return {Range} */
 m_getVisibleRange__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleRange__();
 }
 /** @override @return {boolean} */
 m_isRowCountExact__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_isRowCountExact__();
 }
 /** @override */
 m_setRowCount__int(/** number */ count) {
  this.m_setRowCount__int__boolean(count, true);
 }
 /** @override */
 m_setRowCount__int__boolean(/** number */ size, /** boolean */ isExact) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setRowCount__int__boolean(size, isExact);
 }
 /** @override */
 m_setRowData__int__java_util_List(/** number */ start, /** List<?> */ values) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setRowData__int__java_util_List(start, values);
 }
 /** @override */
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel(/** SelectionModel<?> */ selectionModel) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(selectionModel);
 }
 /** @override */
 m_setVisibleRange__int__int(/** number */ start, /** number */ length) {
  this.m_setVisibleRange__org_gwtproject_view_client_Range(Range.$create__int__int(start, length));
 }
 /** @override */
 m_setVisibleRange__org_gwtproject_view_client_Range(/** Range */ range) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setVisibleRange__org_gwtproject_view_client_Range(range);
 }
 /** @override */
 m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(/** Range */ range, /** boolean */ forceRangeChangeEvent) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(range, forceRangeChangeEvent);
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList() {
  this.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = HandlerManager.$create__java_lang_Object(this);
 }
 
 static $clinit() {
  NodeCellList.$clinit = () =>{};
  NodeCellList.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NodeCellList;
 }
 
 static $loadModules() {
  HandlerManager = goog.module.get('org.gwtproject.event.shared.HandlerManager$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList.$1$impl');
  View = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList.View$impl');
  HasDataPresenter = goog.module.get('org.gwtproject.user.cellview.client.HasDataPresenter$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  Range = goog.module.get('org.gwtproject.view.client.Range$impl');
 }
 
}
$Util.$setClassMetadata(NodeCellList, 'org.gwtproject.user.cellview.client.CellTreeNodeView$NodeCellList');

HasData.$markImplementor(NodeCellList);

exports = NodeCellList; 
//# sourceMappingURL=CellTreeNodeView$NodeCellList.js.map