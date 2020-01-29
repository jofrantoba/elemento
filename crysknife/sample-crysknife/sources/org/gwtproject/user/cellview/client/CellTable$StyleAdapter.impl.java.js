goog.module('org.gwtproject.user.cellview.client.CellTable.StyleAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');

let CellTable_Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.Style$impl');

/**
 * @implements {Style}
  */
class StyleAdapter extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellTable_Style} */
  this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_;
 }
 /**
  * @param {CellTable_Style} style
  * @return {!StyleAdapter}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTable_Style(style) {
  StyleAdapter.$clinit();
  let $instance = new StyleAdapter();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_StyleAdapter__org_gwtproject_user_cellview_client_CellTable_Style(style);
  return $instance;
 }
 /**
  * @param {CellTable_Style} style
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_StyleAdapter__org_gwtproject_user_cellview_client_CellTable_Style(style) {
  this.$ctor__java_lang_Object__();
  this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_ = style;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_evenRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableEvenRow__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_evenRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableEvenRowCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_firstColumn__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableFirstColumn__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_firstColumnFooter__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableFirstColumnFooter__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_firstColumnHeader__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableFirstColumnHeader__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_footer__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableFooter__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_header__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableHeader__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_hoveredRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableHoveredRow__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_hoveredRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableHoveredRowCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_keyboardSelectedCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableKeyboardSelectedCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_keyboardSelectedRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableKeyboardSelectedRow__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_keyboardSelectedRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableKeyboardSelectedRowCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_lastColumn__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableLastColumn__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_lastColumnFooter__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableLastColumnFooter__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_lastColumnHeader__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableLastColumnHeader__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_oddRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableOddRow__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_oddRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableOddRowCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selectedRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableSelectedRow__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selectedRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableSelectedRowCell__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_sortableHeader__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableSortableHeader__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_sortedHeaderAscending__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableSortedHeaderAscending__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_sortedHeaderDescending__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableSortedHeaderDescending__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_widget__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellTable_StyleAdapter_.m_cellTableWidget__();
 }
 /**
  * @public
  */
 static $clinit() {
  StyleAdapter.$clinit = () =>{};
  StyleAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StyleAdapter;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(StyleAdapter, 'org.gwtproject.user.cellview.client.CellTable$StyleAdapter');

Style.$markImplementor(StyleAdapter);

exports = StyleAdapter; 
//# sourceMappingURL=CellTable$StyleAdapter.js.map