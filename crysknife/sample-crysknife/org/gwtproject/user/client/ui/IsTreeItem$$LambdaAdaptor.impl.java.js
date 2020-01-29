goog.module('org.gwtproject.user.client.ui.IsTreeItem.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsTreeItem = goog.require('org.gwtproject.user.client.ui.IsTreeItem$impl');

let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');

/**
 * @implements {IsTreeItem}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():TreeItem} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():TreeItem} */
  this.f_$$fn__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor__org_gwtproject_user_client_ui_IsTreeItem_$JsFunction(fn);
 }
 /**
  * @param {?function():TreeItem} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor__org_gwtproject_user_client_ui_IsTreeItem_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor = fn;
 }
 /**
  * @return {TreeItem}
  * @public
  */
 m_asTreeItem__() {
  let /** ?function():TreeItem */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_IsTreeItem_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.IsTreeItem$$LambdaAdaptor');

IsTreeItem.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsTreeItem$$LambdaAdaptor.js.map