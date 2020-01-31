goog.module('org.gwtproject.user.client.ui.ImageResourceRenderer_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.client.ui.ImageResourceRenderer.Template$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {Template}
  */
class ImageResourceRenderer__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ImageResourceRenderer__TemplateImpl} */
 static $create__() {
  ImageResourceRenderer__TemplateImpl.$clinit();
  let $instance = new ImageResourceRenderer__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_ImageResourceRenderer_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ImageResourceRenderer_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** SafeUri */ arg0, /** number */ arg1, /** number */ arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<img src='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("' border='0' width='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg1)));
  sb.m_append__java_lang_String("' height='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg2)));
  sb.m_append__java_lang_String("'>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  ImageResourceRenderer__TemplateImpl.$clinit = () =>{};
  ImageResourceRenderer__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageResourceRenderer__TemplateImpl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(ImageResourceRenderer__TemplateImpl, 'org.gwtproject.user.client.ui.ImageResourceRenderer_TemplateImpl');

Template.$markImplementor(ImageResourceRenderer__TemplateImpl);

exports = ImageResourceRenderer__TemplateImpl; 
//# sourceMappingURL=ImageResourceRenderer_TemplateImpl.js.map