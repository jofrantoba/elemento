goog.module('org.gwtproject.cell.client.IconCellDecorator_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.IconCellDecorator.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class IconCellDecorator__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!IconCellDecorator__TemplateImpl} */
 static $create__() {
  IconCellDecorator__TemplateImpl.$clinit();
  let $instance = new IconCellDecorator__TemplateImpl();
  $instance.$ctor__org_gwtproject_cell_client_IconCellDecorator_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_IconCellDecorator_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ arg0, /** SafeHtml */ arg1, /** SafeHtml */ arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:relative;zoom:1;\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("<div>");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("</div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_imageWrapperBottom__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ arg0, /** SafeHtml */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:absolute;bottom:0px;line-height:0px;\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_imageWrapperMiddle__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ arg0, /** SafeHtml */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:absolute;top:50%;line-height:0px;\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_imageWrapperTop__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ arg0, /** SafeHtml */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:absolute;top:0px;line-height:0px;\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  IconCellDecorator__TemplateImpl.$clinit = () =>{};
  IconCellDecorator__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconCellDecorator__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(IconCellDecorator__TemplateImpl, 'org.gwtproject.cell.client.IconCellDecorator_TemplateImpl');

Template.$markImplementor(IconCellDecorator__TemplateImpl);

exports = IconCellDecorator__TemplateImpl; 
//# sourceMappingURL=IconCellDecorator_TemplateImpl.js.map