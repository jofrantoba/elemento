goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.StyleTransparant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');

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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_StyleTransparant = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_StyleTransparant;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StyleTransparant, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$StyleTransparant');

StyleTransparant.$markImplementor(/** @type {Function} */ (StyleTransparant));

/** @public {?string} @const */
StyleTransparant.f_DEFAULT_CSS__org_gwtproject_user_client_ui_NativeVerticalScrollbar_StyleTransparant = "org/gwtproject/user/client/ui/NativeVerticalScrollbarTransparent.gss";

exports = StyleTransparant; 
//# sourceMappingURL=NativeVerticalScrollbar$StyleTransparant.js.map