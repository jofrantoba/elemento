goog.module('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');

/**
 * @interface
 */
class HasVerticalAlignment {
 /** @abstract @return {VerticalAlignmentConstant} */
 m_getVerticalAlignment__() {}
 /** @abstract */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** VerticalAlignmentConstant */ align) {}
 /** @return {VerticalAlignmentConstant} */
 static get f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment() {
  return (HasVerticalAlignment.$clinit(), HasVerticalAlignment.$f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment);
 }
 /** @return {VerticalAlignmentConstant} */
 static get f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment() {
  return (HasVerticalAlignment.$clinit(), HasVerticalAlignment.$f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment);
 }
 /** @return {VerticalAlignmentConstant} */
 static get f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment() {
  return (HasVerticalAlignment.$clinit(), HasVerticalAlignment.$f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment);
 }
 
 static $clinit() {
  HasVerticalAlignment.$clinit = () =>{};
  HasVerticalAlignment.$loadModules();
  HasVerticalAlignment.$f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment = VerticalAlignmentConstant.$create__java_lang_String("bottom");
  HasVerticalAlignment.$f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment = VerticalAlignmentConstant.$create__java_lang_String("middle");
  HasVerticalAlignment.$f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment = VerticalAlignmentConstant.$create__java_lang_String("top");
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasVerticalAlignment = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasVerticalAlignment;
 }
 
 static $loadModules() {
  VerticalAlignmentConstant = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasVerticalAlignment, 'org.gwtproject.user.client.ui.HasVerticalAlignment');

HasVerticalAlignment.$markImplementor(/** @type {Function} */ (HasVerticalAlignment));

/**@private {VerticalAlignmentConstant}*/
HasVerticalAlignment.$f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment;
/**@private {VerticalAlignmentConstant}*/
HasVerticalAlignment.$f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment;
/**@private {VerticalAlignmentConstant}*/
HasVerticalAlignment.$f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment;

exports = HasVerticalAlignment; 
//# sourceMappingURL=HasVerticalAlignment.js.map