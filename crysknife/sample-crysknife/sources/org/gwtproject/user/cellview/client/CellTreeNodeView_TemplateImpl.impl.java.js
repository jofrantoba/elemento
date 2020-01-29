goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.cellview.client.CellTreeNodeView.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class CellTreeNodeView__TemplateImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CellTreeNodeView__TemplateImpl}
  * @public
  */
 static $create__() {
  CellTreeNodeView__TemplateImpl.$clinit();
  let $instance = new CellTreeNodeView__TemplateImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_TemplateImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTreeNodeView_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {SafeStyles} arg0
  * @param {?string} arg1
  * @param {SafeHtml} arg2
  * @param {?string} arg3
  * @param {SafeHtml} arg4
  * @return {SafeHtml}
  * @public
  */
 m_innerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(arg0, arg1, arg2, arg3, arg4) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:relative;\" class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("<div class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg3));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg4.m_asString__());
  sb.m_append__java_lang_String("</div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @override
  * @param {SafeStyles} arg0
  * @param {?string} arg1
  * @param {SafeHtml} arg2
  * @param {?string} arg3
  * @return {SafeHtml}
  * @public
  */
 m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(arg0, arg1, arg2, arg3) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div aria-selected=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg3));
  sb.m_append__java_lang_String("\"><div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("\" class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String("</div></div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @public
  */
 static $clinit() {
  CellTreeNodeView__TemplateImpl.$clinit = () =>{};
  CellTreeNodeView__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellTreeNodeView__TemplateImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.module.get('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(CellTreeNodeView__TemplateImpl, 'org.gwtproject.user.cellview.client.CellTreeNodeView_TemplateImpl');

Template.$markImplementor(CellTreeNodeView__TemplateImpl);

exports = CellTreeNodeView__TemplateImpl; 
//# sourceMappingURL=CellTreeNodeView_TemplateImpl.js.map