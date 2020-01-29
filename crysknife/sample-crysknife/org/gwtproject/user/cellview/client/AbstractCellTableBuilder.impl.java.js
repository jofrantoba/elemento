goog.module('org.gwtproject.user.cellview.client.AbstractCellTableBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CellTableBuilder = goog.require('org.gwtproject.user.cellview.client.CellTableBuilder$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let HasCell = goog.forwardDeclare('org.gwtproject.cell.client.HasCell$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let HtmlBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
let HtmlTableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');
let TableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template T
 * @implements {CellTableBuilder<T>}
  */
class AbstractCellTableBuilder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractCellTable<T>} */
  this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder;
  /** @public {Map<?string, HasCell<T, ?>>} */
  this.f_idToCellMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_;
  /** @public {Map<HasCell<T, ?>, ?string>} */
  this.f_cellToIdMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_;
  /** @public {HtmlTableSectionBuilder} */
  this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_;
  /** @public {number} */
  this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = 0;
  /** @public {number} */
  this.f_subrowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = 0;
  /** @public {*} */
  this.f_rowValueKey__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_;
 }
 /**
  * @param {AbstractCellTable<T>} cellTable
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable(cellTable) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder();
  this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder = cellTable;
 }
 /**
  * @override
  * @param {T} rowValue
  * @param {number} absRowIndex
  * @public
  */
 m_buildRow__java_lang_Object__int(rowValue, absRowIndex) {
  this.m_setRowInfo__int__java_lang_Object_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(absRowIndex, rowValue);
  this.m_buildRowImpl__java_lang_Object__int(rowValue, absRowIndex);
 }
 /**
  * @param {number} column
  * @return {Context}
  * @public
  */
 m_createContext__int(column) {
  return Context.$create__int__int__java_lang_Object__int(this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_, column, this.f_rowValueKey__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_, this.f_subrowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_);
 }
 /**
  * @override
  * @return {TableSectionBuilder}
  * @public
  */
 m_finish__() {
  while (this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.m_getDepth__() > 0) {
   this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.m_endTBody__();
  }
  return this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_;
 }
 /**
  * @override
  * @param {Context} context
  * @param {T} rowValue
  * @param {Object} elem
  * @return {HasCell<T, ?>}
  * @public
  */
 m_getColumn__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_dom_client_Element(context, rowValue, elem) {
  return this.m_getColumn__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(elem);
 }
 /**
  * @override
  * @return {Collection<HasCell<T, ?>>}
  * @public
  */
 m_getColumns__() {
  return this.f_idToCellMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.values();
 }
 /**
  * @override
  * @param {Object} row
  * @return {number}
  * @public
  */
 m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(row) {
  try {
   return Integer.m_parseInt__java_lang_String($Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(row, AbstractCellTableBuilder.f_ROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (NumberFormatException.$isInstance(__$exc)) {
    let e = /**@type {NumberFormatException} */ (__$exc);
    return row.sectionRowIndex + this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getPageStart__();
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @override
  * @param {Object} row
  * @return {number}
  * @public
  */
 m_getSubrowValueIndex__org_gwtproject_dom_client_TableRowElement(row) {
  try {
   return Integer.m_parseInt__java_lang_String($Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(row, AbstractCellTableBuilder.f_SUBROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (NumberFormatException.$isInstance(__$exc)) {
    let e = /**@type {NumberFormatException} */ (__$exc);
    return 0;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @override
  * @param {Object} elem
  * @return {boolean}
  * @public
  */
 m_isColumn__org_gwtproject_dom_client_Element(elem) {
  return !$Equality.$same(this.m_getCellId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(elem), null);
 }
 /**
  * @template C
  * @param {ElementBuilderBase<?>} builder
  * @param {Context} context
  * @param {HasCell<T, C>} column
  * @param {T} rowValue
  * @public
  */
 m_renderCell__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_cell_client_Cell_Context__org_gwtproject_cell_client_HasCell__java_lang_Object(builder, context, column, rowValue) {
  let cellId = /**@type {?string} */ ($Casts.$to(this.f_cellToIdMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.get(column), j_l_String));
  if ($Equality.$same(cellId, null)) {
   cellId = "cell-" + j_l_String.m_valueOf__java_lang_Object(Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
   this.f_idToCellMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.put(cellId, column);
   this.f_cellToIdMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.put(column, cellId);
  }
  builder.m_attribute__java_lang_String__java_lang_String(AbstractCellTableBuilder.f_CELL_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_, cellId);
  let cellBuilder = SafeHtmlBuilder.$create__();
  if (Column.$isInstance(column)) {
   let theColumn = /**@type {Column<T, C>} */ ($Casts.$to(column, Column));
   theColumn.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, rowValue, cellBuilder);
  } else {
   column.m_getCell__().m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, column.m_getValue__java_lang_Object(rowValue), cellBuilder);
  }
  builder.m_html__org_gwtproject_safehtml_shared_SafeHtml(cellBuilder.m_toSafeHtml__());
 }
 /**
  * @override
  * @param {boolean} isRebuildingAllRows
  * @public
  */
 m_start__boolean(isRebuildingAllRows) {
  this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = HtmlBuilderFactory.m_get__().m_createTBodyBuilder__();
  if (isRebuildingAllRows) {
   this.f_cellToIdMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.clear();
   this.f_idToCellMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.clear();
  }
 }
 /**
  * @return {TableRowBuilder}
  * @public
  */
 m_startRow__() {
  return this.m_startRow__java_lang_Object(null);
 }
 /**
  * @param {T} rowValue
  * @return {TableRowBuilder}
  * @public
  */
 m_startRow__java_lang_Object(rowValue) {
  while (this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.m_getDepth__() > 1) {
   this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.m_end__();
  }
  if (this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.m_getDepth__() < 1) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Cannot start a row.  Did you call TableRowBuilder.end() too many times?"));
  }
  let row = this.f_tbody__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.m_startTR__();
  row.m_attribute__java_lang_String__int(AbstractCellTableBuilder.f_ROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_, this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_);
  row.m_attribute__java_lang_String__int(AbstractCellTableBuilder.f_SUBROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_, this.f_subrowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_);
  this.m_addRowAttributes__org_gwtproject_dom_builder_shared_TableRowBuilder__java_lang_Object(row, rowValue);
  this.f_subrowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_++;
  return row;
 }
 /**
  * @param {TableRowBuilder} row
  * @public
  */
 m_addRowAttributes__org_gwtproject_dom_builder_shared_TableRowBuilder(row) {}
 /**
  * @param {TableRowBuilder} row
  * @param {T} rowValue
  * @public
  */
 m_addRowAttributes__org_gwtproject_dom_builder_shared_TableRowBuilder__java_lang_Object(row, rowValue) {
  this.m_addRowAttributes__org_gwtproject_dom_builder_shared_TableRowBuilder(row);
 }
 /**
  * @abstract
  * @param {T} rowValue
  * @param {number} absRowIndex
  * @public
  */
 m_buildRowImpl__java_lang_Object__int(rowValue, absRowIndex) {}
 /**
  * @param {Object} elem
  * @return {?string}
  * @public
  */
 m_getCellId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(elem) {
  if ($Equality.$same(elem, null)) {
   return null;
  }
  let cellId = $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, AbstractCellTableBuilder.f_CELL_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_);
  return $Equality.$same(cellId, null) || (j_l_String.m_length__java_lang_String(cellId) == 0) ? null : cellId;
 }
 /**
  * @param {Object} elem
  * @return {HasCell<T, ?>}
  * @public
  */
 m_getColumn__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(elem) {
  let cellId = this.m_getCellId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(elem);
  return $Equality.$same(cellId, null) ? null : /**@type {HasCell<T, *>} */ ($Casts.$to(this.f_idToCellMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_.get(cellId), HasCell));
 }
 /**
  * @param {number} rowIndex
  * @param {T} rowValue
  * @public
  */
 m_setRowInfo__int__java_lang_Object_$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder(rowIndex, rowValue) {
  this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = rowIndex;
  this.f_rowValueKey__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getValueKey__java_lang_Object(rowValue);
  this.f_subrowIndex__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = 0;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_AbstractCellTableBuilder() {
  this.f_idToCellMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = /**@type {!HashMap<?string, HasCell<T, ?>>} */ (HashMap.$create__());
  this.f_cellToIdMap__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = /**@type {!HashMap<HasCell<T, ?>, ?string>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractCellTableBuilder.$clinit = () =>{};
  AbstractCellTableBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractCellTableBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  HasCell = goog.module.get('org.gwtproject.cell.client.HasCell$impl');
  HtmlBuilderFactory = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  Column = goog.module.get('org.gwtproject.user.cellview.client.Column$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractCellTableBuilder, 'org.gwtproject.user.cellview.client.AbstractCellTableBuilder');

CellTableBuilder.$markImplementor(AbstractCellTableBuilder);

/** @public {?string} @const */
AbstractCellTableBuilder.f_CELL_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = "__gwt_cell";
/** @public {?string} @const */
AbstractCellTableBuilder.f_ROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = "__gwt_row";
/** @public {?string} @const */
AbstractCellTableBuilder.f_SUBROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractCellTableBuilder_ = "__gwt_subrow";

exports = AbstractCellTableBuilder; 
//# sourceMappingURL=AbstractCellTableBuilder.js.map