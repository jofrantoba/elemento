goog.module('org.gwtproject.i18n.client.LocalizableResource.GeneratedFrom$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GeneratedFrom {
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
  GeneratedFrom.$clinit = () =>{};
  GeneratedFrom.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_GeneratedFrom = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_GeneratedFrom;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GeneratedFrom, 'org.gwtproject.i18n.client.LocalizableResource$GeneratedFrom');

GeneratedFrom.$markImplementor(/** @type {Function} */ (GeneratedFrom));

exports = GeneratedFrom; 
//# sourceMappingURL=LocalizableResource$GeneratedFrom.js.map