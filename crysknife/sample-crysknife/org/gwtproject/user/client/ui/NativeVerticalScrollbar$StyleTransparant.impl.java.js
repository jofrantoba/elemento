goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.StyleTransparant$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');

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
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_StyleTransparant = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_StyleTransparant;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StyleTransparant, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$StyleTransparant');

StyleTransparant.$markImplementor(/** @type {Function} */ (StyleTransparant));

/**@const {?string}*/
StyleTransparant.f_DEFAULT_CSS__org_gwtproject_user_client_ui_NativeVerticalScrollbar_StyleTransparant = "org/gwtproject/user/client/ui/NativeVerticalScrollbarTransparent.gss";

exports = StyleTransparant; 
//# sourceMappingURL=NativeVerticalScrollbar$StyleTransparant.js.map