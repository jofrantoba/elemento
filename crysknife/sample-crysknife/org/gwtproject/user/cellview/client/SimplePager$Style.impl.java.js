goog.module('org.gwtproject.user.cellview.client.SimplePager.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_button__() {}
 /** @abstract @return {?string} */
 m_disabledButton__() {}
 /** @abstract @return {?string} */
 m_pageDetails__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_SimplePager_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_SimplePager_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.cellview.client.SimplePager$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

exports = Style; 
//# sourceMappingURL=SimplePager$Style.js.map