goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Delegate = goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');

/**
 * @implements {Delegate}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():void} */
  this.f_$$fn__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$LambdaAdaptor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$JsFunction(fn);
 }
 /**
  * @param {?function():void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$LambdaAdaptor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$LambdaAdaptor = fn;
 }
 /**
  * @public
  */
 m_onResize__() {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate_$LambdaAdaptor;
   $function();
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$Impl$Delegate$$LambdaAdaptor');

Delegate.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ResizeLayoutPanel$Impl$Delegate$$LambdaAdaptor.js.map