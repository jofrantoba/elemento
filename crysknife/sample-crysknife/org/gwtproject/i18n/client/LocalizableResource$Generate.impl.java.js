goog.module('org.gwtproject.i18n.client.LocalizableResource.Generate$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Generate {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_format__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_fileName__() {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_locales__() {}
 /**
  * @public
  */
 static $clinit() {
  Generate.$clinit = () =>{};
  Generate.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_Generate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_Generate;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Generate, 'org.gwtproject.i18n.client.LocalizableResource$Generate');

Generate.$markImplementor(/** @type {Function} */ (Generate));

/** @public {?string} @const */
Generate.f_DEFAULT__org_gwtproject_i18n_client_LocalizableResource_Generate = "[default]";

exports = Generate; 
//# sourceMappingURL=LocalizableResource$Generate.js.map