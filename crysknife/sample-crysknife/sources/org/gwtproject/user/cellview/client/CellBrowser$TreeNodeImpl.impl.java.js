goog.module('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TreeNode = goog.require('org.gwtproject.user.cellview.client.TreeNode$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let CellBrowser = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser$impl');
let BrowserCellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.BrowserCellList$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl.$1$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template C
 * @implements {TreeNode}
  */
class TreeNodeImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellBrowser} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl;
  /** @public {BrowserCellList<C>} */
  this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
  /** @public {NodeInfo<C>} */
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
  /** @public {*} */
  this.f_value__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
  /** @public {HandlerRegistration} */
  this.f_valueChangeHandler__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
  /** @public {Widget} */
  this.f_widget__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
 }
 /**
  * @template C
  * @param {CellBrowser} $outer_this
  * @param {NodeInfo<C>} nodeInfo
  * @param {*} value
  * @param {BrowserCellList<C>} display
  * @param {Widget} widget
  * @return {!TreeNodeImpl<C>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__org_gwtproject_user_client_ui_Widget($outer_this, nodeInfo, value, display, widget) {
  TreeNodeImpl.$clinit();
  let $instance = new TreeNodeImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__org_gwtproject_user_client_ui_Widget($outer_this, nodeInfo, value, display, widget);
  return $instance;
 }
 /**
  * @param {CellBrowser} $outer_this
  * @param {NodeInfo<C>} nodeInfo
  * @param {*} value
  * @param {BrowserCellList<C>} display
  * @param {Widget} widget
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__org_gwtproject_user_client_ui_Widget($outer_this, nodeInfo, value, display, widget) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_ = display;
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_ = nodeInfo;
  this.f_value__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_ = value;
  this.f_widget__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_ = widget;
  this.f_valueChangeHandler__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_ = display.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler_$pp_org_gwtproject_user_cellview_client(/**@type {!$1<C>} */ ($1.$create__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList(this, display)));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getChildCount__() {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  return this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_getVisibleItemCount__();
 }
 /**
  * @override
  * @param {number} index
  * @return {C}
  * @public
  */
 m_getChildValue__int(index) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl(index);
  return this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getVisibleItem__int(index);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getIndex__() {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  let parent = this.m_getParent__();
  return $Equality.$same(parent, null) ? 0 : parent.m_getOpenIndex___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
 }
 /**
  * @override
  * @return {TreeNodeImpl<?>}
  * @public
  */
 m_getParent__() {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  return this.m_getParentImpl___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
 }
 /**
  * @override
  * @return {*}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isChildLeaf__int(index) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl(index);
  return this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl.m_isLeaf__java_lang_Object(this.m_getChildValue__int(index));
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isChildOpen__int(index) {
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl(index);
  return ($Equality.$same(this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, null) || !this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_) ? false : $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getValueKey__java_lang_Object(this.m_getChildValue__int(index)));
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isDestroyed__() {
  if (!$Equality.$same(this.f_nodeInfo__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_, null)) {
   let parent = this.m_getParentImpl___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
   if (!$Equality.$same(parent, null) && !parent.m_isDestroyed__()) {
    parent.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_flush__();
   }
  }
  return $Equality.$same(this.f_nodeInfo__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_, null);
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
  this.m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
  this.m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl(index);
  if (open) {
   this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_setKeyboardSelectedRow__int__boolean__boolean(index, false, true);
   return this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl.m_updateChildState__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__boolean_$p_org_gwtproject_user_cellview_client_CellBrowser(this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_, fireEvents);
  } else {
   if (index == this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getKeyboardSelectedRow__()) {
    this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_clearKeyboardSelectedRowValue__();
    this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl.m_updateChildState__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__boolean_$p_org_gwtproject_user_cellview_client_CellBrowser(this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_, fireEvents);
   }
   return null;
  }
 }
 /**
  * @return {BrowserCellList<C>}
  * @public
  */
 m_getDisplay___$pp_org_gwtproject_user_cellview_client() {
  return this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_;
 }
 /**
  * @return {*}
  * @public
  */
 m_getFocusedKey___$pp_org_gwtproject_user_cellview_client() {
  return this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isFocusedOpen___$pp_org_gwtproject_user_cellview_client() {
  return this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_;
 }
 /**
  * @public
  */
 m_assertNotDestroyed___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl() {
  if (this.m_isDestroyed__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("TreeNode no longer exists."));
  }
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkChildBounds__int_$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl(index) {
  if ((index < 0) || (index >= this.m_getChildCount__())) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /**
  * @public
  */
 m_destroy___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl() {
  this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_isDestroyed__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = true;
  this.f_valueChangeHandler__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_removeHandler__();
  this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_deselectValue__();
  this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(null);
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_unsetDataDisplay__();
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl.m_getSplitLayoutPanel___$p_org_gwtproject_user_cellview_client_CellBrowser().m_remove__org_gwtproject_user_client_ui_Widget(this.f_widget__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_);
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_ = null;
 }
 /**
  * @return {number}
  * @public
  */
 m_getOpenIndex___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl() {
  return this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ ? this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.m_getKeyboardSelectedRow__() : -1;
 }
 /**
  * @return {TreeNodeImpl<?>}
  * @public
  */
 m_getParentImpl___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl() {
  return (this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ == 0) ? null : /**@type {TreeNodeImpl<*>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(this.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ - 1), TreeNodeImpl));
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
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl.$1$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(TreeNodeImpl, 'org.gwtproject.user.cellview.client.CellBrowser$TreeNodeImpl');

TreeNode.$markImplementor(TreeNodeImpl);

exports = TreeNodeImpl; 
//# sourceMappingURL=CellBrowser$TreeNodeImpl.js.map