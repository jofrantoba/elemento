goog.module('org.gwtproject.user.cellview.client.CellList.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_cellListEvenItem__() {}
 /** @abstract @return {?string} */
 m_cellListKeyboardSelectedItem__() {}
 /** @abstract @return {?string} */
 m_cellListOddItem__() {}
 /** @abstract @return {?string} */
 m_cellListSelectedItem__() {}
 /** @abstract @return {?string} */
 m_cellListWidget__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellList_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellList_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellList$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellList_Style = "org/gwtproject/user/cellview/client/CellList.gss";

exports = Style; 
//# sourceMappingURL=CellList$Style.js.map