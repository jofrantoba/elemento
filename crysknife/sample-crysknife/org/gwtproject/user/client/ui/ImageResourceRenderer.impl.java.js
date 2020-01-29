goog.module('org.gwtproject.user.client.ui.ImageResourceRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSafeHtmlRenderer = goog.require('org.gwtproject.text.shared.AbstractSafeHtmlRenderer$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Bundle = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype.Bundle$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.client.ui.ImageResourceRenderer.Template$impl');
let ImageResourceRenderer__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.ImageResourceRenderer_TemplateImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractSafeHtmlRenderer<ImageResource>}
  */
class ImageResourceRenderer extends AbstractSafeHtmlRenderer {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ImageResourceRenderer}
  * @public
  */
 static $create__() {
  ImageResourceRenderer.$clinit();
  let $instance = new ImageResourceRenderer();
  $instance.$ctor__org_gwtproject_user_client_ui_ImageResourceRenderer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ImageResourceRenderer__() {
  this.$ctor__org_gwtproject_text_shared_AbstractSafeHtmlRenderer__();
 }
 /**
  * @param {ImageResource} image
  * @return {SafeHtml}
  * @public
  */
 m_render__org_gwtproject_resources_client_ImageResource(image) {
  if (Bundle.$isInstance(image)) {
   return AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(image).m_getSafeHtml__();
  } else {
   return ImageResourceRenderer.f_TEMPLATE__org_gwtproject_user_client_ui_ImageResourceRenderer_.m_image__org_gwtproject_safehtml_shared_SafeUri__int__int(image.m_getSafeUri__(), image.m_getWidth__(), image.m_getHeight__());
  }
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__org_gwtproject_resources_client_ImageResource(/**@type {ImageResource} */ ($Casts.$to(arg0, ImageResource)));
 }
 /**
  * @public
  */
 static $clinit() {
  ImageResourceRenderer.$clinit = () =>{};
  ImageResourceRenderer.$loadModules();
  AbstractSafeHtmlRenderer.$clinit();
  ImageResourceRenderer.f_TEMPLATE__org_gwtproject_user_client_ui_ImageResourceRenderer_ = ImageResourceRenderer__TemplateImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ImageResourceRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  ImageResource = goog.module.get('org.gwtproject.resources.client.ImageResource$impl');
  Bundle = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype.Bundle$impl');
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  ImageResourceRenderer__TemplateImpl = goog.module.get('org.gwtproject.user.client.ui.ImageResourceRenderer_TemplateImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImageResourceRenderer, 'org.gwtproject.user.client.ui.ImageResourceRenderer');

/** @public {Template} */
ImageResourceRenderer.f_TEMPLATE__org_gwtproject_user_client_ui_ImageResourceRenderer_;

exports = ImageResourceRenderer; 
//# sourceMappingURL=ImageResourceRenderer.js.map