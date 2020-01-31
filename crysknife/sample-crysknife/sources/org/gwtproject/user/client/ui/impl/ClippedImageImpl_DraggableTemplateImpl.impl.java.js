goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl_DraggableTemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DraggableTemplate = goog.require('org.gwtproject.user.client.ui.impl.ClippedImageImpl.DraggableTemplate$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {DraggableTemplate}
  */
class ClippedImageImpl__DraggableTemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ClippedImageImpl__DraggableTemplateImpl} */
 static $create__() {
  ClippedImageImpl__DraggableTemplateImpl.$clinit();
  let $instance = new ClippedImageImpl__DraggableTemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_DraggableTemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_DraggableTemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(/** SafeUri */ arg0, /** SafeStyles */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<img src='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("' style='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1.m_asString__()));
  sb.m_append__java_lang_String("' border='0' draggable='true'>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  ClippedImageImpl__DraggableTemplateImpl.$clinit = () =>{};
  ClippedImageImpl__DraggableTemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClippedImageImpl__DraggableTemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(ClippedImageImpl__DraggableTemplateImpl, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl_DraggableTemplateImpl');

DraggableTemplate.$markImplementor(ClippedImageImpl__DraggableTemplateImpl);

exports = ClippedImageImpl__DraggableTemplateImpl; 
//# sourceMappingURL=ClippedImageImpl_DraggableTemplateImpl.js.map