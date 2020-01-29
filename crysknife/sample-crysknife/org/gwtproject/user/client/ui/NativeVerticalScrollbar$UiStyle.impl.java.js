goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class UiStyle {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_viewport__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_scrollable__() {}
 /**
  * @public
  */
 static $clinit() {
  UiStyle.$clinit = () =>{};
  UiStyle.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiStyle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiStyle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiStyle, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$UiStyle');

UiStyle.$markImplementor(/** @type {Function} */ (UiStyle));

exports = UiStyle; 
//# sourceMappingURL=NativeVerticalScrollbar$UiStyle.js.map