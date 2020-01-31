goog.module('org.gwtproject.user.cellview.client.DataGrid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCellTable = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.$1$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Resources$impl');
let ResourcesAdapter = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.ResourcesAdapter$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Style$impl');
let TableWidget = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.TableWidget$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let CustomScrollPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel$impl');
let FlexTable = goog.forwardDeclare('org.gwtproject.user.client.ui.FlexTable$impl');
let HeaderPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HeaderPanel$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let ScrollPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.ScrollPanel$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {AbstractCellTable<T>}
 * @implements {RequiresResize}
  */
class DataGrid extends AbstractCellTable {
 /** @protected */
 constructor() {
  super();
  /**@type {TableWidget}*/
  this.f_tableData__org_gwtproject_user_cellview_client_DataGrid;
  /**@type {TableWidget}*/
  this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid;
  /**@type {TableWidget}*/
  this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid;
  /**@type {FlexTable}*/
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {HeaderPanel}*/
  this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {FlexTable}*/
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {Style}*/
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {Object}*/
  this.f_tableDataContainer__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {ScrollPanel}*/
  this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {SimplePanel}*/
  this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {Object}*/
  this.f_tableFooterScroller__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {SimplePanel}*/
  this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_;
  /**@type {Object}*/
  this.f_tableHeaderScroller__org_gwtproject_user_cellview_client_DataGrid_;
 }
 /** @return {Widget} */
 static m_createDefaultLoadingIndicator__org_gwtproject_user_cellview_client_DataGrid_Resources(/** Resources */ resources) {
  let loadingImg = resources.m_dataGridLoading__();
  if ($Equality.$same(loadingImg, null)) {
   return null;
  }
  let image = Image.$create__org_gwtproject_resources_client_ImageResource(loadingImg);
  $Overlay.m_setMarginTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(image.m_getElement__().style, 30.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  return image;
 }
 /** @return {Resources} */
 static m_getDefaultResources__() {
  if ($Equality.$same(DataGrid.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_DataGrid_, null)) {
   DataGrid.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_DataGrid_ = DataGrid__ResourcesImpl.$create__();
  }
  return DataGrid.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_DataGrid_;
 }
 //Factory method corresponding to constructor 'DataGrid()'.
 /** @template T @return {!DataGrid<T>} */
 static $create__() {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__();
  return $instance;
 }
 //Initialization from constructor 'DataGrid()'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__() {
  this.$ctor__org_gwtproject_user_cellview_client_DataGrid__int(DataGrid.f_DEFAULT_PAGESIZE__org_gwtproject_user_cellview_client_DataGrid_);
 }
 //Factory method corresponding to constructor 'DataGrid(int)'.
 /** @template T @return {!DataGrid<T>} */
 static $create__int(/** number */ pageSize) {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__int(pageSize);
  return $instance;
 }
 //Initialization from constructor 'DataGrid(int)'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__int(/** number */ pageSize) {
  this.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources(pageSize, DataGrid.m_getDefaultResources__());
 }
 //Factory method corresponding to constructor 'DataGrid(int, ProvidesKey)'.
 /** @template T @return {!DataGrid<T>} */
 static $create__int__org_gwtproject_view_client_ProvidesKey(/** number */ pageSize, /** ProvidesKey<T> */ keyProvider) {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_view_client_ProvidesKey(pageSize, keyProvider);
  return $instance;
 }
 //Initialization from constructor 'DataGrid(int, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_view_client_ProvidesKey(/** number */ pageSize, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, DataGrid.m_getDefaultResources__(), keyProvider);
 }
 //Factory method corresponding to constructor 'DataGrid(int, Resources)'.
 /** @template T @return {!DataGrid<T>} */
 static $create__int__org_gwtproject_user_cellview_client_DataGrid_Resources(/** number */ pageSize, /** Resources */ resources) {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources(pageSize, resources);
  return $instance;
 }
 //Initialization from constructor 'DataGrid(int, Resources)'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources(/** number */ pageSize, /** Resources */ resources) {
  this.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, resources, null);
 }
 //Factory method corresponding to constructor 'DataGrid(int, Resources, ProvidesKey)'.
 /** @template T @return {!DataGrid<T>} */
 static $create__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey(/** number */ pageSize, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider) {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, resources, keyProvider);
  return $instance;
 }
 //Initialization from constructor 'DataGrid(int, Resources, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey(/** number */ pageSize, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(pageSize, resources, keyProvider, DataGrid.m_createDefaultLoadingIndicator__org_gwtproject_user_cellview_client_DataGrid_Resources(resources));
 }
 //Factory method corresponding to constructor 'DataGrid(int, Resources, ProvidesKey, Widget)'.
 /** @template T @return {!DataGrid<T>} */
 static $create__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(/** number */ pageSize, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider, /** Widget */ loadingIndicator) {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(pageSize, resources, keyProvider, loadingIndicator);
  return $instance;
 }
 //Initialization from constructor 'DataGrid(int, Resources, ProvidesKey, Widget)'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_user_cellview_client_DataGrid_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(/** number */ pageSize, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider, /** Widget */ loadingIndicator) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_user_client_ui_Widget__int__org_gwtproject_user_cellview_client_AbstractCellTable_Resources__org_gwtproject_view_client_ProvidesKey(HeaderPanel.$create__(), pageSize, ResourcesAdapter.$create__org_gwtproject_user_cellview_client_DataGrid_Resources(resources), keyProvider);
  this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_ = /**@type {HeaderPanel}*/ ($Casts.$to(this.m_getWidget__(), HeaderPanel));
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_ = resources.m_dataGridStyle__();
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_.m_ensureInjected__();
  this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid = TableWidget.$create__();
  this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_ = this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.createTHead();
  this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid = TableWidget.$create__();
  this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_ = this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.createTFoot();
  this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_ = SimplePanel.$create__org_gwtproject_user_client_ui_Widget(this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid);
  this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_ = SimplePanel.$create__org_gwtproject_user_client_ui_Widget(this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid);
  this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_.m_setHeaderWidget__org_gwtproject_user_client_ui_Widget(this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_);
  this.f_tableHeaderScroller__org_gwtproject_user_cellview_client_DataGrid_ = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__());
  this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_.m_setFooterWidget__org_gwtproject_user_client_ui_Widget(this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_);
  this.f_tableFooterScroller__org_gwtproject_user_cellview_client_DataGrid_ = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__());
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_tableHeaderScroller__org_gwtproject_user_cellview_client_DataGrid_.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_tableFooterScroller__org_gwtproject_user_cellview_client_DataGrid_.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  this.f_tableData__org_gwtproject_user_cellview_client_DataGrid = TableWidget.$create__();
  if (this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.tBodies.length > 0) {
   this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_ = /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.tBodies, 0), TableSectionElement_$Overlay));
  } else {
   this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_ = Document_$Overlay.m_createTBodyElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_tableElem__org_gwtproject_user_cellview_client_DataGrid_TableWidget_.appendChild(this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_);
  }
  this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_ = CustomScrollPanel.$create__org_gwtproject_user_client_ui_Widget(this.f_tableData__org_gwtproject_user_cellview_client_DataGrid);
  this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_.m_setHeight__java_lang_String("100%");
  this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_.m_setContentWidget__org_gwtproject_user_client_ui_Widget(this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_);
  this.f_tableDataContainer__org_gwtproject_user_cellview_client_DataGrid_ = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.m_getElement__());
  $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_tableDataContainer__org_gwtproject_user_cellview_client_DataGrid_.style, Display.f_BLOCK__org_gwtproject_dom_style_shared_Display);
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_DataGrid_ = FlexTable.$create__();
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().setAttribute("align", "center");
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_DataGrid_ = FlexTable.$create__();
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().setAttribute("align", "center");
  this.m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(loadingIndicator);
  this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_.m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_user_cellview_client_DataGrid(this)));
 }
 //Factory method corresponding to constructor 'DataGrid(ProvidesKey)'.
 /** @template T @return {!DataGrid<T>} */
 static $create__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  DataGrid.$clinit();
  let $instance = new DataGrid();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 //Initialization from constructor 'DataGrid(ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_DataGrid__int__org_gwtproject_view_client_ProvidesKey(DataGrid.f_DEFAULT_PAGESIZE__org_gwtproject_user_cellview_client_DataGrid_, keyProvider);
 }
 /** @override */
 m_addColumnStyleName__int__java_lang_String(/** number */ index, /** ?string */ styleName) {
  this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.m_addColumnStyleName__int__java_lang_String(index, styleName);
  this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.m_addColumnStyleName__int__java_lang_String(index, styleName);
  this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.m_addColumnStyleName__int__java_lang_String(index, styleName);
 }
 
 m_clearTableWidth__() {
  $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().style);
  $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().style);
  $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_tableDataContainer__org_gwtproject_user_cellview_client_DataGrid_.style);
 }
 /** @override */
 m_onResize__() {
  this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_.m_onResize__();
 }
 /** @override */
 m_removeColumnStyleName__int__java_lang_String(/** number */ index, /** ?string */ styleName) {
  this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.m_removeColumnStyleName__int__java_lang_String(index, styleName);
  this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.m_removeColumnStyleName__int__java_lang_String(index, styleName);
  this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.m_removeColumnStyleName__int__java_lang_String(index, styleName);
 }
 
 m_setAlwaysShowScrollBars__boolean(/** boolean */ alwaysShowScrollBars) {
  this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_.m_setAlwaysShowScrollBars__boolean(alwaysShowScrollBars);
 }
 /** @override */
 m_setEmptyTableWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_DataGrid_.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(0, 0, widget);
  super.m_setEmptyTableWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 /** @override */
 m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_DataGrid_.m_setWidget__int__int__org_gwtproject_user_client_ui_Widget(0, 0, widget);
  super.m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(widget);
 }
 
 m_setMinimumTableWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().style, "minWidth", value, unit);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().style, "minWidth", value, unit);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(this.f_tableDataContainer__org_gwtproject_user_cellview_client_DataGrid_.style, "minWidth", value, unit);
 }
 
 m_setTableWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().style, value, unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_.m_getElement__().style, value, unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_tableDataContainer__org_gwtproject_user_cellview_client_DataGrid_.style, value, unit);
 }
 /** @override */
 m_doSetColumnWidth__int__java_lang_String(/** number */ column, /** ?string */ width) {
  if ($Equality.$same(width, null)) {
   $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.m_ensureTableColElement__int(column).style);
   $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.m_ensureTableColElement__int(column).style);
   $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.m_ensureTableColElement__int(column).style);
  } else {
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.m_ensureTableColElement__int(column).style, "width", width);
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.m_ensureTableColElement__int(column).style, "width", width);
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.m_ensureTableColElement__int(column).style, "width", width);
  }
 }
 /** @override */
 m_doSetHeaderVisible__boolean__boolean(/** boolean */ isFooter, /** boolean */ isVisible) {
  if (isFooter) {
   this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_.m_setFooterWidget__org_gwtproject_user_client_ui_Widget(isVisible ? this.f_tableFooterContainer__org_gwtproject_user_cellview_client_DataGrid_ : null);
  } else {
   this.f_headerPanel__org_gwtproject_user_cellview_client_DataGrid_.m_setHeaderWidget__org_gwtproject_user_client_ui_Widget(isVisible ? this.f_tableHeaderContainer__org_gwtproject_user_cellview_client_DataGrid_ : null);
  }
 }
 /** @override @return {Object} */
 m_getTableBodyElement__() {
  return this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_;
 }
 /** @override @return {Object} */
 m_getTableFootElement__() {
  return this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_;
 }
 /** @override @return {Object} */
 m_getTableHeadElement__() {
  return this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.f_section__org_gwtproject_user_cellview_client_DataGrid_TableWidget_;
 }
 /** @override */
 m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(/** LoadingState */ state) {
  let message = this.f_tableData__org_gwtproject_user_cellview_client_DataGrid;
  if ($Equality.$same(state, LoadingState.f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState)) {
   message = this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_DataGrid_;
  } else if ($Equality.$same(state, LoadingState.f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState) && this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_isEmpty__()) {
   message = this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_DataGrid_;
  }
  this.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_.m_setWidget__org_gwtproject_user_client_ui_Widget(message);
  super.m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state);
 }
 /** @override */
 m_refreshColumnWidths__() {
  super.m_refreshColumnWidths__();
  let columnCount = this.m_getRealColumnCount__();
  this.f_tableHeader__org_gwtproject_user_cellview_client_DataGrid.m_hideUnusedColumns__int_$pp_org_gwtproject_user_cellview_client(columnCount);
  this.f_tableData__org_gwtproject_user_cellview_client_DataGrid.m_hideUnusedColumns__int_$pp_org_gwtproject_user_cellview_client(columnCount);
  this.f_tableFooter__org_gwtproject_user_cellview_client_DataGrid.m_hideUnusedColumns__int_$pp_org_gwtproject_user_cellview_client(columnCount);
 }
 
 static $clinit() {
  DataGrid.$clinit = () =>{};
  DataGrid.$loadModules();
  AbstractCellTable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataGrid;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  TableSectionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.DataGrid.$1$impl');
  ResourcesAdapter = goog.module.get('org.gwtproject.user.cellview.client.DataGrid.ResourcesAdapter$impl');
  TableWidget = goog.module.get('org.gwtproject.user.cellview.client.DataGrid.TableWidget$impl');
  DataGrid__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');
  LoadingState = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
  CustomScrollPanel = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel$impl');
  FlexTable = goog.module.get('org.gwtproject.user.client.ui.FlexTable$impl');
  HeaderPanel = goog.module.get('org.gwtproject.user.client.ui.HeaderPanel$impl');
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DataGrid, 'org.gwtproject.user.cellview.client.DataGrid');

RequiresResize.$markImplementor(DataGrid);

/**@const {number}*/
DataGrid.f_DEFAULT_PAGESIZE__org_gwtproject_user_cellview_client_DataGrid_ = 50;
/**@type {Resources}*/
DataGrid.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_DataGrid_;

exports = DataGrid; 
//# sourceMappingURL=DataGrid.js.map