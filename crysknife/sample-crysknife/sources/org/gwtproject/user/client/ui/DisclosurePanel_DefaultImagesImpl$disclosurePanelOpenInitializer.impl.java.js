goog.module('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl.disclosurePanelOpenInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DisclosurePanel__DefaultImagesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');

class disclosurePanelOpenInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!disclosurePanelOpenInitializer} */
 static $create__() {
  let $instance = new disclosurePanelOpenInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_disclosurePanelOpenInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_disclosurePanelOpenInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  disclosurePanelOpenInitializer.$clinit();
  return DisclosurePanel__DefaultImagesImpl.f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_;
 }
 
 static $clinit() {
  disclosurePanelOpenInitializer.$clinit = () =>{};
  disclosurePanelOpenInitializer.$loadModules();
  j_l_Object.$clinit();
  DisclosurePanel__DefaultImagesImpl.f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_.m_disclosurePanelOpenInitializer___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof disclosurePanelOpenInitializer;
 }
 
 static $loadModules() {
  DisclosurePanel__DefaultImagesImpl = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');
 }
 
}
$Util.$setClassMetadata(disclosurePanelOpenInitializer, 'org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$disclosurePanelOpenInitializer');

exports = disclosurePanelOpenInitializer; 
//# sourceMappingURL=DisclosurePanel_DefaultImagesImpl$disclosurePanelOpenInitializer.js.map