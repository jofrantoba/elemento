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
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_disclosurePanelClosed__() {}
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_disclosurePanelOpen__() {}
 /**
  * @return {DefaultImages}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages() {
  return (DefaultImages.$clinit(), DefaultImages.$f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages);
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultImages.$clinit = () =>{};
  DefaultImages.$loadModules();
  DefaultImages.$f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages = DisclosurePanel__DefaultImagesImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages;
 }
 /**
  * @public
  */
 static $loadModules() {
  DisclosurePanel__DefaultImagesImpl = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DefaultImages, 'org.gwtproject.user.client.ui.DisclosurePanel$DefaultImages');

DefaultImages.$markImplementor(/** @type {Function} */ (DefaultImages));

/** @private {DefaultImages} */
DefaultImages.$f_INSTANCE__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImages;

exports = DefaultImages; 
//# sourceMappingURL=DisclosurePanel$DefaultImages.js.map