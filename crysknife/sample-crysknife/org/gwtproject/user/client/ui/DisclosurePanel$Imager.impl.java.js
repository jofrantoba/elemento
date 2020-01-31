goog.module('org.gwtproject.user.client.ui.DisclosurePanel.Imager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

/**
 * @interface
 */
class Imager {
 /** @abstract @return {Image} */
 m_makeImage__() {}
 /** @abstract */
 m_updateImage__boolean__org_gwtproject_user_client_ui_Image(/** boolean */ open, /** Image */ image) {}
 
 static $clinit() {
  Imager.$clinit = () =>{};
  Imager.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_DisclosurePanel_Imager = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_DisclosurePanel_Imager;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Imager, 'org.gwtproject.user.client.ui.DisclosurePanel$Imager');

Imager.$markImplementor(/** @type {Function} */ (Imager));

exports = Imager; 
//# sourceMappingURL=DisclosurePanel$Imager.js.map