goog.module('org.gwtproject.cell.client.SafeImageCell.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.SafeImageCell.Template$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(SafeUri):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SafeUri):SafeHtml}*/
  this.f_$$fn__org_gwtproject_cell_client_SafeImageCell_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_SafeImageCell_Template_$LambdaAdaptor__org_gwtproject_cell_client_SafeImageCell_Template_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_cell_client_SafeImageCell_Template_$LambdaAdaptor__org_gwtproject_cell_client_SafeImageCell_Template_$JsFunction(/** ?function(SafeUri):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_SafeImageCell_Template_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_img__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ arg0) {
  let /** ?function(SafeUri):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_cell_client_SafeImageCell_Template_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.SafeImageCell$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SafeImageCell$Template$$LambdaAdaptor.js.map