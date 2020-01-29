goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_TemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {Template}
  */
class ValueBoxEditorDecorator__BinderImpl__TemplateImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!ValueBoxEditorDecorator__BinderImpl__TemplateImpl}
  * @public
  */
 static $create__() {
  ValueBoxEditorDecorator__BinderImpl__TemplateImpl.$clinit();
  let $instance = new ValueBoxEditorDecorator__BinderImpl__TemplateImpl();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_TemplateImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_TemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {?string} arg0
  * @param {?string} arg1
  * @param {?string} arg2
  * @return {SafeHtml}
  * @public
  */
 m_html1__java_lang_String__java_lang_String__java_lang_String(arg0, arg1, arg2) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<div class='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("' id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg1));
  sb.m_append__java_lang_String("'></div> <span id='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg2));
  sb.m_append__java_lang_String("'></span>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @public
  */
 static $clinit() {
  ValueBoxEditorDecorator__BinderImpl__TemplateImpl.$clinit = () =>{};
  ValueBoxEditorDecorator__BinderImpl__TemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValueBoxEditorDecorator__BinderImpl__TemplateImpl;
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
$Util.$setClassMetadata(ValueBoxEditorDecorator__BinderImpl__TemplateImpl, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_TemplateImpl');

Template.$markImplementor(ValueBoxEditorDecorator__BinderImpl__TemplateImpl);

exports = ValueBoxEditorDecorator__BinderImpl__TemplateImpl; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl_TemplateImpl.js.map