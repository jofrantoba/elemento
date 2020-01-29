goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.StyleTransparant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');

/**
 * @interface
 * @extends {Style}
 */
class StyleTransparant {
 /**
  * @public
  */
 static $clinit() {
  StyleTransparant.$clinit = () =>{};
  StyleTransparant.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Style.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_StyleTransparant = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_StyleTransparant;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StyleTransparant, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$StyleTransparant');

StyleTransparant.$markImplementor(/** @type {Function} */ (StyleTransparant));

/** @public {?string} @const */
StyleTransparant.f_DEFAULT_CSS__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_StyleTransparant = "org/gwtproject/user/client/ui/NativeHorizontalScrollbarTransparent.gss";

exports = StyleTransparant; 
//# sourceMappingURL=NativeHorizontalScrollbar$StyleTransparant.js.map