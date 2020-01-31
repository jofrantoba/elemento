goog.module('org.gwtproject.cell.client.SafeImageCell_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.SafeImageCell.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {Template}
  */
class SafeImageCell__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeImageCell__TemplateImpl} */
 static $create__() {
  SafeImageCell__TemplateImpl.$clinit();
  let $instance = new SafeImageCell__TemplateImpl();
  $instance.$ctor__org_gwtproject_cell_client_SafeImageCell_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_cell_client_SafeImageCell_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_img__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<img src=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("\"/>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  SafeImageCell__TemplateImpl.$clinit = () =>{};
  SafeImageCell__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeImageCell__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(SafeImageCell__TemplateImpl, 'org.gwtproject.cell.client.SafeImageCell_TemplateImpl');

Template.$markImplementor(SafeImageCell__TemplateImpl);

exports = SafeImageCell__TemplateImpl; 
//# sourceMappingURL=SafeImageCell_TemplateImpl.js.map