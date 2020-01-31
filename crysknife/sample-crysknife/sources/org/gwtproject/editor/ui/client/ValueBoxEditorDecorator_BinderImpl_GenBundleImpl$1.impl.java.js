goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBoxEditorDecorator__BinderImpl__GenCss__style = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenCss_style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let ValueBoxEditorDecorator__BinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl$impl');

/**
 * @implements {ValueBoxEditorDecorator__BinderImpl__GenCss__style}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ValueBoxEditorDecorator__BinderImpl__GenBundleImpl}*/
  this.f_$outer_this__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl(/** ValueBoxEditorDecorator__BinderImpl__GenBundleImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl(/** ValueBoxEditorDecorator__BinderImpl__GenBundleImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "style";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1_) {
   this.f_injected__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundleImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return ".JGPSNOB-d-a{display:inline}.JGPSNOB-d-b{display:none;white-space:pre}";
 }
 /** @override @return {?string} */
 m_contents__() {
  return "JGPSNOB-d-a";
 }
 /** @override @return {?string} */
 m_errorLabel__() {
  return "JGPSNOB-d-b";
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundleImpl$1');

ValueBoxEditorDecorator__BinderImpl__GenCss__style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl_GenBundleImpl$1.js.map