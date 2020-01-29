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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DefaultRenderers} */
  this.f_$outer_this__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1;
 }
 /**
  * @param {DefaultRenderers} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers($outer_this);
  return $instance;
 }
 /**
  * @param {DefaultRenderers} $outer_this
  * @public
  */
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers($outer_this) {
  this.f_$outer_this__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_1 = $outer_this;
  this.$ctor__org_gwtproject_text_shared_AbstractSafeHtmlRenderer__();
 }
 /**
  * @param {?string} object
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_String(object) {
  return Template.f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template.m_img__java_lang_String(object);
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
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractSafeHtmlRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Template = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.cell.client.ImageLoadingCell$DefaultRenderers$1');

exports = $1; 
//# sourceMappingURL=ImageLoadingCell$DefaultRenderers$1.js.map