goog.module('org.gwtproject.user.cellview.client.AbstractCellTable_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.AbstractCellTable.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class AbstractCellTable__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AbstractCellTable__TemplateImpl} */
 static $create__() {
  AbstractCellTable__TemplateImpl.$clinit();
  let $instance = new AbstractCellTable__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_div__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"outline:none;\">");
  sb.m_append__java_lang_String(arg0.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_tbody__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<table><tbody>");
  sb.m_append__java_lang_String(arg0.m_asString__());
  sb.m_append__java_lang_String("</tbody></table>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_td__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** SafeHtml */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<td class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</td>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_tdBothAlign__java_lang_String__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2, /** SafeHtml */ arg3) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<td class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\" align=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\" valign=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg3.m_asString__());
  sb.m_append__java_lang_String("</td>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_tdHorizontalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** ?string */ arg1, /** SafeHtml */ arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<td class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\" align=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("</td>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_tdVerticalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** ?string */ arg1, /** SafeHtml */ arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<td class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\" valign=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("</td>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_tfoot__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<table><tfoot>");
  sb.m_append__java_lang_String(arg0.m_asString__());
  sb.m_append__java_lang_String("</tfoot></table>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_thead__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<table><thead>");
  sb.m_append__java_lang_String(arg0.m_asString__());
  sb.m_append__java_lang_String("</thead></table>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_tr__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0, /** SafeHtml */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<tr class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</tr>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  AbstractCellTable__TemplateImpl.$clinit = () =>{};
  AbstractCellTable__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractCellTable__TemplateImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(AbstractCellTable__TemplateImpl, 'org.gwtproject.user.cellview.client.AbstractCellTable_TemplateImpl');

Template.$markImplementor(AbstractCellTable__TemplateImpl);

exports = AbstractCellTable__TemplateImpl; 
//# sourceMappingURL=AbstractCellTable_TemplateImpl.js.map