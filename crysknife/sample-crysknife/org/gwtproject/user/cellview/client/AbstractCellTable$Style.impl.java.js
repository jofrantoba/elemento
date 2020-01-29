goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Style {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_evenRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_evenRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_firstColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_firstColumnFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_firstColumnHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_footer__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_header__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_hoveredRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_hoveredRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_keyboardSelectedCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_keyboardSelectedRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_keyboardSelectedRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_lastColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_lastColumnFooter__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_lastColumnHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_oddRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_oddRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_selectedRow__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_selectedRowCell__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_sortableHeader__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_sortedHeaderAscending__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_sortedHeaderDescending__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_widget__() {}
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
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.AbstractCellTable$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

exports = Style; 
//# sourceMappingURL=AbstractCellTable$Style.js.map