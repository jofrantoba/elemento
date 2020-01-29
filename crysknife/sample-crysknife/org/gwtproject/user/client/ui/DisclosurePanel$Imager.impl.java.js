goog.module('org.gwtproject.user.client.ui.DisclosurePanel.Imager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

/**
 * @interface
 */
class Imager {
 /**
  * @abstract
  * @return {Image}
  * @public
  */
 m_makeImage__() {}
 /**
  * @abstract
  * @param {boolean} open
  * @param {Image} image
  * @public
  */
 m_updateImage__boolean__org_gwtproject_user_client_ui_Image(open, image) {}
 /**
  * @public
  */
 static $clinit() {
  Imager.$clinit = () =>{};
  Imager.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_DisclosurePanel_Imager = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_DisclosurePanel_Imager;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Imager, 'org.gwtproject.user.client.ui.DisclosurePanel$Imager');

Imager.$markImplementor(/** @type {Function} */ (Imager));

exports = Imager; 
//# sourceMappingURL=DisclosurePanel$Imager.js.map