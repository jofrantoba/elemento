goog.module('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let TextAlign = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');

/**
 * @interface
 */
class HasHorizontalAlignment {
 /**
  * @abstract
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 m_getHorizontalAlignment__() {}
 /**
  * @abstract
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(align) {}
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_CENTER__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_CENTER__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_LOCALE_END__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_LOCALE_END__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 static get f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment() {
  return (HasHorizontalAlignment.$clinit(), HasHorizontalAlignment.$f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment);
 }
 /**
  * @public
  */
 static $clinit() {
  HasHorizontalAlignment.$clinit = () =>{};
  HasHorizontalAlignment.$loadModules();
  HasHorizontalAlignment.$f_ALIGN_CENTER__org_gwtproject_user_client_ui_HasHorizontalAlignment = HorizontalAlignmentConstant.$create__java_lang_String(TextAlign.f_CENTER__org_gwtproject_dom_style_shared_TextAlign.m_getCssName__());
  HasHorizontalAlignment.$f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_HasHorizontalAlignment = HorizontalAlignmentConstant.$create__java_lang_String(TextAlign.f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign.m_getCssName__());
  HasHorizontalAlignment.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment = HorizontalAlignmentConstant.$create__java_lang_String(TextAlign.f_LEFT__org_gwtproject_dom_style_shared_TextAlign.m_getCssName__());
  HasHorizontalAlignment.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment = HorizontalAlignmentConstant.$create__java_lang_String(TextAlign.f_RIGHT__org_gwtproject_dom_style_shared_TextAlign.m_getCssName__());
  HasHorizontalAlignment.$f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment = LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? HasHorizontalAlignment.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment : HasHorizontalAlignment.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
  HasHorizontalAlignment.$f_ALIGN_LOCALE_END__org_gwtproject_user_client_ui_HasHorizontalAlignment = LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? HasHorizontalAlignment.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment : HasHorizontalAlignment.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
  HasHorizontalAlignment.$f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment = HasHorizontalAlignment.$f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment;
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasHorizontalAlignment = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasHorizontalAlignment;
 }
 /**
  * @public
  */
 static $loadModules() {
  TextAlign = goog.module.get('org.gwtproject.dom.style.shared.TextAlign$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  HorizontalAlignmentConstant = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasHorizontalAlignment, 'org.gwtproject.user.client.ui.HasHorizontalAlignment');

HasHorizontalAlignment.$markImplementor(/** @type {Function} */ (HasHorizontalAlignment));

/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_CENTER__org_gwtproject_user_client_ui_HasHorizontalAlignment;
/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_HasHorizontalAlignment;
/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_LOCALE_START__org_gwtproject_user_client_ui_HasHorizontalAlignment;
/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_LOCALE_END__org_gwtproject_user_client_ui_HasHorizontalAlignment;
/** @private {HorizontalAlignmentConstant} */
HasHorizontalAlignment.$f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment;

exports = HasHorizontalAlignment; 
//# sourceMappingURL=HasHorizontalAlignment.js.map