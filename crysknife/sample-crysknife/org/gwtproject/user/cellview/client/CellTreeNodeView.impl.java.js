goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UIObject = goog.require('org.gwtproject.user.client.ui.UIObject$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ExpandedValue = goog.forwardDeclare('org.gwtproject.aria.client.ExpandedValue$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let AnchorElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let CellTree = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree$impl');
let CellTreeMessages = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.CellTreeMessages$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.$1$impl');
let NodeCellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList$impl');
let TreeNodeImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.TreeNodeImpl$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let TreeNode = goog.forwardDeclare('org.gwtproject.user.cellview.client.TreeNode$impl');
let FocusImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.FocusImpl$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
  */
class CellTreeNodeView extends UIObject {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NodeCellList<?>} */
  this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView;
  /** @public {boolean} */
  this.f_animate__org_gwtproject_user_cellview_client_CellTreeNodeView_ = false;
  /** @public {Object} */
  this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {Object} */
  this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {List<CellTreeNodeView<?>>} */
  this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {Object} */
  this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {number} */
  this.f_depth__org_gwtproject_user_cellview_client_CellTreeNodeView_ = 0;
  /** @public {Object} */
  this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {boolean} */
  this.f_isDestroyed__org_gwtproject_user_cellview_client_CellTreeNodeView_ = false;
  /** @public {CellTreeMessages} */
  this.f_messages__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {NodeInfo<?>} */
  this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {boolean} */
  this.f_nodeInfoLoaded__org_gwtproject_user_cellview_client_CellTreeNodeView_ = false;
  /** @public {boolean} */
  this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_ = false;
  /** @public {CellTreeNodeView<?>} */
  this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {NodeInfo<T>} */
  this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {Object} */
  this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {CellTree} */
  this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {TreeNodeImpl} */
  this.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  /** @public {T} */
  this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @param {Object} nodeElem
  * @return {Object}
  * @public
  */
 static m_getCellParent__org_gwtproject_dom_client_Element(nodeElem) {
  return /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(CellTreeNodeView.m_getSelectionElement__org_gwtproject_dom_client_Element(nodeElem)), 1)), Element_$Overlay));
 }
 /**
  * @param {Object} nodeElem
  * @return {Object}
  * @public
  */
 static m_getImageElement__org_gwtproject_dom_client_Element(nodeElem) {
  return Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(CellTreeNodeView.m_getSelectionElement__org_gwtproject_dom_client_Element(nodeElem)));
 }
 /**
  * @param {Object} nodeElem
  * @return {Object}
  * @public
  */
 static m_getSelectionElement__org_gwtproject_dom_client_Element(nodeElem) {
  CellTreeNodeView.$clinit();
  return Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(nodeElem);
 }
 /**
  * @return {Object}
  * @public
  */
 static m_getTmpElem__() {
  CellTreeNodeView.$clinit();
  if ($Equality.$same(CellTreeNodeView.f_tmpElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   CellTreeNodeView.f_tmpElem__org_gwtproject_user_cellview_client_CellTreeNodeView_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  }
  return CellTreeNodeView.f_tmpElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @param {Object} element
  * @param {boolean} show
  * @public
  */
 static m_showOrHide__org_gwtproject_dom_client_Element__boolean(element, show) {
  CellTreeNodeView.$clinit();
  if (show) {
   Style_$Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(element.style);
  } else {
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(element.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  }
 }
 /**
  * @template T
  * @param {CellTree} tree
  * @param {CellTreeNodeView<?>} parent
  * @param {NodeInfo<T>} parentNodeInfo
  * @param {Object} elem
  * @param {T} value
  * @param {CellTreeMessages} messages
  * @return {!CellTreeNodeView<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(tree, parent, parentNodeInfo, elem, value, messages) {
  CellTreeNodeView.$clinit();
  let $instance = new CellTreeNodeView();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(tree, parent, parentNodeInfo, elem, value, messages);
  return $instance;
 }
 /**
  * @param {CellTree} tree
  * @param {CellTreeNodeView<?>} parent
  * @param {NodeInfo<T>} parentNodeInfo
  * @param {Object} elem
  * @param {T} value
  * @param {CellTreeMessages} messages
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(tree, parent, parentNodeInfo, elem, value, messages) {
  this.$ctor__org_gwtproject_user_client_ui_UIObject__();
  this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_ = tree;
  this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_ = parent;
  this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_ = parentNodeInfo;
  this.f_depth__org_gwtproject_user_cellview_client_CellTreeNodeView_ = $Equality.$same(this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, null) ? 0 : this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_depth__org_gwtproject_user_cellview_client_CellTreeNodeView_ + 1;
  this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_ = value;
  this.f_messages__org_gwtproject_user_cellview_client_CellTreeNodeView_ = messages;
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
  Roles.m_getTreeitemRole__().m_set__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {number}
  * @public
  */
 m_getChildCount__() {
  return $Equality.$same(this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_, null) ? 0 : this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.size();
 }
 /**
  * @param {number} childIndex
  * @return {CellTreeNodeView<?>}
  * @public
  */
 m_getChildNode__int(childIndex) {
  return /**@type {CellTreeNodeView<*>} */ ($Casts.$to(this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.getAtIndex(childIndex), CellTreeNodeView));
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isLeaf__() {
  return this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_isLeaf__java_lang_Object(this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isOpen__() {
  return this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @param {boolean} open
  * @param {boolean} fireEvents
  * @return {boolean}
  * @public
  */
 m_setOpen__boolean__boolean(open, fireEvents) {
  if (this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_ == open) {
   return this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  }
  if (open && this.m_isLeaf__()) {
   return false;
  }
  this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_cancelTreeNodeAnimation___$pp_org_gwtproject_user_cellview_client();
  this.f_animate__org_gwtproject_user_cellview_client_CellTreeNodeView_ = true;
  this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_ = open;
  if (open) {
   if (!this.f_nodeInfoLoaded__org_gwtproject_user_cellview_client_CellTreeNodeView_) {
    this.f_nodeInfoLoaded__org_gwtproject_user_cellview_client_CellTreeNodeView_ = true;
    this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_ = this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getNodeInfo__java_lang_Object(this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
    if (!$Equality.$same(this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
     let eventsToSink = /**@type {!HashSet<?string>} */ (HashSet.$create__());
     eventsToSink.add(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents);
     eventsToSink.add(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents);
     let consumedEvents = this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getCell__().m_getConsumedEvents__();
     if (!$Equality.$same(consumedEvents, null)) {
      eventsToSink.addAll(consumedEvents);
     }
     CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, eventsToSink);
    }
   }
   if (!$Equality.$same(this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
    this.m_ensureChildContainer___$pp_org_gwtproject_user_cellview_client();
    CellTreeNodeView.m_showOrHide__org_gwtproject_dom_client_Element__boolean(this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, false);
    CellTreeNodeView.m_showOrHide__org_gwtproject_dom_client_Element__boolean(this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, false);
    if (!this.m_isRootNode___$pp_org_gwtproject_user_cellview_client()) {
     UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getCellParent__(), this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client().m_cellTreeOpenItem__(), true);
    }
    Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client().style, "display", "");
    this.m_onOpen__org_gwtproject_view_client_TreeViewModel_NodeInfo(this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_);
    if (fireEvents) {
     OpenEvent.m_fire__org_gwtproject_event_logical_shared_HasOpenHandlers__java_lang_Object(this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.m_getTreeNode___$pp_org_gwtproject_user_cellview_client());
    }
   } else {
    this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_ = false;
   }
  } else {
   if (!this.m_isRootNode___$pp_org_gwtproject_user_cellview_client()) {
    UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getCellParent__(), this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client().m_cellTreeOpenItem__(), false);
   }
   this.m_cleanup__boolean(false);
   this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_maybeAnimateTreeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(this);
   this.m_updateImage__boolean_$p_org_gwtproject_user_cellview_client_CellTreeNodeView(false);
   let keySelected = this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectedNode___$pp_org_gwtproject_user_cellview_client();
   while (!$Equality.$same(keySelected, null)) {
    if ($Equality.$same(keySelected, this)) {
     this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(this, true);
     break;
    }
    keySelected = keySelected.m_getParentNode___$pp_org_gwtproject_user_cellview_client();
   }
   if (fireEvents) {
    CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.m_getTreeNode___$pp_org_gwtproject_user_cellview_client());
   }
  }
  return this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @param {boolean} destroy
  * @public
  */
 m_cleanup__boolean(destroy) {
  if (!$Equality.$same(this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView, null)) {
   this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_cleanup__();
   this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_unsetDataDisplay__();
   this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView = null;
  }
  if (!$Equality.$same(this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   for (let $iterator = this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let child = /**@type {CellTreeNodeView<*>} */ ($Casts.$to($iterator.m_next__(), CellTreeNodeView));
    child.m_cleanup__boolean(true);
   }
   this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_ = null;
  }
  if (destroy) {
   this.f_isDestroyed__org_gwtproject_user_cellview_client_CellTreeNodeView_ = true;
   if ($Equality.$same(this, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectedNode___$pp_org_gwtproject_user_cellview_client())) {
    this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, false);
   }
  }
 }
 /**
  * @return {boolean}
  * @public
  */
 m_consumeAnimate__() {
  let hasAnimate = this.f_animate__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  this.f_animate__org_gwtproject_user_cellview_client_CellTreeNodeView_ = false;
  return hasAnimate;
 }
 /**
  * @template C
  * @param {NodeInfo<C>} nodeInfo
  * @param {Object} childElem
  * @param {C} childValue
  * @param {*} viewData
  * @return {CellTreeNodeView<C>}
  * @public
  */
 m_createTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object(nodeInfo, childElem, childValue, viewData) {
  return /**@type {!CellTreeNodeView<C>} */ (CellTreeNodeView.$create__org_gwtproject_user_cellview_client_CellTree__org_gwtproject_user_cellview_client_CellTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages(this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, this, nodeInfo, childElem, childValue, this.f_messages__org_gwtproject_user_cellview_client_CellTreeNodeView_));
 }
 /**
  * @param {Object} event
  * @public
  */
 m_fireEventToCell__org_gwtproject_dom_client_NativeEvent(event) {
  if ($Equality.$same(this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   return;
  }
  let parentCell = this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getCell__();
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let cellParent = this.m_getCellParent__();
  let key = this.m_getValueKey__();
  let context = Context.$create__int__int__java_lang_Object(this.m_getIndex___$pp_org_gwtproject_user_cellview_client(), 0, key);
  let cellWasEditing = parentCell.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
  let isSelectionHandled = parentCell.m_handlesSelection__() || $Equality.$same(KeyboardSelectionPolicy.f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectionPolicy__());
  let display = /**@type {HasData<T>} */ (this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView);
  let previewEvent = /**@type {CellPreviewEvent<T>} */ (CellPreviewEvent.m_fire__org_gwtproject_view_client_HasCellPreviewHandlers__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(display, event, display, context, this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_, cellWasEditing, isSelectionHandled));
  if (previewEvent.m_isCanceled__() || !Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(cellParent, Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)))) {
   return;
  }
  let consumedEvents = parentCell.m_getConsumedEvents__();
  if (!$Equality.$same(consumedEvents, null) && consumedEvents.contains(eventType)) {
   parentCell.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, cellParent, this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_, event, this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getValueUpdater__());
   this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_cellIsEditing__org_gwtproject_user_cellview_client_CellTree = parentCell.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
   if (cellWasEditing && !this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_cellIsEditing__org_gwtproject_user_cellview_client_CellTree) {
    CellBasedWidgetImpl.m_get__().m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$1<T>} */ ($1.$create__org_gwtproject_user_cellview_client_CellTreeNodeView(this)));
   }
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_getCellParent__() {
  return CellTreeNodeView.m_getCellParent__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {Object}
  * @public
  */
 m_getImageElement__() {
  return CellTreeNodeView.m_getImageElement__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {Object}
  * @public
  */
 m_getSelectionElement__() {
  return CellTreeNodeView.m_getSelectionElement__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {*}
  * @public
  */
 m_getValueKey__() {
  return this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getProvidesKey__().m_getKey__java_lang_Object(this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
 }
 /**
  * @template C
  * @param {NodeInfo<C>} nodeInfo
  * @public
  */
 m_onOpen__org_gwtproject_view_client_TreeViewModel_NodeInfo(nodeInfo) {
  let view = /**@type {!NodeCellList<C>} */ (NodeCellList.$create__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView__int(nodeInfo, this, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getDefaultNodeSize__()));
  this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView = view;
  view.m_setSelectionModel__org_gwtproject_view_client_SelectionModel(nodeInfo.m_getSelectionModel__());
  nodeInfo.m_setDataDisplay__org_gwtproject_view_client_HasData(view);
 }
 /**
  * @param {CellTree} tree
  * @return {boolean}
  * @public
  */
 m_belongsToTree__org_gwtproject_user_cellview_client_CellTree_$pp_org_gwtproject_user_cellview_client(tree) {
  return $Equality.$same(this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, tree);
 }
 /**
  * @return {Object}
  * @public
  */
 m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client() {
  if ($Equality.$same(this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   this.m_getElement__().appendChild(this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_);
  }
  return this.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_ensureChildContainer___$pp_org_gwtproject_user_cellview_client() {
  if ($Equality.$same(this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   Node_$Overlay.m_insertFirst__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_ensureContentContainer___$pp_org_gwtproject_user_cellview_client(), this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_);
  }
  return this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_ensureContentContainer___$pp_org_gwtproject_user_cellview_client() {
  if ($Equality.$same(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   this.m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client().appendChild(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_);
   this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.f_messages__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_emptyTree__());
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client().m_cellTreeEmptyMessage__(), true);
   CellTreeNodeView.m_showOrHide__org_gwtproject_dom_client_Element__boolean(this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, false);
   this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_.appendChild(this.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_);
   this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_ = Document_$Overlay.m_createAnchorElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_.href = "javascript:;";
   Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.f_messages__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_showMore__());
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client().m_cellTreeShowMoreButton__(), true);
   CellTreeNodeView.m_showOrHide__org_gwtproject_dom_client_Element__boolean(this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, false);
   this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_.appendChild(this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_);
  }
  return this.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getIndex___$pp_org_gwtproject_user_cellview_client() {
  return $Equality.$same(this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, null) ? 0 : this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_indexOf__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(this);
 }
 /**
  * @return {CellTreeNodeView<?>}
  * @public
  */
 m_getParentNode___$pp_org_gwtproject_user_cellview_client() {
  return this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getShowMoreElement___$pp_org_gwtproject_user_cellview_client() {
  return this.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @return {TreeNode}
  * @public
  */
 m_getTreeNode___$pp_org_gwtproject_user_cellview_client() {
  if ($Equality.$same(this.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   this.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_ = TreeNodeImpl.$create__org_gwtproject_user_cellview_client_CellTreeNodeView(this);
  }
  return this.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @param {CellTreeNodeView<?>} child
  * @return {number}
  * @public
  */
 m_indexOf__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(child) {
  return this.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.indexOf(child);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDestroyed___$pp_org_gwtproject_user_cellview_client() {
  return this.f_isDestroyed__org_gwtproject_user_cellview_client_CellTreeNodeView_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isRootNode___$pp_org_gwtproject_user_cellview_client() {
  return $Equality.$same(this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, null);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSelected___$pp_org_gwtproject_user_cellview_client() {
  if (!$Equality.$same(this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   let selectionModel = this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getSelectionModel__();
   if (!$Equality.$same(selectionModel, null)) {
    return selectionModel.m_isSelected__java_lang_Object(this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
   }
  }
  return false;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_resetFocusOnCell___$pp_org_gwtproject_user_cellview_client() {
  if (!$Equality.$same(this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   let context = Context.$create__int__int__java_lang_Object(this.m_getIndex___$pp_org_gwtproject_user_cellview_client(), 0, this.m_getValueKey__());
   let cell = this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getCell__();
   return cell.m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, this.m_getCellParent__(), this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_);
  }
  return false;
 }
 /**
  * @param {boolean} selected
  * @param {boolean} stealFocus
  * @public
  */
 m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(selected, stealFocus) {
  if (this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_isKeyboardSelectionDisabled__()) {
   return;
  }
  if (!selected || this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_isFocused__org_gwtproject_user_cellview_client_CellTree || stealFocus) {
   this.m_setKeyboardSelectedStyle__boolean_$pp_org_gwtproject_user_cellview_client(selected);
  }
  let cellParent = this.m_getCellParent__();
  if (!selected) {
   cellParent.tabIndex = -1;
   cellParent.removeAttribute("tabIndex");
   cellParent.removeAttribute("accessKey");
  } else {
   let focusImpl = FocusImpl.m_getFocusImplForWidget__();
   focusImpl.m_setTabIndex__org_gwtproject_dom_client_Element__int(cellParent, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getTabIndex__());
   let accessKey = this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getAccessKey__();
   if (accessKey != 0) {
    focusImpl.m_setAccessKey__org_gwtproject_dom_client_Element__char(cellParent, accessKey);
   }
   if (stealFocus && !this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_cellIsEditing__org_gwtproject_user_cellview_client_CellTree) {
    cellParent.focus();
   }
  }
  if ($Equality.$same(KeyboardSelectionPolicy.f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectionPolicy__())) {
   this.m_setSelected__boolean_$pp_org_gwtproject_user_cellview_client(selected);
  }
 }
 /**
  * @param {boolean} selected
  * @public
  */
 m_setKeyboardSelectedStyle__boolean_$pp_org_gwtproject_user_cellview_client(selected) {
  if (!this.m_isRootNode___$pp_org_gwtproject_user_cellview_client()) {
   let selectionElem = CellTreeNodeView.m_getSelectionElement__org_gwtproject_dom_client_Element(this.m_getElement__());
   if (!$Equality.$same(selectionElem, null)) {
    UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(selectionElem, this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client().m_cellTreeKeyboardSelectedItem__(), selected);
   }
  }
 }
 /**
  * @param {boolean} selected
  * @public
  */
 m_setSelected__boolean_$pp_org_gwtproject_user_cellview_client(selected) {
  if (!$Equality.$same(this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   let selectionModel = this.f_parentNodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getSelectionModel__();
   if (!$Equality.$same(selectionModel, null)) {
    selectionModel.m_setSelected__java_lang_Object__boolean(this.f_value__org_gwtproject_user_cellview_client_CellTreeNodeView_, selected);
   }
  }
 }
 /**
  * @public
  */
 m_showFewer___$pp_org_gwtproject_user_cellview_client() {
  let range = this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_getVisibleRange__();
  let defaultPageSize = this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_getDefaultPageSize__();
  let maxSize = Math.max(defaultPageSize, range.m_getLength__() - defaultPageSize);
  this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_setVisibleRange__int__int(range.m_getStart__(), maxSize);
 }
 /**
  * @public
  */
 m_showMore___$pp_org_gwtproject_user_cellview_client() {
  let range = this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_getVisibleRange__();
  let pageSize = range.m_getLength__() + this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_getDefaultPageSize__();
  this.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.m_setVisibleRange__int__int(range.m_getStart__(), pageSize);
 }
 /**
  * @param {number} setSize
  * @public
  */
 m_updateAriaAttributes__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView(setSize) {
  if (this.m_isRootNode___$pp_org_gwtproject_user_cellview_client()) {
   return;
  }
  Roles.m_getTreeitemRole__().m_setAriaSetsizeProperty__org_gwtproject_dom_client_Element__int(this.m_getElement__(), setSize);
  let selectionIndex = this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_indexOf__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(this);
  Roles.m_getTreeitemRole__().m_setAriaPosinsetProperty__org_gwtproject_dom_client_Element__int(this.m_getElement__(), selectionIndex + 1);
  if (this.m_isLeaf__()) {
   Roles.m_getTreeitemRole__().m_removeAriaExpandedState__org_gwtproject_dom_client_Element(this.m_getElement__());
  } else {
   Roles.m_getTreeitemRole__().m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(this.m_getElement__(), ExpandedValue.m_of__boolean(this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_));
  }
  Roles.m_getTreeitemRole__().m_setAriaLevelProperty__org_gwtproject_dom_client_Element__int(this.m_getElement__(), this.f_depth__org_gwtproject_user_cellview_client_CellTreeNodeView_);
 }
 /**
  * @param {boolean} isLoading
  * @public
  */
 m_updateImage__boolean_$p_org_gwtproject_user_cellview_client_CellTreeNodeView(isLoading) {
  if (this.m_isRootNode___$pp_org_gwtproject_user_cellview_client()) {
   return;
  }
  let isTopLevel = this.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_isRootNode___$pp_org_gwtproject_user_cellview_client();
  let html = this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getClosedImageHtml__boolean_$pp_org_gwtproject_user_cellview_client(isTopLevel);
  if (this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_) {
   html = isLoading ? this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getLoadingImageHtml___$pp_org_gwtproject_user_cellview_client() : this.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getOpenImageHtml__boolean_$pp_org_gwtproject_user_cellview_client(isTopLevel);
  }
  if (this.f_nodeInfoLoaded__org_gwtproject_user_cellview_client_CellTreeNodeView_ && $Equality.$same(this.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   html = CellTreeNodeView.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  }
  let tmp = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(tmp, html);
  let imageElem = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(tmp);
  let oldImg = this.m_getImageElement__();
  Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(oldImg).replaceChild(imageElem, oldImg);
  if (this.m_isLeaf__()) {
   Roles.m_getTreeitemRole__().m_removeAriaExpandedState__org_gwtproject_dom_client_Element(this.m_getElement__());
  } else {
   Roles.m_getTreeitemRole__().m_setAriaExpandedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_ExpandedValue(this.m_getElement__(), ExpandedValue.m_of__boolean(this.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_));
  }
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 static get f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellTreeNodeView_() {
  return (CellTreeNodeView.$clinit(), CellTreeNodeView.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellTreeNodeView_);
 }
 /**
  * @public
  */
 static $clinit() {
  CellTreeNodeView.$clinit = () =>{};
  CellTreeNodeView.$loadModules();
  UIObject.$clinit();
  CellTreeNodeView.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellTreeNodeView_ = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("<div style='position:absolute;display:none;'></div>");
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellTreeNodeView;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ExpandedValue = goog.module.get('org.gwtproject.aria.client.ExpandedValue$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  OpenEvent = goog.module.get('org.gwtproject.event.logical.shared.OpenEvent$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.$1$impl');
  NodeCellList = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList$impl');
  TreeNodeImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.TreeNodeImpl$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  FocusImpl = goog.module.get('org.gwtproject.user.client.ui.impl.FocusImpl$impl');
  CellPreviewEvent = goog.module.get('org.gwtproject.view.client.CellPreviewEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellTreeNodeView, 'org.gwtproject.user.cellview.client.CellTreeNodeView');

/** @private {SafeHtml} */
CellTreeNodeView.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellTreeNodeView_;
/** @public {Object} */
CellTreeNodeView.f_tmpElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;

exports = CellTreeNodeView; 
//# sourceMappingURL=CellTreeNodeView.js.map