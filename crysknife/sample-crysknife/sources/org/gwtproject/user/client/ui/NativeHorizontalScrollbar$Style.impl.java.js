goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_nativeHorizontalScrollbar__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Style = "org/gwtproject/user/client/ui/NativeHorizontalScrollbar.gss";

exports = Style; 
//# sourceMappingURL=NativeHorizontalScrollbar$Style.js.map