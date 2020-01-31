goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenCss_style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class ValueBoxEditorDecorator__BinderImpl__GenCss__style {
 /** @abstract @return {?string} */
 m_contents__() {}
 /** @abstract @return {?string} */
 m_errorLabel__() {}
 
 static $clinit() {
  ValueBoxEditorDecorator__BinderImpl__GenCss__style.$clinit = () =>{};
  ValueBoxEditorDecorator__BinderImpl__GenCss__style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenCss_style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_GenCss_style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ValueBoxEditorDecorator__BinderImpl__GenCss__style, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl_GenCss_style');

ValueBoxEditorDecorator__BinderImpl__GenCss__style.$markImplementor(/** @type {Function} */ (ValueBoxEditorDecorator__BinderImpl__GenCss__style));

exports = ValueBoxEditorDecorator__BinderImpl__GenCss__style; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl_GenCss_style.js.map