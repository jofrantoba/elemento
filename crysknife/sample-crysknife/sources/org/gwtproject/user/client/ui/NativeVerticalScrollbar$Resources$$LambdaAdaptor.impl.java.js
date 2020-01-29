goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');

/**
 * @implements {Resources}
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
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$JsFunction(fn);
 }
 /**
  * @param {?function():Style} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$LambdaAdaptor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$LambdaAdaptor = fn;
 }
 /**
  * @return {Style}
  * @public
  */
 m_nativeVerticalScrollbarStyle__() {
  let /** ?function():Style */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar$Resources$$LambdaAdaptor');

Resources.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NativeVerticalScrollbar$Resources$$LambdaAdaptor.js.map