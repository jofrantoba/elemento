goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeHorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder.$LambdaAdaptor$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');

/**
 * @interface
 * @extends {UiBinder<Object, NativeHorizontalScrollbar>}
 */
class NativeHorizontalScrollbarUiBinder {
 /**
  * @param {?function(NativeHorizontalScrollbar):Object} fn
  * @return {NativeHorizontalScrollbarUiBinder}
  * @public
  */
 static $adapt(fn) {
  NativeHorizontalScrollbarUiBinder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {NativeHorizontalScrollbarUiBinder}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder() {
  return (NativeHorizontalScrollbarUiBinder.$clinit(), NativeHorizontalScrollbarUiBinder.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder);
 }
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbarUiBinder.$clinit = () =>{};
  NativeHorizontalScrollbarUiBinder.$loadModules();
  NativeHorizontalScrollbarUiBinder.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  UiBinder.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder.$LambdaAdaptor$impl');
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NativeHorizontalScrollbarUiBinder, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$NativeHorizontalScrollbarUiBinder');

NativeHorizontalScrollbarUiBinder.$markImplementor(/** @type {Function} */ (NativeHorizontalScrollbarUiBinder));

/** @private {NativeHorizontalScrollbarUiBinder} */
NativeHorizontalScrollbarUiBinder.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder;

exports = NativeHorizontalScrollbarUiBinder; 
//# sourceMappingURL=NativeHorizontalScrollbar$NativeHorizontalScrollbarUiBinder.js.map