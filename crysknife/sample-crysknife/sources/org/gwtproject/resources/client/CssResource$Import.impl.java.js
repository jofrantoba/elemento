goog.module('org.gwtproject.resources.client.CssResource.Import$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Import {
 /** @abstract @return {Array<Class<?>>} */
 m_value__() {}
 
 static $clinit() {
  Import.$clinit = () =>{};
  Import.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource_Import = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_Import;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Import, 'org.gwtproject.resources.client.CssResource$Import');

Import.$markImplementor(/** @type {Function} */ (Import));

exports = Import; 
//# sourceMappingURL=CssResource$Import.js.map