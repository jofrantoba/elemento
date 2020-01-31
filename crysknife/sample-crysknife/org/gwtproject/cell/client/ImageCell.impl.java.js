goog.module('org.gwtproject.cell.client.ImageCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let Template = goog.forwardDeclare('org.gwtproject.cell.client.ImageCell.Template$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractCell<?string>}
  */
class ImageCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ImageCell} */
 static $create__() {
  ImageCell.$clinit();
  let $instance = new ImageCell();
  $instance.$ctor__org_gwtproject_cell_client_ImageCell__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ImageCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** ?string */ value, /** SafeHtmlBuilder */ sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(Template.f_INSTANCE__org_gwtproject_cell_client_ImageCell_Template.m_img__java_lang_String(value));
  }
 }
 //Bridge method.
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ arg0, /** * */ arg1, /** SafeHtmlBuilder */ arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {?string}*/ ($Casts.$to(arg1, j_l_String)), arg2);
 }
 
 static $clinit() {
  ImageCell.$clinit = () =>{};
  ImageCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Template = goog.module.get('org.gwtproject.cell.client.ImageCell.Template$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageCell, 'org.gwtproject.cell.client.ImageCell');

exports = ImageCell; 
//# sourceMappingURL=ImageCell.js.map