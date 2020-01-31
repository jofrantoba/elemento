goog.module('org.gwtproject.user.client.ui.DisclosurePanel.DefaultImages$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DisclosurePanel__DefaultImagesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class DefaultImages {
 /** @abstract @return {ImageResource} */
 m_disclosurePanelClosed__() {}
 /** @abstract @return {ImageResource} */
 m_disclosurePanelOpen__() {}
 /** @return {DefaultImages} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages() {
  return (DefaultImages.$clinit(), DefaultImages.$f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages);
 }
 
 static $clinit() {
  DefaultImages.$clinit = () =>{};
  DefaultImages.$loadModules();
  DefaultImages.$f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages = DisclosurePanel__DefaultImagesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages;
 }
 
 static $loadModules() {
  DisclosurePanel__DefaultImagesImpl = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DefaultImages, 'org.gwtproject.user.client.ui.DisclosurePanel$DefaultImages');

DefaultImages.$markImplementor(/** @type {Function} */ (DefaultImages));

/**@private {DefaultImages}*/
DefaultImages.$f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages;

exports = DefaultImages; 
//# sourceMappingURL=DisclosurePanel$DefaultImages.js.map