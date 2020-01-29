goog.module('org.gwtproject.cell.client.SelectionCell_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.SelectionCell.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class SelectionCell__TemplateImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!SelectionCell__TemplateImpl}
  * @public
  */
 static $create__() {
  SelectionCell__TemplateImpl.$clinit();
  let $instance = new SelectionCell__TemplateImpl();
  $instance.$ctor__org_gwtproject_cell_client_SelectionCell_TemplateImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_cell_client_SelectionCell_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {?string} arg0
  * @return {SafeHtml}
  * @public
  */
 m_deselected__java_lang_String(arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<option value=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\">");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("</option>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @override
  * @param {?string} arg0
  * @return {SafeHtml}
  * @public
  */
 m_selected__java_lang_String(arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<option value=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\" selected=\"selected\">");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("</option>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @public
  */
 static $clinit() {
  SelectionCell__TemplateImpl.$clinit = () =>{};
  SelectionCell__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SelectionCell__TemplateImpl;
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
$Util.$setClassMetadata(SelectionCell__TemplateImpl, 'org.gwtproject.cell.client.SelectionCell_TemplateImpl');

Template.$markImplementor(SelectionCell__TemplateImpl);

exports = SelectionCell__TemplateImpl; 
//# sourceMappingURL=SelectionCell_TemplateImpl.js.map