goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle.$LambdaAdaptor$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle {
 /**
  * @abstract
  * @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style}
  * @public
  */
 m_style__() {}
 /**
  * @param {?function():NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style} fn
  * @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle}
  * @public
  */
 static $adapt(fn) {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle.$clinit = () =>{};
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle');

NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle.$markImplementor(/** @type {Function} */ (NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle));

exports = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle.js.map