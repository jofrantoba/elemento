goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');

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
 m_nativeHorizontalScrollbar__() {}
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Style = "org/gwtproject/user/client/ui/NativeHorizontalScrollbar.gss";

exports = Style; 
//# sourceMappingURL=NativeHorizontalScrollbar$Style.js.map