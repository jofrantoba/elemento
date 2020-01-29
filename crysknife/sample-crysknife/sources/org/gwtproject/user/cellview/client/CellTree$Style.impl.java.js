goog.module('org.gwtproject.user.cellview.client.CellTree.Style$impl');

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
 m_cellTreeEmptyMessage__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeItemImage__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeItemImageValue__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeItemValue__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeKeyboardSelectedItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeOpenItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeSelectedItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeShowMoreButton__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeTopItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeTopItemImage__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeTopItemImageValue__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellTreeWidget__() {}
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellTree$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellTree_Style = "org/gwtproject/user/cellview/client/CellTree.gss";

exports = Style; 
//# sourceMappingURL=CellTree$Style.js.map