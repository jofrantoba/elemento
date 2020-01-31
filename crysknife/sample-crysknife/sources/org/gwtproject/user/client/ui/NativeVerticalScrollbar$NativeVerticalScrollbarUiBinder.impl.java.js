goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeVerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {UiBinder<Object, NativeVerticalScrollbar>}
 */
class NativeVerticalScrollbarUiBinder {
 /** @return {NativeVerticalScrollbarUiBinder} */
 static $adapt(/** ?function(NativeVerticalScrollbar):Object */ fn) {
  NativeVerticalScrollbarUiBinder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  NativeVerticalScrollbarUiBinder.$clinit = () =>{};
  NativeVerticalScrollbarUiBinder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  UiBinder.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinder;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NativeVerticalScrollbarUiBinder, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$NativeVerticalScrollbarUiBinder');

NativeVerticalScrollbarUiBinder.$markImplementor(/** @type {Function} */ (NativeVerticalScrollbarUiBinder));

exports = NativeVerticalScrollbarUiBinder; 
//# sourceMappingURL=NativeVerticalScrollbar$NativeVerticalScrollbarUiBinder.js.map