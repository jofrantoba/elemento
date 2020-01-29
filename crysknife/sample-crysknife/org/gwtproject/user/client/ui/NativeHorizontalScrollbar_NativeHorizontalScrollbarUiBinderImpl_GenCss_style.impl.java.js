goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style {
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
  * @abstract
  * @return {?string}
  * @public
  */
 m_content__() {}
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$clinit = () =>{};
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style');

NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$markImplementor(/** @type {Function} */ (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style));

exports = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style.js.map