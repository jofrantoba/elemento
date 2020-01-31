goog.module('org.gwtproject.uibinder.client.UiField$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiField {
 /** @abstract @return {boolean} */
 m_provided__() {}
 
 static $clinit() {
  UiField.$clinit = () =>{};
  UiField.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiField = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiField;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiField, 'org.gwtproject.uibinder.client.UiField');

UiField.$markImplementor(/** @type {Function} */ (UiField));

exports = UiField; 
//# sourceMappingURL=UiField.js.map