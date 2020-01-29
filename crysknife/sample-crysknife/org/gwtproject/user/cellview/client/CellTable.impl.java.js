goog.module('org.gwtproject.user.cellview.client.CellTable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCellTable = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
const TableSectionChangeHandler = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable.TableSectionChangeHandler$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let TableCellElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let TableColElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
let TableElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let TableLayout = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.Resources$impl');
let ResourcesAdapter = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.ResourcesAdapter$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.Style$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let LoadingState = goog.forwardDeclare('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
let DeckPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckPanel$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @extends {AbstractCellTable<T>}
 * @implements {TableSectionChangeHandler}
  */
class CellTable extends AbstractCellTable {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_colgroup__org_gwtproject_user_cellview_client_CellTable;
  /** @public {SimplePanel} */
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {SimplePanel} */
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {DeckPanel} */
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Style} */
  this.f_style__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Object} */
  this.f_table__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Object} */
  this.f_tbody__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Object} */
  this.f_tbodyLoading__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Object} */
  this.f_tbodyLoadingCell__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Object} */
  this.f_tfoot__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {Object} */
  this.f_thead__org_gwtproject_user_cellview_client_CellTable_;
  /** @public {boolean} */
  this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_ = false;
  /** @public {boolean} */
  this.f_removeColumnsOnHide__org_gwtproject_user_cellview_client_CellTable_ = false;
 }
 /**
  * @return {Resources}
  * @public
  */
 static m_getDefaultResources__() {
  if ($Equality.$same(CellTable.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTable_, null)) {
   CellTable.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTable_ = CellTable__ResourcesImpl.$create__();
  }
  return CellTable.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTable_;
 }
 /**
  * @param {Resources} resources
  * @return {Widget}
  * @public
  */
 static m_createDefaultLoadingIndicator__org_gwtproject_user_cellview_client_CellTable_Resources(resources) {
  let loadingImg = resources.m_cellTableLoading__();
  return $Equality.$same(loadingImg, null) ? null : Image.$create__org_gwtproject_resources_client_ImageResource(loadingImg);
 }
 /**
  * Factory method corresponding to constructor 'CellTable()'.
  * @template T
  * @return {!CellTable<T>}
  * @public
  */
 static $create__() {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__();
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable()'.
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__() {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int(CellTable.f_DEFAULT_PAGESIZE__org_gwtproject_user_cellview_client_CellTable_);
 }
 /**
  * Factory method corresponding to constructor 'CellTable(int)'.
  * @template T
  * @param {number} pageSize
  * @return {!CellTable<T>}
  * @public
  */
 static $create__int(pageSize) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__int(pageSize);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(int)'.
  * @param {number} pageSize
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__int(pageSize) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources(pageSize, CellTable.m_getDefaultResources__());
 }
 /**
  * Factory method corresponding to constructor 'CellTable(ProvidesKey)'.
  * @template T
  * @param {ProvidesKey<T>} keyProvider
  * @return {!CellTable<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(ProvidesKey)'.
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_view_client_ProvidesKey(CellTable.f_DEFAULT_PAGESIZE__org_gwtproject_user_cellview_client_CellTable_, keyProvider);
 }
 /**
  * Factory method corresponding to constructor 'CellTable(int, Resources)'.
  * @template T
  * @param {number} pageSize
  * @param {Resources} resources
  * @return {!CellTable<T>}
  * @public
  */
 static $create__int__org_gwtproject_user_cellview_client_CellTable_Resources(pageSize, resources) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources(pageSize, resources);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(int, Resources)'.
  * @param {number} pageSize
  * @param {Resources} resources
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources(pageSize, resources) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, resources, null);
 }
 /**
  * Factory method corresponding to constructor 'CellTable(int, ProvidesKey)'.
  * @template T
  * @param {number} pageSize
  * @param {ProvidesKey<T>} keyProvider
  * @return {!CellTable<T>}
  * @public
  */
 static $create__int__org_gwtproject_view_client_ProvidesKey(pageSize, keyProvider) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_view_client_ProvidesKey(pageSize, keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(int, ProvidesKey)'.
  * @param {number} pageSize
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_view_client_ProvidesKey(pageSize, keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, CellTable.m_getDefaultResources__(), keyProvider);
 }
 /**
  * Factory method corresponding to constructor 'CellTable(int, Resources, ProvidesKey)'.
  * @template T
  * @param {number} pageSize
  * @param {Resources} resources
  * @param {ProvidesKey<T>} keyProvider
  * @return {!CellTable<T>}
  * @public
  */
 static $create__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, resources, keyProvider) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, resources, keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(int, Resources, ProvidesKey)'.
  * @param {number} pageSize
  * @param {Resources} resources
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey(pageSize, resources, keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(pageSize, resources, keyProvider, CellTable.m_createDefaultLoadingIndicator__org_gwtproject_user_cellview_client_CellTable_Resources(resources));
 }
 /**
  * Factory method corresponding to constructor 'CellTable(int, Resources, ProvidesKey, Widget)'.
  * @template T
  * @param {number} pageSize
  * @param {Resources} resources
  * @param {ProvidesKey<T>} keyProvider
  * @param {Widget} loadingIndicator
  * @return {!CellTable<T>}
  * @public
  */
 static $create__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(pageSize, resources, keyProvider, loadingIndicator) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(pageSize, resources, keyProvider, loadingIndicator);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(int, Resources, ProvidesKey, Widget)'.
  * @param {number} pageSize
  * @param {Resources} resources
  * @param {ProvidesKey<T>} keyProvider
  * @param {Widget} loadingIndicator
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget(pageSize, resources, keyProvider, loadingIndicator) {
  this.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget__boolean__boolean(pageSize, resources, keyProvider, loadingIndicator, true, true);
 }
 /**
  * Factory method corresponding to constructor 'CellTable(int, Resources, ProvidesKey, Widget, boolean, boolean)'.
  * @template T
  * @param {number} pageSize
  * @param {Resources} resources
  * @param {ProvidesKey<T>} keyProvider
  * @param {Widget} loadingIndicator
  * @param {boolean} enableColGroup
  * @param {boolean} attachLoadingPanel
  * @return {!CellTable<T>}
  * @public
  */
 static $create__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget__boolean__boolean(pageSize, resources, keyProvider, loadingIndicator, enableColGroup, attachLoadingPanel) {
  CellTable.$clinit();
  let $instance = new CellTable();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget__boolean__boolean(pageSize, resources, keyProvider, loadingIndicator, enableColGroup, attachLoadingPanel);
  return $instance;
 }
 /**
  * Initialization from constructor 'CellTable(int, Resources, ProvidesKey, Widget, boolean, boolean)'.
  * @param {number} pageSize
  * @param {Resources} resources
  * @param {ProvidesKey<T>} keyProvider
  * @param {Widget} loadingIndicator
  * @param {boolean} enableColGroup
  * @param {boolean} attachLoadingPanel
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable__int__org_gwtproject_user_cellview_client_CellTable_Resources__org_gwtproject_view_client_ProvidesKey__org_gwtproject_user_client_ui_Widget__boolean__boolean(pageSize, resources, keyProvider, loadingIndicator, enableColGroup, attachLoadingPanel) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_Element__int__org_gwtproject_user_cellview_client_AbstractCellTable_Resources__org_gwtproject_view_client_ProvidesKey($Overlay.m_createTableElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), pageSize, ResourcesAdapter.$create__org_gwtproject_user_cellview_client_CellTable_Resources(resources), keyProvider);
  this.$init___$p_org_gwtproject_user_cellview_client_CellTable();
  this.f_style__org_gwtproject_user_cellview_client_CellTable_ = resources.m_cellTableStyle__();
  this.f_style__org_gwtproject_user_cellview_client_CellTable_.m_ensureInjected__();
  this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_ = enableColGroup;
  this.f_table__org_gwtproject_user_cellview_client_CellTable_ = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), TableElement_$Overlay));
  this.f_table__org_gwtproject_user_cellview_client_CellTable_.cellSpacing = 0;
  if (enableColGroup) {
   this.f_colgroup__org_gwtproject_user_cellview_client_CellTable = $Overlay.m_createColGroupElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
   this.f_table__org_gwtproject_user_cellview_client_CellTable_.appendChild(this.f_colgroup__org_gwtproject_user_cellview_client_CellTable);
  } else {
   this.f_colgroup__org_gwtproject_user_cellview_client_CellTable = null;
  }
  this.f_thead__org_gwtproject_user_cellview_client_CellTable_ = this.f_table__org_gwtproject_user_cellview_client_CellTable_.createTHead();
  if (this.f_table__org_gwtproject_user_cellview_client_CellTable_.tBodies.length > 0) {
   this.f_tbody__org_gwtproject_user_cellview_client_CellTable_ = /**@type {Object} */ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(this.f_table__org_gwtproject_user_cellview_client_CellTable_.tBodies, 0), TableSectionElement_$Overlay));
  } else {
   this.f_tbody__org_gwtproject_user_cellview_client_CellTable_ = $Overlay.m_createTBodyElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
   this.f_table__org_gwtproject_user_cellview_client_CellTable_.appendChild(this.f_tbody__org_gwtproject_user_cellview_client_CellTable_);
  }
  this.f_tbodyLoading__org_gwtproject_user_cellview_client_CellTable_ = $Overlay.m_createTBodyElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  if (attachLoadingPanel) {
   this.f_table__org_gwtproject_user_cellview_client_CellTable_.appendChild(this.f_tbodyLoading__org_gwtproject_user_cellview_client_CellTable_);
  }
  this.f_tfoot__org_gwtproject_user_cellview_client_CellTable_ = this.f_table__org_gwtproject_user_cellview_client_CellTable_.createTFoot();
  {
   this.f_tbodyLoadingCell__org_gwtproject_user_cellview_client_CellTable_ = $Overlay.m_createTDElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
   let tr = $Overlay.m_createTRElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
   this.f_tbodyLoading__org_gwtproject_user_cellview_client_CellTable_.appendChild(tr);
   tr.appendChild(this.f_tbodyLoadingCell__org_gwtproject_user_cellview_client_CellTable_);
   this.f_tbodyLoadingCell__org_gwtproject_user_cellview_client_CellTable_.align = "center";
   this.f_tbodyLoadingCell__org_gwtproject_user_cellview_client_CellTable_.appendChild(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_.m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_);
   this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_.m_add__org_gwtproject_user_client_ui_Widget(this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_CellTable_);
   this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_.m_add__org_gwtproject_user_client_ui_Widget(this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellTable_);
   this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellTable_.m_setStyleName__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_CellTable_.m_cellTableLoading__());
  }
  this.m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(loadingIndicator);
  let eventTypes = /**@type {!HashSet<?string>} */ (HashSet.$create__());
  eventTypes.add(BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents);
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, eventTypes);
 }
 /**
  * @override
  * @param {number} index
  * @param {?string} styleName
  * @public
  */
 m_addColumnStyleName__int__java_lang_String(index, styleName) {
  this.m_assertColumnGroupEnabled__java_lang_String_$p_org_gwtproject_user_cellview_client_CellTable("Cannot add column style when colgroup is disabled");
  Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(index), styleName);
 }
 /**
  * @return {number}
  * @public
  */
 m_getBodyHeight__() {
  return Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.f_tbody__org_gwtproject_user_cellview_client_CellTable_);
 }
 /**
  * @return {number}
  * @public
  */
 m_getHeaderHeight__() {
  return Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.f_thead__org_gwtproject_user_cellview_client_CellTable_);
 }
 /**
  * @return {Object}
  * @public
  */
 m_getTableLoadingSection__() {
  return this.f_tbodyLoading__org_gwtproject_user_cellview_client_CellTable_;
 }
 /**
  * @override
  * @param {Object} newTBody
  * @public
  */
 m_onTableBodyChange__org_gwtproject_dom_client_TableSectionElement(newTBody) {
  this.f_tbody__org_gwtproject_user_cellview_client_CellTable_ = newTBody;
 }
 /**
  * @override
  * @param {Object} newTFoot
  * @public
  */
 m_onTableFootChange__org_gwtproject_dom_client_TableSectionElement(newTFoot) {
  this.f_tfoot__org_gwtproject_user_cellview_client_CellTable_ = newTFoot;
 }
 /**
  * @override
  * @param {Object} newTHead
  * @public
  */
 m_onTableHeadChange__org_gwtproject_dom_client_TableSectionElement(newTHead) {
  this.f_thead__org_gwtproject_user_cellview_client_CellTable_ = newTHead;
 }
 /**
  * @override
  * @param {number} index
  * @param {?string} styleName
  * @public
  */
 m_removeColumnStyleName__int__java_lang_String(index, styleName) {
  this.m_assertColumnGroupEnabled__java_lang_String_$p_org_gwtproject_user_cellview_client_CellTable("Cannot remove column style when colgroup is disabled");
  if (index >= Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_colgroup__org_gwtproject_user_cellview_client_CellTable)) {
   return;
  }
  Element_$Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(index), styleName);
 }
 /**
  * @override
  * @param {Column<T, ?>} column
  * @param {?string} width
  * @public
  */
 m_setColumnWidth__org_gwtproject_user_cellview_client_Column__java_lang_String(column, width) {
  this.m_assertColumnGroupEnabled__java_lang_String_$p_org_gwtproject_user_cellview_client_CellTable("Cannot set column width when colgroup is disabled");
  super.m_setColumnWidth__org_gwtproject_user_cellview_client_Column__java_lang_String(column, width);
 }
 /**
  * @override
  * @param {Column<T, ?>} column
  * @param {number} width
  * @param {Unit} unit
  * @public
  */
 m_setColumnWidth__org_gwtproject_user_cellview_client_Column__double__org_gwtproject_dom_style_shared_Unit(column, width, unit) {
  super.m_setColumnWidth__org_gwtproject_user_cellview_client_Column__double__org_gwtproject_dom_style_shared_Unit(column, width, unit);
 }
 /**
  * @override
  * @param {Widget} widget
  * @public
  */
 m_setEmptyTableWidget__org_gwtproject_user_client_ui_Widget(widget) {
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_CellTable_.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
  super.m_setEmptyTableWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @override
  * @param {Widget} widget
  * @public
  */
 m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(widget) {
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellTable_.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
  super.m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @param {boolean} isFixed
  * @public
  */
 m_setTableLayoutFixed__boolean(isFixed) {
  if (isFixed && !this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Cannot set table to fixed layout when colgroup is disabled"));
  }
  if (isFixed) {
   Style_$Overlay.m_setTableLayout__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TableLayout(this.f_table__org_gwtproject_user_cellview_client_CellTable_.style, TableLayout.f_FIXED__org_gwtproject_dom_style_shared_TableLayout);
  } else {
   Style_$Overlay.m_clearTableLayout__$devirt__org_gwtproject_dom_client_Style(this.f_table__org_gwtproject_user_cellview_client_CellTable_.style);
  }
 }
 /**
  * @param {?string} width
  * @param {boolean} isFixedLayout
  * @public
  */
 m_setWidth__java_lang_String__boolean(width, isFixedLayout) {
  super.m_setWidth__java_lang_String(width);
  this.m_setTableLayoutFixed__boolean(isFixedLayout);
 }
 /**
  * @param {boolean} removeColumnsOnHide
  * @public
  */
 m_setRemoveColumnsOnHide__boolean(removeColumnsOnHide) {
  this.f_removeColumnsOnHide__org_gwtproject_user_cellview_client_CellTable_ = removeColumnsOnHide;
 }
 /**
  * @override
  * @param {number} column
  * @param {?string} width
  * @public
  */
 m_doSetColumnWidth__int__java_lang_String(column, width) {
  if (this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_) {
   if ($Equality.$same(width, null)) {
    Style_$Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(column).style);
   } else {
    Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(column).style, "width", width);
   }
  }
 }
 /**
  * @override
  * @param {boolean} isFooter
  * @param {boolean} isVisible
  * @public
  */
 m_doSetHeaderVisible__boolean__boolean(isFooter, isVisible) {
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(isFooter ? this.f_tfoot__org_gwtproject_user_cellview_client_CellTable_ : this.f_thead__org_gwtproject_user_cellview_client_CellTable_, isVisible);
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getTableBodyElement__() {
  return this.f_tbody__org_gwtproject_user_cellview_client_CellTable_;
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getTableFootElement__() {
  return this.f_tfoot__org_gwtproject_user_cellview_client_CellTable_;
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getTableHeadElement__() {
  return this.f_thead__org_gwtproject_user_cellview_client_CellTable_;
 }
 /**
  * @override
  * @param {LoadingState} state
  * @public
  */
 m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state) {
  let message = null;
  if ($Equality.$same(state, LoadingState.f_LOADING__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState)) {
   message = this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellTable_;
  } else if ($Equality.$same(state, LoadingState.f_LOADED__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState) && this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_isEmpty__()) {
   message = this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_CellTable_;
  }
  if (!$Equality.$same(message, null)) {
   this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_.m_showWidget__int(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(message));
  }
  this.f_tbodyLoadingCell__org_gwtproject_user_cellview_client_CellTable_.colSpan = Math.max(1, this.m_getRealColumnCount__());
  this.m_showOrHide__org_gwtproject_dom_client_Element__boolean_$pp_org_gwtproject_user_cellview_client(this.m_getChildContainer__(), $Equality.$same(message, null));
  this.m_showOrHide__org_gwtproject_dom_client_Element__boolean_$pp_org_gwtproject_user_cellview_client(this.f_tbodyLoading__org_gwtproject_user_cellview_client_CellTable_, !$Equality.$same(message, null));
  super.m_onLoadingStateChanged__org_gwtproject_user_cellview_client_LoadingStateChangeEvent_LoadingState(state);
 }
 /**
  * @override
  * @public
  */
 m_refreshColumnWidths__() {
  super.m_refreshColumnWidths__();
  if (this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_) {
   let colCount = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_colgroup__org_gwtproject_user_cellview_client_CellTable);
   let lastColumn = this.m_getRealColumnCount__();
   for (let i = 0; i < lastColumn; i++) {
    Style_$Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(this.m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(i).style);
   }
   for (let i_1 = colCount - 1; i_1 >= lastColumn; i_1--) {
    if (this.f_removeColumnsOnHide__org_gwtproject_user_cellview_client_CellTable_) {
     this.f_colgroup__org_gwtproject_user_cellview_client_CellTable.removeChild(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_colgroup__org_gwtproject_user_cellview_client_CellTable, i_1));
    } else {
     this.m_doSetColumnWidth__int__java_lang_String(i_1, "0px");
     Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(i_1).style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
    }
   }
  }
 }
 /**
  * @override
  * @public
  */
 m_doAttachChildren__() {
  super.m_doAttachChildren__();
  this.m_doAttach__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_);
 }
 /**
  * @override
  * @public
  */
 m_doDetachChildren__() {
  super.m_doDetachChildren__();
  this.m_doDetach__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_cellview_client(this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_);
 }
 /**
  * @param {?string} message
  * @public
  */
 m_assertColumnGroupEnabled__java_lang_String_$p_org_gwtproject_user_cellview_client_CellTable(message) {
  if (!this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(message));
  }
 }
 /**
  * @param {number} index
  * @return {Object}
  * @public
  */
 m_ensureTableColElement__int_$p_org_gwtproject_user_cellview_client_CellTable(index) {
  for (let i = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_colgroup__org_gwtproject_user_cellview_client_CellTable); i <= index; i++) {
   this.f_colgroup__org_gwtproject_user_cellview_client_CellTable.appendChild($Overlay.m_createColElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  }
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getChild__$devirt__org_gwtproject_dom_client_Node__int(this.f_colgroup__org_gwtproject_user_cellview_client_CellTable, index)), TableColElement_$Overlay));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_CellTable() {
  this.f_emptyTableWidgetContainer__org_gwtproject_user_cellview_client_CellTable_ = SimplePanel.$create__();
  this.f_loadingIndicatorContainer__org_gwtproject_user_cellview_client_CellTable_ = SimplePanel.$create__();
  this.f_messagesPanel__org_gwtproject_user_cellview_client_CellTable_ = DeckPanel.$create__();
  this.f_colGroupEnabled__org_gwtproject_user_cellview_client_CellTable_ = true;
  this.f_removeColumnsOnHide__org_gwtproject_user_cellview_client_CellTable_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  CellTable.$clinit = () =>{};
  CellTable.$loadModules();
  AbstractCellTable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellTable;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  TableColElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
  TableElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableElement.$Overlay$impl');
  TableSectionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  TableLayout = goog.module.get('org.gwtproject.dom.style.shared.TableLayout$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  ResourcesAdapter = goog.module.get('org.gwtproject.user.cellview.client.CellTable.ResourcesAdapter$impl');
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
  LoadingState = goog.module.get('org.gwtproject.user.cellview.client.LoadingStateChangeEvent.LoadingState$impl');
  DeckPanel = goog.module.get('org.gwtproject.user.client.ui.DeckPanel$impl');
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(CellTable, 'org.gwtproject.user.cellview.client.CellTable');

TableSectionChangeHandler.$markImplementor(CellTable);

/** @public {number} @const */
CellTable.f_DEFAULT_PAGESIZE__org_gwtproject_user_cellview_client_CellTable_ = 15;
/** @public {Resources} */
CellTable.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_CellTable_;

exports = CellTable; 
//# sourceMappingURL=CellTable.js.map