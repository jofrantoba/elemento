goog.module('org.gwtproject.resources.client.CssResource.ImportedWithPrefix$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ImportedWithPrefix {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  ImportedWithPrefix.$clinit = () =>{};
  ImportedWithPrefix.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource_ImportedWithPrefix = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_ImportedWithPrefix;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImportedWithPrefix, 'org.gwtproject.resources.client.CssResource$ImportedWithPrefix');

ImportedWithPrefix.$markImplementor(/** @type {Function} */ (ImportedWithPrefix));

exports = ImportedWithPrefix; 
//# sourceMappingURL=CssResource$ImportedWithPrefix.js.map