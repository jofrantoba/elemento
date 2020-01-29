goog.module('org.gwtproject.user.client.ui.NamedFrame_IFrameTemplateImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IFrameTemplate = goog.require('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

/**
 * @implements {IFrameTemplate}
  */
class NamedFrame__IFrameTemplateImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NamedFrame__IFrameTemplateImpl}
  * @public
  */
 static $create__() {
  NamedFrame__IFrameTemplateImpl.$clinit();
  let $instance = new NamedFrame__IFrameTemplateImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplateImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplateImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {?string} arg0
  * @return {SafeHtml}
  * @public
  */
 m_get__java_lang_String(arg0) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("<iframe src=\"about:blank\" name='");
  sb.m_append__java_lang_String(SafeHtmlUtils.m_htmlEscape__java_lang_String(arg0));
  sb.m_append__java_lang_String("'>");
  return OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml.$create__java_lang_String(sb.toString());
 }
 /**
  * @public
  */
 static $clinit() {
  NamedFrame__IFrameTemplateImpl.$clinit = () =>{};
  NamedFrame__IFrameTemplateImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NamedFrame__IFrameTemplateImpl;
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
$Util.$setClassMetadata(NamedFrame__IFrameTemplateImpl, 'org.gwtproject.user.client.ui.NamedFrame_IFrameTemplateImpl');

IFrameTemplate.$markImplementor(NamedFrame__IFrameTemplateImpl);

exports = NamedFrame__IFrameTemplateImpl; 
//# sourceMappingURL=NamedFrame_IFrameTemplateImpl.js.map