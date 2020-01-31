goog.module('org.gwtproject.user.cellview.client.DataGrid.StyleAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');

let DataGrid_Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid.Style$impl');

/**
 * @implements {Style}
  */
class StyleAdapter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataGrid_Style}*/
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_;
 }
 /** @return {!StyleAdapter} */
 static $create__org_gwtproject_user_cellview_client_DataGrid_Style(/** DataGrid_Style */ style) {
  StyleAdapter.$clinit();
  let $instance = new StyleAdapter();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter__org_gwtproject_user_cellview_client_DataGrid_Style(style);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter__org_gwtproject_user_cellview_client_DataGrid_Style(/** DataGrid_Style */ style) {
  this.$ctor__java_lang_Object__();
  this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_ = style;
 }
 /** @override @return {?string} */
 m_cell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridCell__();
 }
 /** @override @return {?string} */
 m_evenRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridEvenRow__();
 }
 /** @override @return {?string} */
 m_evenRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridEvenRowCell__();
 }
 /** @override @return {?string} */
 m_firstColumn__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridFirstColumn__();
 }
 /** @override @return {?string} */
 m_firstColumnFooter__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridFirstColumnFooter__();
 }
 /** @override @return {?string} */
 m_firstColumnHeader__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridFirstColumnHeader__();
 }
 /** @override @return {?string} */
 m_footer__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridFooter__();
 }
 /** @override @return {?string} */
 m_header__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridHeader__();
 }
 /** @override @return {?string} */
 m_hoveredRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridHoveredRow__();
 }
 /** @override @return {?string} */
 m_hoveredRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridHoveredRowCell__();
 }
 /** @override @return {?string} */
 m_keyboardSelectedCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridKeyboardSelectedCell__();
 }
 /** @override @return {?string} */
 m_keyboardSelectedRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridKeyboardSelectedRow__();
 }
 /** @override @return {?string} */
 m_keyboardSelectedRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridKeyboardSelectedRowCell__();
 }
 /** @override @return {?string} */
 m_lastColumn__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridLastColumn__();
 }
 /** @override @return {?string} */
 m_lastColumnFooter__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridLastColumnFooter__();
 }
 /** @override @return {?string} */
 m_lastColumnHeader__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridLastColumnHeader__();
 }
 /** @override @return {?string} */
 m_oddRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridOddRow__();
 }
 /** @override @return {?string} */
 m_oddRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridOddRowCell__();
 }
 /** @override @return {?string} */
 m_selectedRow__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridSelectedRow__();
 }
 /** @override @return {?string} */
 m_selectedRowCell__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridSelectedRowCell__();
 }
 /** @override @return {?string} */
 m_sortableHeader__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridSortableHeader__();
 }
 /** @override @return {?string} */
 m_sortedHeaderAscending__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridSortedHeaderAscending__();
 }
 /** @override @return {?string} */
 m_sortedHeaderDescending__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridSortedHeaderDescending__();
 }
 /** @override @return {?string} */
 m_widget__() {
  return this.f_style__org_gwtproject_user_cellview_client_DataGrid_StyleAdapter_.m_dataGridWidget__();
 }
 
 static $clinit() {
  StyleAdapter.$clinit = () =>{};
  StyleAdapter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StyleAdapter;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(StyleAdapter, 'org.gwtproject.user.cellview.client.DataGrid$StyleAdapter');

Style.$markImplementor(StyleAdapter);

exports = StyleAdapter; 
//# sourceMappingURL=DataGrid$StyleAdapter.js.map