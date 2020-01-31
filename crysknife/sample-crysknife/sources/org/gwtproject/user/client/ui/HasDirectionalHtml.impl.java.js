goog.module('org.gwtproject.user.client.ui.HasDirectionalHtml$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDirectionalText = goog.require('org.gwtproject.user.client.ui.HasDirectionalText$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');

/**
 * @interface
 * @extends {HasDirectionalText}
 * @extends {HasHTML}
 */
class HasDirectionalHtml {
 /** @abstract */
 m_setHTML__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ html, /** Direction */ dir) {}
 
 static $clinit() {
  HasDirectionalHtml.$clinit = () =>{};
  HasDirectionalHtml.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasDirectionalText.$markImplementor(ctor);
  HasHTML.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasDirectionalHtml = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasDirectionalHtml;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirectionalHtml, 'org.gwtproject.user.client.ui.HasDirectionalHtml');

HasDirectionalHtml.$markImplementor(/** @type {Function} */ (HasDirectionalHtml));

exports = HasDirectionalHtml; 
//# sourceMappingURL=HasDirectionalHtml.js.map