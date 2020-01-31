goog.module('org.gwtproject.user.client.ui.impl.FormPanelImplHost$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class FormPanelImplHost {
 /** @abstract @return {boolean} */
 m_onFormSubmit__() {}
 /** @abstract */
 m_onFrameLoad__() {}
 
 static $clinit() {
  FormPanelImplHost.$clinit = () =>{};
  FormPanelImplHost.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_impl_FormPanelImplHost = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_impl_FormPanelImplHost;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FormPanelImplHost, 'org.gwtproject.user.client.ui.impl.FormPanelImplHost');

FormPanelImplHost.$markImplementor(/** @type {Function} */ (FormPanelImplHost));

exports = FormPanelImplHost; 
//# sourceMappingURL=FormPanelImplHost.js.map