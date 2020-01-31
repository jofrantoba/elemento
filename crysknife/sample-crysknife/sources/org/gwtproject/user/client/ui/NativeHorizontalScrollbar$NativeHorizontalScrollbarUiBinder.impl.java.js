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
 /** @return {NativeHorizontalScrollbarUiBinder} */
 static $adapt(/** ?function(NativeHorizontalScrollbar):Object */ fn) {
  NativeHorizontalScrollbarUiBinder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {NativeHorizontalScrollbarUiBinder} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder() {
  return (NativeHorizontalScrollbarUiBinder.$clinit(), NativeHorizontalScrollbarUiBinder.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder);
 }
 
 static $clinit() {
  NativeHorizontalScrollbarUiBinder.$clinit = () =>{};
  NativeHorizontalScrollbarUiBinder.$loadModules();
  NativeHorizontalScrollbarUiBinder.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  UiBinder.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder.$LambdaAdaptor$impl');
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NativeHorizontalScrollbarUiBinder, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$NativeHorizontalScrollbarUiBinder');

NativeHorizontalScrollbarUiBinder.$markImplementor(/** @type {Function} */ (NativeHorizontalScrollbarUiBinder));

/**@private {NativeHorizontalScrollbarUiBinder}*/
NativeHorizontalScrollbarUiBinder.$f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinder;

exports = NativeHorizontalScrollbarUiBinder; 
//# sourceMappingURL=NativeHorizontalScrollbar$NativeHorizontalScrollbarUiBinder.js.map