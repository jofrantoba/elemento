goog.module('org.gwtproject.user.cellview.client.CellList_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.CellList.Template$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class CellList__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CellList__TemplateImpl} */
 static $create__() {
  CellList__TemplateImpl.$clinit();
  let $instance = new CellList__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellList_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_div__int__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** number */ arg0, /** ?string */ arg1, /** SafeHtml */ arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div __idx=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg0)));
  sb.m_append__java_lang_String("\" class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\" style=\"outline:none;\" >");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  CellList__TemplateImpl.$clinit = () =>{};
  CellList__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellList__TemplateImpl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(CellList__TemplateImpl, 'org.gwtproject.user.cellview.client.CellList_TemplateImpl');

Template.$markImplementor(CellList__TemplateImpl);

exports = CellList__TemplateImpl; 
//# sourceMappingURL=CellList_TemplateImpl.js.map