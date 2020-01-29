goog.module('org.gwtproject.cell.client.ImageCell.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.ImageCell.Template$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(?string):SafeHtml} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(?string):SafeHtml} */
  this.f_$$fn__org_gwtproject_cell_client_ImageCell_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_ImageCell_Template_$LambdaAdaptor__org_gwtproject_cell_client_ImageCell_Template_$JsFunction(fn);
 }
 /**
  * @param {?function(?string):SafeHtml} fn
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageCell_Template_$LambdaAdaptor__org_gwtproject_cell_client_ImageCell_Template_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_ImageCell_Template_$LambdaAdaptor = fn;
 }
 /**
  * @param {?string} arg0
  * @return {SafeHtml}
  * @public
  */
 m_img__java_lang_String(arg0) {
  let /** ?function(?string):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_cell_client_ImageCell_Template_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.ImageCell$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ImageCell$Template$$LambdaAdaptor.js.map