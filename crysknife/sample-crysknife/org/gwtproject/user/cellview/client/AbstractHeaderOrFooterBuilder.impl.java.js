goog.module('org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FooterBuilder = goog.require('org.gwtproject.user.cellview.client.FooterBuilder$impl');
const HeaderBuilder = goog.require('org.gwtproject.user.cellview.client.HeaderBuilder$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let HtmlBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
let HtmlTableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');
let TableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
let TwoWayHashMap = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder.TwoWayHashMap$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.cellview.client.Header$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 * @template T
 * @implements {HeaderBuilder<T>}
 * @implements {FooterBuilder<T>}
  */
class AbstractHeaderOrFooterBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = false;
  /**@type {boolean}*/
  this.f_isSortIconStartOfLine__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = false;
  /**@type {number}*/
  this.f_sortAscIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  /**@type {SafeHtml}*/
  this.f_sortAscIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  /**@type {number}*/
  this.f_sortAscIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  /**@type {number}*/
  this.f_sortDescIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  /**@type {SafeHtml}*/
  this.f_sortDescIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  /**@type {number}*/
  this.f_sortDescIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  /**@type {AbstractCellTable<T>}*/
  this.f_table__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  /**@type {number}*/
  this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  /**@type {HtmlTableSectionBuilder}*/
  this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  /**@type {Map<?string, Column<T, ?>>}*/
  this.f_idToColumnMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  /**@type {TwoWayHashMap<?string, Header<?>>}*/
  this.f_idToHeaderMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder__org_gwtproject_user_cellview_client_AbstractCellTable__boolean(/** AbstractCellTable<T> */ table, /** boolean */ isFooter) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder();
  this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = isFooter;
  this.f_table__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = table;
  let asc = table.m_getResources__().m_sortAscending__();
  let desc = table.m_getResources__().m_sortDescending__();
  if (!$Equality.$same(asc, null)) {
   this.f_sortAscIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = asc.m_getWidth__() + AbstractHeaderOrFooterBuilder.f_ICON_PADDING__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
   this.f_sortAscIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = $Primitives.$narrowLongToInt(Math.m_round__double(asc.m_getHeight__() / 2.0));
  } else {
   this.f_sortAscIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
   this.f_sortAscIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  }
  if (!$Equality.$same(desc, null)) {
   this.f_sortDescIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = desc.m_getWidth__() + AbstractHeaderOrFooterBuilder.f_ICON_PADDING__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
   this.f_sortDescIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = $Primitives.$narrowLongToInt(Math.m_round__double(desc.m_getHeight__() / 2.0));
  } else {
   this.f_sortDescIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
   this.f_sortDescIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  }
 }
 /** @override @return {TableSectionBuilder} */
 m_buildFooter__() {
  if (!this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_) {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Cannot build footer because this builder is designated to build a header"));
  }
  return this.m_buildHeaderOrFooter___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder();
 }
 /** @override @return {TableSectionBuilder} */
 m_buildHeader__() {
  if (this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_) {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Cannot build header because this builder is designated to build a footer"));
  }
  return this.m_buildHeaderOrFooter___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder();
 }
 /** @override @return {Column<T, ?>} */
 m_getColumn__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let cellId = this.m_getColumnId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(elem);
  return $Equality.$same(cellId, null) ? null : /**@type {Column<T, *>}*/ ($Casts.$to(this.f_idToColumnMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.get(cellId), Column));
 }
 /** @override @return {Header<?>} */
 m_getHeader__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let headerId = this.m_getHeaderId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(elem);
  return $Equality.$same(headerId, null) ? null : /**@type {Header<*>}*/ ($Casts.$to(this.f_idToHeaderMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getValue__java_lang_Object_$pp_org_gwtproject_user_cellview_client(headerId), Header));
 }
 /** @override @return {number} */
 m_getRowIndex__org_gwtproject_dom_client_TableRowElement(/** Object */ row) {
  return Integer.m_parseInt__java_lang_String($Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(row, AbstractHeaderOrFooterBuilder.f_ROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_));
 }
 /** @return {boolean} */
 m_isBuildingFooter__() {
  return this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
 }
 /** @override @return {boolean} */
 m_isColumn__org_gwtproject_dom_client_Element(/** Object */ elem) {
  return !$Equality.$same(this.m_getColumnId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(elem), null);
 }
 /** @override @return {boolean} */
 m_isHeader__org_gwtproject_dom_client_Element(/** Object */ elem) {
  return !$Equality.$same(this.m_getHeaderId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(elem), null);
 }
 /** @return {boolean} */
 m_isSortIconStartOfLine__() {
  return this.f_isSortIconStartOfLine__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
 }
 
 m_setSortIconStartOfLine__boolean(/** boolean */ isStartOfLine) {
  this.f_isSortIconStartOfLine__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = isStartOfLine;
 }
 /** @abstract @return {boolean} */
 m_buildHeaderOrFooterImpl__() {}
 
 m_enableColumnHandlers__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_user_cellview_client_Column(/** ElementBuilderBase<?> */ builder, /** Column<T, ?> */ column) {
  let columnId = "column-" + j_l_String.m_valueOf__java_lang_Object(Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.f_idToColumnMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.put(columnId, column);
  builder.m_attribute__java_lang_String__java_lang_String(AbstractHeaderOrFooterBuilder.f_COLUMN_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_, columnId);
 }
 /** @return {Header<?>} */
 m_getHeader__int(/** number */ index) {
  return this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ ? this.m_getTable__().m_getFooter__int(index) : this.m_getTable__().m_getHeader__int(index);
 }
 /** @return {AbstractCellTable<T>} */
 m_getTable__() {
  return this.f_table__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
 }
 /** @template H */
 m_renderHeader__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_cell_client_Cell_Context__org_gwtproject_user_cellview_client_Header(/** ElementBuilderBase<?> */ out, /** Context */ context, /** Header<H> */ header) {
  let headerId = /**@type {?string}*/ ($Casts.$to(this.f_idToHeaderMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getKey__java_lang_Object_$pp_org_gwtproject_user_cellview_client(header), j_l_String));
  if ($Equality.$same(headerId, null)) {
   headerId = "header-" + j_l_String.m_valueOf__java_lang_Object(Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
   this.f_idToHeaderMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_put__java_lang_Object__java_lang_Object_$pp_org_gwtproject_user_cellview_client(headerId, header);
  }
  out.m_attribute__java_lang_String__java_lang_String(AbstractHeaderOrFooterBuilder.f_HEADER_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_, headerId);
  let sb = SafeHtmlBuilder.$create__();
  header.m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, sb);
  out.m_html__org_gwtproject_safehtml_shared_SafeHtml(sb.m_toSafeHtml__());
 }
 
 m_renderSortableHeader__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_cell_client_Cell_Context__org_gwtproject_user_cellview_client_Header__boolean__boolean(/** ElementBuilderBase<?> */ out, /** Context */ context, /** Header<?> */ header, /** boolean */ isSorted, /** boolean */ isSortAscending) {
  let headerContainer = out;
  isSorted = isSorted && !this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  if (isSorted) {
   let posRight = LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? this.f_isSortIconStartOfLine__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ : !this.f_isSortIconStartOfLine__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
   let iconWidth = isSortAscending ? this.f_sortAscIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ : this.f_sortDescIconWidth__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
   let halfHeight = isSortAscending ? this.f_sortAscIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ : this.f_sortDescIconHalfHeight__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
   let outerDiv = out.m_startDiv__();
   let style = outerDiv.m_style__().m_position__org_gwtproject_dom_style_shared_Position(Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position).m_trustedProperty__java_lang_String__java_lang_String("zoom", "1");
   if (posRight) {
    style.m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(iconWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   } else {
    style.m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(iconWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   }
   style.m_endStyle__();
   let imageHolder = outerDiv.m_startDiv__();
   style = outerDiv.m_style__().m_position__org_gwtproject_dom_style_shared_Position(Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position).m_top__double__org_gwtproject_dom_style_shared_Unit(50.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit).m_lineHeight__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit).m_marginTop__double__org_gwtproject_dom_style_shared_Unit(-halfHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   if (posRight) {
    style.m_right__double__org_gwtproject_dom_style_shared_Unit(0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   } else {
    style.m_left__double__org_gwtproject_dom_style_shared_Unit(0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   }
   style.m_endStyle__();
   imageHolder.m_html__org_gwtproject_safehtml_shared_SafeHtml(this.m_getSortIcon__boolean_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(isSortAscending));
   imageHolder.m_endDiv__();
   headerContainer = outerDiv.m_startDiv__();
  }
  this.m_renderHeader__org_gwtproject_dom_builder_shared_ElementBuilderBase__org_gwtproject_cell_client_Cell_Context__org_gwtproject_user_cellview_client_Header(headerContainer, context, header);
  if (isSorted) {
   headerContainer.m_endDiv__();
   headerContainer.m_endDiv__();
  }
 }
 /** @return {TableRowBuilder} */
 m_startRow__() {
  while (this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getDepth__() > 1) {
   this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_end__();
  }
  if (this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getDepth__() < 1) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Cannot start a row.  Did you call TableRowBuilder.end() too many times?"));
  }
  let row = this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_startTR__();
  row.m_attribute__java_lang_String__int(AbstractHeaderOrFooterBuilder.f_ROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_, this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_);
  this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_++;
  return row;
 }
 /** @return {TableSectionBuilder} */
 m_buildHeaderOrFooter___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder() {
  this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = this.f_isFooter__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ ? HtmlBuilderFactory.m_get__().m_createTFootBuilder__() : HtmlBuilderFactory.m_get__().m_createTHeadBuilder__();
  this.f_idToHeaderMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_clear___$pp_org_gwtproject_user_cellview_client();
  this.f_idToColumnMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.clear();
  this.f_rowIndex__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 0;
  if (!this.m_buildHeaderOrFooterImpl__()) {
   return null;
  }
  while (this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getDepth__() > 0) {
   this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_end__();
  }
  return this.f_section__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
 }
 /** @return {?string} */
 m_getColumnId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(/** Object */ elem) {
  return this.m_getElementAttribute__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(elem, AbstractHeaderOrFooterBuilder.f_COLUMN_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_);
 }
 /** @return {?string} */
 m_getElementAttribute__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(/** Object */ elem, /** ?string */ attribute) {
  if ($Equality.$same(elem, null)) {
   return null;
  }
  let value = $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attribute);
  return $Equality.$same(value, null) || (j_l_String.m_length__java_lang_String(value) == 0) ? null : value;
 }
 /** @return {?string} */
 m_getHeaderId__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(/** Object */ elem) {
  return this.m_getElementAttribute__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(elem, AbstractHeaderOrFooterBuilder.f_HEADER_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_);
 }
 /** @return {SafeHtml} */
 m_getSortIcon__boolean_$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder(/** boolean */ isAscending) {
  if (isAscending) {
   if ($Equality.$same(this.f_sortAscIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_, null)) {
    let proto = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(this.f_table__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getResources__().m_sortAscending__());
    this.f_sortAscIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = SafeHtmlUtils.m_fromTrustedString__java_lang_String(proto.m_getHTML__());
   }
   return this.f_sortAscIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  } else {
   if ($Equality.$same(this.f_sortDescIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_, null)) {
    let proto_1 = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(this.f_table__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_.m_getResources__().m_sortDescending__());
    this.f_sortDescIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = SafeHtmlUtils.m_fromTrustedString__java_lang_String(proto_1.m_getHTML__());
   }
   return this.f_sortDescIconHtml__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_;
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder() {
  this.f_isSortIconStartOfLine__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = true;
  this.f_idToColumnMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = /**@type {!HashMap<?string, Column<T, ?>>}*/ (HashMap.$create__());
  this.f_idToHeaderMap__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = /**@type {!TwoWayHashMap<?string, Header<?>>}*/ (TwoWayHashMap.$create__());
 }
 
 static $clinit() {
  AbstractHeaderOrFooterBuilder.$clinit = () =>{};
  AbstractHeaderOrFooterBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractHeaderOrFooterBuilder;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HtmlBuilderFactory = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  TwoWayHashMap = goog.module.get('org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder.TwoWayHashMap$impl');
  Column = goog.module.get('org.gwtproject.user.cellview.client.Column$impl');
  Header = goog.module.get('org.gwtproject.user.cellview.client.Header$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(AbstractHeaderOrFooterBuilder, 'org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder');

HeaderBuilder.$markImplementor(AbstractHeaderOrFooterBuilder);
FooterBuilder.$markImplementor(AbstractHeaderOrFooterBuilder);

/**@const {?string}*/
AbstractHeaderOrFooterBuilder.f_COLUMN_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = "__gwt_column";
/**@const {?string}*/
AbstractHeaderOrFooterBuilder.f_HEADER_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = "__gwt_header";
/**@const {?string}*/
AbstractHeaderOrFooterBuilder.f_ROW_ATTRIBUTE__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = "__gwt_header_row";
/**@const {number}*/
AbstractHeaderOrFooterBuilder.f_ICON_PADDING__org_gwtproject_user_cellview_client_AbstractHeaderOrFooterBuilder_ = 6;

exports = AbstractHeaderOrFooterBuilder; 
//# sourceMappingURL=AbstractHeaderOrFooterBuilder.js.map