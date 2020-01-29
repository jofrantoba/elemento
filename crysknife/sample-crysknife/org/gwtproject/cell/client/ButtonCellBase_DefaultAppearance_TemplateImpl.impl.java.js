goog.module('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class ButtonCellBase__DefaultAppearance__TemplateImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ButtonCellBase__DefaultAppearance__TemplateImpl}
  * @public
  */
 static $create__() {
  ButtonCellBase__DefaultAppearance__TemplateImpl.$clinit();
  let $instance = new ButtonCellBase__DefaultAppearance__TemplateImpl();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_TemplateImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {?string} arg0
  * @param {SafeStyles} arg1
  * @param {SafeHtml} arg2
  * @param {SafeHtml} arg3
  * @return {SafeHtml}
  * @public
  */
 m_iconContentLayout__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(arg0, arg1, arg2, arg3) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div class=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("\" style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1.m_asString__()));
  sb.m_append__java_lang_String("position:relative;zoom:0;\">");
  sb.m_append__java_lang_String(arg2.m_asString__());
  sb.m_append__java_lang_String(arg3.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @override
  * @param {SafeStyles} arg0
  * @param {SafeHtml} arg1
  * @return {SafeHtml}
  * @public
  */
 m_iconWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(arg0, arg1) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div style=\"");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0.m_asString__()));
  sb.m_append__java_lang_String("position:absolute;top:50%;line-height:0px;\">");
  sb.m_append__java_lang_String(arg1.m_asString__());
  sb.m_append__java_lang_String("</div>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @public
  */
 static $clinit() {
  ButtonCellBase__DefaultAppearance__TemplateImpl.$clinit = () =>{};
  ButtonCellBase__DefaultAppearance__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ButtonCellBase__DefaultAppearance__TemplateImpl;
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
$Util.$setClassMetadata(ButtonCellBase__DefaultAppearance__TemplateImpl, 'org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_TemplateImpl');

Template.$markImplementor(ButtonCellBase__DefaultAppearance__TemplateImpl);

exports = ButtonCellBase__DefaultAppearance__TemplateImpl; 
//# sourceMappingURL=ButtonCellBase_DefaultAppearance_TemplateImpl.js.map