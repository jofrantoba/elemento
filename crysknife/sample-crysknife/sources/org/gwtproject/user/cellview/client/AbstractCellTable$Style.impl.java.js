goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Style {
 /** @abstract @return {?string} */
 m_cell__() {}
 /** @abstract @return {?string} */
 m_evenRow__() {}
 /** @abstract @return {?string} */
 m_evenRowCell__() {}
 /** @abstract @return {?string} */
 m_firstColumn__() {}
 /** @abstract @return {?string} */
 m_firstColumnFooter__() {}
 /** @abstract @return {?string} */
 m_firstColumnHeader__() {}
 /** @abstract @return {?string} */
 m_footer__() {}
 /** @abstract @return {?string} */
 m_header__() {}
 /** @abstract @return {?string} */
 m_hoveredRow__() {}
 /** @abstract @return {?string} */
 m_hoveredRowCell__() {}
 /** @abstract @return {?string} */
 m_keyboardSelectedCell__() {}
 /** @abstract @return {?string} */
 m_keyboardSelectedRow__() {}
 /** @abstract @return {?string} */
 m_keyboardSelectedRowCell__() {}
 /** @abstract @return {?string} */
 m_lastColumn__() {}
 /** @abstract @return {?string} */
 m_lastColumnFooter__() {}
 /** @abstract @return {?string} */
 m_lastColumnHeader__() {}
 /** @abstract @return {?string} */
 m_oddRow__() {}
 /** @abstract @return {?string} */
 m_oddRowCell__() {}
 /** @abstract @return {?string} */
 m_selectedRow__() {}
 /** @abstract @return {?string} */
 m_selectedRowCell__() {}
 /** @abstract @return {?string} */
 m_sortableHeader__() {}
 /** @abstract @return {?string} */
 m_sortedHeaderAscending__() {}
 /** @abstract @return {?string} */
 m_sortedHeaderDescending__() {}
 /** @abstract @return {?string} */
 m_widget__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.AbstractCellTable$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

exports = Style; 
//# sourceMappingURL=AbstractCellTable$Style.js.map