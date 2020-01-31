goog.module('org.gwtproject.user.cellview.client.CellList.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.CellList.Template$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(number, ?string, SafeHtml):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number, ?string, SafeHtml):SafeHtml}*/
  this.f_$$fn__org_gwtproject_user_cellview_client_CellList_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_cellview_client_CellList_Template_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellList_Template_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellList_Template_$LambdaAdaptor__org_gwtproject_user_cellview_client_CellList_Template_$JsFunction(/** ?function(number, ?string, SafeHtml):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_cellview_client_CellList_Template_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_div__int__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** number */ arg0, /** ?string */ arg1, /** SafeHtml */ arg2) {
  let /** ?function(number, ?string, SafeHtml):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_cellview_client_CellList_Template_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.cellview.client.CellList$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CellList$Template$$LambdaAdaptor.js.map