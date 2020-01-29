goog.module('org.gwtproject.user.client.ui.MenuBar.Resources.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.MenuBar.Resources$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');

/**
 * @implements {Resources}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():ImageResource} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():ImageResource} */
  this.f_$$fn__org_gwtproject_user_client_ui_MenuBar_Resources_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_MenuBar_Resources_$LambdaAdaptor__org_gwtproject_user_client_ui_MenuBar_Resources_$JsFunction(fn);
 }
 /**
  * @param {?function():ImageResource} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuBar_Resources_$LambdaAdaptor__org_gwtproject_user_client_ui_MenuBar_Resources_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_MenuBar_Resources_$LambdaAdaptor = fn;
 }
 /**
  * @return {ImageResource}
  * @public
  */
 m_menuBarSubMenuIcon__() {
  let /** ?function():ImageResource */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_MenuBar_Resources_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.MenuBar$Resources$$LambdaAdaptor');

Resources.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MenuBar$Resources$$LambdaAdaptor.js.map