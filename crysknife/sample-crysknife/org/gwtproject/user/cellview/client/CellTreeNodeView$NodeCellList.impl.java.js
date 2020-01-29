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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HasDataPresenter<C>} */
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList;
  /** @public {Cell<C>} */
  this.f_cell__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
  /** @public {number} */
  this.f_defaultPageSize__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = 0;
  /** @public {HandlerManager} */
  this.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
  /** @public {NodeInfo<C>} */
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
  /** @public {CellTreeNodeView<?>} */
  this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
 }
 /**
  * @template C
  * @param {NodeInfo<C>} nodeInfo
  * @param {CellTreeNodeView<?>} nodeView
  * @param {number} pageSize
  * @return {!NodeCellList<C>}
  * @public
  */
 static $create__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(nodeInfo, nodeView, pageSize) {
  NodeCellList.$clinit();
  let $instance = new NodeCellList();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(nodeInfo, nodeView, pageSize);
  return $instance;
 }
 /**
  * @param {NodeInfo<C>} nodeInfo
  * @param {CellTreeNodeView<?>} nodeView
  * @param {number} pageSize
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(nodeInfo, nodeView, pageSize) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList();
  this.f_defaultPageSize__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = pageSize;
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = nodeInfo;
  this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = nodeView;
  this.f_cell__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = nodeInfo.m_getCell__();
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList = /**@type {!HasDataPresenter<C>} */ (HasDataPresenter.$create__org_gwtproject_view_client_HasData__org_gwtproject_user_cellview_client_HasDataPresenter_View__int__org_gwtproject_view_client_ProvidesKey(this, /**@type {!View<C>} */ (View.$create__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_dom_client_Element(this, nodeView.m_ensureChildContainer___$pp_org_gwtproject_user_cellview_client())), pageSize, nodeInfo.m_getProvidesKey__()));
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(/**@type {!$1<C>} */ ($1.$create__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_user_cellview_client_CellTreeNodeView(this, nodeView)));
 }
 /**
  * @override
  * @param {Handler<C>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addCellPreviewHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(handler);
 }
 /**
  * @override
  * @param {RangeChangeEvent_Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler(handler);
 }
 /**
  * @override
  * @param {RowCountChangeEvent_Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(handler) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler(handler);
 }
 /**
  * @public
  */
 m_cleanup__() {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_clearSelectionModel__();
 }
 /**
  * @override
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {
  this.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /**
  * @return {number}
  * @public
  */
 m_getDefaultPageSize__() {
  return this.f_defaultPageSize__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getRowCount__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getRowCount__();
 }
 /**
  * @override
  * @return {SelectionModel<?>}
  * @public
  */
 m_getSelectionModel__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getSelectionModel__();
 }
 /**
  * @override
  * @param {number} indexOnPage
  * @return {C}
  * @public
  */
 m_getVisibleItem__int(indexOnPage) {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleItem__int(indexOnPage);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getVisibleItemCount__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleItemCount__();
 }
 /**
  * @override
  * @return {List<C>}
  * @public
  */
 m_getVisibleItems__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleItems__();
 }
 /**
  * @override
  * @return {Range}
  * @public
  */
 m_getVisibleRange__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_getVisibleRange__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isRowCountExact__() {
  return this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_isRowCountExact__();
 }
 /**
  * @override
  * @param {number} count
  * @public
  */
 m_setRowCount__int(count) {
  this.m_setRowCount__int__boolean(count, true);
 }
 /**
  * @override
  * @param {number} size
  * @param {boolean} isExact
  * @public
  */
 m_setRowCount__int__boolean(size, isExact) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setRowCount__int__boolean(size, isExact);
 }
 /**
  * @override
  * @param {number} start
  * @param {List<?>} values
  * @public
  */
 m_setRowData__int__java_util_List(start, values) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setRowData__int__java_util_List(start, values);
 }
 /**
  * @override
  * @param {SelectionModel<?>} selectionModel
  * @public
  */
 m_setSelectionModel__org_gwtproject_view_client_SelectionModel(selectionModel) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(selectionModel);
 }
 /**
  * @override
  * @param {number} start
  * @param {number} length
  * @public
  */
 m_setVisibleRange__int__int(start, length) {
  this.m_setVisibleRange__org_gwtproject_view_client_Range(Range.$create__int__int(start, length));
 }
 /**
  * @override
  * @param {Range} range
  * @public
  */
 m_setVisibleRange__org_gwtproject_view_client_Range(range) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setVisibleRange__org_gwtproject_view_client_Range(range);
 }
 /**
  * @override
  * @param {Range} range
  * @param {boolean} forceRangeChangeEvent
  * @public
  */
 m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(range, forceRangeChangeEvent) {
  this.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(range, forceRangeChangeEvent);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList() {
  this.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = HandlerManager.$create__java_lang_Object(this);
 }
 /**
  * @public
  */
 static $clinit() {
  NodeCellList.$clinit = () =>{};
  NodeCellList.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NodeCellList;
 }
 /**
  * @public
  */
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