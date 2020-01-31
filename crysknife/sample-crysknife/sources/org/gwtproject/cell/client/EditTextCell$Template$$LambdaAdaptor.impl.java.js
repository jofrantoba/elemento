goog.module('org.gwtproject.cell.client.EditTextCell.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.EditTextCell.Template$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string):SafeHtml}*/
  this.f_$$fn__org_gwtproject_cell_client_EditTextCell_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_EditTextCell_Template_$LambdaAdaptor__org_gwtproject_cell_client_EditTextCell_Template_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_cell_client_EditTextCell_Template_$LambdaAdaptor__org_gwtproject_cell_client_EditTextCell_Template_$JsFunction(/** ?function(?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_EditTextCell_Template_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_input__java_lang_String(/** ?string */ arg0) {
  let /** ?function(?string):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_cell_client_EditTextCell_Template_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.EditTextCell$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EditTextCell$Template$$LambdaAdaptor.js.map