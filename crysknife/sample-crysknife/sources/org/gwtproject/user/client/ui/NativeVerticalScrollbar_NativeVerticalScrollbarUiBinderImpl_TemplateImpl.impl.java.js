goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl} */
 static $create__() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl.$clinit();
  let $instance = new NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2, /** ?string */ arg3) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("'><div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("' id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2));
  sb.m_append__java_lang_String("'> <div id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg3));
  sb.m_append__java_lang_String("'></div> </div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl.$clinit = () =>{};
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl');

Template.$markImplementor(NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl);

exports = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__TemplateImpl; 
//# sourceMappingURL=NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_TemplateImpl.js.map