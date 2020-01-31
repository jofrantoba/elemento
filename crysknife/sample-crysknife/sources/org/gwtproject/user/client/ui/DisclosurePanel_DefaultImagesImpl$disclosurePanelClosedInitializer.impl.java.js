goog.module('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl.disclosurePanelClosedInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DisclosurePanel__DefaultImagesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');

class disclosurePanelClosedInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!disclosurePanelClosedInitializer} */
 static $create__() {
  let $instance = new disclosurePanelClosedInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_disclosurePanelClosedInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_disclosurePanelClosedInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  disclosurePanelClosedInitializer.$clinit();
  return DisclosurePanel__DefaultImagesImpl.f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_;
 }
 
 static $clinit() {
  disclosurePanelClosedInitializer.$clinit = () =>{};
  disclosurePanelClosedInitializer.$loadModules();
  j_l_Object.$clinit();
  DisclosurePanel__DefaultImagesImpl.f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_.m_disclosurePanelClosedInitializer___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof disclosurePanelClosedInitializer;
 }
 
 static $loadModules() {
  DisclosurePanel__DefaultImagesImpl = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');
 }
 
}
$Util.$setClassMetadata(disclosurePanelClosedInitializer, 'org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$disclosurePanelClosedInitializer');

exports = disclosurePanelClosedInitializer; 
//# sourceMappingURL=DisclosurePanel_DefaultImagesImpl$disclosurePanelClosedInitializer.js.map