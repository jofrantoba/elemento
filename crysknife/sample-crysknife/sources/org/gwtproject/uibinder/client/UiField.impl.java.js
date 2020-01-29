goog.module('org.gwtproject.uibinder.client.UiField$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiField {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_provided__() {}
 /**
  * @public
  */
 static $clinit() {
  UiField.$clinit = () =>{};
  UiField.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiField = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiField;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UiField, 'org.gwtproject.uibinder.client.UiField');

UiField.$markImplementor(/** @type {Function} */ (UiField));

exports = UiField; 
//# sourceMappingURL=UiField.js.map