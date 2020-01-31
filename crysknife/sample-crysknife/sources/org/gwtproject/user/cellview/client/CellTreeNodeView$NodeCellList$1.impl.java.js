goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');

let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
let NodeCellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList$impl');
let RowCountChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent$impl');

/**
 * @template C
 * @implements {Handler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NodeCellList<C>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_1;
  /**@type {CellTreeNodeView<?>}*/
  this.$c_nodeView;
 }
 /** @template C @return {!$1<C>} */
 static $create__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_user_cellview_client_CellTreeNodeView(/** NodeCellList<C> */ $outer_this, /** CellTreeNodeView<?> */ $c_nodeView) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_1__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_user_cellview_client_CellTreeNodeView($outer_this, $c_nodeView);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_1__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_user_cellview_client_CellTreeNodeView(/** NodeCellList<C> */ $outer_this, /** CellTreeNodeView<?> */ $c_nodeView) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_1 = $outer_this;
  this.$c_nodeView = $c_nodeView;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onRowCountChange__org_gwtproject_view_client_RowCountChangeEvent(/** RowCountChangeEvent */ event) {
  let rowCount = event.m_getNewRowCount__();
  let isExact = event.m_isNewRowCountExact__();
  let pageSize = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_1.m_getVisibleRange__().m_getLength__();
  CellTreeNodeView.m_showOrHide__org_gwtproject_dom_client_Element__boolean(this.$c_nodeView.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, isExact && rowCount > pageSize);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  CellTreeNodeView = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellTreeNodeView$NodeCellList$1');

Handler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellTreeNodeView$NodeCellList$1.js.map