goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.ResourcesTransparant.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcesTransparant = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.ResourcesTransparant$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');

/**
 * @implements {ResourcesTransparant}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Style} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Style} */
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$JsFunction(fn);
 }
 /**
  * @param {?function():Style} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$LambdaAdaptor = fn;
 }
 /**
  * @return {Style}
  * @public
  */
 m_nativeVerticalScrollbarStyle__() {
  let /** ?function():Style */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparant_$LambdaAdaptor, $function());
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$ResourcesTransparant$$LambdaAdaptor');

ResourcesTransparant.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NativeVerticalScrollbar$ResourcesTransparant$$LambdaAdaptor.js.map