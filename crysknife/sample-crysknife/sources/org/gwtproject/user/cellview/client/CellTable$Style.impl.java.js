goog.module('org.gwtproject.user.cellview.client.CellTable.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableEvenRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableEvenRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumnFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumnHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableHoveredRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableHoveredRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableLastColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableLastColumnFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableLastColumnHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableLoading__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableOddRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableOddRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableSelectedRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableSelectedRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableSortableHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableSortedHeaderAscending__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableSortedHeaderDescending__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTableWidget__() {}
 /**
  * @public
  */
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CssResource.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTable_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTable_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellTable$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellTable_Style = "org/gwtproject/user/cellview/client/CellTable.gss";

exports = Style; 
//# sourceMappingURL=CellTable$Style.js.map