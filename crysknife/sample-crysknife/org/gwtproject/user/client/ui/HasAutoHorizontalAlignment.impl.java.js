goog.module('org.gwtproject.user.client.ui.HasAutoHorizontalAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHorizontalAlignment = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');

let AutoHorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');

/**
 * @interface
 * @extends {HasHorizontalAlignment}
 */
class HasAutoHorizontalAlignment {
 /** @abstract @return {AutoHorizontalAlignmentConstant} */
 m_getAutoHorizontalAlignment__() {}
 /** @abstract */
 m_setAutoHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_AutoHorizontalAlignmentConstant(/** AutoHorizontalAlignmentConstant */ autoHorizontalAlignment) {}
 /** @return {AutoHorizontalAlignmentConstant} */
 static get f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment() {
  return (HasAutoHorizontalAlignment.$clinit(), HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment);
 }
 /** @return {AutoHorizontalAlignmentConstant} */
 static get f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment() {
  return (HasAutoHorizontalAlignment.$clinit(), HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment);
 }
 
 static $clinit() {
  HasAutoHorizontalAlignment.$clinit = () =>{};
  HasAutoHorizontalAlignment.$loadModules();
  HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment = AutoHorizontalAlignmentConstant.$create__();
  HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment = AutoHorizontalAlignmentConstant.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHorizontalAlignment.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment;
 }
 
 static $loadModules() {
  AutoHorizontalAlignmentConstant = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasAutoHorizontalAlignment, 'org.gwtproject.user.client.ui.HasAutoHorizontalAlignment');

HasAutoHorizontalAlignment.$markImplementor(/** @type {Function} */ (HasAutoHorizontalAlignment));

/**@private {AutoHorizontalAlignmentConstant}*/
HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment;
/**@private {AutoHorizontalAlignmentConstant}*/
HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment;

exports = HasAutoHorizontalAlignment; 
//# sourceMappingURL=HasAutoHorizontalAlignment.js.map