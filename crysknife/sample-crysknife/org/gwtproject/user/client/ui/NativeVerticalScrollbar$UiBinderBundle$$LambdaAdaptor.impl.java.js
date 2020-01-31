goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinderBundle = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle$impl');

let UiStyle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');

/**
 * @implements {UiBinderBundle}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():UiStyle */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():UiStyle}*/
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$JsFunction(/** ?function():UiStyle */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$LambdaAdaptor = fn;
 }
 /** @return {UiStyle} */
 m_nativeVerticalScrollbarUi__() {
  let /** ?function():UiStyle */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle_$LambdaAdaptor, $function());
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$UiBinderBundle$$LambdaAdaptor');

UiBinderBundle.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NativeVerticalScrollbar$UiBinderBundle$$LambdaAdaptor.js.map