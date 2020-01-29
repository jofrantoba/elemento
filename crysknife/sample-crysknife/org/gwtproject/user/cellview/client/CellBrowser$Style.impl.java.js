goog.module('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');

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
 m_cellBrowserColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserEvenItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserFirstColumn__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserKeyboardSelectedItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserOddItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserOpenItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserSelectedItem__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_cellBrowserWidget__() {}
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellBrowser_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellBrowser_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.CellBrowser$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_cellview_client_CellBrowser_Style = "org/gwtproject/user/cellview/client/CellBrowser.gss";

exports = Style; 
//# sourceMappingURL=CellBrowser$Style.js.map