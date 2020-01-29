goog.module('org.gwtproject.user.cellview.client.AbstractCellTree$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCloseHandlers = goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
const HasOpenHandlers = goog.require('org.gwtproject.event.logical.shared.HasOpenHandlers$impl');
const HasKeyboardSelectionPolicy = goog.require('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let OpenHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let TreeNode = goog.forwardDeclare('org.gwtproject.user.cellview.client.TreeNode$impl');
let TreeViewModel = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel$impl');
let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {HasOpenHandlers<TreeNode>}
 * @implements {HasCloseHandlers<TreeNode>}
 * @implements {HasKeyboardSelectionPolicy}
  */
class AbstractCellTree extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {KeyboardSelectionPolicy} */
  this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_AbstractCellTree_;
  /** @public {TreeViewModel} */
  this.f_viewModel__org_gwtproject_user_cellview_client_AbstractCellTree_;
 }
 /**
  * @param {TreeViewModel} viewModel
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTree__org_gwtproject_view_client_TreeViewModel(viewModel) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractCellTree();
  this.f_viewModel__org_gwtproject_user_cellview_client_AbstractCellTree_ = viewModel;
 }
 /**
  * @override
  * @param {CloseHandler<TreeNode>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, CloseEvent.m_getType__());
 }
 /**
  * @override
  * @param {OpenHandler<TreeNode>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addOpenHandler__org_gwtproject_event_logical_shared_OpenHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, OpenEvent.m_getType__());
 }
 /**
  * @override
  * @return {KeyboardSelectionPolicy}
  * @public
  */
 m_getKeyboardSelectionPolicy__() {
  return this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_AbstractCellTree_;
 }
 /**
  * @abstract
  * @return {TreeNode}
  * @public
  */
 m_getRootTreeNode__() {}
 /**
  * @return {TreeViewModel}
  * @public
  */
 m_getTreeViewModel__() {
  return this.f_viewModel__org_gwtproject_user_cellview_client_AbstractCellTree_;
 }
 /**
  * @override
  * @param {KeyboardSelectionPolicy} policy
  * @public
  */
 m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(policy) {
  if ($Equality.$same(policy, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("KeyboardSelectionPolicy cannot be null"));
  }
  this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_AbstractCellTree_ = policy;
 }
 /**
  * @template T
  * @param {T} value
  * @return {NodeInfo<?>}
  * @public
  */
 m_getNodeInfo__java_lang_Object(value) {
  return this.f_viewModel__org_gwtproject_user_cellview_client_AbstractCellTree_.m_getNodeInfo__java_lang_Object(value);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isKeyboardSelectionDisabled__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_AbstractCellTree_);
 }
 /**
  * @param {*} value
  * @return {boolean}
  * @public
  */
 m_isLeaf__java_lang_Object(value) {
  return this.f_viewModel__org_gwtproject_user_cellview_client_AbstractCellTree_.m_isLeaf__java_lang_Object(value);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_AbstractCellTree() {
  this.f_keyboardSelectionPolicy__org_gwtproject_user_cellview_client_AbstractCellTree_ = KeyboardSelectionPolicy.f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy;
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractCellTree.$clinit = () =>{};
  AbstractCellTree.$loadModules();
  Composite.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractCellTree;
 }
 /**
  * @public
  */
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  OpenEvent = goog.module.get('org.gwtproject.event.logical.shared.OpenEvent$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractCellTree, 'org.gwtproject.user.cellview.client.AbstractCellTree');

HasOpenHandlers.$markImplementor(AbstractCellTree);
HasCloseHandlers.$markImplementor(AbstractCellTree);
HasKeyboardSelectionPolicy.$markImplementor(AbstractCellTree);

exports = AbstractCellTree; 
//# sourceMappingURL=AbstractCellTree.js.map