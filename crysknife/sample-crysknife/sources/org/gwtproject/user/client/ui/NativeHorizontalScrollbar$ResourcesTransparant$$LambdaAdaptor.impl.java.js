goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.ResourcesTransparant.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcesTransparant = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.ResourcesTransparant$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');

/**
 * @implements {ResourcesTransparant}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Style */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Style}*/
  this.f_$$fn__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$JsFunction(/** ?function():Style */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$LambdaAdaptor = fn;
 }
 /** @return {Style} */
 m_nativeHorizontalScrollbarStyle__() {
  let /** ?function():Style */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparant_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar$ResourcesTransparant$$LambdaAdaptor');

ResourcesTransparant.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NativeHorizontalScrollbar$ResourcesTransparant$$LambdaAdaptor.js.map