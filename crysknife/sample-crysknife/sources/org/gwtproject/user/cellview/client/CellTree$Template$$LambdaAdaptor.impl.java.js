goog.module('org.gwtproject.user.cellview.client.CellTree.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.CellTree.Template$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string, SafeStyles, SafeHtml):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string, SafeStyles, SafeHtml):SafeHtml}*/
  this.f_$$fn__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellTree_Template_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellTree_Template_$JsFunction(/** ?function(?string, SafeStyles, SafeHtml):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_imageWrapper__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** SafeStyles */ arg1, /** SafeHtml */ arg2) {
  let /** ?function(?string, SafeStyles, SafeHtml):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.CellTree$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CellTree$Template$$LambdaAdaptor.js.map