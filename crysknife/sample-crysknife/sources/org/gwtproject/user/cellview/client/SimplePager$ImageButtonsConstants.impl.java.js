goog.module('org.gwtproject.user.cellview.client.SimplePager.ImageButtonsConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Constants = goog.require('org.gwtproject.i18n.client.Constants$impl');

let SimplePager__ImageButtonsConstants__en__US = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ImageButtonsConstants_en_US$impl');

/**
 * @interface
 * @extends {Constants}
 */
class ImageButtonsConstants {
 /** @abstract @return {?string} */
 m_fastForward__() {}
 /** @abstract @return {?string} */
 m_firstPage__() {}
 /** @abstract @return {?string} */
 m_lastPage__() {}
 /** @abstract @return {?string} */
 m_nextPage__() {}
 /** @abstract @return {?string} */
 m_prevPage__() {}
 /** @return {ImageButtonsConstants} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants() {
  return (ImageButtonsConstants.$clinit(), ImageButtonsConstants.$f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants);
 }
 
 static $clinit() {
  ImageButtonsConstants.$clinit = () =>{};
  ImageButtonsConstants.$loadModules();
  ImageButtonsConstants.$f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants = SimplePager__ImageButtonsConstants__en__US.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Constants.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants;
 }
 
 static $loadModules() {
  SimplePager__ImageButtonsConstants__en__US = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ImageButtonsConstants_en_US$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ImageButtonsConstants, 'org.gwtproject.user.cellview.client.SimplePager$ImageButtonsConstants');

ImageButtonsConstants.$markImplementor(/** @type {Function} */ (ImageButtonsConstants));

/**@private {ImageButtonsConstants}*/
ImageButtonsConstants.$f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants;

exports = ImageButtonsConstants; 
//# sourceMappingURL=SimplePager$ImageButtonsConstants.js.map