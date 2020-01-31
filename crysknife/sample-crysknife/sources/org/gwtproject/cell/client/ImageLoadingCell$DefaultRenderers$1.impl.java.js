goog.module('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSafeHtmlRenderer = goog.require('org.gwtproject.text.shared.AbstractSafeHtmlRenderer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DefaultRenderers = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractSafeHtmlRenderer<?string>}
  */
class $1 extends AbstractSafeHtmlRenderer {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultRenderers}*/
  this.f_$outer_this__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers(/** DefaultRenderers */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers(/** DefaultRenderers */ $outer_this) {
  this.f_$outer_this__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1 = $outer_this;
  this.$ctor__org_gwtproject_text_shared_AbstractSafeHtmlRenderer__();
 }
 /** @return {SafeHtml} */
 m_render__java_lang_String(/** ?string */ object) {
  return Template.f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template.m_img__java_lang_String(object);
 }
 //Bridge method.
 /** @override @return {SafeHtml} */
 m_render__java_lang_Object(/** * */ arg0) {
  return this.m_render__java_lang_String(/**@type {?string}*/ ($Casts.$to(arg0, j_l_String)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractSafeHtmlRenderer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Template = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.cell.client.ImageLoadingCell$DefaultRenderers$1');

exports = $1; 
//# sourceMappingURL=ImageLoadingCell$DefaultRenderers$1.js.map