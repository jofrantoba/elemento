goog.module('org.gwtproject.user.cellview.client.AbstractCellTable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractHasData = goog.require('org.gwtproject.user.cellview.client.AbstractHasData$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let HasCell = goog.forwardDeclare('org.gwtproject.cell.client.HasCell$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let HtmlTableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let TableCellElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.$4$impl');
let CellTableKeyboardSelectionHandler = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.CellTableKeyboardSelectionHandler$impl');
let Impl = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Impl$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Resources$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Template$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let CellTableBuilder = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTableBuilder$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
let Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');
let ColumnSortList = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortList$impl');
let DefaultCellTableBuilder = goog.forwardDeclare('org.gwtproject.user.cellview.client.DefaultCellTableBuilder$impl');
let DefaultHeaderOrFooterBuilder = goog.forwardDeclare('org.gwtproject.user.cellview.client.DefaultHeaderOrFooterBuilder$impl');
let FooterBuilder = goog.forwardDeclare('org.gwtproject.user.cellview.client.FooterBuilder$impl');
let KeyboardSelectionPolicy = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.cellview.client.Header$impl');
let HeaderBuilder = goog.forwardDeclare('org.gwtproject.user.cellview.client.HeaderBuilder$impl');
let RowHoverEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent$impl');
let RowHoverEvent_Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');
let HoveringScope = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope$impl');
let RowStyles = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowStyles$impl');
let SafeHtmlHeader = goog.forwardDeclare('org.gwtproject.user.cellview.client.SafeHtmlHeader$impl');
let TextHeader = goog.forwardDeclare('org.gwtproject.user.cellview.client.TextHeader$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 * @template T
 * @extends {AbstractHasData<T>}
  */
class AbstractCellTable extends AbstractHasData {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_cellIsEditing__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {List<Column<T, ?>>}*/
  this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {Map<Column<T, ?>, ?string>}*/
  this.f_columnWidths__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_columnWidthsDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {Map<Integer, ?string>}*/
  this.f_columnWidthsByIndex__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {number}*/
  this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  /**@type {boolean}*/
  this.f_dependsOnSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {Widget}*/
  this.f_emptyTableWidget__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {FooterBuilder<T>}*/
  this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_footerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {List<Header<?>>}*/
  this.f_footers__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_handlesSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {HeaderBuilder<T>}*/
  this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_headerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {List<Header<?>>}*/
  this.f_headers__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_headersDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {Object}*/
  this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_isInteractive__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {number}*/
  this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  /**@type {number}*/
  this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  /**@type {number}*/
  this.f_lastKeyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  /**@type {Widget}*/
  this.f_loadingIndicator__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {Resources}*/
  this.f_resources__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {RowStyles<T>}*/
  this.f_rowStyles__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {ColumnSortList}*/
  this.f_sortList__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {Style}*/
  this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {CellTableBuilder<T>}*/
  this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_;
  /**@type {boolean}*/
  this.f_updatingSortList__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {boolean}*/
  this.f_skipRowHoverCheck__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {boolean}*/
  this.f_skipRowHoverFloatElementCheck__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  /**@type {boolean}*/
  this.f_skipRowHoverStyleUpdate__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
 }
 /** @return {boolean} */
 static m_isColumnInteractive__org_gwtproject_cell_client_HasCell(/** HasCell<?, ?> */ column) {
  AbstractCellTable.$clinit();
  let consumedEvents = column.m_getCell__().m_getConsumedEvents__();
  return !$Equality.$same(consumedEvents, null) && consumedEvents.size() > 0;
 }
 /** @return {SafeHtml} */
 static m_tableSectionToSafeHtml__org_gwtproject_dom_builder_shared_TableSectionBuilder__java_lang_String(/** TableSectionBuilder */ section, /** ?string */ tag) {
  if (!HtmlTableSectionBuilder.$isInstance(section)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Only HtmlTableSectionBuilder is supported at this time"));
  }
  let htmlSection = /**@type {HtmlTableSectionBuilder}*/ ($Casts.$to(section, HtmlTableSectionBuilder));
  let rawHtml = htmlSection.m_asSafeHtml__().m_asString__();
  $Asserts.$assertWithMessage(j_l_String.m_length__java_lang_String(tag) == 5, "Unrecognized tag: " + j_l_String.m_valueOf__java_lang_Object(tag));
  $Asserts.$assertWithMessage(j_l_String.m_startsWith__java_lang_String__java_lang_String(rawHtml, "<" + j_l_String.m_valueOf__java_lang_Object(tag) + ">"), AbstractCellTable.f_MALFORMED_HTML_SECTION__org_gwtproject_user_cellview_client_AbstractCellTable_);
  $Asserts.$assertWithMessage(j_l_String.m_endsWith__java_lang_String__java_lang_String(rawHtml, "</" + j_l_String.m_valueOf__java_lang_Object(tag) + ">"), AbstractCellTable.f_MALFORMED_HTML_SECTION__org_gwtproject_user_cellview_client_AbstractCellTable_);
  rawHtml = j_l_String.m_substring__java_lang_String__int__int(rawHtml, 7, j_l_String.m_length__java_lang_String(rawHtml) - 8);
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(rawHtml);
 }
 //Initialization from constructor 'AbstractCellTable(Element, int, Resources, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_Element__int__org_gwtproject_user_cellview_client_AbstractCellTable_Resources__org_gwtproject_view_client_ProvidesKey(/** Object */ elem, /** number */ pageSize, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_dom_client_Element__int__org_gwtproject_view_client_ProvidesKey(elem, pageSize, keyProvider);
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  this.f_resources__org_gwtproject_user_cellview_client_AbstractCellTable_ = resources;
  this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_ = resources.m_style__();
  this.m_init___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
 }
 //Initialization from constructor 'AbstractCellTable(Widget, int, Resources, ProvidesKey)'.
 
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_user_client_ui_Widget__int__org_gwtproject_user_cellview_client_AbstractCellTable_Resources__org_gwtproject_view_client_ProvidesKey(/** Widget */ widget, /** number */ pageSize, /** Resources */ resources, /** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHasData__org_gwtproject_user_client_ui_Widget__int__org_gwtproject_view_client_ProvidesKey(widget, pageSize, keyProvider);
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  this.f_resources__org_gwtproject_user_cellview_client_AbstractCellTable_ = resources;
  this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_ = resources.m_style__();
  this.m_init___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column(/** Column<T, ?> */ col) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column(this.m_getColumnCount__(), col);
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header(/** Column<T, ?> */ col, /** Header<?> */ header) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header(this.m_getColumnCount__(), col, header);
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(/** Column<T, ?> */ col, /** Header<?> */ header, /** Header<?> */ footer) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(this.m_getColumnCount__(), col, header, footer);
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column__java_lang_String(/** Column<T, ?> */ col, /** ?string */ headerString) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__java_lang_String(this.m_getColumnCount__(), col, headerString);
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column__org_gwtproject_safehtml_shared_SafeHtml(/** Column<T, ?> */ col, /** SafeHtml */ headerHtml) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_safehtml_shared_SafeHtml(this.m_getColumnCount__(), col, headerHtml);
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column__java_lang_String__java_lang_String(/** Column<T, ?> */ col, /** ?string */ headerString, /** ?string */ footerString) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__java_lang_String__java_lang_String(this.m_getColumnCount__(), col, headerString, footerString);
 }
 
 m_addColumn__org_gwtproject_user_cellview_client_Column__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** Column<T, ?> */ col, /** SafeHtml */ headerHtml, /** SafeHtml */ footerHtml) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(this.m_getColumnCount__(), col, headerHtml, footerHtml);
 }
 /** @return {HandlerRegistration} */
 m_addColumnSortHandler__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler(/** Handler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ColumnSortEvent.m_getType__());
 }
 /** @abstract */
 m_addColumnStyleName__int__java_lang_String(/** number */ index, /** ?string */ styleName) {}
 /** @return {HandlerRegistration} */
 m_addRowHoverHandler__org_gwtproject_user_cellview_client_RowHoverEvent_Handler(/** RowHoverEvent_Handler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, RowHoverEvent.m_getType__());
 }
 
 m_clearColumnWidth__org_gwtproject_user_cellview_client_Column(/** Column<T, ?> */ column) {
  this.f_columnWidths__org_gwtproject_user_cellview_client_AbstractCellTable_.remove(column);
  this.m_updateColumnWidthImpl__org_gwtproject_user_cellview_client_Column__java_lang_String_$p_org_gwtproject_user_cellview_client_AbstractCellTable(column, null);
 }
 
 m_clearColumnWidth__java_lang_Integer(/** Integer */ column) {
  this.f_columnWidthsByIndex__org_gwtproject_user_cellview_client_AbstractCellTable_.remove(column);
  if (column.m_intValue__() >= this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ = -1;
   for (let $iterator = this.f_columnWidthsByIndex__org_gwtproject_user_cellview_client_AbstractCellTable_.keySet().m_iterator__(); $iterator.m_hasNext__(); ) {
    let index = /**@type {Integer}*/ ($Casts.$to($iterator.m_next__(), Integer));
    this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ = Math.max(this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_, index.m_intValue__());
   }
  }
  if (column.m_intValue__() < this.m_getRealColumnCount__()) {
   this.m_doSetColumnWidth__int__java_lang_String(column.m_intValue__(), null);
  }
 }
 
 m_flush__() {
  this.m_getPresenter___$pp_org_gwtproject_user_cellview_client().m_flush__();
 }
 /** @return {Column<T, ?>} */
 m_getColumn__int(/** number */ col) {
  this.m_checkColumnBounds__int_$p_org_gwtproject_user_cellview_client_AbstractCellTable(col);
  return /**@type {Column<T, *>}*/ ($Casts.$to(this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(col), Column));
 }
 /** @return {number} */
 m_getColumnCount__() {
  return this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.size();
 }
 /** @return {number} */
 m_getColumnIndex__org_gwtproject_user_cellview_client_Column(/** Column<T, ?> */ column) {
  return this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.indexOf(column);
 }
 /** @return {ColumnSortList} */
 m_getColumnSortList__() {
  return this.f_sortList__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {?string} */
 m_getColumnWidth__org_gwtproject_user_cellview_client_Column(/** Column<T, ?> */ column) {
  return /**@type {?string}*/ ($Casts.$to(this.f_columnWidths__org_gwtproject_user_cellview_client_AbstractCellTable_.get(column), j_l_String));
 }
 /** @return {Widget} */
 m_getEmptyTableWidget__() {
  return this.f_emptyTableWidget__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {Header<?>} */
 m_getFooter__int(/** number */ index) {
  return /**@type {Header<*>}*/ ($Casts.$to(this.f_footers__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(index), Header));
 }
 /** @return {FooterBuilder<T>} */
 m_getFooterBuilder__() {
  return this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {Header<?>} */
 m_getHeader__int(/** number */ index) {
  return /**@type {Header<*>}*/ ($Casts.$to(this.f_headers__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(index), Header));
 }
 /** @return {HeaderBuilder<T>} */
 m_getHeaderBuilder__() {
  return this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {number} */
 m_getKeyboardSelectedColumn__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__()) ? -1 : this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {number} */
 m_getKeyboardSelectedSubRow__() {
  return $Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__()) ? -1 : this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {Widget} */
 m_getLoadingIndicator__() {
  return this.f_loadingIndicator__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {Resources} */
 m_getResources__() {
  return this.f_resources__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {Object} */
 m_getRowElement__int(/** number */ row) {
  this.m_flush__();
  return this.m_getChildElement__int(row);
 }
 /** @return {RowStyles<T>} */
 m_getRowStyles__() {
  return this.f_rowStyles__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column(/** number */ beforeIndex, /** Column<T, ?> */ col) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(beforeIndex, col, /**@type {Header<*>}*/ (null), /**@type {Header<*>}*/ (null));
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header(/** number */ beforeIndex, /** Column<T, ?> */ col, /** Header<?> */ header) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(beforeIndex, col, header, null);
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(/** number */ beforeIndex, /** Column<T, ?> */ col, /** Header<?> */ header, /** Header<?> */ footer) {
  if (beforeIndex != this.m_getColumnCount__()) {
   this.m_checkColumnBounds__int_$p_org_gwtproject_user_cellview_client_AbstractCellTable(beforeIndex);
  }
  this.f_headers__org_gwtproject_user_cellview_client_AbstractCellTable_.addAtIndex(beforeIndex, header);
  this.f_footers__org_gwtproject_user_cellview_client_AbstractCellTable_.addAtIndex(beforeIndex, footer);
  this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.addAtIndex(beforeIndex, col);
  if (beforeIndex <= this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ = Math.min(this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ + 1, this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.size() - 1);
  }
  if (AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(col) && ((this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ >= this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.size()) || !AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(/**@type {Column<T, *>}*/ ($Casts.$to(this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_), Column))))) {
   this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ = beforeIndex;
  }
  let consumedEvents = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  {
   let cellEvents = col.m_getCell__().m_getConsumedEvents__();
   if (!$Equality.$same(cellEvents, null)) {
    consumedEvents.addAll(cellEvents);
   }
  }
  if (!$Equality.$same(header, null)) {
   let headerEvents = header.m_getCell__().m_getConsumedEvents__();
   if (!$Equality.$same(headerEvents, null)) {
    consumedEvents.addAll(headerEvents);
   }
  }
  if (!$Equality.$same(footer, null)) {
   let footerEvents = footer.m_getCell__().m_getConsumedEvents__();
   if (!$Equality.$same(footerEvents, null)) {
    consumedEvents.addAll(footerEvents);
   }
  }
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, consumedEvents);
  this.f_headersDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
  this.m_refreshColumnsAndRedraw___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column__java_lang_String(/** number */ beforeIndex, /** Column<T, ?> */ col, /** ?string */ headerString) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(beforeIndex, col, TextHeader.$create__java_lang_String(headerString), null);
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_safehtml_shared_SafeHtml(/** number */ beforeIndex, /** Column<T, ?> */ col, /** SafeHtml */ headerHtml) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(beforeIndex, col, SafeHtmlHeader.$create__org_gwtproject_safehtml_shared_SafeHtml(headerHtml), null);
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column__java_lang_String__java_lang_String(/** number */ beforeIndex, /** Column<T, ?> */ col, /** ?string */ headerString, /** ?string */ footerString) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(beforeIndex, col, TextHeader.$create__java_lang_String(headerString), TextHeader.$create__java_lang_String(footerString));
 }
 
 m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ beforeIndex, /** Column<T, ?> */ col, /** SafeHtml */ headerHtml, /** SafeHtml */ footerHtml) {
  this.m_insertColumn__int__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__org_gwtproject_user_cellview_client_Header(beforeIndex, col, SafeHtmlHeader.$create__org_gwtproject_safehtml_shared_SafeHtml(headerHtml), SafeHtmlHeader.$create__org_gwtproject_safehtml_shared_SafeHtml(footerHtml));
 }
 /** @return {boolean} */
 m_isAutoFooterRefreshDisabled__() {
  return this.f_footerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {boolean} */
 m_isAutoHeaderRefreshDisabled__() {
  return this.f_headerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {boolean} */
 m_isSkipRowHoverCheck__() {
  return this.f_skipRowHoverCheck__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {boolean} */
 m_isSkipRowHoverFloatElementCheck__() {
  return this.f_skipRowHoverFloatElementCheck__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @return {boolean} */
 m_isSkipRowHoverStyleUpdate__() {
  return this.f_skipRowHoverStyleUpdate__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 
 m_redrawFooters__() {
  this.m_createHeaders__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(true);
 }
 
 m_redrawHeaders__() {
  this.m_createHeaders__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(false);
 }
 
 m_removeColumn__org_gwtproject_user_cellview_client_Column(/** Column<T, ?> */ col) {
  let index = this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.indexOf(col);
  if (index < 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("The specified column is not part of this table."));
  }
  this.m_removeColumn__int(index);
 }
 
 m_removeColumn__int(/** number */ index) {
  if (index < 0 || index >= this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.size()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("The specified column index is out of bounds."));
  }
  this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.removeAtIndex(index);
  this.f_headers__org_gwtproject_user_cellview_client_AbstractCellTable_.removeAtIndex(index);
  this.f_footers__org_gwtproject_user_cellview_client_AbstractCellTable_.removeAtIndex(index);
  if (index <= this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ && this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ > 0) {
   this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_--;
  }
  this.f_headersDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
  this.m_refreshColumnsAndRedraw___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
 }
 /** @abstract */
 m_removeColumnStyleName__int__java_lang_String(/** number */ index, /** ?string */ styleName) {}
 
 m_setAutoFooterRefreshDisabled__boolean(/** boolean */ disabled) {
  this.f_footerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_ = disabled;
 }
 
 m_setAutoHeaderRefreshDisabled__boolean(/** boolean */ disabled) {
  this.f_headerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_ = disabled;
 }
 
 m_setColumnWidth__org_gwtproject_user_cellview_client_Column__java_lang_String(/** Column<T, ?> */ column, /** ?string */ width) {
  this.f_columnWidths__org_gwtproject_user_cellview_client_AbstractCellTable_.put(column, width);
  this.m_updateColumnWidthImpl__org_gwtproject_user_cellview_client_Column__java_lang_String_$p_org_gwtproject_user_cellview_client_AbstractCellTable(column, width);
 }
 
 m_setColumnWidth__org_gwtproject_user_cellview_client_Column__double__org_gwtproject_dom_style_shared_Unit(/** Column<T, ?> */ column, /** number */ width, /** Unit */ unit) {
  this.m_setColumnWidth__org_gwtproject_user_cellview_client_Column__java_lang_String(column, width + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 
 m_setColumnWidth__int__double__org_gwtproject_dom_style_shared_Unit(/** number */ column, /** number */ width, /** Unit */ unit) {
  this.m_setColumnWidth__int__java_lang_String(column, width + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 
 m_setColumnWidth__int__java_lang_String(/** number */ column, /** ?string */ width) {
  this.f_columnWidthsByIndex__org_gwtproject_user_cellview_client_AbstractCellTable_.put(Integer.m_valueOf__int(column), width);
  this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ = Math.max(this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_, column);
  if (column < this.m_getRealColumnCount__()) {
   this.m_doSetColumnWidth__int__java_lang_String(column, width);
  }
 }
 
 m_setEmptyTableWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.f_emptyTableWidget__org_gwtproject_user_cellview_client_AbstractCellTable_ = widget;
 }
 
 m_setFooterBuilder__org_gwtproject_user_cellview_client_FooterBuilder(/** FooterBuilder<T> */ builder) {
  $Asserts.$assertWithMessage(!$Equality.$same(builder, null), "builder cannot be null");
  this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_ = builder;
  this.m_redrawFooters__();
 }
 
 m_setHeaderBuilder__org_gwtproject_user_cellview_client_HeaderBuilder(/** HeaderBuilder<T> */ builder) {
  $Asserts.$assertWithMessage(!$Equality.$same(builder, null), "builder cannot be null");
  this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_ = builder;
  this.m_redrawHeaders__();
 }
 
 m_setKeyboardSelectedColumn__int(/** number */ column) {
  this.m_setKeyboardSelectedColumn__int__boolean(column, true);
 }
 
 m_setKeyboardSelectedColumn__int__boolean(/** number */ column, /** boolean */ stealFocus) {
  $Asserts.$assertWithMessage(column >= 0, "Column must be zero or greater");
  if ($Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__())) {
   return;
  }
  this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ = column;
  this.m_setKeyboardSelectedRow__int__int__boolean(this.m_getKeyboardSelectedRow__(), this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_, stealFocus);
 }
 /** @override */
 m_setKeyboardSelectedRow__int__boolean(/** number */ row, /** boolean */ stealFocus) {
  this.m_setKeyboardSelectedRow__int__int__boolean(row, 0, stealFocus);
 }
 
 m_setKeyboardSelectedRow__int__int__boolean(/** number */ row, /** number */ subrow, /** boolean */ stealFocus) {
  this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_ = subrow;
  super.m_setKeyboardSelectedRow__int__boolean(row, stealFocus);
 }
 
 m_setLoadingIndicator__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.f_loadingIndicator__org_gwtproject_user_cellview_client_AbstractCellTable_ = widget;
 }
 
 m_setRowStyles__org_gwtproject_user_cellview_client_RowStyles(/** RowStyles<T> */ rowStyles) {
  this.f_rowStyles__org_gwtproject_user_cellview_client_AbstractCellTable_ = rowStyles;
 }
 
 m_setSkipRowHoverCheck__boolean(/** boolean */ skipRowHoverCheck) {
  this.f_skipRowHoverCheck__org_gwtproject_user_cellview_client_AbstractCellTable_ = skipRowHoverCheck;
 }
 
 m_setSkipRowHoverFloatElementCheck__boolean(/** boolean */ skipRowHoverFloatElementCheck) {
  this.f_skipRowHoverFloatElementCheck__org_gwtproject_user_cellview_client_AbstractCellTable_ = skipRowHoverFloatElementCheck;
 }
 
 m_setSkipRowHoverStyleUpdate__boolean(/** boolean */ skipRowHoverStyleUpdate) {
  this.f_skipRowHoverStyleUpdate__org_gwtproject_user_cellview_client_AbstractCellTable_ = skipRowHoverStyleUpdate;
 }
 
 m_setTableBuilder__org_gwtproject_user_cellview_client_CellTableBuilder(/** CellTableBuilder<T> */ tableBuilder) {
  $Asserts.$assertWithMessage(!$Equality.$same(tableBuilder, null), "tableBuilder cannot be null");
  this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_ = tableBuilder;
  this.m_redraw__();
 }
 /** @override @return {Object} */
 m_convertToElements__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  return AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_.m_convertToSectionElement__org_gwtproject_user_cellview_client_AbstractCellTable__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(this, "tbody", html);
 }
 /** @override @return {boolean} */
 m_dependsOnSelection__() {
  return this.f_dependsOnSelection__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @abstract */
 m_doSetColumnWidth__int__java_lang_String(/** number */ column, /** ?string */ width) {}
 /** @abstract */
 m_doSetHeaderVisible__boolean__boolean(/** boolean */ isFooter, /** boolean */ isVisible) {}
 /** @override @return {Object} */
 m_getChildContainer__() {
  return this.m_getTableBodyElement__();
 }
 /** @override @return {Object} */
 m_getChildElement__int(/** number */ row) {
  return this.m_getSubRowElement__int__int(row + this.m_getPageStart__(), 0);
 }
 /** @override @return {Object} */
 m_getKeyboardSelectedElement__() {
  return this.m_getKeyboardSelectedElement__org_gwtproject_dom_client_TableCellElement_$p_org_gwtproject_user_cellview_client_AbstractCellTable(this.m_getKeyboardSelectedTableCellElement___$p_org_gwtproject_user_cellview_client_AbstractCellTable());
 }
 /** @return {number} */
 m_getRealColumnCount__() {
  return Math.max(this.m_getColumnCount__(), this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ + 1);
 }
 /** @abstract @return {Object} */
 m_getTableBodyElement__() {}
 /** @abstract @return {Object} */
 m_getTableFootElement__() {}
 /** @abstract @return {Object} */
 m_getTableHeadElement__() {}
 /** @override @return {boolean} */
 m_isKeyboardNavigationSuppressed__() {
  return this.f_cellIsEditing__org_gwtproject_user_cellview_client_AbstractCellTable_;
 }
 /** @override */
 m_onBlur__() {
  let td = this.m_getKeyboardSelectedTableCellElement___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  if (!$Equality.$same(td, null)) {
   let tr = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(td)), TableRowElement_$Overlay));
   Element_$Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedCell__());
   this.m_setRowStyleName__org_gwtproject_dom_client_TableRowElement__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(tr, this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedRow__(), this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedRowCell__(), false);
  }
 }
 /** @override */
 m_onBrowserEvent2__org_gwtproject_user_client_Event(/** Event */ event) {
  let eventTarget = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   return;
  }
  let target = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  let tbody = this.m_getTableBodyElement__();
  let tfoot = this.m_getTableFootElement__();
  let thead = this.m_getTableHeadElement__();
  let targetTableSection = null;
  let targetTableCell = null;
  let cellParent = null;
  let headerParent = null;
  let headerColumnParent = null;
  let footerParent = null;
  let footerColumnParent = null;
  {
   let maybeTableCell = null;
   let cur = target;
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(TableCellElement_$Overlay.f_TAG_TD__org_gwtproject_dom_client_TableCellElement_$Overlay, Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(cur)) && this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isColumn__org_gwtproject_dom_client_Element(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(cur))) {
    cur = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(cur);
   }
   while (!$Equality.$same(cur, null) && $Equality.$same(targetTableSection, null)) {
    if ($Equality.$same(cur, tbody) || $Equality.$same(cur, tfoot) || $Equality.$same(cur, thead)) {
     targetTableSection = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(cur), TableSectionElement_$Overlay));
     if (!$Equality.$same(maybeTableCell, null)) {
      targetTableCell = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(maybeTableCell), TableCellElement_$Overlay));
      break;
     }
    }
    let tagName = Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(cur);
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(TableCellElement_$Overlay.f_TAG_TD__org_gwtproject_dom_client_TableCellElement_$Overlay, tagName) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(TableCellElement_$Overlay.f_TAG_TH__org_gwtproject_dom_client_TableCellElement_$Overlay, tagName)) {
     maybeTableCell = cur;
    }
    if ($Equality.$same(cellParent, null) && this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isColumn__org_gwtproject_dom_client_Element(cur)) {
     cellParent = cur;
    }
    if ($Equality.$same(headerParent, null) && this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isHeader__org_gwtproject_dom_client_Element(cur)) {
     headerParent = cur;
    }
    if ($Equality.$same(footerParent, null) && this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isHeader__org_gwtproject_dom_client_Element(cur)) {
     footerParent = cur;
    }
    if ($Equality.$same(headerColumnParent, null) && this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isColumn__org_gwtproject_dom_client_Element(cur)) {
     headerColumnParent = cur;
    }
    if ($Equality.$same(footerColumnParent, null) && this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isColumn__org_gwtproject_dom_client_Element(cur)) {
     footerColumnParent = cur;
    }
    cur = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(cur);
   }
  }
  if ($Equality.$same(targetTableCell, null)) {
   return;
  }
  if (this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   cellParent = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(targetTableCell);
  }
  let targetTableRow = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(targetTableCell)), TableRowElement_$Overlay));
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let isSelect = j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType) || (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && NativeEvent_$Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event) == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes);
  let col = targetTableCell.cellIndex;
  if ($Equality.$same(targetTableSection, thead) || $Equality.$same(targetTableSection, tfoot)) {
   let isHeader = $Equality.$same(targetTableSection, thead);
   headerParent = isHeader ? headerParent : footerParent;
   let columnParent = isHeader ? headerColumnParent : footerColumnParent;
   let shouldSortColumn = true;
   if (!$Equality.$same(headerParent, null)) {
    let header = isHeader ? this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getHeader__org_gwtproject_dom_client_Element(headerParent) : this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getHeader__org_gwtproject_dom_client_Element(footerParent);
    if (!$Equality.$same(header, null)) {
     let headerIndex = isHeader ? this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getRowIndex__org_gwtproject_dom_client_TableRowElement(targetTableRow) : this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getRowIndex__org_gwtproject_dom_client_TableRowElement(targetTableRow);
     let context = Context.$create__int__int__java_lang_Object(headerIndex, col, header.m_getKey__());
     if (this.m_cellConsumesEventType__org_gwtproject_cell_client_Cell__java_lang_String(header.m_getCell__(), eventType)) {
      header.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(context, headerParent, event);
     }
     if (isSelect) {
      shouldSortColumn = header.m_onPreviewColumnSortEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(context, headerParent, event);
     }
    }
   }
   if (isSelect && shouldSortColumn && !$Equality.$same(columnParent, null)) {
    let column = isHeader ? this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getColumn__org_gwtproject_dom_client_Element(columnParent) : this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getColumn__org_gwtproject_dom_client_Element(columnParent);
    if (!$Equality.$same(column, null) && column.m_isSortable__()) {
     this.f_headersDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
     this.f_updatingSortList__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
     this.f_sortList__org_gwtproject_user_cellview_client_AbstractCellTable_.m_push__org_gwtproject_user_cellview_client_Column(column);
     this.f_updatingSortList__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
     ColumnSortEvent.m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_user_cellview_client_ColumnSortList(this, this.f_sortList__org_gwtproject_user_cellview_client_AbstractCellTable_);
    }
   }
  } else if ($Equality.$same(targetTableSection, tbody)) {
   let absRow = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(targetTableRow);
   let relRow = absRow - this.m_getPageStart__();
   let subrow = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getSubrowValueIndex__org_gwtproject_dom_client_TableRowElement(targetTableRow);
   if (!this.f_skipRowHoverCheck__org_gwtproject_user_cellview_client_AbstractCellTable_) {
    let isRowChange = !$Equality.$same(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_, targetTableRow);
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents, eventType)) {
     if (!$Equality.$same(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_, null) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getTableBodyElement__(), this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_)) {
      this.m_setRowHover__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_, event, false, isRowChange);
     }
     this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_ = targetTableRow;
     this.m_setRowHover__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_, event, true, isRowChange);
    } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents, eventType) && !$Equality.$same(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_, null)) {
     let unhover = true;
     if (!this.f_skipRowHoverFloatElementCheck__org_gwtproject_user_cellview_client_AbstractCellTable_) {
      let clientX = NativeEvent_$Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(event) + Window.m_getScrollLeft__();
      let clientY = NativeEvent_$Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(event) + Window.m_getScrollTop__();
      let rowLeft = Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_);
      let rowTop = Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_);
      let rowWidth = Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_);
      let rowHeight = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_);
      let rowBottom = rowTop + rowHeight;
      let rowRight = rowLeft + rowWidth;
      unhover = clientX < rowLeft || clientX > rowRight || clientY < rowTop || clientY > rowBottom;
     }
     if (unhover) {
      this.m_setRowHover__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_, event, false, isRowChange);
      this.f_hoveringRow__org_gwtproject_user_cellview_client_AbstractCellTable_ = null;
     }
    }
   }
   if (!this.m_isRowWithinBounds__int(relRow)) {
    return;
   }
   let isSelectionHandled = this.f_handlesSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ || $Equality.$same(KeyboardSelectionPolicy.f_BOUND_TO_SELECTION__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__());
   let value = this.m_getVisibleItem__int(relRow);
   let context_1 = Context.$create__int__int__java_lang_Object__int(absRow, col, this.m_getValueKey__java_lang_Object(value), subrow);
   let previewEvent = /**@type {CellPreviewEvent<T>}*/ (CellPreviewEvent.m_fire__org_gwtproject_view_client_HasCellPreviewHandlers__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(this, event, this, context_1, value, this.f_cellIsEditing__org_gwtproject_user_cellview_client_AbstractCellTable_, isSelectionHandled));
   if (!$Equality.$same(cellParent, null) && !previewEvent.m_isCanceled__()) {
    let /** HasCell<T, ?> */ column_1;
    if (this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_) {
     column_1 = /**@type {Column<T, *>}*/ ($Casts.$to(this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(col), Column));
    } else {
     column_1 = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getColumn__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_dom_client_Element(context_1, value, cellParent);
    }
    if (!$Equality.$same(column_1, null)) {
     this.m_fireEventToCell__org_gwtproject_user_client_Event__java_lang_String__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_Cell_Context__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_user_cellview_client_AbstractCellTable(event, eventType, cellParent, value, context_1, column_1);
    }
   }
  }
 }
 /** @override */
 m_onFocus__() {
  let td = this.m_getKeyboardSelectedTableCellElement___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  if (!$Equality.$same(td, null)) {
   let tr = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(td)), TableRowElement_$Overlay));
   Element_$Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(td, this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedCell__());
   this.m_setRowStyleName__org_gwtproject_dom_client_TableRowElement__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(tr, this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedRow__(), this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedRowCell__(), true);
  }
 }
 
 m_refreshColumnWidths__() {
  let columnCount = this.m_getRealColumnCount__();
  for (let i = 0; i < columnCount; i++) {
   this.m_doSetColumnWidth__int__java_lang_String(i, this.m_getColumnWidth__int_$pp_org_gwtproject_user_cellview_client(i));
  }
 }
 /** @override @deprecated */
 m_renderRowValues__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(/** SafeHtmlBuilder */ sb, /** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel) {
  this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
 }
 /** @deprecated */
 m_renderRowValuesLegacy__org_gwtproject_safehtml_shared_SafeHtmlBuilder__java_util_List__int__org_gwtproject_view_client_SelectionModel(/** SafeHtmlBuilder */ sb, /** List<T> */ values, /** number */ start, /** SelectionModel<?> */ selectionModel) {
  let keyboardSelectedRow = this.m_getKeyboardSelectedRow__() + this.m_getPageStart__();
  let evenRowStyle = this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_evenRow__();
  let oddRowStyle = this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_oddRow__();
  let cellStyle = this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_cell__();
  let evenCellStyle = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_evenRowCell__());
  let oddCellStyle = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_oddRowCell__());
  let firstColumnStyle = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_firstColumn__());
  let lastColumnStyle = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_lastColumn__());
  let selectedRowStyle = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_selectedRow__());
  let selectedCellStyle = " " + j_l_String.m_valueOf__java_lang_Object(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_selectedRowCell__());
  let columnCount = this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.size();
  let length = values.size();
  let end = start + length;
  for (let i = start; i < end; i++) {
   let value = values.getAtIndex(i - start);
   let isSelected = ($Equality.$same(selectionModel, null) || $Equality.$same(value, null)) ? false : selectionModel.m_isSelected__java_lang_Object(value);
   let isEven = $Primitives.$coerceDivision(i % 2) == 0;
   let trClasses = isEven ? evenRowStyle : oddRowStyle;
   if (isSelected) {
    trClasses = j_l_String.m_valueOf__java_lang_Object(trClasses) + j_l_String.m_valueOf__java_lang_Object(selectedRowStyle);
   }
   if (!$Equality.$same(this.f_rowStyles__org_gwtproject_user_cellview_client_AbstractCellTable_, null)) {
    let extraRowStyles = this.f_rowStyles__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getStyleNames__java_lang_Object__int(value, i);
    if (!$Equality.$same(extraRowStyles, null)) {
     trClasses = j_l_String.m_valueOf__java_lang_Object(trClasses) + " ";
     trClasses = j_l_String.m_valueOf__java_lang_Object(trClasses) + j_l_String.m_valueOf__java_lang_Object(extraRowStyles);
    }
   }
   let trBuilder = SafeHtmlBuilder.$create__();
   let curColumn = 0;
   for (let $iterator = this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let column = /**@type {Column<T, *>}*/ ($Casts.$to($iterator.m_next__(), Column));
    let tdClasses = cellStyle;
    tdClasses = j_l_String.m_valueOf__java_lang_Object(tdClasses) + j_l_String.m_valueOf__java_lang_Object((isEven ? evenCellStyle : oddCellStyle));
    if (curColumn == 0) {
     tdClasses = j_l_String.m_valueOf__java_lang_Object(tdClasses) + j_l_String.m_valueOf__java_lang_Object(firstColumnStyle);
    }
    if (isSelected) {
     tdClasses = j_l_String.m_valueOf__java_lang_Object(tdClasses) + j_l_String.m_valueOf__java_lang_Object(selectedCellStyle);
    }
    if (curColumn == columnCount - 1) {
     tdClasses = j_l_String.m_valueOf__java_lang_Object(tdClasses) + j_l_String.m_valueOf__java_lang_Object(lastColumnStyle);
    }
    let context = Context.$create__int__int__java_lang_Object(i, curColumn, this.m_getValueKey__java_lang_Object(value));
    let cellStyles = column.m_getCellStyleNames__org_gwtproject_cell_client_Cell_Context__java_lang_Object(context, value);
    if (!$Equality.$same(cellStyles, null)) {
     tdClasses = j_l_String.m_valueOf__java_lang_Object(tdClasses) + j_l_String.m_valueOf__java_lang_Object((" " + j_l_String.m_valueOf__java_lang_Object(cellStyles)));
    }
    let cellBuilder = SafeHtmlBuilder.$create__();
    if (!$Equality.$same(value, null)) {
     column.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, cellBuilder);
    }
    let contents = SafeHtmlUtils.f_EMPTY_SAFE_HTML__org_gwtproject_safehtml_shared_SafeHtmlUtils;
    contents = Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_div__org_gwtproject_safehtml_shared_SafeHtml(cellBuilder.m_toSafeHtml__());
    let hAlign = column.m_getHorizontalAlignment__();
    let vAlign = column.m_getVerticalAlignment__();
    if (!$Equality.$same(hAlign, null) && !$Equality.$same(vAlign, null)) {
     trBuilder.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_tdBothAlign__java_lang_String__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(tdClasses, hAlign.m_getTextAlignString__(), vAlign.m_getVerticalAlignString__(), contents));
    } else if (!$Equality.$same(hAlign, null)) {
     trBuilder.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_tdHorizontalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(tdClasses, hAlign.m_getTextAlignString__(), contents));
    } else if (!$Equality.$same(vAlign, null)) {
     trBuilder.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_tdVerticalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(tdClasses, vAlign.m_getVerticalAlignString__(), contents));
    } else {
     trBuilder.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_td__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(tdClasses, contents));
    }
    curColumn++;
   }
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_tr__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(trClasses, trBuilder.m_toSafeHtml__()));
  }
 }
 /** @override */
 m_replaceAllChildren__java_util_List__org_gwtproject_safehtml_shared_SafeHtml(/** List<T> */ values, /** SafeHtml */ html) {
  this.m_refreshHeadersAndColumnsImpl___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  if ($Equality.$same(html, null) || this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_ == false) {
   html = this.m_buildRowValues__java_util_List__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(values, this.m_getPageStart__(), true);
  }
  AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_.m_replaceAllRows__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml(this, this.m_getTableBodyElement__(), CellBasedWidgetImpl.m_get__().m_processHtml__org_gwtproject_safehtml_shared_SafeHtml(html));
 }
 /** @override */
 m_replaceChildren__java_util_List__int__org_gwtproject_safehtml_shared_SafeHtml(/** List<T> */ values, /** number */ start, /** SafeHtml */ html) {
  this.m_refreshHeadersAndColumnsImpl___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  if ($Equality.$same(html, null) || this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_ == false) {
   html = this.m_buildRowValues__java_util_List__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(values, this.m_getPageStart__() + start, false);
  }
  AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_.m_replaceChildren__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml__int__int(this, this.m_getTableBodyElement__(), CellBasedWidgetImpl.m_get__().m_processHtml__org_gwtproject_safehtml_shared_SafeHtml(html), start, values.size());
 }
 /** @override @return {boolean} */
 m_resetFocusOnCell__() {
  let elem = this.m_getKeyboardSelectedElement__();
  if ($Equality.$same(elem, null)) {
   return false;
  }
  let row = this.m_getKeyboardSelectedRow__();
  let col = this.m_getKeyboardSelectedColumn__();
  let value = this.m_getVisibleItem__int(row);
  let key = this.m_getValueKey__java_lang_Object(value);
  let context = Context.$create__int__int__java_lang_Object(row + this.m_getPageStart__(), col, key);
  let column = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getColumn__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_dom_client_Element(context, value, elem);
  if ($Equality.$same(column, null)) {
   return false;
  }
  this.m_resetFocusOnCellImpl__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_HasCell__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTable(context, value, column, elem);
  return false;
 }
 /** @override */
 m_setKeyboardSelected__int__boolean__boolean(/** number */ index, /** boolean */ selected, /** boolean */ stealFocus) {
  if ($Equality.$same(KeyboardSelectionPolicy.f_DISABLED__org_gwtproject_user_cellview_client_HasKeyboardSelectionPolicy_KeyboardSelectionPolicy, this.m_getKeyboardSelectionPolicy__()) || !this.m_isRowWithinBounds__int(index)) {
   return;
  }
  let subrow = this.f_lastKeyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_;
  if (selected) {
   subrow = this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_;
   this.f_lastKeyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_ = this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_;
  }
  let tr = this.m_getSubRowElement__int__int(index + this.m_getPageStart__(), subrow);
  if ($Equality.$same(tr, null)) {
   return;
  }
  let cellStyle = this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedCell__();
  let updatedSelection = !selected || this.f_isFocused__org_gwtproject_user_cellview_client_AbstractHasData || stealFocus;
  this.m_setRowStyleName__org_gwtproject_dom_client_TableRowElement__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(tr, this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedRow__(), this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_keyboardSelectedRowCell__(), selected);
  let cells = tr.cells;
  let keyboardColumn = Math.min(this.m_getKeyboardSelectedColumn__(), cells.length - 1);
  for (let i = 0; i < cells.length; i++) {
   let td = /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(cells, i), TableCellElement_$Overlay));
   let isKeyboardSelected = (i == keyboardColumn);
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, cellStyle, updatedSelection && selected && isKeyboardSelected);
   let focusable = this.m_getKeyboardSelectedElement__org_gwtproject_dom_client_TableCellElement_$p_org_gwtproject_user_cellview_client_AbstractCellTable(td);
   this.m_setFocusable__org_gwtproject_dom_client_Element__boolean(focusable, selected && isKeyboardSelected);
   if (selected && stealFocus && !this.f_cellIsEditing__org_gwtproject_user_cellview_client_AbstractCellTable_ && isKeyboardSelected) {
    CellBasedWidgetImpl.m_get__().m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$2<T>}*/ ($2.$create__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_Element(this, focusable)));
   }
  }
 }
 /** @return {?string} */
 m_getColumnWidth__int_$pp_org_gwtproject_user_cellview_client(/** number */ columnIndex) {
  let width = null;
  if (this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.size() > columnIndex) {
   width = /**@type {?string}*/ ($Casts.$to(this.f_columnWidths__org_gwtproject_user_cellview_client_AbstractCellTable_.get(/**@type {Column<T, *>}*/ ($Casts.$to(this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(columnIndex), Column))), j_l_String));
  }
  if ($Equality.$same(width, null)) {
   width = /**@type {?string}*/ ($Casts.$to(this.f_columnWidthsByIndex__org_gwtproject_user_cellview_client_AbstractCellTable_.get(Integer.m_valueOf__int(columnIndex)), j_l_String));
  }
  return width;
 }
 /** @return {Object} */
 m_getSubRowElement__int__int(/** number */ absRow, /** number */ subrow) {
  let relRow = absRow - this.m_getPageStart__();
  this.m_checkRowBounds__int(relRow);
  let rows = this.m_getTableBodyElement__().rows;
  let rowCount = rows.length;
  if (rowCount == 0) {
   return null;
  }
  let frameStart = 0;
  let frameEnd = rowCount - 1;
  let domIndex = Math.min(relRow, frameEnd);
  while (domIndex >= frameStart && domIndex <= frameEnd) {
   let curRow = /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(rows, domIndex), TableRowElement_$Overlay));
   let rowValueIndex = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(curRow);
   if (rowValueIndex == absRow) {
    let subrowValueIndex = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getSubrowValueIndex__org_gwtproject_dom_client_TableRowElement(curRow);
    if (subrow != subrowValueIndex) {
     let offset = subrow - subrowValueIndex;
     let subrowIndex = domIndex + offset;
     if (subrowIndex >= rows.length) {
      return null;
     }
     curRow = /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(rows, subrowIndex), TableRowElement_$Overlay));
     if (this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(curRow) != absRow) {
      return null;
     }
    }
    return curRow;
   } else if (rowValueIndex > absRow) {
    frameEnd = domIndex - 1;
   } else {
    frameStart = domIndex + 1;
   }
   domIndex = $Primitives.$coerceDivision((frameStart + frameEnd) / 2);
  }
  return null;
 }
 /** @return {SafeHtml} */
 m_buildRowValues__java_util_List__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** List<T> */ values, /** number */ start, /** boolean */ isRebuildingAllRows) {
  let length = values.size();
  let end = start + length;
  this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_start__boolean(isRebuildingAllRows);
  for (let i = start; i < end; i++) {
   let value = values.getAtIndex(i - start);
   this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_buildRow__java_lang_Object__int(value, i);
  }
  this.m_coalesceCellProperties___$p_org_gwtproject_user_cellview_client_AbstractCellTable();
  let tableSectionBuilder = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_finish__();
  return AbstractCellTable.m_tableSectionToSafeHtml__org_gwtproject_dom_builder_shared_TableSectionBuilder__java_lang_String(tableSectionBuilder, "tbody");
 }
 
 m_checkColumnBounds__int_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** number */ col) {
  if (col < 0 || col >= this.m_getColumnCount__()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Column index is out of bounds: " + col));
  }
 }
 
 m_coalesceCellProperties___$p_org_gwtproject_user_cellview_client_AbstractCellTable() {
  this.f_dependsOnSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  this.f_handlesSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  this.f_isInteractive__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  for (let $iterator = this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getColumns__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let column = /**@type {HasCell<T, *>}*/ ($Casts.$to($iterator.m_next__(), HasCell));
   let cell = column.m_getCell__();
   if (cell.m_dependsOnSelection__()) {
    this.f_dependsOnSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
   }
   if (cell.m_handlesSelection__()) {
    this.f_handlesSelection__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
   }
   if (AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(column)) {
    this.f_isInteractive__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
   }
  }
 }
 
 m_createHeaders__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** boolean */ isFooter) {
  let section = isFooter ? this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_buildFooter__() : this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_buildHeader__();
  if (!$Equality.$same(section, null)) {
   AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_.m_replaceAllRows__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml(this, isFooter ? this.m_getTableFootElement__() : this.m_getTableHeadElement__(), AbstractCellTable.m_tableSectionToSafeHtml__org_gwtproject_dom_builder_shared_TableSectionBuilder__java_lang_String(section, isFooter ? "tfoot" : "thead"));
   this.m_doSetHeaderVisible__boolean__boolean(isFooter, true);
  } else {
   this.m_doSetHeaderVisible__boolean__boolean(isFooter, false);
  }
 }
 /** @template C */
 m_fireEventToCell__org_gwtproject_user_client_Event__java_lang_String__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_cell_client_Cell_Context__org_gwtproject_cell_client_HasCell_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** Event */ event, /** ?string */ eventType, /** Object */ parentElem, /** T */ rowValue, /** Context */ context, /** HasCell<T, C> */ column) {
  let cell = column.m_getCell__();
  if (!this.m_cellConsumesEventType__org_gwtproject_cell_client_Cell__java_lang_String(cell, eventType)) {
   return;
  }
  let cellValue = column.m_getValue__java_lang_Object(rowValue);
  let cellWasEditing = cell.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parentElem, cellValue);
  if (Column.$isInstance(column)) {
   let col = /**@type {Column<T, C>}*/ ($Casts.$to(column, Column));
   col.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent(context, parentElem, rowValue, event);
  } else {
   let fieldUpdater = column.m_getFieldUpdater__();
   let index = context.m_getIndex__();
   let valueUpdater = $Equality.$same(fieldUpdater, null) ? null : /**@type {!$3<C, T>}*/ ($3.$create__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_cell_client_FieldUpdater__int__java_lang_Object(this, fieldUpdater, index, rowValue));
   cell.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parentElem, cellValue, event, valueUpdater);
  }
  this.f_cellIsEditing__org_gwtproject_user_cellview_client_AbstractCellTable_ = cell.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, parentElem, cellValue);
  if (cellWasEditing && !this.f_cellIsEditing__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   CellBasedWidgetImpl.m_get__().m_resetFocus__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$4<C, T>}*/ ($4.$create__org_gwtproject_user_cellview_client_AbstractCellTable(this)));
  }
 }
 /** @return {Object} */
 m_getKeyboardSelectedElement__org_gwtproject_dom_client_TableCellElement_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** Object */ td) {
  if ($Equality.$same(td, null)) {
   return null;
  }
  if (this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_isColumn__org_gwtproject_dom_client_Element(td)) {
   return td;
  }
  let firstChild = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(td);
  if (!$Equality.$same(firstChild, null) && Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(td) == 1 && j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("div", Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(firstChild))) {
   return firstChild;
  }
  return td;
 }
 /** @return {Object} */
 m_getKeyboardSelectedTableCellElement___$p_org_gwtproject_user_cellview_client_AbstractCellTable() {
  let colIndex = this.m_getKeyboardSelectedColumn__();
  if (colIndex < 0) {
   return null;
  }
  let rowIndex = this.m_getKeyboardSelectedRow__();
  if (rowIndex < 0 || rowIndex >= this.m_getTableBodyElement__().rows.length) {
   return null;
  }
  let tr = this.m_getSubRowElement__int__int(rowIndex + this.m_getPageStart__(), this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_);
  if (!$Equality.$same(tr, null)) {
   let cellCount = tr.cells.length;
   if (cellCount > 0) {
    let column = Math.min(colIndex, cellCount - 1);
    return /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(tr.cells, column), TableCellElement_$Overlay));
   }
  }
  return null;
 }
 
 m_init___$p_org_gwtproject_user_cellview_client_AbstractCellTable() {
  if ($Equality.$same(AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_, null)) {
   AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_ = Impl.$create__();
  }
  this.m_setStyleName__java_lang_String(this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_widget__());
  let eventTypes = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  eventTypes.add(BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents);
  eventTypes.add(BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents);
  CellBasedWidgetImpl.m_get__().m_sinkEvents__org_gwtproject_user_client_ui_Widget__java_util_Set(this, eventTypes);
  this.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!DefaultCellTableBuilder<T>}*/ (DefaultCellTableBuilder.$create__org_gwtproject_user_cellview_client_AbstractCellTable(this));
  this.f_headerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!DefaultHeaderOrFooterBuilder<T>}*/ (DefaultHeaderOrFooterBuilder.$create__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(this, false));
  this.f_footerBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!DefaultHeaderOrFooterBuilder<T>}*/ (DefaultHeaderOrFooterBuilder.$create__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(this, true));
  this.m_setKeyboardSelectionHandler__org_gwtproject_view_client_CellPreviewEvent_Handler(/**@type {!CellTableKeyboardSelectionHandler<T>}*/ (CellTableKeyboardSelectionHandler.$create__org_gwtproject_user_cellview_client_AbstractCellTable(this)));
 }
 
 m_refreshColumnsAndRedraw___$p_org_gwtproject_user_cellview_client_AbstractCellTable() {
  this.f_columnWidthsDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
  this.m_redraw__();
 }
 
 m_refreshHeadersAndColumnsImpl___$p_org_gwtproject_user_cellview_client_AbstractCellTable() {
  if (this.f_columnWidthsDirty__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.f_columnWidthsDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
   this.m_refreshColumnWidths__();
  }
  let wereHeadersDirty = this.f_headersDirty__org_gwtproject_user_cellview_client_AbstractCellTable_;
  this.f_headersDirty__org_gwtproject_user_cellview_client_AbstractCellTable_ = false;
  if (wereHeadersDirty || !this.f_headerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.m_createHeaders__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(false);
  }
  if (wereHeadersDirty || !this.f_footerRefreshDisabled__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.m_createHeaders__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(true);
  }
 }
 /** @template C @return {boolean} */
 m_resetFocusOnCellImpl__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_cell_client_HasCell__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** Context */ context, /** T */ value, /** HasCell<T, C> */ column, /** Object */ cellParent) {
  let cellValue = column.m_getValue__java_lang_Object(value);
  let cell = column.m_getCell__();
  return cell.m_resetFocus__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(context, cellParent, cellValue);
 }
 
 m_setRowHover__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** Object */ tr, /** Event */ event, /** boolean */ isHovering, /** boolean */ isRowChange) {
  if (!this.f_skipRowHoverStyleUpdate__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.m_setRowStyleName__org_gwtproject_dom_client_TableRowElement__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(tr, this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_hoveredRow__(), this.f_style__org_gwtproject_user_cellview_client_AbstractCellTable_.m_hoveredRowCell__(), isHovering);
  }
  RowHoverEvent.m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(this, tr, event, !isHovering, isRowChange ? HoveringScope.f_ROW_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope : HoveringScope.f_CELL_HOVER__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 
 m_setRowStyleName__org_gwtproject_dom_client_TableRowElement__java_lang_String__java_lang_String__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** Object */ tr, /** ?string */ rowStyle, /** ?string */ cellStyle, /** boolean */ add) {
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(tr, rowStyle, add);
  let cells = tr.cells;
  for (let i = 0; i < cells.length; i++) {
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(/**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(cells, i), TableCellElement_$Overlay)), cellStyle, add);
  }
 }
 
 m_updateColumnWidthImpl__org_gwtproject_user_cellview_client_Column__java_lang_String_$p_org_gwtproject_user_cellview_client_AbstractCellTable(/** Column<T, ?> */ column, /** ?string */ width) {
  let columnCount = this.m_getColumnCount__();
  for (let i = 0; i < columnCount; i++) {
   if ($Equality.$same(this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_.getAtIndex(i), column)) {
    this.m_doSetColumnWidth__int__java_lang_String(i, width);
   }
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_AbstractCellTable() {
  this.f_columns__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!ArrayList<Column<T, ?>>}*/ (ArrayList.$create__());
  this.f_columnWidths__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!HashMap<Column<T, ?>, ?string>}*/ (HashMap.$create__());
  this.f_columnWidthsByIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!HashMap<Integer, ?string>}*/ (HashMap.$create__());
  this.f_maxColumnIndex__org_gwtproject_user_cellview_client_AbstractCellTable_ = -1;
  this.f_footers__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!ArrayList<Header<?>>}*/ (ArrayList.$create__());
  this.f_headers__org_gwtproject_user_cellview_client_AbstractCellTable_ = /**@type {!ArrayList<Header<?>>}*/ (ArrayList.$create__());
  this.f_keyboardSelectedColumn__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  this.f_keyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  this.f_lastKeyboardSelectedSubrow__org_gwtproject_user_cellview_client_AbstractCellTable_ = 0;
  this.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_ = true;
  this.f_sortList__org_gwtproject_user_cellview_client_AbstractCellTable_ = ColumnSortList.$create__org_gwtproject_user_cellview_client_ColumnSortList_Delegate(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_user_cellview_client_AbstractCellTable(this)));
 }
 
 static $clinit() {
  AbstractCellTable.$clinit = () =>{};
  AbstractCellTable.$loadModules();
  AbstractHasData.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractCellTable;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  HasCell = goog.module.get('org.gwtproject.cell.client.HasCell$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  HtmlTableSectionBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  TableCellElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
  TableRowElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
  TableSectionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.$3$impl');
  $4 = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.$4$impl');
  CellTableKeyboardSelectionHandler = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.CellTableKeyboardSelectionHandler$impl');
  Impl = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.Impl$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.Template$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
  Column = goog.module.get('org.gwtproject.user.cellview.client.Column$impl');
  ColumnSortEvent = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
  ColumnSortList = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortList$impl');
  DefaultCellTableBuilder = goog.module.get('org.gwtproject.user.cellview.client.DefaultCellTableBuilder$impl');
  DefaultHeaderOrFooterBuilder = goog.module.get('org.gwtproject.user.cellview.client.DefaultHeaderOrFooterBuilder$impl');
  KeyboardSelectionPolicy = goog.module.get('org.gwtproject.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy$impl');
  Header = goog.module.get('org.gwtproject.user.cellview.client.Header$impl');
  RowHoverEvent = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent$impl');
  HoveringScope = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope$impl');
  SafeHtmlHeader = goog.module.get('org.gwtproject.user.cellview.client.SafeHtmlHeader$impl');
  TextHeader = goog.module.get('org.gwtproject.user.cellview.client.TextHeader$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  CellPreviewEvent = goog.module.get('org.gwtproject.view.client.CellPreviewEvent$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(AbstractCellTable, 'org.gwtproject.user.cellview.client.AbstractCellTable');

/**@const {?string}*/
AbstractCellTable.f_MALFORMED_HTML_SECTION__org_gwtproject_user_cellview_client_AbstractCellTable_ = "Malformed HTML: The table section returned by HeaderBuilder or FooterBuilder must use the tag name thead or tfoot, as appropriate, and cannot contain any attributes or styles.";
/**@type {Impl}*/
AbstractCellTable.f_TABLE_IMPL__org_gwtproject_user_cellview_client_AbstractCellTable_;

exports = AbstractCellTable; 
//# sourceMappingURL=AbstractCellTable.js.map