goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style {
 /** @abstract @return {?string} */
 m_viewport__() {}
 /** @abstract @return {?string} */
 m_scrollable__() {}
 /** @abstract @return {?string} */
 m_content__() {}
 
 static $clinit() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$clinit = () =>{};
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style');

NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$markImplementor(/** @type {Function} */ (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style));

exports = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style.js.map