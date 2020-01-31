goog.module('org.gwtproject.user.cellview.client.CellTable.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_cellTableCell__() {}
 /** @abstract @return {?string} */
 m_cellTableEvenRow__() {}
 /** @abstract @return {?string} */
 m_cellTableEvenRowCell__() {}
 /** @abstract @return {?string} */
 m_cellTableFirstColumn__() {}
 /** @abstract @return {?string} */
 m_cellTableFirstColumnFooter__() {}
 /** @abstract @return {?string} */
 m_cellTableFirstColumnHeader__() {}
 /** @abstract @return {?string} */
 m_cellTableFooter__() {}
 /** @abstract @return {?string} */
 m_cellTableHeader__() {}
 /** @abstract @return {?string} */
 m_cellTableHoveredRow__() {}
 /** @abstract @return {?string} */
 m_cellTableHoveredRowCell__() {}
 /** @abstract @return {?string} */
 m_cellTableKeyboardSelectedCell__() {}
 /** @abstract @return {?string} */
 m_cellTableKeyboardSelectedRow__() {}
 /** @abstract @return {?string} */
 m_cellTableKeyboardSelectedRowCell__() {}
 /** @abstract @return {?string} */
 m_cellTableLastColumn__() {}
 /** @abstract @return {?string} */
 m_cellTableLastColumnFooter__() {}
 /** @abstract @return {?string} */
 m_cellTableLastColumnHeader__() {}
 /** @abstract @return {?string} */
 m_cellTableLoading__() {}
 /** @abstract @return {?string} */
 m_cellTableOddRow__() {}
 /** @abstract @return {?string} */
 m_cellTableOddRowCell__() {}
 /** @abstract @return {?string} */
 m_cellTableSelectedRow__() {}
 /** @abstract @return {?string} */
 m_cellTableSelectedRowCell__() {}
 /** @abstract @return {?string} */
 m_cellTableSortableHeader__() {}
 /** @abstract @return {?string} */
 m_cellTableSortedHeaderAscending__() {}
 /** @abstract @return {?string} */
 m_cellTableSortedHeaderDescending__() {}
 /** @abstract @return {?string} */
 m_cellTableWidget__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTable_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTable_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellTable$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellTable_Style = "org/gwtproject/user/cellview/client/CellTable.gss";

exports = Style; 
//# sourceMappingURL=CellTable$Style.js.map