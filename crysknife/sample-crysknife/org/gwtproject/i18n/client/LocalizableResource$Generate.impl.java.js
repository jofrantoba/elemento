goog.module('org.gwtproject.i18n.client.LocalizableResource.Generate$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Generate {
 /** @abstract @return {Array<?string>} */
 m_format__() {}
 /** @abstract @return {?string} */
 m_fileName__() {}
 /** @abstract @return {Array<?string>} */
 m_locales__() {}
 
 static $clinit() {
  Generate.$clinit = () =>{};
  Generate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_Generate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_Generate;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Generate, 'org.gwtproject.i18n.client.LocalizableResource$Generate');

Generate.$markImplementor(/** @type {Function} */ (Generate));

/**@const {?string}*/
Generate.f_DEFAULT__org_gwtproject_i18n_client_LocalizableResource_Generate = "[default]";

exports = Generate; 
//# sourceMappingURL=LocalizableResource$Generate.js.map