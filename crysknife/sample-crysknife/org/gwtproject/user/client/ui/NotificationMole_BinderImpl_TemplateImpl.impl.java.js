goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class NotificationMole__BinderImpl__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NotificationMole__BinderImpl__TemplateImpl} */
 static $create__() {
  NotificationMole__BinderImpl__TemplateImpl.$clinit();
  let $instance = new NotificationMole__BinderImpl__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2, /** ?string */ arg3, /** ?string */ arg4) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("' id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("' style='display:none'> <div id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2));
  sb.m_append__java_lang_String("'> <span class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg3));
  sb.m_append__java_lang_String("' id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg4));
  sb.m_append__java_lang_String("'></span> </div> </div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  NotificationMole__BinderImpl__TemplateImpl.$clinit = () =>{};
  NotificationMole__BinderImpl__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationMole__BinderImpl__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(NotificationMole__BinderImpl__TemplateImpl, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl_TemplateImpl');

Template.$markImplementor(NotificationMole__BinderImpl__TemplateImpl);

exports = NotificationMole__BinderImpl__TemplateImpl; 
//# sourceMappingURL=NotificationMole_BinderImpl_TemplateImpl.js.map