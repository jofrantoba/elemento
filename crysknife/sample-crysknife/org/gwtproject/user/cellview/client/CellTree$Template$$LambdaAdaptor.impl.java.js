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
 /**
  * @param {?function(?string, SafeStyles, SafeHtml):SafeHtml} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(?string, SafeStyles, SafeHtml):SafeHtml} */
  this.f_$$fn__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellTree_Template_$JsFunction(fn);
 }
 /**
  * @param {?function(?string, SafeStyles, SafeHtml):SafeHtml} fn
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellTree_Template_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor = fn;
 }
 /**
  * @param {?string} arg0
  * @param {SafeStyles} arg1
  * @param {SafeHtml} arg2
  * @return {SafeHtml}
  * @public
  */
 m_imageWrapper__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(arg0, arg1, arg2) {
  let /** ?function(?string, SafeStyles, SafeHtml):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_cellview_client_CellTree_Template_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.CellTree$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CellTree$Template$$LambdaAdaptor.js.map