goog.module('org.gwtproject.uibinder.client.UiTemplate$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiTemplate {
 /** @abstract @return {?string} */
 m_value__() {}
 /** @abstract @return {boolean} */
 m_legacyWidgets__() {}
 
 static $clinit() {
  UiTemplate.$clinit = () =>{};
  UiTemplate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiTemplate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiTemplate;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiTemplate, 'org.gwtproject.uibinder.client.UiTemplate');

UiTemplate.$markImplementor(/** @type {Function} */ (UiTemplate));

exports = UiTemplate; 
//# sourceMappingURL=UiTemplate.js.map