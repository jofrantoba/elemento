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
 /**
  * @param {?function(ValueBoxEditorDecorator<?>):Widget} fn
  * @return {Binder}
  * @public
  */
 static $adapt(fn) {
  Binder.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {Binder}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder() {
  return (Binder.$clinit(), Binder.$f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder);
 }
 /**
  * @public
  */
 static $clinit() {
  Binder.$clinit = () =>{};
  Binder.$loadModules();
  Binder.$f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder = ValueBoxEditorDecorator__BinderImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  UiBinder.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator.Binder.$LambdaAdaptor$impl');
  ValueBoxEditorDecorator__BinderImpl = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Binder, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator$Binder');

Binder.$markImplementor(/** @type {Function} */ (Binder));

/** @private {Binder} */
Binder.$f_INSTANCE__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_Binder;

exports = Binder; 
//# sourceMappingURL=ValueBoxEditorDecorator$Binder.js.map