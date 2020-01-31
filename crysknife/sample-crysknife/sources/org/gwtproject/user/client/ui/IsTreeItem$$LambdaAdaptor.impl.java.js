goog.module('org.gwtproject.user.client.ui.IsTreeItem.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsTreeItem = goog.require('org.gwtproject.user.client.ui.IsTreeItem$impl');

let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');

/**
 * @implements {IsTreeItem}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():TreeItem */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():TreeItem}*/
  this.f_$$fn__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor__org_gwtproject_user_client_ui_IsTreeItem_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor__org_gwtproject_user_client_ui_IsTreeItem_$JsFunction(/** ?function():TreeItem */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor = fn;
 }
 /** @return {TreeItem} */
 m_asTreeItem__() {
  let /** ?function():TreeItem */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.IsTreeItem$$LambdaAdaptor');

IsTreeItem.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsTreeItem$$LambdaAdaptor.js.map