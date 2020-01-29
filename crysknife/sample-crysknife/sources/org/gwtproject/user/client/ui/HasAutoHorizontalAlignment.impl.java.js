goog.module('org.gwtproject.user.client.ui.HasAutoHorizontalAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHorizontalAlignment = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');

let AutoHorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');

/**
 * @interface
 * @extends {HasHorizontalAlignment}
 */
class HasAutoHorizontalAlignment {
 /**
  * @abstract
  * @return {AutoHorizontalAlignmentConstant}
  * @public
  */
 m_getAutoHorizontalAlignment__() {}
 /**
  * @abstract
  * @param {AutoHorizontalAlignmentConstant} autoHorizontalAlignment
  * @public
  */
 m_setAutoHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_AutoHorizontalAlignmentConstant(autoHorizontalAlignment) {}
 /**
  * @return {AutoHorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment() {
  return (HasAutoHorizontalAlignment.$clinit(), HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment);
 }
 /**
  * @return {AutoHorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment() {
  return (HasAutoHorizontalAlignment.$clinit(), HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment);
 }
 /**
  * @public
  */
 static $clinit() {
  HasAutoHorizontalAlignment.$clinit = () =>{};
  HasAutoHorizontalAlignment.$loadModules();
  HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment = AutoHorizontalAlignmentConstant.$create__();
  HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment = AutoHorizontalAlignmentConstant.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasHorizontalAlignment.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment;
 }
 /**
  * @public
  */
 static $loadModules() {
  AutoHorizontalAlignmentConstant = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasAutoHorizontalAlignment, 'org.gwtproject.user.client.ui.HasAutoHorizontalAlignment');

HasAutoHorizontalAlignment.$markImplementor(/** @type {Function} */ (HasAutoHorizontalAlignment));

/** @private {AutoHorizontalAlignmentConstant} */
HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment;
/** @private {AutoHorizontalAlignmentConstant} */
HasAutoHorizontalAlignment.$f_ALIGN_CONTENT_END__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment;

exports = HasAutoHorizontalAlignment; 
//# sourceMappingURL=HasAutoHorizontalAlignment.js.map