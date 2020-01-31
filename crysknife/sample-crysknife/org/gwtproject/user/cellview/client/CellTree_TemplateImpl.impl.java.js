goog.module('org.gwtproject.user.cellview.client.CellTree_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.CellTree.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class CellTree__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CellTree__TemplateImpl} */
 static $create__() {
  CellTree__TemplateImpl.$clinit();
  let $instance = new CellTree__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_imageWrapper__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** SafeStyles */ arg1, /** SafeHtml */ arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\" style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1.m_asString__()));
  sb.m_append__java_lang_String("position:absolute;\">");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  CellTree__TemplateImpl.$clinit = () =>{};
  CellTree__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellTree__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(CellTree__TemplateImpl, 'org.gwtproject.user.cellview.client.CellTree_TemplateImpl');

Template.$markImplementor(CellTree__TemplateImpl);

exports = CellTree__TemplateImpl; 
//# sourceMappingURL=CellTree_TemplateImpl.js.map