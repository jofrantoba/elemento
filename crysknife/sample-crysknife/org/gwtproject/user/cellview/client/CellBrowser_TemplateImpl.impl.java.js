goog.module('org.gwtproject.user.cellview.client.CellBrowser_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class CellBrowser__TemplateImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CellBrowser__TemplateImpl} */
 static $create__() {
  CellBrowser__TemplateImpl.$clinit();
  let $instance = new CellBrowser__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_TemplateImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {SafeHtml} */
 m_div__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ arg0, /** ?string */ arg1, /** SafeStyles */ arg2, /** SafeHtml */ arg3, /** SafeHtml */ arg4) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div __idx=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg0)));
  sb.m_append__java_lang_String("\" class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\" style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2.m_asString__()));
  sb.m_append__java_lang_String("position:relative;outline:none;\">");
  sb.m_append__java_lang_String(arg3.m_asString__());
  sb.m_append__java_lang_String("<div>");
  sb.m_append__java_lang_String(arg4.m_asString__());
  sb.m_append__java_lang_String("</div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_divFocusable__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ arg0, /** ?string */ arg1, /** SafeStyles */ arg2, /** number */ arg3, /** SafeHtml */ arg4, /** SafeHtml */ arg5) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div __idx=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg0)));
  sb.m_append__java_lang_String("\" class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\" style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2.m_asString__()));
  sb.m_append__java_lang_String("position:relative;outline:none;\" tabindex=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg3)));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg4.m_asString__());
  sb.m_append__java_lang_String("<div>");
  sb.m_append__java_lang_String(arg5.m_asString__());
  sb.m_append__java_lang_String("</div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_divFocusableWithKey__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__char__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ arg0, /** ?string */ arg1, /** SafeStyles */ arg2, /** number */ arg3, /** number */ arg4, /** SafeHtml */ arg5, /** SafeHtml */ arg6) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div __idx=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg0)));
  sb.m_append__java_lang_String("\" class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\" style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2.m_asString__()));
  sb.m_append__java_lang_String("position:relative;outline:none;\" tabindex=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__int(arg3)));
  sb.m_append__java_lang_String("\" accessKey=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(j_l_String.m_valueOf__char(arg4)));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg5.m_asString__());
  sb.m_append__java_lang_String("<div>");
  sb.m_append__java_lang_String(arg6.m_asString__());
  sb.m_append__java_lang_String("</div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /** @override @return {SafeHtml} */
 m_imageWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ arg0, /** SafeHtml */ arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:absolute;\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 
 static $clinit() {
  CellBrowser__TemplateImpl.$clinit = () =>{};
  CellBrowser__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellBrowser__TemplateImpl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(CellBrowser__TemplateImpl, 'org.gwtproject.user.cellview.client.CellBrowser_TemplateImpl');

Template.$markImplementor(CellBrowser__TemplateImpl);

exports = CellBrowser__TemplateImpl; 
//# sourceMappingURL=CellBrowser_TemplateImpl.js.map