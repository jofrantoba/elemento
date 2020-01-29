goog.module('org.gwtproject.user.cellview.client.CellList.Style$impl');

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
 m_cellListEvenItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellListKeyboardSelectedItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellListOddItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellListSelectedItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellListWidget__() {}
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellList_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellList_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellList$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellList_Style = "org/gwtproject/user/cellview/client/CellList.gss";

exports = Style; 
//# sourceMappingURL=CellList$Style.js.map