goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle.$LambdaAdaptor$impl');
let ValueBoxEditorDecorator__BinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenCss_style$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class ValueBoxEditorDecorator__BinderImpl__GenBundle {
 /** @abstract @return {ValueBoxEditorDecorator__BinderImpl__GenCss__style} */
 m_style__() {}
 /** @return {ValueBoxEditorDecorator__BinderImpl__GenBundle} */
 static $adapt(/** ?function():ValueBoxEditorDecorator__BinderImpl__GenCss__style */ fn) {
  ValueBoxEditorDecorator__BinderImpl__GenBundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ValueBoxEditorDecorator__BinderImpl__GenBundle.$clinit = () =>{};
  ValueBoxEditorDecorator__BinderImpl__GenBundle.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundle;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ValueBoxEditorDecorator__BinderImpl__GenBundle, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle');

ValueBoxEditorDecorator__BinderImpl__GenBundle.$markImplementor(/** @type {Function} */ (ValueBoxEditorDecorator__BinderImpl__GenBundle));

exports = ValueBoxEditorDecorator__BinderImpl__GenBundle; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl_GenBundle.js.map