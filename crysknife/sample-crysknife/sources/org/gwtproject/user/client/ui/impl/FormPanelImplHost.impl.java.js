goog.module('org.gwtproject.user.client.ui.impl.FormPanelImplHost$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class FormPanelImplHost {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_onFormSubmit__() {}
 /**
  * @abstract
  * @public
  */
 m_onFrameLoad__() {}
 /**
  * @public
  */
 static $clinit() {
  FormPanelImplHost.$clinit = () =>{};
  FormPanelImplHost.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_impl_FormPanelImplHost = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_impl_FormPanelImplHost;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FormPanelImplHost, 'org.gwtproject.user.client.ui.impl.FormPanelImplHost');

FormPanelImplHost.$markImplementor(/** @type {Function} */ (FormPanelImplHost));

exports = FormPanelImplHost; 
//# sourceMappingURL=FormPanelImplHost.js.map