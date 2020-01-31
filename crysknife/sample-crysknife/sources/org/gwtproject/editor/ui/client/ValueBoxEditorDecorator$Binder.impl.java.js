goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const UiBinder = goog.require('org.gwtproject.uibinder.client.UiBinder$impl');

let ValueBoxEditorDecorator = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder.$LambdaAdaptor$impl');
let ValueBoxEditorDecorator__BinderImpl = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 * @extends {UiBinder<Widget, ValueBoxEditorDecorator<?>>}
 */
class Binder {
 /** @return {Binder} */
 static $adapt(/** ?function(ValueBoxEditorDecorator<?>):Widget */ fn) {
  Binder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Binder} */
 static get f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder() {
  return (Binder.$clinit(), Binder.$f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder);
 }
 
 static $clinit() {
  Binder.$clinit = () =>{};
  Binder.$loadModules();
  Binder.$f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder = ValueBoxEditorDecorator__BinderImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  UiBinder.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder.$LambdaAdaptor$impl');
  ValueBoxEditorDecorator__BinderImpl = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Binder, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$Binder');

Binder.$markImplementor(/** @type {Function} */ (Binder));

/**@private {Binder}*/
Binder.$f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder;

exports = Binder; 
//# sourceMappingURL=ValueBoxEditorDecorator$Binder.js.map