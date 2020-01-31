goog.module('org.gwtproject.user.cellview.client.DataGrid.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_dataGridCell__() {}
 /** @abstract @return {?string} */
 m_dataGridEvenRow__() {}
 /** @abstract @return {?string} */
 m_dataGridEvenRowCell__() {}
 /** @abstract @return {?string} */
 m_dataGridFirstColumn__() {}
 /** @abstract @return {?string} */
 m_dataGridFirstColumnFooter__() {}
 /** @abstract @return {?string} */
 m_dataGridFirstColumnHeader__() {}
 /** @abstract @return {?string} */
 m_dataGridFooter__() {}
 /** @abstract @return {?string} */
 m_dataGridHeader__() {}
 /** @abstract @return {?string} */
 m_dataGridHoveredRow__() {}
 /** @abstract @return {?string} */
 m_dataGridHoveredRowCell__() {}
 /** @abstract @return {?string} */
 m_dataGridKeyboardSelectedCell__() {}
 /** @abstract @return {?string} */
 m_dataGridKeyboardSelectedRow__() {}
 /** @abstract @return {?string} */
 m_dataGridKeyboardSelectedRowCell__() {}
 /** @abstract @return {?string} */
 m_dataGridLastColumn__() {}
 /** @abstract @return {?string} */
 m_dataGridLastColumnFooter__() {}
 /** @abstract @return {?string} */
 m_dataGridLastColumnHeader__() {}
 /** @abstract @return {?string} */
 m_dataGridOddRow__() {}
 /** @abstract @return {?string} */
 m_dataGridOddRowCell__() {}
 /** @abstract @return {?string} */
 m_dataGridSelectedRow__() {}
 /** @abstract @return {?string} */
 m_dataGridSelectedRowCell__() {}
 /** @abstract @return {?string} */
 m_dataGridSortableHeader__() {}
 /** @abstract @return {?string} */
 m_dataGridSortedHeaderAscending__() {}
 /** @abstract @return {?string} */
 m_dataGridSortedHeaderDescending__() {}
 /** @abstract @return {?string} */
 m_dataGridWidget__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_DataGrid_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_DataGrid_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.DataGrid$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_DataGrid_Style = "org/gwtproject/user/cellview/client/DataGrid.gss";

exports = Style; 
//# sourceMappingURL=DataGrid$Style.js.map