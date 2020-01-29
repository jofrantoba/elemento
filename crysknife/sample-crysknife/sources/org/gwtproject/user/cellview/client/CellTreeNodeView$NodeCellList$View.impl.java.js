goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList.View$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const View = goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.View$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let AbstractHasData = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData$impl');
let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
let NodeCellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.NodeCellList$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView.Template$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C
 * @implements {View<C>}
  */
class NodeCellList_View extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NodeCellList<C>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View;
  /** @public {Object} */
  this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View_;
 }
 /**
  * @template C
  * @param {NodeCellList<C>} $outer_this
  * @param {Object} childContainer
  * @return {!NodeCellList_View<C>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_dom_client_Element($outer_this, childContainer) {
  NodeCellList_View.$clinit();
  let $instance = new NodeCellList_View();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_dom_client_Element($outer_this, childContainer);
  return $instance;
 }
 /**
  * @param {NodeCellList<C>} $outer_this
  * @param {Object} childContainer
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList__org_gwtproject_dom_client_Element($outer_this, childContainer) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View_ = childContainer;
 }
 /**
  * @override
  * @template H
  * @param {H} handler
  * @param {Type<H>} type
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, type) {
  return this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_handlerManger__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @param {SafeHtmlBuilder} sb
  * @param {List<C>} values
  * @param {number} start
  * @param {SelectionModel<?>} selectionModel
  * @public
  */
 m_render__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(sb, values, start, selectionModel) {
  let style = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client();
  let itemValueStyle = style.m_cellTreeItemValue__();
  let selectedStyle = " " + j_l_String.m_valueOf__java_lang_Object(style.m_cellTreeSelectedItem__());
  let itemStyle = style.m_cellTreeItem__();
  let itemImageValueStyle = " " + j_l_String.m_valueOf__java_lang_Object(style.m_cellTreeItemImageValue__());
  let openStyle = " " + j_l_String.m_valueOf__java_lang_Object(style.m_cellTreeOpenItem__());
  let topStyle = " " + j_l_String.m_valueOf__java_lang_Object(style.m_cellTreeTopItem__());
  let topImageValueStyle = " " + j_l_String.m_valueOf__java_lang_Object(style.m_cellTreeTopItemImageValue__());
  let isRootNode = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_isRootNode___$pp_org_gwtproject_user_cellview_client();
  let openImage = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getOpenImageHtml__boolean_$pp_org_gwtproject_user_cellview_client(isRootNode);
  let closedImage = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getClosedImageHtml__boolean_$pp_org_gwtproject_user_cellview_client(isRootNode);
  let imageWidth = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getImageWidth___$pp_org_gwtproject_user_cellview_client();
  let paddingDirection = LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? "right" : "left";
  let paddingAmount = imageWidth * this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_depth__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  let openNodes = /**@type {!HashSet<*>} */ (HashSet.$create__());
  let childCount = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getChildCount__();
  let end = start + values.size();
  for (let i = start; i < end && i < childCount; i++) {
   let child = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getChildNode__int(i);
   if (child.m_isOpen__()) {
    openNodes.add(child.m_getValueKey__());
   }
  }
  let keyProvider = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getProvidesKey__();
  let model = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getTreeViewModel__();
  for (let i_1 = start; i_1 < end; i_1++) {
   let value = values.getAtIndex(i_1 - start);
   let key = keyProvider.m_getKey__java_lang_Object(value);
   let isOpen = openNodes.contains(key);
   let outerClasses = StringBuilder.$create__java_lang_String(itemStyle);
   if (isOpen) {
    outerClasses.m_append__java_lang_String(openStyle);
   }
   if (isRootNode) {
    outerClasses.m_append__java_lang_String(topStyle);
   }
   let isSelected = (!$Equality.$same(selectionModel, null) && selectionModel.m_isSelected__java_lang_Object(value));
   let ariaSelected = j_l_String.m_valueOf__boolean(isSelected);
   if (isSelected) {
    outerClasses.m_append__java_lang_String(selectedStyle);
   }
   let innerClasses = StringBuilder.$create__java_lang_String(itemStyle);
   innerClasses.m_append__java_lang_String(itemImageValueStyle);
   if (isRootNode) {
    innerClasses.m_append__java_lang_String(topImageValueStyle);
   }
   let /** SafeHtml */ image;
   if (isOpen) {
    image = openImage;
   } else if (model.m_isLeaf__java_lang_Object(value)) {
    image = CellTreeNodeView.f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellTreeNodeView_;
   } else {
    image = closedImage;
   }
   let cellBuilder = SafeHtmlBuilder.$create__();
   let context = Context.$create__int__int__java_lang_Object(i_1, 0, key);
   this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_cell__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, cellBuilder);
   let innerPadding = SafeStylesUtils.m_fromTrustedString__java_lang_String("padding-" + j_l_String.m_valueOf__java_lang_Object(paddingDirection) + ": " + imageWidth + "px;");
   let innerDiv = Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template.m_innerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(innerPadding, innerClasses.toString(), image, itemValueStyle, cellBuilder.m_toSafeHtml__());
   let outerPadding = SafeStylesUtils.m_fromTrustedString__java_lang_String("padding-" + j_l_String.m_valueOf__java_lang_Object(paddingDirection) + ": " + paddingAmount + "px;");
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template.m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(outerPadding, outerClasses.toString(), innerDiv, ariaSelected));
  }
 }
 /**
  * @override
  * @param {List<C>} values
  * @param {SelectionModel<?>} selectionModel
  * @param {boolean} stealFocus
  * @public
  */
 m_replaceAllChildren__java_util_List__org_gwtproject_view_client_SelectionModel__boolean(values, selectionModel, stealFocus) {
  let sb = SafeHtmlBuilder.$create__();
  this.m_render__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(sb, values, 0, selectionModel);
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_isAnimationEnabled__()) {
   $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client().style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  }
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_isRefreshing__org_gwtproject_user_cellview_client_CellTree = true;
  let savedViews = this.m_saveChildState__java_util_List__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View(values, 0);
  AbstractHasData.m_replaceAllChildren__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View_, sb.m_toSafeHtml__());
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_isRefreshing__org_gwtproject_user_cellview_client_CellTree = false;
  let size = values.size();
  let childCount = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.size();
  while (childCount > size) {
   childCount--;
   let deleted = /**@type {CellTreeNodeView<*>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.removeAtIndex(childCount), CellTreeNodeView));
   deleted.m_cleanup__boolean(true);
  }
  this.m_loadChildState__java_util_List__int__java_util_Map_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View(values, 0, savedViews);
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_isRootNode___$pp_org_gwtproject_user_cellview_client() && $Equality.$same(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectedNode___$pp_org_gwtproject_user_cellview_client(), this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_) && values.size() > 0) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(/**@type {CellTreeNodeView<*>} */ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.getAtIndex(0), CellTreeNodeView)), false);
  }
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_isAnimationEnabled__()) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_maybeAnimateTreeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_$pp_org_gwtproject_user_cellview_client(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_);
  }
 }
 /**
  * @override
  * @param {List<C>} values
  * @param {number} start
  * @param {SelectionModel<?>} selectionModel
  * @param {boolean} stealFocus
  * @public
  */
 m_replaceChildren__java_util_List__int__org_gwtproject_view_client_SelectionModel__boolean(values, start, selectionModel, stealFocus) {
  let sb = SafeHtmlBuilder.$create__();
  this.m_render__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(sb, values, 0, selectionModel);
  let savedViews = this.m_saveChildState__java_util_List__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View(values, start);
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_isRefreshing__org_gwtproject_user_cellview_client_CellTree = true;
  let html = sb.m_toSafeHtml__();
  let newChildren = AbstractHasData.m_convertToElements__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, CellTreeNodeView.m_getTmpElem__(), html);
  AbstractHasData.m_replaceChildren__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int__org_gwtproject_safehtml_shared_SafeHtml(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_, this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View_, newChildren, start, html);
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_isRefreshing__org_gwtproject_user_cellview_client_CellTree = false;
  this.m_loadChildState__java_util_List__int__java_util_Map_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View(values, start, savedViews);
 }
 /**
  * @override
  * @public
  */
 m_resetFocus__() {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_resetFocus___$pp_org_gwtproject_user_cellview_client();
 }
 /**
  * @override
  * @param {number} index
  * @param {boolean} selected
  * @param {boolean} stealFocus
  * @public
  */
 m_setKeyboardSelected__int__boolean__boolean(index, selected, stealFocus) {
  let elem = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View_, index)), Element_$Overlay));
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(CellTreeNodeView.m_getSelectionElement__org_gwtproject_dom_client_Element(elem), this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getStyle___$pp_org_gwtproject_user_cellview_client().m_cellTreeKeyboardSelectedItem__(), selected);
 }
 /**
  * @override
  * @param {LoadingState} state
  * @public
  */
 m_setLoadingState__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_updateImage__boolean_$p_org_gwtproject_user_cellview_client_CellTreeNodeView($Equality.$same(state, LoadingState.f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState));
  CellTreeNodeView.m_showOrHide__org_gwtproject_dom_client_Element__boolean(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_, $Equality.$same(state, LoadingState.f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState) && this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_presenter__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList.m_isEmpty__());
 }
 /**
  * @param {List<C>} values
  * @param {number} start
  * @param {Map<*, CellTreeNodeView<?>>} savedViews
  * @public
  */
 m_loadChildState__java_util_List__int__java_util_Map_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View(values, start, savedViews) {
  let len = values.size();
  let end = start + len;
  let childCount = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getChildCount__();
  let setSize = (childCount > len) ? childCount : end;
  let keyProvider = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getProvidesKey__();
  let container = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_ensureChildContainer___$pp_org_gwtproject_user_cellview_client();
  let childElem = (values.size() == 0) ? null : Element_$Overlay.m_as__org_gwtproject_dom_client_Node(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(container, start));
  let keyboardSelected = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectedNode___$pp_org_gwtproject_user_cellview_client();
  for (let i = start; i < end; i++) {
   let childValue = values.getAtIndex(i - start);
   let child = /**@type {CellTreeNodeView<C>} */ (this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_createTreeNodeView__org_gwtproject_view_client_TreeViewModel_NodeInfo__org_gwtproject_dom_client_Element__java_lang_Object__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_, childElem, childValue, null));
   let savedChild = /**@type {CellTreeNodeView<*>} */ ($Casts.$to(savedViews.remove(keyProvider.m_getKey__java_lang_Object(childValue)), CellTreeNodeView));
   if (!$Equality.$same(savedChild, null)) {
    child.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_animationFrame__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_contentContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_childContainer__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_emptyMessageElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_nodeInfoLoaded__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_nodeInfoLoaded__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_open__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_showMoreElem__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    child.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_ = savedChild.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
    if (!$Equality.$same(child.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
     child.f_treeNode__org_gwtproject_user_cellview_client_CellTreeNodeView_.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_TreeNodeImpl_ = child;
    }
    child.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView = savedChild.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView;
    if (!$Equality.$same(child.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView, null)) {
     child.f_listView__org_gwtproject_user_cellview_client_CellTreeNodeView.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_ = child;
    }
    if (!$Equality.$same(child.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
     for (let $iterator = child.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_iterator__(); $iterator.m_hasNext__(); ) {
      let grandchild = /**@type {CellTreeNodeView<*>} */ ($Casts.$to($iterator.m_next__(), CellTreeNodeView));
      grandchild.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_ = child;
     }
    }
    if ($Equality.$same(keyboardSelected, savedChild)) {
     keyboardSelected = child;
    }
    child.m_getElement__().appendChild(savedChild.m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client());
    savedChild.f_isDestroyed__org_gwtproject_user_cellview_client_CellTreeNodeView_ = true;
   }
   if (childCount > i) {
    this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.setAtIndex(i, child);
   } else {
    this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_.add(child);
   }
   child.m_updateAriaAttributes__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView(setSize);
   childElem = Element_$Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(childElem);
  }
  let curNode = keyboardSelected;
  while (!$Equality.$same(curNode, null)) {
   if ($Equality.$same(curNode, this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_)) {
    this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_keyboardSelect__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(keyboardSelected, false);
    break;
   }
   curNode = curNode.f_parentNode__org_gwtproject_user_cellview_client_CellTreeNodeView_;
  }
 }
 /**
  * @param {List<C>} values
  * @param {number} start
  * @return {Map<*, CellTreeNodeView<?>>}
  * @public
  */
 m_saveChildState__java_util_List__int_$p_org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View(values, start) {
  if ($Equality.$same(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_, null)) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_children__org_gwtproject_user_cellview_client_CellTreeNodeView_ = /**@type {!ArrayList<CellTreeNodeView<?>>} */ (ArrayList.$create__());
  }
  let len = values.size();
  let end = start + len;
  let childCount = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getChildCount__();
  let keyboardSelected = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.f_tree__org_gwtproject_user_cellview_client_CellTreeNodeView_.m_getKeyboardSelectedNode___$pp_org_gwtproject_user_cellview_client();
  let openNodes = /**@type {!HashMap<*, CellTreeNodeView<?>>} */ (HashMap.$create__());
  for (let i = start; i < end && i < childCount; i++) {
   let child = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeView__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getChildNode__int(i);
   if (child.m_isOpen__() || $Equality.$same(child, keyboardSelected)) {
    openNodes.put(child.m_getValueKey__(), child);
   } else {
    child.m_cleanup__boolean(true);
   }
  }
  let keyProvider = this.f_$outer_this__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_View.f_nodeInfo__org_gwtproject_user_cellview_client_CellTreeNodeView_NodeCellList_.m_getProvidesKey__();
  let savedViews = /**@type {!HashMap<*, CellTreeNodeView<?>>} */ (HashMap.$create__());
  for (let $iterator = values.m_iterator__(); $iterator.m_hasNext__(); ) {
   let childValue = $iterator.m_next__();
   let key = keyProvider.m_getKey__java_lang_Object(childValue);
   let savedView = /**@type {CellTreeNodeView<*>} */ ($Casts.$to(openNodes.remove(key), CellTreeNodeView));
   if (!$Equality.$same(savedView, null)) {
    Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(savedView.m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client());
    savedViews.put(key, savedView);
   }
  }
  for (let $iterator_1 = openNodes.values().m_iterator__(); $iterator_1.m_hasNext__(); ) {
   let lostNode = /**@type {CellTreeNodeView<*>} */ ($Casts.$to($iterator_1.m_next__(), CellTreeNodeView));
   lostNode.m_cleanup__boolean(true);
  }
  return savedViews;
 }
 /**
  * @public
  */
 static $clinit() {
  NodeCellList_View.$clinit = () =>{};
  NodeCellList_View.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NodeCellList_View;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  AbstractHasData = goog.module.get('org.gwtproject.user.cellview.client.AbstractHasData$impl');
  CellTreeNodeView = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView.Template$impl');
  LoadingState = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NodeCellList_View, 'org.gwtproject.user.cellview.client.CellTreeNodeView$NodeCellList$View');

View.$markImplementor(NodeCellList_View);

exports = NodeCellList_View; 
//# sourceMappingURL=CellTreeNodeView$NodeCellList$View.js.map