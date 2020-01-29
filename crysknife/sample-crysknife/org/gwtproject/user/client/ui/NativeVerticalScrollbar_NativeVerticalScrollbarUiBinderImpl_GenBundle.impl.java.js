goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle {
 /**
  * @public
  */
 static $clinit() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle.$clinit = () =>{};
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle');

NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle.$markImplementor(/** @type {Function} */ (NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle));

exports = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle; 
//# sourceMappingURL=NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle.js.map