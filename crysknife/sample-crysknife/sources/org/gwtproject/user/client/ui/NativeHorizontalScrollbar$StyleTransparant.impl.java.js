goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.StyleTransparant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');

/**
 * @interface
 * @extends {Style}
 */
class StyleTransparant {
 
 static $clinit() {
  StyleTransparant.$clinit = () =>{};
  StyleTransparant.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Style.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_StyleTransparant = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_StyleTransparant;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StyleTransparant, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$StyleTransparant');

StyleTransparant.$markImplementor(/** @type {Function} */ (StyleTransparant));

/**@const {?string}*/
StyleTransparant.f_DEFAULT_CSS__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_StyleTransparant = "org/gwtproject/user/client/ui/NativeHorizontalScrollbarTransparent.gss";

exports = StyleTransparant; 
//# sourceMappingURL=NativeHorizontalScrollbar$StyleTransparant.js.map