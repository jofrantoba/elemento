goog.module('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSafeHtmlRenderer = goog.require('org.gwtproject.text.shared.AbstractSafeHtmlRenderer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let DefaultRenderers = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractSafeHtmlRenderer<?string>}
  */
class $2 extends AbstractSafeHtmlRenderer {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DefaultRenderers} */
  this.f_$outer_this__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_2;
  /** @public {SafeHtml} */
  this.$c_loadingHtml;
 }
 /**
  * @param {DefaultRenderers} $outer_this
  * @param {SafeHtml} $c_loadingHtml
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers__org_gwtproject_safehtml_shared_SafeHtml($outer_this, $c_loadingHtml) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_2__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers__org_gwtproject_safehtml_shared_SafeHtml($outer_this, $c_loadingHtml);
  return $instance;
 }
 /**
  * @param {DefaultRenderers} $outer_this
  * @param {SafeHtml} $c_loadingHtml
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_2__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers__org_gwtproject_safehtml_shared_SafeHtml($outer_this, $c_loadingHtml) {
  this.f_$outer_this__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_2 = $outer_this;
  this.$c_loadingHtml = $c_loadingHtml;
  this.$ctor__org_gwtproject_text_shared_AbstractSafeHtmlRenderer__();
 }
 /**
  * @param {?string} object
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_String(object) {
  return this.$c_loadingHtml;
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__java_lang_String(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)));
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractSafeHtmlRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.cell.client.ImageLoadingCell$DefaultRenderers$2');

exports = $2; 
//# sourceMappingURL=ImageLoadingCell$DefaultRenderers$2.js.map