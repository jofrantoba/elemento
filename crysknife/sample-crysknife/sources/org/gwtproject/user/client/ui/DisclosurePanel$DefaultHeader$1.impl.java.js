goog.module('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Imager = goog.require('org.gwtproject.user.client.ui.DisclosurePanel.Imager$impl');

let DefaultHeader = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader$impl');
let DefaultImages = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultImages$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

/**
 * @implements {Imager}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultHeader}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader(/** DefaultHeader */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_1__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_1__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader(/** DefaultHeader */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Image} */
 m_makeImage__() {
  return Image.$create__org_gwtproject_resources_client_ImageResource(DefaultImages.f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages.m_disclosurePanelClosed__());
 }
 /** @override */
 m_updateImage__boolean__org_gwtproject_user_client_ui_Image(/** boolean */ open, /** Image */ image) {
  if (open) {
   image.m_setResource__org_gwtproject_resources_client_ImageResource(DefaultImages.f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages.m_disclosurePanelOpen__());
  } else {
   image.m_setResource__org_gwtproject_resources_client_ImageResource(DefaultImages.f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages.m_disclosurePanelClosed__());
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  DefaultImages = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel.DefaultImages$impl');
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.DisclosurePanel$DefaultHeader$1');

Imager.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DisclosurePanel$DefaultHeader$1.js.map