goog.module('org.gwtproject.user.cellview.client.DataGrid.Style$impl');

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
 m_dataGridCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridEvenRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridEvenRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridFirstColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridFirstColumnFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridFirstColumnHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridHoveredRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridHoveredRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridKeyboardSelectedCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridKeyboardSelectedRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridKeyboardSelectedRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridLastColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridLastColumnFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridLastColumnHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridOddRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridOddRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridSelectedRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridSelectedRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridSortableHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridSortedHeaderAscending__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridSortedHeaderDescending__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_dataGridWidget__() {}
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_DataGrid_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_DataGrid_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.DataGrid$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_DataGrid_Style = "org/gwtproject/user/cellview/client/DataGrid.gss";

exports = Style; 
//# sourceMappingURL=DataGrid$Style.js.map