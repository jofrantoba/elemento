goog.module('org.gwtproject.user.cellview.client.DefaultHeaderOrFooterBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractHeaderOrFooterBuilder = goog.require('org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let TableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');
let TableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.cellview.client.Header$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {AbstractHeaderOrFooterBuilder<T>}
  */
class DefaultHeaderOrFooterBuilder extends AbstractHeaderOrFooterBuilder {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!DefaultHeaderOrFooterBuilder<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(/** AbstractCellTable<T> */ table, /** boolean */ isFooter) {
  DefaultHeaderOrFooterBuilder.$clinit();
  let $instance = new DefaultHeaderOrFooterBuilder();
  $instance.$ctor__org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(table, isFooter);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(/** AbstractCellTable<T> */ table, /** boolean */ isFooter) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(table, isFooter);
 }
 /** @override @return {boolean} */
 m_buildHeaderOrFooterImpl__() {
  let table = this.m_getTable__();
  let isFooter = this.m_isBuildingFooter__();
  let columnCount = table.m_getColumnCount__();
  if (columnCount == 0) {
   return false;
  }
  let hasHeader = false;
  for (let i = 0; i < columnCount; i++) {
   if (!$Equality.$same(this.m_getHeader__int(i), null)) {
    hasHeader = true;
    break;
   }
  }
  if (hasHeader == false) {
   return false;
  }
  let sortList = table.m_getColumnSortList__();
  let sortedInfo = (sortList.m_size__() == 0) ? null : sortList.m_get__int(0);
  let sortedColumn = $Equality.$same(sortedInfo, null) ? null : sortedInfo.m_getColumn__();
  let isSortAscending = $Equality.$same(sortedInfo, null) ? false : sortedInfo.m_isAscending__();
  let style = this.m_getTable__().m_getResources__().m_style__();
  let className = this.m_isBuildingFooter__() ? style.m_footer__() : style.m_header__();
  let sortableStyle = " " + j_l_String.m_valueOf__java_lang_Object(style.m_sortableHeader__());
  let sortedStyle = " " + j_l_String.m_valueOf__java_lang_Object((isSortAscending ? style.m_sortedHeaderAscending__() : style.m_sortedHeaderDescending__()));
  let prevHeader = this.m_getHeader__int(0);
  let column = this.m_getTable__().m_getColumn__int(0);
  let prevColspan = 1;
  let isSortable = false;
  let isSorted = false;
  let classesBuilder = StringBuilder.$create__java_lang_String(className);
  classesBuilder.m_append__java_lang_String(" " + j_l_String.m_valueOf__java_lang_Object((isFooter ? style.m_firstColumnFooter__() : style.m_firstColumnHeader__())));
  if (!isFooter && column.m_isSortable__()) {
   isSortable = true;
   isSorted = $Equality.$same(column, sortedColumn);
  }
  let tr = this.m_startRow__();
  let /** number */ curColumn;
  for (curColumn = 1; curColumn < columnCount; curColumn++) {
   let header = this.m_getHeader__int(curColumn);
   if (!$Equality.$same(header, prevHeader)) {
    this.m_buildTableHeader__org_gwtproject_dom_builder_shared_TableRowBuilder__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__boolean__boolean__boolean__java_lang_StringBuilder__java_lang_String__java_lang_String__int__int_$p_org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder(tr, column, prevHeader, isSortable, isSorted, isSortAscending, classesBuilder, sortableStyle, sortedStyle, prevColspan, curColumn);
    prevHeader = header;
    prevColspan = 1;
    classesBuilder = StringBuilder.$create__java_lang_String(className);
    isSortable = false;
    isSorted = false;
   } else {
    prevColspan++;
   }
   column = table.m_getColumn__int(curColumn);
   if (!isFooter && column.m_isSortable__()) {
    isSortable = true;
    isSorted = $Equality.$same(column, sortedColumn);
   }
  }
  classesBuilder.m_append__java_lang_String(" ").m_append__java_lang_String(isFooter ? style.m_lastColumnFooter__() : style.m_lastColumnHeader__());
  this.m_buildTableHeader__org_gwtproject_dom_builder_shared_TableRowBuilder__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__boolean__boolean__boolean__java_lang_StringBuilder__java_lang_String__java_lang_String__int__int_$p_org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder(tr, column, prevHeader, isSortable, isSorted, isSortAscending, classesBuilder, sortableStyle, sortedStyle, prevColspan, curColumn);
  tr.m_endTR__();
  return true;
 }
 
 m_buildTableHeader__org_gwtproject_dom_builder_shared_TableRowBuilder__org_gwtproject_user_cellview_client_Column__org_gwtproject_user_cellview_client_Header__boolean__boolean__boolean__java_lang_StringBuilder__java_lang_String__java_lang_String__int__int_$p_org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder(/** TableRowBuilder */ tr, /** Column<T, ?> */ column, /** Header<?> */ header, /** boolean */ isSortable, /** boolean */ isSorted, /** boolean */ isSortAscending, /** StringBuilder */ classesBuilder, /** ?string */ sortableStyle, /** ?string */ sortedStyle, /** number */ prevColspan, /** number */ curColumn) {
  if (isSortable) {
   classesBuilder.m_append__java_lang_String(sortableStyle);
  }
  if (isSorted) {
   classesBuilder.m_append__java_lang_String(sortedStyle);
  }
  this.m_appendExtraStyles__org_gwtproject_user_cellview_client_Header__java_lang_StringBuilder_$p_org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder(header, classesBuilder);
  let th = /**@type {TableCellBuilder}*/ ($Casts.$to(tr.m_startTH__().m_colSpan__int(prevColspan).m_className__java_lang_String(classesBuilder.toString()), TableCellBuilder));
  this.m_enableColumnHandlers__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_user_cellview_client_Column(th, column);
  if (!$Equality.$same(header, null)) {
   let context = Context.$create__int__int__java_lang_Object(0, curColumn - prevColspan, header.m_getKey__());
   if (isSortable) {
    th.m_attribute__java_lang_String__java_lang_String("role", "button");
    th.m_tabIndex__int(-1);
   }
   this.m_renderSortableHeader__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_cell_client_Cell_Context__org_gwtproject_user_cellview_client_Header__boolean__boolean(th, context, header, isSorted, isSortAscending);
  }
  th.m_endTH__();
 }
 /** @template H */
 m_appendExtraStyles__org_gwtproject_user_cellview_client_Header__java_lang_StringBuilder_$p_org_gwtproject_user_cellview_client_DefaultHeaderOrFooterBuilder(/** Header<H> */ header, /** StringBuilder */ classesBuilder) {
  if ($Equality.$same(header, null)) {
   return;
  }
  let headerStyleNames = header.m_getHeaderStyleNames__();
  if (!$Equality.$same(headerStyleNames, null)) {
   classesBuilder.m_append__java_lang_String(" ");
   classesBuilder.m_append__java_lang_String(headerStyleNames);
  }
 }
 
 static $clinit() {
  DefaultHeaderOrFooterBuilder.$clinit = () =>{};
  DefaultHeaderOrFooterBuilder.$loadModules();
  AbstractHeaderOrFooterBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultHeaderOrFooterBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Context = goog.module.get('org.gwtproject.cell.client.Cell.Context$impl');
  TableCellBuilder = goog.module.get('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DefaultHeaderOrFooterBuilder, 'org.gwtproject.user.cellview.client.DefaultHeaderOrFooterBuilder');

exports = DefaultHeaderOrFooterBuilder; 
//# sourceMappingURL=DefaultHeaderOrFooterBuilder.js.map