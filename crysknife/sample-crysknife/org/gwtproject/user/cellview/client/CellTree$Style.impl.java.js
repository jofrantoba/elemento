goog.module('org.gwtproject.user.cellview.client.CellTree.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_cellTreeEmptyMessage__() {}
 /** @abstract @return {?string} */
 m_cellTreeItem__() {}
 /** @abstract @return {?string} */
 m_cellTreeItemImage__() {}
 /** @abstract @return {?string} */
 m_cellTreeItemImageValue__() {}
 /** @abstract @return {?string} */
 m_cellTreeItemValue__() {}
 /** @abstract @return {?string} */
 m_cellTreeKeyboardSelectedItem__() {}
 /** @abstract @return {?string} */
 m_cellTreeOpenItem__() {}
 /** @abstract @return {?string} */
 m_cellTreeSelectedItem__() {}
 /** @abstract @return {?string} */
 m_cellTreeShowMoreButton__() {}
 /** @abstract @return {?string} */
 m_cellTreeTopItem__() {}
 /** @abstract @return {?string} */
 m_cellTreeTopItemImage__() {}
 /** @abstract @return {?string} */
 m_cellTreeTopItemImageValue__() {}
 /** @abstract @return {?string} */
 m_cellTreeWidget__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellTree$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellTree_Style = "org/gwtproject/user/cellview/client/CellTree.gss";

exports = Style; 
//# sourceMappingURL=CellTree$Style.js.map