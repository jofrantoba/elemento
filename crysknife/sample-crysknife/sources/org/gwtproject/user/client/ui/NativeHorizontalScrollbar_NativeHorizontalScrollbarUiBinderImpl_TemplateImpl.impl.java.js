goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl} */
 static $create__() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl.$clinit();
  let $instance = new NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2, /** ?string */ arg3, /** ?string */ arg4) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("'><div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("' id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2));
  sb.m_append__java_lang_String("'> <div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg3));
  sb.m_append__java_lang_String("' id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg4));
  sb.m_append__java_lang_String("'></div> </div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl.$clinit = () =>{};
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl');

Template.$markImplementor(NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl);

exports = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__TemplateImpl; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_TemplateImpl.js.map