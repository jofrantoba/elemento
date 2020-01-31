goog.module('org.gwtproject.cell.client.ImageResourceCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let ImageResourceRenderer = goog.forwardDeclare('org.gwtproject.user.client.ui.ImageResourceRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractCell<ImageResource>}
  */
class ImageResourceCell extends AbstractCell {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ImageResourceCell} */
 static $create__() {
  ImageResourceCell.$clinit();
  let $instance = new ImageResourceCell();
  $instance.$ctor__org_gwtproject_cell_client_ImageResourceCell__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ImageResourceCell__() {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  if ($Equality.$same(ImageResourceCell.f_renderer__org_gwtproject_cell_client_ImageResourceCell_, null)) {
   ImageResourceCell.f_renderer__org_gwtproject_cell_client_ImageResourceCell_ = ImageResourceRenderer.$create__();
  }
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_resources_client_ImageResource__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** ImageResource */ value, /** SafeHtmlBuilder */ sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(ImageResourceCell.f_renderer__org_gwtproject_cell_client_ImageResourceCell_.m_render__org_gwtproject_resources_client_ImageResource(value));
  }
 }
 //Bridge method.
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ arg0, /** * */ arg1, /** SafeHtmlBuilder */ arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_resources_client_ImageResource__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {ImageResource}*/ ($Casts.$to(arg1, ImageResource)), arg2);
 }
 
 static $clinit() {
  ImageResourceCell.$clinit = () =>{};
  ImageResourceCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageResourceCell;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ImageResource = goog.module.get('org.gwtproject.resources.client.ImageResource$impl');
  ImageResourceRenderer = goog.module.get('org.gwtproject.user.client.ui.ImageResourceRenderer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageResourceCell, 'org.gwtproject.cell.client.ImageResourceCell');

/**@type {ImageResourceRenderer}*/
ImageResourceCell.f_renderer__org_gwtproject_cell_client_ImageResourceCell_;

exports = ImageResourceCell; 
//# sourceMappingURL=ImageResourceCell.js.map