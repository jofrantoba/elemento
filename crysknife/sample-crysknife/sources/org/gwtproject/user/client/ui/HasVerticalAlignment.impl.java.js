goog.module('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');

/**
 * @interface
 */
class HasVerticalAlignment {
 /**
  * @abstract
  * @return {VerticalAlignmentConstant}
  * @public
  */
 m_getVerticalAlignment__() {}
 /**
  * @abstract
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(align) {}
 /**
  * @return {VerticalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment() {
  return (HasVerticalAlignment.$clinit(), HasVerticalAlignment.$f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment);
 }
 /**
  * @return {VerticalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment() {
  return (HasVerticalAlignment.$clinit(), HasVerticalAlignment.$f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment);
 }
 /**
  * @return {VerticalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment() {
  return (HasVerticalAlignment.$clinit(), HasVerticalAlignment.$f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment);
 }
 /**
  * @public
  */
 static $clinit() {
  HasVerticalAlignment.$clinit = () =>{};
  HasVerticalAlignment.$loadModules();
  HasVerticalAlignment.$f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment = VerticalAlignmentConstant.$create__java_lang_String("bottom");
  HasVerticalAlignment.$f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment = VerticalAlignmentConstant.$create__java_lang_String("middle");
  HasVerticalAlignment.$f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment = VerticalAlignmentConstant.$create__java_lang_String("top");
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasVerticalAlignment = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasVerticalAlignment;
 }
 /**
  * @public
  */
 static $loadModules() {
  VerticalAlignmentConstant = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasVerticalAlignment, 'org.gwtproject.user.client.ui.HasVerticalAlignment');

HasVerticalAlignment.$markImplementor(/** @type {Function} */ (HasVerticalAlignment));

/** @private {VerticalAlignmentConstant} */
HasVerticalAlignment.$f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment;
/** @private {VerticalAlignmentConstant} */
HasVerticalAlignment.$f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment;
/** @private {VerticalAlignmentConstant} */
HasVerticalAlignment.$f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment;

exports = HasVerticalAlignment; 
//# sourceMappingURL=HasVerticalAlignment.js.map