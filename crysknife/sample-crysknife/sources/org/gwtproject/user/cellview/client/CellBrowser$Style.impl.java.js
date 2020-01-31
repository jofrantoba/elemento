goog.module('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_cellBrowserColumn__() {}
 /** @abstract @return {?string} */
 m_cellBrowserEvenItem__() {}
 /** @abstract @return {?string} */
 m_cellBrowserFirstColumn__() {}
 /** @abstract @return {?string} */
 m_cellBrowserKeyboardSelectedItem__() {}
 /** @abstract @return {?string} */
 m_cellBrowserOddItem__() {}
 /** @abstract @return {?string} */
 m_cellBrowserOpenItem__() {}
 /** @abstract @return {?string} */
 m_cellBrowserSelectedItem__() {}
 /** @abstract @return {?string} */
 m_cellBrowserWidget__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellBrowser_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellBrowser_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellBrowser$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellBrowser_Style = "org/gwtproject/user/cellview/client/CellBrowser.gss";

exports = Style; 
//# sourceMappingURL=CellBrowser$Style.js.map