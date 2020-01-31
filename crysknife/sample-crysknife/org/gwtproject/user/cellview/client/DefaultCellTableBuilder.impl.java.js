goog.module('org.gwtproject.user.cellview.client.DefaultCellTableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCellTableBuilder = goog.require('org.gwtproject.user.cellview.client.AbstractCellTableBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let TableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');
let OutlineStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template T
 * @extends {AbstractCellTableBuilder<T>}
  */
class DefaultCellTableBuilder extends AbstractCellTableBuilder {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_evenRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_oddRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_selectedRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_cellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_evenCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_oddCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_firstColumnStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_lastColumnStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
  /**@type {?string}*/
  this.f_selectedCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_;
 }
 /** @template T @return {!DefaultCellTableBuilder<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable(/** AbstractCellTable<T> */ cellTable) {
  DefaultCellTableBuilder.$clinit();
  let $instance = new DefaultCellTableBuilder();
  $instance.$ctor__org_gwtproject_user_cellview_client_DefaultCellTableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable(cellTable);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DefaultCellTableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable(/** AbstractCellTable<T> */ cellTable) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractCellTableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable(cellTable);
  let style = cellTable.m_getResources__().m_style__();
  this.f_evenRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = style.m_evenRow__();
  this.f_oddRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = style.m_oddRow__();
  this.f_selectedRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = " " + j_l_String.m_valueOf__java_lang_Object(style.m_selectedRow__());
  this.f_cellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = style.m_cell__();
  this.f_evenCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = " " + j_l_String.m_valueOf__java_lang_Object(style.m_evenRowCell__());
  this.f_oddCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = " " + j_l_String.m_valueOf__java_lang_Object(style.m_oddRowCell__());
  this.f_firstColumnStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = " " + j_l_String.m_valueOf__java_lang_Object(style.m_firstColumn__());
  this.f_lastColumnStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = " " + j_l_String.m_valueOf__java_lang_Object(style.m_lastColumn__());
  this.f_selectedCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ = " " + j_l_String.m_valueOf__java_lang_Object(style.m_selectedRowCell__());
 }
 /** @override */
 m_buildRowImpl__java_lang_Object__int(/** T */ rowValue, /** number */ absRowIndex) {
  let selectionModel = this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getSelectionModel__();
  let isSelected = ($Equality.$same(selectionModel, null) || $Equality.$same(rowValue, null)) ? false : selectionModel.m_isSelected__java_lang_Object(rowValue);
  let isEven = $Primitives.$coerceDivision(absRowIndex % 2) == 0;
  let trClasses = StringBuilder.$create__java_lang_String(isEven ? this.f_evenRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ : this.f_oddRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
  if (isSelected) {
   trClasses.m_append__java_lang_String(this.f_selectedRowStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
  }
  let rowStyles = this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getRowStyles__();
  if (!$Equality.$same(rowStyles, null)) {
   let extraRowStyles = rowStyles.m_getStyleNames__java_lang_Object__int(rowValue, absRowIndex);
   if (!$Equality.$same(extraRowStyles, null)) {
    trClasses.m_append__java_lang_String(" ").m_append__java_lang_String(extraRowStyles);
   }
  }
  let tr = this.m_startRow__java_lang_Object(rowValue);
  tr.m_className__java_lang_String(trClasses.toString());
  let columnCount = this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getColumnCount__();
  for (let curColumn = 0; curColumn < columnCount; curColumn++) {
   let column = this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getColumn__int(curColumn);
   let tdClasses = StringBuilder.$create__java_lang_String(this.f_cellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
   tdClasses.m_append__java_lang_String(isEven ? this.f_evenCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_ : this.f_oddCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
   if (curColumn == 0) {
    tdClasses.m_append__java_lang_String(this.f_firstColumnStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
   }
   if (isSelected) {
    tdClasses.m_append__java_lang_String(this.f_selectedCellStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
   }
   if (curColumn == columnCount - 1) {
    tdClasses.m_append__java_lang_String(this.f_lastColumnStyle__org_gwtproject_user_cellview_client_DefaultCellTableBuilder_);
   }
   let context = Context.$create__int__int__java_lang_Object(absRowIndex, curColumn, this.f_cellTable__org_gwtproject_user_cellview_client_AbstractCellTableBuilder.m_getValueKey__java_lang_Object(rowValue));
   let cellStyles = column.m_getCellStyleNames__org_gwtproject_cell_client_Cell_Context__java_lang_Object(context, rowValue);
   if (!$Equality.$same(cellStyles, null)) {
    tdClasses.m_append__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object(cellStyles));
   }
   let hAlign = column.m_getHorizontalAlignment__();
   let vAlign = column.m_getVerticalAlignment__();
   let td = tr.m_startTD__();
   td.m_className__java_lang_String(tdClasses.toString());
   if (!$Equality.$same(hAlign, null)) {
    td.m_align__java_lang_String(hAlign.m_getTextAlignString__());
   }
   if (!$Equality.$same(vAlign, null)) {
    td.m_vAlign__java_lang_String(vAlign.m_getVerticalAlignString__());
   }
   this.m_addCellAttributes__org_gwtproject_dom_builder_shared_TableCellBuilder(td);
   let div = td.m_startDiv__();
   div.m_style__().m_outlineStyle__org_gwtproject_dom_style_shared_OutlineStyle(OutlineStyle.f_NONE__org_gwtproject_dom_style_shared_OutlineStyle).m_endStyle__();
   this.m_renderCell__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_cell_client_Cell_Context__org_gwtproject_cell_client_HasCell__java_lang_Object(div, context, column, rowValue);
   div.m_endDiv__();
   td.m_endTD__();
  }
  tr.m_endTR__();
 }
 
 m_addCellAttributes__org_gwtproject_dom_builder_shared_TableCellBuilder(/** TableCellBuilder */ cell) {}
 
 static $clinit() {
  DefaultCellTableBuilder.$clinit = () =>{};
  DefaultCellTableBuilder.$loadModules();
  AbstractCellTableBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultCellTableBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  OutlineStyle = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(DefaultCellTableBuilder, 'org.gwtproject.user.cellview.client.DefaultCellTableBuilder');

exports = DefaultCellTableBuilder; 
//# sourceMappingURL=DefaultCellTableBuilder.js.map