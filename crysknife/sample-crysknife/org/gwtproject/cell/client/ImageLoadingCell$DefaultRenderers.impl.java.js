goog.module('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Renderers = goog.require('org.gwtproject.cell.client.ImageLoadingCell.Renderers$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers.$2$impl');
let ImageLoadingCell__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');

/**
 * @implements {Renderers}
  */
class DefaultRenderers extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultRenderers} */
 static $create__() {
  DefaultRenderers.$clinit();
  let $instance = new DefaultRenderers();
  $instance.$ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers__() {
  this.$ctor__java_lang_Object__();
  if ($Equality.$same(DefaultRenderers.f_IMAGE_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_, null)) {
   DefaultRenderers.f_IMAGE_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_ = $1.$create__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers(this);
  }
  if ($Equality.$same(DefaultRenderers.f_LOADING_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_, null)) {
   let resources = ImageLoadingCell__ResourcesImpl.$create__();
   let res = resources.m_loading__();
   let loadingHtml = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(res).m_getSafeHtml__();
   DefaultRenderers.f_LOADING_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_ = $2.$create__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers__org_gwtproject_safehtml_shared_SafeHtml(this, loadingHtml);
  }
 }
 /** @override @return {SafeHtmlRenderer<?string>} */
 m_getErrorRenderer__() {
  return this.m_getImageRenderer__();
 }
 /** @override @return {SafeHtmlRenderer<?string>} */
 m_getImageRenderer__() {
  return DefaultRenderers.f_IMAGE_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_;
 }
 /** @override @return {SafeHtmlRenderer<?string>} */
 m_getLoadingRenderer__() {
  return DefaultRenderers.f_LOADING_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_;
 }
 
 static $clinit() {
  DefaultRenderers.$clinit = () =>{};
  DefaultRenderers.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultRenderers;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers.$1$impl');
  $2 = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.DefaultRenderers.$2$impl');
  ImageLoadingCell__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
 }
 
}
$Util.$setClassMetadata(DefaultRenderers, 'org.gwtproject.cell.client.ImageLoadingCell$DefaultRenderers');

Renderers.$markImplementor(DefaultRenderers);

/**@type {SafeHtmlRenderer<?string>}*/
DefaultRenderers.f_IMAGE_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_;
/**@type {SafeHtmlRenderer<?string>}*/
DefaultRenderers.f_LOADING_RENDERER__org_gwtproject_cell_client_ImageLoadingCell_DefaultRenderers_;

exports = DefaultRenderers; 
//# sourceMappingURL=ImageLoadingCell$DefaultRenderers.js.map