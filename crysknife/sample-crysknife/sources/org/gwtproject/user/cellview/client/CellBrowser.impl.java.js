goog.module('org.gwtproject.user.cellview.client.CellBrowser$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCellTree = goog.require('org.gwtproject.user.cellview.client.AbstractCellTree$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Visibility = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeStylesBuilder = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let BrowserCellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.BrowserCellList$impl');
let Builder = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Builder$impl');
let CellListResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.CellListResourcesImpl$impl');
let PagerFactory = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.PagerFactory$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Resources$impl');
let ScrollAnimation = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.ScrollAnimation$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');
let TreeNodeImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl$impl');
let CellList_Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Resources$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let TreeNode = goog.forwardDeclare('org.gwtproject.user.cellview.client.TreeNode$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let FlowPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FlowPanel$impl');
let ScrollPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.ScrollPanel$impl');
let SplitLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let TreeViewModel = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel$impl');
let NodeInfo = goog.forwardDeclare('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {ProvidesResize}
 * @implements {RequiresResize}
 * @implements {HasAnimation}
  */
class CellBrowser extends AbstractCellTree {
 /** @protected */
 constructor() {
  super();
  /**@type {List<TreeNodeImpl<?>>}*/
  this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser;
  /**@type {ScrollAnimation}*/
  this.f_animation__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {CellList_Resources}*/
  this.f_cellListResources__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {SafeHtml}*/
  this.f_closedImageHtml__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {number}*/
  this.f_defaultWidth__org_gwtproject_user_cellview_client_CellBrowser_ = 0;
  /**@type {number}*/
  this.f_imageWidth__org_gwtproject_user_cellview_client_CellBrowser_ = 0;
  /**@type {boolean}*/
  this.f_isAnimationEnabled__org_gwtproject_user_cellview_client_CellBrowser_ = false;
  /**@type {Widget}*/
  this.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {number}*/
  this.f_minWidth__org_gwtproject_user_cellview_client_CellBrowser_ = 0;
  /**@type {SafeHtml}*/
  this.f_openImageHtml__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {PagerFactory}*/
  this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {Integer}*/
  this.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {Object}*/
  this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_;
  /**@type {Style}*/
  this.f_style__org_gwtproject_user_cellview_client_CellBrowser_;
 }
 /** @return {Resources} */
 static m_getDefaultResources__() {
  CellBrowser.$clinit();
  return Resources.f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Resources;
 }
 //Factory method corresponding to constructor 'CellBrowser(TreeViewModel, Object)'.
 /** @template T @return {!CellBrowser} @deprecated */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object(/** TreeViewModel */ viewModel, /** T */ rootValue) {
  CellBrowser.$clinit();
  let $instance = new CellBrowser();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue);
  return $instance;
 }
 //Initialization from constructor 'CellBrowser(TreeViewModel, Object)'.
 /** @template T @deprecated */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel__java_lang_Object(/** TreeViewModel */ viewModel, /** T */ rootValue) {
  this.$ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_user_cellview_client_CellBrowser_Builder(/**@type {!Builder<T>}*/ (Builder.$create__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue)));
 }
 //Factory method corresponding to constructor 'CellBrowser(TreeViewModel, Object, Resources)'.
 /** @template T @return {!CellBrowser} @deprecated */
 static $create__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_Resources(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources) {
  CellBrowser.$clinit();
  let $instance = new CellBrowser();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_Resources(viewModel, rootValue, resources);
  return $instance;
 }
 //Initialization from constructor 'CellBrowser(TreeViewModel, Object, Resources)'.
 /** @template T @deprecated */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_Resources(/** TreeViewModel */ viewModel, /** T */ rootValue, /** Resources */ resources) {
  this.$ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_user_cellview_client_CellBrowser_Builder(/**@type {!Builder<T>}*/ (Builder.$create__org_gwtproject_view_client_TreeViewModel__java_lang_Object(viewModel, rootValue)).m_resources__org_gwtproject_user_cellview_client_CellBrowser_Resources(resources));
 }
 //Factory method corresponding to constructor 'CellBrowser(Builder)'.
 /** @template T @return {!CellBrowser} */
 static $create__org_gwtproject_user_cellview_client_CellBrowser_Builder(/** Builder<T> */ builder) {
  CellBrowser.$clinit();
  let $instance = new CellBrowser();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_user_cellview_client_CellBrowser_Builder(builder);
  return $instance;
 }
 //Initialization from constructor 'CellBrowser(Builder)'.
 /** @template T */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_user_cellview_client_CellBrowser_Builder(/** Builder<T> */ builder) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractCellTree__org_gwtproject_view_client_TreeViewModel(builder.f_viewModel__org_gwtproject_user_cellview_client_CellBrowser_Builder_);
  this.$init___$p_org_gwtproject_user_cellview_client_CellBrowser();
  let resources = builder.m_resources___$p_org_gwtproject_user_cellview_client_CellBrowser_Builder();
  this.f_style__org_gwtproject_user_cellview_client_CellBrowser_ = resources.m_cellBrowserStyle__();
  this.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_ensureInjected__();
  this.f_cellListResources__org_gwtproject_user_cellview_client_CellBrowser_ = CellListResourcesImpl.$create__org_gwtproject_user_cellview_client_CellBrowser_Resources(resources);
  this.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_ = builder.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_ = builder.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  this.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_ = builder.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_Builder_;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(SplitLayoutPanel.$create__());
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.m_getElement__().style, Overflow.f_AUTO__org_gwtproject_dom_style_shared_Overflow);
  this.m_setStyleName__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserWidget__());
  let treeOpen = resources.m_cellBrowserOpen__();
  let treeClosed = resources.m_cellBrowserClosed__();
  this.f_openImageHtml__org_gwtproject_user_cellview_client_CellBrowser_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource_$p_org_gwtproject_user_cellview_client_CellBrowser(treeOpen);
  this.f_closedImageHtml__org_gwtproject_user_cellview_client_CellBrowser_ = this.m_getImageHtml__org_gwtproject_resources_client_ImageResource_$p_org_gwtproject_user_cellview_client_CellBrowser(treeClosed);
  this.f_imageWidth__org_gwtproject_user_cellview_client_CellBrowser_ = Math.max(treeOpen.m_getWidth__(), treeClosed.m_getWidth__());
  this.f_minWidth__org_gwtproject_user_cellview_client_CellBrowser_ = this.f_imageWidth__org_gwtproject_user_cellview_client_CellBrowser_ + 20;
  this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  $Overlay.m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, Visibility.f_HIDDEN__org_gwtproject_dom_style_shared_Visibility);
  $Overlay.m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, -32767);
  $Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   $Overlay.m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   $Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, 1, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, 1, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.m_getElement__().appendChild(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_);
  this.m_appendTreeNode__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object_$p_org_gwtproject_user_cellview_client_CellBrowser(this.m_getNodeInfo__java_lang_Object(builder.f_rootValue__org_gwtproject_user_cellview_client_CellBrowser_Builder_), builder.f_rootValue__org_gwtproject_user_cellview_client_CellBrowser_Builder_);
  this.m_sinkEvents__int(Event.f_ONSCROLL__org_gwtproject_user_client_Event);
 }
 /** @return {number} */
 m_getDefaultColumnWidth__() {
  return this.f_defaultWidth__org_gwtproject_user_cellview_client_CellBrowser_;
 }
 /** @return {number} */
 m_getMinimumColumnWidth__() {
  return this.f_minWidth__org_gwtproject_user_cellview_client_CellBrowser_;
 }
 /** @override @return {TreeNode} */
 m_getRootTreeNode__() {
  return /**@type {TreeNodeImpl<*>}*/ ($Casts.$to(this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(0), TreeNodeImpl));
 }
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_cellview_client_CellBrowser_;
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONSCROLL__org_gwtproject_user_client_Event: 
    this.m_adjustScrollLock___$p_org_gwtproject_user_cellview_client_CellBrowser();
    break;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /** @override */
 m_onResize__() {
  this.m_getSplitLayoutPanel___$p_org_gwtproject_user_cellview_client_CellBrowser().m_onResize__();
 }
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_cellview_client_CellBrowser_ = enable;
 }
 
 m_setDefaultColumnWidth__int(/** number */ width) {
  this.f_defaultWidth__org_gwtproject_user_cellview_client_CellBrowser_ = width;
 }
 
 m_setMinimumColumnWidth__int(/** number */ minWidth) {
  this.f_minWidth__org_gwtproject_user_cellview_client_CellBrowser_ = minWidth;
 }
 /** @template C @return {Widget} */
 m_createPager__org_gwtproject_view_client_HasData(/** HasData<C> */ display) {
  if ($Equality.$same(this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_, null)) {
   return null;
  }
  let pager = this.f_pagerFactory__org_gwtproject_user_cellview_client_CellBrowser_.m_create__org_gwtproject_view_client_HasRows(display);
  pager.m_setDisplay__org_gwtproject_view_client_HasRows(display);
  return pager;
 }
 
 m_adjustScrollLock___$p_org_gwtproject_user_cellview_client_CellBrowser() {
  let scrollLeft = Math.abs(Element_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()));
  if (scrollLeft > 0) {
   let clientWidth = Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
   $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, scrollLeft + clientWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_scrollLock__org_gwtproject_user_cellview_client_CellBrowser_.style, 1.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
 }
 /** @template C @return {TreeNode} */
 m_appendTreeNode__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object_$p_org_gwtproject_user_cellview_client_CellBrowser(/** NodeInfo<C> */ nodeInfo, /** * */ value) {
  let level = this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.size();
  let view = /**@type {BrowserCellList<C>}*/ (this.m_createDisplay__org_gwtproject_view_client_TreeViewModel_NodeInfo__int_$p_org_gwtproject_user_cellview_client_CellBrowser(nodeInfo, level));
  let scrollable = ScrollPanel.$create__();
  scrollable.m_getElement__().tabIndex = -1;
  let pager = this.m_createPager__org_gwtproject_view_client_HasData(view);
  if (!$Equality.$same(pager, null)) {
   let flowPanel = FlowPanel.$create__();
   flowPanel.m_add__org_gwtproject_user_client_ui_Widget(view);
   flowPanel.m_add__org_gwtproject_user_client_ui_Widget(pager);
   scrollable.m_setWidget__org_gwtproject_user_client_ui_Widget(flowPanel);
  } else {
   scrollable.m_setWidget__org_gwtproject_user_client_ui_Widget(view);
  }
  scrollable.m_setStyleName__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserColumn__());
  if (level == 0) {
   scrollable.m_addStyleName__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellBrowser_.m_cellBrowserFirstColumn__());
  }
  let treeNode = /**@type {!TreeNodeImpl<C>}*/ (TreeNodeImpl.$create__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__org_gwtproject_user_client_ui_Widget(this, nodeInfo, value, view, scrollable));
  this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.add(treeNode);
  view.m_setSelectionModel__org_gwtproject_view_client_SelectionModel__org_gwtproject_view_client_CellPreviewEvent_Handler(nodeInfo.m_getSelectionModel__(), null);
  nodeInfo.m_setDataDisplay__org_gwtproject_view_client_HasData(view);
  let splitPanel = this.m_getSplitLayoutPanel___$p_org_gwtproject_user_cellview_client_CellBrowser();
  splitPanel.m_insertLineStart__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(scrollable, this.f_defaultWidth__org_gwtproject_user_cellview_client_CellBrowser_, null);
  splitPanel.m_setWidgetMinSize__org_gwtproject_user_client_ui_Widget__int(scrollable, this.f_minWidth__org_gwtproject_user_cellview_client_CellBrowser_);
  splitPanel.m_forceLayout__();
  this.f_animation__org_gwtproject_user_cellview_client_CellBrowser_.m_scrollToEnd___$pp_org_gwtproject_user_cellview_client();
  return treeNode;
 }
 /** @template C @return {BrowserCellList<C>} */
 m_createDisplay__org_gwtproject_view_client_TreeViewModel_NodeInfo__int_$p_org_gwtproject_user_cellview_client_CellBrowser(/** NodeInfo<C> */ nodeInfo, /** number */ level) {
  let display = /**@type {!BrowserCellList<C>}*/ (BrowserCellList.$create__org_gwtproject_user_cellview_client_CellBrowser__org_gwtproject_cell_client_Cell__int__org_gwtproject_view_client_ProvidesKey(this, nodeInfo.m_getCell__(), level, nodeInfo.m_getProvidesKey__()));
  if (!$Equality.$same(this.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_, null)) {
   display.m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(this.f_loadingIndicator__org_gwtproject_user_cellview_client_CellBrowser_);
  }
  if (!$Equality.$same(this.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_, null)) {
   display.m_setPageSize__int(this.f_pageSize__org_gwtproject_user_cellview_client_CellBrowser_.m_intValue__());
  }
  display.m_setValueUpdater__org_gwtproject_cell_client_ValueUpdater(nodeInfo.m_getValueUpdater__());
  display.m_setKeyboardSelectionPolicy__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy(KeyboardSelectionPolicy.f_ENABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy);
  return display;
 }
 /** @return {SafeHtml} */
 m_getImageHtml__org_gwtproject_resources_client_ImageResource_$p_org_gwtproject_user_cellview_client_CellBrowser(/** ImageResource */ res) {
  let proto = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(res);
  let image = proto.m_getSafeHtml__();
  let cssBuilder = SafeStylesBuilder.$create__();
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   cssBuilder.m_appendTrustedString__java_lang_String("left:0px;");
  } else {
   cssBuilder.m_appendTrustedString__java_lang_String("right:0px;");
  }
  cssBuilder.m_appendTrustedString__java_lang_String("width: " + res.m_getWidth__() + "px;");
  cssBuilder.m_appendTrustedString__java_lang_String("height: " + res.m_getHeight__() + "px;");
  return Template.f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template.m_imageWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(cssBuilder.m_toSafeStyles__(), image);
 }
 /** @return {SplitLayoutPanel} */
 m_getSplitLayoutPanel___$p_org_gwtproject_user_cellview_client_CellBrowser() {
  return /**@type {SplitLayoutPanel}*/ ($Casts.$to(this.m_getWidget__(), SplitLayoutPanel));
 }
 
 m_trimToLevel__int_$p_org_gwtproject_user_cellview_client_CellBrowser(/** number */ level) {
  this.m_adjustScrollLock___$p_org_gwtproject_user_cellview_client_CellBrowser();
  let curLevel = this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.size() - 1;
  while (curLevel > level) {
   let removed = /**@type {TreeNodeImpl<*>}*/ ($Casts.$to(this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.removeAtIndex(curLevel), TreeNodeImpl));
   removed.m_destroy___$p_org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl();
   curLevel--;
  }
  if (level < this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.size()) {
   let node = /**@type {TreeNodeImpl<*>}*/ ($Casts.$to(this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(level), TreeNodeImpl));
   node.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = null;
   node.f_display__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = false;
  }
 }
 /** @template C @return {TreeNode} */
 m_updateChildState__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList__boolean_$p_org_gwtproject_user_cellview_client_CellBrowser(/** BrowserCellList<C> */ cellList, /** boolean */ fireEvents) {
  if (cellList.f_isDestroyed__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_) {
   return null;
  }
  let newValue = cellList.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_getKeyboardSelectedRowValue__();
  let newKey = cellList.m_getValueKey__java_lang_Object(newValue);
  let closedNode = null;
  if (!$Equality.$same(cellList.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, null) && cellList.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ && !$Objects.m_equals__java_lang_Object__java_lang_Object(cellList.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_, newKey)) {
   closedNode = (this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.size() > cellList.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ + 1) ? /**@type {TreeNodeImpl<*>}*/ ($Casts.$to(this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(cellList.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ + 1), TreeNodeImpl)) : null;
   this.m_trimToLevel__int_$p_org_gwtproject_user_cellview_client_CellBrowser(cellList.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_);
  }
  let openNode = null;
  let justOpenedNode = false;
  if (!$Equality.$same(newKey, null)) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(newKey, cellList.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_)) {
    openNode = cellList.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ ? /**@type {TreeNodeImpl<*>}*/ ($Casts.$to(this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser.getAtIndex(cellList.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ + 1), TreeNodeImpl)) : null;
   } else {
    if ($Equality.$same(KeyboardSelectionPolicy.f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__())) {
     cellList.m_setSelectedValue__java_lang_Object(newValue);
    }
    cellList.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = newKey;
    let childNodeInfo = this.m_isLeaf__java_lang_Object(newValue) ? null : this.m_getNodeInfo__java_lang_Object(newValue);
    if (!$Equality.$same(childNodeInfo, null)) {
     cellList.f_isFocusedOpen__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_ = true;
     justOpenedNode = true;
     openNode = this.m_appendTreeNode__org_gwtproject_view_client_TreeViewModel_NodeInfo__java_lang_Object_$p_org_gwtproject_user_cellview_client_CellBrowser(childNodeInfo, newValue);
    }
   }
  }
  if (fireEvents) {
   if (!$Equality.$same(closedNode, null)) {
    CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(this, closedNode);
   }
   if (!$Equality.$same(openNode, null) && justOpenedNode) {
    OpenEvent.m_fire__org_gwtproject_event_logical_shared_HasOpenHandlers__java_lang_Object(this, openNode);
   }
  }
  return ($Equality.$same(openNode, null) || openNode.m_isDestroyed__()) ? null : openNode;
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_CellBrowser() {
  this.f_treeNodes__org_gwtproject_user_cellview_client_CellBrowser = /**@type {!ArrayList<TreeNodeImpl<?>>}*/ (ArrayList.$create__());
  this.f_animation__org_gwtproject_user_cellview_client_CellBrowser_ = ScrollAnimation.$create__org_gwtproject_user_cellview_client_CellBrowser(this);
  this.f_defaultWidth__org_gwtproject_user_cellview_client_CellBrowser_ = 200;
 }
 /** @return {SafeHtml} */
 static get f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellBrowser_() {
  return (CellBrowser.$clinit(), CellBrowser.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellBrowser_);
 }
 
 static $clinit() {
  CellBrowser.$clinit = () =>{};
  CellBrowser.$loadModules();
  AbstractCellTree.$clinit();
  CellBrowser.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellBrowser_ = SafeHtmlUtils.m_fromSafeConstant__java_lang_String("<div style='position:absolute;display:none;'></div>");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellBrowser;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Visibility = goog.module.get('org.gwtproject.dom.style.shared.Visibility$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  OpenEvent = goog.module.get('org.gwtproject.event.logical.shared.OpenEvent$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  SafeStylesBuilder = goog.module.get('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  BrowserCellList = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.BrowserCellList$impl');
  Builder = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.Builder$impl');
  CellListResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.CellListResourcesImpl$impl');
  Resources = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.Resources$impl');
  ScrollAnimation = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.ScrollAnimation$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');
  TreeNodeImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  FlowPanel = goog.module.get('org.gwtproject.user.client.ui.FlowPanel$impl');
  ScrollPanel = goog.module.get('org.gwtproject.user.client.ui.ScrollPanel$impl');
  SplitLayoutPanel = goog.module.get('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(CellBrowser, 'org.gwtproject.user.cellview.client.CellBrowser');

ProvidesResize.$markImplementor(CellBrowser);
RequiresResize.$markImplementor(CellBrowser);
HasAnimation.$markImplementor(CellBrowser);

/**@type {Resources}*/
CellBrowser.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellBrowser_;
/**@private {SafeHtml}*/
CellBrowser.$f_LEAF_IMAGE__org_gwtproject_user_cellview_client_CellBrowser_;

exports = CellBrowser; 
//# sourceMappingURL=CellBrowser.js.map