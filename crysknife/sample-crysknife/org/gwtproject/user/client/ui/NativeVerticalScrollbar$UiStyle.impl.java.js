goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class UiStyle {
 /** @abstract @return {?string} */
 m_viewport__() {}
 /** @abstract @return {?string} */
 m_scrollable__() {}
 
 static $clinit() {
  UiStyle.$clinit = () =>{};
  UiStyle.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiStyle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiStyle;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiStyle, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$UiStyle');

UiStyle.$markImplementor(/** @type {Function} */ (UiStyle));

exports = UiStyle; 
//# sourceMappingURL=NativeVerticalScrollbar$UiStyle.js.map