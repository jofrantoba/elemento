goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView.TreeNodeImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TreeNode = goog.require('org.gwtproject.user.cellview.client.TreeNode$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {TreeNode}
  */
class TreeNodeImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellTreeNodeView<?>} */
  this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_;
 }
 /**
  * @param {CellTreeNodeView<?>} nodeView
  * @return {!TreeNodeImpl}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTreeNodeView(nodeView) {
  TreeNodeImpl.$clinit();
  let $instance = new TreeNodeImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl__org_gwtproject_user_cellview_client_CellTreeNodeView(nodeView);
  return $instance;
 }
 /**
  * @param {CellTreeNodeView<?>} nodeView
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl__org_gwtproject_user_cellview_client_CellTreeNodeView(nodeView) {
  this.$ctor__java_lang_Object__();
  this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_ = nodeView;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getChildCount__() {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  this.m_flush___$pp_org_gwtproject_user_cellview_client();
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_getChildCount__();
 }
 /**
  * @override
  * @param {number} index
  * @return {*}
  * @public
  */
 m_getChildValue__int(index) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl(index);
  this.m_flush___$pp_org_gwtproject_user_cellview_client();
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_getChildNode__int(index).f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getIndex__() {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  return $Equality.$same(this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, null) ? 0 : this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.indexOf(this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_);
 }
 /**
  * @return {CellTreeNodeView<?>}
  * @public
  */
 m_getNodeView___$pp_org_gwtproject_user_cellview_client() {
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_;
 }
 /**
  * @override
  * @return {TreeNode}
  * @public
  */
 m_getParent__() {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  return this.m_getParentImpl___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
 }
 /**
  * @override
  * @return {*}
  * @public
  */
 m_getValue__() {
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isChildLeaf__int(index) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl(index);
  this.m_flush___$pp_org_gwtproject_user_cellview_client();
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_getChildNode__int(index).m_isLeaf__();
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isChildOpen__int(index) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl(index);
  this.m_flush___$pp_org_gwtproject_user_cellview_client();
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_getChildNode__int(index).m_isOpen__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isDestroyed__() {
  if (!this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_isDestroyed__org_gwtproject_user_cellview_client_CellTreeNodeView_) {
   let parent = this.m_getParentImpl___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
   if (!$Equality.$same(parent, null) && !parent.m_isDestroyed__()) {
    parent.m_flush___$pp_org_gwtproject_user_cellview_client();
   }
  }
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_isDestroyed__org_gwtproject_user_cellview_client_CellTreeNodeView_ || !this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_isOpen__();
 }
 /**
  * @override
  * @param {number} index
  * @param {boolean} open
  * @return {TreeNode}
  * @public
  */
 m_setChildOpen__int__boolean(index, open) {
  return this.m_setChildOpen__int__boolean__boolean(index, open, true);
 }
 /**
  * @override
  * @param {number} index
  * @param {boolean} open
  * @param {boolean} fireEvents
  * @return {TreeNode}
  * @public
  */
 m_setChildOpen__int__boolean__boolean(index, open, fireEvents) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl(index);
  let child = this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_getChildNode__int(index);
  return child.m_setOpen__boolean__boolean(open, fireEvents) ? child.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_ : null;
 }
 /**
  * @public
  */
 m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl() {
  if (this.m_isDestroyed__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("TreeNode no longer exists."));
  }
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl(index) {
  if ((index < 0) || (index >= this.m_getChildCount__())) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /**
  * @public
  */
 m_flush___$pp_org_gwtproject_user_cellview_client() {
  if (!$Equality.$same(this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView, null)) {
   this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_flush__();
  }
 }
 /**
  * @return {TreeNodeImpl}
  * @public
  */
 m_getParentImpl___$p_org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl() {
  return this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.m_isRootNode___$pp_org_gwtproject_user_cellview_client() ? null : this.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @public
  */
 static $clinit() {
  TreeNodeImpl.$clinit = () =>{};
  TreeNodeImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TreeNodeImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TreeNodeImpl, 'org.gwtproject.user.cellview.client.CellTreeNodeView$TreeNodeImpl');

TreeNode.$markImplementor(TreeNodeImpl);

exports = TreeNodeImpl; 
//# sourceMappingURL=CellTreeNodeView$TreeNodeImpl.js.map