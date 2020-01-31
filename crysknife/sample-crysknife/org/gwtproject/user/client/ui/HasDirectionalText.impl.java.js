goog.module('org.gwtproject.user.client.ui.HasDirectionalText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasText = goog.require('org.gwtproject.user.client.ui.HasText$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');

/**
 * @interface
 * @extends {HasText}
 */
class HasDirectionalText {
 /** @abstract @return {Direction} */
 m_getTextDirection__() {}
 /** @abstract */
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {}
 
 static $clinit() {
  HasDirectionalText.$clinit = () =>{};
  HasDirectionalText.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasText.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasDirectionalText = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasDirectionalText;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirectionalText, 'org.gwtproject.user.client.ui.HasDirectionalText');

HasDirectionalText.$markImplementor(/** @type {Function} */ (HasDirectionalText));

exports = HasDirectionalText; 
//# sourceMappingURL=HasDirectionalText.js.map