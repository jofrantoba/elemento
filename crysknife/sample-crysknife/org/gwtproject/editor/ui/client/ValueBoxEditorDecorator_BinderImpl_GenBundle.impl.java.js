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
 /**
  * @abstract
  * @return {ValueBoxEditorDecorator__BinderImpl__GenCss__style}
  * @public
  */
 m_style__() {}
 /**
  * @param {?function():ValueBoxEditorDecorator__BinderImpl__GenCss__style} fn
  * @return {ValueBoxEditorDecorator__BinderImpl__GenBundle}
  * @public
  */
 static $adapt(fn) {
  ValueBoxEditorDecorator__BinderImpl__GenBundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ValueBoxEditorDecorator__BinderImpl__GenBundle.$clinit = () =>{};
  ValueBoxEditorDecorator__BinderImpl__GenBundle.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenBundle;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ValueBoxEditorDecorator__BinderImpl__GenBundle, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenBundle');

ValueBoxEditorDecorator__BinderImpl__GenBundle.$markImplementor(/** @type {Function} */ (ValueBoxEditorDecorator__BinderImpl__GenBundle));

exports = ValueBoxEditorDecorator__BinderImpl__GenBundle; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl_GenBundle.js.map