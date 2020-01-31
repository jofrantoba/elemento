goog.module('org.gwtproject.user.cellview.client.CellTree$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCellTree = goog.require('org.gwtproject.user.cellview.client.AbstractCellTree$impl');
const Focusable = goog.require('org.gwtproject.user.client.ui.Focusable$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeStylesBuilder = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.$1$impl');
let CellTreeMessages = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.CellTreeMessages$impl');
let NodeAnimation = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.NodeAnimation$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.Resources$impl');
let SlideAnimation = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.SlideAnimation$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.Style$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.Template$impl');
let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
let TreeNodeImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.TreeNodeImpl$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
let TreeNode = goog.forwardDeclare('org.gwtproject.user.cellview.client.TreeNode$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let TreeViewModel = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {HasAnimation}
 * @implements {Focusable}
  */
class CellTree extends AbstractCellTree {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellTree = false;
  /**@type {boolean}*/
  this.f_isFocused__org_gwtproject_user_cellview_client_CellTree = false;
  /**@type {boolean}*/
  this.f_isRefreshing__org_gwtproject_user_cellview_client_CellTree = false;
  /**@type {CellTreeNodeView<?>}*/
  this.f_rootNode__org_gwtproject_user_cellview_client_CellTree;
  /**@type {number}*/
  this.f_accessKey__org_gwtproject_user_cellview_client_CellTree_ = 0 /* '\u0000' */;
  /**@type {NodeAnimation}*/
  this.f_animation__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {SafeHtml}*/
  this.f_closedImageHtml__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {SafeHtml}*/
  this.f_closedImageTopHtml__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {number}*/
  this.f_defaultNodeSize__org_gwtproject_user_cellview_client_CellTree_ = 0;
  /**@type {number}*/
  this.f_imageWidth__org_gwtproject_user_cellview_client_CellTree_ = 0;
  /**@type {boolean}*/
  this.f_isAnimationEnabled__org_gwtproject_user_cellview_client_CellTree_ = false;
  /**@type {CellTreeNodeView<?>}*/
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {SafeHtml}*/
  this.f_loadingImageHtml__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {SafeHtml}*/
  this.f_openImageHtml__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {SafeHtml}*/
  this.f_openImageTopHtml__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {Style}*/
  this.f_style__org_gwtproject_user_cellview_client_CellTree_;
  /**@type {number}*/
  this.f_tabIndex__org_gwtproject_user_cellview_client_CellTree_ = 0;
 }
 /** @return {Resources} */
 static m_getDefaultResources__() {
  return CellTree.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTree_;
 }
 //Factory method corresponding to constructor 'CellTree(TreeViewModel, Object)'.
 /** @template T @return {!CellTree} */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object(/** TreeViewModel */ viewModel, /** T */ rootValue) {
  CellTree.$clinit();
  let $instance = new CellTree();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue);
  return $instance;
 }
 //Initialization from constructor 'CellTree(TreeViewModel, Object)'.
 /** @template T */
 $ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object(/** TreeViewModel */ viewModel, /** T */ rootValue) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources(viewModel, rootValue, CellTree.m_getDefaultResources__());
 }
 //Factory method corresponding to constructor 'CellTree(TreeViewModel, Object, Resources)'.
 /** @template T @return {!CellTree} */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources) {
  CellTree.$clinit();
  let $instance = new CellTree();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources(viewModel, rootValue, resources);
  return $instance;
 }
 //Initialization from constructor 'CellTree(TreeViewModel, Object, Resources)'.
 /** @template T */
 $ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(viewModel, rootValue, resources, CellTreeMessages.f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages);
 }
 //Factory method corresponding to constructor 'CellTree(TreeViewModel, Object, Resources, CellTreeMessages)'.
 /** @template T @return {!CellTree} */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources, /** CellTreeMessages */ messages) {
  CellTree.$clinit();
  let $instance = new CellTree();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(viewModel, rootValue, resources, messages);
  return $instance;
 }
 //Initialization from constructor 'CellTree(TreeViewModel, Object, Resources, CellTreeMessages)'.
 /** @template T */
 $ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources, /** CellTreeMessages */ messages) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages__int(viewModel, rootValue, resources, messages, CellTree.f_DEFAULT_LIST_SIZE__org_gwtproject_user_cellview_client_CellTree_);
 }
 //Factory method corresponding to constructor 'CellTree(TreeViewModel, Object, Resources, CellTreeMessages, int)'.
 /** @template T @return {!CellTree} */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages__int(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources, /** CellTreeMessages */ messages, /** number */ defaultNodeSize) {
  CellTree.$clinit();
  let $instance = new CellTree();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages__int(viewModel, rootValue, resources, messages, defaultNodeSize);
  return $instance;
 }
 //Initialization from constructor 'CellTree(TreeViewModel, Object, Resources, CellTreeMessages, int)'.
 /** @template T */
 $ctor__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_Resources__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages__int(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources, /** CellTreeMessages */ messages, /** number */ defaultNodeSize) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractCellTree__org_gwtproject_view_client_TreeViewModel(viewModel);
  this.$init___$p_org_gwtproject_user_cellview_client_CellTree();
  this.f_defaultNodeSize__org_gwtproject_user_cellview_client_CellTree_ = defaultNodeSize;
  if ($Equality.$same(CellTree.f_template__org_gwtproject_user_cellview_client_CellTree_, null)) {
   CellTree.f_template__org_gwtproject_user_cellview_client_CellTree_ = Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Template;
  }
  this.f_style__org_gwtproject_user_cellview_client_CellTree_ = resources.m_cellTreeStyle__();
  this.f_style__org_gwtproject_user_cellview_client_CellTree_.m_ensureInjected__();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(SimplePanel.$create__());
  this.m_setStyleName__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellTree_.m_cellTreeWidget__());
  let treeOpen = resources.m_cellTreeOpenItem__();
  let treeClosed = resources.m_cellTreeClosedItem__();
  let treeLoading = resources.m_cellTreeLoading__();
  this.f_openImageHtml__org_gwtproject_user_cellview_client_CellTree_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__boolean_$p_org_gwtproject_user_cellview_client_CellTree(treeOpen, false);
  this.f_closedImageHtml__org_gwtproject_user_cellview_client_CellTree_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__boolean_$p_org_gwtproject_user_cellview_client_CellTree(treeClosed, false);
  this.f_openImageTopHtml__org_gwtproject_user_cellview_client_CellTree_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__boolean_$p_org_gwtproject_user_cellview_client_CellTree(treeOpen, true);
  this.f_closedImageTopHtml__org_gwtproject_user_cellview_client_CellTree_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__boolean_$p_org_gwtproject_user_cellview_client_CellTree(treeClosed, true);
  this.f_loadingImageHtml__org_gwtproject_user_cellview_client_CellTree_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource__boolean_$p_org_gwtproject_user_cellview_client_CellTree(treeLoading, false);
  this.f_imageWidth__org_gwtproject_user_cellview_client_CellTree_ = Math.max(Math.max(treeOpen.m_getWidth__(), treeClosed.m_getWidth__()), treeLoading.m_getWidth__());
  this.m_setAnimation__org_gwtproject_user_cellview_client_CellTree_NodeAnimation(SlideAnimation.m_create__());
  let eventTypes = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  eventTypes.add(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents);
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, eventTypes);
  let root = /**@type {!CellTreeNodeView<T>}*/ (CellTreeNodeView.$create__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(this, null, null, this.m_getElement__(), rootValue, messages));
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_ = this.f_rootNode__org_gwtproject_user_cellview_client_CellTree = root;
  root.m_setOpen__boolean__boolean(true, false);
  Roles.m_getTreeRole__().m_set__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {NodeAnimation} */
 m_getAnimation__() {
  return this.f_animation__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @return {number} */
 m_getDefaultNodeSize__() {
  return this.f_defaultNodeSize__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @override @return {TreeNode} */
 m_getRootTreeNode__() {
  return this.f_rootNode__org_gwtproject_user_cellview_client_CellTree.m_getTreeNode___$pp_org_gwtproject_user_cellview_client();
 }
 /** @override @return {number} */
 m_getTabIndex__() {
  return this.f_tabIndex__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  CellBasedWidgetImpl.m_get__().m_onBrowserEvent__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_Event(this, event);
  if (this.f_isRefreshing__org_gwtproject_user_cellview_client_CellTree) {
   return;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  let eventType = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_isFocused__org_gwtproject_user_cellview_client_CellTree = true;
   this.m_onFocus__();
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_isFocused__org_gwtproject_user_cellview_client_CellTree = false;
   this.m_onBlur__();
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && !this.f_cellIsEditing__org_gwtproject_user_cellview_client_CellTree) {
   let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   switch (keyCode) {
    case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
    case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
    case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
    case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
     this.m_handleKeyNavigation__int_$pp_org_gwtproject_user_cellview_client(keyCode);
     $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
     return;
    case 32: 
     $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   }
  }
  let target = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  let chain = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  this.m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_CellTree(chain, this.m_getElement__(), target);
  let isMouseDown = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents, eventType);
  let isClick = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType);
  let nodeView = this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_cellview_client_CellTreeNodeView_$p_org_gwtproject_user_cellview_client_CellTree(chain, 0, this.f_rootNode__org_gwtproject_user_cellview_client_CellTree);
  if (!$Equality.$same(nodeView, null)) {
   let showMoreElem = nodeView.m_getShowMoreElement___$pp_org_gwtproject_user_cellview_client();
   if (isMouseDown) {
    if (!nodeView.m_isRootNode___$pp_org_gwtproject_user_cellview_client() && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(nodeView.m_getImageElement__(), target)) {
     nodeView.m_setOpen__boolean__boolean(!nodeView.m_isOpen__(), true);
     return;
    } else if (!$Equality.$same(showMoreElem, null) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(showMoreElem, target)) {
     nodeView.m_showMore___$pp_org_gwtproject_user_cellview_client();
     return;
    }
   } else if (isClick && !$Equality.$same(showMoreElem, null) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(showMoreElem, target)) {
    $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   }
   if (!$Equality.$same(nodeView, this.f_rootNode__org_gwtproject_user_cellview_client_CellTree) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(nodeView.m_getSelectionElement__(), target)) {
    if (isClick) {
     let isFocusable = CellBasedWidgetImpl.m_get__().m_isFocusable__org_gwtproject_dom_client_Element(target);
     this.f_isFocused__org_gwtproject_user_cellview_client_CellTree = this.f_isFocused__org_gwtproject_user_cellview_client_CellTree || isFocusable;
     this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(nodeView, !isFocusable);
    }
    nodeView.m_fireEventToCell__org_gwtproject_dom_client_NativeEvent(event);
   }
  }
 }
 /** @override */
 m_setAccessKey__char(/** number */ key) {
  this.f_accessKey__org_gwtproject_user_cellview_client_CellTree_ = key;
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(true, false);
 }
 
 m_setAnimation__org_gwtproject_user_cellview_client_CellTree_NodeAnimation(/** NodeAnimation */ animation) {
  $Asserts.$assertWithMessage(!$Equality.$same(animation, null), "animation cannot be null");
  this.f_animation__org_gwtproject_user_cellview_client_CellTree_ = animation;
 }
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_cellview_client_CellTree_ = enable;
  if (!enable && !$Equality.$same(this.f_animation__org_gwtproject_user_cellview_client_CellTree_, null)) {
   this.f_animation__org_gwtproject_user_cellview_client_CellTree_.m_cancel__();
  }
 }
 
 m_setDefaultNodeSize__int(/** number */ defaultNodeSize) {
  this.f_defaultNodeSize__org_gwtproject_user_cellview_client_CellTree_ = defaultNodeSize;
 }
 /** @override */
 m_setFocus__boolean(/** boolean */ focused) {
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(true, true);
 }
 
 m_setKeyboardSelectedTreeNode__org_gwtproject_user_cellview_client_TreeNode__int__boolean(/** TreeNode */ parentNode, /** number */ childIndex, /** boolean */ stealFocus) {
  let nodeView = this.m_getCellTreeNodeView__org_gwtproject_user_cellview_client_TreeNode_$p_org_gwtproject_user_cellview_client_CellTree(parentNode);
  nodeView.m_getTreeNode___$pp_org_gwtproject_user_cellview_client().m_getChildValue__int(childIndex);
  this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(nodeView.m_getChildNode__int(childIndex), stealFocus);
 }
 /** @override */
 m_setTabIndex__int(/** number */ index) {
  this.f_tabIndex__org_gwtproject_user_cellview_client_CellTree_ = index;
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(true, false);
 }
 /** @return {number} */
 m_getAccessKey__() {
  return this.f_accessKey__org_gwtproject_user_cellview_client_CellTree_;
 }
 
 m_onBlur__() {
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelectedStyle__boolean_$pp_org_gwtproject_user_cellview_client(false);
 }
 
 m_onFocus__() {
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelectedStyle__boolean_$pp_org_gwtproject_user_cellview_client(true);
 }
 
 m_cancelTreeNodeAnimation___$pp_org_gwtproject_user_cellview_client() {
  this.f_animation__org_gwtproject_user_cellview_client_CellTree_.m_cancel__();
 }
 /** @return {SafeHtml} */
 m_getClosedImageHtml__boolean_$pp_org_gwtproject_user_cellview_client(/** boolean */ isTop) {
  return isTop ? this.f_closedImageTopHtml__org_gwtproject_user_cellview_client_CellTree_ : this.f_closedImageHtml__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @return {number} */
 m_getImageWidth___$pp_org_gwtproject_user_cellview_client() {
  return this.f_imageWidth__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @return {CellTreeNodeView<?>} */
 m_getKeyboardSelectedNode___$pp_org_gwtproject_user_cellview_client() {
  return this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @return {TreeNode} */
 m_getKeyboardSelectedTreeNode__() {
  return $Equality.$same(this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_, null) ? null : this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getTreeNode___$pp_org_gwtproject_user_cellview_client();
 }
 /** @return {SafeHtml} */
 m_getLoadingImageHtml___$pp_org_gwtproject_user_cellview_client() {
  return this.f_loadingImageHtml__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @return {SafeHtml} */
 m_getOpenImageHtml__boolean_$pp_org_gwtproject_user_cellview_client(/** boolean */ isTop) {
  return isTop ? this.f_openImageTopHtml__org_gwtproject_user_cellview_client_CellTree_ : this.f_openImageHtml__org_gwtproject_user_cellview_client_CellTree_;
 }
 /** @return {Style} */
 m_getStyle___$pp_org_gwtproject_user_cellview_client() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTree_;
 }
 
 m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(/** CellTreeNodeView<?> */ node, /** boolean */ stealFocus) {
  if (this.m_isKeyboardSelectionDisabled__()) {
   return;
  }
  if (!$Equality.$same(this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_, null) && !this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_isDestroyed___$pp_org_gwtproject_user_cellview_client()) {
   this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(false, false);
  }
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_ = node;
  this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(true, stealFocus);
 }
 
 m_maybeAnimateTreeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(/** CellTreeNodeView<?> */ node) {
  if (!$Equality.$same(this.f_animation__org_gwtproject_user_cellview_client_CellTree_, null)) {
   this.f_animation__org_gwtproject_user_cellview_client_CellTree_.m_animate__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(node, node.m_consumeAnimate__() && this.m_isAnimationEnabled__() && !node.m_isRootNode___$pp_org_gwtproject_user_cellview_client());
  }
 }
 
 m_resetFocus___$pp_org_gwtproject_user_cellview_client() {
  CellBasedWidgetImpl.m_get__().m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_cellview_client_CellTree(this));
 }
 
 m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_CellTree(/** ArrayList<Object> */ chain, /** Object */ hRoot, /** Object */ hElem) {
  if ($Equality.$same(hElem, null) || $Equality.$same(hElem, hRoot)) {
   return;
  }
  this.m_collectElementChain__java_util_ArrayList__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_CellTree(chain, hRoot, Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(hElem));
  chain.add(hElem);
 }
 /** @return {CellTreeNodeView} */
 m_getCellTreeNodeView__org_gwtproject_user_cellview_client_TreeNode_$p_org_gwtproject_user_cellview_client_CellTree(/** TreeNode */ treeNode) {
  if (!TreeNodeImpl.$isInstance(treeNode)) {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Operation not supported for " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(treeNode))));
  }
  let nodeView = /**@type {TreeNodeImpl}*/ ($Casts.$to(treeNode, TreeNodeImpl)).m_getNodeView___$pp_org_gwtproject_user_cellview_client();
  if (!nodeView.m_belongsToTree__org_gwtproject_user_cellview_client_CellTree_$pp_org_gwtproject_user_cellview_client(this)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("The tree node does not belong to the tree."));
  }
  return nodeView;
 }
 /** @return {CellTreeNodeView<?>} */
 m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_cellview_client_CellTreeNodeView_$p_org_gwtproject_user_cellview_client_CellTree(/** ArrayList<Object> */ chain, /** number */ idx, /** CellTreeNodeView<?> */ parent) {
  if (idx == chain.size()) {
   return parent;
  }
  let hCurElem = /**@type {Object}*/ ($Casts.$to(chain.getAtIndex(idx), Element_$Overlay));
  for (let i = 0, n = parent.m_getChildCount__(); i < n; ++i) {
   let child = parent.m_getChildNode__int(i);
   if ($Equality.$same(child.m_getElement__(), hCurElem)) {
    let retItem = this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_cellview_client_CellTreeNodeView_$p_org_gwtproject_user_cellview_client_CellTree(chain, idx + 1, child);
    if ($Equality.$same(retItem, null)) {
     return child;
    }
    return retItem;
   }
  }
  return this.m_findItemByChain__java_util_ArrayList__int__org_gwtproject_user_cellview_client_CellTreeNodeView_$p_org_gwtproject_user_cellview_client_CellTree(chain, idx + 1, parent);
 }
 /** @return {SafeHtml} */
 m_getImageHtml__org_gwtproject_resources_client_ImageResource__boolean_$p_org_gwtproject_user_cellview_client_CellTree(/** ImageResource */ res, /** boolean */ isTop) {
  let classesBuilder = StringBuilder.$create__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellTree_.m_cellTreeItemImage__());
  if (isTop) {
   classesBuilder.m_append__java_lang_String(" ").m_append__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellTree_.m_cellTreeTopItemImage__());
  }
  let cssBuilder = SafeStylesBuilder.$create__();
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   cssBuilder.m_appendTrustedString__java_lang_String("right: 0px;");
  } else {
   cssBuilder.m_appendTrustedString__java_lang_String("left: 0px;");
  }
  cssBuilder.m_appendTrustedString__java_lang_String("width: " + res.m_getWidth__() + "px;");
  cssBuilder.m_appendTrustedString__java_lang_String("height: " + res.m_getHeight__() + "px;");
  let proto = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(res);
  let image = proto.m_getSafeHtml__();
  return CellTree.f_template__org_gwtproject_user_cellview_client_CellTree_.m_imageWrapper__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(classesBuilder.toString(), cssBuilder.m_toSafeStyles__(), image);
 }
 
 m_handleKeyNavigation__int_$pp_org_gwtproject_user_cellview_client(/** number */ keyCode) {
  let parent = this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getParentNode___$pp_org_gwtproject_user_cellview_client();
  let parentChildCount = $Equality.$same(parent, null) ? 0 : parent.m_getChildCount__();
  let index = this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getIndex___$pp_org_gwtproject_user_cellview_client();
  let childCount = this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getChildCount__();
  let isRtl = LocaleInfo.m_getCurrentLocale__().m_isRTL__();
  keyCode = KeyCodes.m_maybeSwapArrowKeysForRtl__int__boolean(keyCode, isRtl);
  switch (keyCode) {
   case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
    if (this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_isOpen__() && childCount > 0) {
     this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getChildNode__int(0), true);
    } else if (index < parentChildCount - 1) {
     this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(parent.m_getChildNode__int(index + 1), true);
    } else {
     let curParent = parent;
     let nextSibling = null;
     while (!$Equality.$same(curParent, null) && !$Equality.$same(curParent, this.f_rootNode__org_gwtproject_user_cellview_client_CellTree)) {
      let grandparent = curParent.m_getParentNode___$pp_org_gwtproject_user_cellview_client();
      if ($Equality.$same(grandparent, null)) {
       break;
      }
      let curParentIndex = grandparent.m_indexOf__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(curParent);
      if (curParentIndex < grandparent.m_getChildCount__() - 1) {
       nextSibling = grandparent.m_getChildNode__int(curParentIndex + 1);
       break;
      }
      curParent = grandparent;
     }
     if (!$Equality.$same(nextSibling, null)) {
      this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(nextSibling, true);
     }
    }
    break;
   case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
    if (index > 0) {
     let prevSibling = parent.m_getChildNode__int(index - 1);
     while (prevSibling.m_isOpen__() && prevSibling.m_getChildCount__() > 0) {
      prevSibling = prevSibling.m_getChildNode__int(prevSibling.m_getChildCount__() - 1);
     }
     this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(prevSibling, true);
    } else if (!$Equality.$same(parent, null) && !$Equality.$same(parent, this.f_rootNode__org_gwtproject_user_cellview_client_CellTree)) {
     this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(parent, true);
    }
    break;
   case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
    this.m_keyboardNavigateDeep___$p_org_gwtproject_user_cellview_client_CellTree();
    break;
   case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
    this.m_keyboardNavigateShallow___$p_org_gwtproject_user_cellview_client_CellTree();
    break;
  }
 }
 
 m_keyboardNavigateDeep___$p_org_gwtproject_user_cellview_client_CellTree() {
  if (!this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_isLeaf__()) {
   let isOpen = this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_isOpen__();
   if (isOpen && this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getChildCount__() > 0) {
    this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getChildNode__int(0), true);
   } else if (!isOpen) {
    this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setOpen__boolean__boolean(true, true);
   }
  }
 }
 
 m_keyboardNavigateShallow___$p_org_gwtproject_user_cellview_client_CellTree() {
  let parent = this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_getParentNode___$pp_org_gwtproject_user_cellview_client();
  if (this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_isOpen__()) {
   this.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setOpen__boolean__boolean(false, true);
  } else if (!$Equality.$same(parent, null) && !$Equality.$same(parent, this.f_rootNode__org_gwtproject_user_cellview_client_CellTree)) {
   this.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(parent, true);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_CellTree() {
  this.f_accessKey__org_gwtproject_user_cellview_client_CellTree_ = 0 /* '\u0000' */;
  this.f_defaultNodeSize__org_gwtproject_user_cellview_client_CellTree_ = CellTree.f_DEFAULT_LIST_SIZE__org_gwtproject_user_cellview_client_CellTree_;
 }
 
 static $clinit() {
  CellTree.$clinit = () =>{};
  CellTree.$loadModules();
  AbstractCellTree.$clinit();
  CellTree.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTree_ = CellTree__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellTree;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  SafeStylesBuilder = goog.module.get('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellTree.$1$impl');
  CellTreeMessages = goog.module.get('org.gwtproject.user.cellview.client.CellTree.CellTreeMessages$impl');
  SlideAnimation = goog.module.get('org.gwtproject.user.cellview.client.CellTree.SlideAnimation$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.CellTree.Template$impl');
  CellTreeNodeView = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
  TreeNodeImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.TreeNodeImpl$impl');
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(CellTree, 'org.gwtproject.user.cellview.client.CellTree');

HasAnimation.$markImplementor(CellTree);
Focusable.$markImplementor(CellTree);

/**@const {number}*/
CellTree.f_DEFAULT_LIST_SIZE__org_gwtproject_user_cellview_client_CellTree_ = 25;
/**@type {Resources}*/
CellTree.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTree_;
/**@type {Template}*/
CellTree.f_template__org_gwtproject_user_cellview_client_CellTree_;

exports = CellTree; 
//# sourceMappingURL=CellTree.js.map