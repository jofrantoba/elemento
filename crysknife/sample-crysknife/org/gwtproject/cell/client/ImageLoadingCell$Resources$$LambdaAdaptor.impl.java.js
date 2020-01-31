goog.module('org.gwtproject.cell.client.ImageLoadingCell.Resources.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.cell.client.ImageLoadingCell.Resources$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');

/**
 * @implements {Resources}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():ImageResource */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ImageResource}*/
  this.f_$$fn__org_gwtproject_cell_client_ImageLoadingCell_Resources_$LambdaAdaptor;
  this.$ctor__org_gwtproject_cell_client_ImageLoadingCell_Resources_$LambdaAdaptor__org_gwtproject_cell_client_ImageLoadingCell_Resources_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_Resources_$LambdaAdaptor__org_gwtproject_cell_client_ImageLoadingCell_Resources_$JsFunction(/** ?function():ImageResource */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_cell_client_ImageLoadingCell_Resources_$LambdaAdaptor = fn;
 }
 /** @return {ImageResource} */
 m_loading__() {
  let /** ?function():ImageResource */ $function;
  return ($function = this.f_$$fn__org_gwtproject_cell_client_ImageLoadingCell_Resources_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.cell.client.ImageLoadingCell$Resources$$LambdaAdaptor');

Resources.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ImageLoadingCell$Resources$$LambdaAdaptor.js.map