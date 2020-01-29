goog.module('org.gwtproject.uibinder.client.UiTemplate$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiTemplate {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_value__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_legacyWidgets__() {}
 /**
  * @public
  */
 static $clinit() {
  UiTemplate.$clinit = () =>{};
  UiTemplate.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiTemplate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiTemplate;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiTemplate, 'org.gwtproject.uibinder.client.UiTemplate');

UiTemplate.$markImplementor(/** @type {Function} */ (UiTemplate));

exports = UiTemplate; 
//# sourceMappingURL=UiTemplate.js.map