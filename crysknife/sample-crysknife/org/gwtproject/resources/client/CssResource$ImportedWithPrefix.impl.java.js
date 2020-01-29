goog.module('org.gwtproject.resources.client.CssResource.ImportedWithPrefix$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ImportedWithPrefix {
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
  ImportedWithPrefix.$clinit = () =>{};
  ImportedWithPrefix.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResource_ImportedWithPrefix = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_ImportedWithPrefix;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImportedWithPrefix, 'org.gwtproject.resources.client.CssResource$ImportedWithPrefix');

ImportedWithPrefix.$markImplementor(/** @type {Function} */ (ImportedWithPrefix));

exports = ImportedWithPrefix; 
//# sourceMappingURL=CssResource$ImportedWithPrefix.js.map