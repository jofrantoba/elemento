goog.module('org.gwtproject.i18n.client.LocalizableResource.GenerateKeys$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GenerateKeys {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  GenerateKeys.$clinit = () =>{};
  GenerateKeys.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_GenerateKeys = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_GenerateKeys;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GenerateKeys, 'org.gwtproject.i18n.client.LocalizableResource$GenerateKeys');

GenerateKeys.$markImplementor(/** @type {Function} */ (GenerateKeys));

exports = GenerateKeys; 
//# sourceMappingURL=LocalizableResource$GenerateKeys.js.map