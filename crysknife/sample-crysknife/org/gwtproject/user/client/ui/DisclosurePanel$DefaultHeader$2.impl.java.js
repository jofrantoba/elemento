goog.module('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Imager = goog.require('org.gwtproject.user.client.ui.DisclosurePanel.Imager$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DefaultHeader = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

/**
 * @implements {Imager}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DefaultHeader} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_2;
  /** @public {ImageResource} */
  this.$c_closedImage;
  /** @public {ImageResource} */
  this.$c_openImage;
 }
 /**
  * @param {DefaultHeader} $outer_this
  * @param {ImageResource} $c_closedImage
  * @param {ImageResource} $c_openImage
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource($outer_this, $c_closedImage, $c_openImage) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_2__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource($outer_this, $c_closedImage, $c_openImage);
  return $instance;
 }
 /**
  * @param {DefaultHeader} $outer_this
  * @param {ImageResource} $c_closedImage
  * @param {ImageResource} $c_openImage
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_2__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource($outer_this, $c_closedImage, $c_openImage) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_2 = $outer_this;
  this.$c_closedImage = $c_closedImage;
  this.$c_openImage = $c_openImage;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {Image}
  * @public
  */
 m_makeImage__() {
  return Image.$create__org_gwtproject_resources_client_ImageResource(this.$c_closedImage);
 }
 /**
  * @override
  * @param {boolean} open
  * @param {Image} image
  * @public
  */
 m_updateImage__boolean__org_gwtproject_user_client_ui_Image(open, image) {
  if (open) {
   image.m_setResource__org_gwtproject_resources_client_ImageResource(this.$c_openImage);
  } else {
   image.m_setResource__org_gwtproject_resources_client_ImageResource(this.$c_closedImage);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
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
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.DisclosurePanel$DefaultHeader$2');

Imager.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=DisclosurePanel$DefaultHeader$2.js.map