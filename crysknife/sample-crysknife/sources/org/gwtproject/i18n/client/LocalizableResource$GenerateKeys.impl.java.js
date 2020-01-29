goog.module('org.gwtproject.i18n.client.LocalizableResource.GenerateKeys$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GenerateKeys {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  GenerateKeys.$clinit = () =>{};
  GenerateKeys.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_GenerateKeys = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_GenerateKeys;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GenerateKeys, 'org.gwtproject.i18n.client.LocalizableResource$GenerateKeys');

GenerateKeys.$markImplementor(/** @type {Function} */ (GenerateKeys));

exports = GenerateKeys; 
//# sourceMappingURL=LocalizableResource$GenerateKeys.js.map