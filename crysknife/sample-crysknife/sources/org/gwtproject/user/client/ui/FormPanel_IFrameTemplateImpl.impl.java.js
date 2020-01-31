goog.module('org.gwtproject.user.client.ui.FormPanel_IFrameTemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IFrameTemplate = goog.require('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {IFrameTemplate}
  */
class FormPanel__IFrameTemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!FormPanel__IFrameTemplateImpl} */
 static $create__() {
  FormPanel__IFrameTemplateImpl.$clinit();
  let $instance = new FormPanel__IFrameTemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_FormPanel_IFrameTemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_FormPanel_IFrameTemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_get__java_lang_String(/** ?string */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<iframe src=\"about:blank\" name='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("' tabindex='-1' style='position:absolute;width:0;height:0;border:0'>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  FormPanel__IFrameTemplateImpl.$clinit = () =>{};
  FormPanel__IFrameTemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormPanel__IFrameTemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(FormPanel__IFrameTemplateImpl, 'org.gwtproject.user.client.ui.FormPanel_IFrameTemplateImpl');

IFrameTemplate.$markImplementor(FormPanel__IFrameTemplateImpl);

exports = FormPanel__IFrameTemplateImpl; 
//# sourceMappingURL=FormPanel_IFrameTemplateImpl.js.map