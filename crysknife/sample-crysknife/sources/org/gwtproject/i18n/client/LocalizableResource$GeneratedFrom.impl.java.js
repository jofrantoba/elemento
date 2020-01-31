goog.module('org.gwtproject.i18n.client.LocalizableResource.GeneratedFrom$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class GeneratedFrom {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  GeneratedFrom.$clinit = () =>{};
  GeneratedFrom.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizableResource_GeneratedFrom = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizableResource_GeneratedFrom;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(GeneratedFrom, 'org.gwtproject.i18n.client.LocalizableResource$GeneratedFrom');

GeneratedFrom.$markImplementor(/** @type {Function} */ (GeneratedFrom));

exports = GeneratedFrom; 
//# sourceMappingURL=LocalizableResource$GeneratedFrom.js.map